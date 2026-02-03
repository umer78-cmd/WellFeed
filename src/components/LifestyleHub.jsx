import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, BookOpen, X } from 'lucide-react';
import articleKeto from '../assets/article-keto-paleo.jpg';
import articleMeal from '../assets/article-meal-prep.jpg';
import articleSick from '../assets/article-sick-foods.png';

const LifestyleHub = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    { 
        title: "Paleo Vs. Keto: Spot the Difference", 
        category: "Nutrition",
        desc: "The Paleolithic and Ketogenic diets are two popular lifestyle choices for those looking to improve their health. While both emphasize whole foods and restrict sugar, they have distinct philosophies on grains and dairy.", 
        image: articleKeto 
    },
    { 
        title: "How to Make a Balanced Dinner Plate (Keto Edition)", 
        category: "Meal Prep",
        desc: "The Keto diet includes foods that are high in fat and low in carbohydrates like seafood, unprocessed cheese, meat and poultry. Learn how to construct the perfect plate to maintain ketosis without sacrificing flavor.", 
        image: articleMeal 
    },
    { 
        title: "Five Best Foods to Eat When You are Sick", 
        category: "Health",
        desc: "In this article, we discuss the five best foods to eat whether you have nausea, cold-like symptoms, dehydration, or the flu. Proper nutrition is your body's best defense and recovery tool.", 
        image: articleSick 
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" id="articles">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-3xl">
                <span className="text-[#CA673A] font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
                    <BookOpen size={16} /> The Journal
                </span>
                <h2 className="text-5xl md:text-7xl font-anton text-[#1A4D2E] mb-6 leading-tight">
                    LATEST ARTICLES
                </h2>
                <p className="text-xl text-gray-500 font-dm leading-relaxed max-w-2xl">
                    Explore our collection of insightful articles that will help you eat healthier, plan better meals, and understand nutrition more deeply.
                </p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-[#1A4D2E] font-bold uppercase tracking-widest hover:text-[#CA673A] transition-colors group">
                View All Posts 
                <ArrowUpRight size={20} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {articles.map((article, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedArticle(article)}
                    className="group cursor-pointer flex flex-col h-full"
                >
                    {/* Image Container */}
                    <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-8 relative shadow-lg">
                        <img 
                            src={article.image} 
                            alt={article.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-[#1A4D2E]/0 group-hover:bg-[#1A4D2E]/10 transition-colors duration-500"></div>
                        
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full">
                            <ArrowUpRight size={20} className="text-[#1A4D2E]" />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-grow">
                        <h3 className="text-2xl md:text-3xl font-anton text-[#1A4D2E] mb-4 group-hover:text-[#CA673A] transition-colors leading-tight">
                            {article.title}
                        </h3>
                        <p className="text-gray-500 text-lg leading-relaxed mb-6 font-dm line-clamp-3 flex-grow">
                            {article.desc}
                        </p>
                        
                        <div className="flex items-center gap-2 text-[#1A4D2E] font-bold uppercase tracking-wider text-sm mt-auto group/btn">
                            <span className="border-b-2 border-[#1A4D2E]/20 group-hover/btn:border-[#CA673A] transition-colors pb-1">Read Article</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedArticle && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedArticle(null)}
                className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-8"
            >
                <motion.div 
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white rounded-[2rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl flex flex-col md:flex-row overflow-hidden"
                >
                    {/* Close Button */}
                    <button 
                        onClick={() => setSelectedArticle(null)}
                        className="absolute top-4 right-4 z-20 bg-white p-2 rounded-full hover:bg-gray-100 transition-colors shadow-sm"
                    >
                        <X size={24} className="text-[#1A4D2E]" />
                    </button>

                    {/* Modal Image */}
                    <div className="md:w-1/2 h-64 md:h-auto relative">
                        <img 
                            src={selectedArticle.image} 
                            alt={selectedArticle.title} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
                    </div>

                    {/* Modal Content */}
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-[#F9F7F2]">
                        <span className="text-[#CA673A] font-bold tracking-widest uppercase text-sm mb-4">
                            {selectedArticle.category || "Article"}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-anton text-[#1A4D2E] mb-6 leading-[0.95]">
                            {selectedArticle.title}
                        </h2>
                        <div className="h-1 w-20 bg-[#CA673A] mb-8"></div>
                        
                        <p className="text-gray-600 text-lg leading-relaxed font-dm mb-8">
                            {selectedArticle.desc}
                        </p>
                        
                        <p className="text-gray-500 text-base leading-relaxed font-dm italic border-l-4 border-[#1A4D2E]/20 pl-4">
                            "This is a preview of the article content. In a full implementation, this modal would connect to a CMS or load the full blog post text here."
                        </p>

                        <button className="mt-8 bg-[#1A4D2E] text-white py-4 px-8 rounded-full font-bold uppercase tracking-wider hover:bg-[#153e25] transition-colors w-max">
                            Read Full Post
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LifestyleHub;
