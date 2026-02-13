import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PetsSupplies = () => {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [category, setCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  // Fetch all listings
  useEffect(() => {
    fetch("https://your-server-url/listings")
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
        setFilteredListings(data);
      });
  }, []);

  // Filter + Search logic
  useEffect(() => {
    let result = listings;

    if (category !== "All") {
      result = result.filter(
        (item) => item.category === category
      );
    }

    if (searchText) {
      result = result.filter((item) =>
        item.name
          .toLowerCase()
          .includes(searchText.toLowerCase())
      );
    }

    setFilteredListings(result);
  }, [category, searchText, listings]);

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">

      <h2 className="text-3xl font-bold mb-8 text-center">
        Pets & Supplies
      </h2>

      {/* Filter + Search Section */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-10">

        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option value="All">All Categories</option>
          <option value="Pets">Pets</option>
          <option value="Food">Food</option>
          <option value="Accessories">Accessories</option>
          <option value="Care Products">Care Products</option>
        </select>

        {/* Search */}
        <input
          type="text"
          placeholder="Search by name..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-80"
        />
      </div>

      {/* Listings Grid */}
      {filteredListings.length === 0 ? (
        <p className="text-center text-gray-500">
          No listings found.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredListings.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-md rounded-2xl overflow-hidden"
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

export default PetsSupplies;