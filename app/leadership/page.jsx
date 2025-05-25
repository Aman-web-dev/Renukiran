'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Quote, Heart, Users, Award } from 'lucide-react'

function Founders() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    document.title = "Renukiran-Founders"
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className={`relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              {/* <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mr-4">Founders</h1> */}
              {/* <span className="bg-blue-100 text-blue-800 text-2xl font-semibold px-4 py-2 rounded-lg">RWF</span> */}
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Learn About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Our Change Makers</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionaries who transformed a mother's dream into a beacon of hope for thousands across India
            </p>
          </div>
        </div>
      </div>

      {/* Our Team Philosophy */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Leadership</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-8"></div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-16">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 text-center max-w-5xl mx-auto">
              At <strong>Renukiran Welfare Foundation</strong>, our strength lies in our people — a passionate and dedicated team of individuals who bring compassion, commitment, and integrity to everything they do. From grassroots field workers to strategic leaders, volunteers to trainers, each member of our foundation plays a vital role in driving meaningful change.
            </p>
          </div>
        </div>
      </div>

      {/* Founder Profiles */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Avinash Kumar */}
          <div className="mb-20">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="p-8 md:p-12">
                  <div className="mb-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
                      Avinash Kumar
                    </h3>
                    <p className="text-xl text-gray-600 font-semibold">Founder & Director</p>
                    <div className="flex items-center mt-4">
                      <Award className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-sm text-gray-500">11+ Years Experience</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6 text-gray-700">
                    <p className="text-lg leading-relaxed">
                      Avinash Kumar, the Founder & Director of Renukiran Welfare Foundation hails from Jharkhand, commonly known as the 'Land of Forests'. He holds over 11 years of professional work experience with Civil Society Organizations and MNCs based in India.
                    </p>
                    <p className="text-lg leading-relaxed">
                      With his ingrained leadership, communication and attention to detailed managerial skills he started the journey of Renukiran. Today, he is successfully driving the organization's vision ahead. Apart from looking all operations, Mr. Avinash directly handles multiple verticals of our work, like accounts department & volunteer body.
                    </p>
                    <p className="text-lg leading-relaxed">
                      He is a compassionate soul, who believes in exploring ideas through creativity and new ways towards helping more & more underprivileged children in transforming their lives by bringing collective efforts.
                    </p>
                  </div>
                </div>
                
                <div className="p-8 md:p-12 flex items-center">
                  <div className="w-full">
                    <Image 
                      width={700} 
                      height={600} 
                      src='https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2Favinash_sir_pfp.JPG?alt=media&token=9b443e2b-0b7b-4e87-a2f6-21272ccc8278&_gl=1*1amastk*_ga*Njc4NjI1OTEyLjE2OTI4NjkyOTU.*_ga_CW55HF8NVT*MTY5NzAxODEyNi4yNS4xLjE2OTcwMTk1MTEuMjYuMC4w' 
                      loading='lazy' 
                      className='rounded-2xl w-full shadow-lg' 
                      alt='Avinash Kumar'
                    />
                  </div>
                </div>
              </div>
              
              {/* Avinash's Personal Message */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 md:p-12">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-start mb-6">
                    <Quote className="w-8 h-8 text-blue-200 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Personal Message</h4>
                      <p className="text-blue-100 text-lg leading-relaxed mb-6">
                        Renukiran Welfare Foundation is more than just an organization — it is a dream, a vision born from the shared hopes of my mother and me. We both believed deeply in creating a society where no one has to endure the hardships that we once faced. With this purpose in my heart, I set out to build something that could spark real change in the lives of others.
                      </p>
                      <p className="text-blue-100 text-lg leading-relaxed mb-6">
                        This journey has never been easy. Every step forward came with its own challenges, but it was the dream of making a difference that kept me going. Along the way, I have had the privilege of meeting many incredible people, each of whom has taught me something invaluable and helped shape this journey in their own unique way.
                      </p>
                      <p className="text-blue-100 text-lg leading-relaxed">
                        I am proud and grateful to be surrounded by a team of passionate individuals who carry the same fire and commitment for change. They are not just colleagues; they are dreamers, changemakers, and the heart of Renukiran Welfare Foundation. Their enthusiasm, sincerity, and belief in building a better world inspire me every day. Together, we move forward — one step, one life, one change at a time — towards the society we dream of creating.
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-blue-400 pt-6">
                    <p className="text-white font-bold text-lg italic">
                      "Every day, I walk this path, running an NGO that my mother dreamt of. Her vision is my guiding light, and her love is the fuel that keeps me going. In her honor, we strive to make the world a better place, one act of kindness at a time."
                    </p>
                    <p className="text-blue-200 text-right mt-2">~ Avinash Kumar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pooja Gupta */}
          <div className="mb-20">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="p-8 md:p-12 order-2 md:order-1">
                  <div className="mb-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
                      Pooja Gupta
                    </h3>
                    <p className="text-xl text-gray-600 font-semibold">Co-Founder & Director</p>
                    <div className="flex items-center mt-4">
                      <Award className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-sm text-gray-500">11+ Years Experience | PGDHRM</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6 text-gray-700">
                    <p className="text-lg leading-relaxed">
                      Pooja Gupta, the Co-Founder and Director of Renukiran is born and brought up in the state of Uttar Pradesh, Agra. She holds work experience of above 11 years and currently associated with a reputed MNC in Bangalore, Karnataka as a Senior Analyst in Portuguese Language.
                    </p>
                    <p className="text-lg leading-relaxed">
                      She is a diploma holder in PGDHRM (Post graduation diploma in Human Resource Management) from Symbiosis Centre of Distance Learning (SCDL) in Pune. At Renukiran Welfare Foundation Pooja is actively involved in managing volunteer's engagement with team & organizing events towards empowering women.
                    </p>
                    <p className="text-lg leading-relaxed">
                      She is involved in operational activities involving Data management and plays a crucial role in driving the organization's mission forward.
                    </p>
                  </div>
                </div>
                
                <div className="p-8 md:p-12 flex items-center order-1 md:order-2">
                  <div className="w-full">
                    <Image 
                      width={800} 
                      height={600} 
                      src='https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2FDriector%20(1).webp?alt=media&token=87ed5971-4652-422d-8a45-aeedf4ae2fd5&_gl=1*l79mt9*_ga*NTkyODU4MjY0LjE2OTY1Nzc5MzE.*_ga_CW55HF8NVT*MTY5ODM5NTEwMi45LjEuMTY5ODM5NjI4NC40OS4wLjA.' 
                      loading='lazy' 
                      className='rounded-2xl w-full shadow-lg' 
                      alt='Pooja Gupta'
                    />
                  </div>
                </div>
              </div>
              
              {/* Pooja's Personal Message */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 md:p-12">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-start mb-6">
                    <Quote className="w-8 h-8 text-indigo-200 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Personal Message</h4>
                      <p className="text-indigo-100 text-lg leading-relaxed mb-6">
                        Being a part of the journey of building Renukiran Welfare Foundation has been one of the most fulfilling experiences of my life. This organization was born from a deeply personal space — a dream shared by our founder and their mother, built on the hope that no one else would have to endure the hardships they once faced. I feel honored to have been part of turning that dream into reality.
                      </p>
                      <p className="text-indigo-100 text-lg leading-relaxed mb-6">
                        Renukiran Welfare Foundation is not just an organization; it is a movement towards real, lasting change. It stands for compassion, empowerment, and opportunity for those who need it most. Watching it grow from a heartfelt idea into a platform that touches countless lives has been both humbling and inspiring.
                      </p>
                      <p className="text-indigo-100 text-lg leading-relaxed">
                        I am so proud to be part of this incredible journey — to witness firsthand the spirit, passion, and dedication of a team that believes in creating a better world. Every day, I see individuals working not for recognition, but for a cause greater than themselves. Together, we are not just changing lives; we are building a future filled with hope, dignity, and endless possibilities.
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-indigo-400 pt-6">
                    <p className="text-white font-bold text-lg italic">
                      "Passion drives us, purpose guides us. Together, we make a world of difference"
                    </p>
                    <p className="text-indigo-200 text-right mt-2">~ Pooja Gupta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Section */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
            <div className="flex justify-center mb-6">
              <Heart className="w-12 h-12" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Legacy of Love and Hope</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Together, our founders continue to honor Renu Ji's memory by transforming dreams into reality, 
              one life at a time. Their shared vision has become a beacon of hope for thousands across India.
            </p>
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
  )
}

export default Founders