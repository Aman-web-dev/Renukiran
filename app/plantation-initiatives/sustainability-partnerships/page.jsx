"use client";

import React, { useEffect, useState } from "react";
import { Handshake, Building2, Users, ArrowRight, CheckCircle, Globe, Leaf, Heart } from "lucide-react";

function SustainabilityPartnershipsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "ESG Sustainability Partnerships - Renukiran";
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      <div className="relative overflow-hidden bg-gradient-to-r from-teal-700 via-cyan-700 to-blue-700">
        <div className="relative container mx-auto px-6 py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <Handshake className="w-12 h-12 text-teal-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">ESG Sustainability Partnerships</h1>
          </div>
          <p className="text-2xl text-teal-100 font-semibold mb-4">Collaborating for a Sustainable Future</p>
          <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">Renukiran Welfare Foundation invites organizations to join our ESG sustainability partnerships and be part of India's green transformation journey.</p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">Through strategic partnerships, we combine resources, expertise, and passion to create impactful environmental programs that benefit communities, businesses, and the planet.</p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Partnership Models</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[{ icon: <Building2 className="w-8 h-8" />, title: "Corporate Partnerships", desc: "Collaborate on CSR and ESG initiatives that align with your sustainability goals." }, { icon: <Users className="w-8 h-8" />, title: "Institutional Partnerships", desc: "Work with educational institutions and research organizations for environmental research." }, { icon: <Heart className="w-8 h-8" />, title: "NGO Collaborations", desc: "Partner with like-minded NGOs to amplify environmental impact." }, { icon: <Globe className="w-8 h-8" />, title: "Government Programs", desc: "Participate in government-supported environmental conservation programs." }].map((model, index) => (<div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 p-6 border-t-4 border-teal-500"><div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-4 rounded-xl text-white mb-4 inline-block">{model.icon}</div><h3 className="text-xl font-bold text-gray-800 mb-3">{model.title}</h3><p className="text-gray-600 leading-relaxed">{model.desc}</p></div>))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Partnership Benefits</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {["Fulfill ESG and CSR commitments", "Access to environmental expertise and resources", "Brand visibility and recognition", "Employee engagement opportunities", "Measurable environmental impact", "Networking with sustainability leaders"].map((benefit, index) => (<div key={index} className="flex items-start space-x-3 bg-white rounded-xl p-4 shadow-md"><CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700 font-medium">{benefit}</span></div>))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-r from-teal-700 to-blue-700">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <Leaf className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Become a Sustainability Partner</h2>
            <p className="text-xl text-teal-100 mb-8">Join hands with us to create a lasting positive impact on the environment.</p>
            <button className="bg-white text-teal-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-all duration-300 shadow-xl flex items-center mx-auto">Partner With Us <ArrowRight className="w-5 h-5 ml-2" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SustainabilityPartnershipsPage;
