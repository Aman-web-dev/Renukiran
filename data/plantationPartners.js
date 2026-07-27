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
    logo: "",
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
    src: "",
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
        { src: "", alt: "", caption: "" },
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
  gallery: [],
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
    slug: "amazon-india-hyderabad-green-legacy",
    published: true,
    featured: true,
    order: 1,
    status: "Year 2 · Growing",
    company: {
      name: "Amazon India",
      shortName: "Amazon India",
      logo: img("WhatsApp%20Image%202026-03-06%20at%2012.45.18.jpeg"),
      website: "https://www.aboutamazon.in/sustainability",
      description: [
        "Amazon India is committed to The Climate Pledge — a path to net-zero carbon by 2040. In India, the company invests in sustainability programmes that include renewable energy, packaging innovation and large-scale tree plantation to sequester carbon and restore green cover around its operations and communities.",
        "In partnership with Renukiran Welfare Foundation, Amazon India employees are co-creating a living, multi-year green legacy on a dedicated site on the outskirts of Hyderabad. Every year of the project is documented publicly on this page — with new species, new photographs and updated growth metrics — so that anyone can track the legacy as it grows.",
      ],
    },
    drive: {
      title: "Amazon India × Renukiran Green Legacy, Hyderabad",
      type: "Multi-year CSR Plantation Drive",
      model: "Native species + Miyawaki clusters",
      theme: "Climate Action & Biodiversity",
      date: "Monsoon 2023 — ongoing",
      dateISO: "2023-08-12",
      location: "Mamidipally, Ranga Reddy, Telangana",
      locations: ["Mamidipally, Hyderabad", "Ranga Reddy District, Telangana"],
      summary:
        "A multi-year, geo-tagged green legacy of 6.5 acres on the outskirts of Hyderabad — established with 2,000+ native saplings, expanded with year-round stewardship and audited each monsoon. This page is updated every year with new species, new photographs and the latest growth data.",
      objective:
        "Build a resilient, ecologically diverse green space that sequesters carbon, supports biodiversity and provides Amazon employees with a meaningful, recurring engagement opportunity — and to document the journey transparently for stakeholders year after year.",
      details: [
        {
          title: "Inaugural monsoon drive (2023)",
          description:
            "Amazon India employees came together for the first planting day, supported by Renukiran's field team and the local Mamidipally community.",
          points: [
            "Site assessment and pit preparation across 6.5 acres",
            "Planting of 2,000+ native saplings in four zones",
            "Engagement of 180+ employee volunteers across two batches",
            "Geo-tagged record of every planting pocket for transparency",
          ],
        },
        {
          title: "Year-round stewardship",
          description:
            "After the first monsoon, the Renukiran team established a year-round schedule of watering, mulching and protection — the work that turns a single drive into a legacy.",
          points: [
            "Drip-line installation across the boundary belt",
            "Quarterly survival audits with photo evidence",
            "Local women's self-help group engaged for daily rounds",
            "Fencing, signage and grazing protection",
          ],
        },
        {
          title: "Annual public update",
          description:
            "Every year we publish new photographs, growth metrics and species updates on this page so stakeholders can see the legacy grow — not just the day it was planted.",
          points: [
            "Annual height, girth and survival measurements",
            "Bloom, fruit and biodiversity observations",
            "Public access to all records and photographs",
            "Year-on-year expansion planning",
          ],
        },
      ],
    },
    site: {
      name: "Mamidipally Green Legacy Park",
      areaAcres: 6.5,
      areaSqM: 26300,
      address:
        "Survey No. 184, Mamidipally Village, Ranga Reddy District, Telangana 501401",
      microclimate:
        "Semi-arid Deccan plateau; laterite pockets with good drainage. Hot summers, monsoonal July–September.",
      soilHealth:
        "Improved with 80 tonnes of organic compost, mulching rounds and bio-fertilizer application; mycorrhizal treatment on new pits.",
    },
    coverImage: {
      src: img("WhatsApp%20Image%202026-03-06%20at%2012.45.18.jpeg"),
      alt: "Amazon India employees planting native saplings on the inaugural plantation day in Hyderabad",
      position: "center",
    },
    map: {
      latitude: 17.2312,
      longitude: 78.3828,
      zoom: 14,
      label: "Mamidipally Green Legacy Park, Hyderabad",
      embedUrl:
        "https://maps.google.com/maps?q=17.2312,78.3828&t=k&z=14&output=embed",
      earthUrl: "https://earth.google.com/web/search/Mamidipally,+Telangana",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=17.2312%2C78.3828",
    },
    plantation: {
      methodology:
        "The site is divided into four zones: a native-species belt along the boundary, a central Miyawaki cluster, a fruit-orchard zone and a pollinator-friendly understory layer. Pit preparation, mulching and drip irrigation are standardised across all zones, and every pit is geo-tagged at planting for future audits.",
      species: [
        { name: "Neem (Azadirachta indica)", role: "Boundary belt" },
        { name: "Peepal (Ficus religiosa)", role: "Sacred canopy" },
        { name: "Banyan (Ficus benghalensis)", role: "Landmark canopy" },
        { name: "Teak (Tectona grandis)", role: "Timber belt" },
        { name: "Mango (Mangifera indica)", role: "Fruit orchard" },
        { name: "Amla (Phyllanthus emblica)", role: "Fruit orchard" },
        { name: "Gulmohar (Delonix regia)", role: "Pollinator support" },
        { name: "Mahua (Madhuca longifolia)", role: "Pollinator belt" },
        { name: "Bamboo (Bambusoideae)", role: "Soil binding" },
        { name: "Sissoo (Dalbergia sissoo)", role: "Windbreak" },
        { name: "Kadamb (Neolamarckia cadamba)", role: "Canopy gap-filler" },
      ],
      stewardship:
        "A year-round schedule of watering, mulching, weeding, de-suckering and pest monitoring is maintained by Renukiran's field team in partnership with a local women's self-help group. Fencing and signage protect the site from grazing. Replacement saplings are kept ready for the gap-filling drive every monsoon.",
      monitoring:
        "All zones are geo-tagged at pit level. Quarterly audits record survival, height, girth, bloom and biodiversity observations. Every audit is photographed and the records are published on this page so the project's progress is independently verifiable.",
    },
    timeline: [
      {
        year: 2023,
        phase: "Inauguration",
        title: "2,000+ native saplings planted by 180+ Amazon volunteers",
        summary:
          "The first Amazon India × Renukiran plantation day took place during the 2023 monsoon. Volunteers planted a mixed native-species belt and a central Miyawaki cluster, with every pit geo-tagged for future audits.",
        date: "12 August 2023",
        status: "Planted",
        species: [
          { name: "Neem (Azadirachta indica)", quantity: 600, role: "Boundary belt" },
          { name: "Teak (Tectona grandis)", quantity: 350, role: "Timber belt" },
          { name: "Mango (Mangifera indica)", quantity: 250, role: "Fruit orchard" },
          { name: "Amla (Phyllanthus emblica)", quantity: 200, role: "Fruit orchard" },
          { name: "Peepal (Ficus religiosa)", quantity: 200, role: "Sacred canopy" },
          { name: "Gulmohar (Delonix regia)", quantity: 150, role: "Pollinator support" },
          { name: "Banyan (Ficus benghalensis)", quantity: 100, role: "Landmark canopy" },
          { name: "Mahua (Madhuca longifolia)", quantity: 100, role: "Pollinator belt" },
          { name: "Bamboo (Bambusoideae)", quantity: 50, role: "Soil binding" },
        ],
        totalTreesPlantedThisYear: 2000,
        totalVolunteersThisYear: 180,
        photos: [
          {
            src: img("WhatsApp%20Image%202026-03-06%20at%2012.45.20.jpeg"),
            alt: "Amazon India volunteers at the briefing tent, August 2023",
            caption: "Welcome tent and briefing on planting day",
          },
          {
            src: img("WhatsApp%20Image%202026-03-06%20at%2012.45.22.jpeg"),
            alt: "Amazon team planting a Neem sapling together",
            caption: "Planting the first Neem saplings of the day",
          },
          {
            src: img("WhatsApp%20Image%202026-03-06%20at%2012.45.24.jpeg"),
            alt: "Miyawaki cluster being prepared by the field team",
            caption: "Preparing the central Miyawaki cluster",
          },
          {
            src: img("WhatsApp%20Image%202026-03-06%20at%2012.45.23.jpeg"),
            alt: "Group photo with the inaugural batch of Amazon volunteers",
            caption: "Group photo with the inaugural batch of volunteers",
          },
        ],
        metrics: {
          areaCovered: "6.5 acres",
          totalSpecies: 9,
          totalVolunteers: 180,
          geoTaggedPits: 2050,
          zonesCreated: 4,
        },
        note: "Planting was completed across two consecutive weekends to manage volunteer batches safely.",
      },
      {
        year: 2024,
        phase: "Survival audit & gap-filling",
        title: "Year-1 survival audit and gap-filling drive",
        summary:
          "The first survival audit confirmed a 92% sapling survival rate across the site. The Renukiran field team led a gap-filling round in late 2024, replacing lost saplings and adding a fresh pollinator-support belt.",
        date: "August 2024",
        status: "Growing",
        species: [
          { name: "Sissoo (Dalbergia sissoo)", quantity: 60, role: "Windbreak extension" },
          { name: "Neem (Azadirachta indica)", quantity: 50, role: "Boundary gap-filling" },
          { name: "Mahua (Madhuca longifolia)", quantity: 40, role: "Pollinator belt" },
          { name: "Peepal (Ficus religiosa)", quantity: 30, role: "Sacred canopy gap-filling" },
        ],
        totalTreesPlantedThisYear: 180,
        totalVolunteersThisYear: 60,
        photos: [
          {
            src: img("WhatsApp%20Image%202026-03-06%20at%2012.45.21.jpeg"),
            alt: "Field team conducting the Year-1 survival audit",
            caption: "Survival audit walk with the field team",
          },
          {
            src: img("WhatsApp%20Image%202026-03-06%20at%2012.45.25.jpeg"),
            alt: "Gap-filling drive in progress, 2024",
            caption: "Gap-filling drive — replacing lost saplings",
          },
          {
            src: img("WhatsApp%20Image%202026-03-06%20at%2012.45.27.jpeg"),
            alt: "First monsoon growth comparison, 2024",
            caption: "First monsoon growth comparison",
          },
          {
            src: img("WhatsApp%20Image%202026-03-06%20at%2012.45.19.jpeg"),
            alt: "New pollinator-support belt, 2024",
            caption: "New pollinator-support belt added this year",
          },
        ],
        metrics: {
          survivalRate: "92%",
          treesAlive: 1840,
          averageHeight: "1.4 m",
          heightGain: "+1.1 m since planting",
          newPits: 180,
          carbonSequesteredEstimateKg: "≈ 4,200 kg / yr",
        },
        note: "Boundary drip-line commissioned; community women's self-help group engaged for daily watering rounds.",
      },
      {
        year: 2025,
        phase: "Year-2 growth assessment",
        title: "Year-2 growth: canopy closure, first flowers, biodiversity returns",
        summary:
          "By the second monsoon, the boundary belt has formed a continuous canopy. Mango and Amla have produced their first flowers; bird and pollinator counts have doubled. Year-3 planning is underway with a community-forest expansion of 2 acres.",
        date: "September 2025",
        status: "Growing",
        species: [
          { name: "Kadamb (Neolamarckia cadamba)", quantity: 80, role: "Canopy gap-filler" },
        ],
        totalTreesPlantedThisYear: 80,
        totalVolunteersThisYear: 40,
        photos: [
          {
            src: img("WhatsApp%20Image%202026-03-06%20at%2012.45.31.jpeg"),
            alt: "Year-2 canopy closure along the boundary belt",
            caption: "Year-2 canopy closure along the boundary",
          },
          {
            src: img("WhatsApp%20Image%202026-03-06%20at%2012.45.30.jpeg"),
            alt: "Mango first flowering, 2025",
            caption: "First flowering on the mango trees",
          },
          {
            src: img("WhatsApp%20Image%202026-03-06%20at%2012.45.32.jpeg"),
            alt: "Biodiversity returning to the site, 2025",
            caption: "Biodiversity returning to the site",
          },
          {
            src: img("WhatsApp%20Image%202026-03-06%20at%2016.15.19.jpeg"),
            alt: "Adjacent pond restored for groundwater recharge",
            caption: "Adjacent pond restored for groundwater recharge",
          },
        ],
        metrics: {
          survivalRate: "88%",
          treesAlive: 1919,
          averageHeight: "2.6 m",
          heightGain: "+1.2 m in year 2",
          canopyCover: "≈ 4.2 acres",
          biodiversityIndex: "2.1× the baseline",
          carbonSequesteredEstimateKg: "≈ 8,800 kg / yr (cumulative)",
        },
        note: "Year-3 expansion plan: +2 acres community forest, +500 mixed-species saplings, pollinator hotel.",
      },
    ],
    gallery: [
      {
        src: img("WhatsApp%20Image%202026-03-06%20at%2012.45.18.jpeg"),
        alt: "Aerial view of the Green Legacy Park during the planting day",
        caption: "The park on planting day",
      },
      {
        src: img("WhatsApp%20Image%202026-03-06%20at%2012.45.26.jpeg"),
        alt: "Field team on a documentation walk",
        caption: "Field team on a documentation walk",
      },
      {
        src: img("WhatsApp%20Image%202026-03-06%20at%2012.45.28.jpeg"),
        alt: "Pollinator garden, 2024",
        caption: "Pollinator garden — Year 1",
      },
      {
        src: img("WhatsApp%20Image%202026-03-06%20at%2016.21.50.jpeg"),
        alt: "Community cleaning drive around the site",
        caption: "Community cleaning drive around the site",
      },
    ],
    impact: {
      heading: "A growing green legacy — tracked year after year",
      paragraphs: [
        "The Amazon India × Renukiran plantation has grown from a single monsoon day into a year-on-year living legacy. We measure success not just in trees planted, but in trees that survive, grow, flower and become habitat.",
        "Every annual update on this page is a public commitment: transparent species counts, geo-tagged records, growth measurements and field photographs. Future years will continue to add new species, expand the park and invite more employees to participate.",
      ],
      metrics: {
        treesPlanted: 2180,
        treesAlive: 1919,
        areaSqM: 26300,
        areaAcres: 6.5,
        volunteers: 280,
        yearsActive: 2,
        speciesPlanted: 11,
      },
      stats: [
        { value: "2,180", label: "Saplings planted to date" },
        { value: "1,919", label: "Trees alive today" },
        { value: "6.5 acres", label: "Area under restoration" },
        { value: "11", label: "Native species planted" },
        { value: "280+", label: "Employee volunteers" },
        { value: "2 yrs", label: "Stewardship ongoing" },
      ],
      sdgs: [
        { number: "13", label: "Climate Action" },
        { number: "15", label: "Life on Land" },
        { number: "06", label: "Clean Water & Sanitation" },
        { number: "11", label: "Sustainable Cities and Communities" },
        { number: "17", label: "Partnerships for the Goals" },
      ],
    },
    conclusion:
      "Two monsoons in, the Mamidipally Green Legacy Park is already a recognisable, thriving green space — and a model for how a single corporate plantation day can become a multi-year, multi-species, multi-stakeholder climate-action programme. Year-3 planning is already underway with a 2-acre community-forest expansion.",
    thankingNote:
      "Renukiran Welfare Foundation thanks Amazon India for backing a multi-year stewardship commitment, the 280+ employee volunteers who showed up rain or shine, the Mamidipally community and the local women's self-help group who protect the site, and the Renukiran field team for the rigorous, year-on-year documentation that keeps this legacy honest.",
    specialMentions: [
      {
        name: "Amazon India CSR & Sustainability Team",
        role: "Programme partner",
        note: "For funding, multi-year commitment and mobilising employees across two batches.",
        url: "https://www.aboutamazon.in/sustainability",
        linkLabel: "Amazon India sustainability",
      },
      {
        name: "Renukiran Field Team — Hyderabad",
        role: "On-ground implementation",
        note: "For year-round stewardship, quarterly audits and the data that powers this page.",
      },
      {
        name: "Mamidipally Community & Women's Self-Help Group",
        role: "Local stewardship partners",
        note: "For daily protection, watering rounds and biodiversity observations.",
      },
    ],
  },
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
