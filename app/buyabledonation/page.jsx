"use client";

import React, { useState, useMemo } from "react";
import {
  Utensils,
  Shirt,
  Sparkles,
  BookOpen,
  Home,
  Stethoscope,
  Laptop,
  Footprints,
  Heart,
  Users,
  ShoppingBag,
  ArrowDown,
  Lock,
  Receipt,
  BadgeCheck,
} from "lucide-react";
import BuyingCard from "@/components/BuyingCard";
import "./buyableDonation.css";

const impactStats = [
  { num: "8", label: "Causes", Icon: ShoppingBag },
  { num: "50K+", label: "Meals Served", Icon: Utensils },
  { num: "12K+", label: "Kits Delivered", Icon: Heart },
  { num: "200+", label: "Active Donors", Icon: Users },
];

const trustItems = [
  {
    Icon: Lock,
    title: "Secure Payments",
    desc: "All transactions are encrypted via Razorpay with PCI-DSS Level 1 compliance.",
  },
  {
    Icon: Receipt,
    title: "80G Tax Benefit",
    desc: "Every donation above ₹500 qualifies for a 50% tax deduction under Section 80G.",
  },
  {
    Icon: BadgeCheck,
    title: "Verified NGO",
    desc: "Registered under the Societies Registration Act with full FCRA transparency.",
  },
];

const causes = [
     {
    pictureLink:
      "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/newsletters%2F6369538.jpg?alt=media&token=dc43a26b-45f9-4de0-810e-393f8cdd13c2",
    DonationTitle: "Donate for a tree plantation",
    DonationDetails:
      "Bring joy and play — donate toys and sports gear to children in shelters and schools.",
    DonationLink: "https://rzp.io/l/0RxZbqR2gM",
    DonationAmount: "249",
    Icon: Footprints,
    category: "Lifestyle",
    accent: "green",
  },
  {
    pictureLink:
      "https://img.freepik.com/free-vector/tiny-people-standing-near-box-donation-food-delivery-volunteers-giving-healthy-grocery-goods-charity-flat-vector-illustration-social-support-humanitarian-help-community-sharing-concept_74855-21023.jpg?w=900&t=st=1704267384~exp=1704267984~hmac=b60786a94fe64bbdc409b642275271b85b11411a283de2c2856b234a522f5d78",
    DonationTitle: "Food Donation",
    DonationDetails:
      "Nourish a life, donate a meal — share the joy of a full stomach with families in need.",
    DonationLink: "https://rzp.io/l/8dUg6470",
    DonationAmount: "500",
    Icon: Utensils,
    category: "Essentials",
    accent: "green",
  },
  {
    pictureLink:
      "https://img.freepik.com/free-vector/drawn-clothing-donation-concept_23-2148832529.jpg?w=740&t=st=1704266820~exp=1704267420~hmac=e724b6d97e277aa0e9f2af52c0c2eb1a35cf2f666aa730d34a18c1106637d029",
    DonationTitle: "Cloth Donation",
    DonationDetails:
      "Clothe with kindness — your gently-used garments can bring warmth and comfort to someone.",
    DonationLink: "https://rzp.io/l/vQznIiJJt",
    DonationAmount: "2500",
    Icon: Shirt,
    category: "Essentials",
    accent: "green",
  },
  {
    pictureLink:
      "https://img.freepik.com/free-vector/flat-world-humanitarian-day-illustration_23-2148998437.jpg?w=740&t=st=1704267289~exp=1704267889~hmac=1bb385ad4a96ef6eb13501750a8ddd15b427479a78abaa92c14e495aa3d123b9",
    DonationTitle: "Toiletries & Personal Care",
    DonationDetails:
      "Spread hygiene, spread smiles — contribute toiletries for a healthier community.",
    DonationLink: "https://rzp.io/l/lDdhOm5u",
    DonationAmount: "2000",
    Icon: Sparkles,
    category: "Health",
    accent: "blue",
  },
  {
    pictureLink:
      "https://img.freepik.com/free-vector/tiny-students-sitting-near-books-getting-university-degree-paying-money-education-business-flat-vector-illustration-college-scholarship-finance-system-school-fee-economy-student-loan-concept_74855-21037.jpg?w=826&t=st=1704268491~exp=1704269091~hmac=a3bc1b3385f77a6264f2d1e61e2794a07de9697b71e46adbc73d9ca2df0f6ea7",
    DonationTitle: "Educational Donation",
    DonationDetails:
      "Empower through education — gift books and stationery for a brighter future.",
    DonationLink: "https://rzp.io/l/HJ9iUa7Drl",
    DonationAmount: "3000",
    Icon: BookOpen,
    category: "Education",
    accent: "blue",
  },
  {
    pictureLink:
      "https://img.freepik.com/free-vector/charity-concept-illustration_114360-4471.jpg?w=900&t=st=1704273334~exp=1704273934~hmac=ee9b54f764b036364d5c714e580fbfcca24acefed6431b18abaee41c3fe48bbe",
    DonationTitle: "Home Essentials",
    DonationDetails:
      "Make a house a home — your donated household items transform lives.",
    DonationLink: "https://rzp.io/l/hp0op5u",
    DonationAmount: "Accordingly",
    Icon: Home,
    category: "Essentials",
    accent: "green",
  },
  {
    pictureLink:
      "https://img.freepik.com/free-vector/humanitarian-help-people-donating-sanitary-protection-equipment-concept-illustration_114360-1756.jpg?w=900&t=st=1704268607~exp=1704269207~hmac=07bd3562b8274fff2af2a852d0505e2f6d99b7336a534396b42c4c54a0ea7a9f",
    DonationTitle: "Medical Donation",
    DonationDetails:
      "Heal with kindness — donate medicines for a healthier community.",
    DonationLink: "https://rzp.io/l/4b4lnAJMd",
    DonationAmount: "5000",
    Icon: Stethoscope,
    category: "Health",
    accent: "blue",
  },
  {
    pictureLink:
      "https://img.freepik.com/free-vector/charity-flowchart-layout-with-free-lunches-health-care-donations-box-dollar-bills-isometric-elements-illustration_1284-28203.jpg?w=740&t=st=1704268770~exp=1704269370~hmac=17bf97706ad122be8d5a264a017fad183a0ad87061d8c0689e767587ec852c80",
    DonationTitle: "Tech Education",
    DonationDetails:
      "Power up education — donate old devices to empower students with digital learning.",
    DonationLink: "https://rzp.io/l/eU2ZuIAEm",
    DonationAmount: "7000",
    Icon: Laptop,
    category: "Education",
    accent: "blue",
  },
  {
    pictureLink:
      "https://img.freepik.com/free-vector/volunteers-packing-donation-boxes_74855-5299.jpg?w=1060&t=st=1704273053~exp=1704273653~hmac=4b5a99e4e2df66b62ca20ef5554bf2671e847eb6e9c6045a2277142cfb1b176a",
    DonationTitle: "Toys & Sports Equipment",
    DonationDetails:
      "Bring joy and play — donate toys and sports gear to children in shelters and schools.",
    DonationLink: "https://rzp.io/l/0RxZbqR2gM",
    DonationAmount: "1500",
    Icon: Footprints,
    category: "Lifestyle",
    accent: "green",
  },

];

const categories = ["All", "Essentials", "Health", "Education", "Lifestyle"];

function BuyableDonationPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCauses = useMemo(() => {
    if (activeCategory === "All") return causes;
    return causes.filter((c) => c.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="buyable-page">
      {/* ===================== HERO ===================== */}
      <section className="buyable-hero" aria-label="Donate for a cause">
        <div className="buyable-hero__bg" aria-hidden="true" />
        <div className="buyable-hero__content">
          <span className="buyable-hero__eyebrow">Donate for a Cause</span>
          <h1 className="buyable-hero__title">
            Choose a cause, change a <em>life</em>.
          </h1>
          <p className="buyable-hero__sub">
            Pick a specific impact that resonates with you — meals, books,
            clothes, medical aid, or home essentials. Every contribution is
            tracked and delivered where it matters most.
          </p>
          <a href="#causes" className="buyable-hero__cta">
            Browse Causes
            <ArrowDown aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* ===================== IMPACT STRIP ===================== */}
      <section className="buyable-stats" aria-label="Our impact">
        <div className="buyable-stats__inner">
          {impactStats.map(({ num, label, Icon }) => (
            <div className="buyable-stats__cell" key={label}>
              <div className="buyable-stats__icon" aria-hidden="true">
                <Icon />
              </div>
              <div>
                <p className="buyable-stats__num">{num}</p>
                <p className="buyable-stats__label">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== FILTERS + GRID ===================== */}
      <section id="causes" className="buyable-filters" aria-label="Cause filters">
        <div className="buyable-filters__head">
          <span className="buyable-filters__tag">Browse by Category</span>
          <h2 className="buyable-filters__title">Find your cause</h2>
          <p className="buyable-filters__sub">
            Filter by what matters to you and contribute directly via a secure
            Razorpay checkout.
          </p>
        </div>

        <div className="buyable-filters__pills" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              className={`buyable-filters__pill ${
                activeCategory === cat ? "buyable-filters__pill--active" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="buyable-grid" aria-label="Donation causes">
        {filteredCauses.length > 0 ? (
          filteredCauses.map((cause) => (
            <BuyingCard key={cause.DonationTitle} {...cause} />
          ))
        ) : (
          <div className="buyable-empty">
            No causes in this category yet — please check back soon.
          </div>
        )}
      </section>

      {/* ===================== TRUST STRIP ===================== */}
      <section className="buyable-trust" aria-label="Trust and transparency">
        <div className="buyable-trust__inner">
          {trustItems.map(({ Icon, title, desc }) => (
            <div className="buyable-trust__cell" key={title}>
              <div className="buyable-trust__icon" aria-hidden="true">
                <Icon />
              </div>
              <div>
                <h3 className="buyable-trust__title">{title}</h3>
                <p className="buyable-trust__desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default BuyableDonationPage;