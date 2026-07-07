"use client";

import React, { useEffect, useState } from "react";
import { TreePine, Leaf, ArrowRight, CheckCircle, Globe, Wind, Sun } from "lucide-react";

function ClimatePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "Climate Action & Environmental Sustainability - Renukiran";
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      <div className="relative overflow-hidden bg-gradient-to-r from-green-800 via-emerald-700 to-teal-600">
        <div className="relative container mx-auto px-6 py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <Leaf className="w-12 h-12 text-green-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Climate Action Programs</h1>
          </div>
          <p className="text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed mb-8">Taking Bold Climate Action Through Nature-Based Solutions - Renukiran Welfare Foundation partners with organizations to implement meaningful environmental programs that combat climate change and promote sustainability.</p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">Our climate action programs combine tree plantation, environmental education, and community engagement to create measurable, lasting impact on local ecosystems and global carbon reduction efforts.</p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Climate Programs</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-teal-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {["Large-Scale Tree Plantation", "Urban Greening Initiatives", "Carbon Offset Programs", "Miyawaki Forest Creation", "Biodiversity Restoration", "Climate Awareness Campaigns"].map((program, index) => (<div key={index} className="flex items-start space-x-3 bg-white rounded-xl p-4 shadow-md"><CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700 font-medium">{program}</span></div>))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Environmental Impact Areas</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-teal-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {["Air Quality Improvement", "Carbon Sequestration", "Soil Conservation", "Water Resource Protection", "Wildlife Habitat Creation", "Urban Heat Reduction"].map((area, index) => (<div key={index} className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-md border-l-4 border-green-500"><TreePine className="w-6 h-6 text-green-600 flex-shrink-0" /><span className="text-gray-700 font-medium">{area}</span></div>))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-r from-green-700 to-teal-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <Globe className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Be Part of the Solution</h2>
            <p className="text-xl text-green-100 mb-8">Join us in creating a sustainable future through impactful climate action.</p>
            <button className="bg-white text-green-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-xl flex items-center mx-auto">Take Climate Action <ArrowRight className="w-5 h-5 ml-2" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClimatePage;
