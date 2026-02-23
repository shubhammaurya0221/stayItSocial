import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
  Variants,
} from "framer-motion";
import { useEffect, useRef } from "react";

// Helper Component for the counting logic
function Counter({ value }: { value: number }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [motionValue, value, isInView]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
}

interface WebsiteHeroProps {
  scrollY: number;
}

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WebsiteHero({ scrollY }: WebsiteHeroProps) {
  const parallaxOffset = scrollY * 0.3;

  const stats = [
    { num: 9, suffix: "+", label: "Sites Built", color: "text-gold" },
    { num: 98, suffix: "%", label: "Avg. PageSpeed", color: "text-teal" },
    { num: 300, suffix: "%", label: "Avg. Traffic Lift", color: "text-gold" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-32 md:pt-24">
      {/* Background Blobs with Parallax */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold/20 to-transparent rounded-full blur-3xl transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal/20 to-transparent rounded-full blur-3xl transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${-parallaxOffset}px)` }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 px-4 sm:px-6 max-w-5xl mx-auto text-center"
      >
        {/* Shimmer & Breathing Badge */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8 flex flex-col items-center">
          <motion.div
            animate={{
              boxShadow: [
                "0 0 10px rgba(251, 176, 64, 0.1)",
                "0 0 20px rgba(251, 176, 64, 0.3)",
                "0 0 10px rgba(251, 176, 64, 0.1)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative group overflow-hidden inline-block px-4 py-2 rounded-full bg-white/5 border border-gold/30 backdrop-blur-md"
          >
            {/* Shimmer Effect Layer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "linear",
                repeatDelay: 1,
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
            />

            <span className="relative z-10 text-gold font-bold tracking-widest text-[10px] sm:text-xs uppercase leading-tight drop-shadow-[0_0_5px_rgba(251,176,64,0.4)]">
              Custom Web Design and Development
            </span>
          </motion.div>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight text-white px-2"
        >
          Digital Experiences That
          <br />
          <span className="bg-gradient-to-r from-gold via-gold to-teal bg-clip-text text-transparent italic">
            Convert & Captivate
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4"
        >
          Stunning, high-performance websites that combine beautiful design with seamless functionality. Built to drive business results.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 px-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(251, 176, 64, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const portfolioSection = document.getElementById("website-portfolio");
              portfolioSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold to-teal text-black font-bold rounded-xl transition-all duration-300 text-sm sm:text-base shadow-lg"
          >
            View Our Sites
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05, borderColor: "#04AAA5", backgroundColor: "rgba(255,255,255,0.05)" }}
            whileTap={{ scale: 0.98 }}
            href={`https://wa.me/918460732085?text=${encodeURIComponent('Hello!')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 border-2 border-white/20 text-white font-bold rounded-xl transition-all duration-300 text-center text-sm sm:text-base"
          >
            Start a Project
          </motion.a>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 md:gap-16 px-4"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-6 md:gap-16">
              <motion.div whileHover={{ y: -5 }} className="cursor-default">
                <div className={`text-2xl sm:text-3xl md:text-4xl font-black ${stat.color} mb-1 sm:mb-2`}>
                  <Counter value={stat.num} />
                  {stat.suffix}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </motion.div>
              {i < stats.length - 1 && (
                <div className="w-px h-12 bg-white/10 hidden sm:block" />
              )}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-teal rounded-full"
          />
        </div>
      </motion.div> */}
    </section>
  );
}