import React from 'react'
import Link from 'next/link'

const GetInvolved = () => {
  return (
    <section class="bg-white py-12 px-6 md:px-20">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
          Be the Change. Join the Movement.
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          From individuals to institutions, everyone has a role in building
          brighter futures. Explore how you can get involved with RenuKiran
          Welfare Foundation.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h2 class="text-2xl font-semibold mb-2">Individual Support</h2>
          <p class="text-gray-600 mb-4">
            Every individual matters. Every rupee counts. Your donations help
            fund education, healthcare, and empowerment programs.
          </p>
          <Link
            href="/general-donations"
            class="inline-block bg-blue-600 text-white px-4 py-2 rounded-xl"
          >
            Donate Now
          </Link>
        </div>

        <div class="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h2 class="text-2xl font-semibold mb-2">Be a Fundraiser</h2>
          <p class="text-gray-600 mb-4">
            Turn your cause into a community. Host events or online campaigns to
            support those in need.
          </p>
          <Link
            href="/fundraise"
            class="inline-block bg-green-600 text-white px-4 py-2 rounded-xl"
          >
            Start a Campaign
          </Link>
        </div>

        <div class="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h2 class="text-2xl font-semibold mb-2">Corporate Partnership</h2>
          <p class="text-gray-600 mb-4">
            Collaborate with us through impactful CSR initiatives in education,
            health, and skill development.
          </p>
          <Link
            href="/csr"
            class="inline-block bg-purple-600 text-white px-4 py-2 rounded-xl"
          >
            Partner with Us
          </Link>
        </div>

        <div class="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h2 class="text-2xl font-semibold mb-2">School Partnership</h2>
          <p class="text-gray-600 mb-4">
            Empower your students to lead with compassion. Support rural
            education and drive positive change.
          </p>
          <Link
            href="/school-partnership"
            class="inline-block bg-yellow-500 text-white px-4 py-2 rounded-xl"
          >
            Partner with Schools
          </Link>
        </div>

        <div class="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h2 class="text-2xl font-semibold mb-2">Volunteer & Internship</h2>
          <p class="text-gray-600 mb-4">
            Give your time, gain purpose. Join us in the field or remotely to
            support grassroots transformation.
          </p>
          <Link
            href="/volunteer"
            class="inline-block bg-red-500 text-white px-4 py-2 rounded-xl"
          >
            Apply Now
          </Link>
        </div>

        <div class="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h2 class="text-2xl font-semibold mb-2">Work With Us</h2>
          <p class="text-gray-600 mb-4">
            Make impact your profession. Explore full-time opportunities to help
            lead social change.
          </p>
          <Link
            href="/careers"
            class="inline-block bg-indigo-600 text-white px-4 py-2 rounded-xl"
          >
            Join the Team
          </Link>
        </div>
      </div>

      <div class="text-center mt-16">
        <h3 class="text-2xl font-semibold text-gray-700 mb-4">
          Ready to Make a Difference?
        </h3>
        <p class="text-gray-600 mb-6">
          Contact us at{" "}
          <a
            href="mailto:avinashvmcs@gmail.com"
            class="text-blue-600 font-medium"
          >
            avinashvmcs@gmail.com
          </a>{" "}
          or explore more at{" "}
          <a
            href="https://www.renukiran.org"
            class="text-blue-600 font-medium"
            target="_blank"
          >
            www.renukiran.org
          </a>
        </p>
        <Link
          href="/get-involved"
          class="inline-block bg-black text-white px-6 py-3 rounded-full"
        >
          Explore All Opportunities
        </Link>
      </div>
    </section>
  );
}

export default GetInvolved