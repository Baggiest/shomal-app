import { certifications } from "../data/certifications";

export function Certifications() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#dce9f5] to-[#f0f4f8]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div key={cert.id} className="cert-card text-center">
              <h3 className="text-[#383e42] font-bold text-lg mb-4">{cert.title}</h3>
              <p className="text-sm text-[#6d6b64] leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

