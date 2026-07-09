"use client";

import React, { useState, useEffect } from "react";
import {
  TreePine,
  Leaf,
  Droplets,
  Mountain,
  Building2,
  Apple,
  Trash2,
  Waves,
  ChevronRight,
  X,
  MapPin,
  Users,
  Target,
  Sparkles,
  ArrowRight,
  Heart,
  TrendingUp,
  Globe,
  Sprout,
  Camera,
} from "lucide-react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "../../../components/component.css";

const SustainabilityProjectsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const carouselImages = [
    "/plantationPictures/WhatsApp Image 2026-03-06 at 12.45.18.jpeg",
    "/plantationPictures/WhatsApp Image 2026-03-06 at 12.45.20.jpeg",
    "/plantationPictures/WhatsApp Image 2026-03-06 at 12.45.22.jpeg",
    "/plantationPictures/WhatsApp Image 2026-03-06 at 12.45.23.jpeg",
    "/plantationPictures/WhatsApp Image 2026-03-06 at 12.45.25.jpeg",
    "/plantationPictures/WhatsApp Image 2026-03-06 at 12.45.27.jpeg",
    "/plantationPictures/WhatsApp Image 2026-03-06 at 12.45.20 (1).jpeg",
    "/plantationPictures/WhatsApp Image 2026-03-06 at 12.45.28 (1).jpeg",
  ];

  const plantationPrograms = [
    {
      id: 1,
      title: "Agroforestry",
      icon: <Sprout className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      shortDesc: "Integrating trees with agriculture to enhance farmer income, soil health, and climate resilience.",
      image: "/plantationPictures/WhatsApp Image 2026-03-06 at 12.45.25.jpeg",
      overview: "Agroforestry integrates trees with crops and livestock within the same agricultural landscape, creating resilient agricultural ecosystems that generate economic benefits while restoring environmental balance.",
      importance: [
        "Diversifies farmer income through fruits, timber, fodder, and medicinal plants",
        "Increases farm income by 25-50% over time compared to monocropping",
        "Improves soil structure and enhances nutrient cycling",
        "Sequesters 2-4 tonnes of CO2 per hectare annually",
        "Reduces dependency on chemical fertilizers",
      ],
    },
    {
      id: 2,
      title: "Miyawaki Forests",
      icon: <TreePine className="w-8 h-8" />,
      color: "from-emerald-500 to-green-700",
      shortDesc: "Creating dense native forests in small spaces for rapid biodiversity restoration and urban cooling.",
      image: "/plantationPictures/WhatsApp Image 2026-03-06 at 12.45.19.jpeg",
      overview: "The Miyawaki method is a scientifically designed afforestation technique that focuses on planting dense clusters of native tree species to replicate natural forest ecosystems.",
      importance: [
        "Dense plantation encourages rapid growth and stronger root systems",
        "Multi-layered vegetation structure mimics natural forests",
        "Self-sustaining after initial care period",
        "High biodiversity support in compact urban spaces",
        "Significant carbon sequestration capacity",
        "Can grow up to ten times faster than traditional plantations",
      ],
    },
    {
      id: 3,
      title: "Mangrove Restoration",
      icon: <Waves className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      shortDesc: "Protecting coastlines and marine ecosystems through restoration of resilient mangrove forests.",
      image: "/plantationPictures/WhatsApp Image 2026-03-06 at 12.45.32.jpeg",
      overview: "Mangroves are salt-tolerant trees and shrubs that grow in coastal intertidal zones, with specialized root systems enabling them to survive in saline environments.",
      importance: [
        "Natural coastal defense against storms and cyclones",
        "Breeding and nursery grounds for marine organisms",
        "Store several times more carbon per hectare than tropical forests",
        "Support commercially important fish species",
      ],
    },
    {
      id: 4,
      title: "Rural Forest Restoration",
      icon: <Mountain className="w-8 h-8" />,
      color: "from-amber-500 to-orange-600",
      shortDesc: "Reviving degraded rural landscapes through native tree plantation and community-led ecosystem restoration.",
      image: "/plantationPictures/WhatsApp Image 2026-03-06 at 12.45.24.jpeg",
      overview: "Rural forest restoration revitalizes degraded landscapes through the planting of native tree species, natural regeneration, soil improvement, and long-term protection.",
      importance: [
        "Improves soil health through enhanced organic matter and microbial activity",
        "Provides non-timber forest products for rural livelihoods",
        "Reduces soil erosion and stabilizes land",
        "Strengthens climate resilience in drought-prone regions",
      ],
    },
    {
      id: 5,
      title: "Urban Forests",
      icon: <Building2 className="w-8 h-8" />,
      color: "from-purple-500 to-violet-600",
      shortDesc: "Transforming cities into greener, cooler spaces through sustainable urban forestry and green infrastructure.",
      image: "/plantationPictures/WhatsApp Image 2026-03-06 at 12.45.26.jpeg",
      overview: "Urban forests are interconnected ecosystems of trees, shrubs, and vegetation found within and around urban areas that support biodiversity, regulate temperature, and improve air quality.",
      importance: [
        "Reduces urban heat island effect through shade and evapotranspiration",
        "Improves air quality by capturing airborne particles",
        "Manages stormwater naturally reducing flood risk",
        "Enhances mental health and social well-being",
      ],
    },
    {
      id: 6,
      title: "Food Forests",
      icon: <Apple className="w-8 h-8" />,
      color: "from-red-500 to-pink-600",
      shortDesc: "Designing edible ecosystems that produce diverse, nutritious food while restoring soil and biodiversity.",
      image: "/plantationPictures/WhatsApp Image 2026-03-06 at 12.45.28.jpeg",
      overview: "A food forest, also known as an edible forest ecosystem, is a carefully designed planting system that mimics natural forests while producing a wide range of edible plants.",
      importance: [
        "Produces diverse crops across different seasons",
        "Improves dietary quality and nutritional security",
        "Reduces dependence on expensive agricultural inputs",
        "Enhances soil fertility through organic matter accumulation",
      ],
    },
    {
      id: 7,
      title: "Cleaning Drives",
      icon: <Trash2 className="w-8 h-8" />,
      color: "from-yellow-500 to-amber-600",
      shortDesc: "Mobilizing communities to clean public spaces and promote responsible waste management practices.",
      image: "/plantationPictures/WhatsApp Image 2026-03-06 at 16.21.50.jpeg",
      overview: "Cleaning drives are coordinated efforts where volunteers and community members participate in cleaning public areas while promoting environmental awareness.",
      importance: [
        "Removes accumulated waste preventing pollution",
        "Prevents diseases spread through improper waste disposal",
        "Reduces plastic waste entering natural ecosystems",
        "Builds community responsibility toward cleanliness",
      ],
    },
    {
      id: 8,
      title: "Pond Restoration",
      icon: <Droplets className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-600",
      shortDesc: "Rejuvenating traditional water bodies to improve water security, biodiversity, and community sustainability.",
      image: "/plantationPictures/WhatsApp Image 2026-03-06 at 16.15.19.jpeg",
      overview: "Pond restoration is the process of rehabilitating degraded ponds to restore their natural ecological functions, improve water quality, and strengthen local water security.",
      importance: [
        "Natural water storage systems regulating local hydrology",
        "Improves groundwater recharge replenishing aquifers",
        "Provides water for irrigation and livestock",
        "Supports aquatic plants, birds, fish, and amphibians",
      ],
    },
  ];

  const impactStats = [
    { number: "2,00,000+", label: "Trees Planted", icon: <TreePine className="w-8 h-8" />, color: "text-green-600" },
    { number: "50,000+", label: "Community Members Engaged", icon: <Users className="w-8 h-8" />, color: "text-blue-600" },
    { number: "12+", label: "States Covered", icon: <MapPin className="w-8 h-8" />, color: "text-purple-600" },
    { number: "90%", label: "Survival Rate", icon: <TrendingUp className="w-8 h-8" />, color: "text-emerald-600" },
  ];

  const openModal = (program) => {
    setSelectedProgram(program);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProgram(null);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      <div
        className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5, 80, 46, 0.85), rgba(6, 95, 70, 0.85)), url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative container mx-auto px-6 py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <Sprout className="w-16 h-16 text-green-200 mr-4 animate-pulse" />
            <h1 className="text-4xl lg:text-6xl md:text-5xl font-bold text-white">
              Active Sustainability <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-emerald-100">Projects</span>
            </h1>
            <Sprout className="w-16 h-16 text-emerald-200 ml-4 animate-bounce" />
          </div>
          <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed mb-6">
            Growing a Greener Tomorrow Through Community-Led Environmental Restoration
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-4"><div className={stat.color}>{stat.icon}</div></div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Camera className="w-12 h-12 text-green-600 mr-3" />
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Our Plantation Journey</h2>
              </div>
              <p className="text-xl text-gray-700">Witness the transformation through our community-driven plantation initiatives</p>
            </div>
            <div className="embla rounded-3xl overflow-hidden shadow-2xl" ref={emblaRef}>
              <div className="embla__container">
                {carouselImages.map((image, index) => (
                  <div key={index} className="embla__slide relative h-96 md:h-[500px]">
                    <Image src={image} alt={`Plantation activity ${index + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plantationPrograms.map((program, index) => (
              <div key={program.id} className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2`}>
                <div className="h-48 relative overflow-hidden">
                  <Image src={program.image} alt={program.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`bg-gradient-to-r ${program.color} p-3 rounded-xl text-white mr-3`}>
                      {program.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{program.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{program.shortDesc}</p>
                  <button
                    onClick={() => openModal(program)}
                    className={`w-full bg-gradient-to-r ${program.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group`}
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5, 150, 105, 0.88), rgba(13, 148, 136, 0.88)), url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Be Part of the Green Revolution</h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Every tree planted is a step towards a healthier planet. Join us in our mission to restore ecosystems, combat climate change, and create sustainable communities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/general-donations" className="bg-white text-green-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-xl flex items-center">
                <Heart className="w-6 h-6 mr-2" /> Donate Now
              </a>
              <a href="/get-involved/volunteering" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-700 transition-all duration-300 shadow-xl flex items-center">
                <Users className="w-6 h-6 mr-2" /> Become a Volunteer
              </a>
            </div>
          </div>
        </div>
      </div>

      {showModal && selectedProgram && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75 backdrop-blur-sm" onClick={closeModal}></div>
            <div className="inline-block align-bottom bg-white rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className={`bg-gradient-to-r ${selectedProgram.color} px-8 py-6 relative`}>
                <button onClick={closeModal} className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-all duration-300">
                  <X className="w-6 h-6" />
                </button>
                <div className="flex items-center text-white">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl mr-4">{selectedProgram.icon}</div>
                  <h3 className="text-3xl font-bold">{selectedProgram.title}</h3>
                </div>
              </div>
              <div className="px-8 py-6 max-h-[70vh] overflow-y-auto">
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <Target className="w-6 h-6 text-green-600 mr-2" />Overview
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">{selectedProgram.overview}</p>
                </div>
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <Sparkles className="w-6 h-6 text-blue-600 mr-2" />Why It Matters
                  </h4>
                  <ul className="space-y-3">
                    {selectedProgram.importance.map((item, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <ChevronRight className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 px-8 py-6 flex flex-wrap gap-4 justify-end">
                <button onClick={closeModal} className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300">
                  Close
                </button>
                <button className={`px-6 py-3 bg-gradient-to-r ${selectedProgram.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center`}>
                  <Heart className="w-5 h-5 mr-2" />Support This Initiative
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SustainabilityProjectsPage;
