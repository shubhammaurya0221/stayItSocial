import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Founder, Luxe Aesthetics',
    company: 'Luxe Aesthetics',
    content: 'Say It Social completely transformed our Instagram presence. Their strategic approach and stunning content took us from invisible to industry leaders. Our engagement skyrocketed and so did our bookings.',
    metric: '+180% Engagement',
    image: '1'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Owner, Urban Kitchen',
    company: 'Urban Kitchen',
    content: 'The team created viral content that put us on the map. We went from 5K to 50K followers in just 3 months, and our restaurant is now fully booked weeks in advance. Best investment we\'ve made.',
    metric: '3M+ Monthly Reach',
    image: '2'
  },
  {
    id: 3,
    name: 'Jessica Torres',
    role: 'Marketing Director, FitZone Pro',
    company: 'FitZone Pro',
    content: 'Their influencer campaign strategy was genius. The content felt authentic and drove massive engagement. We saw a 5x return on our social media ad spend within the first 60 days.',
    metric: '5x ROAS',
    image: '3'
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  // Variants for the sliding animation
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black relative overflow-hidden">
      {/* Dynamic Background Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-gold/10 to-transparent pointer-events-none" 
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          >
            Client <span className="text-gold">Love</span>
          </motion.h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 px-4">
            Hear from brands we've transformed
          </p>
        </div>

        <div className="relative min-h-[400px]">
          {/* Large decorative quote icon */}
          <motion.div 
            initial={{ rotate: -10, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            className="absolute -top-12 -left-12 z-0 hidden md:block"
          >
            <Quote className="w-48 h-48 text-teal/5" />
          </motion.div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
              }}
              className="relative bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-16 shadow-2xl"
            >
              {/* Star Rating Animation */}
              <div className="flex items-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                  >
                    <Star className="w-5 h-5 text-gold fill-gold" />
                  </motion.div>
                ))}
              </div>

              {/* Content Animation */}
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl sm:text-2xl md:text-3xl text-gray-100 leading-relaxed mb-12 font-light italic"
              >
                "{testimonials[current].content}"
              </motion.p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 border-t border-white/10 pt-8">
                <div className="flex items-center gap-4">
                  {/* Avatar with Glow */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full" />
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-teal to-gold flex items-center justify-center text-2xl font-bold text-black border-2 border-black">
                      {testimonials[current].name[0]}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">{testimonials[current].name}</h4>
                    <p className="text-sm text-teal font-medium tracking-wide">{testimonials[current].role}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-tighter">{testimonials[current].company}</p>
                  </div>
                </div>

                {/* Metric Badge with subtle pulse */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-teal/20 to-gold/20 border border-teal/30 backdrop-blur-md shadow-lg"
                >
                  <span className="text-gold font-black text-lg md:text-xl tracking-tight">
                    {testimonials[current].metric}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-12 relative z-20">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-teal/20 hover:border-teal transition-all duration-300 group active:scale-90"
            >
              <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-teal group-hover:-translate-x-1 transition-transform" />
            </button>

            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className="relative h-2 rounded-full overflow-hidden bg-white/10 transition-all duration-500"
                  style={{ width: index === current ? '48px' : '12px' }}
                >
                  {index === current && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-teal to-gold"
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold/20 hover:border-gold transition-all duration-300 group active:scale-90"
            >
              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-gold group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
