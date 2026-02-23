import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

function Counter({ value, colorClass }: { value: string; colorClass: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);

  // Extract number and suffix (e.g., "2M+" -> 2 and "M+")
  const numericValue = parseFloat(value.replace(/[^\d.]/g, "")) || 0;
  const suffix = value.replace(/[0-9.]/g, "");

  const displayValue = useTransform(count, (latest) => {
    // Check if it's a decimal (like 2x) or whole number
    const formatted =
      numericValue % 1 === 0 ? Math.round(latest) : latest.toFixed(1);
    return formatted + suffix;
  });

  useEffect(() => {
    if (isInView) {
      animate(count, numericValue, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, numericValue, count]);

  return (
    <motion.div
      ref={ref}
      className={`text-2xl sm:text-3xl md:text-4xl font-bold ${colorClass}`}
    >
      {displayValue}
    </motion.div>
  );
}

export default function CTABanner() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-teal/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-gold/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            Ready to Skyrocket Your
            <br />
            <span className="bg-gradient-to-r from-teal to-gold bg-clip-text text-transparent">
              Social Presence?
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
            Join brands that transformed their social media into
            revenue-generating engines.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-14 md:mb-16 px-4">
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal to-gold text-black font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(4,170,165,0.7)] hover:shadow-teal/70 flex items-center justify-center gap-2 text-sm sm:text-base">
            Start Your Campaign
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/20 text-white font-bold rounded-lg hover:border-gold hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(251,176,64,0.5)] hover:shadow-gold/50 text-sm sm:text-base">
            View Case Studies
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-12 text-center border-t border-white/10 pt-8 sm:pt-10 md:pt-12 px-4">
          {/* Campaigns */}
          <div className="space-y-1 sm:space-y-2">
            <Counter value="15+" colorClass="text-teal" />
            <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-widest leading-tight">
              Successful Campaigns
            </div>
          </div>

          {/* Reach */}
          <div className="space-y-1 sm:space-y-2">
            <Counter value="2M+" colorClass="text-gold" />
            <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-widest leading-tight">
              Total Reach
            </div>
          </div>

          {/* ROAS */}
          <div className="space-y-1 sm:space-y-2">
            <Counter value="2x" colorClass="text-teal" />
            <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-widest leading-tight">
              Average ROAS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
