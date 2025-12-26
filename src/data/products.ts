export interface Product {
  id: string;
  name: {
    en: string;
    ta: string;
  };
  category: string;
  image: string;
  advantages: {
    en: string[];
    ta: string[];
  };
  disadvantages: {
    en: string[];
    ta: string[];
  };
  steps: {
    en: string[];
    ta: string[];
  };
  price: string;
  sandTypes: string[];
  isRecommended?: boolean;
  isRecent?: boolean;
}

export interface Shop {
  id: string;
  name: string;
  city: string;
  phone: string;
  address: {
    en: string;
    ta: string;
  };
}

export interface SandType {
  id: string;
  name: {
    en: string;
    ta: string;
  };
  description: {
    en: string;
    ta: string;
  };
  recommendedProducts: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: { en: "Urea Fertilizer", ta: "யூரியா உரம்" },
    category: "fertilizer",
    image: "/placeholder.svg",
    advantages: {
      en: ["High nitrogen content (46%)", "Promotes leaf growth", "Affordable price", "Easy to apply"],
      ta: ["அதிக நைட்ரஜன் உள்ளடக்கம் (46%)", "இலை வளர்ச்சியை ஊக்குவிக்கிறது", "மலிவான விலை", "பயன்படுத்த எளிதானது"]
    },
    disadvantages: {
      en: ["Can burn plants if over-applied", "Leaches quickly", "Volatile in hot weather", "Acidifies soil over time"],
      ta: ["அதிகமாக பயன்படுத்தினால் செடிகளை எரிக்கும்", "வேகமாக கழுவப்படும்", "வெப்பமான காலநிலையில் ஆவியாகும்", "காலப்போக்கில் மண்ணை அமிலமாக்கும்"]
    },
    steps: {
      en: ["Test soil pH levels", "Calculate required quantity", "Apply in cool weather", "Water immediately after"],
      ta: ["மண் pH அளவை சோதிக்கவும்", "தேவையான அளவை கணக்கிடவும்", "குளிர்ச்சியான காலநிலையில் பயன்படுத்தவும்", "உடனடியாக நீர் பாய்ச்சவும்"]
    },
    price: "₹350/bag",
    sandTypes: ["red", "black", "alluvial"],
    isRecommended: true,
    isRecent: true
  },
  {
    id: "2",
    name: { en: "DAP (Diammonium Phosphate)", ta: "டிஏபி உரம்" },
    category: "fertilizer",
    image: "/placeholder.svg",
    advantages: {
      en: ["High phosphorus content", "Promotes root development", "Good for flowering", "Long-lasting effect"],
      ta: ["அதிக பாஸ்பரஸ் உள்ளடக்கம்", "வேர் வளர்ச்சியை ஊக்குவிக்கிறது", "பூக்களுக்கு நல்லது", "நீண்டகால விளைவு"]
    },
    disadvantages: {
      en: ["Higher cost", "Not for all crops", "Can cause salt buildup", "Heavy application needed"],
      ta: ["அதிக செலவு", "அனைத்து பயிர்களுக்கும் அல்ல", "உப்பு சேர்க்கைக்கு காரணமாகும்", "அதிக அளவு தேவை"]
    },
    steps: {
      en: ["Apply before sowing", "Mix with soil", "Maintain 2 inches depth", "Irrigate after application"],
      ta: ["விதைப்பதற்கு முன் பயன்படுத்தவும்", "மண்ணுடன் கலக்கவும்", "2 அங்குல ஆழத்தை பராமரிக்கவும்", "பயன்பாட்டிற்கு பின் நீர்ப்பாசனம் செய்யவும்"]
    },
    price: "₹1,350/bag",
    sandTypes: ["red", "black"],
    isRecommended: true
  },
  {
    id: "3",
    name: { en: "Potash (MOP)", ta: "பொட்டாஷ் (எம்ஓபி)" },
    category: "fertilizer",
    image: "/placeholder.svg",
    advantages: {
      en: ["Improves crop quality", "Disease resistance", "Drought tolerance", "Increases yield"],
      ta: ["பயிர் தரத்தை மேம்படுத்துகிறது", "நோய் எதிர்ப்பு", "வறட்சி தாங்கும் தன்மை", "மகசூலை அதிகரிக்கிறது"]
    },
    disadvantages: {
      en: ["Can cause chloride toxicity", "Expensive", "Not for saline soils", "Over-application harmful"],
      ta: ["குளோரைடு நச்சுத்தன்மையை ஏற்படுத்தலாம்", "விலை அதிகம்", "உப்பு மண்ணிற்கு ஏற்றதல்ல", "அதிகப்படியான பயன்பாடு தீங்கு"]
    },
    steps: {
      en: ["Apply during flowering stage", "Split dose application", "Avoid direct contact with seeds", "Water regularly"],
      ta: ["பூக்கும் நிலையில் பயன்படுத்தவும்", "பிரித்து பயன்படுத்தவும்", "விதைகளுடன் நேரடி தொடர்பை தவிர்க்கவும்", "தொடர்ந்து நீர் பாய்ச்சவும்"]
    },
    price: "₹900/bag",
    sandTypes: ["black", "alluvial", "laterite"],
    isRecent: true
  },
  {
    id: "4",
    name: { en: "Neem Oil Pesticide", ta: "வேப்பெண்ணெய் பூச்சிக்கொல்லி" },
    category: "pesticide",
    image: "/placeholder.svg",
    advantages: {
      en: ["Organic and safe", "Controls many pests", "Biodegradable", "No harmful residue"],
      ta: ["இயற்கையானது மற்றும் பாதுகாப்பானது", "பல பூச்சிகளை கட்டுப்படுத்துகிறது", "மக்கும் தன்மை", "தீங்கான எச்சம் இல்லை"]
    },
    disadvantages: {
      en: ["Slower action", "Needs repeated application", "Strong smell", "Less effective in rain"],
      ta: ["மெதுவான செயல்", "மீண்டும் மீண்டும் பயன்படுத்த வேண்டும்", "கடுமையான வாசனை", "மழையில் குறைவான செயல்திறன்"]
    },
    steps: {
      en: ["Dilute as per label", "Spray in evening", "Cover all plant parts", "Repeat after 7 days"],
      ta: ["லேபிளின்படி நீர்த்துப்போகவும்", "மாலையில் தெளிக்கவும்", "அனைத்து தாவர பாகங்களையும் மூடவும்", "7 நாட்களுக்குப் பிறகு மீண்டும் செய்யவும்"]
    },
    price: "₹250/litre",
    sandTypes: ["red", "black", "alluvial", "laterite"],
    isRecommended: true,
    isRecent: true
  },
  {
    id: "5",
    name: { en: "Zinc Sulphate", ta: "துத்தநாக சல்பேட்" },
    category: "micronutrient",
    image: "/placeholder.svg",
    advantages: {
      en: ["Corrects zinc deficiency", "Improves grain quality", "Essential for enzymes", "Affordable"],
      ta: ["துத்தநாக குறைபாட்டை சரிசெய்கிறது", "தானிய தரத்தை மேம்படுத்துகிறது", "நொதிகளுக்கு அவசியம்", "மலிவானது"]
    },
    disadvantages: {
      en: ["Toxic in high doses", "Can stain", "Soil pH dependent", "Slow release"],
      ta: ["அதிக அளவில் நச்சு", "கறை படியலாம்", "மண் pH சார்ந்தது", "மெதுவான வெளியீடு"]
    },
    steps: {
      en: ["Apply to zinc-deficient soils", "Mix with organic matter", "Foliar spray option", "Test soil first"],
      ta: ["துத்தநாக குறைபாடுள்ள மண்ணில் பயன்படுத்தவும்", "கரிம பொருட்களுடன் கலக்கவும்", "இலை தெளிப்பு விருப்பம்", "முதலில் மண்ணை சோதிக்கவும்"]
    },
    price: "₹180/kg",
    sandTypes: ["red", "laterite"],
    isRecent: true
  },
  {
    id: "6",
    name: { en: "Vermicompost", ta: "மண்புழு உரம்" },
    category: "organic",
    image: "/placeholder.svg",
    advantages: {
      en: ["100% organic", "Improves soil structure", "Slow nutrient release", "Eco-friendly"],
      ta: ["100% இயற்கை", "மண் கட்டமைப்பை மேம்படுத்துகிறது", "மெதுவான ஊட்டச்சத்து வெளியீடு", "சுற்றுச்சூழலுக்கு உகந்தது"]
    },
    disadvantages: {
      en: ["Lower nutrient content", "Bulky to transport", "Variable quality", "Higher cost per nutrient"],
      ta: ["குறைந்த ஊட்டச்சத்து", "கொண்டு செல்ல பருமனானது", "மாறுபட்ட தரம்", "ஊட்டச்சத்துக்கு அதிக செலவு"]
    },
    steps: {
      en: ["Mix with soil before planting", "Apply 2-3 kg per sqm", "Use as mulch", "Combine with chemical fertilizers"],
      ta: ["நடவு செய்யும் முன் மண்ணுடன் கலக்கவும்", "சதுர மீட்டருக்கு 2-3 கிலோ பயன்படுத்தவும்", "தழையுரமாக பயன்படுத்தவும்", "ரசாயன உரங்களுடன் சேர்க்கவும்"]
    },
    price: "₹15/kg",
    sandTypes: ["red", "black", "alluvial", "laterite", "sandy"],
    isRecommended: true
  },
  {
    id: "7",
    name: { en: "Calcium Ammonium Nitrate", ta: "கால்சியம் அம்மோனியம் நைட்ரேட்" },
    category: "fertilizer",
    image: "/placeholder.svg",
    advantages: {
      en: ["Quick nitrogen release", "Contains calcium", "Less volatile", "Good for vegetables"],
      ta: ["விரைவான நைட்ரஜன் வெளியீடு", "கால்சியம் உள்ளது", "குறைவான ஆவியாதல்", "காய்கறிகளுக்கு நல்லது"]
    },
    disadvantages: {
      en: ["Hygroscopic", "Storage issues", "More expensive than urea", "Can cause calcium buildup"],
      ta: ["ஈரப்பதத்தை உறிஞ்சும்", "சேமிப்பு பிரச்சனைகள்", "யூரியாவை விட விலை அதிகம்", "கால்சியம் சேர்க்கைக்கு காரணமாகலாம்"]
    },
    steps: {
      en: ["Apply in split doses", "Keep dry during storage", "Use for top dressing", "Avoid wet conditions"],
      ta: ["பிரித்து பயன்படுத்தவும்", "சேமிப்பின் போது உலர்வாக வைக்கவும்", "மேல் உரமாக பயன்படுத்தவும்", "ஈரமான நிலைகளைத் தவிர்க்கவும்"]
    },
    price: "₹750/bag",
    sandTypes: ["black", "alluvial"],
    isRecent: true
  },
  {
    id: "8",
    name: { en: "Gypsum", ta: "ஜிப்சம்" },
    category: "soil-conditioner",
    image: "/placeholder.svg",
    advantages: {
      en: ["Reclaims saline soils", "Provides calcium & sulfur", "Improves drainage", "Affordable"],
      ta: ["உப்பு மண்ணை மீட்கிறது", "கால்சியம் & கந்தகம் வழங்குகிறது", "வடிகால் மேம்படுத்துகிறது", "மலிவானது"]
    },
    disadvantages: {
      en: ["Slow acting", "Needs high quantity", "Limited nutrient value", "Dusty application"],
      ta: ["மெதுவான செயல்", "அதிக அளவு தேவை", "குறைந்த ஊட்டச்சத்து மதிப்பு", "தூசி நிறைந்த பயன்பாடு"]
    },
    steps: {
      en: ["Calculate soil requirement", "Spread evenly", "Incorporate into soil", "Apply before monsoon"],
      ta: ["மண் தேவையை கணக்கிடவும்", "சீராக பரப்பவும்", "மண்ணில் சேர்க்கவும்", "மழைக்காலத்திற்கு முன் பயன்படுத்தவும்"]
    },
    price: "₹200/bag",
    sandTypes: ["black", "saline"],
    isRecommended: true
  }
];

export const shops: Shop[] = [
  { id: "1", name: "Sri Lakshmi Agro", city: "Chennai", phone: "9876543210", address: { en: "45 Mount Road, Chennai", ta: "45 மவுண்ட் ரோடு, சென்னை" } },
  { id: "2", name: "Green Fields Store", city: "Chennai", phone: "9876543211", address: { en: "12 Anna Nagar, Chennai", ta: "12 அண்ணா நகர், சென்னை" } },
  { id: "3", name: "Madurai Fertilizers", city: "Madurai", phone: "9876543212", address: { en: "78 Temple Street, Madurai", ta: "78 கோவில் தெரு, மதுரை" } },
  { id: "4", name: "Thanjavur Agri Center", city: "Thanjavur", phone: "9876543213", address: { en: "23 Rice Market, Thanjavur", ta: "23 அரிசி சந்தை, தஞ்சாவூர்" } },
  { id: "5", name: "Coimbatore Seeds", city: "Coimbatore", phone: "9876543214", address: { en: "56 Gandhipuram, Coimbatore", ta: "56 காந்திபுரம், கோயம்புத்தூர்" } },
  { id: "6", name: "Trichy Agro Mart", city: "Trichy", phone: "9876543215", address: { en: "89 Thillai Nagar, Trichy", ta: "89 தில்லை நகர், திருச்சி" } },
  { id: "7", name: "Salem Farm Store", city: "Salem", phone: "9876543216", address: { en: "34 Five Roads, Salem", ta: "34 ஐந்து சாலைகள், சேலம்" } },
  { id: "8", name: "Erode Agriculture", city: "Erode", phone: "9876543217", address: { en: "67 Market Road, Erode", ta: "67 மார்க்கெட் ரோடு, ஈரோடு" } }
];

export const sandTypes: SandType[] = [
  {
    id: "red",
    name: { en: "Red Soil (Laterite)", ta: "சிவப்பு மண் (லேட்ரைட்)" },
    description: { en: "Iron-rich, well-drained soil ideal for groundnuts and millets", ta: "இரும்புச்சத்து நிறைந்த, நன்கு வடிகால் செய்யப்பட்ட மண், நிலக்கடலை மற்றும் தினைகளுக்கு ஏற்றது" },
    recommendedProducts: ["1", "2", "4", "5", "6"]
  },
  {
    id: "black",
    name: { en: "Black Soil (Regur)", ta: "கரிசல் மண் (ரெகுர்)" },
    description: { en: "Clay-rich, moisture-retentive soil perfect for cotton and sugarcane", ta: "களிமண் நிறைந்த, ஈரப்பதத்தை தக்கவைக்கும் மண், பருத்தி மற்றும் கரும்புக்கு சரியானது" },
    recommendedProducts: ["1", "2", "3", "4", "7", "8"]
  },
  {
    id: "alluvial",
    name: { en: "Alluvial Soil", ta: "வண்டல் மண்" },
    description: { en: "Fertile river-deposited soil excellent for rice and wheat", ta: "ஆற்றுப்படிவு செழுமையான மண், நெல் மற்றும் கோதுமைக்கு சிறந்தது" },
    recommendedProducts: ["1", "3", "4", "6", "7"]
  },
  {
    id: "laterite",
    name: { en: "Laterite Soil", ta: "செங்கல் மண்" },
    description: { en: "Acidic soil with iron and aluminum, suitable for tea and coffee", ta: "இரும்பு மற்றும் அலுமினியம் கொண்ட அமில மண், தேயிலை மற்றும் காபிக்கு ஏற்றது" },
    recommendedProducts: ["3", "4", "5", "6"]
  },
  {
    id: "sandy",
    name: { en: "Sandy Soil", ta: "மணல் மண்" },
    description: { en: "Light, fast-draining soil good for melons and root vegetables", ta: "லேசான, வேகமாக வடிகால் செய்யும் மண், தர்பூசணி மற்றும் வேர் காய்கறிகளுக்கு நல்லது" },
    recommendedProducts: ["6"]
  },
  {
    id: "saline",
    name: { en: "Saline Soil", ta: "உப்பு மண்" },
    description: { en: "Salt-affected soil requiring special treatment", ta: "சிறப்பு சிகிச்சை தேவைப்படும் உப்பு பாதிக்கப்பட்ட மண்" },
    recommendedProducts: ["8"]
  }
];

export const cities = ["Chennai", "Madurai", "Thanjavur", "Coimbatore", "Trichy", "Salem", "Erode"];
