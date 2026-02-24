import { useState, useEffect } from 'react';
import WebsiteHero from '../components/WebsiteHero';
import WebsitePortfolio from '../components/WebsitePortfolio';
import WebsiteCaseStudies from '../components/WebsiteCaseStudies';
import Testimonials from '../components/Testimonials';
import WebsiteCTA from '../components/WebsiteCTA';
import Footer from '../components/Footer';

export default function Websites() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <WebsiteHero scrollY={scrollY} />
      <WebsitePortfolio />
      {/* <WebsiteCaseStudies scrollY={scrollY} /> */}
      {/* <Testimonials /> */}
      <WebsiteCTA />
      <Footer />
    </div>
  );
}

