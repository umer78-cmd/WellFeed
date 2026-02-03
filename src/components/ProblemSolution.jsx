import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <section className="relative bg-[#F9F7F2]" id="mission">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
          {/* Chaos Side */}
          <div className="relative h-[60vh] md:h-auto overflow-hidden group">
              <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-700 group-hover:bg-black/20"></div>
              {/* Using a noisy/grainy background image for chaos */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=2687&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125 transition-transform duration-1000 group-hover:scale-105"></div>
              
              <div className="relative z-20 h-full flex flex-col items-center justify-center text-center p-8">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="border-4 border-red-500 text-red-500 rounded-full p-4 mb-6 backdrop-blur-sm"
                  >
                      <XCircle size={64} strokeWidth={1} />
                  </motion.div>
                  <h3 className="text-6xl md:text-8xl font-anton text-white mb-4 tracking-tighter">CHAOS</h3>
                  <p className="text-gray-200 font-dm text-xl max-w-sm">
                      Spoiled produce. Last-minute takeout. <br/> The "What's for dinner?" panic.
                  </p>
              </div>
          </div>

          {/* Control Side */}
          <div className="relative h-[60vh] md:h-auto bg-[#DAD7CD] flex flex-col items-center justify-center p-8 md:p-12 overflow-hidden">
             {/* Decorative Rings */}
             <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                 className="absolute -right-20 -top-20 w-96 h-96 border-[1px] border-primary/10 rounded-full dashed-border pointer-events-none will-change-transform"
             />
             <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                 className="absolute -left-10 bottom-10 w-64 h-64 border-[1px] border-white/20 rounded-full pointer-events-none will-change-transform"
             />

             <div className="relative z-10 text-center">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    viewport={{ once: true }}
                    className="inline-block bg-primary text-white rounded-full p-4 mb-6 shadow-xl shadow-primary/20"
                  >
                      <CheckCircle2 size={64} strokeWidth={1} />
                  </motion.div>
                  
                  <h3 className="text-6xl md:text-8xl font-anton text-primary mb-4 tracking-tighter">CONTROL</h3>
                  <p className="text-primary/80 font-dm text-xl max-w-sm mx-auto mb-8">
                      Automated shopping lists. <br/> Zero waste. Pure peace of mind.
                  </p>

                  {/* Micro UI Card */}
                  <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-white p-4 rounded-xl shadow-lg max-w-xs mx-auto transform -rotate-2 hover:rotate-0 transition-transform duration-300"
                  >
                      <div className="flex items-center gap-3 mb-2 opacity-50">
                          <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                          <div className="h-2 w-20 bg-gray-100 rounded"></div>
                      </div>
                      <div className="h-px bg-gray-100 w-full mb-3"></div>
                      <div className="flex items-center justify-between text-primary font-bold">
                          <span>Weekly Savings</span>
                          <span>$124.50</span>
                      </div>
                  </motion.div>
             </div>
          </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
