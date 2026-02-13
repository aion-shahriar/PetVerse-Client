import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";

const ListingDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [listing, setListing] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch single listing
  useEffect(() => {
    fetch(`https://your-server-url/listings/${id}`)
      .then((res) => res.json())
      .then((data) => setListing(data));
  }, [id]);

  // Handle Order Submit
  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const orderData = {
      productId: listing._id,
      productName: listing.name,
      buyerName: user?.displayName,
      email: user?.email,
      quantity:
        listing.category === "Pets"
          ? 1
          : Number(form.quantity.value),
      price: listing.price,
      address: form.address.value,
      date: form.date.value,
      phone: form.phone.value,
      additionalNotes: form.notes.value,
    };

    try {
      const res = await fetch(
        "https://your-server-url/orders",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(orderData),
        }
      );

      const data = await res.json();

      if (data.insertedId) {
        toast.success("Order placed successfully!");
        setShowModal(false);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  if (!listing)
    return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      {/* Details Section */}
      <div className="grid md:grid-cols-2 gap-10">

        <img
          src={listing.image}
          alt={listing.name}
          className="rounded-2xl shadow-lg w-full object-cover"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">
            {listing.name}
          </h2>

          <p><strong>Category:</strong> {listing.category}</p>
          <p><strong>Owner Email:</strong> {listing.email}</p>
          <p><strong>Location:</strong> {listing.location}</p>

          <p className="my-3">
            <strong>Price:</strong>{" "}
            {listing.price === 0
              ? "Free for Adoption"
              : `৳ ${listing.price}`}
          </p>

          <p className="text-gray-600 mb-6">
            {listing.description}
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="bg-primary text-white px-6 py-3 rounded-lg"
          >
            Adopt / Order Now
          </button>
        </div>
      </div>

      {/* Modal Section */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-2xl w-full max-w-xl">
            <h3 className="text-2xl font-bold mb-6">
              Order Form
            </h3>

            <form onSubmit={handleOrderSubmit} className="space-y-4">

              {/* Buyer Name */}
              <input
                type="text"
                value={user?.displayName || ""}
                readOnly
                className="w-full border p-2 rounded bg-gray-100"
              />

              {/* Email */}
              <input
                type="email"
                value={user?.email || ""}
                readOnly
                className="w-full border p-2 rounded bg-gray-100"
              />

              {/* Product ID */}
              <input
                type="text"
                value={listing._id}
                readOnly
                className="w-full border p-2 rounded bg-gray-100"
              />

              {/* Product Name */}
              <input
                type="text"
                value={listing.name}
                readOnly
                className="w-full border p-2 rounded bg-gray-100"
              />

              {/* Quantity */}
              <input
                type="number"
                name="quantity"
                defaultValue={1}
                min="1"
                disabled={listing.category === "Pets"}
                className="w-full border p-2 rounded"
              />

              {/* Price */}
              <input
                type="text"
                value={
                  listing.price === 0
                    ? "Free for Adoption"
                    : `৳ ${listing.price}`
                }
                readOnly
                className="w-full border p-2 rounded bg-gray-100"
              />

              {/* Address */}
              <input
                type="text"
                name="address"
                placeholder="Address"
                required
                className="w-full border p-2 rounded"
              />

              {/* Date */}
              <input
                type="date"
                name="date"
                required
                className="w-full border p-2 rounded"
              />

              {/* Phone */}
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                required
                className="w-full border p-2 rounded"
              />

              {/* Notes */}
              <textarea
                name="notes"
                placeholder="Additional Notes"
                className="w-full border p-2 rounded"
              ></textarea>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-2 bg-primary text-white rounded"
                >
                  Confirm Order
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListingDetails;