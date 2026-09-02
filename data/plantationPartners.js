// Central content source for corporate plantation-partner pages.
//
// How to add a new company plantation drive:
//   1. Copy the `plantationPartnerTemplate` below into the `plantationPartners` array.
//   2. Give it a unique URL-safe `slug` (e.g. "tata-consultancy-bengaluru-greencampus").
//   3. Fill in the `company`, `drive`, `site` and the first entry in `timeline`.
//   4. Add photographs (under /public/plantationPictures or remote URLs).
//   5. Set `published: true`.
//   6. To update growth every year, simply push a new object to the `timeline` array.
//      Each year carries its own species list, photos, survival and growth metrics.
//
// The listing, profile, metadata, totals and static params all derive from this file
// — you do not need to touch any component code.

const img = (file) => `/plantationPictures/${file}`;

export const plantationPartnerTemplate = {
  slug: "company-name-plantation-drive",
  published: false,
  featured: false,
  order: 999,
  status: "Growing", // Planned | Growing | In progress | Year N · Growing | Completed
  company: {
    name: "Company name",
    shortName: "Company",
    logo: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/dot%2Fdot-logo.svg?alt=media&token=30520064-cc33-4f65-9710-bf93c21f5f4f",
    website: "",
    description: [
      "Introduce the company and its sustainability or CSR commitment.",
    ],
  },
  drive: {
    title: "Corporate plantation drive title",
    type: "CSR Plantation Drive",
    model: "Native Tree Plantation",
    theme: "Climate Action & Biodiversity",
    date: "Monsoon YYYY",
    dateISO: "YYYY-MM-DD",
    location: "City, State",
    locations: ["City, State"],
    summary: "A concise overview of the plantation partnership and its purpose.",
    objective: "Describe the ecological and community outcomes the project set out to create.",
    details: [
      {
        title: "Planning and site preparation",
        description: "Explain how the site and plantation model were selected.",
        points: ["Site assessment", "Pit preparation", "Native species planning"],
      },
    ],
  },
  // Geographic site information — the area under restoration, address, soil and climate.
  site: {
    name: "Site name (e.g. Green Legacy Park)",
    areaAcres: 0,
    areaSqM: 0,
    address: "Full address of the plantation site",
    microclimate: "Brief description of local climate / ecosystem",
    soilHealth: "Brief description of soil treatment / preparation",
  },
  coverImage: {
    src: "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.12%20PM.webp",
    alt: "",
    position: "center",
  },
  // Year-by-year growth journal. Add a new entry here every year.
  // Each year tracks what was planted, photographs from that year, and metrics.
  timeline: [
    {
      year: 2024,
      phase: "Inauguration",
      title: "Headline for this year's milestone",
      summary: "What happened this year — drives, audits, expansion, community work.",
      date: "Month YYYY",
      status: "Planted", // Planted | Growing | Audited | Expanded | Maintained
      species: [
        { name: "Neem (Azadirachta indica)", quantity: 600, role: "Boundary belt" },
      ],
      totalTreesPlantedThisYear: 600,
      totalVolunteersThisYear: 50,
      photos: [
        { src: "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.12%20PM.webp", alt: "", caption: "" },
      ],
      metrics: {
        areaCovered: "0 acres",
        totalSpecies: 1,
        geoTaggedPits: 600,
      },
      note: "Any extra context (e.g. monsoon delays, community support, equipment).",
    },
  ],
  // (Optional) top-level "From the field" curated gallery.
  // If empty, the profile renders the year-by-year photos inside the timeline only.
  gallery: [
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.11.59%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.00%20PM%20(1).webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.00%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.01%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.02%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.04%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.06%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.08%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.10%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.12%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.14%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.15%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.19%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.22%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.24%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.26%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.27%20PM%20(1).webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.27%20PM%20(2).webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.27%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.28%20PM%20(1).webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.28%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.29%20PM%20(1).webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.29%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.30%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.31%20PM%20(1).webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.31%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.32%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.33%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.34%20PM%20(1).webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.34%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.35%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.36%20PM%20(1).webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.36%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.37%20PM%20(1).webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.37%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.38%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.39%20PM%20(1).webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.39%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.42%20PM%20(1).webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.42%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.43%20PM%20(1).webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.43%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.44%20PM.webp",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Video%202026-08-25%20at%2012.12.33%20PM.mp4",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Video%202026-08-25%20at%2012.12.38%20PM.mp4",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Video%202026-08-25%20at%2012.12.40%20PM%20(1).mp4",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Video%202026-08-25%20at%2012.12.40%20PM.mp4",
    "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Video%202026-08-25%20at%2012.12.41%20PM.mp4"
  ]
  ,
  map: {
    latitude: null,
    longitude: null,
    zoom: 14,
    label: "Plantation site",
    embedUrl: "",
    earthUrl: "",
    mapsUrl: "",
  },
  plantation: {
    methodology: "Describe the plantation method, site preparation and ecological rationale.",
    species: [
      { name: "Neem (Azadirachta indica)", role: "Boundary belt" },
    ],
    stewardship: "Describe watering, mulching, protection, replacement and long-term care.",
    monitoring: "Describe geo-tagging, survival audits and reporting frequency.",
  },
  impact: {
    heading: "A living green legacy",
    paragraphs: ["Explain the environmental and social value created by the partnership."],
    metrics: {
      treesPlanted: 0,
      treesAlive: 0,
      areaSqM: 0,
      areaAcres: 0,
      volunteers: 0,
      yearsActive: 0,
      speciesPlanted: 0,
    },
    stats: [
      { value: "0", label: "Saplings planted" },
      { value: "0", label: "Trees alive today" },
    ],
    sdgs: [
      { number: "13", label: "Climate Action" },
      { number: "15", label: "Life on Land" },
      { number: "17", label: "Partnerships for the Goals" },
    ],
  },
  conclusion: "Summarise what this partnership demonstrates and what comes next.",
  thankingNote: "Thank the company, employee volunteers, community and field teams.",
  specialMentions: [],
};

// --- AMAZON INDIA × RENUKIRAN GREEN LEGACY, HYDERABAD -------------------
// Three years of documented growth (2023 → 2025). Each year is a separate
// object inside `timeline`; the same shape is used for every new company.
export const plantationPartners = [
  {
    "slug": "dot-pune-green-legacy",
    "published": true,
    "featured": true,
    "order": 1,
    "status": "Year 1 · Just Planted",
    "company": {
      "name": "DOT Professionals Pvt. Ltd.",
      "shortName": "DOT",
      "logo": "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/dot%2Fdot-logo.svg?alt=media&token=30520064-cc33-4f65-9710-bf93c21f5f4f",
      "website": "https://thedothq.com/",
      "description": [
        "DOT Professionals Pvt. Ltd. believes that meaningful change begins with small, purposeful actions. As part of its commitment to sustainability and climate action, DOT has initiated this project to contribute to greener spaces, improved air quality, enhanced biodiversity, and a healthier environment.",
        "This initiative brings together employees and local community members, turning plantation into an engaging experience of learning, participation, and environmental responsibility. It reflects DOT’s vision of creating lasting impact—planting today for a greener tomorrow."
      ]
    },
    "drive": {
      "title": "Roots of Change – DOT’s Green Legacy, Pune",
      "type": "Corporate Plantation Drive",
      "model": "Diverse native species",
      "theme": "Climate Action & Community Engagement",
      "date": "June 2026",
      "dateISO": "2026-06-20",
      "location": "https://maps.app.goo.gl/szYPKwCVkcnyy5gw6",
      "locations": ["Alandi, Pune", "Pune, Maharashtra"],
      "summary": "A 100-tree plantation initiative in Pune transforming an open land parcel into a thriving green space that contributes to biodiversity, carbon sequestration, and climate resilience.",
      "objective": "To green an open parcel of land, combat climate change through carbon absorption, restore local biodiversity, regenerate soil health, and drive meaningful CSR impact through employee and community engagement.",
      "details": [
        {
          "title": "Inaugural Plantation (2026)",
          "description": "DOT Professionals Pvt. Ltd. launched its Green Legacy with the first major planting drive, bringing together employees and partners to establish the initial 100 saplings.",
          "points": [
            "Comprehensive site preparation including clearing and pit digging",
            "Soil enrichment using well-decomposed organic compost",
            "Planting of 100 native saplings across seven diverse species",
            "Engagement of 25-30 employee volunteers in the inauguration"
          ]
        },
        {
          "title": "Stewardship & Care",
          "description": "Following the initial planting, the project ensures the long-term survival and healthy development of the saplings through dedicated care.",
          "points": [
            "Ongoing maintenance including regular watering and weeding",
            "Strategic distribution of saplings to allow for canopy development",
            "Creation of a balanced mix of flowering, fruit-bearing, and shade trees",
            "Focus on establishing strong root systems during the early growth stage"
          ]
        },
        {
          "title": "Future Monitoring",
          "description": "As a 'living journal', this page will be updated annually to track the progress and impact of the plantation.",
          "points": [
            "Annual updates on growth metrics and tree health",
            "New photographs documenting the site's transformation",
            "Observations on biodiversity and ecological changes",
            "Transparent record of the project's long-term development"
          ]
        }
      ]
    },
    "site": {
      "name": "Sidhabet, Alandi",
      "areaAcres": "0.40 Acres",
      "areaSqM": "1618.743 Sq. M",
      "address": "Sidhabet, Alandi, Pune, Maharashtra (Refer to GPS for location)",
      "microclimate": "Semi-urban open land in Pune with a warm tropical climate, distinct summer and monsoon seasons.",
      "soilHealth": "Improved with comprehensive land preparation, including site clearing, pit digging, soil loosening, weed removal, and the incorporation of well-decomposed organic compost for fertility and moisture retention."
    },
    "coverImage": {
      "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.12%20PM.webp",
      "alt": "DOT Professionals team and volunteers at the plantation site in Pune",
      "position": "center"
    },
    "map": {
      "latitude": 18.6765,
      "longitude": 73.8945,
      "zoom": 15,
      "label": "Sidhabet, Alandi, Pune",
      "embedUrl": "https://maps.google.com/maps?q=18.6765,73.8945&t=k&z=15&output=embed",
      "earthUrl": "https://earth.google.com/earth/d/1iXlypuUqR7246mGCqTcfO3WxRn_smq8d?usp=sharing",
      "mapsUrl": "https://maps.app.goo.gl/z5s9pw8R2ZcsE13b6"
    },
    "plantation": {
      "methodology": "A diverse, climate-suitable plantation approach was adopted, selecting species native to the local soil and climatic conditions of Pune. Trees are strategically distributed to allow adequate space for canopy development and sunlight, creating a balanced mix of flowering, fruit-bearing, and shade trees.",
      "species": [
        {
          "name": "Chafa",
          "role": "Flowering & Canopy Tree"
        },
        {
          "name": "Karanj",
          "role": "Shade & Biodiversity Support"
        },
        {
          "name": "Badam",
          "role": "Canopy & Shade Tree"
        },
        {
          "name": "Chinch",
          "role": "Large Canopy & Soil Stabilisation"
        },
        {
          "name": "Jambhul",
          "role": "Fruit Tree & Wildlife Support"
        },
        {
          "name": "Kanchan",
          "role": "Flowering & Pollinator Support"
        },
        {
          "name": "Peru",
          "role": "Fruit Tree & Biodiversity Support"
        }
      ],
      "stewardship": "Supported by proper pit preparation, soil conditioning, initial watering, and regular maintenance to help saplings establish strong root systems during their early growth stage.",
      "monitoring": "The project focuses on creating the right conditions for long-term survival and healthy development, with progress to be tracked via annual updates."
    },
    "timeline": [
      {
        "year": 2026,
        "phase": "Inauguration",
        "title": "Inaugural Plantation Drive: 100 Saplings Planted",
        "summary": "The plantation drive began with an introduction to the cause, followed by an explanation of proper planting and nurturing techniques. The event was marked by the enthusiasm and cheerful spirit of the volunteers, fostering a genuine sense of ownership and collective environmental responsibility.",
        "date": "20th June 2026",
        "status": "Planted",
        "species": [
          {
            "name": "Chafa",
            "quantity": 40,
            "role": "Flowering & Canopy Tree"
          },
          {
            "name": "Karanj",
            "quantity": 10,
            "role": "Shade & Biodiversity Support"
          },
          {
            "name": "Badam",
            "quantity": 10,
            "role": "Canopy & Shade Tree"
          },
          {
            "name": "Chinch",
            "quantity": 10,
            "role": "Large Canopy & Soil Stabilisation"
          },
          {
            "name": "Jambhul",
            "quantity": 10,
            "role": "Fruit Tree & Wildlife Support"
          },
          {
            "name": "Kanchan",
            "quantity": 10,
            "role": "Flowering & Pollinator Support"
          },
          {
            "name": "Peru",
            "quantity": 10,
            "role": "Fruit Tree & Biodiversity Support"
          }
        ],
        "totalTreesPlantedThisYear": 100,
        "totalVolunteersThisYear": "25 - 30",
        "photos": [
          {
            "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.14%20PM.webp",
            "alt": "Volunteers gathering for the introduction and briefing",
            "caption": "Briefing session before the plantation begins"
          },
          {
            "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.06%20PM.webp",
            "alt": "Team members digging pits and preparing the soil",
            "caption": "Site preparation and pit digging in progress"
          },
          {
            "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.22%20PM.webp",
            "alt": "Volunteers carefully planting a sapling together",
            "caption": "Volunteers planting a sapling with care"
          },
          {
            "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.42%20PM.webp",
            "alt": "Group photo of the enthusiastic DOT team and volunteers",
            "caption": "Group photo of the successful inauguration team"
          }
        ],
        "metrics": {
          "areaCovered": "0.40 Acres",
          "totalSpecies": 7,
          "totalVolunteers": "25 - 30",
          "geoTaggedPits": "100",
          "zonesCreated": "Mixed Green Landscape"
        },
        "note": "The event concluded with the presentation of a certificate to DOT Professionals Pvt. Ltd. in recognition of their contribution."
      }
    ],
    "gallery": [
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.00%20PM.webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.01%20PM.webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.02%20PM%20(1).webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.02%20PM.webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.04%20PM.webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.06%20PM.webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.08%20PM.webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.12%20PM.webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.14%20PM.webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.15%20PM.webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.19%20PM.webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.22%20PM.webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.24%20PM.webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.26%20PM.webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.27%20PM%20(1).webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.27%20PM%20(2).webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.27%20PM.webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.28%20PM%20(1).webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.28%20PM.webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.29%20PM%20(1).webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.29%20PM.webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.30%20PM.webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.31%20PM%20(1).webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.31%20PM.webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.32%20PM.webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.33%20PM.webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.34%20PM%20(1).webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.34%20PM.webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.35%20PM.webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.36%20PM%20(1).webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.36%20PM.webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.37%20PM%20(1).webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.38%20PM.webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.39%20PM%20(1).webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.39%20PM.webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.41%20PM.webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.42%20PM%20(1).webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.42%20PM.webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.43%20PM.webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Image%202026-08-25%20at%2012.12.44%20PM.webp",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Video%202026-08-25%20at%2012.12.33%20PM.mp4",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Video%202026-08-25%20at%2012.12.38%20PM.mp4",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Video%202026-08-25%20at%2012.12.40%20PM%20(1).mp4",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Video%202026-08-25%20at%2012.12.40%20PM.mp4",
      "https://storage.googleapis.com/renukiran-a6410.appspot.com/dot/WhatsApp%20Video%202026-08-25%20at%2012.12.41%20PM.mp4"
    ],
    "impact": {
      "heading": "A New Green Legacy Takes Root in Pune",
      "paragraphs": [
        "The plantation of 100 trees by DOT Professionals Pvt. Ltd. is designed to create measurable environmental value by increasing green cover, supporting biodiversity, improving the ecological condition of the land, and contributing to long-term climate resilience.",
        "This initiative converts DOT’s CSR commitment into a tangible, nature-based intervention with long-term value, establishing a living green asset that will continue generating environmental benefits as the trees mature."
      ],
      "metrics": {
        "treesPlanted": 100,
        "treesAlive": 100,
        "areaSqM": "1618.743 Sq. M",
        "areaAcres": "0.40 Acres",
        "volunteers": "25 - 30",
        "yearsActive": 1,
        "speciesPlanted": 7
      },
      "stats": [
        {
          "value": "100",
          "label": "Saplings planted"
        },
        {
          "value": "7",
          "label": "Native species"
        },
        {
          "value": "25-30",
          "label": "Employee volunteers"
        },
        {
          "value": "1",
          "label": "Year stewardship"
        }
      ],
      "sdgs": [
        {
          "number": "13",
          "label": "Climate Action"
        },
        {
          "number": "15",
          "label": "Life on Land"
        },
        {
          "number": "11",
          "label": "Sustainable Cities and Communities"
        },
        {
          "number": "03",
          "label": "Good Health and Well-Being"
        },
        {
          "number": "12",
          "label": "Responsible Consumption and Production"
        }
      ]
    },
    "conclusion": "The successful inauguration of the Sidhabet Green Legacy Park marks the beginning of a multi-year journey. With the right conditions established for long-term survival, this initiative reflects responsible corporate environmental stewardship and a commitment to a greener future for Pune.",
    "thankingNote": "We extend our sincere appreciation to the DOT Professionals Pvt. Ltd. team, including Mr. Kehul Patel (Founder & Director), Mr. Manoj Kadam (Operations Director), Mr. Raam (Technical Advisor), and Mrs. Shashi Gajiwala (HR Manager), for their valuable support and active involvement. Special thanks to Ms. Vancy Fernandes for her coordination and efforts in contributing to the successful execution of the initiative.",
    "specialMentions": [
      {
        "name": "DOT Professionals Pvt. Ltd. Team",
        "role": "Corporate Partner",
        "note": "For their leadership, commitment, and active participation in making the plantation initiative a success.",
        "url": "https://thedothq.com/",
        "linkLabel": "DOT Website"
      }
    ]
  }
];

export function getPublishedPlantationPartners() {
  return plantationPartners
    .filter((partner) => partner.published)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

export function getPlantationPartnerBySlug(slug) {
  return getPublishedPlantationPartners().find((partner) => partner.slug === slug);
}

export function getPlantationPartnerSummaries() {
  return getPublishedPlantationPartners().map((partner) => ({
    slug: partner.slug,
    companyName: partner.company.name,
    companyLogo: partner.company.logo,
    driveTitle: partner.drive.title,
    driveType: partner.drive.type,
    model: partner.drive.model,
    date: partner.drive.date,
    location: partner.drive.location,
    summary: partner.drive.summary,
    coverImage: partner.coverImage,
    status: partner.status,
    featured: partner.featured,
    yearsActive: partner.timeline?.length || 0,
    site: partner.site
      ? {
        name: partner.site.name,
        areaAcres: partner.site.areaAcres,
        areaSqM: partner.site.areaSqM,
      }
      : null,
    stats: (partner.impact?.stats || []).slice(0, 2),
  }));
}

export function computePlantationPartnerTotals(
  partners = getPublishedPlantationPartners(),
) {
  const locations = new Set();
  let totalTrees = 0;
  let totalArea = 0;
  let totalYears = 0;

  for (const partner of partners) {
    const trees = Number(partner.impact?.metrics?.treesPlanted || 0);
    if (Number.isFinite(trees)) totalTrees += trees;

    const area = Number(partner.impact?.metrics?.areaAcres || 0);
    if (Number.isFinite(area)) totalArea += area;

    totalYears += partner.timeline?.length || 0;

    const projectLocations = partner.drive?.locations?.length
      ? partner.drive.locations
      : [partner.drive?.location];
    projectLocations.filter(Boolean).forEach((location) => locations.add(location));
  }

  return {
    totalCompanies: partners.length,
    totalTrees,
    totalLocations: locations.size,
    totalAreaAcres: totalArea,
    totalYears,
  };
}
