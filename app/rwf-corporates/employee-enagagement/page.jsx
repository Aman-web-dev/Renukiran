"use client";

import React, { useEffect, useState } from "react";
import { Users, Heart, ArrowRight, CheckCircle, Globe, Handshake, Smile } from "lucide-react";

function EmployeeEngagementPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "Employee Engagement Activities - Renukiran";
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600">
        <div className="relative container mx-auto px-6 py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <Users className="w-12 h-12 text-orange-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Employee Engagement Activities & Corporate Volunteering Programs</h1>
          </div>
          <p className="text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed mb-8">Building Purpose-Driven Workplaces Through Meaningful Employee Engagement - At Renukiran Welfare Foundation, we help organizations create engaging volunteer and social impact programs that inspire employees and strengthen communities.</p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">Our employee engagement programs are designed to foster teamwork, build purpose, and create memorable experiences that benefit both employees and the communities they serve.</p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Engagement Programs</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-amber-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {["Volunteer Days & Community Service", "Tree Plantation Drives", "Skill-Based Volunteering", "Team Building Activities", "Environmental Campaigns", "CSR Immersion Experiences"].map((program, index) => (<div key={index} className="flex items-start space-x-3 bg-white rounded-xl p-4 shadow-md"><CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700 font-medium">{program}</span></div>))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Benefits for Organizations</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-amber-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {["Enhanced Employee Morale", "Stronger Team Bonding", "Improved Brand Reputation", "Increased Employee Retention", "Positive Workplace Culture", "ESG & CSR Alignment"].map((benefit, index) => (<div key={index} className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-md border-l-4 border-orange-500"><Smile className="w-6 h-6 text-orange-600 flex-shrink-0" /><span className="text-gray-700 font-medium">{benefit}</span></div>))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <Handshake className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Empower Your Workforce</h2>
            <p className="text-xl text-orange-100 mb-8">Create meaningful experiences that inspire your team and transform communities.</p>
            <button className="bg-white text-orange-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-all duration-300 shadow-xl flex items-center mx-auto">Start Engaging <ArrowRight className="w-5 h-5 ml-2" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeEngagementPage;
