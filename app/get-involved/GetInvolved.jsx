"use client";
import React, { useState } from 'react'
import Link from 'next/link'

const GetInvolved = () => {
  const [activeTab, setActiveTab] = useState('donate');

  // "Join the Movement" sub-menu options (carried over from existing tabs)
  const movementOptions = [
    {
      title: 'Donate Now',
      description: 'Support education, health, women-led livelihoods, and community restoration through a direct contribution.',
      href: '/general-donations',
      button: 'Donate Now',
      color: 'bg-blue-600',
    },
    {
      title: 'Contact Us',
      description: 'Share your ideas, coordinate a local action, or discuss a partnership that fits your community.',
      href: '/contact',
      button: 'Get in Touch',
      color: 'bg-green-600',
    },
    {
      title: 'Corporate Partnership',
      description: 'Collaborate with us on CSR and social impact programs that strengthen communities and institutions.',
      href: '/get-involved/corporate-partnership',
      button: 'Partner with Us',
      color: 'bg-purple-600',
    },
    {
      title: 'Volunteer & Internship',
      description: 'Give your time, expertise, or energy to support field work, outreach, and community programs.',
      href: '/get-involved/volunteering',
      button: 'Apply Now',
      color: 'bg-red-500',
    },
  ];

  // "Start a Campaign" tab content
  const campaignInfo = {
    title: 'Start Your Own Campaign',
    description:
      'Do you have a cause close to your heart? Start your own fundraising campaign to support Renukiran programs of your choice — be it education, health, women empowerment, or environmental restoration.',
    benefits: [
      'Personalized fundraising page with your story',
      'Real-time dashboard to track your supporters',
      'Tax exemption certificates for donors (80G)',
      'Social media toolkits and ready-to-share creatives',
      'Dedicated support from the Renukiran team',
    ],
    cta: 'Email Us to Start a Campaign',
    mailto: 'mailto:avinashvmcs@gmail.com?subject=Start%20a%20Campaign%20Inquiry',
  };

  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Be the Change. Join the Movement.
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          From individuals and families to institutions and communities, everyone has a role in creating lasting change.
        </p>
      </div>

      {/* Join the Movement section */}
      <div className="mb-10 rounded-3xl bg-gradient-to-r from-blue-700 to-green-700 p-8 text-white shadow-xl">
        <h2 className="text-3xl font-semibold mb-3">Join the Movement</h2>
        <p className="max-w-3xl text-blue-50">
          Your support can help expand education, health outreach, women empowerment, and environmental action across underserved communities.
        </p>
      </div>

      {/* Tabs: Donate Now / Start a Campaign */}
      <div className="mb-10">
        <div className="flex flex-wrap gap-3 border-b border-gray-200 mb-6" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'donate'}
            onClick={() => setActiveTab('donate')}
            className={`px-6 py-3 text-base font-semibold rounded-t-lg transition-colors ${
              activeTab === 'donate'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Donate Now
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'campaign'}
            onClick={() => setActiveTab('campaign')}
            className={`px-6 py-3 text-base font-semibold rounded-t-lg transition-colors ${
              activeTab === 'campaign'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Start a Campaign
          </button>
        </div>

        {activeTab === 'donate' && (
          <div role="tabpanel" className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
            {movementOptions.map((item) => (
              <div key={item.title} className="bg-gray-100 p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link
                  href={item.href}
                  className={`inline-block ${item.color} text-white px-4 py-2 rounded-xl`}
                >
                  {item.button}
                </Link>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'campaign' && (
          <div role="tabpanel" className="mt-2">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 border border-blue-100 p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {campaignInfo.title}
              </h3>
              <p className="text-gray-700 mb-6 max-w-3xl">
                {campaignInfo.description}
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                What you get when you start a campaign:
              </h4>
              <ul className="space-y-2 mb-6">
                {campaignInfo.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <a
                href={campaignInfo.mailto}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                {campaignInfo.cta}
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="text-center mt-16">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Ready to Make a Difference?
        </h3>
        <p className="text-gray-600 mb-6">
          Contact us at{' '}
          <a href="mailto:avinashvmcs@gmail.com" className="text-blue-600 font-medium">
            avinashvmcs@gmail.com
          </a>{' '}
          or explore more at{' '}
          <a href="https://www.renukiran.org" className="text-blue-600 font-medium" target="_blank" rel="noreferrer">
            www.renukiran.org
          </a>
        </p>
      </div>
    </section>
  );
}

export default GetInvolved
