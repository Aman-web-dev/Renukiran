"use client";
import React from "react";
import Link from "next/link";
import { Sparkles, TreePine, Heart, Users, Megaphone } from "lucide-react";

// Vision statements + announcements shown on the running ticker.
// Edit this array any time to update the bar — items loop seamlessly.
const tickerItems = [
  {
    id: "vision",
    icon: Sparkles,
    text: "Our vision: A greener, kinder tomorrow for every child",
    href: "/about/rwfStory",
  },
  {
    id: "plantation",
    icon: TreePine,
    text: "Mega Plantation Drive · August 15, 2026 · Register your spot",
    href: "/plantation-initiatives",
  },
  {
    id: "donate",
    icon: Heart,
    text: "Donate-a-Meal campaign is live — feed 500 children this week",
    href: "/donate",
  },
  {
    id: "volunteer",
    icon: Users,
    text: "August volunteer cohort — applications now open",
    href: "/get-involved/volunteering",
  },
  {
    id: "partners",
    icon: Megaphone,
    text: "CSR & ESG partnerships — drive measurable impact with us",
    href: "/rwf-corporates",
  },
];

const AnnouncementTicker = () => {
  // Duplicate so the marquee loops seamlessly.
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="ticker" role="region" aria-label="Announcements ticker">
      <div className="ticker__badge">
        <Sparkles className="ticker__badge-icon" aria-hidden="true" />
        <span>Updates</span>
      </div>

      <div className="ticker__viewport">
        <ul className="ticker__track">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <li key={`${item.id}-${idx}`} className="ticker__item">
                <Link href={item.href} className="ticker__link">
                  <Icon className="ticker__icon" aria-hidden="true" />
                  <span className="ticker__text">{item.text}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <Link href="/contact" className="ticker__contact">
        Reach Us
      </Link>
    </div>
  );
};

export default AnnouncementTicker;
