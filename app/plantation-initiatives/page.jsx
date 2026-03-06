"use client";

import React, { useState, useEffect } from "react";
import {
  TreePine,
  Leaf,
  Droplets,
  Mountain,
  Building2,
  Apple,
  Trash2,
  Waves,
  ChevronRight,
  X,
  MapPin,
  Users,
  Target,
  Sparkles,
  ArrowRight,
  Heart,
  TrendingUp,
  Globe,
  Sprout,
  Camera,
} from "lucide-react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "../../components/component.css";

const PlantationDrivePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  // Embla Carousel setup
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Carousel images - using remaining images
  const carouselImages = [
    "/plantationPictures/WhatsApp Image 2026-03-06 at 12.45.18.jpeg",
    "/plantationPictures/WhatsApp Image 2026-03-06 at 12.45.20.jpeg",
    "/plantationPictures/WhatsApp Image 2026-03-06 at 12.45.22.jpeg",
    "/plantationPictures/WhatsApp Image 2026-03-06 at 12.45.23.jpeg",
    "/plantationPictures/WhatsApp Image 2026-03-06 at 12.45.25.jpeg",
    "/plantationPictures/WhatsApp Image 2026-03-06 at 12.45.27.jpeg",
    "/plantationPictures/WhatsApp Image 2026-03-06 at 12.45.20 (1).jpeg",
    "/plantationPictures/WhatsApp Image 2026-03-06 at 12.45.28 (1).jpeg",
  ];

  const plantationPrograms = [
    {
      id: 1,
      title: "Agroforestry",
      icon: <Sprout className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      shortDesc:
        "Integrating trees with agriculture to enhance farmer income, soil health, and climate resilience.",
      image: "/plantationPictures/WhatsApp Image 2026-03-06 at 12.45.25.jpeg",
      fullContent: {
        overview:
          "Agroforestry refers to the practice of integrating trees with crops and livestock within the same agricultural landscape. By blending forestry with farming, this system creates resilient agricultural ecosystems that generate economic benefits while restoring environmental balance. For a country like India, where agriculture supports millions of rural households, agroforestry offers a pathway toward sustainable and climate-resilient farming.",
        understanding: "Agroforestry is a land management approach where trees are deliberately cultivated alongside crops and sometimes livestock on the same piece of land. Unlike monoculture farming, which focuses on a single crop, agroforestry systems are designed to be diverse and multifunctional. Farmers may grow fruit trees along field boundaries, plant timber species between crop rows, or integrate fodder trees that support livestock. Such systems improve soil fertility, enhance biodiversity, and create additional sources of income for farmers while maintaining agricultural productivity.",
        traditional: "Agroforestry is not a new concept in India. In fact, it has been practiced for centuries through traditional farming systems across the country. Examples include home garden systems in Kerala, Khejri-based farming in Rajasthan, Bamboo-based agroforestry in Northeast India, and mixed tree-crop systems across central and eastern regions. These indigenous systems supported rural communities while maintaining ecological balance. However, during the Green Revolution, agricultural practices shifted toward monocropping and chemical inputs. Over time, this led to soil degradation, declining biodiversity, and increased vulnerability for farmers. Recognizing the importance of tree-based agriculture, India introduced the National Agroforestry Policy in 2014, becoming the first country in the world to establish a dedicated policy for agroforestry.",
        importance: [
          "Diversifies farmer income through fruits, timber, fodder, and medicinal plants",
          "Increases farm income by 25-50% over time compared to monocropping",
          "Improves soil structure and enhances nutrient cycling",
          "Sequesters 2-4 tonnes of CO2 per hectare annually",
          "Reduces dependency on chemical fertilizers",
          "Trees integrated into farms provide fruits, nuts, timber, fuelwood, fodder for livestock, medicinal plants, and non-timber forest products",
        ],
        benefits: [
          "Enhanced soil moisture retention",
          "Regulation of farm microclimates",
          "Increased pollinator populations",
          "Natural pest control through ecological balance",
          "Improved groundwater recharge",
          "Tree roots improve soil structure and enhance nutrient cycling",
          "Reduces soil erosion and increases organic matter content",
          "Trees act as carbon sinks helping India meet climate commitments",
          "Reduces pressure on natural forests by producing timber from agricultural land",
        ],
        impact:
          "Studies indicate that well-managed agroforestry systems can increase farm income by 25–50% over time compared to conventional monocropping practices. With increasing climate variability, agroforestry has become an important strategy for climate-resilient agriculture. Trees protect crops from heat waves, strong winds, and heavy rainfall while stabilizing farm ecosystems by improving soil fertility naturally.",
        foundation: "Renukiran Welfare Foundation actively promotes agroforestry as a sustainable solution for rural development, environmental restoration, and farmer empowerment. The foundation works closely with farmers, local communities, corporate partners, and government agencies to implement region-specific agroforestry models using native and climate-resilient tree species. By strengthening farmer capacity through training, quality saplings, and market linkages, agroforestry becomes a sustainable livelihood model rather than a one-time plantation activity.",
      },
    },
    {
      id: 2,
      title: "Miyawaki Forests",
      icon: <TreePine className="w-8 h-8" />,
      color: "from-emerald-500 to-green-700",
      bgColor: "bg-emerald-50",
      shortDesc:
        "Creating dense native forests in small spaces for rapid biodiversity restoration and urban cooling.",
      image: "/plantationPictures/WhatsApp Image 2026-03-06 at 12.45.19.jpeg",
      fullContent: {
        overview:
          "The Miyawaki method is a scientifically designed afforestation technique that focuses on planting dense clusters of native tree species to replicate natural forest ecosystems. Developed by Japanese botanist Dr. Akira Miyawaki, the method aims to restore native vegetation and accelerate forest growth. Unlike traditional plantation methods where trees are spaced widely, Miyawaki forests are planted closely together.",
        understanding: "This dense plantation encourages rapid competition for sunlight, water, and nutrients, resulting in faster growth and stronger root systems. Within a few years, these plantations evolve into self-sustaining forests that require minimal human intervention. Key characteristics include dense plantation of native species, multi-layered vegetation structure, rapid growth rate, high biodiversity support, and self-sustainability after initial care.",
        traditional: "The Miyawaki method was developed in the 1970s by Dr. Akira Miyawaki while restoring degraded landscapes in Japan. His approach focused on reintroducing native species rather than relying on fast-growing exotic trees. Over the years, the method has been implemented across several countries to restore ecological balance in urban and industrial areas. India began adopting the Miyawaki approach more widely after 2015 as cities sought innovative solutions to tackle air pollution, heat islands, and declining biodiversity.",
        importance: [
          "Dense plantation encourages rapid growth and stronger root systems",
          "Multi-layered vegetation structure mimics natural forests",
          "Self-sustaining after initial care period",
          "High biodiversity support in compact urban spaces",
          "Significant carbon sequestration capacity",
          "Can grow up to ten times faster than traditional plantations",
          "Small urban plots can accommodate thousands of saplings",
        ],
        benefits: [
          "Reduces urban heat island effect through shade and evapotranspiration",
          "Improves air quality by trapping dust and pollutants",
          "Enhances groundwater recharge",
          "Provides habitat for birds, insects, and small animals",
          "Acts as natural sound barriers reducing noise pollution",
          "Dense root systems improve soil structure and prevent erosion",
          "Organic matter from fallen leaves enriches the soil",
          "Once established, requires little to no maintenance or irrigation",
        ],
        impact:
          "Within months of plantation, insects, butterflies, bees, and birds begin to return to the site, gradually rebuilding ecological networks and transforming barren urban spaces into thriving natural habitats. Urban forests play a critical role in combating climate change by absorbing carbon dioxide and reducing the urban heat island effect.",
        foundation: "Renukiran Welfare Foundation actively promotes the development of Miyawaki forests as part of its environmental sustainability initiatives. The foundation works with communities, institutions, corporates, and local authorities to transform unused or degraded land into thriving native forests. Each project is designed with careful planning that includes soil assessment, selection of suitable native species, and scientific plantation techniques to ensure long-term ecological success.",
      },
    },
    {
      id: 3,
      title: "Mangrove Restoration",
      icon: <Waves className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      shortDesc:
        "Protecting coastlines and marine ecosystems through restoration of resilient mangrove forests.",
      image: "/plantationPictures/WhatsApp Image 2026-03-06 at 12.45.32.jpeg",
      fullContent: {
        overview:
          "Mangroves are groups of salt-tolerant trees and shrubs that grow in coastal intertidal zones where seawater regularly mixes with freshwater. These plants have developed unique adaptations that allow them to survive in saline and oxygen-poor environments. Their specialized root systems—such as aerial roots, prop roots, and breathing roots—enable them to remain stable in muddy soils while absorbing oxygen from the air.",
        understanding: "These root networks also trap sediments and reduce wave energy, creating stable habitats for numerous marine species. India hosts several important mangrove ecosystems spread across coastal states such as West Bengal, Gujarat, Odisha, Andhra Pradesh, Tamil Nadu, Maharashtra, and the Andaman & Nicobar Islands. Among them, the Sundarbans mangrove forest is the largest mangrove ecosystem in the world and a UNESCO-recognized biodiversity hotspot.",
        traditional: "Historically, mangroves supported coastal communities by protecting villages from storms, providing timber and fuelwood, and sustaining fisheries. However, increasing urbanization, coastal infrastructure development, aquaculture expansion, and pollution have led to significant loss and degradation of mangrove habitats. Protecting and restoring mangroves has therefore become an urgent environmental priority.",
        importance: [
          "Natural coastal defense against storms and cyclones",
          "Dense root systems slow down waves and reduce storm surge intensity",
          "Breeding and nursery grounds for marine organisms",
          "Store several times more carbon per hectare than tropical forests",
          "Support commercially important fish species",
          "Protect homes, farmland, and infrastructure from storm surges",
          "Large percentage of fish species depend on mangroves during life cycle",
          "Store carbon in both biomass and waterlogged soils for hundreds of years",
        ],
        benefits: [
          "Filter pollutants and sediments from water improving coastal water quality",
          "Stabilize coastlines and prevent soil erosion",
          "Reduce saltwater intrusion protecting freshwater resources",
          "Support diverse bird species, reptiles, and small mammals",
          "Protect nearby coral reefs and seagrass beds",
          "Trap sediments helping build and maintain coastal landforms",
          "Some species filter salt through specialized root membranes",
          "Breathing roots emerge above soil to absorb oxygen",
        ],
        impact:
          "Studies show that mangroves can significantly reduce the impact of cyclones by absorbing wave energy before it reaches inland areas, making them increasingly important as climate change intensifies coastal storms. Scientific research indicates that mangrove forests can store several times more carbon per hectare than many tropical forests, contributing significantly to global climate change mitigation efforts.",
        foundation: "Renukiran Welfare Foundation actively promotes mangrove conservation and restoration as part of its environmental sustainability initiatives. The foundation collaborates with coastal communities, environmental experts, and partner organizations to restore degraded mangrove areas using native species suited to local ecological conditions. These initiatives focus on strengthening coastal resilience, supporting biodiversity, and improving the livelihoods of communities that depend on marine ecosystems.",
      },
    },
    {
      id: 4,
      title: "Rural Forest Restoration",
      icon: <Mountain className="w-8 h-8" />,
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
      shortDesc:
        "Reviving degraded rural landscapes through native tree plantation and community-led ecosystem restoration.",
      image: "/plantationPictures/WhatsApp Image 2026-03-06 at 12.45.24.jpeg",
      fullContent: {
        overview:
          "Forests have always played a central role in the lives of rural communities across India. For generations, they have provided essential resources such as fuelwood, fodder, fruits, medicinal plants, and clean water. Beyond economic benefits, forests also hold cultural and ecological significance, forming an integral part of village life. However, over the years, large portions of rural forests have become degraded due to overexploitation, land-use changes, and environmental stress.",
        understanding: "Rural forest restoration involves revitalizing degraded landscapes through the planting of native tree species, natural regeneration, soil improvement, and long-term protection to rebuild complete ecosystems. The goal is not merely to plant trees but to rebuild complete ecosystems that can sustain themselves over time. Key principles include planting diverse native tree species suited to the local ecosystem, supporting natural regeneration of existing vegetation, improving soil quality and water retention, protecting young forests from grazing and fire, and involving communities in planning and management.",
        traditional: "Traditionally, villages across India maintained a close relationship with nearby forests. Community-managed woodlands, sacred groves, and village commons served as important sources of natural resources. These forests helped meet daily needs while maintaining ecological balance. However, increasing population pressures, commercial resource extraction, and declining community control gradually weakened this balance. Restoring these forests is therefore not only an ecological necessity but also a way to revive traditional relationships between communities and nature.",
        importance: [
          "Improves soil health through enhanced organic matter and microbial activity",
          "Supports nutrient cycling and water infiltration",
          "Provides non-timber forest products for rural livelihoods",
          "Reduces soil erosion and stabilizes land",
          "Strengthens climate resilience in drought-prone regions",
          "Trees contribute to improving soil fertility through falling leaves",
          "Diverse forests are more resilient to climate stress than simplified ecosystems",
          "Mixed-species plantations reduce pest outbreaks and strengthen ecological balance",
        ],
        benefits: [
          "Return of biodiversity including birds, insects, and small mammals",
          "Carbon sequestration in both biomass and soil",
          "Improved groundwater recharge and watershed protection",
          "Fodder for livestock and organic matter for agriculture",
          "Natural buffers against extreme weather",
          "Tree roots stabilize soil and reduce erosion",
          "Improved soil permeability supports groundwater recharge",
          "Diversifies livelihood opportunities increasing economic resilience",
        ],
        impact:
          "When local communities are actively involved in planting, protecting, and managing forests, restoration efforts become more sustainable, combining traditional ecological knowledge with scientific restoration practices. Healthy forests perform numerous ecological functions that support land productivity and environmental stability. Forest soils often store more carbon than the vegetation growing above them.",
        foundation: "Renukiran Welfare Foundation works to promote rural forest restoration by integrating ecological conservation with community development. The foundation collaborates with local communities, institutions, and partners to restore degraded landscapes using native and climate-resilient tree species. Each restoration initiative focuses on improving ecological health while also supporting rural livelihoods through careful site selection, soil preparation, and long-term monitoring to ensure high survival rates and sustainable forest growth.",
      },
    },
    {
      id: 5,
      title: "Urban Forests",
      icon: <Building2 className="w-8 h-8" />,
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
      shortDesc:
        "Transforming cities into greener, cooler spaces through sustainable urban forestry and green infrastructure.",
      image: "/plantationPictures/WhatsApp Image 2026-03-06 at 12.45.26.jpeg",
      fullContent: {
        overview:
          "Cities across India are expanding rapidly, bringing economic growth and improved infrastructure. However, this development often comes with unintended environmental consequences. Rising temperatures, declining tree cover, poor air quality, and frequent urban flooding are becoming common challenges in many cities. Urban forests refer to the network of trees, shrubs, and vegetation found within and around urban areas. These green spaces function as interconnected ecosystems that support biodiversity, regulate temperature, and improve air quality.",
        understanding: "Rather than being isolated patches of greenery, well-designed urban forests function as interconnected ecosystems. They support biodiversity, regulate temperature, and improve air quality. Urban forests are often described as the 'green lungs' of cities, but their role extends far beyond oxygen production. They contribute to environmental stability while also creating healthier and more pleasant living spaces for urban populations. Green infrastructure refers to the strategic use of natural systems to perform functions traditionally handled by built infrastructure, including urban forests, rain gardens, bioswales, permeable pavements, green roofs, and wetland restoration.",
        traditional: "Historically, many Indian towns and cities were designed in harmony with natural landscapes. Tree-lined streets, water bodies, and community green spaces were common features of urban settlements. However, rapid urbanization has altered this balance. Increasing built-up areas, shrinking green spaces, and the loss of natural drainage systems have made cities more vulnerable to heatwaves, pollution, and flooding. Urban forests and green infrastructure offer an opportunity to restore this lost connection with nature while addressing modern environmental challenges.",
        importance: [
          "Reduces urban heat island effect through shade and evapotranspiration",
          "Improves air quality by capturing airborne particles",
          "Manages stormwater naturally reducing flood risk",
          "Provides habitat for urban wildlife",
          "Enhances mental health and social well-being",
          "Trees help counter heat by providing shade and releasing moisture",
          "Leaves and branches act as natural filters trapping dust and particulate matter",
          "Rain gardens and bioswales allow water to infiltrate soil rather than flowing into drainage",
        ],
        benefits: [
          "Lowers local temperatures during extreme summer conditions",
          "Filters dust and particulate matter",
          "Increases water absorption capacity reducing runoff",
          "Creates ecological stepping stones connecting fragmented habitats",
          "Encourages outdoor activities and community interaction",
          "Shaded streets encourage walking and outdoor activities",
          "Access to parks and natural landscapes reduces stress and improves mental health",
          "Community green spaces foster social interaction and strengthen neighborhood connections",
        ],
        impact:
          "Even a small increase in tree cover can make a noticeable difference in densely populated areas, creating healthier urban environments that support both ecological balance and human well-being. A single mature tree can significantly influence the microclimate of its surroundings. Dense micro-forests can be created even in small urban plots using native species.",
        foundation: "Renukiran Welfare Foundation actively works to promote urban forests and green infrastructure initiatives across cities. The foundation collaborates with communities, institutions, and corporate partners to create green spaces that contribute to ecological restoration and climate resilience. Each project is designed with scientific planning that includes soil assessment, selection of suitable native species, and plantation techniques that encourage long-term forest development.",
      },
    },
    {
      id: 6,
      title: "Food Forests",
      icon: <Apple className="w-8 h-8" />,
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      shortDesc:
        "Designing edible ecosystems that produce diverse, nutritious food while restoring soil and biodiversity.",
      image: "/plantationPictures/WhatsApp Image 2026-03-06 at 12.45.28.jpeg",
      fullContent: {
        overview:
          "Food security is often measured through crop yields, agricultural output, and supply chains. However, the deeper challenge lies in producing nutritious food while preserving the health of the ecosystems that support agriculture. A food forest, also known as an edible forest ecosystem, is a carefully designed planting system that mimics the structure and functioning of natural forests while producing a wide range of edible plants, creating self-sustaining ecosystems capable of continuous food production.",
        understanding: "Instead of focusing on a single crop, food forests integrate multiple layers of vegetation that work together to support ecological stability and continuous food production. These layers typically include tall fruit and nut trees forming the canopy, smaller fruit trees and shrubs in the understory, herbs and flowering plants that attract pollinators, ground-cover plants that protect soil moisture, root crops that enhance soil structure, and climbers and vines that utilize vertical space. By combining these layers, food forests create a self-sustaining ecosystem capable of producing diverse food sources year after year.",
        traditional: "Although the term 'food forest' is often associated with modern ecological farming practices, similar systems have existed for centuries. In India, traditional home gardens in regions such as Kerala, coastal Karnataka, and parts of the Northeast function as complex food forests. These systems produce fruits, vegetables, spices, medicinal plants, and fuelwood from a single piece of land. Such traditional practices demonstrate that diverse, forest-like agricultural systems can be highly productive while remaining environmentally sustainable.",
        importance: [
          "Produces diverse crops across different seasons",
          "Improves dietary quality and nutritional security",
          "Reduces dependence on expensive agricultural inputs",
          "Enhances soil fertility through organic matter accumulation",
          "Provides economic resilience for small landholders",
          "Provides continuous yields of fruits, vegetables, herbs, and nuts",
          "Deep-rooted trees draw minerals from lower soil layers",
          "Nitrogen-fixing plants enrich soil fertility benefiting nearby crops",
        ],
        benefits: [
          "Permanent vegetation cover protects soil from erosion",
          "Supports birds, insects, and pollinators increasing biodiversity",
          "Stores carbon in both trees and soil",
          "Reduces evaporation preserving moisture",
          "Adapts well to water-stressed regions",
          "Accumulation of organic matter improves soil structure and microbial activity",
          "Layered canopy reduces direct sunlight lowering evaporation rates",
          "Deep-rooted trees access water from deeper soil layers during dry periods",
        ],
        impact:
          "Once established, food forests can produce food for decades with minimal external inputs, demonstrating how biodiversity and productivity can coexist in sustainable agricultural landscapes. Soil fertility in food forests generally improves over time due to continuous organic matter accumulation. Traditional forest garden systems may contain dozens of useful plant species growing together on a single plot.",
        foundation: "Renukiran Welfare Foundation actively promotes food forest development as part of its broader efforts to support sustainable land use and community well-being. The foundation collaborates with communities, institutions, and partner organizations to design and implement food forest projects suited to local environmental conditions. By encouraging the use of native and climate-resilient edible species, improving soil health, and promoting layered planting systems, the foundation aims to create productive landscapes that support both ecological restoration and food security.",
      },
    },
    {
      id: 7,
      title: "Cleaning Drives",
      icon: <Trash2 className="w-8 h-8" />,
      color: "from-yellow-500 to-amber-600",
      bgColor: "bg-yellow-50",
      shortDesc:
        "Mobilizing communities to clean public spaces and promote responsible waste management practices.",
      image: "/plantationPictures/WhatsApp Image 2026-03-06 at 16.21.50.jpeg",
      fullContent: {
        overview:
          "Clean surroundings are fundamental to public health, environmental sustainability, and community well-being. Yet many urban and rural areas continue to struggle with issues such as improper waste disposal, plastic pollution, clogged drainage systems, and unmanaged dumping sites. Cleaning drives are coordinated efforts where volunteers, organizations, and community members participate in cleaning public areas while promoting environmental awareness and responsible waste management practices.",
        understanding: "A cleaning drive is a coordinated effort where volunteers, organizations, and community members participate in cleaning public areas such as streets, parks, water bodies, markets, and residential neighborhoods. The primary objectives include removing accumulated waste and litter from public spaces, promoting responsible waste disposal practices, raising awareness about environmental cleanliness, and encouraging community participation in maintaining hygiene. These initiatives serve as both environmental interventions and educational campaigns that highlight the importance of sustainable waste management.",
        traditional: "Clean environments directly influence public health and quality of life. Improper waste disposal often leads to the spread of diseases, water contamination, and increased pollution levels. Plastic waste and unmanaged garbage can block drainage systems, causing urban flooding during heavy rainfall. Additionally, waste dumped in open areas contributes to soil and air pollution. Regular cleaning initiatives help prevent these problems by ensuring that waste is removed, segregated, and disposed of responsibly.",
        importance: [
          "Removes accumulated waste preventing pollution",
          "Prevents diseases spread through improper waste disposal",
          "Reduces plastic waste entering natural ecosystems",
          "Unclogs drainage systems preventing urban flooding",
          "Builds community responsibility toward cleanliness",
          "Accumulated garbage becomes breeding grounds for mosquitoes and rodents",
          "Plastic waste takes hundreds of years to decompose damaging wildlife",
          "Waste collected is separated into recyclable, organic, and non-recyclable categories",
        ],
        benefits: [
          "Improves public health by eliminating disease breeding grounds",
          "Protects biodiversity and aquatic life",
          "Promotes waste segregation and recycling",
          "Strengthens social connections within communities",
          "Educates youth about environmental stewardship",
          "Prevents pollutants from entering natural ecosystems like rivers and lakes",
          "Fosters cooperation and civic responsibility among residents",
          "Encourages individuals to adopt sustainable habits like waste segregation and recycling",
        ],
        impact:
          "When communities come together to clean public spaces, they not only restore the environment but also build a shared sense of responsibility, creating a culture where maintaining cleanliness becomes a collective effort. A significant portion of urban waste consists of recyclable materials that could be reused if properly segregated. Community awareness and behavioral change are among the most effective ways to reduce waste generation.",
        foundation: "Renukiran Welfare Foundation actively organizes cleaning drives as part of its commitment to environmental sustainability and community development. The foundation collaborates with volunteers, educational institutions, local authorities, and corporate partners to conduct organized clean-up activities in public spaces. These initiatives focus not only on removing waste but also on spreading awareness about responsible waste management and environmental stewardship.",
      },
    },
    {
      id: 8,
      title: "Pond Restoration",
      icon: <Droplets className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-50",
      shortDesc:
        "Rejuvenating traditional water bodies to improve water security, biodiversity, and community sustainability.",
      image: "/plantationPictures/WhatsApp Image 2026-03-06 at 16.15.19.jpeg",
      fullContent: {
        overview:
          "Ponds have been an essential part of India's ecological and cultural landscape for centuries. Traditionally, these small water bodies supported agriculture, livestock, groundwater recharge, and community life. In many villages and towns, ponds served as the primary source of water during dry seasons. However, rapid urbanization, pollution, encroachment, and neglect have led to the degradation of many ponds across the country. Pond restoration is the process of rehabilitating degraded ponds to restore their natural ecological functions, improve water quality, and strengthen local water security through traditional water management systems.",
        understanding: "Pond restoration is the process of rehabilitating degraded ponds to restore their natural ecological functions and improve water quality. This process typically includes activities such as removal of accumulated silt and debris, cleaning and removal of solid waste, strengthening pond boundaries and embankments, rejuvenating natural water inflow channels, and plantation of native vegetation around the pond. Through these efforts, ponds regain their capacity to store water, support biodiversity, and contribute to local environmental balance.",
        traditional: "For centuries, ponds have been a cornerstone of traditional water management systems in India. Many communities built and maintained ponds to store rainwater and ensure water availability throughout the year. These water bodies served multiple purposes, including irrigation, livestock watering, fishing, and household use. Ponds also played an important role in maintaining local groundwater levels. In many regions, ponds were considered community assets and were protected through collective management practices. Over time, however, urban expansion and declining community stewardship have caused many ponds to deteriorate or disappear.",
        importance: [
          "Natural water storage systems regulating local hydrology",
          "Improves groundwater recharge replenishing aquifers",
          "Captures excess runoff reducing flooding risks",
          "Provides water for irrigation and livestock",
          "Supports aquatic plants, birds, fish, and amphibians",
          "During rainfall ponds capture excess runoff and reduce flooding risks",
          "Water slowly seeps into soil replenishing underground aquifers",
          "Wetland vegetation provides nesting areas for birds and shelter for aquatic organisms",
        ],
        benefits: [
          "Removes contaminants improving water quality",
          "Vegetation acts as biological filters absorbing nutrients",
          "Prevents soil erosion and stabilizes embankments",
          "Regulates microclimates providing cooler environments",
          "Enhances natural beauty of surrounding landscapes",
          "Restoration efforts help address problems by removing contaminants and improving water circulation",
          "Plants growing along pond edges act as biological filters absorbing nutrients",
          "Vegetation around restored ponds helps regulate microclimates providing cooler environments",
        ],
        impact:
          "Restored ponds often become valuable community spaces that provide environmental, cultural, and social benefits, supporting local livelihoods while improving sanitation and reducing health risks. Even small ponds can significantly improve groundwater recharge in surrounding areas. Healthy ponds support numerous species of aquatic plants and animals.",
        foundation: "Renukiran Welfare Foundation actively supports pond restoration initiatives as part of its environmental sustainability efforts. The foundation collaborates with communities, local authorities, and partner organizations to revive degraded ponds and restore their ecological functions. Restoration projects focus on cleaning water bodies, improving water inflow systems, strengthening embankments, and planting native vegetation around ponds to transform neglected water bodies into healthy ecosystems that benefit both nature and communities.",
      },
    },
  ];

  const impactStats = [
    {
      icon: <TreePine className="w-8 h-8" />,
      number: "2,00,000+",
      label: "Trees Planted",
      color: "text-green-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "50,000+",
      label: "Community Members Engaged",
      color: "text-blue-600",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      number: "12+",
      label: "States Covered",
      color: "text-purple-600",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "90%",
      label: "Survival Rate",
      color: "text-emerald-600",
    },
  ];

  const openModal = (program) => {
    setSelectedProgram(program);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProgram(null);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/assets/patterns/leaves.svg')] opacity-30"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-emerald-400 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-teal-400 rounded-full opacity-25 animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-6 py-24 text-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center mb-6">
              <TreePine className="w-16 h-16 text-green-200 mr-4 animate-pulse" />
              <h1 className="text-4xl lg:text-7xl md:text-6xl font-bold text-white">
                Plant Trees{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-emerald-100">
                Create Impact
                </span>
              </h1>
              <Leaf className="w-16 h-16 text-emerald-200 ml-4 animate-bounce" />
            </div>
            <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed mb-6">
              Growing a Greener Tomorrow Through Community-Led Environmental
              Restoration
            </p>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
              Join us in our mission to restore ecosystems, combat climate
              change, and create sustainable futures through diverse plantation
              initiatives
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-green-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                Support Our Mission
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-700 transition-all duration-300 shadow-xl flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Volunteer With Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stats Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className={`${stat.color}`}>{stat.icon}</div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Globe className="w-12 h-12 text-green-600 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                Our Plantation Initiatives
              </h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              At Renukiran Welfare Foundation, we believe in the power of nature
              to heal, restore, and sustain. Our comprehensive plantation
              programs address multiple environmental challenges while empowering
              communities and creating lasting positive impact.
            </p>
          </div>
        </div>
      </div>

      {/* Photo Gallery Carousel */}
      <div className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Camera className="w-12 h-12 text-green-600 mr-3" />
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                  Our Plantation Journey
                </h2>
              </div>
              <p className="text-xl text-gray-700">
                Witness the transformation through our community-driven plantation initiatives
              </p>
            </div>

            {/* Carousel using Embla */}
            <div className="embla rounded-3xl overflow-hidden shadow-2xl" ref={emblaRef}>
              <div className="embla__container">
                {carouselImages.map((image, index) => (
                  <div key={index} className="embla__slide relative h-96 md:h-[500px]">
                    <Image
                      src={image}
                      alt={`Plantation activity ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plantationPrograms.map((program, index) => (
              <div
                key={program.id}
                className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div
                      className={`bg-gradient-to-r ${program.color} p-3 rounded-xl text-white mr-3`}
                    >
                      {program.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {program.title}
                    </h3>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {program.shortDesc}
                  </p>

                  <button
                    onClick={() => openModal(program)}
                    className={`w-full bg-gradient-to-r ${program.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group`}
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Be Part of the Green Revolution
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Every tree planted is a step towards a healthier planet. Join us in
              our mission to restore ecosystems, combat climate change, and
              create sustainable communities. Your support can make a real
              difference.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-green-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center">
                <Heart className="w-6 h-6 mr-2" />
                Donate Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-700 transition-all duration-300 shadow-xl flex items-center">
                <Users className="w-6 h-6 mr-2" />
                Become a Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedProgram && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75 backdrop-blur-sm"
              onClick={closeModal}
            ></div>

            {/* Modal panel */}
            <div className="inline-block align-bottom bg-white rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              {/* Header */}
              <div
                className={`bg-gradient-to-r ${selectedProgram.color} px-8 py-6 relative`}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-all duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="flex items-center text-white">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl mr-4">
                    {selectedProgram.icon}
                  </div>
                  <h3 className="text-3xl font-bold">
                    {selectedProgram.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="px-8 py-6 max-h-[70vh] overflow-y-auto">
                {/* Overview */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <Target className="w-6 h-6 text-green-600 mr-2" />
                    Overview
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    {selectedProgram.fullContent.overview}
                  </p>
                  {selectedProgram.fullContent.understanding && (
                    <p className="text-gray-700 leading-relaxed text-lg mb-4">
                      {selectedProgram.fullContent.understanding}
                    </p>
                  )}
                  {selectedProgram.fullContent.traditional && (
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {selectedProgram.fullContent.traditional}
                    </p>
                  )}
                </div>

                {/* Importance */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <Sparkles className="w-6 h-6 text-blue-600 mr-2" />
                    Why It Matters
                  </h4>
                  <ul className="space-y-3">
                    {selectedProgram.fullContent.importance.map(
                      (item, index) => (
                        <li
                          key={index}
                          className="flex items-start text-gray-700"
                        >
                          <ChevronRight className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <Leaf className="w-6 h-6 text-emerald-600 mr-2" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-3">
                    {selectedProgram.fullContent.benefits.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-700"
                      >
                        <ChevronRight className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <TrendingUp className="w-6 h-6 text-purple-600 mr-2" />
                    Our Impact
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {selectedProgram.fullContent.impact}
                  </p>
                </div>

                {/* Foundation Role */}
                {selectedProgram.fullContent.foundation && (
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
                    <h4 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                      <Heart className="w-6 h-6 text-red-600 mr-2" />
                      Renukiran Welfare Foundation's Role
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {selectedProgram.fullContent.foundation}
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="bg-gray-50 px-8 py-6 flex flex-wrap gap-4 justify-end">
                <button
                  onClick={closeModal}
                  className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300"
                >
                  Close
                </button>
                <button
                  className={`px-6 py-3 bg-gradient-to-r ${selectedProgram.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center`}
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Support This Initiative
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlantationDrivePage;
