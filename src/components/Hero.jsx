import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, Download, Star } from 'lucide-react';
import heroAppScreen from '../assets/hero-app-screen.png';

const Hero = () => {
  // Mouse position state for parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs to prevent jitter
  const mouseX = useSpring(x, { stiffness: 15, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 15, damping: 30 });

  function handleMouseMove({ clientX, clientY, currentTarget }) {
    const { width, height } = currentTarget.getBoundingClientRect();
    const xPct = clientX / width - 0.5;
    const yPct = clientY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  // Parallax transforms for different layers
  const moveRings = useTransform(mouseX, [-0.5, 0.5], [-60, 60]);
  const moveRingsReverse = useTransform(mouseX, [-0.5, 0.5], [60, -60]);
  const movePhone = useTransform(mouseX, [-0.5, 0.5], [-40, 40]);
  const movePhoneY = useTransform(mouseY, [-0.5, 0.5], [-40, 40]);
  const moveBadges = useTransform(mouseX, [-0.5, 0.5], [-25, 25]);
  const moveText = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  return (
    <section 
        onMouseMove={handleMouseMove}
        className="sticky top-0 z-0 h-[100dvh] w-full overflow-hidden bg-[#97A97C] flex flex-col items-center pt-32 pb-12"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          
          {/* Large Geometric Rings - Left */}
          <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
             style={{ x: moveRings, y: moveRings }}
             className="absolute -left-[10%] top-[10%] w-[60vw] h-[60vw] border-[3px] border-primary/5 rounded-full will-change-transform"
          />
          <motion.div 
             animate={{ rotate: -360 }}
             transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
             style={{ x: moveRingsReverse, y: moveRingsReverse }}
             className="absolute -left-[5%] top-[20%] w-[40vw] h-[40vw] border-[2px] border-white/10 rounded-full will-change-transform"
          />

          {/* Large Geometric Rings - Right */}
          <motion.div 
             animate={{ rotate: -360 }}
             transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
             style={{ x: moveRings, y: moveRingsReverse }}
             className="absolute -right-[15%] bottom-[5%] w-[50vw] h-[50vw] border-[3px] border-primary/5 rounded-full will-change-transform"
          />
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 130, repeat: Infinity, ease: "linear" }}
             style={{ x: moveRingsReverse, y: moveRings }}
             className="absolute -right-[5%] bottom-[20%] w-[30vw] h-[30vw] border-[2px] border-accent/10 rounded-full will-change-transform"
          />

          {/* Floating Star/Sparkle Left */}
          <motion.div
             animate={{ rotate: 360 }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             style={{ x: moveBadges }}
             className="absolute left-[8%] bottom-[20%] opacity-40 will-change-transform"
          >
             <Star size={64} className="text-primary fill-primary/20" />
          </motion.div>

           {/* Floating Star/Sparkle Right */}
           <motion.div
             animate={{ rotate: -360 }}
             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
             style={{ x: moveBadges }}
             className="absolute right-[8%] top-[15%] opacity-40 will-change-transform"
          >
             <Star size={48} className="text-white fill-white/20" />
          </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full h-full flex flex-col items-center">
        
        {/* Giant Brand Name */}
        <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ x: moveText, willChange: "transform" }}
            className="text-[15vw] leading-none font-anton text-primary text-center select-none"
        >
            WellFed
        </motion.h1>

        {/* Main Content Layout */}
        <div className="relative w-full max-w-6xl mt-[-5vw] md:mt-[-8vw] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Badges/Text */}
            <div className="col-span-12 md:col-span-3 flex flex-col gap-8 md:items-end order-2 md:order-1 relative z-20">
                 {/* Handwritten Note */}
                 <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    style={{ x: moveBadges, willChange: "transform" }}
                    className="relative cursor-pointer group"
                 >
                    <motion.div
                      animate={{ rotate: [-12, -8, -12] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      style={{ willChange: "transform" }}
                    >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latn-script_o_with_tilde.png" alt="scribble" className="w-16 opacity-0 absolute" /> {/* Placeholder/Shim */}
                        <p className="font-handwriting text-primary text-xl transform group-hover:rotate-0 transition-transform">
                            Real Ingredients,<br/>Smart Recipes
                        </p>
                        <svg className="absolute -bottom-4 -right-4 w-12 h-12 text-white stroke-current" viewBox="0 0 100 100" fill="none">
                             <path d="M10,50 Q50,90 90,10" strokeWidth="2" />
                        </svg>
                    </motion.div>
                 </motion.div>

                 {/* Badge 1 */}
                 <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                    style={{ x: moveBadges, willChange: "transform" }}
                 >
                     <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        style={{ willChange: "transform" }}
                        className="w-32 h-32 rounded-full bg-white flex flex-col items-center justify-center text-center p-4 shadow-xl shadow-primary/10"
                     >
                        <span className="text-4xl font-anton text-primary">95%</span>
                        <span className="text-xs font-bold uppercase text-primary/70">Less Food Waste</span>
                     </motion.div>
                 </motion.div>
            </div>

            {/* Central Product Image */}
            <div className="col-span-12 md:col-span-6 flex justify-center order-1 md:order-2 relative">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{ x: movePhone, y: movePhoneY, willChange: "transform" }}
                    className="relative z-10 w-64 md:w-80 lg:w-96"
                >
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        style={{ willChange: "transform" }}
                    >
                        <div className="aspect-[9/19] bg-black rounded-[3rem] border-8 border-primary/20 shadow-2xl overflow-hidden relative">
                             <img 
                                src={heroAppScreen}
                                alt="App Interface" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        {/* Ring Behind */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[60%] border-[2px] border-white/30 rounded-full -z-10 rotate-12"></div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Right Text */}
            <div className="col-span-12 md:col-span-3 flex flex-col gap-4 text-center md:text-left order-3 relative z-20">
                <motion.h2 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    style={{ x: moveText, willChange: "transform" }}
                    className="text-5xl md:text-6xl font-anton text-primary leading-[0.85] text-right"
                >
                    SMART<br/>
                    MEETS<br/>
                    TASTY
                </motion.h2>

                {/* Badge 2 */}
                <motion.div 
                     initial={{ scale: 0, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     transition={{ delay: 1.2, type: "spring" }}
                     style={{ x: moveBadges, willChange: "transform" }}
                     className="self-end mt-4"
                >
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        style={{ willChange: "transform" }}
                        className="w-28 h-28 rounded-full bg-accent text-white flex flex-col items-center justify-center text-center p-2 shadow-xl"
                    >
                        <span className="text-3xl font-anton">20+</span>
                        <span className="text-[10px] font-bold uppercase">Cuisines</span>
                    </motion.div>
                </motion.div>

                {/* Relocated CTA */}
                <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ x: moveBadges, willChange: "transform" }}
                    className="self-end mt-8 bg-white text-primary px-8 py-3 rounded-full font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-primary hover:text-white transition-colors shadow-lg"
                >
                    Download App <ArrowUpRight size={18} />
                </motion.button>
            </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-primary py-3 overflow-hidden z-20">
        <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ willChange: "transform" }}
            className="flex items-center gap-12 whitespace-nowrap"
        >
            {/* Duplicated content for seamless scroll */}
            {[...Array(10)].map((_, i) => (
                <div key={i} className="flex items-center gap-12">
                     <span className="text-white font-anton uppercase text-xl tracking-widest opacity-80">Fresh Ingredients</span>
                     <Star size={12} className="text-accent fill-accent" />
                     <span className="text-white font-anton uppercase text-xl tracking-widest opacity-80">Smart Recipes</span>
                     <Star size={12} className="text-accent fill-accent" />
                     <span className="text-white font-anton uppercase text-xl tracking-widest opacity-80">Less Waste</span>
                     <Star size={12} className="text-accent fill-accent" />
                </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
