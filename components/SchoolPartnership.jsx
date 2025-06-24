"use client"
import React, { useState } from "react";
import {
  GraduationCap,
  BookOpen,
  Shirt,
  Users,
  Calendar,
  Lightbulb,
  Megaphone,
  Building,
  Heart,
  Eye,
  UserCheck,
  TrendingUp,
  PenTool,
  Gift,
  Briefcase,
  Globe,
} from "lucide-react";
import Link from "next/link";

export default function SchoolPartnership() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const partnershipWays = [
    {
      id: 1,
      icon: <PenTool className="w-8 h-8" />,
      title: "Donate Stationery",
      description:
        "Provide essential items like notebooks, pens, pencils, and other learning materials to ensure children have what they need for their education.",
      color: "blue",
    },
    {
      id: 2,
      icon: <Shirt className="w-8 h-8" />,
      title: "Provide School Uniforms",
      description:
        "Contributing school uniforms helps children attend classes with pride and confidence, ensuring they feel part of the school community.",
      color: "green",
    },
    {
      id: 3,
      icon: <BookOpen className="w-8 h-8" />,
      title: "Sponsor Educational Resources",
      description:
        "Donate textbooks, learning aids, and educational tools that will enhance the learning experience of children in need.",
      color: "purple",
    },
    {
      id: 4,
      icon: <Users className="w-8 h-8" />,
      title: "Volunteer Opportunities",
      description:
        "Students and teachers can engage in volunteering activities like tutoring, mentoring, or assisting with workshops, directly supporting children's education.",
      color: "indigo",
    },
    {
      id: 5,
      icon: <Calendar className="w-8 h-8" />,
      title: "Organize Fundraising Drives",
      description:
        "Schools can host charity events, such as bake sales or walkathons, to raise funds for educational scholarships, infrastructure, or other essential programs.",
      color: "pink",
    },
    {
      id: 6,
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Offer Skill-Based Workshops",
      description:
        "Teachers and staff can contribute their knowledge through workshops in subjects like literacy, mathematics, science, or life skills.",
      color: "orange",
    },
    {
      id: 7,
      icon: <Megaphone className="w-8 h-8" />,
      title: "Collaborative Events & Awareness Campaigns",
      description:
        "Partner with us to raise awareness on key issues like education, hygiene, and social empowerment through fairs or seminars.",
      color: "teal",
    },
    {
      id: 8,
      icon: <Building className="w-8 h-8" />,
      title: "Support School Infrastructure",
      description:
        "Help improve or build new learning facilities for underprivileged children, creating a better environment for them to learn and grow.",
      color: "red",
    },
  ];

  const benefits = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Real-World Exposure",
      description:
        "Children gain an understanding of field realities and the challenges faced by marginalized communities, broadening their perspective from an early age.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Instilling Empathy",
      description:
        "Partnering with our cause helps students develop empathy and social responsibility by making a difference in the lives of those who need it most.",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-600",
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Active Citizenship",
      description:
        "Through active participation, students learn the importance of community service and being responsible citizens who contribute to social change.",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Holistic Development",
      description:
        "School partnerships provide students with opportunities for personal growth, leadership skills, and a sense of accomplishment in helping others.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
  ];

  const getCardColors = (color) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-200",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
      },
      indigo: {
        bg: "bg-indigo-50",
        text: "text-indigo-600",
        border: "border-indigo-200",
      },
      pink: {
        bg: "bg-pink-50",
        text: "text-pink-600",
        border: "border-pink-200",
      },
      orange: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200",
      },
      teal: {
        bg: "bg-teal-50",
        text: "text-teal-600",
        border: "border-teal-200",
      },
      red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200" },
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#2e5893] to-[#81C421] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-white bg-opacity-20 rounded-full backdrop-blur-sm">
                <GraduationCap className="w-16 h-16 renukiran-blue-color" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              School Partnership Program
            </h1>
            <p className="text-xl md:text-2xl max-w-5xl mx-auto leading-relaxed opacity-95">
              Transforming lives through education and creating long-term change
              for underprivileged children
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
            We firmly believe that education has the power to transform lives,
            break the cycle of poverty, and create long-term change. Our School
            Partnership Program is designed to engage educational institutions
            in supporting the future and well-being of underprivileged children.
            By collaborating with us, schools can play a pivotal role in
            providing children from marginalized communities with the
            opportunities and resources they need to thrive academically and
            socially.
          </p>
        </div>

        {/* Partnership Ways */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            How Schools Can Partner with Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipWays.map((way) => {
              const colors = getCardColors(way.color);
              return (
                <div
                  key={way.id}
                  className={`group ${colors.bg} ${colors.border} border-2 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer`}
                  onMouseEnter={() => setHoveredCard(way.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={`${colors.text} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {way.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                    {way.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {way.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Additional Benefits of Partnership
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Beyond helping underprivileged children, your partnership creates
            valuable learning experiences for your students
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`${benefit.bgColor} rounded-2xl p-8 border-2 border-gray-100 hover:shadow-lg transition-all duration-300`}
              >
                <div className={`${benefit.iconColor} mb-6`}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Partner Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Partner with Us?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
              By partnering with Renukiran Welfare Foundation, schools help
              create lasting change in the lives of underprivileged children.
              Your support will empower these children to overcome obstacles and
              build a better future. Together, we can make education more
              accessible and impactful for those who need it the most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={"/careers"} className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Partnership
              </Link>

            </div>
          </div>
        </div>
      </div>

      {/* Impact Statement */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Together, We Create Lasting Impact
          </h2>
          <p className="text-xl opacity-90 leading-relaxed">
            Every partnership helps us build a more equitable society where all
            children are empowered to succeed, regardless of their background.
          </p>
        </div>
      </div>
    </div>
  );
}