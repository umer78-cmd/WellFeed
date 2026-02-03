import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-primary/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left focus:outline-none group"
      >
        <h3 className="text-xl md:text-2xl font-anton text-primary group-hover:text-accent transition-colors pr-8 leading-tight">{question}</h3>
        <div className={`p-2 rounded-full transition-colors shrink-0 ${isOpen ? 'bg-accent text-white' : 'bg-transparent text-primary/30 group-hover:text-accent'}`}>
            {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-gray-600 text-lg leading-relaxed max-w-2xl font-dm">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    {
      question: "HOW DOES WELLFED CHOOSE RECIPES FOR ME?",
      answer: "WellFed tailors recipes based on your dietary preferences, favorite cuisines, and nutritional goals—ensuring you always find options you’ll love."
    },
    {
      question: "CAN I PLAN MY MEALS FOR THE ENTIRE WEEK?",
      answer: "Absolutely. With our meal-planning feature, you can schedule your breakfast, lunch, dinner, and even snacks for the entire week."
    },
    {
      question: "WHAT IF I HAVE DIETARY RESTRICTIONS OR ALLERGIES?",
      answer: "Simply update your profile with any dietary needs or allergies, and WellFed will filter recipes to ensure you have safe, delicious options."
    },
    {
      question: "ARE NUTRITIONAL FACTS AVAILABLE FOR EACH RECIPE?",
      answer: "Yes, every recipe includes detailed nutritional information to help you make informed decisions about your meals."
    },
    {
      question: "CAN WELLFED HELP ME CREATE A SHOPPING LIST?",
      answer: "Certainly! Once you select your meals for the week, WellFed automatically generates a grocery list with all the required ingredients."
    },
    {
      question: "HOW DO I SAVE MY FAVORITE RECIPES?",
      answer: "Tap the “Favorite” icon on any recipe to add it to your collection, so you can easily access your bookmarks whenever you need them."
    },
    {
      question: "IS WELLFED FREE, OR DO I NEED A SUBSCRIPTION?",
      answer: "WellFed offers a robust free version with essential features. For advanced tools and exclusive meal plans, you can upgrade to a premium subscription."
    },
    {
      question: "CAN I SHARE MEAL PLANS WITH FRIENDS OR FAMILY?",
      answer: "Yes! WellFed allows you to share your meal plans or individual recipes via in-app sharing, email, or social media."
    },
    {
        question: "HOW DOES WELLFED PROTECT MY DATA AND PRIVACY?",
        answer: "Your privacy is our top priority. We securely store your personal information and use it only to enhance your experience—never selling your data to third parties."
    }
  ];

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <section className="py-24 bg-[#F9F7F2] relative overflow-hidden" id="faq">
       {/* Decorative Ring */}
       <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
           className="absolute -left-[20%] top-[20%] w-[50vw] h-[50vw] border-[1px] border-primary/5 rounded-full pointer-events-none"
       />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Left Header */}
            <div className="lg:col-span-4">
                <div className="sticky top-32">
                    <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block flex items-center gap-2">
                        <HelpCircle size={16} /> Support
                    </span>
                    <h2 className="text-5xl md:text-7xl font-anton text-primary mb-6 leading-none">
                        COMMON<br/>QUESTIONS.
                    </h2>
                    <p className="text-gray-500 text-lg font-dm">
                        Everything you need to know about the product and billing. Can't find the answer you're looking for? <a href="#" className="text-accent underline hover:text-primary transition-colors">Chat to our team.</a>
                    </p>
                </div>
            </div>

            {/* Right FAQs */}
            <div className="lg:col-span-8">
                {visibleFaqs.map((faq, index) => (
                    <FAQItem key={index} {...faq} />
                ))}
                
                {!showAll && (
                    <div className="mt-8 flex justify-center lg:justify-start">
                        <button 
                            onClick={() => setShowAll(true)}
                            className="flex items-center gap-2 text-accent font-bold tracking-widest uppercase text-sm hover:text-primary transition-colors group"
                        >
                            See More Questions <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
                        </button>
                    </div>
                )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
