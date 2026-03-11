import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecentListings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/latest-listings")
      .then((res) => res.json())
      .then((data) => setListings(data));
  }, []);

  return (
    <div className="py-16 px-6 bg-base-100 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        Recent Listings
      </h2>

      {listings.length === 0 ? (
        <p className="text-center text-gray-500">
          No listings available.
        </p>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-5 space-y-2">
                <h3 className="text-xl font-semibold">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.category}
                </p>

                <p className="text-sm text-gray-500">
                  📍 {item.location}
                </p>

                <p className="font-bold">
                  {item.price === 0
                    ? "Free for Adoption"
                    : `৳ ${item.price}`}
                </p>

                <Link
                  to={`/listing-details/${item._id}`}
                  className="inline-block mt-3 bg-primary text-white px-4 py-2 rounded"
                >
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentListings;
