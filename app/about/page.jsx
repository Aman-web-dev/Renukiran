"use client";

import React, { useEffect, useState } from "react";
import {
  Heart,
  Users,
  Globe,
  Award,
  ArrowRight,
  Star,
  Boxes,
  Handshake,
  BookCheck,
  ShieldCheck,
  Brain,
  Building2,
} from "lucide-react";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "Renukiran-About";
    setIsVisible(true);
  }, []);

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "10,000+",
      label: "Lives Impacted",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "15+",
      label: "Communities Served",
      icon: "",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      number: "6",
      label: "UN SDG Goals",
      icon: "",
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "2018",
      label: "Year Established",
      icon: "",
    },
  ];

  const values = [
    {
      title: "Respect",
      description:
        "Treating everyone with dignity, fairness, and empathy in all actions.",
      icon: <Handshake className="w-20 h-20 renukiran-green-color" />,
    },
    {
      title: "Integrity",
      description:
        "Striving for the highest quality and continuous improvement in everything we do.",
      icon: <Boxes className="w-20 h-20 renukiran-green-color" />,
    },
    {
      title: "Commitment",
      description:
        "Dedicated to our mission with passion, persistence, and responsibility.",
      icon: <BookCheck className="w-20 h-20 renukiran-green-color" />,
    },

    {
      title: "Excellence",
      description:
        "Striving for the highest quality and continuous improvement in everything we do.",
      icon: <Brain className="w-20 h-20 renukiran-green-color" />,
    },
    {
      title: "Quality",
      description:
        "Striving for the highest quality and continuous improvement in everything we do.",
      icon: <ShieldCheck className="w-20 h-20 renukiran-green-color" />,
    },
    {
      title: "Beneficiary Focus",
      description:
        "We prioritize the needs and dignity of our beneficiaries in everything we do.",
      icon: <Users className="w-20 h-20 renukiran-green-color" />,
    },
    {
      title: "Partnership",
      description:
        "We believe in collaborative partnerships that drive collective impact and sustainable change.",
      icon: <Building2 className="w-20 h-20 renukiran-green-color" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <div
        className={`relative overflow-hidden ${
          isVisible ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-600 to-green-600 rounded-full">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
              Renukiran Welfare Foundation
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              <span className="font-semibold">Kiran Umeed Ki</span> - A beacon
              of hope transforming lives across India
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                "Education",
                "Health and Hygiene",
                "Livelihood",
                "Women Empowerment",
                "Climate Change",
              ].map((goal, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white shadow-md rounded-full text-sm font-medium text-gray-700"
                >
                  {goal}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Mission Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                Renukiran started as a shared dream between our founder, Avinash
                Kumar, and his mother, Renu Ji. Renu Ji envisioned a world where
                everyone could live a life of dignity through education,
                training, and essential life skills. After her passing from
                cancer, Avinash, along with Pooja Gupta, turned this dream into
                reality.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                The journey began in 2013 when Avinash and Pooja would teach
                children from farming and daily wage families living near the
                Yamuna riverbanks in Delhi. After office hours and on weekends,
                they taught, distributed food, organized healthcare camps, and
                conducted WASH (Water, Sanitation, and Hygiene) campaigns.
              </p>
            </div>
          </div>

          {/* Story Section */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    Their efforts culminated in the official establishment of{" "}
                    <strong>Renukiran Welfare Foundation in 2018.</strong> With
                    endless energy and passion, the organization focuses on
                    uplifting underprivileged children, women, and communities
                    across India.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Renukiran Welfare Foundation is a passionate non-profit
                    organization dedicated to creating a positive and lasting
                    impact on communities across India. Since we started, we've
                    worked tirelessly to tackle some of the most critical
                    challenges people face every day. Our mission is to build a
                    fairer and more sustainable world by providing support,
                    resources, and advocacy for those who need it most.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-8 text-white">
                  <div className="flex items-center mb-4">
                    <Star className="w-6 h-6 mr-2" />
                    <h3 className="text-xl font-semibold">
                      In Memory of Renu Ji
                    </h3>
                  </div>
                  <p className="text-blue-100">
                    A humbled Initiative to fulfil Renu Ji's unfulfilled dream
                    post her death due to cancer. Her vision continues to
                    inspire our work in transforming countless lives across
                    India.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Journey Section */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Our Journey
              </h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  In those days, teaching children from farmer communities and
                  daily wage workers living on the banks of the Yamuna in Delhi
                  was a regular activity. These two changemakers would do this
                  after office hours and on weekends.
                </p>
                <p className="text-lg leading-relaxed">
                  Driving unto this path they also started with food
                  distribution drives, healthcare camps, and WASH campaigns.
                  Bringing together all these efforts and collaboration{" "}
                  <strong>RENUKIRAN WELFARE FOUNDATION</strong> was officially
                  established in the year 2018.
                </p>
                <p className="text-lg leading-relaxed">
                  With a never-ending enthusiasm and passion to nurture lives of
                  the many underprivileged children, woman, and communities
                  became the organization's foundational element.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl py-2 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#81C421]"
                >
                  <div className="flex justify-center mb-2">{value.icon}</div>
                  <div className="px-4">
                    <h3 className="text-xl font-bold sub-text-heading">
                      {value.title}
                    </h3>
                    <p className="sub-text">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Explore Our Programs
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We are proud to be registered under Section 8 of the Companies
              Act, 2013, and our work aligns with six United Nations "UN"
              Sustainable Development Goals "SDGs".
            </p>
            <a
              href="/programs"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Learn More About Our Programs
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}

export default About;
