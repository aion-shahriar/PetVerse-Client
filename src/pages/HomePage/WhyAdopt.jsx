// WhyAdopt.jsx
import React from "react";

const reasons = [
  {
    icon: "🐶",
    title: "Give Pets a Loving Home",
    description:
      "Every rescued pet deserves a second chance. Adoption provides them a safe and loving environment.",
  },
  {
    icon: "💖",
    title: "Support Ethical Practices",
    description:
      "Adopting reduces the demand for breeders and puppy mills, promoting ethical pet care.",
  },
  {
    icon: "🌱",
    title: "Save Money & Space",
    description:
      "Adopting is often less expensive than buying, and you help reduce overpopulation in shelters.",
  },
  {
    icon: "😊",
    title: "Gain a Loyal Friend",
    description:
      "Adopted pets are incredibly grateful and form a unique, loving bond with their owners.",
  },
];

const WhyAdopt = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Why Adopt from PawMart?</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Rescuing and adopting pets instead of buying is not just ethical — it saves
          lives and creates happy families. Here’s why you should choose adoption:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-500">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAdopt;
