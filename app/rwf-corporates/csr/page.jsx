"use client";

import React, { useEffect, useState } from "react";
import { Building2, Users, Heart, ArrowRight, CheckCircle, Globe, Leaf } from "lucide-react";

function CSRPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "CSR Project Implementation - Renukiran";
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-700">
        <div className="relative container mx-auto px-6 py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <Building2 className="w-12 h-12 text-blue-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">CSR Project Implementation & Community Development Programs</h1>
          </div>
          <p className="text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed mb-8">Empowering Communities Through Purpose-Driven Corporate Social Responsibility Initiatives - Renukiran Welfare Foundation collaborates with organizations to design, implement, and manage impactful CSR projects that create meaningful change.</p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">We work closely with corporate partners to understand their CSR objectives, identify community needs, and develop customized programs that align with both business goals and societal impact.</p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our CSR Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {["CSR Strategy Development & Planning", "Community Needs Assessment", "Project Design & Implementation", "Monitoring & Impact Evaluation", "Employee Engagement Programs", "CSR Reporting & Documentation"].map((service, index) => (<div key={index} className="flex items-start space-x-3 bg-white rounded-xl p-4 shadow-md"><CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700 font-medium">{service}</span></div>))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Community Development Focus Areas</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {["Education & Skill Development", "Healthcare & Wellness", "Environmental Sustainability", "Rural Development", "Women Empowerment", "Youth Development"].map((area, index) => (<div key={index} className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-md border-l-4 border-blue-500"><Heart className="w-6 h-6 text-blue-600 flex-shrink-0" /><span className="text-gray-700 font-medium">{area}</span></div>))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-r from-blue-700 to-purple-700">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <Globe className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Create Lasting Impact</h2>
            <p className="text-xl text-blue-100 mb-8">Partner with us to transform your CSR vision into tangible community benefits.</p>
            <button className="bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl flex items-center mx-auto">Partner With Us <ArrowRight className="w-5 h-5 ml-2" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CSRPage;
