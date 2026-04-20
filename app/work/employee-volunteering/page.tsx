'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Users, 
  Heart, 
  Target, 
  Sparkles, 
  ChevronRight,
  HandHeart,
  BookOpen,
  Stethoscope,
  Briefcase,
  Leaf,
  Award
} from 'lucide-react';

export default function EmployeeVolunteeringProgram() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    '/evp/ACRM7074.JPG.jpeg',
    '/evp/AHBW0792.JPG.jpeg',
    '/evp/AOOQ4236.JPG.jpeg',
    '/evp/EYBX8545.JPG.jpeg',
    '/evp/IMG_1300.JPG.jpeg',
    '/evp/IMG_1344.JPG.jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.37 (1).jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.37.jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.38 (1).jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.38 (2).jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.38.jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.39 (1).jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.39 (2).jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.39.jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.40 (1).jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.40.jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.41 (1).jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.41 (2).jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.41.jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.42 (1).jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.42 (2).jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.42 (3).jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.42.jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.43 (1).jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.43 (2).jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.43.jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.44 (1).jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.44 (2).jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.44 (3).jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.44.jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.45 (1).jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.45 (2).jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.45 (3).jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.45.jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.46 (1).jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.46 (2).jpeg',
    '/evp/WhatsApp Image 2026-04-01 at 17.47.46.jpeg',
  ];

  const impactAreas = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Education",
      description: "Support weekend classes and help children with their studies",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Hygiene",
      description: "Participate in health camps and food distribution drives",
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Livelihood",
      description: "Mentor skill development programs and share expertise",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Women Empowerment",
      description: "Conduct awareness sessions and support women's programs",
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Climate Action",
      description: "Join tree plantation drives and environmental initiatives",
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-800 to-purple-600">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/assets/background.svg')] bg-cover bg-center"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-indigo-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-400 rounded-full opacity-25 animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-6 py-20 text-center">
          <div className="transform transition-all duration-1000">
            <div className="flex items-center justify-center mb-6">
              <HandHeart className="w-12 h-12 text-indigo-300 mr-4" />
              <h1 className="text-3xl lg:text-6xl md:text-5xl font-bold text-black">
                Employee Volunteering{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                  Program
                </span>
              </h1>
              <Sparkles className="w-12 h-12 text-purple-300 ml-4" />
            </div>
            <p className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed mb-4">
              Partner with us to create meaningful impact through corporate volunteering
            </p>
            <p className="text-lg text-gray-900 max-w-3xl mx-auto">
              Empower your employees to give back while building team spirit and social responsibility
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-full">
                  <Target className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Why Employee Volunteering?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Employee volunteering programs create a win-win situation for organizations and communities. 
                They foster team building, enhance employee engagement, and create lasting social impact while 
                aligning with your corporate social responsibility goals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Team Building
                </h3>
                <p className="text-gray-700">
                  Strengthen bonds among team members through shared experiences and collaborative community service activities.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Social Impact
                </h3>
                <p className="text-gray-700">
                  Make a tangible difference in the lives of underprivileged communities while fulfilling your CSR commitments.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Employee Engagement
                </h3>
                <p className="text-gray-700">
                  Boost morale, job satisfaction, and retention by providing meaningful opportunities to give back.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Volunteering Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-full">
                  <BookOpen className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Education Volunteering
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                At the Faridpuri Center, we go beyond conventional teaching methods to create a learning experience that is engaging, meaningful, and child-centric. Our weekend classes are designed not only to support academic growth but also to nurture confidence, creativity, and independent thinking among children.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/evp/ACRM7074.JPG.jpeg"
                  alt="Education volunteering"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/evp/IMG_1300.JPG.jpeg"
                  alt="Teaching children"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                By combining structured academic support with interactive learning techniques, we ensure that children do not just study—but truly understand and enjoy the process of learning. The center acts as a safe space where every child feels heard, valued, and motivated to express themselves freely. Through this approach, we aim to instill a lifelong love for learning while empowering children to overcome challenges, dream bigger, and work towards a brighter future.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Focus Areas</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    Safe & Inclusive Learning Environment
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm ml-6">
                    <li>• A secure and welcoming space for children from underserved communities</li>
                    <li>• Encourages participation without fear or hesitation</li>
                    <li>• Promotes emotional well-being and peer bonding</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
                    Academic Support & Foundational Learning
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm ml-6">
                    <li>• Regular weekend classes covering core subjects</li>
                    <li>• Focus on strengthening basics and clearing concepts</li>
                    <li>• Support aligned with school curriculum</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    Creative & Interactive Teaching Methods
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm ml-6">
                    <li>• Activity-based learning instead of rote memorization</li>
                    <li>• Use of storytelling, games, and group discussions</li>
                    <li>• Encouraging curiosity-driven learning</li>
                  </ul>
                </div>

                <div className="bg-pink-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
                    Confidence & Personality Development
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm ml-6">
                    <li>• Building communication and expression skills</li>
                    <li>• Encouraging children to ask questions and share ideas</li>
                    <li>• Boosting self-confidence through participation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health & Hygiene Volunteering Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-red-500 to-pink-600 p-4 rounded-full">
                  <Heart className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Health & Hygiene Volunteering
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We recognize that a child's ability to learn and grow is deeply connected to their health and well-being. Our Health & Hygiene initiatives focus on addressing childhood undernutrition while ensuring access to essential healthcare and hygiene practices.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/evp/AHBW0792.JPG.jpeg"
                  alt="Health camp"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/evp/EYBX8545.JPG.jpeg"
                  alt="Food distribution"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/evp/IMG_1344.JPG.jpeg"
                  alt="Hygiene awareness"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Through regular health camps, nutrition support, and awareness programs, we work closely with children, families, and communities to build sustainable habits that promote overall well-being. By combining direct support with education, we aim to create healthier environments where children can thrive physically, mentally, and socially.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <Stethoscope className="w-6 h-6 text-red-600 mr-3" />
                    Healthcare Camps
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Our free healthcare camps are designed to bridge the gap in access to basic medical services for underserved communities. We regularly organize camps in areas with limited healthcare facilities.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-red-500 flex-shrink-0" />
                      <span>General health screenings and early diagnosis</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-red-500 flex-shrink-0" />
                      <span>Eye check-ups and basic medical consultations</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-red-500 flex-shrink-0" />
                      <span>Guidance on preventive healthcare and treatment</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-red-500 flex-shrink-0" />
                      <span>Hygiene education to promote healthier lifestyles</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <Heart className="w-6 h-6 text-pink-600 mr-3" />
                    Food Distribution
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Through our Seva Sandwich and Food for Life drives, we aim to combat hunger and support vulnerable communities with fresh, nutritious meals.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-pink-500 flex-shrink-0" />
                      <span>Distribution of freshly prepared, hygienic meals</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-pink-500 flex-shrink-0" />
                      <span>Focus on nutrition and quality of food</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-pink-500 flex-shrink-0" />
                      <span>Community-driven efforts with volunteers</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-pink-500 flex-shrink-0" />
                      <span>Creating a sense of care, dignity, and human connection</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Livelihood Volunteering Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-full">
                  <Briefcase className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Livelihood Volunteering
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                True empowerment begins with economic independence and the ability to break free from the cycle of poverty. At Renukiran Welfare Foundation, we focus on creating sustainable livelihood opportunities that enable individuals—especially women and youth—to become financially self-reliant.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/evp/AOOQ4236.JPG.jpeg"
                  alt="Skill training"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/evp/WhatsApp Image 2026-04-01 at 17.47.37.jpeg"
                  alt="Livelihood program"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Approach</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At Renukiran Welfare Foundation, we believe that livelihood is not just about earning—it's about dignity, confidence, and long-term stability. Our programs are designed to equip individuals with practical skills and real-world knowledge that help them generate income and improve their quality of life.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Palla Center (Faridabad)</h4>
                  <p className="text-gray-700 mb-4">
                    The Palla Center is one of our key skill development hubs, focused on empowering women and youth through practical, income-generating training programs.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-bold text-gray-800 mb-2">Stitching & Tailoring Course</h5>
                      <p className="text-sm text-gray-700">Training in basic to advanced stitching techniques, garment making, and preparing women for home-based work.</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800 mb-2">Beauty & Parlor Course</h5>
                      <p className="text-sm text-gray-700">Training in beauty services, hygiene, skincare, and building confidence to work in salons or start independent services.</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800 mb-2">Computer & Digital Skills</h5>
                      <p className="text-sm text-gray-700">Basic computer knowledge, digital literacy, and enhancing employability for office and digital roles.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Garhi Center</h4>
                  <p className="text-gray-700 mb-4">
                    The Garhi Center focuses on providing stitching and tailoring skills to women from underserved communities, helping them move towards financial independence.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                      <span>Training in basic stitching, cutting, and garment creation</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                      <span>Focus on practical, hands-on learning</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                      <span>Encouraging home-based income opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                      <span>Supporting women in taking small orders and starting their work</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Women Empowerment Volunteering Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-violet-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-violet-600 p-4 rounded-full">
                  <Users className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Women Empowerment Volunteering
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Empowering women begins with access—to knowledge, resources, opportunities, and the confidence to make informed decisions. At Renukiran Welfare Foundation, we work towards creating an environment where women are aware of their rights, take charge of their health, and become financially and socially independent.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/evp/WhatsApp Image 2026-04-01 at 17.47.38.jpeg"
                  alt="Women empowerment session"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/evp/WhatsApp Image 2026-04-01 at 17.47.39.jpeg"
                  alt="Awareness program"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/evp/WhatsApp Image 2026-04-01 at 17.47.40.jpeg"
                  alt="Women's workshop"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Breaking the Silence</h3>
                  <p className="text-gray-700 mb-4">
                    We strive to normalize conversations around menstruation and reproductive health by creating safe and supportive spaces for women and girls.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-purple-500 flex-shrink-0" />
                      <span>Awareness sessions on menstrual and reproductive health</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-purple-500 flex-shrink-0" />
                      <span>Open discussions to eliminate stigma and myths</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-purple-500 flex-shrink-0" />
                      <span>Encouraging confidence to speak without fear or shame</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Sustainable Solutions</h3>
                  <p className="text-gray-700 mb-4">
                    Access to menstrual hygiene products is essential for dignity and health. We promote affordable and eco-friendly solutions for long-term impact.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-purple-500 flex-shrink-0" />
                      <span>Distribution of reusable sanitary napkins</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-purple-500 flex-shrink-0" />
                      <span>Education on safe usage, hygiene, and maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-purple-500 flex-shrink-0" />
                      <span>Ensuring accessibility for women in underserved communities</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 rounded-r-2xl p-6">
                <p className="text-gray-800 font-medium italic">
                  "At Renukiran Welfare Foundation, women empowerment is at the core of our mission. We believe that when a woman is empowered, it creates a ripple effect—uplifting families, strengthening communities, and driving long-term social change."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Action Volunteering Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-4 rounded-full">
                  <Leaf className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Climate Action Volunteering
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Addressing climate change requires collective responsibility and consistent action. At Renukiran Welfare Foundation, we are committed to promoting sustainable practices and engaging communities in environmental conservation to build a greener, healthier future for all.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/evp/WhatsApp Image 2026-04-01 at 17.47.41.jpeg"
                  alt="Tree plantation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/evp/WhatsApp Image 2026-04-01 at 17.47.42.jpeg"
                  alt="Environmental activity"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Focus Areas</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Tree Plantation & Green Cover Restoration</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                      <span>Large-scale plantation drives in urban and rural areas</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                      <span>Promotion of Miyawaki forests for dense growth</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                      <span>Community participation in planting and nurturing trees</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-emerald-50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Seed Ball Making & Distribution</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-emerald-500 flex-shrink-0" />
                      <span>Organizing seed ball making activities with volunteers</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-emerald-500 flex-shrink-0" />
                      <span>Using natural materials to create eco-friendly seed balls</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-emerald-500 flex-shrink-0" />
                      <span>Distributing seed balls in barren areas</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Environmental Awareness & Education</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-blue-500 flex-shrink-0" />
                      <span>Awareness sessions on climate change and sustainability</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-blue-500 flex-shrink-0" />
                      <span>Educating communities on environmental responsibility</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-blue-500 flex-shrink-0" />
                      <span>Promoting eco-friendly habits</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-teal-50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Waste Management & Cleanliness</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-teal-500 flex-shrink-0" />
                      <span>Community clean-up campaigns in public spaces</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-teal-500 flex-shrink-0" />
                      <span>Awareness on waste segregation and recycling</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-teal-500 flex-shrink-0" />
                      <span>Encouraging reduction of single-use plastics</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-6 text-white">
                <p className="text-lg leading-relaxed">
                  At Renukiran Welfare Foundation, we believe that real change begins at the grassroots level. Our climate action initiatives are designed to actively involve communities, especially youth and children, in creating and sustaining a cleaner environment. Our goal is not just to plant trees, but to nurture a culture of sustainability that leads to long-term environmental impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                What Your Employees Will Gain
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Beyond making a difference in communities, volunteering offers profound benefits for your team
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Enhanced Teamwork</h3>
                <p className="text-sm text-gray-700">Build stronger relationships through shared meaningful experiences</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Personal Fulfillment</h3>
                <p className="text-sm text-gray-700">Experience the joy of making a real difference in people's lives</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Skill Development</h3>
                <p className="text-sm text-gray-700">Develop leadership, communication, and problem-solving skills</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Fresh Perspective</h3>
                <p className="text-sm text-gray-700">Gain new insights and appreciation for diverse communities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Areas of Engagement
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from diverse volunteering opportunities aligned with our core focus areas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {impactAreas.map((area, index) => (
                <div 
                  key={index}
                  className={`${area.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                >
                  <div className={`bg-gradient-to-r ${area.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white`}>
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {area.title}
                  </h3>
                  <p className="text-gray-700">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Simple steps to get your team involved in meaningful volunteering
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-indigo-600 font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Connect With Us</h3>
                    <p className="text-gray-700">Reach out to discuss your organization's interests and availability</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-purple-600 font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Customize Your Program</h3>
                    <p className="text-gray-700">We'll design a volunteering program tailored to your team's skills and preferences</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-pink-600 font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Engage & Impact</h3>
                    <p className="text-gray-700">Your team participates in hands-on activities that create real change</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-green-600 font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Measure & Celebrate</h3>
                    <p className="text-gray-700">Receive impact reports and celebrate the difference you've made together</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Volunteering Options</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-indigo-200 flex-shrink-0" />
                    <span>One-day volunteering events</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-indigo-200 flex-shrink-0" />
                    <span>Skill-based volunteering programs</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-indigo-200 flex-shrink-0" />
                    <span>Long-term partnership opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-indigo-200 flex-shrink-0" />
                    <span>Virtual volunteering options</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-indigo-200 flex-shrink-0" />
                    <span>Team building through service</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-indigo-200 flex-shrink-0" />
                    <span>Customized CSR initiatives</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Volunteering in Action
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See the impact of corporate volunteers making a difference in our communities
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <div 
                  key={index}
                  className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image}
                    alt={`Employee volunteering activity ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Partner with Renukiran Welfare Foundation to create meaningful employee volunteering experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started
              </a>
              <a 
                href="/work"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Learn More About Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Volunteering activity"
              fill
              className="object-contain"
              sizes="90vw"
            />
            <button 
              className="absolute top-4 right-4 bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition-all"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
