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
const headingReveal = {
  hidden: {
    opacity: 1
  },
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const lineReveal = {
  hidden: {
    y: "100%",
    opacity: 0
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};
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
      {/* Background Blobs - Medium Size & Intensity */}
      <div
        className="absolute -top-20 -right-20 w-[300px] h-[300px] 
             bg-teal/25 rounded-full blur-[80px] 
             mix-blend-lighten pointer-events-none transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${parallaxOffset * 0.4}px)` }}
      />

      <div
        className="absolute -bottom-20 -left-20 w-[300px] h-[300px] 
             bg-gold/20 rounded-full blur-[80px] 
             mix-blend-lighten pointer-events-none transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${-parallaxOffset * 0.4}px)` }}
      />

      <motion.div
      variants={headingReveal}
  initial="hidden"
  animate="visible"
  className="relative z-10 px-4 sm:px-6 max-w-5xl mx-auto text-center overflow-hidden"
      >
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight text-white px-2">

    <div className="overflow-hidden">
      <motion.span variants={lineReveal} className="block">
        Website Experiences That
      </motion.span>
    </div>

    <div className="overflow-hidden">
      <motion.span
        variants={lineReveal}
        className="block bg-gradient-to-r from-gold via-gold to-teal bg-clip-text text-transparent italic drop-shadow-[0_0_8px_rgba(251,176,64,0.4)]"
      >
        Convert & Captivate
      </motion.span>
    </div>

  </h1>

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
          {/* Primary CTA: View Our Sites */}
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 30px rgba(20, 184, 166, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            href={`https://wa.me/918460732085?text=${encodeURIComponent("Hello!")}`}
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4
             rounded-lg font-semibold text-black text-sm lg:text-base
             bg-[linear-gradient(135deg,#0D4F4B_0%,#4CB6A6_45%,#E6C27A_100%)]
             overflow-hidden
             transition-all duration-300
             hover:scale-[1.04]
             hover:shadow-[0_0_35px_rgba(230,194,122,0.35)]"

          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-white/30 via-white/10 to-transparent blur-md"></span>
            <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-[shine_1.2s_ease_forwards]"></span>
            <span className="relative font-bold z-10">Connect With Our Team</span>
          </motion.a>

          {/* Secondary CTA: Start a Project */}
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

        {/* Stats Section with Fading Dividers */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-16 px-4"
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
                <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              )}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}