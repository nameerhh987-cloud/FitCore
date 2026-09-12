// ============================================================
// FitCore Gym North Nazimabad - Master Site Data
// ============================================================

const GYM = {
  name: "FitCore Gym",
  tagline: "North Nazimabad",
  fullName: "FitCore Gym North Nazimabad",
  phone: "0336 0895961",
  phoneHref: "tel:+923360895961",
  email: "fitcorenorthnazimabad@gmail.com",
  address: {
    line1: "Plot D9, First Floor, Block A",
    line2: "North Nazimabad Town",
    city: "Karachi, 75400",
    country: "Pakistan",
    mapLink: "https://maps.google.com/?q=North+Nazimabad+Block+A+Karachi"
  },
  hours: [
    { days: "Mon - Fri", time: "5:00 AM - 11:00 PM" },
    { days: "Saturday",  time: "6:00 AM - 10:00 PM" },
    { days: "Sunday",    time: "7:00 AM - 9:00 PM"  },
    { days: "Ladies Only", time: "9:00 AM - 1:00 PM (Daily)" }
  ],
  socials: {
    whatsapp:  "https://wa.me/923360895961",
    instagram: "https://instagram.com",
    facebook:  "https://facebook.com"
  }
};

const NAV_LINKS = [
  { label: "Home",        href: "#hero"         },
  { label: "About",       href: "#about"        },
  { label: "Programs",    href: "#programs"     },
  { label: "Trainers",    href: "#trainers"     },
  { label: "Pricing",     href: "#pricing"      },
  { label: "Reviews",     href: "#testimonials" },
  { label: "Gallery",     href: "#gallery"      },
  { label: "FAQ",         href: "#faq"          },
  { label: "Contact",     href: "#contact"      }
];

const STATS = [
  { value: "1,200+", label: "Active Members",      icon: "users" },
  { value: "15+",    label: "Certified Coaches",   icon: "trophy" },
  { value: "30+",    label: "Weekly Classes",      icon: "zap" },
  { value: "8+",     label: "Years in Karachi",    icon: "shield" }
];

const PROGRAMS = [
  {
    id: "strength",
    icon: "dumbbell",
    title: "Strength & Powerlifting",
    description: "State-of-the-art calibrated plates, Olympic barbells, and heavy-duty power cages for maximal strength progression and hypertrophy.",
    tags: ["Olympic Barbells", "Deadlift Platforms", "Hypertrophy"],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cardio",
    icon: "heart-pulse",
    title: "Cardio & Conditioning",
    description: "High-end curved treadmills, stairmasters, assault bikes, and rowing ergometers to build unmatched cardiovascular endurance.",
    tags: ["HIIT", "Assault Bikes", "Stairmasters"],
    image: "https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "functional",
    icon: "zap",
    title: "Functional & Cross-Training",
    description: "Real-world athletic movement patterns on our dedicated turf track. Kettlebells, battle ropes, plyo boxes, and sled push areas.",
    tags: ["Sled Push", "Battle Ropes", "Turf Track"],
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "combat",
    icon: "shield",
    title: "Boxing & Combat Sports",
    description: "Elevate discipline, hand speed, and explosive stamina on our regulation boxing ring, heavy bags, and speed bag stations.",
    tags: ["Boxing Ring", "Heavy Bags", "Footwork"],
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "yoga",
    icon: "leaf",
    title: "Yoga & Deep Recovery",
    description: "Restore joint mobility, accelerate post-workout recovery, and reduce injury risk through guided mobility and breathing sessions.",
    tags: ["Mobility Flow", "Active Recovery", "Flexibility"],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "nutrition",
    icon: "apple",
    title: "Personal Nutrition Coaching",
    description: "Individualized macronutrient targets, clean meal planning, and bi-weekly body composition scans for guaranteed body recomposition.",
    tags: ["Macro Tracking", "Fat Loss", "Clean Diet"],
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80"
  }
];

const TRAINERS = [
  {
    name: "Hassan Malik",
    role: "Head Strength Coach",
    experience: "9+ Years",
    specialties: ["Powerlifting", "Hypertrophy", "Biomechanics"],
    bio: "Certified strength specialist who has coached national powerlifting champions and guided hundreds of successful muscle transformations.",
    initials: "HM",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Sana Raza",
    role: "Cardio & Yoga Expert",
    experience: "6+ Years",
    specialties: ["HIIT", "Mobility", "Women's Fitness"],
    bio: "Leads our dedicated ladies sessions and mobility clinics. Passionate about posture correction, high metabolic burns, and functional agility.",
    initials: "SR",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Bilal Qureshi",
    role: "Boxing & MMA Coach",
    experience: "11+ Years",
    specialties: ["Boxing", "Kickboxing", "Conditioning"],
    bio: "Former national boxing medalist with over a decade of combat coaching experience. Builds ironclad mental discipline and sharp reflexes.",
    initials: "BQ",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Zara Ahmed",
    role: "Clinical Nutritionist & Coach",
    experience: "7+ Years",
    specialties: ["Diet Planning", "Recomposition", "Metabolism"],
    bio: "Certified sports nutritionist helping members build sustainable nutrition habits without starving, tailored specifically to Pakistani dietary lifestyles.",
    initials: "ZA",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80"
  }
];

const PLANS = [
  {
    id: "basic",
    name: "Basic Access",
    price: "3,500",
    period: "/ month",
    badge: null,
    description: "Self-driven gym floor access for consistent everyday lifting.",
    features: [
      "Full Gym Floor & Machine Access",
      "Free Weights & Olympic Cages",
      "Cardio Deck & HIIT Machines",
      "Locker & Shower Access",
      "Initial Fitness Assessment"
    ],
    excluded: [
      "Group Classes (Boxing & Yoga)",
      "Dedicated 1-on-1 Personal Trainer",
      "Personalized Nutrition Meal Plan"
    ],
    cta: "Join Basic Plan"
  },
  {
    id: "elite",
    name: "Elite Performance",
    price: "6,500",
    period: "/ month",
    badge: "Most Popular",
    description: "Comprehensive package for members who want rapid, noticeable results.",
    features: [
      "Everything in Basic Access",
      "Unlimited Group Combat & Yoga Classes",
      "2x Monthly 1-on-1 PT Sessions",
      "Diet & Macro Guidance Plan",
      "Body Composition Scans",
      "Priority Equipment Access",
      "Towel & Premium Locker Service"
    ],
    excluded: [
      "24/7 Dedicated Coach On-Call"
    ],
    cta: "Join Elite Plan"
  },
  {
    id: "pro",
    name: "Pro Athlete",
    price: "10,000",
    period: "/ month",
    badge: "Best Value",
    description: "The ultimate transformation experience with full personal coaching.",
    features: [
      "Everything in Elite Performance",
      "Weekly 1-on-1 Personal Training",
      "Full Custom Nutrition & Macro Plan",
      "Weekly Body Recomposition Reports",
      "Exclusive Boxing Ring Sparring Sessions",
      "Direct Coach Access via WhatsApp",
      "Free Guest Passes (2 per month)"
    ],
    excluded: [],
    cta: "Go Pro Athlete"
  }
];

const TESTIMONIALS = [
  {
    name: "Ahmed Siddiqui",
    role: "Member for 1.5 Years",
    rating: 5,
    text: "FitCore completely transformed my physique. Down 22kg in 7 months with Coach Hassan on the Elite plan. The machinery here is unmatched in North Nazimabad.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Fatima Noor",
    role: "Member for 1 Year",
    rating: 5,
    text: "The dedicated ladies timings from 9am to 1pm are so comfortable and clean. Sana is an incredible coach who genuinely cares about each member's form and safety.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Usman Tariq",
    role: "Powerlifter, 3 Years",
    rating: 5,
    text: "True Olympic barbells, calibrated steel plates, and chalk-friendly power cages. If you are serious about raw strength in Karachi, FitCore is the only gym to consider.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Mariam Baig",
    role: "Fitness Enthusiast",
    rating: 5,
    text: "Zara's nutrition coaching alone made my membership worth every rupee. I learned how to eat nutritious Pakistani meals without giving up flavor while losing body fat.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Khalid Hassan",
    role: "Boxing Member",
    rating: 5,
    text: "Coach Bilal's combat conditioning is relentless. My stamina and hand-eye coordination improved dramatically. The vibe in this gym pushes you to your absolute best.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
  }
];

const GALLERY_ITEMS = [
  {
    category: "facility",
    label: "Main Gym Floor & Dumbbell Deck",
    icon: "dumbbell",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
  },
  {
    category: "facility",
    label: "Free Weights & Heavy Barbells",
    icon: "layers",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "class",
    label: "Group HIIT & Functional Arena",
    icon: "users",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "class",
    label: "Yoga, Mobility & Recovery",
    icon: "leaf",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "combat",
    label: "Official Boxing Ring & Bags",
    icon: "shield",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1200&q=80"
  },
  {
    category: "combat",
    label: "MMA & Striking Floor",
    icon: "zap",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "facility",
    label: "High-Tech Cardio Suite",
    icon: "heart-pulse",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "class",
    label: "1-on-1 Personal Training",
    icon: "user-check",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "facility",
    label: "Locker Rooms & Hydration Bar",
    icon: "check-circle",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80"
  }
];

const FAQS = [
  {
    q: "Where exactly in North Nazimabad is FitCore Gym located?",
    a: "We are situated at Plot D9, First floor, Block A North Nazimabad Town, Karachi, 75400. We are easily accessible with dedicated parking for cars and motorbikes."
  },
  {
    q: "What are the dedicated hours for female members?",
    a: "We offer completely private, female-only timings daily from 9:00 AM to 1:00 PM with certified female trainers and full access to all floors, free weights, and cardio equipment."
  },
  {
    q: "Can I try out the gym before committing to a membership?",
    a: "Yes! We provide a complimentary 1-Day Free Trial Pass. Simply fill out our contact form or call 0336 0895961 to book your free facility tour and trial workout."
  },
  {
    q: "Is there an admission or registration fee?",
    a: "Standard registration is PKR 1,000 which includes your baseline body composition test and initial coach consultation. This fee is frequently waived during our special seasonal promotions."
  },
  {
    q: "Can I pause or freeze my membership if I travel?",
    a: "Yes, all active monthly and quarterly members can pause their memberships for up to 30 days per calendar year with a quick 3-day advance notice."
  },
  {
    q: "What brand of equipment do you have?",
    a: "Our facility is equipped with heavy-gauge commercial biomechanic equipment, competition power cages, Olympic barbells, calibrated iron plates, and commercial cardio stations."
  }
];