"use client";

import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Heart,
  Briefcase,
  Users,
  Leaf,
  GraduationCap,
  Stethoscope,
  Scissors,
  Award,
  TreePine,
  Navigation,
  ChevronRight,
  Target,
  Sparkles,
  ArrowUp,
} from "lucide-react";

const OurWorkPage = () => {
  const [activeSection, setActiveSection] = useState("education");
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      // Update active section based on scroll position
      const sections = [
        "education",
        "health",
        "livelihood",
        "women-empowerment",
        "climate-change",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const workSections = [
    {
      id: "education",
      title: "Education",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      description: "Breaking the chains of poverty through quality education",
    },
    {
      id: "health",
      title: "Health & Hygiene",
      icon: <Heart className="w-6 h-6" />,
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      description: "Ensuring fundamental right to nutrition and healthcare",
    },
    {
      id: "livelihood",
      title: "Livelihood",
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      description: "Empowering through economic independence and skills",
    },
    {
      id: "women-empowerment",
      title: "Women Empowerment",
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
      description: "Fostering knowledge, awareness, and essential resources",
    },
    {
      id: "climate-change",
      title: "Climate Action",
      icon: <Leaf className="w-6 h-6" />,
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-50",
      description: "Addressing environmental challenges for future generations",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-800 to-lime-500">
        <div className="absolute inset-0 our-work-bg-img opacity-20"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-400 rounded-full opacity-25 animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-6 py-20 text-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center mb-6">
              <Target className="w-12 h-12 text-blue-400 mr-4" />
              <h1 className="text-3xl lg:text-6xl md:text-5xl header-text-400 font-bold text-white">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-white">
                  Work
                </span>
              </h1>
              <Sparkles className="w-12 h-12 text-purple-400 ml-4" />
            </div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-4">
              Transforming lives through comprehensive programs across
              education, health, livelihood, and environmental action
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Every initiative is a step towards building a more equitable and
              sustainable future
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      {/* <div className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-6">
          <nav className="flex flex-wrap justify-center md:justify-between items-center py-4">
            <div className="flex items-center mb-2 md:mb-0">
              <Navigation className="w-5 h-5 text-indigo-600 mr-2" />
              <span className="font-semibold text-gray-800">Navigate:</span>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-4">
              {workSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                    activeSection === section.id
                      ? `bg-gradient-to-r ${section.color} text-white shadow-lg scale-105`
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {section.icon}
                  <span className="ml-2 hidden sm:inline">{section.title}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div> */}

      {/* Education Section */}
      <section
        id="education"
        className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-full">
                  <BookOpen className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Education
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Breaking the chains of poverty through quality education and
                opening doors to endless possibilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
                    Our Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    At Renukiran, we believe that education is the most powerful
                    tool to break the chains of poverty. Our mission is to bring
                    quality education to children living in slums, empowering
                    them academically, socially, and economically.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <Target className="w-6 h-6 text-green-600 mr-3" />
                    Faridpuri Center
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our special weekend classes serve as a safe and nurturing
                    learning space. Children are taught all academic subjects
                    with creative, interactive methods that make learning
                    engaging and build confidence, curiosity, and genuine love
                    for learning.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-blue-200" />
                      <span>
                        Home visits to build understanding with families
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-blue-200" />
                      <span>Scholarship programs for promising students</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-blue-200" />
                      <span>Interactive and creative teaching methods</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-blue-200" />
                      <span>Focus on confidence building and curiosity</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-2xl p-6">
                  <p className="text-gray-800 font-medium italic">
                    "Step by step, heart by heart, we are building a community
                    where education is not a luxury, but a right — and every
                    child is given the chance to learn, grow, and dream."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health & Hygiene Section */}
      <section
        id="health"
        className="py-20 bg-gradient-to-br from-red-50 to-pink-50"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-red-500 to-pink-600 p-4 rounded-full">
                  <Heart className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Health & Hygiene
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Addressing childhood undernutrition and ensuring access to
                proper nutrition and basic healthcare
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Stethoscope className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Healthcare Camps
                </h3>
                <p className="text-gray-700">
                  Free healthcare camps offering basic health check-ups, hygiene
                  education, and consultations in areas with limited medical
                  access.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Food Distribution
                </h3>
                <p className="text-gray-700">
                  Seva Sandwich and Food for Life drives providing fresh,
                  nutritious meals to homeless and underprivileged communities,
                  creating moments of relief and dignity.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Awareness Sessions
                </h3>
                <p className="text-gray-700">
                  Regular sessions on menstrual hygiene and reproductive health,
                  breaking taboos and empowering women with knowledge and
                  dignity.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">COVID-19 Response</h3>
              <p className="text-lg leading-relaxed">
                During the pandemic, we stepped up to distribute raashan
                (essential food supplies) to families hit hardest by the
                lockdown. For many, these supplies were a lifeline — ensuring
                survival during a time of uncertainty and despair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Livelihood Section */}
      <section
        id="livelihood"
        className="py-20 bg-gradient-to-br from-green-50 to-emerald-50"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-full">
                  <Briefcase className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Livelihood
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                True empowerment begins with economic independence and breaking
                free from the cycle of poverty
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <Scissors className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Skill Development Center
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Our ongoing center in Faridabad offers hands-on training in
                    beautician services, stitching, and computer courses -
                    gateways to a better future.
                  </p>
                  <div className="text-sm text-green-600 font-medium">
                    📍 Faridabad, Haryana
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Our Support System
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-green-200" />
                      <span>Job placement assistance</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-green-200" />
                      <span>Financial literacy sessions</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-green-200" />
                      <span>Market linkage support</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-green-200" />
                      <span>Entrepreneurship guidance</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    Stitching Course
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Training in sewing garments from children's clothes to
                    traditional Indian wear like suits, blouses, and lehengas
                    with professional market-ready skills.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
                    Beautician Course
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Comprehensive training from basic grooming to advanced
                    beauty techniques including makeup, manicure, pedicure,
                    waxing, and skincare.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    Computer Training
                  </h4>
                  <p className="text-gray-700 text-sm">
                    From digital literacy to advanced skills like Canva, AI
                    tools, and Digital Marketing - enhancing both employment and
                    entrepreneurial opportunities.
                  </p>
                </div>

                <div className="bg-emerald-50 border-l-4 border-emerald-400 rounded-r-2xl p-6">
                  <p className="text-gray-800 font-medium italic">
                    "We're not just teaching skills — we're nurturing dreams,
                    building confidence, and creating pathways to financial
                    freedom."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Women Empowerment Section */}
      <section
        id="women-empowerment"
        className="py-20 bg-gradient-to-br from-purple-50 to-violet-50"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-violet-600 p-4 rounded-full">
                  <Users className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Women Empowerment
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Empowering women through knowledge, awareness, and access to
                essential resources
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <Award className="w-6 h-6 text-purple-600 mr-3" />
                    Breaking the Silence
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We organize awareness sessions and workshops to break the
                    silence surrounding menstruation and reproductive wellness,
                    creating safe, supportive spaces for open dialogue without
                    fear or shame.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <Heart className="w-6 h-6 text-pink-600 mr-3" />
                    Sustainable Solutions
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We distribute reusable sanitary napkins to women and girls
                    from underprivileged communities, making menstrual products
                    accessible while promoting environmentally sustainable
                    practices.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Our Impact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-white rounded-full mr-4"></div>
                      <span>Safe spaces for health discussions</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-white rounded-full mr-4"></div>
                      <span>Dismantling age-old taboos</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-white rounded-full mr-4"></div>
                      <span>Promoting healthier attitudes</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-white rounded-full mr-4"></div>
                      <span>Financial independence through skills</span>
                    </div>
                  </div>
                </div>

                <div className="bg-pink-50 border-l-4 border-pink-400 rounded-r-2xl p-6">
                  <p className="text-gray-800 font-medium italic">
                    "Many women expressed that these sessions were the first
                    time they felt truly heard and informed about their own
                    bodies."
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">
                    Holistic Empowerment
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Beyond health awareness, we run skill development programs
                    including tailoring and entrepreneurship training, providing
                    tools for financial independence and self-reliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Action Section */}
      <section
        id="climate-change"
        className="py-20 bg-gradient-to-br from-emerald-50 to-green-50"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-4 rounded-full">
                  <Leaf className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Climate Action
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Addressing climate change through sustainable initiatives and
                community participation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <TreePine className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Tree Plantation
                </h3>
                <p className="text-gray-700">
                  Active tree plantation drives in urban and rural areas,
                  promoting afforestation to combat deforestation and reduce
                  carbon emissions.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Waste Management
                </h3>
                <p className="text-gray-700">
                  Our Thermocol Waste Management Project in Uttar Pradesh
                  tackles persistent non-biodegradable pollutants for a cleaner
                  environment.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Leaf className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Clean Energy
                </h3>
                <p className="text-gray-700">
                  Promoting solar-powered technologies and clean energy
                  solutions to reduce dependency on harmful fossil fuels in
                  underprivileged areas.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-4">Community Education</h3>
              <p className="text-lg leading-relaxed">
                During the pandemic, we stepped up to distribute raashan
                (essential food supplies) to families hit hardest by the
                lockdown. For many, these supplies were a lifeline — ensuring
                survival during a time of uncertainty and despair.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWorkPage;
