import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Target, Lightbulb, Rocket } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const itemFadeIn = {
  hidden: { opacity: 0, y: 10 },
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
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-3 sm:mb-4"
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

// ... (CaseStudy interface and studies array stay exactly the same)
interface CaseStudiesProps {
  scrollY: number;
}

interface InstagramPost {
  url: string;
  description?: string;
}

interface CaseStudy {
  id: number;
  title: string;
  brand: string;
  overview: string;
  challenge: string;
  strategy: string[];
  execution: string[];
  results: Array<{ label: string; value: string; icon: typeof TrendingUp }>;
  bgGradient: string;
  instagramHandle?: string; // Instagram account handle (without @)
  instagramPosts?: InstagramPost[]; // Direct post URLs for embedding
}

const studies: CaseStudy[] = [
  {
    id: 1,
    title: 'Dronagiri Herbal: Natural Skincare & Haircare Brand Launch',
    brand: 'Dronagiri Herbal',
    overview: 'A 100% herbal product line with no chemicals, offering both skincare and haircare products. Products include Hair Protein Pack, Anti-Ageing Skin Care, Herbal Coconut Oil, Urban Face Mask, and Turmeric Body Butter.',
    challenge: 'Build brand trust and awareness for natural, chemical-free products while highlighting the herbal and organic nature of the product line.',
    strategy: [
      'Natural, organic visual identity with green/leafy themes',
      'Emphasize 100% herbal, no chemicals messaging',
      'Product showcase with clear labeling and benefits',
      'Skincare and haircare category separation',
      'Trust-building through transparency and certification'
    ],
    execution: [
      'Product photography with natural backgrounds',
      'Clear product labeling with herbal certifications',
      'Category-specific content (Hair Care, Skin Care)',
      '"Glow Your Skin" promotional messaging',
      'Natural ingredient emphasis in visuals'
    ],
    results: [
      { label: 'Product Range', value: '5+ Products', icon: TrendingUp },
      { label: 'Brand Positioning', value: '100% Herbal', icon: Target },
      { label: 'Trust Factor', value: 'Certified', icon: Lightbulb },
      { label: 'Categories', value: '2 (Hair & Skin)', icon: Rocket }
    ],
    bgGradient: 'from-teal/10 via-transparent to-gold/10',
    instagramHandle: 'dronagiri_herbal_india',
    instagramPosts: []
  },
  {
    id: 2,
    title: 'Shivaangi Hostel: Student Accommodation Brand Building',
    brand: 'Shivaangi Hostel',
    overview: 'A student hostel brand looking to establish a strong social media presence to attract students and build trust within the education community.',
    challenge: 'Create engaging content that resonates with students and parents while showcasing hostel facilities and community.',
    strategy: [
      'Student lifestyle content showcasing hostel life',
      'Facility tours and virtual walkthroughs',
      'Testimonials from current residents',
      'Community building through social media',
      'Parent-focused trust-building content'
    ],
    execution: [
      'Regular posts highlighting amenities and facilities',
      'Student testimonials and success stories',
      'Event coverage and community activities',
      'Educational content about hostel life'
    ],
    results: [
      { label: 'Brand Awareness', value: 'Increased', icon: TrendingUp },
      { label: 'Engagement', value: 'Growing', icon: Target },
      { label: 'Trust Building', value: 'Established', icon: Lightbulb },
      { label: 'Community', value: 'Active', icon: Rocket }
    ],
    bgGradient: 'from-teal/10 via-transparent to-gold/10',
    instagramHandle: 'shivaangi_hostel',
    instagramPosts: []
  },
  {
    id: 6,
    title: 'Kalon Ethnic: Traditional Fashion Brand Digital Presence',
    brand: 'Kalon Ethnic',
    overview: 'An ethnic fashion brand specializing in traditional wear, looking to modernize their social media presence while maintaining cultural authenticity.',
    challenge: 'Bridge traditional fashion with modern social media trends to reach a wider audience.',
    strategy: [
      'Showcase traditional designs with modern styling',
      'Influencer partnerships with fashion creators',
      'Behind-the-scenes content of craftsmanship',
      'Seasonal collection launches',
      'Cultural storytelling through visuals'
    ],
    execution: [
      'High-quality product photography',
      'Styled lookbooks and fashion shoots',
      'Craftsmanship and process videos',
      'Customer styling tips and inspiration'
    ],
    results: [
      { label: 'Visual Identity', value: 'Refined', icon: TrendingUp },
      { label: 'Brand Story', value: 'Authentic', icon: Target },
      { label: 'Engagement', value: 'Cultural', icon: Lightbulb },
      { label: 'Reach', value: 'Expanded', icon: Rocket }
    ],
    bgGradient: 'from-gold/10 via-transparent to-teal/10',
    instagramHandle: 'kalon.ethnic',
    instagramPosts: []
  },
  {
    id: 4,
    title: 'Vortex Educational Consultants: Education Services Marketing',
    brand: 'Vortex Educational Consultants',
    overview: 'An educational consultancy firm looking to establish authority and trust in the education sector through strategic social media content.',
    challenge: 'Build credibility and attract students/parents through educational content and success stories.',
    strategy: [
      'Educational tips and guidance content',
      'Student success stories and testimonials',
      'University and course information',
      'Expert advice and Q&A sessions',
      'Trust-building through transparency'
    ],
    execution: [
      'Informative carousel posts',
      'Student testimonial videos',
      'Educational webinars and live sessions',
      'University partnership highlights'
    ],
    results: [
      { label: 'Authority', value: 'Established', icon: TrendingUp },
      { label: 'Trust', value: 'Built', icon: Target },
      { label: 'Engagement', value: 'Educational', icon: Lightbulb },
      { label: 'Leads', value: 'Generated', icon: Rocket }
    ],
    bgGradient: 'from-gold/10 via-transparent to-teal/10',
    instagramHandle: 'vortex_educational_consultants',
    instagramPosts: []
  }
];



export default function CaseStudies({ scrollY }: CaseStudiesProps) {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section id="case-studies" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6"
          >
            Case<span className="text-teal"> Studies</span>
          </motion.h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 px-4">
            Deep dives into campaigns that moved the needle
          </p>
        </div>

        <div className="space-y-32">
          {studies.map((study, index) => {
            const parallax = (scrollY - (index * 400)) * 0.1;

            return (
              <div key={study.id} ref={el => sectionRefs.current[index] = el}>
                <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${study.bgGradient} border border-white/5 p-8 md:p-12`}>
                  {/* Parallax Background */}
                  <div
                    className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal/20 to-transparent rounded-full blur-3xl pointer-events-none"
                    style={{ transform: `translateY(${parallax}px)` }}
                  />

                  <div className="relative z-10 space-y-8">
                    {/* Writing Animation Title */}
                    <div>
                      <span className="text-gold font-bold tracking-wider text-xs sm:text-sm uppercase">
                        Case Study {study.id}
                      </span>
                      <TypewriterTitle text={study.title} />
                      <p className="text-gray-400 text-base sm:text-lg leading-relaxed">{study.overview}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                      <div className="space-y-6">
                        {/* Challenge Section */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemFadeIn}>
                          <h4 className="text-xl font-bold text-teal mb-3 flex items-center gap-2">
                            <Target className="w-5 h-5" />
                            The Challenge
                          </h4>
                          <p className="text-gray-300">{study.challenge}</p>
                        </motion.div>

                        {/* Strategy Staggered Fade-in */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                          <h4 className="text-xl font-bold text-gold mb-3 flex items-center gap-2">
                            <Lightbulb className="w-5 h-5" />
                            Our Strategy
                          </h4>
                          <ul className="space-y-2">
                            {study.strategy.map((item, i) => (
                              <motion.li key={i} variants={itemFadeIn} className="text-gray-300 flex items-start gap-3">
                                <span className="text-teal mt-1">•</span>
                                <span>{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>

                      <div className="space-y-4 sm:space-y-6">
                        {/* Execution Left-to-Right Slide */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                          <h4 className="text-lg sm:text-xl font-bold text-gold mb-2 sm:mb-3 flex items-center gap-2">
                            <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                            Creative Execution
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                            {study.execution.map((item, i) => (
                              <motion.div 
                                key={i} 
                                variants={i % 2 === 0 ? slideLeft : slideRight}
                                className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10"
                              >
                                <p className="text-xs sm:text-sm text-gray-300">{item}</p>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>

                        {/* Results Slide-up / Staggered */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                          <h4 className="text-lg sm:text-xl font-bold text-teal mb-2 sm:mb-3 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                            Results
                          </h4>
                          <div className="grid grid-cols-2 gap-2 sm:gap-3">
                            {study.results.map((result, i) => {
                              const Icon = result.icon;
                              return (
                                <motion.div 
                                  key={i} 
                                  variants={itemFadeIn}
                                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                  className="bg-gradient-to-br from-teal/20 to-gold/20 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-teal/30"
                                >
                                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold mb-1 sm:mb-2" />
                                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">{result.value}</p>
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}