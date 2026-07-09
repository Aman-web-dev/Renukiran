"use client";

import React, { useEffect, useState } from "react";
import { Handshake, ArrowRight, CheckCircle, Globe, Trees, Building2, Heart, Star } from "lucide-react";

function SustainabilityPartnershipsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "ESG Sustainability Partnerships - Renukiran";
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      <div
        className="relative overflow-hidden bg-gradient-to-r from-teal-700 via-cyan-700 to-blue-700"
        style={{
          backgroundImage:
            "linear-gradient(rgba(7, 89, 109, 0.85), rgba(8, 76, 116, 0.85)), url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative container mx-auto px-6 py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <Handshake className="w-12 h-12 text-teal-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">ESG Sustainability Partnerships</h1>
          </div>
          <p className="text-2xl text-teal-100 font-semibold mb-4">
            Empowering businesses to create measurable environmental impact while contributing to a greener, healthier, and more sustainable future.
          </p>
          <p className="text-lg text-gray-100 max-w-4xl mx-auto leading-relaxed">
            At Renukiran Welfare Foundation (RWF), we partner with corporations to transform sustainability commitments into meaningful action. Through strategic plantation initiatives and climate-positive programs, organizations can strengthen their ESG and CSR goals, engage employees, offset environmental impact, and contribute to long-term ecological restoration.
          </p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Green Legacy Parks</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
              Create dedicated green spaces that serve as a lasting symbol of your organization's commitment to sustainability.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Green Legacy Parks are developed through corporate support on community, institutional, urban, or degraded lands. These plantations help restore biodiversity, improve environmental health, and create long-term ecological assets for future generations.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Green Legacy Park — Key Outcomes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              "Enhanced carbon absorption",
              "Biodiversity restoration",
              "Improved air quality",
              "Community participation and ownership",
              "Employee volunteering opportunities",
              "Transparent impact monitoring and reporting",
            ].map((outcome, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white rounded-xl p-4 shadow-md">
                <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">{outcome}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-700 mt-8 max-w-3xl mx-auto">
            Every Green Legacy Park becomes a living testament to your organization's contribution toward a healthier planet.
          </p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Climate-Positive Events</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
              Turn every celebration, conference, launch, or corporate gathering into an opportunity for environmental action.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Events often generate environmental impact through travel, energy consumption, material usage, and waste generation. Through Climate-Positive Events, organizations can support tree plantation initiatives that help balance and reduce the environmental footprint associated with their activities.
            </p>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Suitable For</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Annual corporate gatherings",
                "Conferences and seminars",
                "Product launches",
                "Foundation Day celebrations",
                "Employee engagement programs",
                "CSR and sustainability events",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white rounded-xl p-4 shadow-md border-l-4 border-teal-500">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-700 mt-6">
              By integrating plantation initiatives into event planning, organizations can celebrate responsibly while contributing to climate action.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Green Impact Meetings</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">Make sustainability a part of everyday business operations.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Meetings, workshops, training sessions, and business discussions may seem small individually, but collectively they contribute to an organization's environmental footprint. Green Impact Meetings enable companies to associate every meeting with a positive environmental action through tree plantation and ecosystem restoration.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Partner with Renukiran Welfare Foundation?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {[
              { title: "Measurable Environmental Impact", desc: "Track your contribution through transparent reporting and plantation monitoring." },
              { title: "Stronger ESG & CSR Performance", desc: "Align environmental initiatives with sustainability frameworks and reporting requirements." },
              { title: "Employee Engagement Opportunities", desc: "Encourage employees to actively participate in environmental stewardship activities." },
              { title: "Community Development", desc: "Support local communities through green infrastructure, environmental awareness, and sustainable development initiatives." },
              { title: "Long-Term Ecological Benefits", desc: "Contribute to cleaner air, increased biodiversity, climate resilience, and healthier ecosystems." },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-teal-500">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="py-20 bg-gradient-to-r from-teal-700 to-blue-700 relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(7, 89, 109, 0.85), rgba(8, 76, 116, 0.85)), url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Building a Sustainable Future Together</h2>
            <p className="text-xl text-cyan-100 mb-8">
              Through Green Legacy Parks, Climate-Positive Events, and Green Impact Meetings, Renukiran Welfare Foundation helps organizations move beyond commitments and create real environmental change. Together, we can build greener communities, strengthen climate resilience, and leave a lasting legacy for generations to come.
            </p>
            <a
              href="/general-donations"
              className="bg-white text-teal-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-all duration-300 shadow-xl flex items-center mx-auto"
            >
              Partner With Us <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SustainabilityPartnershipsPage;
