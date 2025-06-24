"use client"
import React, { useState } from "react";
import {
  Heart,
  Users,
  BookOpen,
  Scissors,
  Droplets,
  TreePine,
  Gift,
  User,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function IndividualSupport() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const supportOptions = [
    {
      id: 1,
      icon: <Users className="w-6 h-6" />,
      title: "Sponsor a Workshop",
      description:
        "Fund awareness sessions on menstrual hygiene, reproductive health, and women's rights.",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
    },
    {
      id: 2,
      icon: <Scissors className="w-6 h-6" />,
      title: "Support Skill Development",
      description:
        "Sponsor a woman's journey towards financial independence through tailoring and entrepreneurship programs.",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
    },
    {
      id: 3,
      icon: <Droplets className="w-6 h-6" />,
      title: "Health & Hygiene Kits",
      description:
        "Provide reusable sanitary napkins and essential hygiene supplies to women and girls in need.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      id: 4,
      icon: <TreePine className="w-6 h-6" />,
      title: "Plantation Drives",
      description:
        "Support environment initiatives by contributing to tree plantation campaigns across regions.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      id: 5,
      icon: <Gift className="w-6 h-6" />,
      title: "General Donations",
      description:
        "Make a one-time or monthly contribution to support ongoing projects and expand outreach.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
    {
      id: 6,
      icon: <User className="w-6 h-6" />,
      title: "Sponsor a Child",
      description:
        "Help an underprivileged child access education, healthcare, and a brighter future.",
      color: "from-teal-500 to-green-500",
      bgColor: "bg-teal-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#2e5893] to-[#81C421] text-white">
        <div className=" inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white bg-opacity-20 rounded-full backdrop-blur-sm">
                <Heart className="w-12 h-12 renukiran-blue-color" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">
              Renukiran Welfare Foundation
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
              Every individual contribution matters — and every supporter
              becomes a vital part of a larger movement for change.
            </p>
          </div>
        </div>
        <div className=" bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <span className="text-indigo-800 font-semibold">Your Impact</span>
          </div>
          <h2 className="md:text-5xl text-4xl header-text-600 font-bold text-gray-900 mb-8">
            Transform Lives Through Your Support
          </h2>
          <p className="text-lg sub-text-400 text-gray-700 max-w-4xl mx-auto leading-relaxed">
            When you support Renukiran individually, you are directly impacting
            lives. Your generosity helps us extend crucial initiatives like
            menstrual hygiene awareness sessions, health education workshops,
            skill development training, and livelihood programs to
            underprivileged women and children.
          </p>
        </div>

        {/* Support Options Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {supportOptions.map((option) => (
            <div
              key={option.id}
              className={`group relative overflow-hidden rounded-2xl ${option.bgColor} border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer`}
              onMouseEnter={() => setHoveredCard(option.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="p-8">
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${option.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                  {option.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {option.description}
                </p>
              </div>
              <div
                className={` inset-0 bg-gradient-to-r ${option.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>
            </div>
          ))}
        </div>

        {/* Why Support Matters Section */}
        <div className="bg-gradient-to-r from-[#2e5893] to-[#81C421] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="inset-0 bg-black opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Why Your Support Matters
            </h3>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-90">
                Every act of support fuels real change. It's not just about
                funding a project — it's about restoring dignity, building
                confidence, and creating opportunities for a better future. Your
                involvement empowers women, nurtures children, and strengthens
                communities from within.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 backdrop-blur-sm">
                    <Users className="w-8 h-8 renukiran-blue-color" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Empower Women</h4>
                  <p className="text-sm opacity-80">
                    Building confidence and independence
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 backdrop-blur-sm">
                    <BookOpen className="w-8 h-8 renukiran-blue-color" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">
                    Nurture Children
                  </h4>
                  <p className="text-sm opacity-80">
                    Creating brighter futures through education
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 backdrop-blur-sm">
                    <Heart className="w-8 h-8 renukiran-blue-color" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">
                    Strengthen Communities
                  </h4>
                  <p className="text-sm opacity-80">
                    Building lasting positive change
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join Us in Making a Difference
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Because when individuals come together with a shared vision of
            compassion and empowerment, true transformation begins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Supporting Today
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-105">
              Learn More About Us
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
