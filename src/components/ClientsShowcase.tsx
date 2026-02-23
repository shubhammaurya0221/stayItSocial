import { useState } from "react";
import { Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Client {
  id: number;
  brand: string;
  category: string;
  description: string;
  instagramHandle?: string;
  instagramPosts?: string[];
  gradient: string;
}

const allClients: Client[] = [
  {
    id: 1,
    brand: "Cricstudioinc",
    category: "Sports Content",
    description: "Cricket content & brand building - Building a strong community around sports content",
    gradient: "from-teal/20 to-gold/20",
    instagramHandle: "cricstudioinc",
    instagramPosts: [],
  },
  {
    id: 2,
    brand: "Shiva Optics Plus",
    category: "Premium Eyewear",
    description: "Transforming premium eyewear brand presence with sophisticated, minimal design",
    gradient: "from-gold/20 to-teal/20",
    instagramHandle: "shivaoptics",
    instagramPosts: [],
  },
  {
    id: 3,
    brand: "Shiva Enterprise",
    category: "E-commerce",
    description: "Modern eyewear e-commerce social strategy - Thoughtfully selected products",
    gradient: "from-teal/20 to-gold/20",
    instagramHandle: "shivaenterprise.in",
    instagramPosts: [],
  },
  {
    id: 4,
    brand: "The Quick Craft",
    category: "AI & VR Solutions",
    description: "AI-powered design & VR solutions - Leveraging AI and human creativity",
    gradient: "from-gold/20 to-teal/20",
    instagramHandle: "tqc.official",
    instagramPosts: [],
  },
  {
    id: 5,
    brand: "Dronagiri Herbal",
    category: "Skincare & Haircare",
    description: "Natural skincare & haircare brand launch - 100% herbal products",
    gradient: "from-teal/20 to-gold/20",
    instagramHandle: "dronagiri_herbal_india",
    instagramPosts: [],
  },
  {
    id: 6,
    brand: "Shivaangi Hostel",
    category: "Student Accommodation",
    description: "Student accommodation brand building - Establishing trust within education community",
    gradient: "from-gold/20 to-teal/20",
    instagramHandle: "shivaangi_hostel",
    instagramPosts: [],
  },
  {
    id: 7,
    brand: "Kalon Ethnic",
    category: "Fashion & Lifestyle",
    description: "Traditional fashion brand digital presence - Bridging traditional with modern",
    gradient: "from-teal/20 to-gold/20",
    instagramHandle: "kalon.ethnic",
    instagramPosts: [],
  },
  {
    id: 8,
    brand: "Vortex Educational Consultants",
    category: "Education Services",
    description: "Education services marketing - Building authority and trust in education sector",
    gradient: "from-gold/20 to-teal/20",
    instagramHandle: "vortex_educational_consultants",
    instagramPosts: [],
  },
];

// High-end Cinematic Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Slow sequential reveal
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60, 
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2, 
      ease: [0.22, 1, 0.36, 1], // Premium smooth deceleration
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.4 },
  },
};

export default function ClientsShowcase() {
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(allClients.map((c) => c.category)))];

  const filteredClients =
    filter === "all"
      ? allClients
      : allClients.filter((c) => c.category === filter);

  return (
    <section id="all-clients" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
            All <span className="text-gold">Clients</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            Explore our complete portfolio of successful social media campaigns
          </p>
        </motion.div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border transition-all text-xs sm:text-sm ${
                filter === category
                  ? "bg-gradient-to-r from-teal to-gold text-black border-transparent font-bold shadow-[0_0_20px_rgba(4,170,165,0.4)]"
                  : "bg-white/5 border-white/20 text-gray-300 hover:border-gold"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Clients Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredClients.map((client) => (
              <motion.div
                key={client.id}
                layout
                variants={cardVariants}
                className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${client.gradient} border border-white/10 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(4,170,165,0.3)] hover:border-teal/50`}
              >
                <div className="flex items-start justify-between h-full">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[10px] uppercase tracking-widest text-gray-300 mb-3 border border-white/5">
                      {client.category}
                    </span>
                    <h3 className="text-xl font-bold mb-1 text-white">
                      {client.brand}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                      {client.description}
                    </p>
                  </div>

                  {client.instagramHandle && (
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      href={`https://www.instagram.com/${client.instagramHandle}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal hover:text-gold transition-colors flex-shrink-0 ml-3 bg-black/20 p-2 rounded-lg"
                    >
                      <Instagram className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>

                {/* Decorative Bottom Glow */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-teal/5 blur-2xl rounded-full pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}