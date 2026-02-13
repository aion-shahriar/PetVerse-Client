import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [listings, setListings] = useState([]);

  // Load only user's listings
  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://your-server-url/listings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setListings(data));
  }, [user]);

  // Delete listing
  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this listing?"
    );

    if (!confirm) return;

    try {
      const res = await fetch(
        `https://your-server-url/listings/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (data.deletedCount > 0) {
        toast.success("Listing deleted successfully!");

        setListings((prev) =>
          prev.filter((item) => item._id !== id)
        );
      }
    } catch (error) {
      toast.error("Delete failed!");
    }
  };

  return (
    <div className="px-6 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        My Listings
      </h2>

      {listings.length === 0 ? (
        <p className="text-center text-gray-500">
          You have not added any listings yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {listings.map((item) => (
                <tr key={item._id}>
                  {/* Image */}
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>

                  {/* Name */}
                  <td>{item.name}</td>

                  {/* Category */}
                  <td>{item.category}</td>

                  {/* Price */}
                  <td>
                    {item.price === 0
                      ? "Free"
                      : `৳ ${item.price}`}
                  </td>

                  {/* Location */}
                  <td>{item.location}</td>

                  {/* Actions */}
                  <td className="space-x-2">
                    {/* Update */}
                    <Link to={`/update-listing/${item._id}`}>
                      <button className="btn btn-sm btn-info">
                        Update
                      </button>
                    </Link>

                    {/* Delete */}
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyListings;