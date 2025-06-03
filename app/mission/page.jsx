import React from "react";
import {
  Heart,
  Eye,
  Target,
  Users,
  Globe,
  TreePine,
  BookOpen,
  Goal,
} from "lucide-react";

export default function NGOMissionVisionGoals() {
  const goals = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Empowerment",
      description:
        "Empower 50,000 individuals through education and skill development programs by 2026",
      progress: 72,
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description:
        "Expand our programs to 25 underserved communities across 3 continents",
      progress: 48,
    },
    {
      icon: <TreePine className="w-6 h-6" />,
      title: "Environmental Impact",
      description:
        "Plant 100,000 trees and establish 15 sustainable community gardens",
      progress: 65,
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Educational Access",
      description:
        "Provide quality education resources to 10,000 children in remote areas",
      progress: 89,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Our Vision, Mission, Goal.
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Together, we're building a India where every person has the
              opportunity to thrive
            </p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row-reverse">
              <div className=" bg-gradient-to-br from-blue-600 to-indigo-700 p-8 lg:p-12 text-white">
                <div className="flex items-center mb-6">
                  <Eye className="w-12 h-12 mr-4" />
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-xl leading-relaxed mb-6">
                  <strong>Renukiran Welfare Foundation</strong> envisions a just
                  and compassionate world where every individual lives with
                  dignity, self-reliance, and equal access to opportunities for
                  a brighter, inclusive future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-8 lg:p-12 text-white">
                <div className="flex items-center mb-6">
                  <Target className="w-12 h-12 mr-4" />
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg leading-relaxed mb-6">
                  <strong>Renukiran Welfare Foundation</strong> is dedicated to
                  empowering underserved communities through education,
                  healthcare, women’s empowerment, and sustainable, inclusive
                  development rooted in grassroots action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row-reverse">
              <div className=" bg-gradient-to-br from-blue-600 to-indigo-700 p-8 lg:p-12 text-white">
                <div className="flex items-center mb-6">
                  <Goal className="w-12 h-12 mr-4" />
                  <h2 className="text-3xl font-bold">Our Goal</h2>
                </div>
                <p className="text-xl leading-relaxed mb-6">
                  Enhance Access to{" "}
                  <strong>Quality Education & Skills Training</strong>.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Equip{" "}
                  <strong>
                    underprivileged children and youth—especially girls—with
                    foundational education, digital literacy, and vocational
                    skills
                  </strong>{" "}
                  to break the cycle of poverty and build self-reliance.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Strengthen <strong>Women’s Empowerment</strong> and<strong> Leadership</strong>.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Promote <strong>gender equity</strong> by creating platforms
                  for women to lead, earn, and participate fully in economic and
                  community development.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Improve <strong>Community Health, Hygiene & Nutrition</strong>
                  .
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Ensure vulnerable populations have access to basic{" "}
                  <strong>
                    healthcare, clean water, menstrual hygiene awareness, and
                    nutritional support
                  </strong>{" "}
                  for a healthier, more resilient society.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Foster <strong>Climate-Conscious</strong> and{" "}
                  <strong>Sustainable Living</strong>
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Drive{" "}
                  <strong>environmental education and green initiatives</strong>{" "}
                  at the grassroots level, including waste management, tree
                  plantation, and climate-resilient practices.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Build <strong>Inclusive</strong> and{" "}
                  <strong>Empowered Communities</strong>.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Create{" "}
                  <strong>
                    safe, collaborative spaces where marginalized individuals
                  </strong>{" "}
                  can voice their needs, participate in decision-making, and
                  build better futures through collective action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories Teaser */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Stories of Hope
            </h2>
            <p className="text-xl text-gray-600">
              Real impact in the lives of real people
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-xl p-6">
              <blockquote className="text-gray-700 italic mb-4">
                "The education program changed everything for my family. Now my
                children have hope for a brighter future."
              </blockquote>
              <cite className="text-green-700 font-semibold">
                - Maria, Program Beneficiary
              </cite>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <blockquote className="text-gray-700 italic mb-4">
                "Our community garden not only feeds families but brings us
                together as neighbors and friends."
              </blockquote>
              <cite className="text-blue-700 font-semibold">
                - James, Community Leader
              </cite>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <blockquote className="text-gray-700 italic mb-4">
                "The skills training gave me the confidence to start my own
                business and support my village."
              </blockquote>
              <cite className="text-purple-700 font-semibold">
                - Aisha, Entrepreneur
              </cite>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-600 to-blue-700 rounded-2xl shadow-xl p-8 lg:p-12 text-center text-white">
            <Heart className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">
              Join Our Mission of Hope
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Every contribution, big or small, creates ripples of positive
              change in communities worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                Donate Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200">
                Volunteer With Us
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
