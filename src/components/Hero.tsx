import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

// Helper Component for the counting logic
function Counter({
  value,
  direction = "up",
}: {
  value: number;
  direction?: "up" | "down";
}) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });
  const motionValue = useMotionValue(direction === "down" ? value : 0);
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

interface HeroProps {
  scrollY: number;
}

export default function Hero({ scrollY }: HeroProps) {
  const parallaxOffset = scrollY * 0.3;

  const stats = [
    { num: 15, suffix: "+", label: "Campaigns", color: "text-teal" },
    { num: 2, suffix: "M+", label: "Total Reach", color: "text-gold" },
    { num: 2, suffix: "x", label: "Avg ROAS", color: "text-teal" },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each element appearing
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-32 md:pt-24">
      {/* Background Blobs with Parallax */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal/20 to-transparent rounded-full blur-3xl transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gold/20 to-transparent rounded-full blur-3xl transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${-parallaxOffset}px)` }}
      />

      <motion.div
        className="relative z-10 px-4 sm:px-6 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge Reveal */}
        <motion.div
          variants={itemVariants}
          className="mb-6 sm:mb-8 flex flex-col items-center"
        >
          <motion.div
            // This creates a soft "breathing" glow effect
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
            className="relative group overflow-hidden inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-gold/30 backdrop-blur-md"
          >
            {/* The Shimmer Effect Layer */}
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
              Premium Social Media Marketing Agency
            </span>
          </motion.div>
        </motion.div>

        {/* Headline with Text Reveal */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight text-white px-2"
        >
          Social Media That{" "}
          <span className="bg-gradient-to-r from-teal via-teal to-gold bg-clip-text text-transparent">
            Drives Real Growth
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4"
        >
          Strategic campaigns that transform brands into social powerhouses. We
          turn engagement into revenue.
        </motion.p>

        {/* CTA Buttons with Hover Micro-interactions */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10 sm:mb-12 px-4"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 30px rgba(4,170,165,0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              document
                .getElementById("all-clients")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal to-gold text-black font-bold rounded-lg transition-all text-sm sm:text-base"
          >
            Explore Our Work
          </motion.button>

          <motion.a
            whileHover={{
              scale: 1.05,
              borderColor: "#fbaf40",
              backgroundColor: "rgba(255,255,255,0.05)",
            }}
            whileTap={{ scale: 0.98 }}
            href={`https://wa.me/918460732085?text=${encodeURIComponent("Hello!")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/20 text-white font-bold rounded-lg transition-all text-center text-sm sm:text-base"
          >
            Get Started
          </motion.a>
        </motion.div>

        {/* Stats Section with Staggered Pop-in */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-12 px-4"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4 sm:gap-6 md:gap-12">
              <motion.div whileHover={{ y: -5 }} className="cursor-default">
                <div
                  className={`text-2xl sm:text-3xl md:text-4xl font-bold ${stat.color} mb-1 sm:mb-2`}
                >
                  <Counter value={stat.num} />
                  {stat.suffix}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
              {i < stats.length - 1 && (
                <div className="w-px h-8 bg-white/10 hidden sm:block" />
              )}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator Reveal
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-gold rounded-full"
          />
        </div>
      </motion.div> */}
    </section>
  );
}
