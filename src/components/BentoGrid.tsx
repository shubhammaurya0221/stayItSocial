import { useState } from "react";
import {
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

// Data
const caseStudies = [
  {
    id: 1,
    brand: "Cricstudioinc",
    category: "Sports Content",
    platforms: ["instagram"],
    metric: "Community Built",
  },
  {
    id: 2,
    brand: "Shiva Optics Plus",
    category: "Premium Eyewear",
    platforms: ["instagram"],
    metric: "Brand Elevated",
  },
  {
    id: 3,
    brand: "Shiva Enterprise",
    category: "E-commerce",
    platforms: ["instagram"],
    metric: "Modern Strategy",
  },
  {
    id: 4,
    brand: "The Quick Craft",
    category: "AI & VR Solutions",
    platforms: ["instagram"],
    metric: "Innovation Driven",
  },
  {
    id: 5,
    brand: "Dronagiri Herbal",
    category: "Skincare & Haircare",
    platforms: ["instagram"],
    metric: "100% Herbal",
  },
  {
    id: 6,
    brand: "Kalon Ethnic",
    category: "Fashion & Lifestyle",
    platforms: ["instagram"],
    metric: "Traditional Meets Modern",
  },
];

const platformIcons = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  twitter: Twitter,
};

export default function BentoGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-6 text-white">
            Portfolio <span className="text-teal">Highlights</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {caseStudies.map((study, index) => {
            const isHovered = hoveredId === study.id;

            const gridClass =
              index === 0
                ? "md:col-span-7"
                : index === 1
                  ? "md:col-span-5"
                  : index === 2
                    ? "md:col-span-5"
                    : index === 3
                      ? "md:col-span-7"
                      : "md:col-span-6";

            const xOffset = index % 2 === 0 ? -50 : 50;

            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, x: xOffset }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group relative ${gridClass} min-h-[320px] cursor-pointer`}
                onMouseEnter={() => setHoveredId(study.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Premium Card */}
                <div
                  className={`
                  relative h-full w-full rounded-3xl
                  border border-white/10
                  backdrop-blur-xl
                  overflow-hidden
                  p-6 md:p-10
                  flex flex-col justify-between
                  transition-all duration-500
                  bg-[linear-gradient(135deg,rgba(255,255,255,0.12)_0%,rgba(4,170,165,0.08)_30%,rgba(0,0,0,0.65)_100%)]
                  ${isHovered ? "scale-[1.02] border-teal/40 shadow-[0_0_50px_rgba(4,170,165,0.25)]" : ""}
                `}
                >
                  {/* Top Light */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent opacity-40 pointer-events-none" />

                  {/* Glass Shine */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.25)_50%,transparent_80%)]" />

                  {/* Aura */}
                  <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-teal/20 to-gold/10 rounded-full blur-[120px] opacity-40 group-hover:opacity-60 transition duration-700" />

                  {/* Top Content */}
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex gap-2">
                        {study.platforms.map((platform) => {
                          const Icon = platformIcons[platform];
                          return (
                            <div
                              key={platform}
                              className="w-10 h-10 rounded-xl bg-black/30 flex items-center justify-center border border-white/10 backdrop-blur-md"
                            >
                              <Icon className="w-5 h-5 text-gray-300" />
                            </div>
                          );
                        })}
                      </div>

                      <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] uppercase tracking-widest text-gray-400 border border-white/10 font-bold">
                        {study.category}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                      {study.brand}
                    </h3>
                  </div>

                  {/* Bottom */}
                  <div className="relative z-10 flex items-end justify-between mt-8">
                    <div>
                      <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-1 font-bold">
                        Core Impact
                      </p>
                      <span className="text-gold font-bold text-xl md:text-2xl">
                        {study.metric}
                      </span>
                    </div>

                    <div
                      className={`
                        relative w-12 h-12 rounded-2xl
                        bg-gradient-to-br from-teal to-gold
                        flex items-center justify-center
                        transition-all duration-500
                    
                        shadow-[0_0_10px_rgba(4,170,165,0.4)]
                        group-hover:shadow-[0_0_25px_rgba(251,176,64,0.6)]
                    
                        before:absolute before:inset-0
                        before:rounded-2xl
                        before:bg-white/10
                        before:opacity-0
                        before:transition-all before:duration-500
                        group-hover:before:opacity-100
                    
                        after:absolute after:-inset-2
                        after:rounded-3xl
                        after:bg-gradient-to-br after:from-teal/40 after:to-gold/40
                        after:blur-lg after:opacity-0
                        after:transition-all after:duration-500
                        group-hover:after:opacity-70
                    
                        ${isHovered ? "rotate-0 scale-110" : "-rotate-45 scale-90 opacity-0"}
                      `}
                    >
                      <ArrowUpRight className="w-6 h-6 text-black drop-shadow-[0_0_6px_rgba(251,176,64,0.8)]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
