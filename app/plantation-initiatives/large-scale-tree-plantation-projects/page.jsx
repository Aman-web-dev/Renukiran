"use client";

import React, { useEffect, useState } from "react";
import { TreePine, Globe, Users, ArrowRight, CheckCircle } from "lucide-react";

function LargeScaleTreePlantationPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "Large Scale Tree Plantation Projects - Renukiran";
    setIsVisible(true);
  }, []);

  const projectCategories = ["Employee Engagement Forests", "CSR Plantation Projects", "Miyawaki Urban Forests", "School Green Campus Projects", "Agroforestry Initiatives", "Biodiversity Restoration Projects", "Riverbank Plantation Drives", "Community Green Spaces", "Carbon Offset Forests", "Climate Action Plantations", "Memorial Forests", "Sustainable City Forests"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      <div className="relative overflow-hidden bg-gradient-to-r from-green-800 via-emerald-700 to-teal-600">
        <div className="relative container mx-auto px-6 py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <TreePine className="w-12 h-12 text-green-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Large Scale Tree Plantation Projects</h1>
          </div>
          <p className="text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed mb-8">Forests Created by Organizations - showcasing tree plantation and forest restoration initiatives undertaken by organizations committed to environmental sustainability.</p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">These projects represent collective efforts to restore ecological balance, increase green cover, enhance biodiversity, and create long-term environmental benefits.</p>
            <p className="text-lg text-gray-700 leading-relaxed">Our partner organizations participate through CSR programs, employee engagement activities, ESG commitments, carbon offset initiatives, and sustainability campaigns.</p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Suggested Project Categories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {projectCategories.map((category, index) => (<div key={index} className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-md border-l-4 border-green-500"><TreePine className="w-6 h-6 text-green-600 flex-shrink-0" /><span className="text-gray-700 font-medium">{category}</span></div>))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">Each project page highlights the plantation location, objectives, tree species planted, environmental impact, beneficiary engagement, and progress achieved. Through continuous monitoring and maintenance, these plantations contribute to cleaner air, improved biodiversity, carbon sequestration, and sustainable development.</p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-r from-green-700 to-emerald-700">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <Users className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Partner With Us</h2>
            <p className="text-xl text-green-100 mb-8">Join our large-scale plantation initiatives and be part of India's green transformation.</p>
            <button className="bg-white text-green-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-xl flex items-center mx-auto">Support Large Scale Projects <ArrowRight className="w-5 h-5 ml-2" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LargeScaleTreePlantationPage;
