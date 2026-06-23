"use client";

import React, { useEffect, useState } from "react";
import { Leaf, Globe, ArrowRight, CheckCircle, Building2, Shield, TrendingUp } from "lucide-react";

function ESGSustainabilityPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "ESG Sustainability Support - Renukiran";
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      <div className="relative overflow-hidden bg-gradient-to-r from-teal-700 via-cyan-700 to-blue-700">
        <div className="relative container mx-auto px-6 py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <Globe className="w-12 h-12 text-teal-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">ESG Sustainability Support & Environmental Impact Programs</h1>
          </div>
          <p className="text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed mb-8">Partnering for Sustainable Business Excellence - Renukiran Welfare Foundation provides comprehensive ESG sustainability support to help organizations achieve their environmental, social, and governance goals.</p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">We help organizations integrate sustainability into their core business operations, measure environmental impact, and create long-term value for stakeholders and the planet.</p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our ESG Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {["ESG Strategy & Roadmap Development", "Environmental Impact Assessment", "Carbon Footprint Analysis", "Sustainability Reporting", "Stakeholder Engagement Programs", "ESG Performance Monitoring"].map((service, index) => (<div key={index} className="flex items-start space-x-3 bg-white rounded-xl p-4 shadow-md"><CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700 font-medium">{service}</span></div>))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Environmental Programs</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {["Tree Plantation & Reforestation", "Carbon Offset Projects", "Renewable Energy Initiatives", "Waste Management Programs", "Water Conservation Projects", "Biodiversity Protection"].map((program, index) => (<div key={index} className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-md border-l-4 border-teal-500"><Leaf className="w-6 h-6 text-teal-600 flex-shrink-0" /><span className="text-gray-700 font-medium">{program}</span></div>))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-r from-teal-700 to-blue-700">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <Shield className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Build a Sustainable Future</h2>
            <p className="text-xl text-teal-100 mb-8">Let us help you achieve your ESG goals and create lasting environmental impact.</p>
            <button className="bg-white text-teal-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-all duration-300 shadow-xl flex items-center mx-auto">Start Your ESG Journey <ArrowRight className="w-5 h-5 ml-2" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ESGSustainabilityPage;
