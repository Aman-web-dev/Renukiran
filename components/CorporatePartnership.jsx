"use client"
import React, { useState } from "react";
import {
  Building2,
  Users,
  Heart,
  DollarSign,
  Target,
  TrendingUp,
  Award,
  Handshake,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Briefcase,
  UserCheck,
  Calendar,
  Gift,
} from "lucide-react";
import Link from "next/link";

export default function CorporatePartnership() {
  const [activeTab, setActiveTab] = useState("csr");
  const [hoveredCard, setHoveredCard] = useState(null);

  const partnershipTypes = [
    {
      id: "csr",
      title: "CSR Partnerships",
      icon: <Building2 className="w-6 h-6" />,
      description:
        "Strategic CSR collaborations for sustainable community impact",
    },
    {
      id: "crm",
      title: "Cause-Related Marketing",
      icon: <Target className="w-6 h-6" />,
      description: "Purpose-driven campaigns that boost brand loyalty",
    },
    {
      id: "employee",
      title: "Employee Engagement",
      icon: <Users className="w-6 h-6" />,
      description: "Meaningful programs to connect employees with communities",
    },
    {
      id: "payroll",
      title: "Payroll Giving",
      icon: <DollarSign className="w-6 h-6" />,
      description: "Simple, effective employee contribution programs",
    },
  ];

  const csrBenefits = [
    { title: "Deep Community Reach", icon: <Globe className="w-5 h-5" /> },
    { title: "Proven Experience", icon: <Award className="w-5 h-5" /> },
    { title: "Customized CSR Programs", icon: <Target className="w-5 h-5" /> },
    {
      title: "Transparent Reporting",
      icon: <CheckCircle className="w-5 h-5" />,
    },
    { title: "End-to-End Management", icon: <Briefcase className="w-5 h-5" /> },
    { title: "Sustainable Impact", icon: <TrendingUp className="w-5 h-5" /> },
    {
      title: "Strong Volunteer Engagement",
      icon: <UserCheck className="w-5 h-5" />,
    },
    { title: "Recognition & Visibility", icon: <Star className="w-5 h-5" /> },
    { title: "Multi-Thematic Expertise", icon: <Heart className="w-5 h-5" /> },
    { title: "Trusted by Partners", icon: <Handshake className="w-5 h-5" /> },
  ];

  const crmBenefits = [
    { title: "Strong Brand Alignment", icon: <Target className="w-5 h-5" /> },
    { title: "Proven Impact", icon: <TrendingUp className="w-5 h-5" /> },
    { title: "Customizable Campaigns", icon: <Star className="w-5 h-5" /> },
    {
      title: "Transparent Reporting",
      icon: <CheckCircle className="w-5 h-5" />,
    },
    { title: "Enhanced Brand Image", icon: <Award className="w-5 h-5" /> },
    {
      title: "Increased Consumer Engagement",
      icon: <Users className="w-5 h-5" />,
    },
    { title: "Positive Public Relations", icon: <Globe className="w-5 h-5" /> },
    { title: "Employee Engagement", icon: <UserCheck className="w-5 h-5" /> },
    { title: "Long-Term Partnership", icon: <Handshake className="w-5 h-5" /> },
    { title: "Innovative Marketing", icon: <Briefcase className="w-5 h-5" /> },
  ];

  const employeeEngagementOptions = [
    {
      title: "Community Volunteering",
      description:
        "On-ground activities like health drives, skill workshops, and education support",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Skill-Based Volunteering",
      description:
        "Share professional skills through mentoring and literacy sessions",
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      title: "Donation Drives",
      description:
        "Organize collection drives for hygiene kits, school supplies, and gifts",
      icon: <Gift className="w-6 h-6" />,
    },
    {
      title: "Awareness Campaigns",
      description:
        "Spread awareness through campaigns and social media advocacy",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Fundraising Initiatives",
      description: "Team-building fundraising challenges with social impact",
      icon: <DollarSign className="w-6 h-6" />,
    },
  ];

  const payrollBenefits = {
    corporate: [
      "Enhances Corporate Social Responsibility",
      "Boosts Brand Image and Trustworthiness",
      "Increases Employee Engagement",
      "Provides Tax Benefits",
      "Attracts and Retains Socially-Conscious Talent",
    ],
    employee: [
      "Simple and Convenient Giving",
      "Immediate Tax Relief Benefits",
      "Personal Empowerment and Connection",
      "Enhanced Job Satisfaction",
      "Support Multiple Causes Easily",
    ],
    ngo: [
      "Steady Stream of Recurring Funds",
      "Increased Visibility and Awareness",
      "Stronger Corporate Partnerships",
      "Enhanced Employee Volunteering",
      "Long-term Sustainability",
    ],
  };

  const renderContent = () => {
    switch (activeTab) {
      case "csr":
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Corporate Social Responsibility Partnerships
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                By collaborating with corporations that share our vision for a
                healthier, more equitable society, Renukiran Welfare Foundation
                amplifies its impact and creates sustainable solutions for
                communities in need. Through strategic partnerships, companies
                can fulfill their CSR commitments while making a real, lasting
                difference in the lives of underprivileged women, children, and
                families.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {csrBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gray-200 bg-opacity-10 rounded-lg"
                  >
                    <div className="text-[#2e5893]">{benefit.icon}</div>
                    <span className="font-medium text-gray-900">
                      {benefit.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "crm":
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Cause-Related Marketing & Collaborative Events
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                We believe that when purpose meets partnership, incredible
                things happen. Through cause-related marketing initiatives and
                collaborative events, we invite brands and businesses to amplify
                their impact while engaging meaningfully with their audiences.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Cause-Related Marketing
                  </h4>
                  <p className="text-gray-700">
                    Partner with us to create campaigns where a portion of your
                    sales supports our initiatives. Boost brand loyalty while
                    contributing to empowering women, educating children, and
                    protecting the environment.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Collaborative Events
                  </h4>
                  <p className="text-gray-700">
                    Organize charity drives, fundraising events, awareness
                    campaigns, and employee volunteering days. Showcase your
                    commitment while strengthening employee morale and customer
                    engagement.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {crmBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gray-200 bg-opacity-10 rounded-lg"
                  >
                    <div className="text-[#81C421]">{benefit.icon}</div>
                    <span className="font-medium text-gray-900">
                      {benefit.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "employee":
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Employee Engagement Programs
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Our Employee Engagement Programs are designed to offer corporate
                employees meaningful opportunities to connect with communities,
                contribute to social causes, and experience the joy of making a
                difference. We foster empathy, teamwork, and a shared sense of
                purpose that aligns with your organization's values.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {employeeEngagementOptions.map((option, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-[#2e5893] to-[#81C421] rounded-lg text-white">
                        {option.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          {option.title}
                        </h4>
                        <p className="text-gray-700">{option.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-[#2e5893] to-[#81C421] rounded-xl p-6 text-white">
                <h4 className="text-xl font-bold mb-4">
                  Why Choose Our Employee Engagement Programs?
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Years of hands-on experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Custom-designed activities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>End-to-end support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Leadership skill building</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "payroll":
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Payroll Giving Program
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Payroll giving is a simple, effective way for employees to
                contribute regularly to charitable causes directly from their
                salary. It allows employees to donate a fixed amount or
                percentage each month, with donations automatically deducted
                before tax, making giving seamless while creating collective,
                meaningful impact.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="w-8 h-8 text-[#2e5893]" />
                    <h4 className="text-xl font-bold text-gray-900">
                      Corporate Benefits
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {payrollBenefits.corporate.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <CheckCircle className="w-4 h-4 text-[#2e5893] mt-1 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-8 h-8 text-[#81C421]" />
                    <h4 className="text-xl font-bold text-gray-900">
                      Employee Benefits
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {payrollBenefits.employee.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <CheckCircle className="w-4 h-4 text-[#81C421] mt-1 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-8 h-8 text-purple-600" />
                    <h4 className="text-xl font-bold text-gray-900">
                      NGO Benefits
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {payrollBenefits.ngo.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <CheckCircle className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2e5893] to-[#81C421] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white bg-opacity-20 rounded-full backdrop-blur-sm">
                <Handshake className="w-12 h-12 renukiran-blue-color" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Corporate Partnerships
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
              Partner with Renukiran Welfare Foundation to create meaningful
              impact through strategic collaborations
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {partnershipTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`flex items-center gap-3 px-6 py-4 whitespace-nowrap border-b-2 transition-all duration-300 ${
                  activeTab === type.id
                    ? "border-[#2e5893] text-[#2e5893] bg-opacity-5"
                    : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
                }`}
              >
                {type.icon}
                <div className="text-left">
                  <div className="font-semibold">{type.title}</div>
                  <div className="text-sm opacity-75">{type.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {renderContent()}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#2e5893] to-[#81C421] text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference Together?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join us in creating sustainable solutions and meaningful impact for
            communities in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"/careers"} className="bg-white text-[#2e5893] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Partnership
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
