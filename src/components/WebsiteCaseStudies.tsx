import { useEffect, useRef, useState } from 'react';
import { Zap, Target, Code, TrendingUp, ArrowUpRight } from 'lucide-react';

interface WebsiteCaseStudiesProps {
  scrollY: number;
}

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
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleSections, setVisibleSections] = useState<number[]>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section id="website-case-studies" className="py-20 sm:py-32 px-4 sm:px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            Website <span className="text-teal">Case Studies</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400">
            From concept to conversion: how we built digital experiences that deliver
          </p>
        </div>

        <div className="space-y-20 sm:space-y-32">
          {studies.map((study, index) => {
            const isVisible = visibleSections.includes(index);
            const parallax = (scrollY - (index * 400)) * 0.1;

            return (
              <div
                key={study.id}
                ref={el => sectionRefs.current[index] = el}
                className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              >
                <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${study.bgGradient} border border-white/5 p-6 sm:p-8 md:p-12`}>
                  <div
                    className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold/20 to-transparent rounded-full blur-3xl"
                    style={{ transform: `translateY(${parallax}px)` }}
                  />

                  <div className="relative z-10 space-y-6 sm:space-y-8">
                    <div>
                      <span className="text-teal font-bold tracking-wider text-xs sm:text-sm uppercase">Case Study {study.id}</span>
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-3 sm:mb-4">{study.title}</h3>
                      <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-4">{study.overview}</p>
                      {study.url && (
                        <a
                          href={study.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-teal hover:text-gold transition-colors text-sm sm:text-base font-semibold"
                        >
                          Visit Website <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <h4 className="text-lg sm:text-xl font-bold text-gold mb-2 sm:mb-3 flex items-center gap-2">
                            <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                            The Challenge
                          </h4>
                          <p className="text-sm sm:text-base text-gray-300">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="text-lg sm:text-xl font-bold text-teal mb-2 sm:mb-3 flex items-center gap-2">
                            <Code className="w-4 h-4 sm:w-5 sm:h-5" />
                            Our Approach
                          </h4>
                          <ul className="space-y-2">
                            {study.strategy.map((item, i) => (
                              <li key={i} className="text-sm sm:text-base text-gray-300 flex items-start gap-3">
                                <span className="text-teal mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <h4 className="text-lg sm:text-xl font-bold text-teal mb-2 sm:mb-3 flex items-center gap-2">
                            <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                            Technical Execution
                          </h4>
                          <div className="grid grid-cols-2 gap-2 sm:gap-3">
                            {study.execution.map((item, i) => (
                              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10">
                                <p className="text-xs sm:text-sm text-gray-300">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg sm:text-xl font-bold text-gold mb-2 sm:mb-3 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                            Results Delivered
                          </h4>
                          <div className="grid grid-cols-2 gap-2 sm:gap-3">
                            {study.results.map((result, i) => {
                              const Icon = result.icon;
                              return (
                                <div key={i} className="bg-gradient-to-br from-gold/20 to-teal/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gold/30">
                                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold mb-1 sm:mb-2" />
                                  <p className="text-2xl sm:text-3xl font-bold text-white mb-1">{result.value}</p>
                                  <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wide">{result.label}</p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

