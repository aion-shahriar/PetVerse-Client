import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const AddListing = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [category, setCategory] = useState("Pets");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const newListing = {
      name: form.name.value,
      category: form.category.value,
      price: form.category.value === "Pets" ? 0 : Number(form.price.value),
      location: form.location.value,
      description: form.description.value,
      image: form.image.value,
      date: form.date.value,
      email: user?.email,
    };

    try {
      const res = await fetch("https://localhost:3000/listings", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newListing),
      });

      const data = await res.json();

      if (data.insertedId) {
        toast.success("Listing added successfully!");
        form.reset();
        navigate("/my-listings");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Add New Listing
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white shadow-lg p-8 rounded-2xl"
      >
        {/* Name */}
        <div>
          <label className="block font-medium mb-2">
            Product / Pet Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium mb-2">
            Category
          </label>
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded-lg px-4 py-2"
          >
            <option>Pets</option>
            <option>Food</option>
            <option>Accessories</option>
            <option>Care Products</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium mb-2">
            Price
          </label>
          <input
            type="number"
            name="price"
            disabled={category === "Pets"}
            defaultValue={category === "Pets" ? 0 : ""}
            className="w-full border rounded-lg px-4 py-2"
          />
          {category === "Pets" && (
            <p className="text-sm text-gray-500 mt-1">
              Pets are free for adoption (Price = 0)
            </p>
          )}
        </div>

        {/* Location */}
        <div>
          <label className="block font-medium mb-2">
            Location
          </label>
          <input
            type="text"
            name="location"
            required
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-2">
            Description
          </label>
          <textarea
            name="description"
            rows="4"
            required
            className="w-full border rounded-lg px-4 py-2"
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-medium mb-2">
            Image URL
          </label>
          <input
            type="url"
            name="image"
            required
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block font-medium mb-2">
            Pick Up Date
          </label>
          <input
            type="date"
            name="date"
            required
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Email (readonly) */}
        <div>
          <label className="block font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="w-full border rounded-lg px-4 py-2 bg-gray-100"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          Add Listing
        </button>
      </form>
    </div>
  );
};

export default AddListing;