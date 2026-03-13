import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const UpdateListing = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [listing, setListing] = useState({
    name: "",
    category: "",
    price: "",
    location: "",
    image: "",
    description: ""
  });
  const [loading, setLoading] = useState(true);

  // Fetch existing listing data
  useEffect(() => {
    fetch(`https://petverse-server.vercel.app/listings/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setListing(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching listing:', error);
        toast.error("Failed to load listing data!");
        setLoading(false);
      });
  }, [id]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Create update data without _id field
      const updateData = {
        name: listing.name,
        category: listing.category,
        price: listing.price,
        location: listing.location,
        image: listing.image,
        description: listing.description
      };

      const res = await fetch(`https://petverse-server.vercel.app/listings/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      const data = await res.json();

      if (data.modifiedCount > 0) {
        toast.success("Listing updated successfully!");
        navigate("/my-listings");
      } else {
        toast.info("No changes were made to the listing.");
      }
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Failed to update listing!");
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setListing((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Update Listing</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-2">Pet/Product Name</label>
          <input
            type="text"
            name="name"
            value={listing.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium mb-2">Category</label>
          <select
            name="category"
            value={listing.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          >
            <option value="">Select Category</option>
            <option value="Pets">Pets</option>
            <option value="Food">Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Care Products">Care Products</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium mb-2">Price (৳)</label>
          <input
            type="number"
            name="price"
            value={listing.price}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            min="0"
            required
          />
          <p className="text-sm text-gray-500 mt-1">Enter 0 for free adoption</p>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={listing.location}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium mb-2">Image URL</label>
          <input
            type="url"
            name="image"
            value={listing.image}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            name="description"
            value={listing.description}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Update Listing
          </button>
          <button
            type="button"
            onClick={() => navigate("/my-listings")}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateListing;