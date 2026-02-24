import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    name: 'ERA Eyewear',
    tags: ['E-commerce', 'Shopify', 'Eyewear','Premium Store'],
    description: 'Modern eyewear e-commerce platform with seamless shopping experience',
    gradient: 'from-teal/20 to-gold/20',
    url: 'https://eraeyewear.shop/'
  },
  {
    id: 2,
    name: 'Footwin',
    tags: ['E-commerce', 'Footwear','Multi-Platform'],
    description: 'Footwear brand with integrated Amazon, Flipkart & Myntra presence',
    gradient: 'from-gold/20 to-teal/20',
    url: 'https://www.footwin.in/'
  },
  {
    id: 3,
    name: 'Eka Eyewear',
    tags: ['E-commerce', 'Eyewear','Store'],
    description: 'Premium eyewear manufacturer showcasing Make in India products',
    gradient: 'from-teal/30 to-transparent',
    url: 'https://ekaeyewear.com/'
  },
  {
    id: 4,
    name: 'Weitech Weighing',
    tags: ['B2B', 'Industrial'],
    description: 'Professional weighing systems and industrial equipment showcase',
    gradient: 'from-gold/30 to-transparent',
    url: 'https://weitechweighing.com/'
  },
  {
    id: 5,
    name: 'Talapatra Kala',
    tags: ['E-commerce', 'Handicrafts','Store'],
    description: 'Traditional handicrafts and cultural artifacts platform',
    gradient: 'from-gold/20 to-teal/10',
    url: 'https://talapatrakala.com/'
  },
  {
    id: 6,
    name: 'Cric Studio',
    tags: ['E-commerce', 'Sports','Sports Store'],
    description: 'Premium cricket equipment and accessories online store',
    gradient: 'from-gold/20 to-teal/10',
    url: 'https://cricstudioinc.com/'
  }
];

export default function WebsitePortfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="website-portfolio" className="py-20 sm:py-32 px-4 sm:px-6 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-white">
            Website <span className="text-gold">Projects</span>
          </h2>
        </motion.div>

        {/* STRATEGY: 
          1. 12 columns total.
          2. ERA (Item 0) takes 6 cols (half width) and 2 rows height.
          3. Items 1 & 2 stack in the other 6 cols.
          4. Items 3, 4, 5 take 4 cols each to fill the final row perfectly.
        */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
  {projects.map((project, index) => {
    const isHovered = hoveredId === project.id;
    
    const gridClass =
      index === 0 ? 'md:col-span-6 md:row-span-2' : 
      index === 1 ? 'md:col-span-6 md:row-span-1' :
      index === 2 ? 'md:col-span-6 md:row-span-1' :
      'md:col-span-4 md:row-span-1';

    return (
      <motion.a
        key={project.id}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`group relative ${gridClass} cursor-pointer block h-full`}
        onMouseEnter={() => setHoveredId(project.id)}
        onMouseLeave={() => setHoveredId(null)}
      >
        <div
          className={`
            relative h-full w-full rounded-[2.5rem]
            glass-bg
            border border-white/10 p-8 md:p-10
            transition-all duration-500 ease-out flex flex-col justify-between
            ${isHovered ? 'scale-[1.02] border-gold/40 shadow-[0_0_60px_rgba(59,130,246,0.25)]' : ''}
            backdrop-blur-xl overflow-hidden
          `}
        >
          
          {/* Top Glow */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-blue-500/30 to-transparent blur-2xl opacity-60 pointer-events-none" />
          
          {/* Bottom Glow */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-500/40 to-transparent blur-2xl opacity-70 pointer-events-none" />

          {/* Glass Circle */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-blue-500/10 transition-colors duration-700" />

          <div className="relative z-10">
            <div className="flex gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10 font-bold">
                  {tag}
                </span>
              ))}
            </div>
            
            <h3 className={`font-bold text-white tracking-tight leading-tight transition-all
              ${index === 0 ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
              {project.name}
            </h3>
          </div>

          <div className="relative z-10">
            <p className="text-gray-400 text-sm md:text-base mb-8 max-w-[90%] leading-relaxed line-clamp-3">
              {project.description}
            </p>
            
            <div className="flex items-end justify-between">
              <div
  className={`
    w-12 h-12 rounded-2xl 
    bg-white/10 
    flex items-center justify-center 
    transition-all duration-500 
    border border-white/10
    group/arrow
    ${isHovered 
      ? 'bg-gold rotate-0 scale-110 opacity-100' 
      : '-rotate-45 scale-90 opacity-0'}
      `}
          >
            <ArrowUpRight
              className={`
                w-6 h-6
                text-black
                transition-all duration-300
                group-hover/arrow:scale-110
                group-hover/arrow:text-gold
                group-hover/arrow:drop-shadow-[0_0_18px_rgba(251,176,64,0.9)]
              `}
            />
          </div>
            </div>
          </div>

        </div>
      </motion.a>
    );
  })}
</div>
      </div>
    </section>
  );
}