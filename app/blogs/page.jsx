"use client";

import React from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    slug: "breaking-barriers",
    title: "Breaking Barriers: Challenging Deep-Rooted Norms through Skill Development",
    excerpt: "Discover how Renukiran Welfare Foundation is breaking gender barriers by empowering women with skills, confidence, and the ability to redefine their place in society.",
    date: "2025-04-15",
    readTime: "4 min read",
    author: "Renukiran Team",
    category: "Women Empowerment",
    image: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/blog%20thumbnail%2FWhatsApp%20Image%202026-04-21%20at%2012.53.20.jpeg?alt=media&token=a9c7afe9-a44a-4f9a-aa67-a05d768af88e",
    content: `# Breaking Barriers...` // Add full content here
  },
  {
    id: 2,
    slug: "if-empowerment-had-a-resume",
    title: "If Empowerment Had a Resume",
    excerpt: "What if Empowerment walked into a job interview? An insightful look at how skill training programs are creating independence for underprivileged communities.",
    date: "2025-03-28",
    readTime: "4 min read",
    author: "Renukiran Team",
    category: "Livelihood",
    image: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/blog%20thumbnail%2FWhatsApp%20Image%202026-04-21%20at%2014.48.47.jpeg?alt=media&token=9a399a17-5d5e-47da-98d0-9d2975f1c5ea",
    content: `# If Empowerment Had a Resume...` // Add full content here
  },
  {
    id: 3,
    slug: "sustainable-impact-vs-one-time-donations",
    title: "Sustainable Impact vs One-Time Support",
    excerpt: "Why long-term engagement and sustainable development approaches create lasting change, and how Renukiran is leading this transformation.",
    date: "2025-03-10",
    readTime: "6 min read",
    author: "Renukiran Team",
    category: "Development",
    image: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/blog%20thumbnail%2FWhatsApp%20Image%202026-04-21%20at%2013.12.23.jpeg?alt=media&token=53771a58-d24e-4159-ae57-c3275ba92c28",
    content: `# Sustainable Impact vs One-Time Support...` // Add full content here
  },
  {
    id: 4,
    slug: "why-ngos-matter",
    title: "Why NGOs Like Renukiran Welfare Foundation Are Crucial",
    excerpt: "Understanding the vital role NGOs play in bridging the gap between government initiatives and community needs at the grassroots level.",
    date: "2025-02-20",
    readTime: "7 min read",
    author: "Renukiran Team",
    category: "NGO Impact",
    image: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/blog%20thumbnail%2FWhatsApp%20Image%202026-04-21%20at%2011.51.51.jpeg?alt=media&token=374f5db0-6810-48bc-99d0-ff91086db50d",
    content: `# Why NGOs Like Renukiran Welfare Foundation Are Crucial...` // Add full content here
  },
];

const categoryColors = {
  "Women Empowerment": "from-pink-500 to-rose-500",
  "Livelihood": "from-green-500 to-emerald-500",
  "Development": "from-blue-500 to-cyan-500",
  "NGO Impact": "from-purple-500 to-indigo-500",
};

const BlogCard = ({ blog }) => (
  <Link href={`/blogs/${blog.slug}`} className="group block h-full">
    <article className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 overflow-hidden">
      {/* Image Container */}
      <div className="relative h-52 w-full overflow-hidden bg-gray-200">
        {blog.image ? (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/400x300?text=Renukiran+Impact"; // Fallback if Firebase fails
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <span className="text-gray-400 text-xs">Image coming soon</span>
          </div>
        )}
        
        {/* Category Badge */}
        <div className={`absolute top-3 left-3 px-3 py-1 bg-gradient-to-r ${categoryColors[blog.category] || 'from-blue-500 to-blue-600'} text-white text-[10px] uppercase tracking-wider font-bold rounded-full shadow-md`}>
          {blog.category}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-3 text-[12px] text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3 text-blue-500" />
            {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3 text-blue-500" />
            {blog.readTime}
          </span>
        </div>

        <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
          {blog.title}
        </h2>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {blog.excerpt}
        </p>
        
        <div className="flex items-center text-blue-600 font-bold text-sm mt-auto group-hover:gap-2 transition-all">
          <span>Read Full Story</span>
          <ArrowRight className="h-4 w-4 ml-1" />
        </div>
      </div>
    </article>
  </Link>
);

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blogs</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Explore how Renukiran Welfare Foundation is creating lasting change through grassroots initiatives and community empowerment.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;