// Central content source for every corporate impact-partner page.
//
// To publish another client:
// 1. Duplicate an object in `impactPartners` and give it a unique, URL-safe `slug`.
// 2. Replace the copy, coordinates, logo and image URLs (Firebase Storage URLs work).
// 3. Keep `published: true`. The listing, dynamic route, metadata and static build params
//    are all generated from this file—no new page component is required.

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
  },
  {
    "slug": "koshiqa-green-restoration",
    "published": true,
    "featured": true,
    "order": 3,
    "client": {
      "name": "Koshiqa",
      "shortName": "Koshiqa",
      "logo": "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/koshiqa_impact%2Flogo%2FKoshiqa-Logo.png?alt=media&token=placeholder-uuid",
      "website": "#",
      "description": [
        "Koshiqa partnered with Renukiran Welfare Foundation to support environmental sustainability through a community-focused tree plantation initiative.",
        "The collaboration reflects a shared commitment to creating greener communities, strengthening local ecosystems, and encouraging collective action towards a more sustainable future. Through this initiative, Koshiqa contributed to a meaningful on-ground environmental intervention while creating an opportunity for employees and community members to participate in climate action."
      ]
    },
    "activity": {
      "title": "Tree Plantation & Green Cover Restoration",
      "type": "Corporate Partnership / Employee Engagement Program",
      "theme": "Environment & Climate Action",
      "date": "10 May, 2026",
      "dateISO": "2026-05-10",
      "location": "Ram Singh Pura Vatika, Jaipur, Rajasthan",
      "locations": ["Ram Singh Pura Vatika, Jaipur"],
      "summary": "A hands-on plantation initiative where Koshiqa employees and volunteers came together with Renukiran Welfare Foundation to plant and nurture trees, contributing to increased green cover and a healthier local environment.",
      "objective": "To contribute to environmental restoration by increasing green cover, promoting responsible environmental practices, and encouraging individuals and communities to take an active role in protecting nature.",
      "details": [
        {
          "title": "Tree Plantation",
          "description": "Volunteers participated in the plantation of saplings across the identified location, helping create a greener and healthier environment.",
          "points": [
            "Planted 8080 saplings at the identified site.",
            "Selected plantation areas based on local environmental requirements.",
            "Encouraged responsible planting and care of saplings.",
            "Contributed to long-term green cover creation within the community."
          ]
        },
        {
          "title": "Employee Volunteering & Collaboration",
          "description": "The initiative provided Koshiqa employees with an opportunity to step beyond the workplace and participate directly in an environmental cause.",
          "points": [
            "Employees worked together during the plantation activity.",
            "Strengthened team collaboration through a shared environmental goal.",
            "Created meaningful employee engagement through hands-on community service.",
            "Reinforced the importance of individual and collective responsibility towards nature."
          ]
        },
        {
          "title": "Building Environmental Awareness",
          "description": "Beyond planting trees, the initiative aimed to encourage a broader culture of environmental responsibility.",
          "points": [
            "Promoted awareness around the importance of trees and green spaces.",
            "Encouraged sustainable and environmentally conscious practices.",
            "Highlighted the role of communities and corporates in climate action.",
            "Inspired participants to become advocates for greener surroundings."
          ]
        }
      ]
    },
    "coverImage": {
      "src": "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/new-company-details%2FKOSHIQA%2010%20MAY%202026%2C%20PLANTATION%2FCopy%20of%20IMG_20260510_082319042_HDR.webp?alt=media&token=baa650b7-7364-484b-8e99-3537483800e3",
      "alt": "Koshiqa employees and volunteers planting saplings in Jaipur",
      "position": "center"
    },
    "gallery": [
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/KOSHIQA%2010%20MAY%202026,%20PLANTATION/Copy%20of%20IMG_20260509_132854700.webp",
        "alt": "Koshiqa volunteers gathering at the plantation site in Jaipur",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/KOSHIQA%2010%20MAY%202026,%20PLANTATION/Copy%20of%20IMG_20260510_075614304_HDR.webp",
        "alt": "Volunteers preparing soil for planting saplings",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/KOSHIQA%2010%20MAY%202026,%20PLANTATION/Copy%20of%20IMG_20260510_080637172_HDR.webp",
        "alt": "Teamwork in planting a sapling",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/KOSHIQA%2010%20MAY%202026,%20PLANTATION/Copy%20of%20IMG_20260510_081328114_HDR.webp",
        "alt": "Koshiqa employee planting a young tree",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/KOSHIQA%2010%20MAY%202026,%20PLANTATION/Copy%20of%20IMG_20260510_081335698_HDR.webp",
        "alt": "Volunteers carefully placing the sapling in the soil",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/KOSHIQA%2010%20MAY%202026,%20PLANTATION/Copy%20of%20IMG_20260510_081415165_HDR.webp",
        "alt": "Community members joining the plantation drive",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/KOSHIQA%2010%20MAY%202026,%20PLANTATION/Copy%20of%20IMG_20260510_081819543_HDR.webp",
        "alt": "Rows of freshly planted saplings across the site",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/KOSHIQA%2010%20MAY%202026,%20PLANTATION/Copy%20of%20IMG_20260510_082319042_HDR.webp",
        "alt": "Volunteers watering newly planted saplings",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/KOSHIQA%2010%20MAY%202026,%20PLANTATION/Copy%20of%20IMG_20260510_082408737_HDR.webp",
        "alt": "Koshiqa team smiling during the plantation activity",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/KOSHIQA%2010%20MAY%202026,%20PLANTATION/Copy%20of%20IMG_20260510_082459764_HDR.webp",
        "alt": "Volunteers working together to nurture the plantation site",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/KOSHIQA%2010%20MAY%202026,%20PLANTATION/Copy%20of%20IMG_20260510_085112180_HDR.webp",
        "alt": "Final overview of the planted site at Ram Singh Pura Vatika",
        "caption": "."
      }
    ],
    "map": {
      "latitude": 26.8867,
      "longitude": 75.7846,
      "zoom": 15,
      "label": "Ram Singh Pura Vatika, Jaipur",
      "embedUrl": "https://maps.google.com/maps?q=Ram+Singh+Pura+Vatika,+Jaipur&t=m&z=15&output=embed",
      "earthUrl": "https://earth.google.com/web/search/Ram+Singh+Pura+Vatika,+Jaipur",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Ram+Singh+Pura+Vatika%2C+Jaipur"
    },
    "impact": {
      "heading": "Growing Green. Creating Change.",
      "paragraphs": [
        "The plantation initiative brought together corporate volunteers and the community around a simple but meaningful environmental action — planting trees for a healthier and more sustainable tomorrow.",
        "Each sapling planted represents a long-term contribution towards increasing green cover, improving local environmental conditions, and creating greener spaces for communities. Beyond the physical impact, the initiative strengthened environmental consciousness among participating employees and demonstrated how corporate participation can translate into meaningful action on the ground.",
        "Through collective effort, Koshiqa and Renukiran Welfare Foundation contributed to a greener community while reinforcing the importance of sustained environmental stewardship."
      ],
      "stats": [
        { "value": "8080", "label": "Saplings Planted" },
        { "value": "25", "label": "Volunteers Engaged" },
        { "value": "125", "label": "Volunteer Hours" },
        { "value": "1", "label": "Plantation Site Covered" }
      ],
      "sdgs": [
        { "number": "13", "label": "Climate Action" },
        { "number": "15", "label": "Life on Land" },
        { "number": "11", "label": "Sustainable Cities and Communities" },
        { "number": "17", "label": "Partnerships for the Goals" }
      ]
    },
    "conclusion": "Through this plantation initiative, Koshiqa and Renukiran Welfare Foundation demonstrated that meaningful climate action can begin with simple, collective steps. The initiative goes beyond planting saplings — it is about nurturing greener communities, encouraging environmental responsibility, and creating a lasting culture of sustainability. Together, the partnership represents a shared commitment to building a healthier and greener future for generations to come.",
    "thankingNote": "Renukiran Welfare Foundation expresses its sincere gratitude to Koshiqa and all the participating employee volunteers for their enthusiastic involvement and commitment towards environmental sustainability. Your participation helped turn a plantation drive into a meaningful collective action for the environment. We also thank the local community and supporting stakeholders for their cooperation in making the initiative possible.",
    "specialMentions": [
      {
        "name": "Koshiqa Employee Volunteers",
        "role": "Corporate Volunteer Team",
        "note": "For their enthusiastic participation, teamwork, and contribution towards creating greener communities."
      },
      {
        "name": "Renukiran Welfare Foundation",
        "role": "Implementation Partner",
        "note": "For project planning, plantation coordination, volunteer engagement, and on-ground execution of the initiative."
      },
      {
        "name": "Local Community / Plantation Site Partner",
        "role": "Local Support",
        "note": "For providing the plantation site and supporting the implementation and nurturing of the plantation activity."
      }
    ]
  },
  {
    "slug": "techno-electric-lake-restoration",
    "published": true,
    "featured": true,
    "order": 4,
    "client": {
      "name": "Techno Electric & Engineering Company Limited",
      "shortName": "Techno Electric",
      "logo": "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/techno_electric_impact%2Flogo%2FTechno-Electric-Logo.png?alt=media&token=placeholder-uuid",
      "website": "#",
      "description": [
        "Techno Electric & Engineering Company Limited partnered with Renukiran Welfare Foundation to drive meaningful environmental action through a lake cleaning and waterbody restoration initiative.",
        "The collaboration reflects a shared commitment towards environmental sustainability, cleaner community spaces and responsible stewardship of natural resources. Through employee participation and hands-on action, the initiative brought corporate volunteers together to contribute towards the restoration and upkeep of a local waterbody."
      ]
    },
    "activity": {
      "title": "Lake Cleaning & Waterbody Restoration Drive",
      "type": "Corporate Partnership / Employee Engagement Program",
      "theme": "Environment & Climate Action",
      "date": "05-06-2026",
      "dateISO": "2026-06-05",
      "location": "Kolkata, West Bengal",
      "locations": ["Kolkata"],
      "summary": "A hands-on lake cleaning drive where Techno Electric & Engineering Company Limited employees joined Renukiran Welfare Foundation to remove waste and litter from the lake surroundings, helping restore the cleanliness and environmental value of the waterbody.",
      "objective": "To improve the cleanliness of the lake and its surrounding area, promote responsible waste management, and encourage communities and employees to take collective responsibility for protecting local natural resources.",
      "details": [
        {
          "title": "Lake & Surrounding Area Cleanup",
          "description": "Volunteers actively participated in cleaning the identified lake area and its surroundings, removing accumulated waste and helping restore the site.",
          "points": [
            "Collected and removed litter and waste from the designated areas.",
            "Cleaned the surroundings of the waterbody.",
            "Helped improve the overall cleanliness and appearance of the site.",
            "Promoted responsible disposal of waste collected during the activity."
          ]
        },
        {
          "title": "Employee Volunteering & Collective Action",
          "description": "The initiative gave Techno Electric & Engineering Company Limited employees an opportunity to contribute directly to an environmental cause through meaningful on-ground volunteering.",
          "points": [
            "Employees participated in a hands-on environmental activity.",
            "Encouraged teamwork and collective responsibility.",
            "Created meaningful engagement beyond the workplace.",
            "Demonstrated how employee volunteering can contribute to visible community outcomes."
          ]
        },
        {
          "title": "Creating Awareness Around Waterbody Conservation",
          "description": "The drive went beyond cleaning a single location — it highlighted the importance of protecting and maintaining local water resources.",
          "points": [
            "Promoted awareness about keeping waterbodies free from waste.",
            "Encouraged responsible waste disposal practices.",
            "Highlighted the importance of protecting local ecosystems.",
            "Reinforced the role of corporates and communities in environmental conservation."
          ]
        }
      ]
    },
    "coverImage": {
      "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/Techno%20Electric%20&%20Engineering%20Company%20Limited,%20KOLKATA/WhatsApp%20Image%202026-07-01%20at%203.27.45%20PM%20(2).webp",
      "alt": "Techno Electric employees during a lake cleanup drive in Kolkata",
      "position": "center"
    },
    "gallery": [
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/Techno%20Electric%20&%20Engineering%20Company%20Limited,%20KOLKATA/WhatsApp%20Image%202026-07-01%20at%203.27.45%20PM%20(2).webp",
        "alt": "Techno Electric employees gathered at the lake cleanup site in Kolkata",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/Techno%20Electric%20&%20Engineering%20Company%20Limited,%20KOLKATA/WhatsApp%20Image%202026-07-01%20at%203.27.48%20PM%20(2).webp",
        "alt": "Volunteers removing waste from the lakebank",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/Techno%20Electric%20&%20Engineering%20Company%20Limited,%20KOLKATA/WhatsApp%20Image%202026-07-01%20at%203.27.49%20PM%20(1).webp",
        "alt": "Teamwork in collecting litter from the surroundings",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/Techno%20Electric%20&%20Engineering%20Company%20Limited,%20KOLKATA/WhatsApp%20Image%202026-07-01%20at%203.27.54%20PM%20(1).webp",
        "alt": "Volunteers picking up litter along the lake edge",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/Techno%20Electric%20&%20Engineering%20Company%20Limited,%20KOLKATA/WhatsApp%20Image%202026-07-01%20at%203.27.54%20PM%20(8).webp",
        "alt": "Employees collecting waste into bags during the cleanup",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/Techno%20Electric%20&%20Engineering%20Company%20Limited,%20KOLKATA/WhatsApp%20Image%202026-07-01%20at%203.27.54%20PM%20(10).webp",
        "alt": "Filled waste bags ready for disposal",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/Techno%20Electric%20&%20Engineering%20Company%20Limited,%20KOLKATA/WhatsApp%20Image%202026-07-01%20at%203.27.54%20PM%20(11).webp",
        "alt": "Volunteers interacting and smiling during the cleanup",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/Techno%20Electric%20&%20Engineering%20Company%20Limited,%20KOLKATA/WhatsApp%20Image%202026-07-01%20at%203.27.54%20PM%20(19).webp",
        "alt": "Employees working together to clear the lakebank area",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/Techno%20Electric%20&%20Engineering%20Company%20Limited,%20KOLKATA/WhatsApp%20Image%202026-07-01%20at%203.27.54%20PM%20(30).webp",
        "alt": "Before and after visual representation of the cleaned area",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/Techno%20Electric%20&%20Engineering%20Company%20Limited,%20KOLKATA/WhatsApp%20Image%202026-07-01%20at%203.27.54%20PM%20(44).webp",
        "alt": "Group photo of Techno Electric volunteers at the lake cleanup site",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/Techno%20Electric%20&%20Engineering%20Company%20Limited,%20KOLKATA/WhatsApp%20Image%202026-07-01%20at%203.27.54%20PM%20(45).webp",
        "alt": "Volunteers posing with the collected waste for proper disposal",
        "caption": "."
      }
    ],
    "map": {
      "latitude": 22.5726,
      "longitude": 88.3639,
      "zoom": 14,
      "label": "Lake Restoration Site, Kolkata",
      "embedUrl": "https://maps.google.com/maps?q=Kolkata&t=m&z=14&output=embed",
      "earthUrl": "https://earth.google.com/web/search/Kolkata",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Kolkata"
    },
    "impact": {
      "heading": "Cleaning Today. Protecting Tomorrow.",
      "paragraphs": [
        "A clean waterbody is more than a cleaner community space. It supports local biodiversity, strengthens the surrounding ecosystem and contributes to a healthier environment for communities.",
        "Through this initiative, Techno Electric & Engineering Company Limited employees came together to address an environmental concern through direct, collective action. The lake cleaning drive helped improve the cleanliness of the identified waterbody and its surroundings while creating greater awareness about responsible waste management and the need to protect natural resources.",
        "The initiative also demonstrated the value of employee volunteering in creating visible environmental impact — one community space at a time."
      ],
      "stats": [
        {
          "value": "15",
          "label": "Employee Volunteers Engaged"
        },
        {
          "value": "60",
          "label": "Volunteer Hours"
        },
        {
          "value": "[Insert Value]",
          "label": "Kg / Bags of Waste Collected"
        },
        {
          "value": "[Insert Value]",
          "label": "Sq. Ft. / Area Cleaned"
        }
      ],
      "sdgs": [
        {
          "number": "06",
          "label": "Clean Water and Sanitation"
        },
        {
          "number": "11",
          "label": "Sustainable Cities and Communities"
        },
        {
          "number": "12",
          "label": "Responsible Consumption and Production"
        },
        {
          "number": "13",
          "label": "Climate Action"
        },
        {
          "number": "15",
          "label": "Life on Land"
        },
        {
          "number": "17",
          "label": "Partnerships for the Goals"
        }
      ]
    },
    "conclusion": "The Lake Cleaning & Waterbody Restoration Drive demonstrated how collective action can create meaningful environmental change. Through the partnership between Techno Electric & Engineering Company Limited and Renukiran Welfare Foundation, employees transformed their commitment to sustainability into tangible action on the ground. The initiative was not simply about cleaning a lake — it was about encouraging responsible citizenship, protecting natural resources and inspiring continued action towards cleaner and healthier communities.",
    "thankingNote": "Renukiran Welfare Foundation sincerely thanks Techno Electric & Engineering Company Limited and its employee volunteers for their enthusiastic participation and commitment towards environmental sustainability. Their time, teamwork and willingness to contribute on the ground helped turn a simple cleanup activity into a meaningful environmental intervention. We also extend our gratitude to the local stakeholders and community members whose support contributed to the successful implementation of the initiative.",
    "specialMentions": [
      {
        "name": "Techno Electric & Engineering Company Limited",
        "role": "Corporate Partner",
        "note": "For supporting environmental sustainability and enabling employees to participate in meaningful community action."
      },
      {
        "name": "Employee Volunteers",
        "role": "Environmental Champions",
        "note": "For their active participation, teamwork and contribution towards restoring a cleaner waterbody and surrounding environment."
      },
      {
        "name": "Renukiran Welfare Foundation",
        "role": "Implementation Partner",
        "note": "For project planning, volunteer coordination, on-ground implementation and documentation of the initiative."
      },
      {
        "name": "Local Community / Site Stakeholders",
        "role": "Community Support",
        "note": "For supporting the lake cleaning initiative and contributing towards the upkeep of the local environment."
      }
    ]
  },
  {
    "slug": "infosys-stationery-drive",
    "published": true,
    "featured": true,
    "order": 5,
    "client": {
      "name": "Infosys",
      "shortName": "Infosys",
      "logo": "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/infosys_impact%2Flogo%2FInfosys-Logo.png?alt=media&token=placeholder-uuid",
      "website": "https://www.infosys.com/",
      "description": [
        "Infosys partnered with Renukiran Welfare Foundation to support children’s education through a meaningful employee volunteering initiative focused on preparing stationery kits for students from underserved communities.",
        "The collaboration reflects a shared commitment towards creating equitable learning opportunities and enabling children with essential educational resources. Through hands-on volunteering, Infosys employees contributed their time and effort towards making learning more accessible and engaging for children."
      ]
    },
    "activity": {
      "title": "Stationery Kit Assembly Drive",
      "type": "Corporate Employee Engagement Program",
      "theme": "Education & Community Development",
      "date": "24 June 2026",
      "dateISO": "2026-06-24",
      "location": "Infosys Campus, Chandigarh",
      "locations": ["Chandigarh"],
      "summary": "A collaborative stationery kit assembly activity where Infosys employees came together to organise, pack and prepare educational kits that would subsequently reach children in need.",
      "objective": "To support children from underserved communities with essential learning materials while creating an engaging employee volunteering experience centred around education and social impact.",
      "details": [
        {
          "title": "Stationery Kit Assembly",
          "description": "Volunteers worked together to assemble and organise stationery kits, carefully preparing each kit for distribution to children.",
          "points": [
            "Sorted and organised stationery materials.",
            "Assembled complete educational kits.",
            "Packed the kits systematically for distribution.",
            "Ensured each kit contained essential learning supplies.",
            "Prepared the kits with care and attention to detail."
          ]
        },
        {
          "title": "Employee Volunteering & Teamwork",
          "description": "The activity created an opportunity for Infosys employees to contribute directly to an education-focused cause.",
          "points": [
            "Employees participated in a hands-on volunteering activity.",
            "Encouraged teamwork and collaboration.",
            "Turned a simple assembly activity into a meaningful social contribution.",
            "Strengthened employee engagement through purpose-driven action."
          ]
        },
        {
          "title": "Supporting Children's Education",
          "description": "A stationery kit may seem simple, but for a child, access to basic learning materials can make everyday education more comfortable and engaging.",
          "points": [
            "Helped bridge gaps in access to essential educational resources.",
            "Ensured that children receive materials that support their classroom learning.",
            "Contributed towards making learning more accessible for children from underserved communities."
          ]
        }
      ]
    },
    "coverImage": {
      "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/STATIONARY%20KIT%20CHANDIGARH/WhatsApp%20Image%202026-07-08%20at%2012.54.08%20PM%20(1)%20(1).webp",
      "alt": "Infosys employees assembling stationery kits at their campus",
      "position": "center"
    },
    "gallery": [
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/23-06-2026%20STATIONARY%20KIT%20MOHALI/IMG_4694.JPG.webp",
        "alt": "Infosys employees organising stationery supplies at Mohali",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/23-06-2026%20STATIONARY%20KIT%20MOHALI/IMG_4695.JPG.webp",
        "alt": "Volunteers sorting stationery items during the kit assembly drive",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/23-06-2026%20STATIONARY%20KIT%20MOHALI/IMG_4697.JPG.webp",
        "alt": "Teamwork in packing kits at Infosys Mohali",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/23-06-2026%20STATIONARY%20KIT%20MOHALI/IMG_4698.JPG.webp",
        "alt": "Close up of stationery supplies being organised",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/23-06-2026%20STATIONARY%20KIT%20MOHALI/IMG_4699.JPG.webp",
        "alt": "Infosys volunteers preparing stationery kits",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/23-06-2026%20STATIONARY%20KIT%20MOHALI/IMG_4701.JPG.webp",
        "alt": "Employees packing educational supplies into individual kits",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/23-06-2026%20STATIONARY%20KIT%20MOHALI/IMG_4702.JPG.webp",
        "alt": "Volunteers smiling while assembling stationery kits",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/23-06-2026%20STATIONARY%20KIT%20MOHALI/IMG_4703.JPG.webp",
        "alt": "Group of Infosys employees collaborating on kit assembly",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/23-06-2026%20STATIONARY%20KIT%20MOHALI/IMG_4704.JPG.webp",
        "alt": "Stacks of completed stationery kits ready for distribution",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/STATIONARY%20KIT%20CHANDIGARH/WhatsApp%20Image%202026-07-08%20at%2012.54.08%20PM%20(1)%20(1).webp",
        "alt": "Infosys Chandigarh employees sorting stationery items",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/STATIONARY%20KIT%20CHANDIGARH/WhatsApp%20Image%202026-07-08%20at%2012.55.38%20PM.webp",
        "alt": "Teamwork in assembling stationery kits at Infosys Chandigarh",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/STATIONARY%20KIT%20CHANDIGARH/WhatsApp%20Image%202026-07-08%20at%2012.55.39%20PM.webp",
        "alt": "Employees organising stationery supplies at the Chandigarh campus",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/STATIONARY%20KIT%20CHANDIGARH/WhatsApp%20Image%202026-07-08%20at%2012.55.40%20PM.webp",
        "alt": "Volunteers packing individual stationery kits",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/STATIONARY%20KIT%20CHANDIGARH/WhatsApp%20Image%202026-07-08%20at%2012.55.42%20PM%20(1).webp",
        "alt": "Close up of completed stationery kits at Infosys Chandigarh",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/STATIONARY%20KIT%20CHANDIGARH/WhatsApp%20Image%202026-07-08%20at%2012.55.56%20PM.webp",
        "alt": "Volunteers smiling with packed stationery kits",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/STATIONARY%20KIT%20CHANDIGARH/WhatsApp%20Image%202026-07-08%20at%2012.56.02%20PM.webp",
        "alt": "Employees organising completed kits for distribution",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/STATIONARY%20KIT%20CHANDIGARH/WhatsApp%20Image%202026-07-08%20at%2012.56.05%20PM%20(2).webp",
        "alt": "Large group of Infosys Chandigarh employees at the stationery kit drive",
        "caption": "."
      }
    ],
    "map": {
      "latitude": 30.7333,
      "longitude": 76.7794,
      "zoom": 15,
      "label": "Infosys Campus, Chandigarh",
      "embedUrl": "https://maps.google.com/maps?q=Infosys%20Chandigarh&t=m&z=15&output=embed",
      "earthUrl": "https://earth.google.com/web/search/Infosys+Chandigarh",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Infosys+Chandigarh"
    },
    "impact": {
      "heading": "Small Kits. Meaningful Beginnings.",
      "paragraphs": [
        "Education begins with access. For many children, basic stationery is an essential part of the learning experience. By coming together to prepare educational kits, Infosys employees contributed towards making these everyday learning essentials available to children from underserved communities.",
        "The initiative transformed employee time and teamwork into tangible educational support. Each assembled kit represents not just stationery, but an opportunity for a child to learn, participate and engage more confidently in the classroom.",
        "Through this collaboration, Infosys and Renukiran Welfare Foundation demonstrated how employee volunteering can create simple yet meaningful interventions that directly support children's educational journeys."
      ],
      "stats": [
        {
          "value": "50",
          "label": "Stationery Kits Assembled"
        },
        {
          "value": "50",
          "label": "Employee Volunteers Engaged"
        },
        {
          "value": "50",
          "label": "Volunteer Hours"
        },
        {
          "value": "50",
          "label": "Children Supported"
        }
      ],
      "sdgs": [
        {
          "number": "04",
          "label": "Quality Education"
        },
        {
          "number": "10",
          "label": "Reduced Inequalities"
        },
        {
          "number": "17",
          "label": "Partnerships for the Goals"
        }
      ]
    },
    "conclusion": "The Stationery Kit Assembly Drive demonstrated that meaningful impact can begin with something as simple as putting together the right tools for a child's education. Through the collective efforts of Infosys employees, essential learning materials were prepared with care and purpose for children from underserved communities. The initiative brought together employee engagement and educational support, reinforcing the belief that every child deserves the basic resources needed to learn, grow and realise their potential.",
    "thankingNote": "Renukiran Welfare Foundation sincerely thanks Infosys and all participating employee volunteers for their time, enthusiasm and commitment towards supporting children's education. Their collective effort transformed a hands-on volunteering activity into meaningful educational support for children who need it most. We also extend our gratitude to the supporting teams and community stakeholders who contributed to making the initiative possible.",
    "specialMentions": [
      {
        "name": "Infosys",
        "role": "Corporate Partner",
        "note": "For supporting education-focused employee engagement and creating opportunities for employees to contribute towards children's learning."
      },
      {
        "name": "Employee Volunteers",
        "role": "Education Champions",
        "note": "For their enthusiastic participation, teamwork and thoughtful effort in preparing each stationery kit."
      },
      {
        "name": "Renukiran Welfare Foundation",
        "role": "Implementation Partner",
        "note": "For conceptualising, coordinating and facilitating the employee volunteering initiative."
      },
      {
        "name": "Community & Distribution Partners",
        "role": "Community Support",
        "note": "For helping ensure that the assembled stationery kits reach children who can benefit from these educational resources."
      }
    ]
  },
  {
    "slug": "tata-communications-seed-paper-workshop",
    "published": true,
    "featured": true,
    "order": 6,
    "client": {
      "name": "Tata Communications",
      "shortName": "Tata Communications",
      "logo": "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/tata_communications_impact%2Flogo%2FTata-Communications-Logo.png?alt=media&token=placeholder-uuid",
      "website": "https://www.tatacommunications.com/",
      "description": [
        "Tata Communications partnered with Renukiran Welfare Foundation to engage employees in a creative and environmentally conscious activity focused on sustainability and responsible resource use.",
        "The collaboration brought together employee participation and environmental awareness through a hands-on seed paper making workshop, demonstrating how everyday waste materials can be transformed into something that contributes to a greener future."
      ]
    },
    "activity": {
      "title": "Seed Paper Making Workshop",
      "type": "Corporate Employee Engagement Program",
      "theme": "Environment & Climate Action",
      "date": "16–17 June 2026",
      "dateISO": "2026-06-16",
      "location": "Tata Communications Office, Noida, Uttar Pradesh",
      "locations": ["Noida"],
      "summary": "A hands-on seed paper making workshop where Tata Communications employees created handmade paper embedded with seeds, combining creativity, recycling and environmental action.",
      "objective": "To promote sustainable practices, encourage the reuse of paper waste and introduce participants to an engaging way of contributing to environmental conservation through seed-based, plantable paper.",
      "details": [
        {
          "title": "Making Seed Paper",
          "description": "Employees participated in the process of creating handmade seed paper using recycled paper materials and seeds.",
          "points": [
            "Prepared recycled paper pulp for the activity.",
            "Mixed seeds into the paper pulp.",
            "Created handmade sheets of seed paper.",
            "Shaped and pressed the paper for drying.",
            "Prepared plantable paper that can eventually return to the soil."
          ]
        },
        {
          "title": "Creativity Meets Sustainability",
          "description": "The workshop transformed an environmental concept into an engaging employee experience.",
          "points": [
            "Encouraged employees to explore sustainable alternatives to conventional paper.",
            "Demonstrated the value of reusing discarded paper.",
            "Combined creativity with environmental responsibility.",
            "Created an interactive learning experience around sustainability."
          ]
        },
        {
          "title": "Turning Waste into Possibility",
          "description": "Seed paper offers a simple yet powerful message — materials that might otherwise be discarded can be given a second life.",
          "points": [
            "Connected recycling with regeneration by allowing seeds to germinate upon planting.",
            "Encouraged participants to think differently about waste.",
            "Recognised opportunities to incorporate sustainable practices into everyday life."
          ]
        }
      ]
    },
    "coverImage": {
      "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/seed%20paper%20making,%20tata%20comm.,%2016-17%20june%202026/WhatsApp%20Image%202026-06-17%20at%202.56.25%20PM.webp",
      "alt": "Tata Communications employees engaged in making seed paper at their office",
      "position": "center"
    },
    "gallery": [
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/seed%20paper%20making,%20tata%20comm.,%2016-17%20june%202026/WhatsApp%20Image%202026-06-16%20at%2011.28.43%20AM.webp",
        "alt": "Tata Communications employees at the seed paper making workshop in Noida",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/seed%20paper%20making,%20tata%20comm.,%2016-17%20june%202026/WhatsApp%20Image%202026-06-16%20at%2011.28.47%20AM.webp",
        "alt": "Employees preparing paper pulp for the seed paper activity",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/seed%20paper%20making,%20tata%20comm.,%2016-17%20june%202026/WhatsApp%20Image%202026-06-17%20at%202.31.13%20PM%20(1).webp",
        "alt": "Mixing seeds into the pulp mixture",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/seed%20paper%20making,%20tata%20comm.,%2016-17%20june%202026/WhatsApp%20Image%202026-06-17%20at%202.31.14%20PM%20(1).webp",
        "alt": "Creating handmade sheets of seed paper",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/seed%20paper%20making,%20tata%20comm.,%2016-17%20june%202026/WhatsApp%20Image%202026-06-17%20at%202.45.14%20PM%20(2).webp",
        "alt": "Shaping and pressing the wet paper on the screen",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/seed%20paper%20making,%20tata%20comm.,%2016-17%20june%202026/WhatsApp%20Image%202026-06-17%20at%202.45.14%20PM%20(8).webp",
        "alt": "Drying process of the freshly made seed paper sheets",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/seed%20paper%20making,%20tata%20comm.,%2016-17%20june%202026/WhatsApp%20Image%202026-06-17%20at%202.56.24%20PM%20(2).webp",
        "alt": "Volunteers working together at the seed paper making stations",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/seed%20paper%20making,%20tata%20comm.,%2016-17%20june%202026/WhatsApp%20Image%202026-06-17%20at%202.56.24%20PM.webp",
        "alt": "Close up of the handmade seed paper being prepared",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/seed%20paper%20making,%20tata%20comm.,%2016-17%20june%202026/WhatsApp%20Image%202026-06-17%20at%202.56.25%20PM.webp",
        "alt": "Volunteers carefully spreading pulp onto the screen",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/seed%20paper%20making,%20tata%20comm.,%2016-17%20june%202026/WhatsApp%20Image%202026-06-17%20at%204.24.07%20PM.webp",
        "alt": "Group displaying the final seed paper creations",
        "caption": "."
      }
    ],
    "map": {
      "latitude": 28.5355,
      "longitude": 77.3910,
      "zoom": 15,
      "label": "Tata Communications Office, Noida",
      "embedUrl": "https://maps.google.com/maps?q=Tata%20Communications%20Noida&t=m&z=15&output=embed",
      "earthUrl": "https://earth.google.com/web/search/Tata+Communications+Noida",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Tata+Communications+Noida"
    },
    "impact": {
      "heading": "From Paper Waste to New Life.",
      "paragraphs": [
        "The Seed Paper Making Workshop brought together creativity, employee engagement and environmental consciousness in one simple intervention. By working with recycled paper and seeds, employees experienced first-hand how waste materials can be repurposed into something with the potential to create new life.",
        "Beyond the activity itself, the workshop encouraged participants to reflect on responsible consumption, recycling and the importance of small sustainable choices. The initiative demonstrated that environmental action does not always require large interventions. Sometimes, it begins with changing the way we look at everyday materials — and giving waste an opportunity for a second life."
      ],
      "stats": [
        {
          "value": "70",
          "label": "Seed Paper Sheets Created"
        },
        {
          "value": "40",
          "label": "Employee Volunteers Engaged"
        },
        {
          "value": "80",
          "label": "Volunteer Hours"
        },
        {
          "value": "400",
          "label": "Seeds Embedded / Planting Potential"
        }
      ],
      "sdgs": [
        {
          "number": "12",
          "label": "Responsible Consumption and Production"
        },
        {
          "number": "13",
          "label": "Climate Action"
        },
        {
          "number": "15",
          "label": "Life on Land"
        },
        {
          "number": "17",
          "label": "Partnerships for the Goals"
        }
      ]
    },
    "conclusion": "The Seed Paper Making Workshop demonstrated how sustainability can be made interactive, creative and accessible. Through their participation, Tata Communications employees transformed recycled paper into plantable seed paper, creating a tangible connection between responsible resource use and environmental regeneration. The initiative encouraged employees to embrace sustainable thinking while showing how small actions, when adopted collectively, can contribute to a greener future.",
    "thankingNote": "Renukiran Welfare Foundation sincerely thanks Tata Communications and all participating employees for their enthusiastic involvement and commitment towards environmental sustainability. Their active participation helped transform a creative workshop into a meaningful sustainability experience — connecting recycling, responsible consumption and environmental action. We also thank the supporting teams who contributed to the smooth planning and execution of the two-day initiative.",
    "specialMentions": [
      {
        "name": "Tata Communications",
        "role": "Corporate Partner",
        "note": "For creating opportunities for employees to engage with sustainability through meaningful and interactive volunteering."
      },
      {
        "name": "Employee Volunteers",
        "role": "Sustainability Champions",
        "note": "For their creativity, enthusiasm and active participation throughout the seed paper making process."
      },
      {
        "name": "Renukiran Welfare Foundation",
        "role": "Implementation Partner",
        "note": "For conceptualising, coordinating and facilitating the sustainability-focused employee engagement initiative."
      }
    ]
  },
  {
    "slug": "atlassian-soap-making-hygiene",
    "published": true,
    "featured": true,
    "order": 7,
    "client": {
      "name": "Atlassian",
      "shortName": "Atlassian",
      "logo": "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/atlassian_impact%2Flogo%2FAtlassian-Logo.png?alt=media&token=placeholder-uuid",
      "website": "https://www.atlassian.com/",
      "description": [
        "Atlassian partnered with Renukiran Welfare Foundation to engage employees in a meaningful hands-on initiative that combined creativity, community support and the importance of personal hygiene.",
        "The collaboration brought employees together to create handmade soaps that could be distributed to underserved communities, transforming a simple volunteering activity into a practical contribution towards better hygiene awareness and access to essential hygiene products."
      ]
    },
    "activity": {
      "title": "Soap Making for Community Hygiene",
      "type": "Corporate Employee Engagement Program",
      "theme": "Health, Hygiene & Community Well-being",
      "date": "8 May 2026",
      "dateISO": "2026-05-08",
      "location": "Delhi",
      "locations": ["Delhi"],
      "summary": "A hands-on soap-making activity where Atlassian employees came together to create and prepare handmade soaps for community distribution.",
      "objective": "To create useful hygiene products for communities while encouraging employees to participate in a meaningful, interactive volunteering experience focused on health, hygiene and social responsibility.",
      "details": [
        {
          "title": "Making Handmade Soaps",
          "description": "Volunteers participated in the process of preparing and moulding handmade soaps, working together to create hygiene essentials for community members.",
          "points": [
            "Prepared soap-making materials and moulds.",
            "Participated in the soap preparation and moulding process.",
            "Created individual handmade soap bars.",
            "Prepared and organised the finished soaps for distribution.",
            "Ensured the activity remained engaging, collaborative and purpose-driven."
          ]
        },
        {
          "title": "Employee Volunteering & Teamwork",
          "description": "The activity created an opportunity for Atlassian employees to contribute directly towards a community-focused cause.",
          "points": [
            "45 employees participated in the initiative.",
            "Volunteers collectively contributed 45 volunteer hours.",
            "Encouraged teamwork through a shared social-impact objective.",
            "Created a hands-on volunteering experience beyond conventional donation-based activities."
          ]
        },
        {
          "title": "Promoting Everyday Hygiene",
          "description": "Access to basic hygiene products is an important part of maintaining personal and community well-being.",
          "points": [
            "Contributed towards making essential hygiene products available to communities.",
            "Reinforced the importance of regular handwashing and personal hygiene practices.",
            "Supported community health through practical interventions."
          ]
        }
      ]
    },
    "coverImage": {
      "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/08-05-2026,%20soap%20making/IMG_3737.JPG.webp",
      "alt": "Atlassian employees actively participating in a soap-making workshop in Delhi",
      "position": "center"
    },
    "gallery": [
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/08-05-2026,%20soap%20making/IMG_3678.JPG.webp",
        "alt": "Atlassian employees preparing for the soap making workshop",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/08-05-2026,%20soap%20making/IMG_3680.JPG.webp",
        "alt": "Volunteers organising soap making materials",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/08-05-2026,%20soap%20making/IMG_3685.JPG.webp",
        "alt": "Atlassian employees engaged in the soap making process",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/08-05-2026,%20soap%20making/IMG_3687.JPG.webp",
        "alt": "Teamwork during the soap moulding activity",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/08-05-2026,%20soap%20making/IMG_3709.JPG.webp",
        "alt": "Employees mixing soap ingredients together",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/08-05-2026,%20soap%20making/IMG_3713.JPG.webp",
        "alt": "Volunteers shaping the handmade soap bars",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/08-05-2026,%20soap%20making/IMG_3723.JPG.webp",
        "alt": "Close up of freshly moulded soaps",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/08-05-2026,%20soap%20making/IMG_3737.JPG.webp",
        "alt": "Atlassian volunteers with the finished soaps ready for distribution",
        "caption": "."
      }
    ],
    "map": {
      "latitude": 28.6139,
      "longitude": 77.2090,
      "zoom": 12,
      "label": "Community Project Location, Delhi",
      "embedUrl": "https://maps.google.com/maps?q=Delhi&t=m&z=12&output=embed",
      "earthUrl": "https://earth.google.com/web/search/Delhi",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Delhi"
    },
    "impact": {
      "heading": "45 Volunteers. 150 Soaps. One Shared Purpose.",
      "paragraphs": [
        "The Soap Making initiative transformed employee time and teamwork into a tangible contribution towards community hygiene. In a single volunteering engagement, 45 Atlassian employees contributed 45 volunteer hours and created 150 handmade soaps for community use.",
        "Beyond the number of soaps produced, the activity created an opportunity for employees to connect directly with a social cause and understand how simple, practical interventions can contribute towards healthier communities. Each soap represents a small but meaningful step towards making essential hygiene resources more accessible to those who need them."
      ],
      "stats": [
        {
          "value": "150",
          "label": "Handmade Soaps Created"
        },
        {
          "value": "45",
          "label": "Employee Volunteers Engaged"
        },
        {
          "value": "45",
          "label": "Volunteer Hours Contributed"
        },
        {
          "value": "Community",
          "label": "Hygiene Supported"
        }
      ],
      "sdgs": [
        {
          "number": "03",
          "label": "Good Health and Well-being"
        },
        {
          "number": "06",
          "label": "Clean Water and Sanitation"
        },
        {
          "number": "10",
          "label": "Reduced Inequalities"
        },
        {
          "number": "17",
          "label": "Partnerships for the Goals"
        }
      ]
    },
    "conclusion": "The Soap Making initiative demonstrated that employee volunteering can create impact through simple, practical and purposeful action. By coming together to create 150 handmade soaps, Atlassian employees transformed 45 hours of collective effort into hygiene essentials for community members. The initiative reinforced a simple message: small acts of care can contribute to healthier and more dignified communities.",
    "thankingNote": "Renukiran Welfare Foundation sincerely thanks Atlassian and all 45 participating employee volunteers for their enthusiasm, time and commitment towards supporting community hygiene. Their collective effort helped turn a creative employee engagement activity into tangible hygiene support for underserved communities.",
    "specialMentions": [
      {
        "name": "Atlassian",
        "role": "Corporate Partner",
        "note": "For supporting meaningful employee engagement and creating opportunities for employees to contribute towards community well-being."
      },
      {
        "name": "Employee Volunteers",
        "role": "Community Hygiene Champions",
        "note": "For contributing their time, creativity and teamwork towards creating 150 handmade soaps."
      },
      {
        "name": "Renukiran Welfare Foundation",
        "role": "Implementation Partner",
        "note": "For conceptualising, coordinating and facilitating the soap-making employee engagement initiative."
      }
    ]
  },
  {
    "slug": "infosys-water-for-wings-jaipur",
    "published": true,
    "featured": true,
    "order": 8,
    "client": {
      "name": "Infosys",
      "shortName": "Infosys",
      "logo": "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/infosys_impact%2Flogo%2FInfosys-Logo.png?alt=media&token=placeholder-uuid",
      "website": "https://www.infosys.com/",
      "description": [
        "Infosys partnered with Renukiran Welfare Foundation to engage employees in a meaningful environmental initiative focused on supporting urban biodiversity and creating safe spaces for birds.",
        "Through Water for Wings, employees came together to paint and prepare bird feeders that can provide birds with access to food and water, particularly in urban environments where natural resources can be limited."
      ]
    },
    "activity": {
      "title": "Water for Wings – Bird Feeder Painting Drive",
      "type": "Corporate Employee Engagement Program",
      "theme": "Environment & Climate Action",
      "date": "18 June 2026",
      "dateISO": "2026-06-18",
      "location": "Infosys Campus, Jaipur, Rajasthan",
      "locations": ["Jaipur"],
      "summary": "A hands-on bird feeder painting activity where Infosys employees creatively decorated 75 bird feeders, helping transform simple utility items into colourful additions to community and outdoor spaces.",
      "objective": "To encourage compassion towards urban wildlife, promote biodiversity awareness and create practical resources that can support birds by providing access to food and water.",
      "details": [
        {
          "title": "Painting Bird Feeders",
          "description": "Employees participated in a creative hands-on activity to paint and decorate bird feeders.",
          "points": [
            "Painted and decorated 75 bird feeders.",
            "Used creativity to give each feeder a unique appearance.",
            "Prepared the feeders for placement in suitable outdoor spaces.",
            "Combined artistic expression with an environmental purpose."
          ]
        },
        {
          "title": "Employee Volunteering & Teamwork",
          "description": "The activity provided Infosys employees with an opportunity to contribute directly towards an environmental cause.",
          "points": [
            "113 employees participated in the initiative.",
            "Volunteers collectively contributed 113 volunteer hours.",
            "Encouraged teamwork through a shared environmental objective.",
            "Created an engaging volunteering experience that connected creativity with conservation."
          ]
        },
        {
          "title": "Supporting Urban Biodiversity",
          "description": "The initiative aimed to encourage simple actions that can make urban spaces more welcoming for birds and other local wildlife.",
          "points": [
            "Highlighted the importance of birds in maintaining healthy ecosystems.",
            "Addressed the challenge of reduced access to natural food and water sources due to urbanisation.",
            "Contributed a practical intervention to support local wildlife."
          ]
        }
      ]
    },
    "coverImage": {
      "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/water%20for%20wings%2018-06-2026/IMG20260618201837.webp",
      "alt": "Infosys employees painting bird feeders at the Jaipur campus",
      "position": "center"
    },
    "gallery": [
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/water%20for%20wings%2018-06-2026/IMG-20260618-WA0079.webp",
        "alt": "Infosys employees gathered for the Water for Wings bird feeder painting drive at the Jaipur campus",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/water%20for%20wings%2018-06-2026/IMG-20260618-WA0100.webp",
        "alt": "Employees selecting paints and preparing for the bird feeder activity",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/water%20for%20wings%2018-06-2026/IMG20260618114528.webp",
        "alt": "Close up of an employee painting a floral design on a bird feeder",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/water%20for%20wings%2018-06-2026/IMG20260618124735.webp",
        "alt": "Volunteers collaborating and painting bird feeders together",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/water%20for%20wings%2018-06-2026/IMG20260618134505.webp",
        "alt": "A brightly painted finished bird feeder ready to be installed",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/water%20for%20wings%2018-06-2026/IMG20260618193006.webp",
        "alt": "Display of freshly painted bird feeders laid out to dry",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/water%20for%20wings%2018-06-2026/IMG20260618193818.webp",
        "alt": "Infosys volunteers adding creative details to the bird feeders",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/water%20for%20wings%2018-06-2026/IMG20260618201837.webp",
        "alt": "Group photo of the enthusiastic Infosys volunteers at the Water for Wings drive",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/water%20for%20wings%2018-06-2026/IMG_3713.JPG.webp",
        "alt": "Close up of a colourful painted bird feeder created during the activity",
        "caption": "."
      }
    ],
    "map": {
      "latitude": 26.9124,
      "longitude": 75.7873,
      "zoom": 15,
      "label": "Infosys Campus, Jaipur",
      "embedUrl": "https://maps.google.com/maps?q=Infosys%20Jaipur&t=m&z=15&output=embed",
      "earthUrl": "https://earth.google.com/web/search/Infosys+Jaipur",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Infosys+Jaipur"
    },
    "impact": {
      "heading": "113 Volunteers. 75 Feeders. A Little More Care for Every Wing.",
      "paragraphs": [
        "The Water for Wings initiative transformed employee creativity and collective effort into a practical contribution towards urban biodiversity. In a single volunteering engagement, 113 Infosys employees contributed 113 volunteer hours and painted 75 bird feeders designed to support birds with access to essential resources.",
        "Beyond the numbers, the initiative encouraged participants to look at their surroundings from a different perspective — recognising that even small interventions can help make urban spaces more wildlife-friendly. Each feeder represents an opportunity to provide nourishment and hydration to birds while inspiring greater awareness and compassion towards local ecosystems."
      ],
      "stats": [
        {
          "value": "75",
          "label": "Bird Feeders Painted"
        },
        {
          "value": "113",
          "label": "Employee Volunteers Engaged"
        },
        {
          "value": "113",
          "label": "Volunteer Hours Contributed"
        },
        {
          "value": "Urban",
          "label": "Biodiversity Supported"
        }
      ],
      "sdgs": [
        {
          "number": "11",
          "label": "Sustainable Cities and Communities"
        },
        {
          "number": "13",
          "label": "Climate Action"
        },
        {
          "number": "15",
          "label": "Life on Land"
        },
        {
          "number": "17",
          "label": "Partnerships for the Goals"
        }
      ]
    },
    "conclusion": "The Water for Wings initiative demonstrated that environmental action can begin with something as simple as creating a welcoming space for a bird. Through creativity, teamwork and purpose-driven volunteering, Infosys employees contributed towards an initiative that supports urban wildlife while encouraging greater environmental consciousness. The activity reinforced a simple idea: when we make space for nature, we make our communities healthier and more compassionate places to live.",
    "thankingNote": "Renukiran Welfare Foundation sincerely thanks Infosys and all 113 participating employee volunteers for their enthusiasm, creativity and commitment towards environmental sustainability. Their collective effort helped transform a creative activity into a meaningful contribution towards urban biodiversity and bird welfare.",
    "specialMentions": [
      {
        "name": "Infosys",
        "role": "Corporate Partner",
        "note": "For supporting employee-led environmental action and creating opportunities for employees to contribute towards biodiversity conservation."
      },
      {
        "name": "Employee Volunteers",
        "role": "Biodiversity Champions",
        "note": "For contributing their time, creativity and teamwork towards painting 75 bird feeders."
      },
      {
        "name": "Renukiran Welfare Foundation",
        "role": "Implementation Partner",
        "note": "For conceptualising, coordinating and facilitating the Water for Wings employee engagement initiative."
      }
    ]
  },
  {
    "slug": "infosys-blood-donation-indore",
    "published": true,
    "featured": true,
    "order": 9,
    "client": {
      "name": "Infosys",
      "shortName": "Infosys",
      "logo": "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/infosys_impact%2Flogo%2FInfosys-Logo.png?alt=media&token=placeholder-uuid",
      "website": "https://www.infosys.com/",
      "description": [
        "Infosys partnered with Renukiran Welfare Foundation to support a life-saving community initiative through a blood donation drive at its Indore campus.",
        "The initiative brought employees together to contribute towards a critical healthcare need, demonstrating how collective employee participation can translate into direct and potentially life-saving support for patients and families in need of blood."
      ]
    },
    "activity": {
      "title": "Blood Donation Drive",
      "type": "Corporate Employee Engagement Program",
      "theme": "Health & Community Well-being",
      "date": "24 June 2026",
      "dateISO": "2026-06-24",
      "location": "Infosys Campus, Indore, Madhya Pradesh",
      "locations": ["Indore"],
      "summary": "A voluntary blood donation drive where Infosys employees came forward to donate blood and contribute towards strengthening the availability of this vital healthcare resource.",
      "objective": "To encourage voluntary blood donation and contribute to the availability of safe blood for patients requiring transfusions, while creating greater awareness around the importance of regular blood donation.",
      "details": [
        {
          "title": "Voluntary Blood Donation",
          "description": "Employees participated in the blood donation drive, contributing towards a critical healthcare need.",
          "points": [
            "62 employees participated in the initiative.",
            "54 units of blood were successfully collected.",
            "Volunteers contributed towards supporting patients who may require blood transfusions.",
            "The drive promoted the importance of voluntary blood donation within the community."
          ]
        },
        {
          "title": "Employee Volunteering & Collective Action",
          "description": "The initiative provided Infosys employees with an opportunity to make a direct contribution towards community health.",
          "points": [
            "62 volunteer hours were contributed.",
            "Employees demonstrated solidarity around a shared health and humanitarian cause.",
            "The drive encouraged a culture of giving and community responsibility.",
            "Participants transformed individual contributions into a collective healthcare impact."
          ]
        },
        {
          "title": "Creating Awareness Around Blood Donation",
          "description": "Through the initiative, employees were encouraged to recognise the importance of voluntary blood donation.",
          "points": [
            "Highlighted that blood cannot be manufactured and depends on voluntary donors.",
            "Emphasised the role individuals can play in supporting patients during medical emergencies and surgeries.",
            "Educated participants on the ongoing need for safe blood supplies."
          ]
        }
      ]
    },
    "coverImage": {
      "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/24%20JUNE%202026%20BLOOD%20DONATION%20INDORE/WhatsApp%20Image%202026-07-08%20at%2012.55.08%20PM%20(8).webp",
      "alt": "Infosys employees registering and donating blood at the Indore campus drive",
      "position": "center"
    },
    "gallery": [
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/24%20JUNE%202026%20BLOOD%20DONATION%20INDORE/WhatsApp%20Image%202026-07-08%20at%2012.55.08%20PM%20(1).webp",
        "alt": "Infosys employees at the blood donation drive in Indore",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/24%20JUNE%202026%20BLOOD%20DONATION%20INDORE/WhatsApp%20Image%202026-07-08%20at%2012.55.08%20PM%20(3).webp",
        "alt": "Donors being registered for the blood donation drive",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/24%20JUNE%202026%20BLOOD%20DONATION%20INDORE/WhatsApp%20Image%202026-07-08%20at%2012.55.08%20PM%20(5).webp",
        "alt": "Medical staff conducting pre-donation check-up",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/24%20JUNE%202026%20BLOOD%20DONATION%20INDORE/WhatsApp%20Image%202026-07-08%20at%2012.55.08%20PM%20(8).webp",
        "alt": "An Infosys employee donating blood at the drive",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/24%20JUNE%202026%20BLOOD%20DONATION%20INDORE/WhatsApp%20Image%202026-07-08%20at%2012.55.08%20PM%20(9).webp",
        "alt": "Donors resting in the observation area after donation",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/24%20JUNE%202026%20BLOOD%20DONATION%20INDORE/WhatsApp%20Image%202026-07-08%20at%2012.55.08%20PM%20(10).webp",
        "alt": "Close up of blood collection units collected during the drive",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/24%20JUNE%202026%20BLOOD%20DONATION%20INDORE/WhatsApp%20Image%202026-07-08%20at%2012.56.24%20PM%20(2).webp",
        "alt": "Team photo of Infosys volunteers and medical staff at the Indore blood donation drive",
        "caption": "."
      }
    ],
    "map": {
      "latitude": 22.7196,
      "longitude": 75.8577,
      "zoom": 15,
      "label": "Infosys Campus, Indore",
      "embedUrl": "https://maps.google.com/maps?q=Infosys%20Indore&t=m&z=15&output=embed",
      "earthUrl": "https://earth.google.com/web/search/Infosys+Indore",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Infosys+Indore"
    },
    "impact": {
      "heading": "62 Volunteers. 54 Units. A Potential Lifeline for Those in Need.",
      "paragraphs": [
        "The Blood Donation Drive transformed employee participation into a direct contribution towards community healthcare. In a single volunteering initiative, 62 Infosys employees contributed 62 volunteer hours and helped collect 54 units of blood.",
        "Each donation can become an important resource for patients and families facing medical emergencies, surgeries, treatments and conditions that require blood transfusions. Beyond the units collected, the initiative helped reinforce the importance of voluntary blood donation and demonstrated how employee-led action can contribute to strengthening community healthcare systems."
      ],
      "stats": [
        {
          "value": "54",
          "label": "Units of Blood Collected"
        },
        {
          "value": "62",
          "label": "Employee Volunteers Participated"
        },
        {
          "value": "62",
          "label": "Volunteer Hours Contributed"
        },
        {
          "value": "Community",
          "label": "Healthcare Supported"
        }
      ],
      "sdgs": [
        {
          "number": "03",
          "label": "Good Health and Well-being"
        },
        {
          "number": "10",
          "label": "Reduced Inequalities"
        },
        {
          "number": "17",
          "label": "Partnerships for the Goals"
        }
      ]
    },
    "conclusion": "The Blood Donation Drive demonstrated the profound impact that a simple act of giving can create. Through their participation, Infosys employees contributed 54 units of blood towards a vital healthcare resource, turning their time and willingness to help into a potentially life-saving contribution. The initiative reinforced a powerful message: one donation can become hope for someone waiting for a lifeline.",
    "thankingNote": "Renukiran Welfare Foundation sincerely thanks Infosys and all 62 participating employee volunteers for their generosity, courage and commitment towards supporting community health. Their collective contribution helped strengthen the availability of a critical healthcare resource and demonstrated the power of employee-led action in responding to community needs.",
    "specialMentions": [
      {
        "name": "Infosys",
        "role": "Corporate Partner",
        "note": "For supporting a meaningful health-focused employee engagement initiative and encouraging employees to contribute towards community well-being."
      },
      {
        "name": "Employee Donors",
        "role": "Community Health Champions",
        "note": "For their generosity and willingness to contribute towards a critical healthcare need through voluntary blood donation."
      },
      {
        "name": "Renukiran Welfare Foundation",
        "role": "Implementation Partner",
        "note": "For conceptualising, coordinating and facilitating the Blood Donation Drive."
      },
      {
        "name": "Blood Collection / Medical Team",
        "role": "Healthcare Support",
        "note": "For providing the medical expertise and support required to conduct the blood donation drive safely and efficiently."
      }
    ]
  },
  {
    "slug": "vivo-library-setup-gurgaon",
    "published": true,
    "featured": true,
    "order": 10,
    "client": {
      "name": "vivo",
      "shortName": "vivo",
      "logo": "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/vivo_impact%2Flogo%2FVivo-Logo.png?alt=media&token=placeholder-uuid",
      "website": "https://www.vivo.com/in/",
      "description": [
        "vivo partnered with Renukiran Welfare Foundation to strengthen learning opportunities for children through the creation of a dedicated library space at a government school in Sushant Lok, Gurgaon.",
        "The initiative brought together vivo employees and the school community to transform an existing space into a more engaging and accessible environment for reading and learning. The collaboration reflects a shared commitment towards supporting quality education and creating spaces that encourage children to explore, read and learn beyond the classroom."
      ]
    },
    "activity": {
      "title": "Library Setup & Learning Space Transformation",
      "type": "Corporate Employee Engagement Program",
      "theme": "Education & Community Development",
      "date": "September 2025",
      "dateISO": "2025-09-01",
      "location": "GPS School, Sushant Lok, Gurgaon, Haryana",
      "locations": ["Gurgaon"],
      "summary": "A library setup initiative where vivo employee volunteers came together to organise, arrange and create a welcoming reading environment for students of the school.",
      "objective": "To create an accessible and engaging library space that encourages reading habits, independent learning and curiosity among children while strengthening the school's educational infrastructure.",
      "details": [
        {
          "title": "Creating a Library Space",
          "description": "Volunteers worked together to set up and organise the library, transforming the space into a functional and child-friendly learning environment.",
          "points": [
            "Organised and arranged books and learning resources.",
            "Set up the library space for easy access by students.",
            "Created a more welcoming environment for reading and exploration.",
            "Organised resources to encourage independent learning.",
            "Helped transform an underutilised space into a meaningful educational resource."
          ]
        },
        {
          "title": "Employee Volunteering & Teamwork",
          "description": "The initiative gave vivo employees an opportunity to contribute directly towards improving the learning environment of children.",
          "points": [
            "25 employees participated in the initiative.",
            "Volunteers collectively contributed 125 volunteer hours.",
            "Employees worked collaboratively to plan, organise and set up the library.",
            "Created a hands-on volunteering experience focused on education and community development."
          ]
        },
        {
          "title": "Encouraging a Culture of Reading",
          "description": "A library can become much more than a collection of books — it can become a space where children discover new ideas, develop imagination and build lifelong learning habits.",
          "points": [
            "Made reading resources more accessible to students.",
            "Created an environment that encourages curiosity, exploration and self-directed learning.",
            "The newly organised space is expected to benefit 150 students."
          ]
        }
      ]
    },
    "coverImage": {
      "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/library%20setup%202025,%20%20vivo/20250926_103717.webp",
      "alt": "vivo employees and students in the newly set up library at GPS School, Gurgaon",
      "position": "center"
    },
    "gallery": [
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/library%20setup%202025,%20%20vivo/20250926_103717.webp",
        "alt": "vivo volunteers and students during the library setup at GPS School, Gurgaon",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/library%20setup%202025,%20%20vivo/20250926_103720.webp",
        "alt": "Volunteers organising books on the new library shelves",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/library%20setup%202025,%20%20vivo/20250926_104110.webp",
        "alt": "Teamwork in arranging the learning space",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/library%20setup%202025,%20%20vivo/20250926_105729.webp",
        "alt": "A vivo volunteer reading to students in the new library",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/library%20setup%202025,%20%20vivo/20250926_105912.webp",
        "alt": "Close up of colourful bookshelves and decor in the completed library",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/library%20setup%202025,%20%20vivo/20250926_120014.webp",
        "alt": "Students exploring books in the completed library",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/library%20setup%202025,%20%20vivo/20250926_120657.webp",
        "alt": "Group photo of vivo volunteers and school representatives at the new library",
        "caption": "."
      }
    ],
    "map": {
      "latitude": 28.4472,
      "longitude": 77.0903,
      "zoom": 15,
      "label": "GPS School, Sushant Lok, Gurgaon",
      "embedUrl": "https://maps.google.com/maps?q=GPS%20School%20Sushant%20Lok%20Gurgaon&t=m&z=15&output=embed",
      "earthUrl": "https://earth.google.com/web/search/GPS+School+Sushant+Lok+Gurgaon",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=GPS+School+Sushant+Lok+Gurgaon"
    },
    "impact": {
      "heading": "One Library. 150 Young Minds. Countless Possibilities.",
      "paragraphs": [
        "The Library Setup initiative transformed employee time and collective effort into a long-term educational resource for children. With 25 vivo volunteers contributing 125 volunteer hours, the initiative created a dedicated library space expected to benefit 150 students.",
        "Beyond providing access to books, the library creates an environment where children can discover stories, explore new subjects, develop reading habits and learn at their own pace. The initiative demonstrates how employee volunteering can contribute not only to immediate outcomes but also to educational spaces that continue creating value for students long after the volunteering day is over."
      ],
      "stats": [
        {
          "value": "150",
          "label": "Students to Benefit"
        },
        {
          "value": "25",
          "label": "Employee Volunteers Engaged"
        },
        {
          "value": "125",
          "label": "Volunteer Hours Contributed"
        },
        {
          "value": "1",
          "label": "School Library Setup"
        }
      ],
      "sdgs": [
        {
          "number": "04",
          "label": "Quality Education"
        },
        {
          "number": "10",
          "label": "Reduced Inequalities"
        },
        {
          "number": "17",
          "label": "Partnerships for the Goals"
        }
      ]
    },
    "conclusion": "The Library Setup initiative demonstrated how transforming a physical space can create lasting educational possibilities. Through their time, teamwork and commitment, vivo employees helped create a dedicated learning environment where children can read, explore and discover beyond the boundaries of their classrooms. The initiative reinforces a simple belief: when we create spaces for children to learn, we create spaces for their possibilities to grow.",
    "thankingNote": "Renukiran Welfare Foundation sincerely thanks vivo and all participating employee volunteers for their valuable contribution towards strengthening educational infrastructure at the GPS School, Sushant Lok, Gurgaon. Their collective effort helped transform a space into a meaningful learning resource for 150 students and created the foundation for a stronger culture of reading and independent learning. We also extend our gratitude to the school leadership and teaching staff for their support and collaboration throughout the initiative.",
    "specialMentions": [
      {
        "name": "vivo",
        "role": "Corporate Partner",
        "note": "For supporting education-focused employee engagement and contributing towards the creation of an accessible learning environment for children."
      },
      {
        "name": "Employee Volunteers",
        "role": "Education Champions",
        "note": "For contributing their time, energy and teamwork towards setting up a library that can continue benefiting students."
      },
      {
        "name": "Renukiran Welfare Foundation",
        "role": "Implementation Partner",
        "note": "For conceptualising, coordinating and facilitating the library setup initiative."
      },
      {
        "name": "GPS School, Sushant Lok",
        "role": "School Partner",
        "note": "For providing the space and supporting the creation of a dedicated reading and learning environment for students."
      }
    ]
  },
  {
    "slug": "infosys-grocery-kit-chandigarh",
    "published": true,
    "featured": true,
    "order": 11,
    "client": {
      "name": "Infosys",
      "shortName": "Infosys",
      "logo": "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/infosys_impact%2Flogo%2FInfosys-Logo.png?alt=media&token=placeholder-uuid",
      "website": "https://www.infosys.com/",
      "description": [
        "Infosys partnered with Renukiran Welfare Foundation to support underserved communities through a meaningful employee volunteering initiative focused on assembling essential grocery kits.",
        "The initiative brought employees together to contribute towards household food security, transforming their time and teamwork into practical support for families and individuals who may face challenges in accessing everyday food essentials."
      ]
    },
    "activity": {
      "title": "Grocery Kit Assembly Drive",
      "type": "Corporate Employee Engagement Program",
      "theme": "Community Development & Food Security",
      "date": "15 July 2026",
      "dateISO": "2026-07-15",
      "location": "Infosys Campus, Chandigarh",
      "locations": ["Chandigarh"],
      "summary": "A hands-on grocery kit assembly drive where Infosys employees came together to organise, pack and prepare essential grocery kits for distribution to communities in need.",
      "objective": "To support vulnerable families with essential food supplies while creating a meaningful employee volunteering experience centred around dignity, care and community well-being.",
      "details": [
        {
          "title": "Grocery Kit Assembly",
          "description": "Volunteers worked together to organise and assemble grocery kits containing essential household food items.",
          "points": [
            "Assembled 70 grocery kits for community distribution.",
            "Sorted and organised grocery items systematically.",
            "Packed essential food supplies into individual kits.",
            "Prepared the completed kits for distribution to beneficiaries.",
            "Ensured the activity was carried out with care and attention to detail."
          ]
        },
        {
          "title": "Employee Volunteering & Teamwork",
          "description": "The initiative created an opportunity for Infosys employees to turn their collective time and effort into tangible community support.",
          "points": [
            "88 employees participated in the initiative.",
            "Volunteers collectively contributed 88 volunteer hours.",
            "Encouraged teamwork and collaboration around a shared social objective.",
            "Created a hands-on volunteering experience with a direct community outcome."
          ]
        },
        {
          "title": "Supporting Food Security & Dignity",
          "description": "Access to basic food essentials is fundamental to household well-being.",
          "points": [
            "Contributed towards easing the immediate burden of essential food expenses for vulnerable families.",
            "Approached community support rooted in dignity and care.",
            "Reinforced the message that the community stands beside beneficiaries."
          ]
        }
      ]
    },
    "coverImage": {
      "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/grocery%20kit%2015-07-2026,%20infosys%20chandigarh/IMG_5318.JPG.webp",
      "alt": "Infosys employees assembling grocery kits at the Chandigarh campus",
      "position": "center"
    },
    "gallery": [
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/grocery%20kit%2015-07-2026,%20infosys%20chandigarh/IMG_5315.JPG.webp",
        "alt": "Infosys employees gathered for the grocery kit assembly drive at the Chandigarh campus",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/grocery%20kit%2015-07-2026,%20infosys%20chandigarh/IMG_5316.JPG.webp",
        "alt": "Employees sorting dry rations for the grocery kits",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/grocery%20kit%2015-07-2026,%20infosys%20chandigarh/IMG_5318.JPG.webp",
        "alt": "Teamwork in packing the grocery kits",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/grocery%20kit%2015-07-2026,%20infosys%20chandigarh/IMG_5320.JPG.webp",
        "alt": "Close up of assembled grocery kits",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/grocery%20kit%2015-07-2026,%20infosys%20chandigarh/IMG_5322.JPG.webp",
        "alt": "Volunteers preparing the grocery kits for distribution",
        "caption": "."
      },
      {
        "src": "https://storage.googleapis.com/renukiran-a6410.appspot.com/new-company-details/grocery%20kit%2015-07-2026,%20infosys%20chandigarh/IMG_5323.JPG.webp",
        "alt": "Group photo of the enthusiastic Infosys volunteer team at the grocery kit drive",
        "caption": "."
      }
    ],
    "map": {
      "latitude": 30.7333,
      "longitude": 76.7794,
      "zoom": 15,
      "label": "Infosys Campus, Chandigarh",
      "embedUrl": "https://maps.google.com/maps?q=Infosys%20Chandigarh&t=m&z=15&output=embed",
      "earthUrl": "https://earth.google.com/web/search/Infosys+Chandigarh",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Infosys+Chandigarh"
    },
    "impact": {
      "heading": "88 Volunteers. 70 Grocery Kits. One Shared Commitment to Care.",
      "paragraphs": [
        "The Grocery Kit Assembly Drive transformed employee participation into tangible support for community food security. In a single volunteering engagement, 88 Infosys employees contributed 88 volunteer hours and assembled 70 grocery kits for distribution to underserved communities.",
        "Each kit represents more than a collection of essential food items. It represents practical support for a household and a reminder that small acts of collective care can make a meaningful difference. Through this initiative, Infosys and Renukiran Welfare Foundation demonstrated how employee volunteering can respond to immediate community needs while creating a culture of empathy, responsibility and giving."
      ],
      "stats": [
        {
          "value": "70",
          "label": "Grocery Kits Assembled"
        },
        {
          "value": "88",
          "label": "Employee Volunteers Engaged"
        },
        {
          "value": "88",
          "label": "Volunteer Hours Contributed"
        },
        {
          "value": "Community",
          "label": "Food Security Supported"
        }
      ],
      "sdgs": [
        {
          "number": "02",
          "label": "Zero Hunger"
        },
        {
          "number": "10",
          "label": "Reduced Inequalities"
        },
        {
          "number": "12",
          "label": "Responsible Consumption and Production"
        },
        {
          "number": "17",
          "label": "Partnerships for the Goals"
        }
      ]
    },
    "conclusion": "The Grocery Kit Assembly Drive demonstrated how collective employee action can translate into meaningful support for families and communities. Through their time, teamwork and commitment, Infosys employees helped prepare 70 grocery kits containing essential food supplies for community distribution. The initiative reinforced a simple belief: when we come together to support essential needs, we strengthen the communities around us.",
    "thankingNote": "Renukiran Welfare Foundation sincerely thanks Infosys and all 88 participating employee volunteers for their valuable contribution towards community well-being. Their collective effort transformed a hands-on assembly activity into practical food support for families and individuals who need it most.",
    "specialMentions": [
      {
        "name": "Infosys",
        "role": "Corporate Partner",
        "note": "For supporting community-focused employee engagement and creating opportunities for employees to contribute towards food security and household well-being."
      },
      {
        "name": "Employee Volunteers",
        "role": "Community Champions",
        "note": "For their enthusiastic participation, teamwork and thoughtful effort in assembling 70 grocery kits."
      },
      {
        "name": "Renukiran Welfare Foundation",
        "role": "Implementation Partner",
        "note": "For conceptualising, coordinating and facilitating the Grocery Kit Assembly Drive."
      },
      {
        "name": "Community & Distribution Partners",
        "role": "Community Support",
        "note": "For supporting the distribution of grocery kits to families and individuals from underserved communities."
      }
    ]
  },
  {
    "slug": "infosys-mural-painting-kolkata",
    "published": true,
    "featured": true,
    "order": 12,
    "client": {
      "name": "Infosys",
      "shortName": "Infosys",
      "logo": "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/infosys_impact%2Flogo%2FInfosys-Logo.png?alt=media&token=placeholder-uuid",
      "website": "https://www.infosys.com/",
      "description": [
        "Infosys partnered with Renukiran Welfare Foundation to create a more vibrant, engaging and inspiring school environment through a mural-making initiative at Bhogowanpur High School, Kolkata.",
        "The initiative brought employees together to use creativity as a tool for community transformation, turning school walls into colourful spaces that can inspire students and make their everyday learning environment more welcoming."
      ]
    },
    "activity": {
      "title": "School Murals & Creative Learning Spaces",
      "type": "Corporate Employee Engagement Program",
      "theme": "Education & Community Development",
      "date": "22 July 2026",
      "dateISO": "2026-07-22",
      "location": "Bhogowanpur High School, Kolkata, West Bengal",
      "locations": ["Kolkata"],
      "summary": "A hands-on school mural activity where Infosys employees collaborated to paint and transform designated school spaces at Bhogowanpur High School.",
      "objective": "To brighten the school environment through creative murals, encourage students to engage with their surroundings and demonstrate how thoughtfully designed spaces can contribute to a positive learning experience.",
      "details": [
        {
          "title": "Bringing School Walls to Life",
          "description": "Volunteers worked together to transform selected school walls through colourful and meaningful artwork.",
          "points": [
            "Created vibrant murals across designated school spaces.",
            "Used art to add character and energy to the school environment.",
            "Collaborated as a team throughout the painting process.",
            "Transformed ordinary walls into visually engaging spaces.",
            "Contributed towards creating a more welcoming environment for students."
          ]
        },
        {
          "title": "Employee Volunteering & Creativity",
          "description": "The initiative gave Infosys employees an opportunity to contribute their creativity and time towards a school-focused community intervention.",
          "points": [
            "Employees participated in a hands-on creative activity.",
            "Encouraged teamwork and collaborative expression.",
            "Connected employee volunteering with school environment improvement.",
            "Created a memorable volunteering experience through art and community engagement."
          ]
        },
        {
          "title": "Creating Inspiring Learning Environments",
          "description": "Bright, thoughtfully designed spaces can help create a more positive atmosphere in schools and give students an environment that feels inviting, energetic and inspiring.",
          "points": [
            "Extended the learning environment beyond the four walls of the classroom.",
            "Enhanced the school space with creative visual elements.",
            "Contributed to an atmosphere that inspires curiosity and creativity."
          ]
        }
      ]
    },
    "coverImage": {
      "src": "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/new-company-details%2FSchool%20Murals%20Infoysis%2FWhatsApp%20Image%202026-09-07%20at%2012.17.24%20PM.jpeg?alt=media&token=572cec85-8030-4285-ab21-7b6cab4c6cf6",
      "alt": "Infosys employees painting a large mural on a school wall in Kolkata",
      "position": "center"
    },
    "gallery": [
      {
        "src": "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/infosys_impact%2Fpictures%2FInfosys_Mural_1.JPG?alt=media&token=placeholder-uuid",
        "alt": "Volunteers planning the mural design",
        "caption": "."
      },
      {
        "src": "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/infosys_impact%2Fpictures%2FInfosys_Mural_2.JPG?alt=media&token=placeholder-uuid",
        "alt": "Employees applying paint to the wall",
        "caption": "."
      },
      {
        "src": "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/infosys_impact%2Fpictures%2FInfosys_Mural_3.JPG?alt=media&token=placeholder-uuid",
        "alt": "Teamwork in bringing characters to life on the wall",
        "caption": "."
      },
      {
        "src": "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/infosys_impact%2Fpictures%2FInfosys_Mural_4.JPG?alt=media&token=placeholder-uuid",
        "alt": "Close-up of volunteers working on details",
        "caption": "."
      },
      {
        "src": "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/infosys_impact%2Fpictures%2FInfosys_Mural_5.JPG?alt=media&token=placeholder-uuid",
        "alt": "A finished section of the vibrant mural",
        "caption": "."
      },
      {
        "src": "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/infosys_impact%2Fpictures%2FInfosys_Mural_6.JPG?alt=media&token=placeholder-uuid",
        "alt": "Group photo of volunteers in front of the completed murals",
        "caption": "."
      }
    ],
    "map": {
      "latitude": 22.5726,
      "longitude": 88.3639,
      "zoom": 14,
      "label": "Bhogowanpur High School, Kolkata",
      "embedUrl": "https://maps.google.com/maps?q=Bhogowanpur%20High%20School%20Kolkata&t=m&z=14&output=embed",
      "earthUrl": "https://earth.google.com/web/search/Bhogowanpur+High+School+Kolkata",
      "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Bhogowanpur+High+School+Kolkata"
    },
    "impact": {
      "heading": "From Blank Walls to Inspiring Spaces.",
      "paragraphs": [
        "The School Murals initiative transformed ordinary school walls into vibrant visual spaces through the collective creativity and effort of Infosys volunteers. The activity demonstrated how employee volunteering can contribute to school transformation in ways that go beyond conventional educational resources.",
        "Every mural adds colour and character to the school environment while creating an atmosphere that can inspire curiosity, creativity and a stronger sense of belonging among students. Through this collaboration, Infosys and Renukiran Welfare Foundation showed how small physical transformations can contribute to making schools more welcoming and engaging places to learn."
      ],
      "stats": [
        {
          "value": "1",
          "label": "School Transformed"
        },
        {
          "value": "20",
          "label": "Employee Volunteers Engaged"
        },
        {
          "value": "8",
          "label": "School Spaces Enhanced"
        },
        {
          "value": "Vibrant",
          "label": "Learning Environment Created"
        }
      ],
      "sdgs": [
        {
          "number": "04",
          "label": "Quality Education"
        },
        {
          "number": "10",
          "label": "Reduced Inequalities"
        },
        {
          "number": "11",
          "label": "Sustainable Cities and Communities"
        },
        {
          "number": "17",
          "label": "Partnerships for the Goals"
        }
      ]
    },
    "conclusion": "The School Murals initiative demonstrated that transformation can begin with a wall — and grow into something much bigger. Through creativity, teamwork and community participation, Infosys volunteers helped bring new energy and colour to Bhogowanpur High School. The initiative reinforced the belief that inspiring learning spaces can inspire young minds, creating an environment where students can learn, imagine and grow.",
    "thankingNote": "Renukiran Welfare Foundation sincerely thanks Infosys and all participating employee volunteers for their creativity, enthusiasm and commitment towards supporting school transformation. Their collective effort helped bring colour and character to Bhogowanpur High School while creating a more engaging environment for students. We also extend our gratitude to the school leadership, teachers and school community for their support and collaboration throughout the initiative.",
    "specialMentions": [
      {
        "name": "Infosys",
        "role": "Corporate Partner",
        "note": "For supporting creative school transformation and providing employees with an opportunity to contribute towards improving students' learning environments."
      },
      {
        "name": "Employee Volunteers",
        "role": "Creative Champions",
        "note": "For bringing their time, energy and creativity to the school and helping transform its walls into vibrant spaces."
      },
      {
        "name": "Renukiran Welfare Foundation",
        "role": "Implementation Partner",
        "note": "For conceptualising, coordinating and facilitating the school mural initiative."
      },
      {
        "name": "Bhogowanpur High School",
        "role": "School Partner",
        "note": "For welcoming the initiative and supporting the transformation of the school environment."
      }
    ]
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
