"use client";

import React, { useEffect, useState } from "react";
import { Sprout, Users, Heart, ArrowRight, CheckCircle, Leaf, TreePine } from "lucide-react";

function GreenLegacyHubPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "Green Legacy Hub - Renukiran";
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      <div className="relative overflow-hidden bg-gradient-to-r from-green-800 via-emerald-700 to-teal-600">
        <div className="relative container mx-auto px-6 py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <Leaf className="w-12 h-12 text-green-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Green Legacy Hub</h1>
          </div>
          <p className="text-2xl text-green-100 font-semibold mb-4">Plant Trees. Track Impact. Grow a Greener Future.</p>
          <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">The Green Legacy Hub by Renukiran Welfare Foundation is a dedicated platform that enables individuals, families, schools, institutions, and businesses to create and nurture their own environmental legacy through tree plantation.</p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">Whether you wish to celebrate a special occasion, honor a loved one, support sustainability goals, or fulfill your corporate social responsibility commitments, Green Legacy Hub provides a meaningful way to make a lasting difference.</p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Who Can Create a Green Legacy?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {["Individuals and Families", "Corporate Organizations", "Educational Institutions", "Resident Welfare Associations", "Government Bodies", "Community Groups", "Social and Environmental Organizations"].map((item, index) => (<div key={index} className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-md border-l-4 border-green-500"><Users className="w-6 h-6 text-green-600 flex-shrink-0" /><span className="text-gray-700 font-medium">{item}</span></div>))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {[{ s: "1", t: "Share Your Vision", d: "Tell us your objective—whether it is environmental conservation, employee engagement, memorial plantation, biodiversity enhancement, or community development." }, { s: "2", t: "Design the Plantation", d: "Our team develops a plantation plan tailored to the available space, local ecology, and intended environmental outcomes." }, { s: "3", t: "Plant with Purpose", d: "Native and climate-resilient species are selected and planted to maximize survival, ecological value, and long-term impact." }, { s: "4", t: "Nurture and Monitor", d: "Regular maintenance, monitoring, and care ensure healthy tree growth and sustainable ecosystem development." }, { s: "5", t: "Celebrate Your Impact", d: "Track the progress of your plantation through reports, photographs, growth updates, and environmental impact assessments." }].map((step, index) => (<div key={index} className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-md"><div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">{step.s}</div><div><h3 className="text-lg font-bold text-gray-800 mb-2">{step.t}</h3><p className="text-gray-600">{step.d}</p></div></div>))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-r from-green-700 to-emerald-700">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <Sprout className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Growing Today for a Better Tomorrow</h2>
            <p className="text-xl text-green-100 mb-8">Join us in building a living legacy—one tree, one community, and one forest at a time.</p>
            <button className="bg-white text-green-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-xl flex items-center mx-auto">Join the Hub <ArrowRight className="w-5 h-5 ml-2" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GreenLegacyHubPage;
