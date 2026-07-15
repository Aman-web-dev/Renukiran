// Central content source for every corporate impact-partner page.
//
// To publish another client:
// 1. Duplicate an object in `impactPartners` and give it a unique, URL-safe `slug`.
// 2. Replace the copy, coordinates, logo and image URLs (Firebase Storage URLs work).
// 3. Keep `published: true`. The listing, dynamic route, metadata and static build params
//    are all generated from this file—no new page component is required.

const amazonActivityImage =
  "https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2F1%20(10).webp?alt=media&token=c8d60ecd-2eb1-4c69-9511-ac8c805c66b9&_gl=1*17lblpe*_ga*NTkyODU4MjY0LjE2OTY1Nzc5MzE.*_ga_CW55HF8NVT*MTY5ODM5NTEwMi45LjEuMTY5ODM5NTcwMS42MC4wLjA.";

export const impactPartners = [
  {
    slug: "vivo-india",
    published: true,
    featured: true,
    order: 2,
    client: {
      name: "vivo India",
      shortName: "vivo",
      logo: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/vivo_mural_impact%2Flogo%2FVivo-Logo.png?alt=media&token=7fdaad06-edbc-4e2e-8a97-31bfeceaea20", // Space left empty as requested
      website: "https://www.vivo.com/in",
      description: [
        "vivo India is one of India's leading smartphone manufacturers, committed to leveraging technology and community engagement to drive social impact. As part of its corporate social responsibility, vivo focuses on creating sustainable value for the communities it serves.",
        "In collaboration with Renukiran Welfare Foundation, vivo India launched a school transformation initiative aimed at improving the physical and educational infrastructure of government schools. The partnership highlights vivo's dedication to fostering creativity and better learning environments for children.",
      ],
    },
    activity: {
      title: "School Transformation through Educational Mural Art",
      type: "Employee Volunteering Program",
      theme: "Education & Community Development",
      date: "Date Not Specified", // Date not provided in source
      dateISO: "2024-01-01",
      location: "Government School, Sushant Lok, Gurugram, Haryana",
      locations: ["Sushant Lok, Gurugram"],
      summary:
        "A vibrant employee engagement initiative where vivo India volunteers collaborated to transform a government school's learning environment using educational wall art and creative murals.",
      objective:
        "To create an inspiring, child-friendly, and visually engaging learning environment that encourages curiosity and improves the overall school experience for students.",
      details: [
        {
          title: "Educational Wall Murals",
          description:
            "Volunteers worked on turning plain classroom walls into interactive educational tools through detailed illustrations and vibrant paintings.",
          points: [
            "Painted classroom walls with curriculum-linked educational illustrations.",
            "Improved visual learning aids for students of all ages.",
            "Significantly enhanced the overall school aesthetics and cleanliness.",
          ],
        },
        {
          title: "Employee Volunteering & Collaboration",
          description:
            "The project served as a platform for vivo employees to step outside the office and contribute directly to community development.",
          points: [
            "Employees collaborated in teams to design and paint murals.",
            "Strengthened the corporate-community partnership through hands-on service.",
            "Fostered a sense of shared responsibility for local educational infrastructure.",
          ],
        },
        {
          title: "Creating Joyful Learning Spaces",
          description:
            "The initiative focused on the psychological impact of the environment on learning, ensuring the school felt welcoming and modern.",
          points: [
            "Created colourful classrooms that stimulate creativity and joy.",
            "Transformed ordinary corridors into engaging storytelling spaces.",
            "Encouraged student curiosity through visual exploration of the artwork.",
          ],
        },
      ],
    },
    coverImage: {
      src: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/vivo_mural_impact%2Fcover%20picture%2FDSC_0887.JPG?alt=media&token=1740575d-490a-4c3b-930b-36cd5fc436ac",
      alt: "vivo India employees painting educational murals at a government school in Gurugram",
      position: "center",
    },
    gallery: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/vivo_mural_impact%2Fpictures%2FDSC_0717.JPG?alt=media&token=5ef4ad88-8432-46ee-a311-6fea19a508cc", // Space left empty as requested
        alt: "Educational murals on school walls",
        caption:
          ".",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/vivo_mural_impact%2Fpictures%2FDSC_0721.JPG?alt=media&token=d3a8b554-b61c-43da-990e-5d6f7f0a96ea", // Space left empty as requested
        alt: "Educational murals on school walls",
        caption:
          ".",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/vivo_mural_impact%2Fpictures%2FDSC_0757.JPG?alt=media&token=b09b5570-1753-410a-b6d3-8e8c41cd6618", // Space left empty as requested
        alt: "Educational murals on school walls",
        caption:
          ".",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/vivo_mural_impact%2Fpictures%2FDSC_0762.JPG?alt=media&token=5882fcb5-1058-4256-8b3c-801eb250bfe6", // Space left empty as requested
        alt: "Educational murals on school walls",
        caption:
          ".",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/vivo_mural_impact%2Fpictures%2FDSC_0770.JPG?alt=media&token=45778530-dadb-4201-9987-b7fc2628e0f4", // Space left empty as requested
        alt: "Educational murals on school walls",
        caption:
          ".",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/vivo_mural_impact%2Fpictures%2FDSC_0777.JPG?alt=media&token=20c89a72-8037-4967-8b85-6493df54c571", // Space left empty as requested
        alt: "Educational murals on school walls",
        caption:
          ".",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/vivo_mural_impact%2Fpictures%2FDSC_0802.JPG?alt=media&token=2555cce8-0e63-42a0-897b-7129241c9b0c", // Space left empty as requested
        alt: "Educational murals on school walls",
        caption:
          ".",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/vivo_mural_impact%2Fpictures%2FDSC_0821.JPG?alt=media&token=47f7a1ad-5223-4593-857b-97ff4a2e4270", // Space left empty as requested
        alt: "Educational murals on school walls",
        caption:
          ".",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/vivo_mural_impact%2Fpictures%2FDSC_0825.JPG?alt=media&token=62835d30-af33-41a2-8004-e4a5396b230b", // Space left empty as requested
        alt: "Educational murals on school walls",
        caption:
          ".",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/vivo_mural_impact%2Fpictures%2FDSC_0851.JPG?alt=media&token=2b472f27-0bf1-4d7e-a474-b614d44b88cb", // Space left empty as requested
        alt: "Educational murals on school walls",
        caption:
          ".",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/vivo_mural_impact%2Fpictures%2FDSC_0852.JPG?alt=media&token=e089a0e1-b329-4880-8f52-35e0d8843753", // Space left empty as requested
        alt: "Educational murals on school walls",
        caption:
          ".",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/vivo_mural_impact%2Fpictures%2FDSC_0876.JPG?alt=media&token=b3620282-bc9d-4f05-9e0c-56e602e1ff3f", // Space left empty as requested
        alt: "Educational murals on school walls",
        caption:
          ".",
      },

    ],
    map: {
      latitude: 28.4595,
      longitude: 77.072,
      zoom: 14,
      label: "Government School, Sushant Lok, Gurugram",
      embedUrl:
        "https://maps.google.com/maps?q=28.4595,77.0720&t=k&z=14&output=embed",
      earthUrl:
        "https://earth.google.com/web/search/Sushant+Lok,+Gurugram,+Haryana",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=28.4595%2C77.0720",
    },
    impact: {
      heading: "Transforming environments, inspiring young minds",
      paragraphs: [
        "The initiative successfully transformed an ordinary government school into a vibrant educational hub. By replacing dull walls with educational murals, the project has provided students with a more stimulating environment that supports visual learning and psychological well-being. The colorful surroundings serve as a daily source of inspiration for both students and teachers.",
        "Beyond the physical changes, the program empowered vivo India employees to connect deeply with the community. Their collective efforts demonstrated the power of corporate volunteering in making a tangible difference at the grassroots level, turning a simple school building into a joyful space for growth and creativity.",
      ],
      stats: [
        { value: "1", label: "School Transformed" },
        { value: "Multiple", label: "Classrooms Painted" },
        { value: "Vibrant", label: "Learning Spaces" },
        { value: "High", label: "Employee Participation" },
      ],
      sdgs: [
        { number: "04", label: "Quality Education" },
        { number: "11", label: "Sustainable Cities and Communities" },
        { number: "17", label: "Partnerships for the Goals" },
      ],
    },
    conclusion:
      "Through this mural art initiative, vivo India and Renukiran Welfare Foundation have shown that school transformation goes beyond infrastructure—it is about creating an atmosphere where children feel excited to learn. This project stands as a testament to the impact of creative collaboration in education.",
    thankingNote:
      "Renukiran Welfare Foundation expresses its sincere gratitude to vivo India and all the dedicated employee volunteers. Your creativity and hard work have turned these walls into windows of imagination for the students. We also thank the school administration for their cooperation in making this transformation possible.",
    specialMentions: [
      {
        name: "vivo India Employee Volunteers",
        role: "Corporate Volunteer Team",
        note: "For their artistic contribution and enthusiastic participation in transforming the school environment.",
        url: "https://www.vivo.com/in",
        linkLabel: "About vivo India",
      },
      {
        name: "Renukiran Welfare Foundation",
        role: "NGO Partner",
        note: "For project planning, coordination, and ensuring the murals aligned with educational needs.",
      },
      {
        name: "Government School Administration",
        role: "Local Support",
        note: "For providing the platform and support to implement this beautification and educational drive.",
      },
    ],
  }
];

export function getPublishedImpactPartners() {
  return impactPartners
    .filter((partner) => partner.published)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

export function getImpactPartnerBySlug(slug) {
  return getPublishedImpactPartners().find((partner) => partner.slug === slug);
}

export function getImpactPartnerSummaries() {
  return getPublishedImpactPartners().map((partner) => ({
    slug: partner.slug,
    clientName: partner.client.name,
    clientLogo: partner.client.logo,
    activityTitle: partner.activity.title,
    activityType: partner.activity.type,
    theme: partner.activity.theme,
    date: partner.activity.date,
    location: partner.activity.location,
    summary: partner.activity.summary,
    coverImage: partner.coverImage,
    featured: partner.featured,
    stats: partner.impact.stats.slice(0, 2),
  }));
}
