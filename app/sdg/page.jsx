'use client'
import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  BookOpen, 
  Users, 
  Briefcase, 
  Leaf, 
  Utensils,
  Target,
  Globe,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';

const SDGGoalsPage = () => {
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sdgGoals = [
    {
      id: 2,
      title: "Zero Hunger",
      icon: <Utensils className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-800",
      borderColor: "border-yellow-300",
      objective: "End hunger and ensure access to sufficient, nutritious food for everyone, especially those in vulnerable situations.",
      efforts: "We run food distribution drives to provide meals to underserved communities, ensuring no one goes to bed hungry.",
      impactStats: { number: "15K+", label: "Meals Distributed" },
      activities: ["Food Distribution Drives", "Nutrition Awareness", "Community Kitchens", "Emergency Food Relief"]
    },
    {
      id: 3,
      title: "Good Health and Well-Being",
      icon: <Heart className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      textColor: "text-green-800",
      borderColor: "border-green-300",
      objective: "Ensure healthy lives and promote well-being for all ages.",
      efforts: "We organize healthcare camps, provide basic medical aid, and raise awareness about hygiene and sanitation through WASH campaigns.",
      impactStats: { number: "25K+", label: "People Treated" },
      activities: ["Healthcare Camps", "WASH Campaigns", "Medical Aid", "Health Awareness Programs"]
    },
    {
      id: 4,
      title: "Quality Education",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-800",
      borderColor: "border-blue-300",
      objective: "Ensure inclusive, equitable quality education and promote lifelong learning opportunities for all.",
      efforts: "We offer education and life-skills training to children from marginalized communities, helping them build brighter futures.",
      impactStats: { number: "8K+", label: "Children Educated" },
      activities: ["Life Skills Training", "Digital Literacy", "Educational Support", "Learning Resources"]
    },
    {
      id: 5,
      title: "Gender Equality",
      icon: <Users className="w-8 h-8" />,
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      textColor: "text-pink-800",
      borderColor: "border-pink-300",
      objective: "Achieve gender equality and empower all women and girls.",
      efforts: "We empower women by providing skill development opportunities and advocating for equal rights and participation in all aspects of life.",
      impactStats: { number: "12K+", label: "Women Empowered" },
      activities: ["Skill Development", "Women Leadership Programs", "Rights Advocacy", "Economic Empowerment"]
    },
    {
      id: 8,
      title: "Decent Work and Economic Growth",
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-800",
      borderColor: "border-purple-300",
      objective: "Promote sustained, inclusive economic growth and productive employment for all.",
      efforts: "We facilitate skill development programs and create livelihood opportunities for youth and adults, enabling them to earn a dignified living.",
      impactStats: { number: "10K+", label: "Skills Trained" },
      activities: ["Vocational Training", "Entrepreneurship Support", "Livelihood Programs", "Employment Assistance"]
    },
    {
      id: 13,
      title: "Climate Action",
      icon: <Leaf className="w-8 h-8" />,
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-800",
      borderColor: "border-emerald-300",
      objective: "Take urgent action to combat climate change and its impacts.",
      efforts: "We advocate for sustainable living practices and conduct environmental awareness campaigns to promote a greener future.",
      impactStats: { number: "5K+", label: "People Aware" },
      activities: ["Environmental Campaigns", "Sustainable Practices", "Tree Plantation", "Climate Education"]
    }
  ];

  const totalImpact = {
    goals: 6,
    communities: "50K+",
    programs: "200+",
    states: 10
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-400 rounded-full opacity-25 animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 right-1/3 w-14 h-14 bg-green-400 rounded-full opacity-20 animate-bounce delay-500"></div>
        </div>

        <div className="relative container mx-auto px-6 py-20 text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center mb-6">
              <Globe className="w-12 h-12 text-blue-400 mr-4" />
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                SDG <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Goals</span>
              </h1>
              <Target className="w-12 h-12 text-purple-400 ml-4" />
            </div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-4">
              Aligning with the United Nations Sustainable Development Goals
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Creating lasting change by addressing the most pressing global challenges
            </p>
          </div>
        </div>
      </div>

      {/* Impact Overview Stats */}
      <div className="container mx-auto px-6 -mt-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-l-4 border-blue-500">
            <div className="text-blue-600 mb-3">
              <Target className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">{totalImpact.goals}</div>
            <div className="text-gray-600 font-medium">SDG Goals</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-l-4 border-green-500">
            <div className="text-green-600 mb-3">
              <Users className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">{totalImpact.communities}</div>
            <div className="text-gray-600 font-medium">Lives Impacted</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-l-4 border-purple-500">
            <div className="text-purple-600 mb-3">
              <Briefcase className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">{totalImpact.programs}</div>
            <div className="text-gray-600 font-medium">Active Programs</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-l-4 border-orange-500">
            <div className="text-orange-600 mb-3">
              <Globe className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">{totalImpact.states}</div>
            <div className="text-gray-600 font-medium">States Covered</div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Commitment to Global Goals</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We align our work with six key United Nations Sustainable Development Goals, addressing some of the most pressing global challenges to create lasting change and build a sustainable tomorrow.
          </p>
        </div>
      </div>

      {/* SDG Goals Grid */}
      <div className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sdgGoals.map((goal, index) => (
            <div
              key={goal.id}
              className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                selectedGoal === goal.id ? 'scale-105' : ''
              } ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedGoal(selectedGoal === goal.id ? null : goal.id)}
            >
              <div className={`${goal.bgColor} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${goal.borderColor} hover:border-opacity-50`}>
                {/* Goal Header */}
                <div className={`bg-gradient-to-r ${goal.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 transform translate-x-6 -translate-y-6">
                    <div className="w-32 h-32  opacity-10 rounded-full"></div>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className=" bg-opacity-20 p-3 rounded-full mr-4">
                          {goal.icon}
                        </div>
                        <div>
                          <div className="text-sm font-medium opacity-90">SDG {goal.id}</div>
                          <h3 className="text-xl font-bold">{goal.title}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">{goal.impactStats.number}</div>
                      <div className="text-sm opacity-90">{goal.impactStats.label}</div>
                    </div>
                  </div>
                </div>

                {/* Goal Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <Target className="w-4 h-4 mr-2 text-blue-600" />
                      Objective:
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {goal.objective}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      Our Efforts:
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {goal.efforts}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <Sparkles className="w-4 h-4 mr-2 text-purple-600" />
                      Key Activities:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {goal.activities.map((activity, idx) => (
                        <div
                          key={idx}
                          className={`${goal.textColor} bg-white bg-opacity-80 px-3 py-2 rounded-lg text-xs font-medium border ${goal.borderColor} flex items-center`}
                        >
                          <ArrowRight className="w-3 h-3 mr-1 flex-shrink-0" />
                          <span className="truncate">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Indicator */}
                <div className={`h-1 bg-gradient-to-r ${goal.color} opacity-0 group-hover:opacity-100 transition-all duration-300`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-3xl md:text-4xl font-bold">
                A Ray of Hope for Tomorrow
              </h3>
              <Sparkles className="w-8 h-8 text-yellow-400 ml-3" />
            </div>
            <p className="text-xl leading-relaxed mb-8 text-gray-200">
              Through these six SDG goals, we strive to be a ray of hope for individuals and communities, 
              ensuring a brighter and sustainable tomorrow. Our commitment extends beyond immediate relief 
              to create systemic change that empowers communities for generations to come.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Sustainable Impact</h4>
                <p className="text-gray-300">Creating lasting change that empowers communities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Global Alignment</h4>
                <p className="text-gray-300">Working towards UN Sustainable Development Goals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Community Focus</h4>
                <p className="text-gray-300">Empowering individuals and communities together</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SDGGoalsPage;    