"use client";

import React, { useState } from "react";
import {
  Award,
  FileText,
  Calendar,
  ChevronRight,
  Users,
  Heart,
  Globe,
} from "lucide-react";

import Image from "next/image";

const MediaCentre = () => {
  const [activeSection, setActiveSection] = useState("awards");

  const awards = [
    {
      id: 1,
      title: "CSR Impact National Award",
      subtitle: "Most Trusted NGO of the Year 2024",
      description:
        "We are proud to share that Renukiran Welfare Foundation has been honored with the CSR Impact National Award for Most Trusted NGO of the Year 2024 at the prestigious National CSR Connect Summit. This recognition was awarded to us in acknowledgment of our impactful dedication and innovative approach to driving positive change and empowering society.",
      year: "2024",
      category: "National Recognition",
      img: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/awards%2FCSR_IMACT_AWARD.jpg?alt=media&token=a5592180-b168-45ec-8ce0-577be385b120",
    },
    {
      id: 2,
      title: "Real Superheroes - Corona Warrior",
      subtitle: "Recognition from FSIA",
      description:
        "We are delighted to share that our efforts were recognized by FSIA with the prestigious 'Real Superheroes – Corona Warrior' certificate. During the unprecedented challenges of the COVID-19 pandemic in 2020, we stood strong as silent warriors, working tirelessly behind the scenes to spread positivity, hope, and encouragement.",
      year: "2020",
      category: "Pandemic Response",
      img: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/awards%2Faward-3.jpg?alt=media&token=7afc29f9-5cb0-410f-8ac5-b481eb939143",
    },
    {
      id: 3,
      title: "Silver Certified Partner",
      subtitle: "NIIT Foundation Accreditation",
      description:
        "Through the NGO Accreditation Program, we were proudly recognized as a Silver Certified Partner by the NIIT Foundation for the period of 2023 to 2024. This certification reflects our commitment to excellence, transparency, and impactful community service.",
      year: "2023-2024",
      category: "Partnership Excellence",
      img: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/awards%2Fsilver_CERTIFICATE_NIIT.jpg?alt=media&token=96c61026-6c4a-4717-9967-ba5e44ae7aa4",
    },
    {
      id: 4,
      title: "ISO 9001:2015 Certification",
      subtitle: "Quality Management System",
      description:
        "We are proud to hold an ISO 9001:2015 certification for our Quality Management System. Our processes have been independently assessed and found to be in full conformity with the international standards of quality management. This certification covers our work in the fields of education, digital literacy, and financial literacy.",
      year: "2023",
      category: "Quality Standards",
      img: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/awards%2FISO%20CERTIFICATE.jpg?alt=media&token=66a04fab-64ad-474f-9463-0a9a17a81bb6",
    },
    {
      id: 5,
      title: "Leadership Icon Award",
      subtitle: "Brand Opus Recognition",
      description:
        "We are honored to receive the Leadership Icon Award from Brand Opus for our dedicated social service efforts in supporting underprivileged children. This recognition, presented in Bangalore, highlights our ongoing commitment to creating a brighter future for children in need through education, care, and empowerment.",
      year: "2024",
      category: "Leadership Excellence",
      img: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/awards%2Faward-4.jpg?alt=media&token=d11dffe2-38c3-4a74-af0f-b1139d4085ac",
    },
  ];

  const pressReleases = [
    {
      id: 1,
      title: "Renukiran Welfare Foundation Launches New Education Initiative",
      date: "March 15, 2024",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      category: "Education",
    },
    {
      id: 2,
      title: "Partnership Announcement with Local Schools",
      date: "February 28, 2024",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      category: "Partnership",
    },
    {
      id: 3,
      title: "Annual Impact Report 2023 Released",
      date: "January 20, 2024",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      category: "Annual Report",
    },
  ];

  const workshops = [
    {
      id: 1,
      title: "Digital Literacy Workshop for Rural Communities",
      date: "April 12, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Community Center, Village Sundarpur",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "Upcoming",
    },
    {
      id: 2,
      title: "Financial Literacy Training Program",
      date: "March 25, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Regional Training Center",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "Completed",
    },
    {
      id: 3,
      title: "Women Empowerment Summit 2024",
      date: "May 8, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "City Convention Hall",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "Upcoming",
    },
  ];

  const SectionButton = ({ id, icon: Icon, label, count }) => (
    <button
      onClick={() => setActiveSection(id)}
      className={`flex items-center justify-between w-full p-4 rounded-lg transition-all duration-300 ${
        activeSection === id
          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
          : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
      }`}
    >
      <div className="flex items-center space-x-3">
        <Icon className="h-5 w-5" />
        <span className="font-medium">{label}</span>
      </div>
      <div className="flex items-center space-x-2">
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            activeSection === id ? "bg-white/20" : "bg-gray-100"
          }`}
        >
          {count}
        </span>
        <ChevronRight className="h-4 w-4" />
      </div>
    </button>
  );

  const AwardCard = ({ award }) => (
  <div className="flex flex-col md:flex-row w-full gap-6">
  {/* Card Content */}
  <div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
      <div className="text-center p-6">
        <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
        <div className="text-sm text-gray-600 mb-2">{award.category}</div>
        <div className="text-lg font-bold text-gray-800">{award.year}</div>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        {award.title}
      </h3>
      <p className="text-blue-600 font-medium mb-3">{award.subtitle}</p>
      <p className="text-gray-600 text-sm leading-relaxed">
        {award.description}
      </p>
    </div>
  </div>

  {/* Image */}
  <div className="flex-1 flex items-center justify-center">
    <div className="w-full h-full p-4">
      <Image
        src={award.img}
        width={500}
        height={300}
        alt={award.title}
        className="rounded-xl object-cover w-full h-full shadow-md"
      />
    </div>
  </div>
</div>
  );

  const PressReleaseCard = ({ release }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start justify-between mb-4">
        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
          {release.category}
        </span>
        <span className="text-sm text-gray-500">{release.date}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        {release.title}
      </h3>
      <p className="text-gray-600 text-sm">{release.excerpt}</p>
      <button className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
        Read More <ChevronRight className="h-4 w-4 ml-1" />
      </button>
    </div>
  );

  const WorkshopCard = ({ workshop }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start justify-between mb-4">
        <span
          className={`px-3 py-1 text-xs font-medium rounded-full ${
            workshop.status === "Upcoming"
              ? "bg-green-100 text-green-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {workshop.status}
        </span>
        <Calendar className="h-5 w-5 text-gray-400" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        {workshop.title}
      </h3>
      <div className="space-y-2 mb-4">
        <div className="text-sm text-gray-600">
          <strong>Date:</strong> {workshop.date}
        </div>
        <div className="text-sm text-gray-600">
          <strong>Time:</strong> {workshop.time}
        </div>
        <div className="text-sm text-gray-600">
          <strong>Location:</strong> {workshop.location}
        </div>
      </div>
      <p className="text-gray-600 text-sm">{workshop.description}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-red-500 mr-3" />
              <h1 className="text-4xl font-bold text-gray-800">
                Renukiran Welfare Foundation
              </h1>
            </div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              Media Centre
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Building trust through transparency. Discover our achievements,
              latest updates, and community impact initiatives.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <SectionButton
            id="awards"
            icon={Award}
            label="Awards & Recognition"
            count={awards.length}
          />
          <SectionButton
            id="press"
            icon={FileText}
            label="Press Releases"
            count={pressReleases.length}
          />
          <SectionButton
            id="workshops"
            icon={Calendar}
            label="Workshops & Events"
            count={workshops.length}
          />
        </div>

        {/* Content Sections */}
        {activeSection === "awards" && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Awards & Recognition
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We are proud of the trust and credibility we have built through
                our consistent efforts, and we view every achievement as a
                stepping stone towards even greater responsibility. At
                Renukiran, good governance is not just a principle; it is a
                promise we renew every day.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
              {awards.map((award) => (
                <AwardCard key={award.id} award={award} />
              ))}
            </div>
          </div>
        )}

        {activeSection === "press" && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Press Releases
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Stay updated with our latest announcements, partnerships, and
                impact stories that showcase our commitment to building a more
                equitable society.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pressReleases.map((release) => (
                <PressReleaseCard key={release.id} release={release} />
              ))}
            </div>
          </div>
        )}

        {activeSection === "workshops" && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Workshops & Events
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Join us in our mission to empower communities through
                educational workshops, training programs, and impactful events
                designed to create lasting change.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workshops.map((workshop) => (
                <WorkshopCard key={workshop.id} workshop={workshop} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Globe className="h-6 w-6 mr-2" />
            <span className="text-lg font-semibold">
              Renukiran Welfare Foundation
            </span>
          </div>
          <p className="text-gray-300">
            Committed to excellence in every endeavor, building a more equitable
            society through transparency and impactful community service.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MediaCentre;
