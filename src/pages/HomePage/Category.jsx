import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();

  const categoryData = [
    { name: "Pets", label: "🐶 Pets (Adoption)" },
    { name: "Pet Food", label: "🍖 Pet Food" },
    { name: "Accessories", label: "🧸 Accessories" },
    { name: "Care Products", label: "💊 Pet Care Products" },
  ];

  return (
    <div className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Browse by Category
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoryData.map((category) => (
          <div
            key={category.name}
            onClick={() =>
              navigate(
                `/category-filtered-product/${category.name}`
              )
            }
            className="cursor-pointer bg-white shadow-md rounded-2xl p-8 text-center hover:shadow-xl transition hover:-translate-y-2"
          >
            <h3 className="text-lg font-semibold">
              {category.label}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
