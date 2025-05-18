import React from "react";
import {
  Heart,
  Eye,
  Target,
  Users,
  Globe,
  Handshake,
  TreePine,
  BookOpen,
} from "lucide-react";

export default function NGOMissionVisionGoals() {
  const goals = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Empowerment",
      description:
        "Empower 50,000 individuals through education and skill development programs by 2026",
      progress: 72,
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description:
        "Expand our programs to 25 underserved communities across 3 continents",
      progress: 48,
    },
    {
      icon: <TreePine className="w-6 h-6" />,
      title: "Environmental Impact",
      description:
        "Plant 100,000 trees and establish 15 sustainable community gardens",
      progress: 65,
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Educational Access",
      description:
        "Provide quality education resources to 10,000 children in remote areas",
      progress: 89,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Our Commitment to Change
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Together, we're building a world where every person has the
              opportunity to thrive
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 bg-gradient-to-br from-green-600 to-emerald-700 p-8 lg:p-12 text-white">
                <div className="flex items-center mb-6">
                  <Target className="w-12 h-12 mr-4" />
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg leading-relaxed mb-6">
                  At <strong>Renukiran Welfare Foundation,</strong> our mission
                  is to <strong>uplift lives and empower communities</strong> by
                  ensuring that every individual—regardless of their
                  socio-economic background—has access to the{" "}
                  <strong>resources, opportunities, and support</strong> needed
                  to live with dignity, purpose, and independence.
                </p>

                <p className="text-md leading-relaxed mb-6">
                  Driven by compassion and rooted in grassroots action, we
                  strive to:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <p className="text-green-100">
                      <strong>1. Empower Through Education and Skills:</strong>{" "}
                      Provide quality education, vocational training, and
                      livelihood opportunities—especially for women and
                      children—to break the cycle of poverty and dependency.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <p className="text-green-100">
                      <strong>2. Promote Health and Hygiene:</strong> Facilitate
                      access to healthcare services, nutrition, and sanitation
                      to build healthier, more resilient communities.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <p className="text-green-100">
                      <strong>3. Champion Women Empowerment:</strong> Foster
                      self-reliance and confidence among women through targeted
                      programs that support leadership, income generation, and
                      equality.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <p className="text-green-100">
                      <strong>4. Support Climate Conscious Living:</strong>{" "}
                      Engage in initiatives that promote environmental
                      responsibility and sustainable practices to protect our
                      planet.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <p className="text-green-100">
                      <strong>5. Inspire Inclusive Change:</strong> Create a
                      collaborative, inclusive environment where communities
                      work together to overcome challenges and build a better
                      future.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 bg-green-50">
                <div className="h-full flex items-center">
                  <div className="w-full">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      Impact by Numbers
                    </h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                        <div className="text-3xl font-bold text-green-600 mb-2">
                          250K+
                        </div>
                        <div className="text-gray-600">Lives Touched</div>
                      </div>
                      <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                          120
                        </div>
                        <div className="text-gray-600">Communities Served</div>
                      </div>
                      <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                        <div className="text-3xl font-bold text-purple-600 mb-2">
                          95%
                        </div>
                        <div className="text-gray-600">
                          Program Success Rate
                        </div>
                      </div>
                      <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                        <div className="text-3xl font-bold text-orange-600 mb-2">
                          8
                        </div>
                        <div className="text-gray-600">Countries Active</div>
                      </div>
                    </div>
                    <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <Handshake className="w-4 h-4 mr-2" />
                        <span>What we Aspire</span>
                      </div>
                      <p className="text-gray-700">
                        Guided by our tagline,
                        <strong>“Kiran Umeed Ki” (A Ray of Hope)</strong>,we are
                        committed to
                        <strong>
                          {" "}
                          spreading hope, nurturing potential, and empowering
                          people to transform their lives with courage and
                          confidence.
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row-reverse">
              <div className="lg:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 lg:p-12 text-white">
                <div className="flex items-center mb-6">
                  <Eye className="w-12 h-12 mr-4" />
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-xl leading-relaxed mb-6">
                  Rooted in the compassionate dream of Renu Ji and brought to
                  life by our founder Avinash Kumar, the vision of
                  <strong> Renukiran Welfare Foundation </strong> is to build a
                  world where
                  <strong>
                    every individual—regardless of background—has access to
                    opportunities that lead to a life of dignity, fulfillment,
                    and self-reliance.
                  </strong>
                </p>
                <p className="text-xl leading-relaxed mb-6">
                  We are committed to{" "}
                  <strong>
                    bridging critical gaps in education, women empowerment,
                    livelihood, health and hygiene, and climate action
                  </strong>{" "}
                  by nurturing talent, fostering inclusivity, and enabling
                  communities to overcome adversity with strength and hope.
                </p>

                <p className="text-xl leading-relaxed mb-6">
                  <strong>
                    {" "}
                    Guided by the values of empathy, resilience, and equality,{" "}
                  </strong>{" "}
                  our mission is to{" "}
                  <strong>
                    inspire and uplift underprivileged individuals and families{" "}
                  </strong>{" "}
                  by providing them with the skills, resources, and confidence
                  to transform their lives. At Renukiran, we believe in turning
                  compassion into action and dreams into reality—for a brighter,
                  more just, and sustainable future for all.
                </p>
                
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 bg-blue-50">
                <div className="h-full flex items-center">
                  <div className="w-full">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      Path to Change
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-green-600 font-bold text-sm">
                            NOW
                          </span>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800">
                            Immediate Relief
                          </h4>
                          <p className="text-gray-600">
                            Providing essential aid and emergency support
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-blue-600 font-bold text-sm">
                            2-5Y
                          </span>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800">
                            Sustainable Programs
                          </h4>
                          <p className="text-gray-600">
                            Building capacity and self-reliance in communities
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-purple-600 font-bold text-sm">
                            10Y+
                          </span>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800">
                            Systemic Change
                          </h4>
                          <p className="text-gray-600">
                            Transforming systems for lasting impact
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
                      <blockquote className="text-gray-700 italic">
                        "At Renukiran, we believe in turning compassion into
                        action and dreams into reality—for a brighter, more
                        just, and sustainable future for all. "
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Strategic Goals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable commitments that guide our efforts toward meaningful
              change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {goals.map((goal, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white mr-6 shadow-lg">
                    {goal.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {goal.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {goal.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center text-sm mb-2">
                        <span className="text-gray-500">
                          Progress Toward Goal
                        </span>
                        <span className="text-green-600 font-semibold">
                          {goal.progress}% Complete
                        </span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-green-500 to-blue-600 h-3 rounded-full transition-all duration-700 ease-out"
                          style={{ width: `${goal.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories Teaser */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Stories of Hope
            </h2>
            <p className="text-xl text-gray-600">
              Real impact in the lives of real people
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-xl p-6">
              <blockquote className="text-gray-700 italic mb-4">
                "The education program changed everything for my family. Now my
                children have hope for a brighter future."
              </blockquote>
              <cite className="text-green-700 font-semibold">
                - Maria, Program Beneficiary
              </cite>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <blockquote className="text-gray-700 italic mb-4">
                "Our community garden not only feeds families but brings us
                together as neighbors and friends."
              </blockquote>
              <cite className="text-blue-700 font-semibold">
                - James, Community Leader
              </cite>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <blockquote className="text-gray-700 italic mb-4">
                "The skills training gave me the confidence to start my own
                business and support my village."
              </blockquote>
              <cite className="text-purple-700 font-semibold">
                - Aisha, Entrepreneur
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-600 to-blue-700 rounded-2xl shadow-xl p-8 lg:p-12 text-center text-white">
            <Heart className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">
              Join Our Mission of Hope
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Every contribution, big or small, creates ripples of positive
              change in communities worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                Donate Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200">
                Volunteer With Us
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
