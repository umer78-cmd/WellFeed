import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Apple, Play } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#1A4D2E] relative overflow-hidden flex items-center justify-center text-center px-6">
       {/* Background Noise */}
       <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
       
       {/* Decorative Rings */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border border-white/5 rounded-full z-0 pointer-events-none"></div>
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border border-white/5 rounded-full z-0 pointer-events-none"></div>

       <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
            <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-6xl md:text-8xl lg:text-9xl font-anton text-[#F9F7F2] mb-8 leading-[0.85]"
            >
                STOP PLANNING.<br/>
                <span className="text-[#CA673A]">START EATING.</span>
            </motion.h2>

            <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl text-white/80 font-dm leading-relaxed max-w-2xl mb-12"
            >
                The average person spends 2 hours a week deciding what to cook. WellFed does it in 2 minutes. Reclaim your evenings.
            </motion.p>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center"
            >
                <button className="bg-[#CA673A] text-white px-8 py-5 rounded-full font-bold uppercase tracking-wider hover:bg-[#b0562e] transition-all hover:scale-105 shadow-xl flex items-center gap-3">
                    <Apple size={24} className="mb-1" />
                    <span>Download on iOS & Android</span>
                </button>
            </motion.div>
       </div>
    </section>
  );
};

export default CTA;
