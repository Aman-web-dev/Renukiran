"use client";

import React from "react";
import Image from "next/image";
import "./component.css";
import { Info, Linkedin } from "lucide-react";
import { useState } from "react";

export default function TeamCard({ name, designation, pic, desc, linkedin }) {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col">
      <button
        onClick={() => setShowDesc(!showDesc)}
        className="p-2 w-5 rounded-full transition-colors duration-300"
      >
        <Info className="w-5 h-5 text-gray-600" />
      </button>

      {showDesc&& <div className="relative ">
      
          <div className="absolute w-[300px] h-[400px] font-bold overflow-y-scroll top-0 left-0 bg-gray-50 rounded-lg p-4 text-sm text-gray-700 leading-relaxed shadow-lg z-10">
            {desc}
          </div>
      
      </div>}  <div className="flex flex-col items-center text-center">
        <div className="relative mb-6">
          <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-gray-100 shadow-lg">
            <Image
              src={pic}
              alt={name}
              width={128}
              height={128}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => e.target.src = "/assets/images/unknown.svg"}
        
            />
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-blue-600 font-medium text-sm mb-4">{designation}</p>

        <div className="flex items-center space-x-4 mb-4">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5 text-blue-600" />
            </a>
          )}
        </div>
      </div>

  
      
    </div>
  );
}
