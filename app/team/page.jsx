'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Linkedin, Info, Users, Heart, ArrowRight } from 'lucide-react'
import TeamCard from '@/components/TeamCard'

// Main Team Component
function Team() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    document.title = "Renukiran-Team"
    setIsVisible(true)
  }, [])

  const teamMembers = [
    // {
    //   name: "Raj Kushwaha",
    //   designation: "Event Coordinator",
    //   pic: "https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2FrajProfile.webp?alt=media&token=465f3063-e5b5-4d7f-848f-141debdb1165&_gl=1*tw5xvh*_ga*NTkyODU4MjY0LjE2OTY1Nzc5MzE.*_ga_CW55HF8NVT*MTY5ODM5NTEwMi45LjEuMTY5ODM5NzY0OC41My4wLjA.",
    //   desc: "I'm Raj, pursuing B. A Hons in French from Delhi University, who is engage in the pursuit of knowledge & Skills to enhance my journey as a student, researcher, educator and coordination of events/ Campaigner. I'm volunteering with Renukiran Welfare Foundation for to be a activator for positive change towards social causes. I believe in, channeling my skills and knowledge insight into practical Solutions."
    // },
    {
      name: "Sandhya Kumari",
      designation: "Trainer - Skill Development",
      pic: "https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2FsandhyaProfile.webp?alt=media&token=cc6c8c91-6923-44d0-9398-35364200e3ff&_gl=1*o8n2bm*_ga*NTkyODU4MjY0LjE2OTY1Nzc5MzE.*_ga_CW55HF8NVT*MTY5ODM5NTEwMi45LjEuMTY5ODM5NzgwMy4zMi4wLjA.",
      desc: "Hello, I'm Sandhya! I joined Renukiran Welfare Foundation on September 3, 2023, and the journey since then has been truly rewarding. Being part of this mission has not only deepened my passion for social work but also helped me grow personally and professionally. I’ve developed strong public speaking skills and learned how to connect with people from different walks of life. One of the most fulfilling aspects of my work is the opportunity to share my knowledge with others while continuing to learn myself. I believe in the power of teaching as a tool for mutual growth. My passion for stitching aligns perfectly with Renukiran’s goal of empowering women through skill development. I find joy in helping others gain the confidence and tools they need to build a better future. This experience has been both inspiring and empowering, and I’m excited to continue making a difference through my journey with Renukiran."
    },
    {
      name: "Deepak",
      designation: "Event Coordinator",
      pic: "https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2FDeeepakProfile.webp?alt=media&token=303a89b0-fa34-4ec1-9fbc-bbac6788737f&_gl=1*29wi69*_ga*NTkyODU4MjY0LjE2OTY1Nzc5MzE.*_ga_CW55HF8NVT*MTY5ODM5NTEwMi45LjEuMTY5ODM5NzY4Mi4xOS4wLjA.",
      linkedin: "https://www.linkedin.com/in/deepak-1688b8287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      desc: " I am currently working with Renukiran Welfare Foundation, an organization dedicated to uplifting underprivileged communities through education and welfare initiatives. I joined the foundation in September 2024 and have been contributing in multiple roles. As a IT Trainer, I am helping to equip children with essential digital skills, enabling them to confidently navigate the modern world. In addition, I am supporting the organization’s backend operations by managing accounting and financial tasks, ensuring smooth and transparent functioningMy goal is to see Renukiran Welfare Foundation grow continuously through my efforts — both in the classroom and in administrative support. By strengthening both the educational impact and the organizational structure, I aim to contribute meaningfully to the foundation’s mission of empowering children and expanding its reach"
    },
    // {
    //   name: "Akshita Chabra",
    //   designation: "Teacher & Event Coordination",
    //   pic: "https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2FAkshita.webp?alt=media&token=12e8a185-413b-4cf1-9558-fc5e681addc0&_gl=1*bykhx1*_ga*NTkyODU4MjY0LjE2OTY1Nzc5MzE.*_ga_CW55HF8NVT*MTY5ODM5NTEwMi45LjEuMTY5ODM5ODA0OS40Ni4wLjA.",
    //   desc: "My Name is Akshita Chhabra. I have been a part of this NGO from the past 4 years. I have done events for students in school , in the slum area teach them how to speak and to grow in their life. Plan the activity for them done fun activities, mind games , ques give gifts done events on Diwali, x-mas , Independence day many more. I am glad to be a part of Renukiran Foundation. I love to spend time with kids and help them in their life."
    // },
    // {
    //   name: "Shrey Gupta",
    //   designation: "Executive Administration & Billings",
    //   pic: "https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2FshreyProfile.webp?alt=media&token=2f1985c0-5f51-4c1b-b1fa-42ae9ab6a269&_gl=1*t8xrr5*_ga*NTkyODU4MjY0LjE2OTY1Nzc5MzE.*_ga_CW55HF8NVT*MTY5ODM5NTEwMi45LjEuMTY5ODM5NzgzNy42MC4wLjA.",
    //   linkedin: "https://www.linkedin.com/in/shrey-kumar-655763296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    //   desc: "My name is Shrey. I am born and brought up in Delhi. At present, I'm pursuing bachelors degree in B.A. Programme from Delhi University. With Renukiran I am engaged and responsible for administrative tasks.I have been part of several Event so far Performed by Renukiran Welfare Foundation such as School Transformation,Science Museum and Book of Joy."
    // },
    {
      name: "Bibhav Kumar",
      designation: "Executive Corporate Social Responsibility",
      pic: "https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2FbibhavProfile.webp?alt=media&token=e108abd1-ba0b-491f-9bef-c9aca2cdf1b8&_gl=1*rh6zb3*_ga*NTkyODU4MjY0LjE2OTY1Nzc5MzE.*_ga_CW55HF8NVT*MTY5ODM5NTEwMi45LjEuMTY5ODM5Nzc0NS4zMC4wLjA.",
      linkedin: "https://www.linkedin.com/in/bibhav-kumar-b539b5233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      desc: "Hello, I’m Vaibhav, and I serve as the Centre Coordinator at Renukiran Welfare Foundation. In my role, I act as a vital link between the headquarters and the training centre, ensuring smooth communication and effective coordination. I am responsible for managing both the trainers and the individuals who join our programs, making sure everything runs efficiently and harmoniously. The organization’s vision and mission truly resonate with me, and I feel proud to be a part of a team that is working toward meaningful social change. What I enjoy most about working here is the continuous learning—each day brings new challenges, experiences, and opportunities for personal and professional growth. Being part of such a positive and purpose-driven environment has been incredibly fulfilling. It’s inspiring to contribute to a cause that empowers communities and transforms lives through education, skill development, and support. I look forward to continuing this journey of impact and growth."
    },
      {
      name: "Raksha Saini",
      designation: "Community Mobilizer and Content creator",
      pic: "",
      linkedin: "https://www.linkedin.com/in/raksha-saini-76740022b/",
      desc: "Hello readers! I’m Raksha, and I began my journey with Renukiran Welfare Foundation on December 9, 2024, as a Community Mobilizer. While that was my initial role, I’ve had the opportunity to explore various other areas as well, including managing social media, preparing reports, and participating in events. Stepping beyond my job description has been an incredible learning experience, helping me grow both personally and professionally. What stands out most to me is the supportive and family-like environment here. This is a place where ideas are welcomed, and open discussions are encouraged, which makes working here even more fulfilling. Every day brings a new opportunity to learn something valuable, and being part of a mission-driven organization that is committed to positive change makes the journey even more meaningful. I’m truly grateful to be part of a team that feels more like a family and shares a common goal of uplifting others."
    },
      {
      name: "Chitra Sachan",
      designation: "Fundraising Manager",
      pic: "",
      linkedin: "https://www.linkedin.com/in/chitra-sachan-079802161",
      desc: "As Fundraising Manager at Renukiran Welfare Foundation, I've witnessed the transformative power of compassion and collaboration. With a rich background in the social sector, having worked with renowned organizations like Smile Foundation, CARE India, UNICEF, World Vision India, CRY, and Navsrishti, I confidently endorse the impact of our collective efforts. Every contribution, big or small, brings us closer to a world where every individual has the opportunity to thrive. Join us in this journey of making a difference, and together, let's create a brighter, more compassionate world for all."
    },
        {
      name: "Kumkum",
      designation: "Parlor Trainer",
      pic: "",
      // linkedin: "https://www.linkedin.com/in/bibhav-kumar-b539b5233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      desc: "I recently began my journey with Renukiran Welfare Foundation as a parlor trainer, and it has already been a wonderful experience. From the very beginning, I never felt like a newcomer—everyone here has been incredibly welcoming and supportive. The positive and collaborative environment makes it easy to feel at home and motivated every day. What truly inspires me is the organization’s vision and mission of creating real change in people’s lives. Being part of an initiative that empowers individuals, especially women, through skill development gives me a deep sense of purpose. It’s more than just a job; it’s a chance to contribute to something meaningful. I’m proud to be involved in a cause that uplifts communities and opens new doors for so many. Working here not only helps me grow professionally but also fills me with pride to be part of a mission that is transforming lives for the better."
    },
            {
      name: "Shivan Kashyap",
      designation: "Soft Skills and IT Trainer",
      pic: "",
      // linkedin: "https://www.linkedin.com/in/bibhav-kumar-b539b5233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      desc: "This is Shivan Kashyap here! I’m currently working as a Soft Skills and IT Trainer with the Renukiran Welfare Foundation.My journey stems from a simple yet powerful desire — to become the person I once needed. And Renukiran Welfare Foundation gave me the perfect platform to fulfill that purpose.I joined the foundation in February 2025, and ever since, I’ve remained inspired and enthusiastic about teaching and learning alongside our amazing students.What truly draws me to this organization is its work style and location. Operating in a rural setting, Renukiran is not just serving the community — it’s empowering and transforming it.Personally, I resonate deeply with the foundation’s vision. We both believe that true success lies in helping students discover their potential, develop emotional intelligence, and thrive in both their personal and professional lives.When that happens, we know we’re making a real difference."
    },

    // {
    //   name: "Rajnikant",
    //   designation: "Web Developer & Event Volunteer",
    //   pic: "https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2Frajni%20about.webp?alt=media&token=47d543d2-61d4-42fb-ad03-dde3aa37c458&_gl=1*8m215w*_ga*NTkyODU4MjY0LjE2OTY1Nzc5MzE.*_ga_CW55HF8NVT*MTY5ODM5NTEwMi45LjEuMTY5ODM5ODEwMC42MC4wLjA.",
    //   desc: "I'm Rajnikant, your web developer hailing from the bustling streets of Delhi, India. I'm currently in my second year at Maharishi Dayanand University, passionately immersing myself in the world of web development. In parallel, I'm fueling my skills as a web developer during my internship at Renukiran Welfare Foundation. Much like the legendary Rajnikant's invincible presence, I bring unwavering dedication to every project I undertake. I believe in the power of teamwork and the magic of collaboration. Sharing knowledge and working collectively are values I hold dear."
    // }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className={`relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full">
                <Users className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Our Resilient <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Renukiran Team</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Renukiran Welfare Foundation values its employees, nourishing their internal strength and treating them with respect by actively listening to their ideas and offering support in every way.
            </p>
          </div>
        </div>
      </div>

      {/* Team Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="p-3 bg-blue-600 rounded-full">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Compassion</h3>
                <p className="text-gray-600">Every team member brings genuine care and empathy to their work.</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="p-3 bg-indigo-600 rounded-full">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Collaboration</h3>
                <p className="text-gray-600">Together we achieve more than we ever could alone.</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="p-3 bg-purple-600 rounded-full">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Impact</h3>
                <p className="text-gray-600">Every action we take creates meaningful change in communities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="h-full">
                <TeamCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Our Team CTA */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join our passionate team of changemakers and help us transform lives across India. 
              Together, we can create lasting impact in communities that need it most.
            </p>
            <a href="/careers">
              <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                Join Our Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
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
  )
}

export default Team
