"use client";

import React, { useEffect, useState } from "react";
import { Cloud, Leaf, ArrowRight, CheckCircle, Globe } from "lucide-react";

function CarbonOffsetPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "Sustainable Delivery Carbon Offset - Renukiran";
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-800 via-indigo-700 to-cyan-600">
        <div className="relative container mx-auto px-6 py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <Leaf className="w-12 h-12 text-blue-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Carbon Offset</h1>
          </div>
          <p className="text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed mb-8">Driving Sustainable Deliveries for a Greener Future - The Green Delivery Impact Initiative by Renukiran Welfare Foundation is designed to help businesses, logistics partners, e-commerce platforms, and consumers contribute towards a healthier planet.</p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">The Need for Sustainable Deliveries</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">As online commerce and delivery networks continue to expand, transportation-related emissions have become a significant contributor to environmental degradation.</p>
            <p className="text-lg text-gray-700 leading-relaxed">Addressing these emissions is essential for creating a sustainable future and mitigating the effects of climate change.</p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Approach</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">The initiative focuses on emission reduction and environmental restoration strategies:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {["Supporting tree plantation and urban greening programs to offset carbon emissions.", "Encouraging environmentally responsible logistics and transportation practices.", "Promoting resource-efficient operations across supply chains.", "Engaging businesses and communities in climate-positive actions.", "Creating green spaces that enhance biodiversity and improve environmental resilience."].map((item, index) => (<div key={index} className="flex items-start space-x-3 bg-white rounded-xl p-4 shadow-md"><CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700 font-medium">{item}</span></div>))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Benefits of Participation</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {["Demonstrate commitment to environmental responsibility.", "Support large-scale tree plantation and ecosystem restoration.", "Contribute towards cleaner air and healthier communities.", "Strengthen stakeholder trust through sustainable practices.", "Align with national and global sustainability goals."].map((item, index) => (<div key={index} className="flex items-start space-x-3 bg-white rounded-xl p-4 shadow-md"><CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700 font-medium">{item}</span></div>))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-r from-blue-700 to-cyan-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <Globe className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Building a Greener Tomorrow Together</h2>
            <p className="text-xl text-blue-100 mb-8">The Green Delivery Impact Initiative transforms everyday business activities into opportunities for positive environmental change.</p>
            <button className="bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl flex items-center mx-auto">Start Offsetting <ArrowRight className="w-5 h-5 ml-2" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarbonOffsetPage;
