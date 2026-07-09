"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Building2,
  Briefcase,
  TrendingUp,
  Megaphone,
  Handshake,
  ArrowRight,
  CheckCircle,
  Globe,
  Leaf,
  Heart,
  Target,
  Users,
  Sparkles,
} from "lucide-react";

function CorporatesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "What We Offer to Corporates - Renukiran";
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: "csr",
      title: "CSR Project Implementation",
      description:
        "We design and implement end-to-end CSR projects aligned with Schedule VII of the Companies Act, Sustainable Development Goals (SDGs), ESG frameworks, and organizational priorities. Our projects focus on creating sustainable and measurable impact across communities.",
      icon: <Building2 className="w-7 h-7" />,
      color: "from-blue-500 to-indigo-600",
      href: "/rwf-corporates/csr",
      keyFocus: [
        "Environment and Climate Action Programs",
        "Tree Plantation and Biodiversity Conservation Projects",
        "Education and Digital Literacy Initiatives",
        "Health, Nutrition and Well-being Programs",
        "Women Empowerment and Livelihood Development",
        "Skill Development and Youth Employability Programs",
        "Community Development and Sustainable Infrastructure Projects",
      ],
    },
    {
      id: "esg",
      title: "ESG Sustainability Support",
      description:
        "Our ESG-aligned programs help organizations strengthen their sustainability performance while creating measurable environmental and social impact.",
      icon: <TrendingUp className="w-7 h-7" />,
      color: "from-emerald-500 to-green-600",
      href: "/rwf-corporates/esg-Sustainability",
      keyFocus: [
        "Carbon Sequestration and Climate Action Initiatives",
        "Environmental Conservation Programs",
        "Biodiversity Enhancement Projects",
        "Community Development Interventions",
        "Stakeholder Engagement Activities",
        "Sustainability Awareness Campaigns",
        "Environmental Impact Measurement",
        "ESG Reporting Support",
        "Sustainability Performance Tracking",
      ],
    },
    {
      id: "cause-marketing",
      title: "Cause Marketing & Sustainability Campaigns",
      description:
        "We help organizations integrate social impact and sustainability into their corporate campaigns, brand initiatives, employee celebrations, and stakeholder engagement activities.",
      icon: <Megaphone className="w-7 h-7" />,
      color: "from-purple-500 to-violet-600",
      href: "/rwf-corporates/cause-marketing",
      keyFocus: [
        "Climate-Positive Events",
        "Green Impact Meetings",
        "Employee Celebration Plantations",
        "Festival-Based Giving Campaigns",
        "Memorial Tree Plantation Programs",
        "Corporate Sustainability Campaigns",
        "Earth Day and Environment Day Initiatives",
        "Green Anniversary and Milestone Celebrations",
      ],
    },
    {
      id: "csr-monitoring",
      title: "CSR Monitoring & ESG Reporting",
      description:
        "Transparency, accountability, and measurable impact are central to all our partnerships. We provide comprehensive monitoring and reporting systems that help organizations assess and communicate their CSR and ESG impact effectively.",
      icon: <Handshake className="w-7 h-7" />,
      color: "from-amber-500 to-orange-600",
      href: "/rwf-corporates/csr-monitoring",
      keyFocus: [
        "CSR Impact Reports",
        "ESG Impact Documentation",
        "Beneficiary Data and Impact Metrics",
        "Geo-Tagged Plantation Records",
        "Activity Documentation and Case Studies",
        "Event Photography and Testimonials",
        "Volunteer Participation Metrics",
        "Carbon Sequestration Estimates",
        "Sustainability Performance Reports",
        "CSR and ESG Compliance Support",
      ],
    },
  ];

  const keyAdvantages = [
    "8+ Years of Social Impact and Community Development Experience",
    "Expertise in CSR, ESG, Sustainability, and Employee Engagement Programs",
    "Multi-State Project Implementation Capability Across India",
    "Customized CSR and Corporate Volunteering Solutions",
    "Scalable Employee Engagement Activities",
    "Transparent Monitoring and Reporting Systems",
    "Strong Community Partnerships and Grassroots Presence",
    "Sustainable and Measurable Social Impact",
    "End-to-End Project Management and Documentation Support",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero */}
      <div
        className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-700"
        style={{
          backgroundImage:
            "linear-gradient(rgba(23, 37, 84, 0.9), rgba(67, 56, 202, 0.85)), url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative container mx-auto px-6 py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <Handshake className="w-14 h-14 text-blue-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              What We Offer to Corporates
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-blue-100 font-semibold mb-6">
            Driving ESG Excellence, Employee Engagement, CSR Impact, and Sustainable Development
          </p>
          <p className="text-lg text-gray-100 max-w-4xl mx-auto leading-relaxed">
            At Renukiran Welfare Foundation (RWF), we partner with organizations to transform Corporate Social Responsibility (CSR) commitments, Environmental, Social and Governance (ESG) goals, sustainability strategies, and employee engagement objectives into measurable social and environmental impact. As a trusted CSR implementation partner in India, we design and execute high-impact CSR projects, corporate volunteering programs, employee engagement activities, tree plantation initiatives, community development interventions, and sustainability campaigns that contribute to long-term positive change.
          </p>
          <p className="text-base text-gray-200 max-w-3xl mx-auto leading-relaxed mt-4">
            Through our customized CSR and ESG solutions, organizations can strengthen stakeholder engagement, support Sustainable Development Goals (SDGs), enhance environmental responsibility, and create meaningful community impact while fulfilling their sustainability commitments.
          </p>
        </div>
      </div>

      {/* Services Intro */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Corporate Sustainability, CSR & Employee Engagement Offerings
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-t-4 border-blue-500"
              >
                <div className={`bg-gradient-to-r ${service.color} p-5 text-white`}>
                  <div className="flex items-center">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl mr-3">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>
                  <p className="text-sm font-bold text-gray-800 mb-2">Key Focus Areas:</p>
                  <ul className="space-y-1 mb-4 text-sm text-gray-700">
                    {service.keyFocus.slice(0, 5).map((focus, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                        {focus}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Partner Section */}
      <div
        className="py-20 relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(239, 246, 255, 0.92), rgba(245, 243, 255, 0.92)), url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Partner with Renukiran Welfare Foundation?
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Organizations choose Renukiran Welfare Foundation as their CSR implementation and employee engagement partner because of our proven experience, strong community presence, and commitment to measurable impact.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {keyAdvantages.map((advantage, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 bg-white rounded-xl p-4 shadow-md border-l-4 border-blue-500"
              >
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium text-sm">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div
        className="py-20 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(29, 78, 216, 0.88), rgba(109, 40, 217, 0.88)), url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Creating Sustainable Impact Together
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              At Renukiran Welfare Foundation, we believe that successful corporate partnerships create value not only for organizations but also for communities, ecosystems, and future generations. Through our CSR projects, employee engagement activities, ESG initiatives, sustainability programs, and tree plantation projects, we help organizations create meaningful change while strengthening communities, restoring ecosystems, empowering beneficiaries, and contributing towards a greener, more sustainable, and inclusive future.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl"
            >
              Start a Partnership <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CorporatesPage;
