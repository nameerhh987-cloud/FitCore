// ============================================================
// THE LAB ATHLETIC CLUB — Master Site Data
// Sunset Blvd • Los Angeles, CA
// ============================================================

const GYM = {
  name: "THE LAB ATHLETIC CLUB",
  shortName: "THE LAB",
  tagline: "SUNSET BLVD • LOS ANGELES, CA",
  fullName: "The Lab Athletic Club Sunset Strip",
  phone: "(323) 370-9110",
  phoneHref: "tel:+13233709110",
  email: "vip@thelabathletic.com",
  address: {
    line1: "8305 Sunset Blvd Ste E",
    line2: "Sunset Strip, West Hollywood",
    city: "Los Angeles, CA 90069",
    country: "United States",
    mapLink: "https://maps.google.com/?q=8305+Sunset+Blvd+Ste+E+Los+Angeles+CA+90069"
  },
  hours: [
    { days: "Mon - Fri", time: "5:00 AM - 11:00 PM" },
    { days: "Saturday",  time: "6:00 AM - 10:00 PM" },
    { days: "Sunday",    time: "7:00 AM - 8:00 PM"  },
    { days: "Recovery Suite", time: "8:00 AM - 9:00 PM (Daily)" }
  ],
  socials: {
    instagram: "https://instagram.com",
    facebook:  "https://facebook.com",
    twitter:   "https://twitter.com"
  }
};

const NAV_LINKS = [
  { label: "Home",        href: "#hero"         },
  { label: "About",       href: "#about"        },
  { label: "Programs",    href: "#programs"     },
  { label: "Coaches",     href: "#trainers"     },
  { label: "Membership",  href: "#pricing"      },
  { label: "Reviews",     href: "#testimonials" },
  { label: "Facility",    href: "#gallery"      },
  { label: "FAQ",         href: "#faq"          },
  { label: "Contact",     href: "#contact"      }
];

const STATS = [
  { value: "4.9★",  label: "420+ REVIEWS",    icon: "star"   },
  { value: "ELITE", label: "PRO LAB GEAR",    icon: "zap"    },
  { value: "LA",    label: "SUNSET BLVD",     icon: "map-pin"},
  { value: "FREE",  label: "VIP DAY PASS",    icon: "shield" }
];

const PROGRAMS = [
  {
    id: "biomechanics",
    icon: "dumbbell",
    title: "Biomechanic Strength & Hypertrophy",
    description: "Engineered hypertrophy leveraging customized resistance curves, calibrated Olympic platforms, and high-load power racks for maximum muscular efficiency.",
    tags: ["Olympic Racks", "Calibrated Plates", "Hypertrophy"],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "conditioning",
    icon: "heart-pulse",
    title: "Metabolic Conditioning & VO2 Max",
    description: "High-intensity athletic conditioning protocols utilizing curved manual treadmills, Concept2 ergometers, assault bikes, and targeted heart-rate zone tracking.",
    tags: ["VO2 Max", "Curved Ergometers", "Zone Training"],
    image: "https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "functional",
    icon: "zap",
    title: "Pro Athlete Functional Turf",
    description: "Dynamic explosive power training on our 40-yard indoor turf. Sled sprints, rotational kettlebell work, plyometrics, and agility acceleration ladders.",
    tags: ["Sled Sprints", "Kettlebell Flow", "Agility Turf"],
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "combat",
    icon: "shield",
    title: "Sunset Strip Boxing & Combat",
    description: "Championship-grade boxing ring, water-filled heavy bags, speed spheres, and private striking coaches developing elite hand speed, stamina, and mental grit.",
    tags: ["Boxing Ring", "Striking Suite", "Footwork Drill"],
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "recovery",
    icon: "leaf",
    title: "Hyperbaric, Cryo & Athletic Mobility",
    description: "Accelerate central nervous system recovery through infrared saunas, cold plunge tubs, percussive therapy, and guided myofascial mobility clinics.",
    tags: ["Cold Plunge", "Infrared Sauna", "Myofascial Release"],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "nutrition",
    icon: "apple",
    title: "Precision Sports Nutrition & DEXA",
    description: "Clinical DEXA body composition scanning paired with bio-individualized macronutrient periodization designed for Hollywood athletes and executives.",
    tags: ["DEXA Scans", "Macro Periodization", "Bio-Performance"],
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80"
  }
];

const TRAINERS = [
  {
    name: "Marcus Vance, CSCS",
    role: "Director of Athletic Performance",
    experience: "12+ Years",
    specialties: ["Biomechanics", "Olympic Lifting", "Pro Athlete Prep"],
    bio: "Former NCAA Division I strength specialist who has prepared championship fighters, NFL athletes, and high-performance film talent on Sunset Blvd.",
    initials: "MV",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Elena Rostova",
    role: "Head of Conditioning & Movement",
    experience: "8+ Years",
    specialties: ["VO2 Max Intervals", "Mobility Science", "Kettlebell Agility"],
    bio: "Pioneered functional athletic flow systems. Specializes in building unshakeable cardiovascular thresholds and dynamic hip/spine mobility.",
    initials: "ER",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Julian 'The Apex' Cruz",
    role: "Head Combat & Boxing Coach",
    experience: "14+ Years",
    specialties: ["Pro Boxing", "Striking Biomechanics", "Reflex Conditioning"],
    bio: "Golden Gloves veteran and elite striking technician. Trains members in explosive rotational power, counter-punching dynamics, and core resilience.",
    initials: "JC",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Dr. Chloe Sterling, MS, RD",
    role: "Performance Nutrition & Recovery",
    experience: "9+ Years",
    specialties: ["Metabolic Testing", "DEXA Analysis", "Cellular Nutrition"],
    bio: "Specialist in metabolic rate testing and anti-inflammatory sports nutrition. Customizes recovery protocols and nutrient timing for optimum body composition.",
    initials: "CS",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80"
  }
];

const PLANS = [
  {
    id: "club-access",
    name: "Club Access",
    price: "175",
    period: "/ month",
    badge: null,
    description: "Full access to our state-of-the-art Sunset Blvd training arena and recovery zones.",
    features: [
      "Unlimited Main Floor & Turf Access",
      "Calibrated Olympic Racks & Free Weights",
      "Curved Treadmills & Cardio Deck",
      "Luxury Spa Showers & Keyless Lockers",
      "Complimentary Baseline DEXA Scan"
    ],
    excluded: [
      "Private Boxing Ring Sparring Clinics",
      "1-on-1 Dedicated Strength Coach",
      "Cryotherapy & Cold Plunge Sessions"
    ],
    cta: "Select Club Access"
  },
  {
    id: "elite-performance",
    name: "Elite Performance",
    price: "265",
    period: "/ month",
    badge: "Most Popular",
    description: "Comprehensive athletic conditioning engineered for maximum physical transformation.",
    features: [
      "Everything in Club Access",
      "Unlimited Boxing & Conditioning Classes",
      "2x Monthly 1-on-1 Performance Coaching",
      "Full Cryotherapy & Cold Plunge Access",
      "Bi-Weekly DEXA & Metabolic Scans",
      "Precision Macro Nutrition Roadmap",
      "Priority Sunset Blvd Valet & Towel Service"
    ],
    excluded: [
      "24/7 Private Coach Concierge"
    ],
    cta: "Claim Elite Membership"
  },
  {
    id: "vip-black",
    name: "VIP Black Tier",
    price: "425",
    period: "/ month",
    badge: "VIP Exclusive",
    description: "The premier private training experience with dedicated coach concierge and executive suites.",
    features: [
      "Everything in Elite Performance",
      "Weekly 1-on-1 Private Training Sessions",
      "Unlimited Recovery & Infrared Sauna Suites",
      "24/7 Dedicated Coach Concierge Access",
      "Custom Macro Meal Prep Partner Discounts",
      "Exclusive Sunset Rooftop Lounge Access",
      "4 Monthly Complimentary VIP Guest Passes"
    ],
    excluded: [],
    cta: "Apply For VIP Black"
  }
];

const TESTIMONIALS = [
  {
    name: "Christian Vance",
    role: "Film Producer & West Hollywood Resident",
    rating: 5,
    text: "The Lab is hands down the most refined, serious athletic facility on Sunset Blvd. The machinery is state-of-the-art, the vibe is intensely focused, and Marcus pushed my lifting to another level.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Sienna Martinez",
    role: "Triathlete & Fitness Model",
    rating: 5,
    text: "Between the cold plunge suites, curved ergometers, and Elena's mobility coaching, my recovery time halved. There is zero clutter or fluff here—pure science-driven performance.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "David Sterling",
    role: "Executive Athlete, 2 Years at The Lab",
    rating: 5,
    text: "Julian's boxing conditioning is unmatched. If you work in LA and need an elite environment where serious work gets done without pretension, The Lab Athletic Club is the gold standard.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Victoria Chen",
    role: "Performance Member",
    rating: 5,
    text: "Dr. Sterling's DEXA analysis and nutrition plan reshaped my physique in 12 weeks. The private showers, pristine equipment, and Sunset Strip location make it effortless to train daily.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Liam O'Connor",
    role: "Competitive Powerlifter",
    rating: 5,
    text: "Calibrated plates, competition benches, heavy dumbells up to 150 lbs, and rock-solid power cages. Finally, a premier Hollywood club built for real strength athletes.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
  }
];

const GALLERY_ITEMS = [
  {
    category: "facility",
    label: "Main Biomechanics Training Arena",
    icon: "dumbbell",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
  },
  {
    category: "facility",
    label: "Olympic Platforms & Calibrated Free Weights",
    icon: "layers",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "class",
    label: "40-Yard Athletic Sprint Turf",
    icon: "users",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "class",
    label: "Cold Plunge & Cryo Recovery Suite",
    icon: "leaf",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "combat",
    label: "Championship Boxing Ring & Heavy Bags",
    icon: "shield",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1200&q=80"
  },
  {
    category: "combat",
    label: "Pro Striking & Sparring Deck",
    icon: "zap",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "facility",
    label: "Cardio Loft & VO2 Max Suite",
    icon: "heart-pulse",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "class",
    label: "1-on-1 Elite Coach Biomechanics Session",
    icon: "user-check",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "facility",
    label: "Executive Locker Rooms & Recovery Lounge",
    icon: "check-circle",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80"
  }
];

const FAQS = [
  {
    q: "Where is The Lab Athletic Club located on Sunset Blvd?",
    a: "We are located at 8305 Sunset Blvd Ste E, Los Angeles, CA 90069 on the iconic Sunset Strip in West Hollywood. Dedicated validated parking and private entry are available for all club members."
  },
  {
    q: "How do I claim my complimentary VIP Day Pass?",
    a: "Select 'CLAIM VIP PASS' on this page or call our front desk directly at (323) 370-9110. Your pass grants full floor access, facility tour, and an introductory coach assessment."
  },
  {
    q: "What equipment and facilities does The Lab feature?",
    a: "Our club features competition-grade Olympic cages, calibrated steel plates, custom dumbbells up to 150 lbs, a 40-yard athletic sprint turf, championship boxing ring, curved manual treadmills, cold plunges, infrared saunas, and private executive locker suites."
  },
  {
    q: "Are personal training sessions included with membership?",
    a: "Our Elite Performance tier includes 2 monthly 1-on-1 private coaching sessions, while our VIP Black Tier features weekly sessions plus 24/7 coach concierge access. Additional sessions can be booked a la carte with our master instructors."
  },
  {
    q: "Can I pause my membership if I am traveling or filming on location?",
    a: "Yes. Active members may freeze their accounts for up to 60 days per calendar year with simple advance notice to member services."
  },
  {
    q: "What are your operating hours?",
    a: "The Lab is open Monday through Friday from 5:00 AM to 11:00 PM, Saturday from 6:00 AM to 10:00 PM, and Sunday from 7:00 AM to 8:00 PM. Our Recovery Suite is open daily from 8:00 AM to 9:00 PM."
  }
];