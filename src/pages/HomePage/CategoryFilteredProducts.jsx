import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CategoryFilteredProducts = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      `https://your-server-url/listings?category=${categoryName}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [categoryName]);

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">
        {categoryName}
      </h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">
          No listings found.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
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

export default CategoryFilteredProducts;