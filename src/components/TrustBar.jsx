import React from 'react';
import { motion } from 'framer-motion';

import logoApple from '../assets/logo-apple-news.png';
import logoGrit from '../assets/logo-grit-daily.png';
import logoBusiness from '../assets/logo-business-insider.png';

const TrustBar = () => {
  const brands = [
    logoApple, logoGrit, logoBusiness, 
    logoApple, logoGrit, logoBusiness,
    logoApple, logoGrit, logoBusiness
  ];

  return (
    <section className="py-10 bg-white border-b border-primary/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#1A4D2E]/40">As Featured In</span>
      </div>
      <div className="flex relative">
        <motion.div 
            className="flex gap-24 items-center whitespace-nowrap min-w-full will-change-transform"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
            {[...Array(6)].map((_, i) => (
                <div key={i} className="flex gap-24 items-center shrink-0">
                    {brands.map((brand, index) => (
                        <img 
                            key={index} 
                            src={brand} 
                            alt="Featured Brand" 
                            className="h-8 md:h-12 w-auto object-contain opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer" 
                        />
                    ))}
                </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
