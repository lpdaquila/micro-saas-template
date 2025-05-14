// app/components/landing/LandingPage.tsx
import React, { JSX } from 'react';
import { HeroSection } from './HeroSection';
import { FeaturesSection } from './FeaturesSection';
import { Footer } from './Footer';
import { HowItWorksSection } from './HowItWorks';
import { PricingTeaserSection } from './PriceTeaserSection';
// Importe um Navbar se tiver um: import { Navbar } from '../common/Navbar';

export function LandingPage(): JSX.Element {
  return (
    <>
      {/* <Navbar /> */} {/* Descomente se tiver um Navbar */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingTeaserSection />
        {/* Você pode adicionar mais seções aqui (ex: Testimonials, FAQ) */}
      </main>
      <Footer />
    </>
  );
}