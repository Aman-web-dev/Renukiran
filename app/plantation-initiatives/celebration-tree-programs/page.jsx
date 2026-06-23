"use client";

import React, { useEffect, useState } from "react";
import { Gift, Heart, TreePine, ArrowRight, CheckCircle, Sparkles, Leaf } from "lucide-react";

function CelebrationTreeProgramsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "Celebration Tree Programs - Renukiran";
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-pink-50">
      <div className="relative overflow-hidden bg-gradient-to-r from-pink-700 via-rose-600 to-red-500">
        <div className="relative container mx-auto px-6 py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <Leaf className="w-12 h-12 text-pink-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Celebration Tree Programs</h1>
          </div>
          <p className="text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed mb-4 font-semibold">Transform Your Special Moments into a Living Legacy</p>
          <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
            At Renukiran Welfare Foundation, we encourage individuals to celebrate life's meaningful occasions in a way that benefits both people and the planet. Whether it's a birthday, anniversary, wedding, graduation, new beginning, or a tribute to a loved one, planting trees offers a unique and lasting way to mark these milestones.
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Each tree represents more than a celebration—it symbolizes hope, responsibility, and a commitment to a greener future. Through our plantation initiatives, individuals can contribute directly to environmental conservation while creating memories that continue to grow for generations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              Memorial Tree Plantation, Celebration Trees, Birthday Tree Plantation, Anniversary Tree Plantation etc.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Plant Trees for Personal Occasions?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-rose-600 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {["Celebrate important life events with a meaningful environmental contribution.", "Honor and remember loved ones through dedicated tree plantations.", "Leave behind a positive legacy that benefits future generations.", "Support biodiversity and ecological restoration efforts.", "Reduce your environmental footprint through climate-positive action.", "Encourage sustainable values within families and communities."].map((reason, index) => (<div key={index} className="flex items-start space-x-3 bg-white rounded-xl p-4 shadow-md"><CheckCircle className="w-6 h-6 text-pink-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700 font-medium">{reason}</span></div>))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Programs</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-rose-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{ title: "Memorial Tree Plantation", desc: "Honor and remember loved ones through dedicated tree plantations.", icon: <Heart className="w-8 h-8" />, color: "from-pink-500 to-rose-600" }, { title: "Celebration Trees", desc: "Celebrate life's meaningful occasions in a way that benefits both people and the planet.", icon: <Gift className="w-8 h-8" />, color: "from-red-500 to-pink-600" }, { title: "Birthday Tree Plantation", desc: "Plant trees to celebrate birthdays and create lasting environmental legacy.", icon: <TreePine className="w-8 h-8" />, color: "from-green-500 to-emerald-600" }, { title: "Anniversary Tree Plantation", desc: "Mark milestones with tree plantings that grow stronger with each passing year.", icon: <Sparkles className="w-8 h-8" />, color: "from-purple-500 to-violet-600" }].map((program, index) => (<div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 p-6 border-t-4 border-pink-500"><div className={`bg-gradient-to-r ${program.color} p-4 rounded-xl text-white mb-4 inline-block`}>{program.icon}</div><h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3><p className="text-gray-600 leading-relaxed">{program.desc}</p></div>))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <TreePine className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Every Tree Tells a Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">Our plantation programs ensure that every sapling is planted responsibly and cared for with the goal of long-term growth. Participants become part of a larger movement of individuals who are choosing purpose-driven celebrations over temporary gestures.</p>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Small Actions, Lifelong Impact</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">A single tree planted with intention can create benefits far beyond the moment it is dedicated. Together, these individual efforts contribute to cleaner air, healthier ecosystems, increased green cover, and stronger communities.</p>
            <p className="text-xl text-green-700 font-bold mb-4">Celebrate Meaningfully. Plant with Purpose. Grow a Greener Tomorrow.</p>
            <p className="text-lg text-gray-700 leading-relaxed">By choosing to plant a tree, you are not only commemorating a special occasion—you are investing in a healthier, more sustainable future for all.</p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <Gift className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Plant Your Celebration Tree</h2>
            <p className="text-xl text-pink-100 mb-8">Make your special occasion meaningful by creating a lasting green legacy.</p>
            <button className="bg-white text-pink-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-pink-50 transition-all duration-300 shadow-xl flex items-center mx-auto">Gift a Tree <ArrowRight className="w-5 h-5 ml-2" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CelebrationTreeProgramsPage;
