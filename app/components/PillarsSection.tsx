import { CheckCircle2, Sprout, Building2 } from 'lucide-react';

export function PillarsSection() {
  return (
    <section className="bg-brand-forest text-white py-24 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-16">
          <span className="inline-block border border-brand-lime/30 text-brand-lime text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
            Our Core Focus
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-3xl">
            PK Synergy Solutions stands on two strong pillars
          </h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Pillar 1: Agriculture */}
          <div className="bg-[#124B35] rounded-3xl p-8 md:p-10 border border-white/5 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-brand-forest/50 p-3 rounded-2xl border border-white/10">
                <Sprout className="w-8 h-8 text-brand-lime" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
                Agriculture & Estate Management
              </h3>
            </div>
            
            <p className="text-white/80 text-sm md:text-base mb-10 leading-relaxed max-w-md">
              Ensuring productivity, sustainability, and long-term value through modern farming practices and strategic oversight.
            </p>

            <ul className="space-y-4">
              {[
                "Estate oversight and day-to-day operations",
                "Smart irrigation and water resource management",
                "Sustainable cultivation (eco-friendly fertilization, crop rotation, harvesting)",
                "Precision farming tools (drones, sensors, IoT)",
                "Data-driven decision support systems and digital dashboards",
                "Long-term growth planning, investment strategies, and risk management"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pillar 2: Construction */}
          <div className="bg-[#124B35] rounded-3xl p-8 md:p-10 border border-white/5 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-brand-forest/50 p-3 rounded-2xl border border-white/10">
                <Building2 className="w-8 h-8 text-brand-lime" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
                Construction & Infrastructure Development
              </h3>
            </div>
            
            <p className="text-white/80 text-sm md:text-base mb-10 leading-relaxed max-w-md">
              Building the physical foundation estates need to thrive, from irrigation systems to housing and processing facilities.
            </p>

            <ul className="space-y-4">
              {[
                "Construction of estate buildings, housing, and worker facilities",
                "Roads, bridges, and irrigation systems",
                "Smart home management system",
                "Renewable energy integration (solar, biogas, etc.)",
                "Sustainable construction practices aligned with ecological stewardship"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
