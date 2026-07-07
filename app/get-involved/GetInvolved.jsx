import React from 'react'
import Link from 'next/link'

const GetInvolved = () => {
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

      <div className="mb-10 rounded-3xl bg-gradient-to-r from-blue-700 to-green-700 p-8 text-white shadow-xl">
        <h2 className="text-3xl font-semibold mb-3">Join the Movement</h2>
        <p className="max-w-3xl text-blue-50">
          Your support can help expand education, health outreach, women empowerment, and environmental action across underserved communities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {movementOptions.map((item) => (
          <div key={item.title} className="bg-gray-100 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <Link href={item.href} className={`inline-block ${item.color} text-white px-4 py-2 rounded-xl`}>
              {item.button}
            </Link>
          </div>
        ))}
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