'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Heart, Star } from 'lucide-react';

export default function RenukiranThankYou() {
  const [animateIn, setAnimateIn] = useState(false);
  const [showStars, setShowStars] = useState(false);
  
  useEffect(() => {
    // Trigger main content animation on load
    setTimeout(() => {
      setAnimateIn(true);
    }, 300);
    
    // Show stars after a delay
    setTimeout(() => {
      setShowStars(true);
    }, 1000);
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 p-4 overflow-hidden">
      {/* Background decorative elements */}
      {showStars && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: 'scale(0)',
                animation: `twinkle 3s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              <Star size={Math.random() * 16 + 8} className="text-yellow-400" />
            </div>
          ))}
        </div>
      )}
      
      {/* Main content */}
      <div 
        className={`text-center transition-all duration-1000 ease-in-out ${
          animateIn ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}
      >
        {/* Logo placeholder */}
        <div className="mb-8">
          <div className="inline-block rounded-full bg-white p-4 shadow-lg">
            <div className="text-3xl font-bold bg-gradient-to-r  text-[#83c51b] from-purple-600 to-indigo-600 text-transparent bg-clip-text">
              Renukiran Welfare Foundation
            </div>
          </div>
        </div>
        
        {/* Main Thank You Message */}
        <div className="bg-white rounded-lg shadow-lg px-8 py-10 max-w-md mx-auto mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            <span className=" bg-clip-text bg-gradient-to-r text-[#205893] ">
              Renukiran
            </span> 
            <br />thanks you for your
            <br />
            <span className="relative">
              Kind Donation
              <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-300 opacity-40 rounded"></span>
            </span>
          </h1>
          
          <div className="flex justify-center items-center mt-8">
            <Heart 
              className="text-red-500 animate-pulse" 
              size={28} 
              fill="currentColor" 
            />
          </div>
          
          <p className="text-gray-600 mt-8">
            Your generosity helps us create lasting change in communities.
          </p>
        </div>
        
        {/* Return link */}
        <Link
          href="/" 
          className="text-indigo-600 hover:text-indigo-800 transition-colors mt-4 inline-block"
        >
          Return to Homepage
        </Link>
      </div>
      
      {/* Animated circle decorations
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
              transform: 'translate(-50%, -50%)',
              animation: `float ${Math.random() * 15 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div> */}
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateY(0px); }
          50% { transform: translate(-50%, -50%) rotate(180deg) translateY(-20px); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateY(0px); }
        }
        
        @keyframes twinkle {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1); opacity: 1; }
          100% { transform: scale(0); opacity: 0; }
        }
      `}</style>
    </div>
  );
}