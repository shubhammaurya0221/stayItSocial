import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

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

export default function WebsiteCTA() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Ready to Build Your
            <br />
            <span className="bg-gradient-to-r from-gold to-teal bg-clip-text text-transparent">
              Digital Masterpiece?
            </span>
          </h2>
        </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-14 md:mb-16 px-4">
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 30px rgba(20, 184, 166, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            href={`#`}
            className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 
             bg-gradient-to-r from-[#0f766e] via-[#14b8a6] to-[#d4af37] 
             text-black font-bold rounded-lg overflow-hidden 
             transition-all duration-300 text-sm sm:text-base cursor-pointer"
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-white/30 via-white/10 to-transparent blur-md"></span>
            <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-[shine_1.2s_ease_forwards]"></span>
            <span className="relative z-10">Start Your Journey</span>
          </motion.a>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-12 text-center border-t border-white/10 pt-8 sm:pt-12">
          {/* Stat 1: Sites Built */}
          <div className="space-y-1 sm:space-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold">
              <Counter value={9} />+
            </div>
            <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-widest">
              Sites Built
            </div>
          </div>

          {/* Stat 2: PageSpeed */}
          <div className="space-y-1 sm:space-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal">
              <Counter value={98} />%
            </div>
            <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-widest">
              Avg. PageSpeed
            </div>
          </div>

          {/* Stat 3: Traffic Lift */}
          <div className="space-y-1 sm:space-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold">
              <Counter value={300} />%
            </div>
            <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-widest">
              Avg. Traffic Lift
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
