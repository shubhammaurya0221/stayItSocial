import { useRef } from 'react';
import { Zap, Target, Code, TrendingUp, ArrowUpRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

interface WebsiteCaseStudiesProps {
  scrollY: number;
}

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const slideLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// Typewriter Sub-component
const TypewriterTitle = ({ text }: { text: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");
  
  return (
    <motion.h3 
      ref={ref}
      className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-3 sm:mb-4"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.25, delay: i * 0.1 }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.h3>
  );
};

const studies = [
  {
    id: 1,
    title: 'Andhra Hasthakala: Artisan E-Commerce Platform',
    company: 'Andhra Hasthakala',
    overview: 'A platform dedicated to showcasing traditional Andhra handicrafts and artisan products needed a modern e-commerce solution to reach global audiences while preserving cultural heritage.',
    challenge: 'Needed to digitize traditional handicrafts, create an intuitive product catalog for diverse artisan products, and establish trust for handmade items in the online marketplace.',
    strategy: [
      'Beautiful product showcase highlighting artisan craftsmanship',
      'Storytelling elements to connect customers with artisans',
      'Multi-language support for wider reach',
      'Secure payment gateway integration',
      'Mobile-optimized shopping experience'
    ],
    execution: [
      'E-commerce platform with custom product galleries',
      'Artisan profile and story sections',
      'Category-based navigation system',
      'Integrated payment and shipping solutions'
    ],
    results: [
      { label: 'PageSpeed Score', value: '95/100', icon: Zap },
      { label: 'Online Sales', value: '+180%', icon: Target },
      { label: 'Artisan Reach', value: '500+', icon: Code },
      { label: 'Customer Growth', value: '+220%', icon: TrendingUp }
    ],
    bgGradient: 'from-gold/10 via-transparent to-teal/10',
    url: 'https://andhra-hasthakala.com/'
  },
  {
    id: 2,
    title: 'Narasapur Crochet Lace: Heritage Craft Platform',
    company: 'Narasapur Crochet Lace',
    overview: 'Premium crochet lace products from Narasapur artisans required a sophisticated e-commerce platform to showcase intricate handmade work and reach international markets.',
    challenge: 'High-quality product photography needs, educating customers about traditional techniques, and building brand credibility for artisanal luxury products.',
    strategy: [
      'Premium product imagery with zoom functionality',
      'Educational content about crochet techniques',
      'Heritage storytelling and artisan connections',
      'Luxury brand positioning with elegant design',
      'International shipping and payment integration'
    ],
    execution: [
      'High-resolution product galleries',
      'Interactive product detail pages',
      'Blog section for craft education',
      'Multi-currency payment system'
    ],
    results: [
      { label: 'Page Load Time', value: '1.5s', icon: Zap },
      { label: 'International Orders', value: '+150%', icon: Target },
      { label: 'Product Views', value: '+300%', icon: Code },
      { label: 'Brand Awareness', value: '+250%', icon: TrendingUp }
    ],
    bgGradient: 'from-teal/10 via-transparent to-gold/10',
    url: 'https://narasapurlace.com/'
  },
  {
    id: 3,
    title: 'J.K. Distributors: B2B Distribution Portal',
    company: 'J.K. Distributors',
    overview: 'A professional distribution and wholesale business needed a comprehensive B2B portal to manage orders, showcase product catalogs, and streamline distributor relationships.',
    challenge: 'Complex B2B requirements including bulk ordering, account management, pricing tiers, and seamless order processing for wholesale customers.',
    strategy: [
      'User-friendly B2B portal with account management',
      'Bulk ordering system with quantity discounts',
      'Product catalog with advanced filtering',
      'Order tracking and invoice management',
      'Secure login and pricing tier system'
    ],
    execution: [
      'Custom B2B dashboard for distributors',
      'Advanced product search and filtering',
      'Bulk order and quote request system',
      'Order history and tracking integration'
    ],
    results: [
      { label: 'Order Processing', value: '40% Faster', icon: Zap },
      { label: 'B2B Orders', value: '+120%', icon: Target },
      { label: 'Customer Retention', value: '+85%', icon: Code },
      { label: 'Operational Efficiency', value: '+200%', icon: TrendingUp }
    ],
    bgGradient: 'from-gold/10 via-transparent to-teal/10',
    url: 'http://www.jkdistributors.in/'
  }
];

export default function WebsiteCaseStudies({ scrollY }: WebsiteCaseStudiesProps) {
  return (
    <section id="website-case-studies" className="py-20 sm:py-32 px-4 sm:px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6"
          >
            Website <span className="text-teal">Case Studies</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-400"
          >
            From concept to conversion: how we built digital experiences that deliver
          </motion.p>
        </div>

        <div className="space-y-20 sm:space-y-32">
          {studies.map((study, index) => {
            const parallax = (scrollY - (index * 400)) * 0.1;

            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${study.bgGradient} border border-white/5 p-6 sm:p-8 md:p-12`}>
                  {/* Parallax Background Orb */}
                  <div
                    className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold/20 to-transparent rounded-full blur-3xl"
                    style={{ transform: `translateY(${parallax}px)` }}
                  />

                  <div className="relative z-10 space-y-6 sm:space-y-8">
                    <div>
                      <span className="text-teal font-bold tracking-wider text-xs sm:text-sm uppercase">Case Study {study.id}</span>
                      <TypewriterTitle text={study.title} />
                      <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-4">{study.overview}</p>
                      {study.url && (
                        <motion.a
                          whileHover={{ x: 5 }}
                          href={study.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-teal hover:text-gold transition-colors text-sm sm:text-base font-semibold"
                        >
                          Visit Website <ArrowUpRight className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                      <div className="space-y-4 sm:space-y-6">
                        {/* Challenge Section */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemFadeIn}>
                          <h4 className="text-lg sm:text-xl font-bold text-gold mb-2 sm:mb-3 flex items-center gap-2">
                            <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                            The Challenge
                          </h4>
                          <p className="text-sm sm:text-base text-gray-300">{study.challenge}</p>
                        </motion.div>

                        {/* Strategy Staggered List */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                          <h4 className="text-lg sm:text-xl font-bold text-teal mb-2 sm:mb-3 flex items-center gap-2">
                            <Code className="w-4 h-4 sm:w-5 sm:h-5" />
                            Our Approach
                          </h4>
                          <ul className="space-y-2">
                            {study.strategy.map((item, i) => (
                              <motion.li key={i} variants={itemFadeIn} className="text-sm sm:text-base text-gray-300 flex items-start gap-3">
                                <span className="text-teal mt-1">•</span>
                                <span>{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>

                      <div className="space-y-4 sm:space-y-6">
                        {/* Technical Execution Slide-ins */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                          <h4 className="text-lg sm:text-xl font-bold text-teal mb-2 sm:mb-3 flex items-center gap-2">
                            <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                            Technical Execution
                          </h4>
                          <div className="grid grid-cols-2 gap-2 sm:gap-3">
                            {study.execution.map((item, i) => (
                              <motion.div 
                                key={i} 
                                variants={i % 2 === 0 ? slideLeft : slideRight}
                                className="bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10"
                              >
                                <p className="text-xs sm:text-sm text-gray-300">{item}</p>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>

                        {/* Results Delivered Cards */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                          <h4 className="text-lg sm:text-xl font-bold text-gold mb-2 sm:mb-3 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                            Results Delivered
                          </h4>
                          <div className="grid grid-cols-2 gap-2 sm:gap-3">
                            {study.results.map((result, i) => {
                              const Icon = result.icon;
                              return (
                                <motion.div 
                                  key={i} 
                                  variants={itemFadeIn}
                                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                  className="bg-gradient-to-br from-gold/20 to-teal/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gold/30"
                                >
                                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold mb-1 sm:mb-2" />
                                  <p className="text-2xl sm:text-3xl font-bold text-white mb-1">{result.value}</p>
                                  <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wide">{result.label}</p>
                                </motion.div>
                              );
                            })}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}