"use client";

import React, { useEffect, useState } from "react";
import { Target, Megaphone, Heart, ArrowRight, CheckCircle, Globe, Users, Sparkles } from "lucide-react";

function CauseMarketingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "Cause Marketing & Sustainability Campaigns - Renukiran";
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-700 via-pink-600 to-rose-600">
        <div className="relative container mx-auto px-6 py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <Target className="w-12 h-12 text-purple-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Cause Marketing, Sustainability Campaigns & Purpose-Driven Engagement</h1>
          </div>
          <p className="text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed mb-8">Creating Meaningful Connections Through Purpose - Renukiran Welfare Foundation helps organizations design and execute cause marketing campaigns that drive social impact and business value simultaneously.</p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">Our cause marketing solutions enable brands to authentically connect with their audience, demonstrate social responsibility, and contribute to meaningful environmental and social causes.</p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Campaign Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-rose-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {["Cause Marketing Strategy", "Environmental Campaigns", "Social Impact Initiatives", "Brand Purpose Positioning", "Stakeholder Engagement", "Campaign Measurement & Analytics"].map((service, index) => (<div key={index} className="flex items-start space-x-3 bg-white rounded-xl p-4 shadow-md"><CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700 font-medium">{service}</span></div>))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-purple-50 to-rose-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Campaign Themes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-rose-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {["Tree Plantation Campaigns", "Climate Action Initiatives", "Plastic-Free Campaigns", "Wildlife Conservation", "Community Development", "Youth Empowerment"].map((theme, index) => (<div key={index} className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-md border-l-4 border-purple-500"><Sparkles className="w-6 h-6 text-purple-600 flex-shrink-0" /><span className="text-gray-700 font-medium">{theme}</span></div>))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-r from-purple-700 to-rose-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <Megaphone className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Make Your Brand Matter</h2>
            <p className="text-xl text-purple-100 mb-8">Create campaigns that inspire action and drive meaningful social change.</p>
            <button className="bg-white text-purple-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-all duration-300 shadow-xl flex items-center mx-auto">Launch Your Campaign <ArrowRight className="w-5 h-5 ml-2" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CauseMarketingPage;
