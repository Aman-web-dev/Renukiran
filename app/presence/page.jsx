'use client'

import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Users, Heart, BookOpen, Briefcase, Shield, Sparkles } from 'lucide-react';
import IndianMap from "@/india.svg"

const OurPresence = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

 
  const states = [
    {
      name: "Assam",
      color: "from-emerald-500 to-teal-600",
      icon: "🌿",
      description: "In the lush and culturally rich state of Assam, we focus on bridging educational gaps, promoting women’s empowerment, and enhancing healthcare access, particularly in rural and flood-affected areas. Our initiatives also encourage sustainable livelihoods through skill development programs, ensuring long-term resilience for local communities.",
      focus: ["Educational Gaps", "Women's Empowerment", "Healthcare Access", "Skill Development"],
      speciality: "Flood-affected area rehabilitation"
    },
    {
      name: "Bihar",
      color: "from-amber-500 to-orange-600",
      icon: "🌾",
      description: "In Bihar, a state with immense potential yet facing considerable development challenges, we work extensively on education, women’s self-reliance programs, health awareness, and vocational training. Our efforts aim to create opportunities for socio-economic upliftment, especially for rural women and children.",
      focus: ["Education", "Women's Self-reliance", "Health Awareness", "Vocational Training"],
      speciality: "Rural women & children upliftment"
    },
    {
      name: "Delhi",
      color: "from-purple-500 to-pink-600",
      icon: "🏙️",
      description: "Amidst the fast-paced and ever-evolving landscape of Delhi and the National Capital Region (NCR), Renukiran Welfare Foundation has strategically positioned itself to uplift and support urban communities. Our initiatives here include skill development, livelihood training, entrepreneurship support, education access, and health and hygiene awareness, addressing the pressing needs of the urban marginalized.",
      focus: ["Skill Development", "Livelihood Training", "Entrepreneurship Support", "Health & Hygiene"],
      speciality: "Urban community support"
    },
    {
      name: "Haryana",
      color: "from-blue-500 to-indigo-600",
      icon: "🎭",
      description: "In the culturally vibrant heartland of Haryana, we focus on education, women's empowerment, and health and hygiene awareness. Our community-driven approach ensures that every initiative aligns with local traditions, empowering individuals through skill-building workshops, menstrual hygiene campaigns, and leadership development programs.",
      focus: ["Education", "Women's Empowerment", "Health & Hygiene", "Leadership Development"],
      speciality: "Community-driven initiatives"
    },
    {
      name: "Jammu & Kashmir",
      color: "from-cyan-500 to-blue-600",
      icon: "🏔️",
      description: "In the breathtaking yet socio-economically complex region of Jammu & Kashmir, we work to promote education, peace-building, and women’s empowerment. Our programs focus on providing access to quality education, psychological support for children and youth, and creating livelihood opportunities amidst challenging circumstances.",
      focus: ["Quality Education", "Peace-building", "Psychological Support", "Livelihood Opportunities"],
      speciality: "Peace-building & psychological support"
    },
    {
      name: "Karnataka",
      color: "from-red-500 to-rose-600",
      icon: "💻",
      description: "In Karnataka, a hub of innovation and cultural diversity, we implement programs that bridge urban-rural divides. Our focus areas include education for underserved communities, health awareness, digital literacy initiatives, and women’s entrepreneurship development, promoting inclusive growth across the state.",
      focus: ["Education", "Health Awareness", "Digital Literacy", "Women's Entrepreneurship"],
      speciality: "Urban-rural bridge building"
    },
    {
      name: "Madhya Pradesh",
      color: "from-green-500 to-emerald-600",
      icon: "🏛️",
      description: "In the heart of India, Madhya Pradesh, our efforts are aimed at rural education, health awareness, and women's economic empowerment. From skill-building initiatives to healthcare outreach, we work closely with communities to create sustainable pathways out of poverty and drive community-led development.",
      focus: ["Rural Education", "Health Awareness", "Women's Economic Empowerment", "Community Development"],
      speciality: "Community-led development"
    },
    {
      name: "Punjab",
      color: "from-yellow-500 to-amber-600",
      icon: "🌾",
      description: "In the vibrant fields of Punjab, our programs center around education, healthcare, and women’s empowerment. Focusing particularly on rural and semi-urban areas, we work to improve literacy rates, promote hygiene practices, support agricultural sustainability, and empower women through skill-building and leadership initiatives.",
      focus: ["Education", "Healthcare", "Agricultural Sustainability", "Women's Leadership"],
      speciality: "Agricultural community support"
    },
    {
      name: "Rajasthan",
      color: "from-orange-500 to-red-600",
      icon: "🏜️",
      description: "Amid the vast deserts and colorful traditions of Rajasthan, we focus on bridging educational divides, promoting healthcare access, and supporting sustainable livelihoods for women and marginalized communities. By addressing geographical remoteness and socio-economic inequalities, we aim to create holistic and lasting change.",
      focus: ["Educational Divides", "Healthcare Access", "Sustainable Livelihoods", "Community Empowerment"],
      speciality: "Desert community development"
    },
    {
      name: "Uttar Pradesh",
      color: "from-indigo-500 to-purple-600",
      icon: "🕌",
      description: "In one of India’s most populous states, Uttar Pradesh, we work from urban hubs to the remotest villages, focusing on education access, women’s empowerment, healthcare, and skill development. Our initiatives are designed to uplift communities by building resilience, promoting literacy, and fostering economic independence.",
      focus: ["Education Access", "Women's Empowerment", "Healthcare", "Skill Development"],
      speciality: "Large-scale community impact"
    }
  ];

  const impactStats = [
    { icon: <Users className="w-8 h-8" />, number: "10", label: "States Covered", color: "text-blue-600" },
    { icon: <Heart className="w-8 h-8" />, number: "50K+", label: "Lives Touched", color: "text-red-600" },
    { icon: <BookOpen className="w-8 h-8" />, number: "200+", label: "Programs Running", color: "text-green-600" },
    { icon: <Briefcase className="w-8 h-8" />, number: "15K+", label: "Skills Trained", color: "text-purple-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-12 h-12 text-yellow-400 mr-4" />
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Presence</span>
              </h1>
              <Sparkles className="w-12 h-12 text-yellow-400 ml-4" />
            </div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              <span className="text-yellow-400 font-semibold">"Kiran Umeed Ki"</span> - A Ray of Hope across India
            </p>
            <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
              Touching lives with dignity, leaving no one behind, and driving sustainable progress across diverse states
            </p>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="w-4 h-4 bg-yellow-400 rounded-full opacity-70"></div>
        </div>
        <div className="absolute top-40 right-20 animate-pulse">
          <div className="w-6 h-6 bg-pink-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-bounce delay-1000">
          <div className="w-3 h-3 bg-blue-400 rounded-full opacity-80"></div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="container mx-auto px-6 -mt-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => (
            <div key={index} className={`bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-l-4 border-gradient-to-b ${stat.color.replace('text-', 'border-')}`}>
              <div className={`${stat.color} mb-3`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* States Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Reach Across India</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each state presents unique challenges and opportunities. We've tailored our programs to meet local needs while staying true to our mission.
          </p>
        </div>

        <div className='lg:mb-20 mb-12 w-full flex justify-center py-8'>
          <IndianMap/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {states.map((state, index) => (
            <div
              key={state.name}
              className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                selectedState === state.name ? 'scale-105' : ''
              } ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedState(selectedState === state.name ? null : state.name)}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {/* State Header */}
                <div className={`bg-gradient-to-r ${state.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4">
                    <div className="w-24 h-24 bg-white opacity-10 rounded-full"></div>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold">{state.name}</h3>
                      <span className="text-3xl">{state.icon}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span className="font-medium">{state.speciality}</span>
                    </div>
                  </div>
                </div>

                {/* State Content */}
                <div className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {state.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800 flex items-center">
                      <Shield className="w-4 h-4 mr-2 text-blue-600" />
                      Focus Areas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {state.focus.map((area, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 bg-gradient-to-r ${state.color} text-white text-sm rounded-full font-medium shadow-sm`}
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Indicator */}
                <div className="h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-blue-400 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Statement */}
      <div className=" bg-[#233876] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Our Vision Remains Clear
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-lg">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-indigo-900" />
                </div>
                <p className="font-semibold">Touch every life with dignity</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-indigo-900" />
                </div>
                <p className="font-semibold">Leave no one behind</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="w-8 h-8 text-indigo-900" />
                </div>
                <p className="font-semibold">Drive sustainable progress</p>
              </div>
            </div>
            <p className="text-xl mt-8 text-gray-200">
              Together, we stand tall as a true <span className="text-yellow-400 font-bold">"Kiran Umeed Ki"</span> — 
              committed to creating equitable opportunities and building a stronger, more compassionate India.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default OurPresence;