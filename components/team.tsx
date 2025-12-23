'use client'
import React from 'react';
import { Card } from './ui/card';
import { Plus } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Emma Richardson",
      title: "Chief Executive Officer (CEO)",
      image: "/zoltan-erdei.jpg"
    },
    {
      id: 2,
      name: "Leo Reus",
      title: "Chief Technology Officer (CTO)",
      image: "/leo.jpeg"
    },
    
  ];

  return (
    <div className="min-h-screen  px-8 py-16">
      <div className=" mx-auto">
   
        <div className="flex justify-between items-start mb-16">
          <div className='text-4xl md:text-6xl'>
            <h1 className="grotesk font-medium text-green-950 mb-2">
              The Team Behind
            </h1>
   <h3 className="grotesk bg-gradient-to-r leading-12 from-[#45ae89] to-[#d7f448] bg-clip-text font-medium text-transparent pb-5 md:text-6xl text-4xl">
              Smarter Charging
            </h3>
          </div>
          <div className="max-w-md text-right">
            <p className="text-gray-600 leading-relaxed">
              Meet the minds driving innovation at Volthaus engineers, designers, and visionaries united by a shared mission to redefine the future of electric mobility.
            </p>
          </div>
        </div>

    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.id} 
              className="group p-6 relative cursor-pointer"
            >
            <span className='bg-white/20 backdrop-blur-md text-white p-2 rounded-full z-20 absolute top-10 right-10 border border-white/30'>
            <Plus size={15} />
          </span>
         
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[3/4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500  group-hover:scale-105"
                />
              </div>
              
      
              <div className="space-y-1">
                <p className="text-gray-500 text-sm">
                  {member.title}
                </p>
                <h3 className="text-2xl font-bold text-gray-900">
                  {member.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;