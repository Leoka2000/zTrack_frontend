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
      name: "James Carter",
      title: "Chief Technology Officer (CTO)",
      image: "/zoltan-erdei.jpg"
    },
    {
      id: 3,
      name: "Sophia Martinez",
      title: "Head of Sustainability & ESG",
      image: "/zoltan-erdei.jpg"
    },
    {
      id: 4,
      name: "Michael Chen",
      title: "VP of Engineering",
      image: "/zoltan-erdei.jpg"
    },
    {
      id: 5,
      name: "Isabella Torres",
      title: "Director of Product Design",
      image: "/zoltan-erdei.jpg"
    },
    {
      id: 6,
      name: "David Williams",
      title: "Chief Financial Officer (CFO)",
      image: "/zoltan-erdei.jpg"
    }
  ];

  return (
    <div className="min-h-screen  px-8 py-16">
      <div className="max-w-7xl mx-auto">
   
        <div className="flex justify-between items-start mb-16">
          <div>
            <h1 className="text-6xl font-bold text-gray-900 mb-2">
              The Team Behind
            </h1>
            <h1 className="text-6xl font-bold text-lime-500">
              Smarter Charging
            </h1>
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
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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