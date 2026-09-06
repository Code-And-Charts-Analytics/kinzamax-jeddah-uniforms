import heroKnolling from "@/assets/hero-knolling.jpg.asset.json";
import stitch from "@/assets/stitch-macro.jpg.asset.json";
import badge from "@/assets/badge-stitching.jpg.asset.json";
import flatlay from "@/assets/collection-flatlay.jpg.asset.json";
import hivisVest from "@/assets/product-hivis-vest.jpg.asset.json";
import labCoat from "@/assets/product-lab-coat.jpg.asset.json";
import securityJacket from "@/assets/product-security-jacket.jpg.asset.json";
import kmaxLabel from "@/assets/kmax-label-macro.jpg.asset.json";
import doctorLabcoat from "@/assets/lifestyle-doctor-labcoat.jpg.asset.json";
import corporatePolo from "@/assets/lifestyle-corporate-polo.jpg.asset.json";
import restaurantStaff from "@/assets/lifestyle-restaurant-staff.jpg.asset.json";
import industryHotels from "@/assets/industry-hotels.jpg.asset.json";
import industrySchools from "@/assets/industry-schools.jpg.asset.json";
import industryConstruction from "@/assets/industry-construction.jpg.asset.json";

export const images = {
  heroPolo: "/hero-polo.jpg",
  heroKnolling: heroKnolling.url,
  lineup: "/garment-lineup.jpg",
  stitch: stitch.url,
  badge: badge.url,
  flatlay: flatlay.url,
  factory: "/factory-floor.jpg",
  chefJacket: "/product-chef-jacket.jpg",
  hivisVest: hivisVest.url,
  labCoat: labCoat.url,
  securityJacket: securityJacket.url,
  stitchTriple: "/stitch-triple-macro.jpg",
  kmaxLabel: kmaxLabel.url,
  nurseScrubs: "/lifestyle-nurse-scrubs.jpg",
  doctorLabcoat: doctorLabcoat.url,
  corporatePolo: corporatePolo.url,
  restaurantStaff: restaurantStaff.url,
  industryHotels: industryHotels.url,
  industrySchools: industrySchools.url,
  industryConstruction: industryConstruction.url,
};

export const products = [
  {
    category: "Industrial",
    name: "Industrial Coverall",
    description:
      "Heavy-duty workwear coverall with multi-pocket construction, reflective strips, and reinforced stitching. Available in any color.",
    specs: ["300GSM Twill", "XS-6XL", "7-14 days"],
    placeholder: "PRODUCT_INDUSTRIAL_COVERALL",
    image: images.lineup,
  },
  {
    category: "Corporate",
    name: "Corporate Polo Shirt",
    description:
      "Premium pique or dri-fit polo with custom embroidery badge. Any Pantone color. Perfect for office and reception teams.",
    specs: ["220GSM Pique", "XS-6XL", "7-10 days"],
    placeholder: "PRODUCT_CORPORATE_POLO",
    image: images.heroPolo,
  },
  {
    category: "Hospitality",
    name: "Chef Jacket",
    description:
      "Double-breasted chef jacket with piping detail and button options. Cotton or poly blend. Name embroidery available.",
    specs: ["240GSM Cotton", "XS-4XL", "7-10 days"],
    placeholder: "PRODUCT_CHEF_JACKET",
    image: images.chefJacket,
  },
  {
    category: "Healthcare",
    name: "Medical Scrubs",
    description:
      "V-neck scrub top and matching trousers. Antimicrobial fabric option. Color-coded by department. Moisture-wicking.",
    specs: ["200GSM Poly-Cotton", "XS-6XL", "7-10 days"],
    placeholder: "PRODUCT_MEDICAL_SCRUBS",
    image: images.nurseScrubs,
  },
  {
    category: "Safety",
    name: "Hi-Vis Safety Vest",
    description:
      "EN 471 and SASO compliant hi-visibility vest with reflective strips, multiple pockets, and KMAX branded label.",
    specs: ["120GSM Polyester", "S-4XL", "5-7 days"],
    placeholder: "PRODUCT_HIVIS_VEST",
    image: images.hivisVest,
  },
  {
    category: "Healthcare",
    name: "Lab Coat",
    description:
      "Full-length white lab coat with four pockets, button front, and custom embroidery. Cotton or poly blend.",
    specs: ["200GSM Cotton", "XS-4XL", "7-10 days"],
    placeholder: "PRODUCT_LAB_COAT",
    image: images.labCoat,
  },
  {
    category: "Education",
    name: "School Uniform",
    description:
      "Full school uniform program — shirts, trousers, skirts, blazers, PE kits. Embroidered school crest. Bulk pricing.",
    specs: ["180GSM Poly-Cotton", "4yr-Adult", "10-14 days"],
    placeholder: "PRODUCT_SCHOOL_UNIFORM",
    image: images.factory,
  },
  {
    category: "Security",
    name: "Security Jacket",
    description:
      "Formal dark navy security jacket with epaulettes, badge panel, and brass buttons. Professional and authoritative.",
    specs: ["260GSM Twill", "S-4XL", "10-14 days"],
    placeholder: "PRODUCT_SECURITY_JACKET",
    image: images.securityJacket,
  },
];

export const productFilters = [
  "All",
  "Industrial",
  "Corporate",
  "Hospitality",
  "Healthcare",
  "Safety",
  "Education",
  "Security",
];

export const industries = [
  {
    emoji: "🏨",
    name: "Hotels & Resorts",
    description: "Complete hotel uniform programs covering every department.",
    items: [
      "Housekeeping uniforms",
      "F&B and restaurant staff",
      "Front desk and concierge",
      "Engineering and maintenance",
      "Spa and wellness teams",
    ],
    placeholder: "INDUSTRY_HOTELS",
    image: images.industryHotels,
  },
  {
    emoji: "🏥",
    name: "Hospitals & Clinics",
    description:
      "Healthcare uniforms built for comfort, hygiene, and professionalism.",
    items: [
      "Medical scrubs all departments",
      "Lab coats and clinical wear",
      "Reception and admin uniforms",
      "Pharmacy and specialist wear",
      "Color-coded department system",
    ],
    placeholder: "INDUSTRY_HOSPITALS",
    image: images.doctorLabcoat,
  },
  {
    emoji: "🏭",
    name: "Construction & FM",
    description: "Heavy-duty workwear for the most demanding environments.",
    items: [
      "Industrial coveralls",
      "Hi-vis and safety vests",
      "Reflective workwear",
      "Fire-resistant options",
      "SASO compliant PPE",
    ],
    placeholder: "INDUSTRY_CONSTRUCTION",
    image: images.industryConstruction,
  },
  {
    emoji: "🏢",
    name: "Corporate Offices",
    description:
      "Professional uniforms that represent your brand with precision.",
    items: [
      "Branded polo shirts",
      "Formal shirts and blouses",
      "Reception uniforms",
      "Admin and support wear",
      "Custom embroidery standard",
    ],
    placeholder: "INDUSTRY_CORPORATE",
    image: images.corporatePolo,
  },
  {
    emoji: "🍽",
    name: "Restaurants & Cafes",
    description: "F&B uniforms that look as good as the food you serve.",
    items: [
      "Chef jackets and kitchen wear",
      "Waiter and server uniforms",
      "Premium leather aprons",
      "Branded caps and accessories",
      "Complete team uniform sets",
    ],
    placeholder: "INDUSTRY_RESTAURANTS",
    image: images.restaurantStaff,
  },
  {
    emoji: "🎓",
    name: "Schools & Institutes",
    description: "Full school uniform programs for the whole academic community.",
    items: [
      "Boys and girls uniforms",
      "Staff and teacher wear",
      "PE kits and sports uniforms",
      "Embroidered school crest",
      "Bulk pricing available",
    ],
    placeholder: "INDUSTRY_SCHOOLS",
    image: images.industrySchools,
  },
];
