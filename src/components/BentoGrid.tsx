import { useState } from "react";
import {
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

// 1. Data Definitions
const caseStudies = [
  {
    id: 1,
    brand: "Cricstudioinc",
    category: "Sports Content",
    platforms: ["instagram"],
    metric: "Community Built",
    gradient: "from-teal/20 to-gold/20",
  },
  {
    id: 2,
    brand: "Shiva Optics Plus",
    category: "Premium Eyewear",
    platforms: ["instagram"],
    metric: "Brand Elevated",
    gradient: "from-gold/20 to-teal/20",
  },
  {
    id: 3,
    brand: "Shiva Enterprise",
    category: "E-commerce",
    platforms: ["instagram"],
    metric: "Modern Strategy",
    gradient: "from-teal/30 to-transparent",
  },
  {
    id: 4,
    brand: "The Quick Craft",
    category: "AI & VR Solutions",
    platforms: ["instagram"],
    metric: "Innovation Driven",
    gradient: "from-gold/30 to-transparent",
  },
  {
    id: 5,
    brand: "Dronagiri Herbal",
    category: "Skincare & Haircare",
    platforms: ["instagram"],
    metric: "100% Herbal",
    gradient: "from-teal/20 to-gold/10",
  },
  {
    id: 6,
    brand: "Kalon Ethnic",
    category: "Fashion & Lifestyle",
    platforms: ["instagram"],
    metric: "Traditional Meets Modern",
    gradient: "from-gold/20 to-teal/10",
  },
];

const platformIcons = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  twitter: Twitter,
};

// 2. Main Component
export default function BentoGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
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
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Campaigns that transformed brands into social powerhouses
          </p>
        </motion.div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {caseStudies.map((study, index) => {
            const isHovered = hoveredId === study.id;

            /**
             * GRID LOGIC: 
             * Row 1: Item 0 (7 cols), Item 1 (5 cols)
             * Row 2: Item 2 (5 cols), Item 3 (7 cols)
             * Row 3: Item 4 (6 cols), Item 5 (6 cols)
             */
            const gridClass =
              index === 0 ? "md:col-span-7" : 
              index === 1 ? "md:col-span-5" : 
              index === 2 ? "md:col-span-5" : 
              index === 3 ? "md:col-span-7" : 
              "md:col-span-6";

            // Reveal Animation Direction
            const xOffset = index % 2 === 0 ? -50 : 50;

            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, x: xOffset }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className={`group relative ${gridClass} min-h-[320px] cursor-pointer`}
                onMouseEnter={() => setHoveredId(study.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className={`
                    h-full w-full rounded-3xl bg-gradient-to-br ${study.gradient}
                    border border-white/5 p-6 md:p-10
                    transition-all duration-500 ease-out
                    ${isHovered ? "scale-[1.01] border-teal/40 shadow-[0_0_40px_rgba(4,170,165,0.15)]" : ""}
                    backdrop-blur-sm flex flex-col justify-between overflow-hidden
                  `}
                >
                  {/* Top Layer: Icons and Category */}
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex gap-2">
                        {study.platforms.map((platform) => {
                          const Icon = platformIcons[platform as keyof typeof platformIcons];
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

                    <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight leading-tight max-w-[90%]">
                      {study.brand}
                    </h3>
                  </div>

                  {/* Bottom Layer: Metrics and CTA */}
                  <div className="relative z-10 flex items-end justify-between mt-8">
                    <div>
                      <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-1 font-bold">
                        Core Impact
                      </p>
                      <span className="text-gold font-bold text-xl md:text-2xl drop-shadow-sm">
                        {study.metric}
                      </span>
                    </div>

                    <div
                      className={`
                        w-12 h-12 rounded-2xl bg-gradient-to-br from-teal to-gold
                        flex items-center justify-center transition-all duration-500
                        ${isHovered ? "rotate-0 scale-110" : "-rotate-45 scale-90 opacity-0"}
                      `}
                    >
                      <ArrowUpRight className="w-6 h-6 text-black" />
                    </div>
                  </div>

                  {/* Decorative Background Orb */}
                  <div className="absolute -top-24 -right-24 w-80 h-80 bg-teal/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-teal/10 transition-colors duration-700" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}