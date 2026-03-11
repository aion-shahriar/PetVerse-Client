const petHeroes = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Dog Rescuer",
    image: "https://i.ibb.co/7pGdC8X/person1.jpg",
    story:
      "Sarah has rescued and adopted more than 10 stray dogs and helps them find loving homes.",
  },
  {
    id: 2,
    name: "Tanvir Hasan",
    role: "Pet Care Volunteer",
    image: "https://i.ibb.co/7Rk9j5Y/person2.jpg",
    story:
      "Tanvir volunteers at local shelters and provides food and medical care for abandoned pets.",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    role: "Cat Adopter",
    image: "https://i.ibb.co/fD8zQYB/person3.jpg",
    story:
      "Nusrat believes every pet deserves love and has adopted 3 rescued cats from PawMart.",
  },
  {
    id: 4,
    name: "Imran Hossain",
    role: "Animal Welfare Advocate",
    image: "https://i.ibb.co/ZGZyG5F/person4.jpg",
    story:
      "Imran spreads awareness about pet adoption and responsible pet care in his community.",
  },
];

const PetHeroes = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Meet Our Pet Heroes
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            These amazing people are making a difference in the lives of pets by adopting,
            rescuing, and caring for animals in need.
          </p>
        </div>

        {/* Heroes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {petHeroes.map((hero) => (
            <div
              key={hero.id}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <img
                src={hero.image}
                alt={hero.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />

              <h3 className="text-lg font-semibold">{hero.name}</h3>

              <p className="text-primary text-sm mb-2">
                {hero.role}
              </p>

              <p className="text-gray-600 text-sm">
                {hero.story}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PetHeroes;