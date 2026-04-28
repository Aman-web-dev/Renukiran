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
  BookOpen,
  ExternalLink,
  Pencil,
  Clock,
} from "lucide-react";

import Image from "next/image";
import ArticleModal from "@/components/ArticleModal"

const MediaCentre = () => {
  const [activeSection, setActiveSection] = useState("awards");
  const [showMore, setIsShowMore] = useState(false);
  const [activeArticle, setActiveArticle] = useState(false);
  const [currentActiveArticle, setCurrentActiveArticle] = useState(null);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handleActiveArticle = (e) => {
    document.getElementById("my_modal_5").showModal();
    setCurrentActiveArticle(e.target?.src);
  }
  const awards = [
    {
      id: 1,
      title: "CSR Impact National Award",
      subtitle: "Most Trusted NGO of the Year 2024",
      description:
        "We are proud to share that Renukiran Welfare Foundation has been honored with the CSR Impact National Award for Most Trusted NGO of the Year 2024 at the prestigious National CSR Connect Summit. This recognition was awarded to us in acknowledgment of our impactful dedication and innovative approach to driving positive change and empowering society.",
      year: "2024",
      category: "National Recognition",
      img: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/awards%2Fbackground-removed-background-removed.png?alt=media&token=e198e777-855a-4914-8e29-cde80f91457d",
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
      img: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/awards%2Fbackground-removed-background-removed%20(2).png?alt=media&token=6bdd9234-0a74-48ad-b8cb-7674e13e9110",
    },
    {
      id: 4,
      title: "ISO 9001:2015 Certification",
      subtitle: "Quality Management System",
      description:
        "We are proud to hold an ISO 9001:2015 certification for our Quality Management System. Our processes have been independently assessed and found to be in full conformity with the international standards of quality management. This certification covers our work in the fields of education, digital literacy, and financial literacy.",
      year: "2023",
      category: "Quality Standards",
      img: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/awards%2Fbackground-removed-background-removed%20(14).png?alt=media&token=609f3552-f1ac-41d1-b8a2-1cf342f130dc",
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
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2F1.jpg?alt=media&token=f7476e66-b89a-45f7-b068-e7f7d95dde60",
    },
    {
      id: 2,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2F2.jpg?alt=media&token=87dee69b-b18c-40bc-90ca-61f9d8038a8d",
    },
    {
      id: 3,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2F3.jpg?alt=media&token=990515c1-2f9b-49e1-8a69-e7ffd5045158",
    },
    {
      id: 4,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2F4.jpg?alt=media&token=5e4e6bc6-4af6-4e6b-9c6e-53ecd5a447ea",
    },
    {
      id: 5,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2F5.jpg?alt=media&token=0ac8461d-229b-4f75-bcd4-5872a212ecaf",
    },
    {
      id: 6,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2F6.jpg?alt=media&token=ecc8dab9-9968-422f-848f-994158c5a53f",
    },
    {
      id: 7,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2F7.jpg?alt=media&token=5555b0cf-dbe9-47c9-9371-56dce1a74d5c",
    },
    {
      id: 8,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202024-06-24%20at%2011.29.08%20AM.jpeg?alt=media&token=79731803-6d3b-444c-a907-319319f4fea3",
    },
    {
      id: 9,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202024-06-24%20at%2011.38.42%20AM.jpeg?alt=media&token=d79eba56-4ed8-418d-8d8a-f3705da9d93a",
    },
    {
      id: 10,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202024-06-25%20at%207.22.13%20AM.jpeg?alt=media&token=59ee93e2-e19f-49e3-8950-999daf6ed2fd",
    },
    {
      id: 11,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202024-07-11%20at%207.39.46%20PM.jpeg?alt=media&token=2feff50b-406a-4191-84d8-5708c15a3975",
    },
    {
      id: 12,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202024-07-11%20at%207.39.47%20PM.jpeg?alt=media&token=fb36975f-fce4-49a9-8d7b-6049039953fa",
    },
    {
      id: 13,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202024-07-12%20at%2011.15.29%20AM.jpeg?alt=media&token=798da385-d4d6-4862-9d30-8c0f696bf197",
    },
    {
      id: 14,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202024-07-12%20at%207.50.51%20AM.jpeg?alt=media&token=412a2f03-f94d-47a5-8391-0f6e96c69424",
    },
    {
      id: 15,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202024-08-01%20at%2010.13.35%20AM.jpeg?alt=media&token=2620c22e-dca4-4fa6-bfd1-f8acfb6ae6b9",
    },
    {
      id: 16,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202024-08-01%20at%205.14.44%20PM.jpeg?alt=media&token=eda58705-338e-4968-820e-ba3afb36df63",
    },
    {
      id: 17,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202024-08-01%20at%207.52.16%20PM%20(1).jpeg?alt=media&token=8e87b2df-19f3-4f63-9a04-7c7dd15ce4b9",
    },
    {
      id: 18,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202024-08-01%20at%207.52.16%20PM.jpeg?alt=media&token=0f9e860a-986f-4cd8-870b-0e62a2d2ba5e",
    },
    {
      id: 19,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202024-08-01%20at%208.27.03%20PM.jpeg?alt=media&token=668777ee-dd62-469d-b8c5-c849df7c14bd",
    },
    {
      id: 20,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202024-08-01%20at%209.57.03%20AM.jpeg?alt=media&token=c6ff838f-4486-4c7b-955b-027a7c2d3edc",
    },
    {
      id: 21,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202024-08-01%20at%209.57.04%20AM.jpeg?alt=media&token=2bec54b7-d8be-4191-a988-6cc81d969135",
    },
    {
      id: 22,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202024-08-03%20at%203.12.38%20PM.jpeg?alt=media&token=fe0f04f4-8d10-41f8-99c4-25b653ac927c",
    },
    {
      id: 23,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202024-08-03%20at%203.13.18%20PM.jpeg?alt=media&token=a49427fe-f20c-41fd-8fcc-ab709c3985cb",
    },
    {
      id: 24,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202024-09-01%20at%207.11.29%20PM.jpeg?alt=media&token=0b746cb4-5604-4433-8011-2ad2c6e888b4",
    },
    {
      id: 25,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202024-09-01%20at%207.25.33%20AM.jpeg?alt=media&token=15d2b89d-aab6-47ae-a477-aed22116ff1a",
    },
    {
      id: 26,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202024-09-02%20at%204.20.24%20AM.jpeg?alt=media&token=75d0005f-e21b-4937-9d7e-7998e61ed463",
    },
    {
      id: 27,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202024-09-03%20at%207.23.10%20AM.jpeg?alt=media&token=a0bb5352-a44e-48a6-8254-8ad74a9a2053",
    },
    {
      id: 28,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202024-09-03%20at%207.28.48%20AM.jpeg?alt=media&token=7767f715-202f-4584-8f92-be7aa10eea61",
    },
    {
      id: 29,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202024-09-03%20at%208.20.41%20PM.jpeg?alt=media&token=23b145e0-0c52-4191-a9d7-f8a71276d7b1",
    },
    {
      id: 30,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202024-09-03%20at%208.45.11%20AM.jpeg?alt=media&token=68314342-e68a-41a5-a65a-417832ef7132",
    },
    {
      id: 31,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202024-09-03%20at%208.45.27%20AM.jpeg?alt=media&token=b3d6a952-1dbb-42df-8340-3189d2d4ade7",
    },
    {
      id: 32,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202024-09-05%20at%206.40.25%20AM.jpeg?alt=media&token=21d82285-0376-4699-9e54-00cb83cee156",
    },
    {
      id: 33,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202024-09-05%20at%206.40.26%20AM.jpeg?alt=media&token=6e239592-24ce-4979-8afb-ff806a7bba0c",
    },
    {
      id: 34,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202024-10-03%20at%206.49.10%20AM.jpeg?alt=media&token=07f40d5c-e8ea-4070-85c6-9092e66ef9b7",
    },
    {
      id: 35,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202024-10-03%20at%209.12.16%20AM.jpeg?alt=media&token=d10288b2-12dc-455c-abc9-327f66fb5891",
    },
    {
      id: 36,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202025-04-21%20at%2009.50.35.jpeg?alt=media&token=c26b92be-9e69-4719-8f59-17a95142c531",
    },
    {
      id: 37,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202025-04-21%20at%2009.50.39.jpeg?alt=media&token=5d46bc83-b43f-41c2-9fec-5a01af7a543e",
    },
    {
      id: 38,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202025-04-21%20at%2010.12.43.jpeg?alt=media&token=9cbb4762-f6fd-4453-b79e-d8628394fca7",
    },
    {
      id: 39,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202025-04-21%20at%2010.12.46%20(1).jpeg?alt=media&token=4882434c-55b3-4734-aaf2-addf5eadcab0",
    },
    {
      id: 40,
      imageLink:
        "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/news%20articles%2FWhatsApp%20Image%202025-04-21%20at%2010.12.46%20(2).jpeg?alt=media&token=39e96f90-5045-441e-8856-9a6aeae4da0a",
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

  const newsletters = [
    {
      id: 1,
      title: "Annual Report 2024-2025",
      url: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/newsletters%2FANNUAL%20REPORT%202024-2025.pdf?alt=media&token=57474e2e-b8fc-4add-8e3d-6762b2cbe82d",
      type: "Annual Report",
    },
    {
      id: 2,
      title: "Annual Report 2023-24",
      url: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/newsletters%2FANNUAL%20REPORT%202023-24.pdf?alt=media&token=ba45bb3d-8446-40d2-adfe-28265d587d36",
      type: "Annual Report",
    },
    {
      id: 3,
      title: "Annual Report 2021-22",
      url: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/newsletters%2FAnnual%20report%2021-22.pdf%20(2).pdf?alt=media&token=a1b982d1-4b1f-42b5-b086-1aa84c25a70a",
      type: "Annual Report",
    },
    {
      id: 4,
      title: "Annual Report 2020-21",
      url: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/newsletters%2FAnnual%20Report%2020-21.pdf%20(1).pdf?alt=media&token=803f9361-720d-4f61-b267-d864e8ef0364",
      type: "Annual Report",
    },
    {
      id: 5,
      title: "Annual Newsletter",
      url: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/newsletters%2FAnnual%20newsletter%20(4).pdf?alt=media&token=54f9a7c3-5c57-4772-9668-e055ea02572b",
      type: "Newsletter",
    },
        {
      id: 5,
      title: "Newsletter",
      url: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/newsletters%2FNewsletter.pdf?alt=media&token=fac117b1-cc84-4161-8094-d2ab833a0678",
      type: "Newsletter",
    },
  ];

  const blogs = [
    {
      id: 1,
      slug: "breaking-barriers",
      title: "Breaking Barriers: Challenging Deep-Rooted Norms through Skill Development",
      excerpt: "In many parts of India, gender roles have long been shaped by tradition. Discover how Renukiran Welfare Foundation is breaking these barriers by empowering women with skills, confidence, and the ability to redefine their place in society.",
      date: "2025-04-15",
      readTime: "4 min read",
      author: "Renukiran Team",
      category: "Women Empowerment",
      pdfUrl: "/blogs/Breaking Barriers.pdf",
      image: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/blog%20thumbnail%2FWhatsApp%20Image%202026-04-21%20at%2012.53.20.jpeg?alt=media&token=a9c7afe9-a44a-4f9a-aa67-a05d768af88e",
    },
    {
      id: 2,
      slug: "if-empowerment-had-a-resume",
      title: "If Empowerment Had a Resume",
      excerpt: "An insightful look at how corporate partnerships and skill training programs are creating employment opportunities for underprivileged communities across India.",
      date: "2025-03-28",
      readTime: "4 min read",
      author: "Renukiran Team",
      category: "Livelihood",
      pdfUrl: "/blogs/If Empowerment Had a Resume.pdf",
      image: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/blog%20thumbnail%2FWhatsApp%20Image%202026-04-21%20at%2014.48.47.jpeg?alt=media&token=9a399a17-5d5e-47da-98d0-9d2975f1c5ea",
    },
    {
      id: 3,
      slug: "sustainable-impact-vs-one-time-donations",
      title: "Sustainable Impact vs One-Time Donations",
      excerpt: "Why long-term engagement and sustainable development approaches create lasting change in communities, and how Renukiran is leading this transformation.",
      date: "2025-03-10",
      readTime: "6 min read",
      author: "Renukiran Team",
      category: "Development",
      pdfUrl: "/blogs/Sustainable Impact vs One.pdf",
      image: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/blog%20thumbnail%2FWhatsApp%20Image%202026-04-21%20at%2013.12.23.jpeg?alt=media&token=53771a58-d24e-4159-ae57-c3275ba92c28",
    },
    {
      id: 4,
      slug: "why-ngos-matter",
      title: "Why NGOs Like Renukiran Welfare Foundation Are Crucial",
      excerpt: "Understanding the vital role NGOs play in bridging the gap between government initiatives and community needs, especially for the most vulnerable sections of society.",
      date: "2025-02-20",
      readTime: "7 min read",
      author: "Renukiran Team",
      category: "NGO Impact",
      pdfUrl: "/blogs/Why NGOs Like Renukiran Welfare Foundation Are Cru.pdf",
      image: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/blog%20thumbnail%2FWhatsApp%20Image%202026-04-21%20at%2011.51.51.jpeg?alt=media&token=374f5db0-6810-48bc-99d0-ff91086db50d",
    },
  ];

  const SectionButton = ({ id, icon: Icon, label, count }) => (
    <button
      onClick={() => setActiveSection(id)}
      className={`flex items-center justify-between w-full p-4 rounded-lg transition-all duration-300 ${activeSection === id
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
          className={`px-2 py-1 rounded-full text-xs ${activeSection === id ? "bg-white/20" : "bg-gray-100"
            }`}
        >
          {count}
        </span>
        <ChevronRight className="h-4 w-4" />
      </div>
    </button>
  );

  const NewsletterCard = ({ newsletter }) => (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
      onClick={() => window.open(newsletter.url, "_blank")}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
            {newsletter.type}
          </span>
          <BookOpen className="h-6 w-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          {newsletter.title}
        </h3>
        <div className="flex items-center text-blue-600 font-medium">
          <span>View PDF</span>
          <ExternalLink className="h-4 w-4 ml-2" />
        </div>
      </div>
    </div>
  );

  const BlogCard = ({ blog }) => (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
      onClick={() => window.location.href = `/blogs/${blog.slug}`}
    >
      <div className="relative h-40 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-200 border-2 border-dashed rounded-t-xl" />
        {blog.image ? (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-700 scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-sm">No Image Available</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
            {blog.category}
          </span>
          <Pencil className="h-6 w-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
          {blog.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {blog.excerpt}
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500 pt-4 border-t">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{blog.readTime}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const AwardCard = ({ award }) => (
    <div className="flex flex-col md:flex-row w-full max-w-sm">
      {/* Card Content */}
      <div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full h-full p-4 relative">
            <Image
              src={award.img}
              width={200}
              height={200}
              alt={award.title}
              className="rounded-xl object-cover w-full h-full shadow-md"
            />
            <div className="absolute top-5 left-5 renukiran-bg-green-color rounded-full p-1">
              <div className="flex items-center">
                <Award className="h-10 w-10 text-white" />
                <div className="text-base text-white flex flex-col px-2">
                  <span>{award.category}</span>
                  <span>{award.year}</span>
                </div>
                {/* <div className="text-lg font-bold text-gray-800">
                  {award.year}
                </div> */}
              </div>
            </div>
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
    </div>
  );

  const PressReleaseCard = ({ release }) => (
    <div className="border-2 border-black rounded-lg shadow-md p-6 max-h-80 cursor-pointer">
      <div className="w-full h-full">
        <img
          onClick={(e) => handleActiveArticle(e)}
          src={release.imageLink}
          alt={release.id}
          className="w-full h-full object-cover"
        />
      </div>
      {/* <div className="flex items-start justify-between mb-4">
        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
          {release.category}
        </span>
        <span className="text-sm text-gray-500">{release.date}</span>
      </div> */}
      {/* <h3 className="text-lg font-semibold text-gray-800 mb-3">
        {release.title}
      </h3> */}
      {/* <p className="text-gray-600 text-sm">{release.excerpt}</p> */}
      {/* <button className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
        Read More <ChevronRight className="h-4 w-4 ml-1" />
      </button> */}
    </div>
  );

  const WorkshopCard = ({ workshop }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start justify-between mb-4">
        <span
          className={`px-3 py-1 text-xs font-medium rounded-full ${workshop.status === "Upcoming"
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
          <SectionButton
            id="newsletters"
            icon={BookOpen}
            label="Newsletters & Annual Reports"
            count={newsletters.length}
          />
          <SectionButton
            id="blogs"
            icon={Pencil}
            label="The RWF Blog"
            count={blogs.length}
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
            <div className="flex flex-wrap gap-8">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
              <ArticleModal currentArticle={currentActiveArticle} />
              {pressReleases.map((release) => {
                if (release.id <= 20 && !showMore) {
                  return (
                    <PressReleaseCard key={release.id} release={release} />
                  );
                } else if (showMore) {
                  return (
                    <PressReleaseCard key={release.id} release={release} />
                  );
                }
              })}
            </div>
            <div className="text-center">
              <button
                onClick={() =>
                  !showMore ? setIsShowMore(true) : setIsShowMore(false)
                }
                className="lg:text-xl text-lg renukiran-blue-color"
              >
                {!showMore ? "Show More" : "Show Less"}
              </button>
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

        {activeSection === "newsletters" && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Newsletters & Annual Reports
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Stay informed about our activities, achievements, and impact through our newsletters and annual reports.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsletters.map((newsletter) => (
                <NewsletterCard key={newsletter.id} newsletter={newsletter} />
              ))}
            </div>
          </div>
        )}

        {activeSection === "blogs" && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                The RWF Blog
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Insights, stories, and updates from our journey of creating positive change in communities across India.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
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
