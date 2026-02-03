import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ProblemSolution from './components/ProblemSolution';
import ChefSpotlight from './components/ChefSpotlight';
import Features from './components/Features';
import Reviews from './components/Reviews';
import LifestyleHub from './components/LifestyleHub';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background font-dm">
      <Navbar />
      <Hero />
      <div className="relative z-10 bg-background">
        <TrustBar />
        <ProblemSolution />
        <ChefSpotlight />
        <Features />
        <Reviews />
        <LifestyleHub />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
