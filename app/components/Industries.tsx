import { industries } from "../data/industries";

export function Industries() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">حوزه فعالیت ما در صنایع</h2>

        <div className="grid grid-cols-2 justify-center md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="industry-card rounded-lg overflow-hidden cursor-pointer relative group"
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-48 object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 " />
              <div className="absolute bottom-4 right-4 text-white font-bold z-10">
                {industry.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

