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
    { num: 10, suffix: "+", label: "Industries", color: "text-teal" },
    { num: 2, suffix: "M+", label: "Total Reach", color: "text-gold" },
    { num: 5, suffix: "x", label: "Lead Velocity", color: "text-teal" },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-32 md:pt-24">
      {/* Background Blobs with Parallax */}
      <div
        className="absolute -top-10 -right-10 w-[300px] h-[300px] 
             bg-teal/25 rounded-full blur-[80px] 
             mix-blend-lighten pointer-events-none transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${parallaxOffset * 0.4}px)` }}
      />

      <div
        className="absolute -bottom-10 -left-10 w-[300px] h-[300px] 
             bg-gold/20 rounded-full blur-[80px] 
             mix-blend-lighten pointer-events-none transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${-parallaxOffset * 0.4}px)` }}
      />

      <motion.div
        className="relative z-10 px-4 sm:px-6 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline with Text Reveal */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight text-white px-2"
        >
          Social Media That{" "}
          <span className="bg-teal bg-clip-text text-transparent">
            Drives Real
          </span>{" "}
          <br />
          <span className="bg-gradient-to-r from-teal to-gold bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(251,176,64,0.4)] font-bold">
            Growth
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

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10 sm:mb-12 px-4"
        >
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 30px rgba(20, 184, 166, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            href={`https://wa.me/918460732085?text=${encodeURIComponent("Hello!")}`}
            className="group relative inline-flex items-center justify-center 
             w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4
             rounded-lg font-semibold text-black text-sm sm:text-base
             bg-[linear-gradient(135deg,#0D4F4B_0%,#4CB6A6_45%,#E6C27A_100%)]
             overflow-hidden transition-all duration-300 cursor-pointer"
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-white/30 via-white/10 to-transparent blur-md"></span>
            <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-[shine_1.2s_ease_forwards]"></span>
            <span className="relative font-bold z-10">Connect With Our Team</span>
          </motion.a>
          
          <motion.a
            href="/"
            whileHover={{
              scale: 1.05,
              borderColor: "#fbaf40",
              boxShadow: "0 0 20px rgba(251, 175, 64, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 
             border-2 border-white/20 text-white font-bold rounded-lg 
             transition-all duration-300 text-center text-sm sm:text-base 
             overflow-hidden bg-transparent cursor-pointer inline-block"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-teal/10 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-2 border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tl-lg" />
            <span className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-2 border-r-2 border-gold opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-br-lg" />
            <span className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[35deg] transition-all duration-700 group-hover:left-[150%]" />
            <span className="relative z-10">Our Website</span>
          </motion.a>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-12 px-4"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4 sm:gap-6 md:gap-12">
              <motion.div whileHover={{ y: -5 }} className="cursor-default">
                <div className={`text-2xl sm:text-3xl md:text-4xl font-bold ${stat.color} mb-1 sm:mb-2`}>
                  <Counter value={stat.num} />
                  {stat.suffix}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
              {i < stats.length - 1 && (
                <div className="hidden sm:block w-px h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              )}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}