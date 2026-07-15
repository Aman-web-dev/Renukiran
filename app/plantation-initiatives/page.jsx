"use client";

import React, { useEffect, useState } from "react";
import { Sparkles, Heart, Users, ArrowRight, TreePine, CheckCircle } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Native Tree Plantation",
    description:
      "Planting region-specific and indigenous tree species that support local biodiversity and ecosystem restoration.",
  },
  {
    title: "Geo-Tagged Monitoring",
    description:
      "Digital tracking and monitoring of plantations to ensure transparency, accountability, and long-term survival of trees.",
  },
  {
    title: "Urban Green Spaces",
    description:
      "Development of urban forests, green belts, and community parks to improve air quality and enhance environmental resilience.",
  },
  {
    title: "Employee & Community Engagement",
    description:
      "Meaningful volunteer opportunities that enable employees, students, and community members to actively participate in environmental conservation.",
  },
  {
    title: "Climate Action & Carbon Reduction",
    description:
      "Contributing to carbon sequestration, climate resilience, and environmental sustainability through large-scale plantation initiatives.",
  },
  {
    title: "Ecosystem Restoration",
    description:
      "Reviving degraded landscapes, improving soil quality, enhancing water retention, and supporting wildlife habitats.",
  },
  {
    title: "Impact Measurement",
    description:
      "Regular assessment of plantation survival rates, environmental benefits, and community impact to ensure sustainable outcomes.",
  },
  {
    title: "Long-Term Maintenance",
    description:
      "Dedicated post-plantation care including watering, mulching, protection, and monitoring to maximize tree survival and growth.",
  },
];

const GrowTreesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "Grow Trees With Us - Renukiran";
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Hero Section */}
      <div
        className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5, 80, 46, 0.78), rgba(6, 95, 70, 0.78)), url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative container mx-auto px-6 py-24 text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="flex items-center justify-center mb-6">
              <TreePine className="w-16 h-16 text-green-200 mr-4 animate-pulse" />
              <h1 className="text-4xl lg:text-6xl md:text-5xl font-bold text-white">
                Grow Trees <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-emerald-100">With Us</span>
              </h1>
              <Sparkles className="w-16 h-16 text-emerald-200 ml-4 animate-bounce" />
            </div>
            <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed mb-6">
              Plant Trees. Restore Ecosystems. Build a Greener Tomorrow.
            </p>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
              Join our community-driven mission to grow trees, restore ecosystems, and create lasting environmental impact across India.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/donate"
                className="bg-white text-green-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center"
              >
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </a>
              <a
                href="/get-involved/volunteering"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-700 transition-all duration-300 shadow-xl flex items-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Become a Volunteer
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Active Sustainability Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full"></div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-4">
              Renukiran Welfare Foundation's Active Sustainability Projects are ongoing environmental initiatives designed to restore ecological balance, increase green cover, and create sustainable communities. Through strategic plantation drives, urban greening efforts, biodiversity conservation, and climate action programs, we work towards building a healthier and greener future for generations to come.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Our projects are implemented in collaboration with corporates, educational institutions, resident welfare associations, government bodies, and local communities. Each initiative is carefully planned to ensure not only tree plantation but also long-term care, monitoring, and measurable environmental impact.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div
        className="py-20 relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(240, 253, 244, 0.92), rgba(236, 254, 255, 0.92)), url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Key Features
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-teal-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md border-l-4 border-green-500"
              >
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-800">{feature.title}</span>
                  <span className="block text-gray-600 text-sm mt-1">{feature.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing CTA */}
      <div
        className="py-20 relative bg-gradient-to-r from-green-600 to-teal-600"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5, 150, 105, 0.86), rgba(13, 148, 136, 0.86)), url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <TreePine className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Grow Together
            </h2>
            <p className="text-lg text-green-50 mb-4 leading-relaxed">
              Through these active green projects, Renukiran Welfare Foundation is committed to creating greener landscapes, healthier ecosystems, and environmentally conscious communities across India.
            </p>
            <p className="text-base text-green-50 mb-8 leading-relaxed">
              Explore our plantation programs, partnerships, and ways to engage below.
            </p>
            <div className="flex flex-wrap gap-3 justify-center text-sm">
              <a href="/plantation-initiatives/sustainability-projects" className="bg-white text-green-700 px-4 py-2 rounded-full font-medium hover:bg-green-50 transition-colors">Active Sustainability Projects</a>
              <a href="/plantation-initiatives/sustainability-partnerships" className="bg-white/20 text-white px-4 py-2 rounded-full font-medium hover:bg-white hover:text-teal-700 transition-colors">ESG Partnerships</a>
              <a href="/plantation-initiatives/celebration-tree-programs" className="bg-white/20 text-white px-4 py-2 rounded-full font-medium hover:bg-white hover:text-teal-700 transition-colors">Celebration Tree Programs</a>
              <a href="/plantation-initiatives/carbon-offset" className="bg-white/20 text-white px-4 py-2 rounded-full font-medium hover:bg-white hover:text-teal-700 transition-colors">Carbon Offset</a>
              <a href="/plantation-initiatives/green-legacy" className="bg-white/20 text-white px-4 py-2 rounded-full font-medium hover:bg-white hover:text-teal-700 transition-colors">Green Legacy Hub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowTreesPage;
