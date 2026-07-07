"use client";

import React, { useEffect, useState } from "react";
import { Sprout, Leaf, ArrowRight, CheckCircle, Globe, TreePine, Sun, Droplets, Wind } from "lucide-react";

function SustainabilityProjectsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "Active Sustainability Projects - Renukiran";
    setIsVisible(true);
  }, []);

  const projects = [
    { icon: <TreePine className="w-8 h-8" />, title: "Urban Forestry", desc: "Creating urban forests and green spaces in metropolitan areas to improve air quality and biodiversity." },
    { icon: <Droplets className="w-8 h-8" />, title: "Water Conservation", desc: "Implementing rainwater harvesting and watershed management projects for sustainable water resources." },
    { icon: <Sun className="w-8 h-8" />, title: "Renewable Energy", desc: "Promoting solar and renewable energy solutions for communities and organizations." },
    { icon: <Wind className="w-8 h-8" />, title: "Clean Air Initiative", desc: "Air quality monitoring and pollution reduction programs across urban and rural areas." }
  ];

  const highlights = [
    "Community-led restoration work",
    "Native species plantation and local stewardship",
    "Easy access to volunteer participation",
    "Long-term environmental monitoring",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      <div className="relative overflow-hidden bg-gradient-to-r from-green-800 via-emerald-700 to-teal-600">
        <div className="relative container mx-auto px-6 py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <Sprout className="w-12 h-12 text-green-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Active Sustainability Projects</h1>
          </div>
          <p className="text-2xl text-green-100 font-semibold mb-4">Driving Environmental Change Through Action</p>
          <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">At Renukiran Welfare Foundation, we are committed to implementing impactful sustainability projects that create measurable environmental benefits and inspire communities to participate in climate action.</p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">Our active sustainability projects focus on practical solutions to environmental challenges, combining innovation with community participation to achieve lasting impact.</p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Active Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-teal-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {projects.map((project, index) => (<div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 p-6 border-t-4 border-green-500"><div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-xl text-white mb-4 inline-block">{project.icon}</div><h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3><p className="text-gray-600 leading-relaxed">{project.desc}</p></div>))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Key Features</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-teal-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {["Community-driven initiatives", "Scientific approach to environmental restoration", "Transparent impact measurement", "Partnership with organizations and institutions", "Long-term monitoring and maintenance", "Educational and awareness components"].map((feature, index) => (<div key={index} className="flex items-start space-x-3 bg-white rounded-xl p-4 shadow-md"><CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700 font-medium">{feature}</span></div>))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-r from-green-700 to-teal-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <Globe className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Sustainability Journey</h2>
            <p className="text-xl text-green-100 mb-8">Partner with us to implement sustainability projects that make a real difference.</p>
            <a href="/general-donations" className="bg-white text-green-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-xl flex items-center mx-auto">Donate Now <ArrowRight className="w-5 h-5 ml-2" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SustainabilityProjectsPage;
