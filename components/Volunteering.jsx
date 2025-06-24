import React from "react";
import {
  Heart,
  Users,
  BookOpen,
  Stethoscope,
  Leaf,
  Wrench,
  MessageCircle,
  Clock,
  Target,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function Volunteering() {
  const opportunities = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Educational Support",
      description:
        "Help provide quality education and learning resources to underprivileged children",
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Health Awareness",
      description:
        "Participate in health campaigns and awareness programs for communities",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Environmental Drives",
      description:
        "Join our environmental conservation and sustainability initiatives",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Skill Development",
      description:
        "Conduct workshops to help individuals develop valuable life skills",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Community Outreach",
      description:
        "Connect with communities and help bridge gaps in social services",
    },
  ];

  const benefits = [
    {
      icon: <Heart className="w-5 h-5 renukiran-blue-color" />,
      title: "Make Real Impact",
      description: "See tangible changes in the lives of those you help",
    },
    {
      icon: <Users className="w-5 h-5 renukiran-blue-color" />,
      title: "Build Connections",
      description: "Network with like-minded individuals and professionals",
    },
    {
      icon: <Target className="w-5 h-5 renukiran-blue-color" />,
      title: "Develop Skills",
      description: "Gain valuable experience and professional development",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#2e5893] to-[#81C421] text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Be the Change You Want to See
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-95">
              At Renukiran Welfare Foundation, we believe that creating positive
              social change is not merely a choice, but a moral responsibility
              that every individual should embrace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers" className="bg-white text-[#2e5893] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Volunteer Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Your Time, Their Hope
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Volunteering is one of the most powerful ways to contribute to the
            betterment of society. By dedicating your time and skills, you can
            help make a tangible difference in the lives of those who need it
            most.
          </p>
        </div>

        {/* Volunteering Opportunities */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Volunteering Opportunities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#2e5893] to-[#81C421] rounded-full mb-4 text-white">
                  {opportunity.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  {opportunity.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {opportunity.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment Levels */}
        <div className="bg-white rounded-3xl p-8 shadow-lg mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Flexible Commitment Options
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 border border-blue-100">
              <Clock className="w-12 h-12 text-[#2e5893] mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Part-Time Volunteer
              </h4>
              <p className="text-gray-600">
                Spare a few hours a week to make a meaningful impact in your
                community
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 border border-green-100">
              <Users className="w-12 h-12 text-[#81C421] mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Full Involvement
              </h4>
              <p className="text-gray-600">
                Take on a more involved role and lead initiatives that drive
                lasting change
              </p>
            </div>
          </div>
        </div>

        {/* Internship Section */}
        <div className="bg-gradient-to-r from-[#2e5893] to-[#81C421] rounded-3xl p-8 md:p-12 text-white mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Internship Program
            </h3>
            <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-95">
              We welcome passionate interns eager to gain real-world experience
              in the development sector. Work closely on impactful projects,
              develop professional skills, and deepen your understanding of
              grassroots realities.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-10 h-10 bg-white bg-opacity-20 rounded-full mb-3 mx-auto text-white">
                    {benefit.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-sm opacity-90">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-3xl p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to Make a Difference?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join us in our efforts to create a more equitable and compassionate
            society. True change begins with each one of us stepping forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/careers" className="bg-gradient-to-r from-[#2e5893] to-[#81C421] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              Start Volunteering
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h4 className="text-2xl font-bold mb-4">
            Renukiran Welfare Foundation
          </h4>
          <p className="text-gray-400 mb-6">
            Creating positive social change, one volunteer at a time.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Programs
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
