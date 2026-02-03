import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Smartphone, Utensils, Calendar, ArrowUpRight, X } from 'lucide-react';
import featurePhone from '../assets/feature-phone.png';
import featureRecipe from '../assets/feature-recipe.png';
import featureSchedule from '../assets/feature-schedule.png';

const features = [
  {
    title: "AI-Powered Recommendations",
    description: "Our advanced AI analyzes your preferences and dietary needs to suggest meals that are perfect for you and your lifestyle.",
    src: featurePhone,
    icon: Smartphone,
    color: "bg-[#1A4D2E]", // Deep Basil Green
    textColor: "text-white",
    subColor: "text-accent"
  },
  {
    title: "Personalized Recipes",
    description: "Enjoy a curated selection of recipes that evolve with your feedback and preferences, ensuring every meal is something you'll love.",
    src: featureRecipe,
    icon: Utensils,
    color: "bg-[#F9F7F2]", // Cream / Oat
    textColor: "text-[#1A4D2E]",
    subColor: "text-[#CA673A]"
  },
  {
    title: "Smart Meal Planning",
    description: "Let our AI help you effortlessly plan your meals, saving time and ensuring balanced nutrition throughout your week.",
    src: featureSchedule,
    icon: Calendar,
    color: "bg-[#CA673A]", // Spiced Terracotta
    textColor: "text-white",
    subColor: "text-[#1A4D2E]"
  }
];

const Card = ({ i, title, description, src, icon: Icon, color, textColor, subColor, progress, range, targetScale, onSelect }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  
  // Smooth blur entrance linked to scroll
  const blurOpacity = useTransform(scrollYProgress, [0.4, 1], [0, 0.5]);
  const blurScale = useTransform(scrollYProgress, [0.4, 1], [0.8, 1]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 overflow-hidden">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className={`flex flex-col relative h-[90vh] w-[95%] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl origin-top ${color} will-change-transform`}
      >
        <div className={`p-8 md:p-16 h-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${textColor}`}>
            
            {/* Text Content */}
            <div className="flex flex-col justify-center order-2 lg:order-1 relative z-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${i === 1 ? 'bg-[#1A4D2E]/10' : 'bg-white/10'}`}>
                    <Icon size={32} className={i === 1 ? 'text-[#1A4D2E]' : 'text-white'} />
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-anton mb-6 leading-tight">
                    {title.split(" ").map((word, idx) => (
                        <span key={idx} className="block">{word}</span>
                    ))}
                </h2>
                <p className={`text-lg md:text-xl font-dm max-w-md opacity-80 mb-8 leading-relaxed`}>
                    {description}
                </p>
                <div 
                    onClick={onSelect}
                    className="flex items-center gap-2 font-bold tracking-widest uppercase text-sm cursor-pointer group w-fit"
                >
                    <span className={subColor}>Learn more</span>
                    <ArrowUpRight size={18} className={`transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${subColor}`} />
                </div>
            </div>

            {/* Image/Visual */}
            <div className="relative h-full w-full flex items-center justify-center order-1 lg:order-2 overflow-hidden rounded-[2rem]">
                <div className="relative w-full h-full flex items-center justify-center">
                     {/* Inner Image Container for Parallax */}
                     <motion.div style={{ scale: imageScale }} className="relative h-[40vh] md:h-[50vh] lg:h-[65vh] w-auto aspect-[9/19] rounded-[2rem] md:rounded-[3rem] overflow-hidden border-8 border-black shadow-2xl transform rotate-[-5deg] lg:rotate-0 hover:rotate-0 transition-transform duration-500 will-change-transform">
                        <img 
                            src={src} 
                            alt={title} 
                            className="object-cover w-full h-full"
                        />
                         {/* Glossy overlay */}
                         <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none z-10"></div>
                     </motion.div>
                     
                     {/* Decorative Elements behind phone - Optimized Gradient */}
                     <motion.div 
                        style={{ 
                            opacity: blurOpacity, 
                            scale: blurScale,
                            background: i === 1 
                                ? 'radial-gradient(circle, rgba(202,103,58,0.6) 0%, transparent 70%)' 
                                : 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)'
                        }}
                        className="absolute -z-10 w-[600px] h-[600px] rounded-full will-change-transform" 
                     />
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  )
}

const Features = () => {
  const container = useRef(null);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <div ref={container} id="features" className="relative bg-[#1A4D2E]">
        {
        features.map( (project, i) => {
          const targetScale = 1 - ( (features.length - i) * 0.05);
          return <Card 
                    key={i} 
                    i={i} 
                    {...project} 
                    progress={scrollYProgress} 
                    range={[i * .25, 1]} 
                    targetScale={targetScale}
                    onSelect={() => setSelectedFeature(project)}
                 />
        })
        }

        {/* Modal */}
        <AnimatePresence>
            {selectedFeature && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedFeature(null)}
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-8"
                >
                    <motion.div 
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-[2rem] max-w-5xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl flex flex-col md:flex-row overflow-hidden"
                    >
                        {/* Close Button */}
                        <button 
                            onClick={() => setSelectedFeature(null)}
                            className="absolute top-4 right-4 z-20 bg-white p-2 rounded-full hover:bg-gray-100 transition-colors shadow-sm"
                        >
                            <X size={24} className="text-[#1A4D2E]" />
                        </button>

                        {/* Modal Image Section */}
                        <div className={`md:w-1/2 h-64 md:h-auto relative flex items-center justify-center p-8 ${selectedFeature.color}`}>
                            <div className="relative z-10 w-[60%] h-auto">
                                <img 
                                    src={selectedFeature.src} 
                                    alt={selectedFeature.title} 
                                    className="w-full h-full object-contain drop-shadow-2xl"
                                />
                            </div>
                            {/* Decorative Background Pattern */}
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
                        </div>

                        {/* Modal Content */}
                        <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-[#F9F7F2]">
                            <div className="w-16 h-16 rounded-2xl bg-[#1A4D2E]/10 flex items-center justify-center mb-8">
                                <selectedFeature.icon size={32} className="text-[#1A4D2E]" />
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl font-anton text-[#1A4D2E] mb-6 leading-none">
                                {selectedFeature.title}
                            </h2>
                            
                            <div className="h-1 w-20 bg-[#CA673A] mb-8"></div>
                            
                            <p className="text-gray-600 text-xl leading-relaxed font-dm mb-8">
                                {selectedFeature.description}
                            </p>
                            
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#1A4D2E]/5">
                                <h4 className="font-bold text-[#1A4D2E] mb-2 uppercase tracking-wider text-sm">Key Benefit</h4>
                                <p className="text-gray-500 font-dm">
                                    Experience seamless integration with your daily routine. This feature is designed to save you time while maximizing nutritional value.
                                </p>
                            </div>

                            <button className="mt-8 bg-[#1A4D2E] text-white py-4 px-8 rounded-full font-bold uppercase tracking-wider hover:bg-[#153e25] transition-colors w-max">
                                Try It Now
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  )
}

export default Features;
