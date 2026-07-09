"use client";

import React, { useState, useEffect } from "react";
import "./work.css";
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
  BicepsFlexed,
  X,
  ShipWheel,
  ImagePlus,
} from "lucide-react";

/* ============================================================
   Image gallery data
   ------------------------------------------------------------
   Each section has 4 placeholder slots. Replace the `src`
   value with your Firebase Storage URL when ready:
     const FIREBASE = "https://firebasestorage.googleapis.com/...";
     src: `${FIREBASE}/education%2Fclassroom.jpg?alt=media&token=...`
   Keep the `id` so the layout order is preserved while you swap.
   ============================================================ */
const galleryImages = {
  education: [
    {
      id: "edu-1",
      src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80",
      alt: "Child engaged in focused learning session",
      caption: "Faridpuri Center Weekend Classes",
    },
    {
      id: "edu-2",
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
      alt: "Children studying in classroom",
      caption: "Interactive Learning Sessions",
    },
    {
      id: "edu-3",
      src: "https://images.unsplash.com/photo-1509062522246-587797dc60f3?auto=format&fit=crop&w=900&q=80",
      alt: "Group of students learning together",
      caption: "Confidence & Curiosity Building",
    },
    {
      id: "edu-4",
      src: "https://images.unsplash.com/photo-1503676382574-8f9d29a9eed8?auto=format&fit=crop&w=900&q=80",
      alt: "Reading and literacy program materials",
      caption: "Scholarship Programs",
    },
  ],
  health: [
    {
      id: "hlth-1",
      src: "https://images.unsplash.com/photo-1505751172876-fa1923c3c448?auto=format&fit=crop&w=900&q=80",
      alt: "Community health awareness session",
      caption: "Healthcare & Hygiene Awareness",
    },
    {
      id: "hlth-2",
      src: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=900&q=80",
      alt: "Health and hygiene awareness training",
      caption: "Hygiene Awareness Drives",
    },
    {
      id: "hlth-3",
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
      alt: "Community volunteers serving food",
      caption: "Food for Life Initiative",
    },
    {
      id: "hlth-4",
      src: "https://images.unsplash.com/photo-1486825586573-7131f7991bdd?auto=format&fit=crop&w=900&q=80",
      alt: "Community health and nutrition support",
      caption: "Nutrition & Well-being Support",
    },
  ],
  livelihood: [
    {
      id: "liv-1",
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&fit=crop&w=900&q=80",
      alt: "Woman learning tailoring",
      caption: "Stitching & Tailoring — Palla",
    },
    {
      id: "liv-2",
      src: "https://images.unsplash.com/photo-1521798452844-d3b5bc62ab9c?auto=format&fit=crop&w=900&q=80",
      alt: "Skill development training",
      caption: "Beautician Skills Training",
    },
    {
      id: "liv-3",
      src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
      alt: "Computer literacy class",
      caption: "Digital Literacy Program",
    },
    {
      id: "liv-4",
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
      alt: "Women entrepreneurs at market",
      caption: "Market Linkage & Entrepreneurship",
    },
  ],
  "women-empowerment": [
    {
      id: "we-1",
      src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80",
      alt: "Women in a discussion circle",
      caption: "Breaking the Silence Workshops",
    },
    {
      id: "we-2",
      src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=80",
      alt: "Reusable sanitary napkins",
      caption: "Sustainable Hygiene Solutions",
    },
    {
      id: "we-3",
      src: "https://images.unsplash.com/photo-1521798552670-0d5f7b89ec00?auto=format&fit=crop&w=900&q=80",
      alt: "Mentorship and training",
      caption: "Confidence & Capacity Building",
    },
    {
      id: "we-4",
      src: "https://images.unsplash.com/photo-1573164574230-db1d5e960238?auto=format&fit=crop&w=900&q=80",
      alt: "Women participating in community gathering",
      caption: "Holistic Empowerment",
    },
  ],
  "climate-change": [
    {
      id: "cc-1",
      src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80",
      alt: "Volunteers planting trees",
      caption: "Tree Plantation Drives",
    },
    {
      id: "cc-2",
      src: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=900&q=80",
      alt: "Community cleaning drive",
      caption: "Cleaning & Sanitation Drives",
    },
    {
      id: "cc-3",
      src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
      alt: "Solar panels in field",
      caption: "Clean Energy Adoption",
    },
    {
      id: "cc-4",
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
      alt: "Community environmental engagement",
      caption: "Sustainability Education",
    },
  ],
};

// Reusable theme-gallery component used in every section.
function ThemeGallery({ theme, images, accent }) {
  return (
    <div className="theme-gallery" data-theme={theme} aria-label={`${theme} photo gallery`}>
      <div className="theme-gallery__header">
        <ImagePlus className="theme-gallery__icon" aria-hidden="true" />
        <div>
          <h3 className="theme-gallery__title">Glimpses of our {theme.replace("-", " ")} work</h3>
          <p className="theme-gallery__sub">
            Images will be loaded from Firebase Storage — placeholder slots below.
          </p>
        </div>
      </div>
      <div className="theme-gallery__grid">
        {images.map((img) => (
          <figure key={img.id} className="theme-gallery__card" style={{ "--accent": accent }}>
            <div className="theme-gallery__frame">
              <img src={img.src} alt={img.alt} loading="lazy" />
              <span className="theme-gallery__slot">Slot {img.id.split("-")[1]}</span>
            </div>
            <figcaption className="theme-gallery__caption">{img.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

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
    <div className="work-page">
      {/* Fixed background image — stays in place while content scrolls */}
      <div className="work-page__bg" aria-hidden="true" />
      <div className="work-page__overlay" aria-hidden="true" />

      <div className="work-page__content min-h-screen">
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
            className={`transform transition-all duration-1000 ${isVisible
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

            <ThemeGallery
              theme="education"
              images={galleryImages.education}
              accent="#3b82f6"
            />
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

            <ThemeGallery
              theme="health"
              images={galleryImages.health}
              accent="#ec4899"
            />
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
                  {/* Header */}
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <Scissors className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Skill Development Centers
                    </h3>
                  </div>

                  {/* Palla Center */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      Palla Center (Faridabad)
                    </h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Stitching & tailoring training (basic to advanced)</li>
                      <li>Beauty & parlor skills (facials, makeup, hygiene)</li>
                      <li>Computer & digital literacy (MS Office, internet)</li>
                      <li>Hands-on practical training with real projects</li>
                      <li>Focus on employment & small business opportunities</li>
                    </ul>
                  </div>

                  {/* Garhi Center */}
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      Garhi Center
                    </h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Stitching & garment creation training</li>
                      <li>Practical, hands-on learning approach</li>
                      <li>Encourages home-based income opportunities</li>
                      <li>Supports women in starting small tailoring work</li>
                    </ul>
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

            <ThemeGallery
              theme="livelihood"
              images={galleryImages.livelihood}
              accent="#10b981"
            />
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

            <div className="bg-white rounded-2xl p-8 shadow-xl mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Empowering women begins with access—to knowledge, resources, opportunities,
                and the confidence to make informed decisions. At Renukiran Welfare Foundation,
                we work towards creating an environment where women are aware of their rights,
                take charge of their health, and become financially and socially independent.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Key Focus Areas
              </h4>
              <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Breaking the Silence
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Sustainable Solutions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Health & Hygiene Awareness
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Confidence and Capacity Building
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Holistic Empowerment
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <X className="w-6 h-6 text-purple-600 mr-3" />
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

                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <Award className="w-6 h-6 text-purple-600 mr-3" />
                    Health & Hygiene Awareness
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We empower women through health and hygiene awareness, focusing on menstrual health, sanitation, and nutrition. By providing knowledge, resources, and support, we enable women to make informed choices, improve well-being, and lead healthier, confident, and self-reliant lives.
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
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <BicepsFlexed className="w-5 h-5 text-purple-600 mr-3" />
                    Confidence and Capacity Building
                  </h4>
                  <p className="text-gray-700 ">
                    Beyond health awareness, we run skill development programs
                    including tailoring and entrepreneurship training, providing
                    tools for financial independence and self-reliance.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <ShipWheel className="w-5 h-5 text-purple-600 mr-3 " />
                    Holistic Empowerment
                  </h4>
                  <p className="text-gray-700">
                    We strengthen women’s confidence and capacity through skill training, mentorship, and awareness programs, enabling them to enhance decision-making, build leadership skills, become self-reliant, and actively contribute to their families, livelihoods, and communities.
                  </p>
                </div>
              </div>
            </div>

            <ThemeGallery
              theme="women-empowerment"
              images={galleryImages["women-empowerment"]}
              accent="#a855f7"
            />
          </div>
        </div>
      </section>

      {/* Climate Action Section */}
      <section
        id="climate-change"
        className="py-20 bg-gradient-to-br from-emerald-50 to-green-50 flex flex-row items-center justify-center"
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
                  Cleaning Drives
                </h3>
                <p className="text-gray-700">
                  We conduct cleanliness drives to create healthier, greener communities. We engage volunteers in cleaning public spaces while promoting awareness on hygiene and waste management. Our aim is to inspire lasting habits for a cleaner environment.
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

            <ThemeGallery
              theme="climate-change"
              images={galleryImages["climate-change"]}
              accent="#059669"
            />
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default OurWorkPage;
