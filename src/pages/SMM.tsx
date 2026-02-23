import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';
import CaseStudies from '../components/CaseStudies';
import ClientsShowcase from '../components/ClientsShowcase';
import Showreel from '../components/Showreel';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';

interface SMMProps {
  scrollY: number;
}

export default function SMM({ scrollY }: SMMProps) {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Hero scrollY={scrollY} />
      <BentoGrid />
      <CaseStudies scrollY={scrollY} />
      <ClientsShowcase />
      <Showreel />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
}

