import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';
import alexNurmi from '../assets/alex-nurmi.png';

const ChefSpotlight = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yImage = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-[#1A4D2E] relative overflow-hidden flex items-center min-h-screen" id="chef">
       {/* Background Noise */}
       <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
       
       {/* Giant Background Text - Behind Image */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
           <motion.h1 style={{ y: yText }} className="text-[15vw] md:text-[18vw] leading-[0.8] font-anton text-white/5 opacity-100 whitespace-nowrap will-change-transform">
               CULINARY<br/>VISIONARY
           </motion.h1>
       </div>

       <div className="container mx-auto px-6 relative z-10 h-full flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left Content */}
            <div className="lg:w-1/2 order-2 lg:order-1 pt-12 lg:pt-0">
                 <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-8"
                 >
                     <div className="w-12 h-[1px] bg-[#CA673A]"></div>
                     <span className="text-[#CA673A] font-bold tracking-[0.3em] uppercase text-sm">Chef Spotlight</span>
                 </motion.div>

                 <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-7xl md:text-9xl font-anton text-white mb-6 leading-[0.85]"
                 >
                    ALEX<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CA673A] to-white/80">NURMI</span>
                 </motion.h2>

                 <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                 >
                     <p className="text-xl md:text-2xl font-serif italic text-white/80 mb-8 max-w-md">
                        "Harmonizing flavors and nutrition to craft a menu that nourishes the body."
                     </p>
                     
                     <p className="text-white/60 text-lg leading-relaxed font-dm max-w-lg mb-12 text-justify lg:text-left">
                        Like a nutritional architect, Alex designs culinary experiences that seamlessly integrate health-conscious ingredients, ensuring every dish contributes to overall well-being.
                     </p>
                     
                     <button className="group flex items-center gap-4 text-white hover:text-[#CA673A] transition-colors">
                        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#CA673A] group-hover:bg-[#CA673A]/10 transition-all">
                            <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
                        </div>
                        <span className="font-anton text-xl tracking-wide uppercase">Read Full Story</span>
                     </button>
                 </motion.div>
            </div>

            {/* Right/Center Image - The "Hero" */}
            <div className="lg:w-[45%] relative order-1 lg:order-2 h-[50vh] lg:h-[80vh] w-full flex items-center justify-center">
                {/* Decorative Ring */}
                <div className="absolute inset-0 border-[1px] border-white/10 rounded-full scale-[0.9] lg:scale-100 animate-spin-slow will-change-transform"></div>
                
                {/* Main Image */}
                <motion.div style={{ y: yImage }} className="relative z-20 w-full h-full flex items-center justify-center will-change-transform">
                    <img 
                        src={alexNurmi} 
                        alt="Alex Nurmi" 
                        className="h-full w-auto object-contain drop-shadow-2xl grayscale contrast-125 hover:grayscale-0 transition-all duration-700 ease-in-out"
                    />
                </motion.div>
                
                {/* Floating "Stamp" */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="absolute bottom-10 -left-6 md:bottom-20 md:-left-12 lg:bottom-10 lg:-left-10 z-30"
                >
                    <div className="relative w-32 h-32 md:w-40 md:h-40">
                         <div className="absolute inset-0 rounded-full border border-dashed border-[#CA673A] animate-spin-slow-reverse"></div>
                         <div className="absolute inset-2 bg-[#1A4D2E] rounded-full flex flex-col items-center justify-center text-center shadow-2xl border border-white/10">
                             <Star className="text-[#CA673A] fill-[#CA673A] mb-1" size={20} />
                             <span className="text-white font-anton text-lg leading-none">HEAD<br/>CHEF</span>
                         </div>
                    </div>
                </motion.div>
            </div>
       </div>
    </section>
  );
};

export default ChefSpotlight;
