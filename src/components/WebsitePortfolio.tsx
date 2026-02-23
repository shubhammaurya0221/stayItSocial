import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'ERA Eyewear',
    category: 'E-commerce',
    tags: ['E-commerce', 'Shopify', 'Eyewear'],
    metric: 'Premium Store',
    description: 'Modern eyewear e-commerce platform with seamless shopping experience',
    gradient: 'from-teal/20 to-gold/20',
    size: 'large',
    url: 'https://eraeyewear.shop/'
  },
  {
    id: 2,
    name: 'Footwin',
    category: 'E-commerce',
    tags: ['E-commerce', 'Footwear', 'Multi-channel'],
    metric: 'Multi-Platform',
    description: 'Footwear brand with integrated Amazon, Flipkart & Myntra presence',
    gradient: 'from-gold/20 to-teal/20',
    size: 'medium',
    url: 'https://www.footwin.in/'
  },
  {
    id: 3,
    name: 'Eka Eyewear',
    category: 'E-commerce',
    tags: ['E-commerce', 'Make in India', 'Eyewear'],
    metric: 'Brand Store',
    description: 'Premium eyewear manufacturer showcasing Make in India products',
    gradient: 'from-teal/30 to-transparent',
    size: 'medium',
    url: 'https://ekaeyewear.com/'
  },
  {
    id: 4,
    name: 'Weitech Weighing',
    category: 'B2B Industrial',
    tags: ['B2B', 'Industrial', 'Weighing Systems'],
    metric: 'B2B Platform',
    description: 'Professional weighing systems and industrial equipment showcase',
    gradient: 'from-gold/30 to-transparent',
    size: 'small',
    url: 'https://weitechweighing.com/'
  },
  {
    id: 5,
    name: 'Talapatra Kala',
    category: 'E-commerce',
    tags: ['E-commerce', 'Handicrafts', 'Traditional'],
    metric: 'Heritage Store',
    description: 'Traditional handicrafts and cultural artifacts e-commerce platform',
    gradient: 'from-gold/20 to-teal/10',
    size: 'medium',
    url: 'https://talapatrakala.com/'
  },
  {
    id: 6,
    name: 'Cric Studio',
    category: 'E-commerce',
    tags: ['E-commerce', 'Sports', 'Cricket'],
    metric: 'Sports Store',
    description: 'Premium cricket equipment and accessories online store',
    gradient: 'from-gold/20 to-teal/10',
    size: 'small',
    url: 'https://cricstudioinc.com/'
  }
];

export default function WebsitePortfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="website-portfolio" className="py-20 sm:py-32 px-4 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            Website <span className="text-gold">Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Digital experiences that drive measurable business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {projects.map((project) => {
            const isHovered = hoveredId === project.id;
            const gridClass =
              project.size === 'large' ? 'md:col-span-3 md:row-span-2' :
              project.size === 'medium' ? 'md:col-span-3' :
              'md:col-span-2';

            return (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative ${gridClass} cursor-pointer block`}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className={`
                    h-full min-h-[280px] rounded-3xl bg-gradient-to-br ${project.gradient}
                    border border-white/5 p-4 sm:p-6
                    transition-all duration-500 ease-out
                    ${isHovered ? 'scale-[1.02] border-gold shadow-2xl shadow-gold/20' : ''}
                    backdrop-blur-sm
                    flex flex-col
                    overflow-hidden
                  `}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal/10 to-transparent rounded-full blur-3xl" />

                  <div className="flex-shrink-0">
                    <div className="flex gap-2 mb-3 flex-wrap">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400 border border-white/10 mb-4">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex-grow flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">{project.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 mb-4">{project.description}</p>
                  </div>

                  <div className="flex-shrink-0 flex items-center justify-between mt-auto pt-4">
                    <span className="text-gold font-semibold text-base sm:text-lg">{project.metric}</span>

                    <div
                      className={`
                        w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-gold to-teal
                        flex items-center justify-center
                        transition-all duration-500
                        ${isHovered ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                      `}
                    >
                      <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                    </div>
                  </div>

                  <div
                    className={`
                      absolute inset-0 bg-gradient-to-t from-black/60 to-transparent
                      transition-opacity duration-500
                      ${isHovered ? 'opacity-100' : 'opacity-0'}
                      pointer-events-none
                    `}
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

