import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    headline: "WellFed changed my meal prep game!",
    text: "As a working mom of two, I never had time to plan healthy meals. WellFed has literally saved our dinnertime. My kids are actually eating vegetables now! Who would have thought an app could make such a difference?",
    user: "Sarah Johnson",
    location: "Boston",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    headline: "Finally sticking to my diet!",
    text: "I've tried every diet app out there, but WellFed is the only one that actually understands my keto lifestyle. The personalized shopping lists alone have saved me hours each week. My doctor is amazed at my latest lab results!",
    user: "Michael Chen",
    location: "Seattle",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    headline: "Perfect for my fitness journey",
    text: "As a personal trainer, I'm always looking for tools to help my clients. WellFed has become my secret weapon! The macro tracking is spot-on, and the recipe suggestions keep things interesting. I've recommended it to all my clients.",
    user: "Alicia Rodriguez",
    location: "Miami",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 4,
    headline: "Saved my relationship with food",
    text: "After years of struggling with my eating habits, WellFed helped me develop a healthier relationship with food. The meal planning is intuitive, and I love how it adapts to my preferences. For the first time, healthy eating feels sustainable.",
    user: "David Williams",
    location: "Chicago",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg"
  },
  {
    id: 5,
    headline: "Perfect for our busy household",
    text: "Between my husband's gluten intolerance and my vegetarian diet, meal planning was a nightmare. WellFed somehow manages to suggest meals we both love! The shared shopping list feature has eliminated our \"who's stopping at the grocery store\" texts.",
    user: "Emma Thompson",
    location: "Austin",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    id: 6,
    headline: "From takeout addict to home chef",
    text: "I used to order takeout five nights a week because cooking felt overwhelming. WellFed's step-by-step recipes and prep instructions made cooking approachable. I've saved money, lost weight, and actually enjoy cooking now. Who am I?!",
    user: "James Wilson",
    location: "Portland",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  }
];

const Reviews = () => {
  return (
    <section className="py-24 bg-[#F9F7F2] overflow-hidden" id="reviews">
      <div className="container mx-auto px-6 mb-16">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-5xl md:text-7xl font-anton text-[#1A4D2E]"
        >
          REAL PEOPLE.<br/>REAL RESULTS.
        </motion.h2>
      </div>

      <div className="relative w-full">
        {/* Gradient Masks for smooth fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F9F7F2] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F9F7F2] to-transparent z-10 pointer-events-none"></div>

        <motion.div 
            className="flex gap-8 w-max pl-8 will-change-transform"
            animate={{ x: "-50%" }}
            transition={{ 
                repeat: Infinity, 
                ease: "linear", 
                duration: 60 // Slow, smooth scroll
            }}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="w-[85vw] md:w-[450px] bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl flex flex-col justify-between border border-[#1A4D2E]/5 hover:scale-[1.02] transition-transform duration-300"
            >
              <div>
                 <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} className="fill-[#CA673A] text-[#CA673A]" />
                    ))}
                 </div>
                 <p className="text-2xl md:text-3xl font-anton text-[#1A4D2E] mb-4 leading-tight">“{review.headline}”</p>
                 <p className="text-gray-600 text-lg leading-relaxed font-dm">{review.text}</p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                  <div>
                      <p className="font-bold text-[#1A4D2E] text-lg">{review.user}</p>
                      <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">{review.location}</p>
                  </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
