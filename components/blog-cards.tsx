"use client";
import { Plus } from "lucide-react";
import React from "react";

const BlogCards = () => {
  const articles = [
    {
      id: 1,
      date: "Feb 11, 2025",
      title: "Collaboration with AutoVax: Fast Chargers for Dealerships",
      category: "Industry",
      image: "/zoltan-erdei.jpg",
    },
    {
      id: 2,
      date: "Feb 7, 2025",
      title: "EV Charging Rates Drop Thanks to Renewable Energy Surge",
      category: "Partnership",
      image: "/zoltan-erdei.jpg",
    },
    {
      id: 3,
      date: "Feb 1, 2025",
      title:
        "The Rise of Bidirectional Charging: Powering Your Home with Your EV",
      category: "Partnership",
      image: "/zoltan-erdei.jpg",
    },
    {
      id: 4,
      date: "Jan 28, 2025",
      title: "Smart Grid Integration: The Future of EV Charging",
      category: "Industry",
      image: "/zoltan-erdei.jpg",
    },
    {
      id: 5,
      date: "Jan 22, 2025",
      title: "Expanding Our Network: 500 New Charging Stations",
      category: "Partnership",
      image: "/zoltan-erdei.jpg",
    },
    {
      id: 6,
      date: "Jan 15, 2025",
      title: "Sustainable Charging Solutions for Urban Areas",
      category: "Industry",
      image: "/zoltan-erdei.jpg",
    },
  ];

  return (
    <div className="min-h-screen  px-8 py-16">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="group cursor-pointer relative">
              <span className="bg-white/20 backdrop-blur-md text-white p-2 rounded-full z-20 absolute top-3 right-3 border border-white/30">
                <Plus size={15} />
              </span>
        
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[16/10]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute top-3 left-3">
                  <div className="bg-white/20 backdrop-blur-md rounded-full px-3 py-0.5 border border-white/30">
                    <span className="text-white text-sm font-medium">
                      {article.date}
                    </span>
                  </div>
                </div>
              </div>
         
              <div className="space-y-4">
                <h3 className="text-2xl font-normal text-gray-900 leading-tight">
                  {article.title}
                </h3>

         
                <div className="inline-block">
                  <div className="border border-gray-300 rounded-full px-4 py-1.5">
                    <span className="text-gray-700 text-sm">
                      {article.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
