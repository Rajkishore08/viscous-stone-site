// Comprehensive Product, Logistics, Trading & Regulatory Data for Vicious Stone Private Limited

export const COMPANY_INFO = {
  name: "Vicious Stone",
  fullName: "Vicious Stone Private Limited",
  legalName: "Vicious Stone Private Limited",
  tagline: "Nature's finest, unearthed.",
  subtitle: "Sourcing, trading and supply of coal, iron ore, aluminium, ferro alloys and industrial minerals.",
  regType: "Private limited company",
  taxpayerType: "Regular taxpayer",
  gstin: "29AAKCV5319E1Z3",
  validFrom: "13 June 2026",
  stateCode: "Karnataka (state code 29)",
  address: "No 8, 16th Main Road, 4th Block Koramangala, Bengaluru, Karnataka 560034",
  directors: ["Anand Bhagwan Shukla", "Nikhil Shukla"],
  phone: "+91 99863 72383",
  altPhone: "+91 98765 43210",
  email: "enquiries@viciousstone.com",
  altEmail: "contact@viciousstone.com",
  whatsappNumber: "919986372383",
  defaultWhatsAppMessage: "Hello Vicious Stone, I have an enquiry regarding raw materials sourcing for my plant.",
  tradeScope: "Coal · Iron · Aluminium · Minerals",
  buyerRegions: "India · UAE",
  stats: [
    { value: "10+", label: "Countries Sourced From", desc: "Mines in India, Indonesia, South Africa, Australia & Oman" },
    { value: "500+", label: "Verified Mine Suppliers", desc: "Direct long-term pithead & auction linkages" },
    { value: "1.2M+", label: "MT Supplied Annually", desc: "Bulk mineral volumes across Indian industrial corridors" },
    { value: "120+", label: "Active Industrial Clients", desc: "Steel mills, cement kilns, power stations & foundries" }
  ]
};

export const LIVE_TICKER_ITEMS = [
  "INDONESIA: GAR 3,400 · 4,200 · 5,000 · 5,800",
  "AUSTRALIA: NAR 5,500 · 6,000 · PHCC",
  "SOUTH AFRICA: RB1 · RB2 · RB3",
  "INDIAN NON-COKING: G1 – G17",
  "INDIAN COKING: STEEL GR I – II · WASHERY GR I – VI",
  "MET COAL: PHCC · HCC · SSCC · PCI",
  "IRON ORE: FE 58 – 65% · PELLETS 63 – 66%",
  "ALUMINIUM: INGOTS · ALUMINA · BAUXITE",
  "FERRO ALLOYS: FEMN · SIMN · FECR",
  "MINERALS: LIMESTONE · DOLOMITE · SILICA · BENTONITE",
  "LOTS: TRUCK · RAKE · SUPRAMAX · PANAMAX",
  "REGISTERED: GST KARNATAKA · GSTIN 29AAKCV5319E1Z3"
];

export const WHAT_WE_DO_DATA = {
  headline: "WE SOURCE IT. WE TRADE IT. WE SUPPLY IT.",
  subhead: "Raw materials are won on three things: finding the right grade, buying it well, and landing it on time. We run all three, so your purchase team deals with one company instead of five.",
  pillars: [
    {
      id: "source",
      badge: "SOURCE",
      title: "We go to the mine, the port and the auction.",
      points: [
        "Indian mines and captive producers across the coal and ore belts",
        "Coal India and Singareni e-auctions",
        "Overseas origins: Indonesia, Australia, South Africa, USA and Russia",
        "Every grade checked against a specification before we offer it"
      ]
    },
    {
      id: "trade",
      badge: "TRADE",
      title: "Spot cargoes and standing monthly supply.",
      points: [
        "Vessel cargoes and port-stock parcels",
        "Blending to your target GCV, ash and sulphur",
        "Written contracts, letters of credit and GST invoices",
        "Firm offers with a stated validity, never vague quotes"
      ]
    },
    {
      id: "supply",
      badge: "SUPPLY",
      title: "On spec, on time, at your gate.",
      points: [
        "Rail, road and coastal movement arranged end to end",
        "Delivery to ports, rail sidings and plant gates",
        "Independent quality and weight certificates",
        "E-way bills and shipping documents with every consignment"
      ]
    }
  ]
};

export const MARKET_DATA = {
  headline: "INDIA RUNS ON COAL",
  desc: "India is the world's second-largest seaborne coal buyer after China. Domestic output grows each year, but steel mills, sponge iron units, cement plants and coastal power stations still depend on imported grades.",
  stats: [
    { value: "238Mt", label: "Seaborne coal imported by India in 2025" },
    { value: "35%", label: "Indonesia's share of India's imports, Jan–Aug 2026 — still the top supplier" },
    { value: "83Mt", label: "Coking and PCI coal imported in 2025 for India's steel industry" },
    { value: "½", label: "Of all imported coal lands on the east coast, mainly Odisha and Andhra Pradesh" }
  ],
  source: "Sources: AXS Marine vessel tracking via Banchero Costa (2026); BigMint coking coal report (2025)."
};

export const COAL_CATEGORIES = [
  "IMPORTED THERMAL",
  "IMPORTED COKING",
  "INDIAN NON-COKING",
  "INDIAN COKING"
];

export const COAL_CATALOGUE_DATA = [
  // Imported Thermal
  {
    id: "indo-steam",
    category: "IMPORTED THERMAL",
    originBadge: "INDONESIA · KALIMANTAN, SUMATRA",
    statusBadge: "CORE",
    name: "INDONESIAN STEAM COAL",
    desc: "Low ash, low sulphur and quick to fire. India's largest import grade, used across power, sponge iron and industrial boilers.",
    image: "/assets/cat_indonesian_coal.jpg",
    specs: [
      { key: "GCV (GAR)", val: "3,400 · 4,200 · 5,000 · 5,800" },
      { key: "Total moisture", val: "12 – 40%" },
      { key: "Ash (ADB)", val: "3 – 12%" },
      { key: "Total sulphur", val: "0.1 – 0.8%" }
    ],
    fullSpecs: {
      "GCV Range": "3,400 – 5,800 kcal/kg (GAR)",
      "Total Moisture": "12% – 40%",
      "Ash Content (ADB)": "3.0% – 12.0%",
      "Volatile Matter": "36% – 44%",
      "Total Sulphur": "0.10% – 0.80%",
      "Sizing": "0–50 mm crushed"
    }
  },
  {
    id: "aus-thermal",
    category: "IMPORTED THERMAL",
    originBadge: "AUSTRALIA · NEWCASTLE, QUEENSLAND",
    statusBadge: "CORE",
    name: "AUSTRALIAN THERMAL COAL",
    desc: "High-energy coal for plants that need heat per tonne: cement, large boilers and blending to lift calorific value.",
    image: "/assets/2_Coal_stockpile_with_conveyor.jpg",
    specs: [
      { key: "GCV (NAR)", val: "5,500 – 6,000 kcal/kg" },
      { key: "Total moisture", val: "10 – 15%" },
      { key: "Ash (ADB)", val: "13 – 23%" },
      { key: "Total sulphur", val: "0.5 – 0.8%" }
    ],
    fullSpecs: {
      "GCV Range": "5,500 – 6,000 kcal/kg (NAR)",
      "Total Moisture": "10.0% – 15.0%",
      "Ash Content (ADB)": "13.0% – 23.0%",
      "Volatile Matter": "26% – 32%",
      "Total Sulphur": "0.50% – 0.80%",
      "HGI": "48 – 55"
    }
  },
  {
    id: "sa-rb",
    category: "IMPORTED THERMAL",
    originBadge: "SOUTH AFRICA · RICHARDS BAY",
    statusBadge: "ON REQUEST",
    name: "SOUTH AFRICAN RB GRADES",
    desc: "RB2 and RB3 are the standard grades for India's sponge iron (DRI) kilns. RB1 serves high-energy users.",
    image: "/assets/core_coal.jpg",
    specs: [
      { key: "RB1 Specification", val: "6,000 NAR" },
      { key: "RB2 Specification", val: "5,500 NAR" },
      { key: "RB3 Specification", val: "4,800 NAR" },
      { key: "Volatile matter", val: "22 – 32%" }
    ],
    fullSpecs: {
      "RB1 Benchmark": "6,000 kcal/kg (NAR)",
      "RB2 Benchmark": "5,500 kcal/kg (NAR)",
      "RB3 Benchmark": "4,800 kcal/kg (NAR)",
      "Ash Limit": "14.0% – 23.0%",
      "Volatile Matter": "22% – 32%",
      "Total Sulphur": "< 0.75% to 1.0%"
    }
  },
  {
    id: "us-thermal",
    category: "IMPORTED THERMAL",
    originBadge: "USA · APPALACHIA, ILLINOIS",
    statusBadge: "ON REQUEST",
    name: "US THERMAL COAL",
    desc: "High-CV, higher-sulphur coal favoured by cement plants, where sulphur is absorbed in the clinker.",
    image: "/assets/procurement_stockyard.jpg",
    specs: [
      { key: "GCV (NAR)", val: "5,800 – 6,700 kcal/kg" },
      { key: "Total moisture", val: "8 – 13%" },
      { key: "Ash (ADB)", val: "8 – 15%" },
      { key: "Total sulphur", val: "2.5 – 4.5%" }
    ],
    fullSpecs: {
      "GCV Range": "5,800 – 6,700 kcal/kg (NAR)",
      "Total Moisture": "8.0% – 13.0%",
      "Ash Content": "8.0% – 15.0%",
      "Total Sulphur": "2.5% – 4.5%",
      "Target Industry": "Cement rotary kilns"
    }
  },
  {
    id: "russian-thermal",
    category: "IMPORTED THERMAL",
    originBadge: "RUSSIA · KUZBASS",
    statusBadge: "ON REQUEST",
    name: "RUSSIAN THERMAL COAL",
    desc: "Low-sulphur, high-energy coal. Russia is now India's third-largest coal supplier.",
    image: "/assets/core_coal.jpg",
    specs: [
      { key: "GCV (NAR)", val: "5,500 – 6,000 kcal/kg" },
      { key: "Total moisture", val: "≤ 14%" },
      { key: "Ash (ADB)", val: "≤ 15%" },
      { key: "Total sulphur", val: "≤ 0.5%" }
    ],
    fullSpecs: {
      "GCV Range": "5,500 – 6,000 kcal/kg (NAR)",
      "Total Moisture": "≤ 14.0%",
      "Ash Content": "≤ 15.0%",
      "Total Sulphur": "≤ 0.50%",
      "Volatile Matter": "28% – 36%"
    }
  },
  {
    id: "blended-coal",
    category: "IMPORTED THERMAL",
    originBadge: "BLENDS · PORT STOCKYARDS",
    statusBadge: "CUSTOM",
    name: "BLENDED COAL",
    desc: "Imported and domestic coal blended at port to hit a target GCV, ash or sulphur for your plant, at a lower landed cost.",
    image: "/assets/13_Coal_stockyard_with_stacker_conveyor.jpg",
    specs: [
      { key: "Target GCV", val: "Set by buyer" },
      { key: "Ash limit", val: "Set by buyer" },
      { key: "Size fraction", val: "0 – 50 mm or crushed" },
      { key: "Lot size", val: "From one truck" }
    ],
    fullSpecs: {
      "Calorific Value": "Tailored (3,400 to 5,800 kcal/kg)",
      "Ash & Moisture": "Calibrated to boiler tolerance",
      "Facility": "Port stockyards at Vizag, Krishnapatnam, Kandla",
      "Dispatch": "Road tippers & BOXN train rakes"
    }
  },

  // Imported Coking
  {
    id: "coking-phcc",
    category: "IMPORTED COKING",
    originBadge: "AUSTRALIA · BOWEN BASIN",
    statusBadge: "CORE",
    name: "PREMIUM HARD COKING COAL (PHCC)",
    desc: "Prime metallurgical coking coal with high coke strength after reaction (CSR >70%) for blast furnace steelmaking.",
    image: "/assets/core_coal.jpg",
    specs: [
      { key: "CSR", val: "68% – 74%" },
      { key: "Volatile Matter", val: "20% – 24%" },
      { key: "Ash Content", val: "9.0% – 10.5%" },
      { key: "Fluidity (ddpm)", val: "> 1,000" }
    ],
    fullSpecs: {
      "CSR": "68% – 74%",
      "CRI": "20% – 24%",
      "Volatile Matter": "20.0% – 24.0%",
      "Ash": "9.0% – 10.5%",
      "Total Sulphur": "< 0.60%"
    }
  },
  {
    id: "coking-met-coke",
    category: "IMPORTED COKING",
    originBadge: "DOMESTIC & IMPORTED",
    statusBadge: "CORE",
    name: "LOW ASH METALLURGICAL COKE",
    desc: "Hard, porous, calibrated carbon fuel for blast furnaces, cupola iron casting, and ferro-alloy smelters.",
    image: "/assets/core_coke.jpg",
    specs: [
      { key: "Fixed Carbon", val: "85.0% – 88.0%" },
      { key: "Ash Content", val: "11.5% – 12.5% max" },
      { key: "CSR", val: "60% – 68%" },
      { key: "Moisture", val: "< 4.0%" }
    ],
    fullSpecs: {
      "Fixed Carbon": "85.0% – 88.0%",
      "Ash Content": "11.5% – 12.5%",
      "CSR": "60% – 68%",
      "CRI": "24% – 28%",
      "Sizing": "25–80mm (BF), 80–120mm (Foundry), 10–25mm (Nut)"
    }
  },
  {
    id: "coking-pci",
    category: "IMPORTED COKING",
    originBadge: "AUSTRALIA & RUSSIA",
    statusBadge: "ON REQUEST",
    name: "PULVERISED COAL INJECTION (PCI)",
    desc: "Low-ash, low-volatile coal injected into blast furnace tuyeres to replace expensive metallurgical coke.",
    image: "/assets/core_coal.jpg",
    specs: [
      { key: "Volatile Matter", val: "12% – 16% (Low Vol)" },
      { key: "Ash Content", val: "8.5% – 10.5%" },
      { key: "Total Moisture", val: "8.0% – 10.0%" },
      { key: "Total Sulphur", val: "< 0.65%" }
    ],
    fullSpecs: {
      "VM (ADB)": "12.0% – 16.0%",
      "Ash Content": "8.5% – 10.5%",
      "HGI": "75 – 85 (High grindability)",
      "Gross CV": "> 7,400 kcal/kg (DAF)"
    }
  },

  // Indian Non-Coking (G-Grades)
  {
    id: "india-g1-g5",
    category: "INDIAN NON-COKING",
    originBadge: "COAL INDIA / SCCL",
    statusBadge: "E-AUCTION",
    name: "INDIAN HIGH-GRADE COAL (G1 – G5)",
    desc: "Premium domestic non-coking coal sourced through Coal India single-window e-auctions, Bilaspur and Singareni pitheads.",
    image: "/assets/2_Coal_stockpile_with_conveyor.jpg",
    specs: [
      { key: "Gross Calorific Value", val: "> 6,100 kcal/kg" },
      { key: "Classification", val: "Ministry of Coal G1–G5" },
      { key: "Ash Content", val: "14% – 22%" },
      { key: "Movement", val: "BOXN Rake / Road tipper" }
    ],
    fullSpecs: {
      "GCV Band": "6,100 to 7,000+ kcal/kg",
      "Moisture": "5.0% – 8.0%",
      "Volatile Matter": "24% – 30%",
      "Pitheads": "SECL, MCL, WCL, SCCL"
    }
  },
  {
    id: "india-g6-g9",
    category: "INDIAN NON-COKING",
    originBadge: "COAL INDIA (MCL, SECL, WCL)",
    statusBadge: "E-AUCTION",
    name: "INDIAN MID-GRADE COAL (G6 – G9)",
    desc: "Industrial boiler and captive power station workhorse grade with consistent flame characteristics.",
    image: "/assets/13_Coal_stockyard_with_stacker_conveyor.jpg",
    specs: [
      { key: "Gross Calorific Value", val: "4,900 – 5,800 kcal/kg" },
      { key: "Classification", val: "G6, G7, G8, G9 Bands" },
      { key: "Ash Content", val: "22% – 32%" },
      { key: "Supply Mode", val: "Direct siding rake loading" }
    ],
    fullSpecs: {
      "GCV Band": "4,900 to 5,800 kcal/kg",
      "Ash Content": "22% – 32%",
      "Target Users": "Sponge iron kilns, textile boilers, chemical plants"
    }
  },
  {
    id: "india-g10-g13",
    category: "INDIAN NON-COKING",
    originBadge: "COAL INDIA (TALCHER, KORBA, IB)",
    statusBadge: "E-AUCTION",
    name: "INDIAN POWER UTILITY COAL (G10 – G13)",
    desc: "High-volume, economical thermal grade for AFBC and CFBC power generation units across Central and Southern India.",
    image: "/assets/core_coal.jpg",
    specs: [
      { key: "Gross Calorific Value", val: "3,400 – 4,600 kcal/kg" },
      { key: "Classification", val: "G10, G11, G12, G13" },
      { key: "Ash Content", val: "32% – 42%" },
      { key: "Allocation", val: "Spot & forward e-auctions" }
    ],
    fullSpecs: {
      "GCV Band": "3,400 to 4,600 kcal/kg",
      "Ash Content": "32% – 42%",
      "Sulphur": "< 0.5%",
      "Target Users": "Independent & captive thermal power stations"
    }
  },

  // Indian Coking
  {
    id: "india-coking-steel",
    category: "INDIAN COKING",
    originBadge: "BCCL & CCL (JHARIA, BOKARO)",
    statusBadge: "CORE",
    name: "INDIAN COKING COAL (STEEL GR I – II)",
    desc: "Prime and medium domestic coking coal from the Jharia and Raniganj coalfields for primary steel integrators.",
    image: "/assets/core_coal.jpg",
    specs: [
      { key: "Steel Grade I Ash", val: "Not exceeding 15%" },
      { key: "Steel Grade II Ash", val: "15% to 18%" },
      { key: "Volatile Matter", val: "22% – 26%" },
      { key: "CSN / Crucible Index", val: "4 – 6" }
    ],
    fullSpecs: {
      "Ash Limit": "≤ 15% (Steel I), 15–18% (Steel II)",
      "Volatiles": "22% – 26%",
      "Mining Belt": "Dhanbad, Jharia, Bokaro"
    }
  },
  {
    id: "india-coking-washery",
    category: "INDIAN COKING",
    originBadge: "DOMESTIC WASHERIES",
    statusBadge: "CORE",
    name: "INDIAN WASHERY GRADES (W-I TO W-VI)",
    desc: "Beneficiated domestic coking and semi-coking coals supplied to blast furnaces, blend circuits and foundries.",
    image: "/assets/core_coke.jpg",
    specs: [
      { key: "Washery Grade I", val: "Ash 18% to 21%" },
      { key: "Washery Grade II", val: "Ash 21% to 24%" },
      { key: "Washery Grade III–IV", val: "Ash 24% to 31%" },
      { key: "Beneficiation", val: "Heavy media cyclone / jig" }
    ],
    fullSpecs: {
      "Ash Bands": "W-I (18-21%) to W-VI (31-35%)",
      "Applications": "Metallurgical coke blends, ferro alloys, sintering"
    }
  }
];

export const GRADE_FINDER_INDUSTRIES = [
  {
    id: "sponge-iron",
    name: "Sponge iron (DRI) kilns",
    badge: "DIRECT REDUCTION",
    usuallyRunsOn: "South African RB2 / RB3 (5,500 / 4,800 NAR), Indonesian steam coal (GAR 5,000 – 5,800), Australian thermal (5,500 NAR), Indian non-coking blend (G4 – G7)",
    rationale: "DRI kilns need high fixed carbon, controlled volatile matter and low ash to keep the kiln stable and metallisation high.",
    specs: {
      "Ideal GCV": "5,000 – 5,800 kcal/kg (NAR)",
      "Ash Limit": "< 18% – 22%",
      "Volatile Matter": "24% – 32%",
      "Fixed Carbon": "> 48%",
      "Recommended Size": "10 – 30 mm (lumps)"
    }
  },
  {
    id: "cement-kilns",
    name: "Cement kilns",
    badge: "CLINKER PRODUCTION",
    usuallyRunsOn: "High-CV Indonesian 5,000 GAR, US Thermal Coal (higher sulphur), Petcoke & South African RB2 blends",
    rationale: "Sulphur is safely absorbed by clinker matrix; high flame temperature and consistent grindability are vital.",
    specs: {
      "Ideal GCV": "5,500 – 6,500 kcal/kg",
      "Ash Limit": "< 20%",
      "Volatile Matter": "22% – 35%",
      "Sulphur Tolerance": "Up to 3.5% (absorbed in clinker)",
      "Moisture": "< 12%"
    }
  },
  {
    id: "power-plants",
    name: "Power plants",
    badge: "THERMAL GENERATION",
    usuallyRunsOn: "Indonesian 3,800 – 4,200 GAR for CFBC/AFBC boilers, blended domestic Coal India G10-G13 rakes",
    rationale: "Prioritizes cost-per-million-kilocalories (Kcal/₹) and smooth continuous hopper discharge with low slagging.",
    specs: {
      "Ideal GCV": "3,800 – 4,500 kcal/kg (GAR)",
      "Ash Content": "6% – 30% depending on boiler design",
      "Total Sulphur": "< 0.6%",
      "Volatile Matter": "> 36% (fast ignition)"
    }
  },
  {
    id: "steel-bf",
    name: "Steel — blast furnace",
    badge: "PRIMARY STEELMAKING",
    usuallyRunsOn: "Low Ash Metallurgical Coke (CSR 65%+), Imported Australian PHCC, Hard Coking Coal blends",
    rationale: "High structural strength (CSR) required to support iron burden in furnace stack without degradation.",
    specs: {
      "Fixed Carbon": "> 86%",
      "Ash Content": "< 12.0%",
      "CSR": "> 65%",
      "CRI": "< 26%",
      "Moisture": "< 4.0%"
    }
  },
  {
    id: "boilers-process",
    name: "Boilers — paper, textile, chemical, food",
    badge: "PROCESS STEAM",
    usuallyRunsOn: "Indonesian Steam Coal 4,200 – 5,000 GAR, screened nut sizes 10–50mm",
    rationale: "Low ash generation reduces boiler deslagging down-time; low sulphur satisfies State Pollution Control Board norms.",
    specs: {
      "Ideal GCV": "4,200 – 5,000 kcal/kg (GAR)",
      "Ash Content": "< 7%",
      "Total Sulphur": "< 0.4%",
      "Total Moisture": "< 30%"
    }
  },
  {
    id: "foundry-ferro",
    name: "Foundry & ferro-alloys",
    badge: "SMELTING & CASTING",
    usuallyRunsOn: "Foundry Coke (80–120mm lump), Nut Coke, Silico Manganese, High-Grade Quartz flux",
    rationale: "Consistent carbon dissolution rate in cupola furnaces; low phosphorus and sulphur protect casting integrity.",
    specs: {
      "Fixed Carbon": "> 87%",
      "Ash Content": "< 12.5%",
      "Volatile Matter": "< 1.5%",
      "Sulphur": "< 0.6%"
    }
  },
  {
    id: "brick-kilns",
    name: "Brick kilns",
    badge: "CERAMIC HEAVY FIRING",
    usuallyRunsOn: "High-calorific petroleum coke, domestic washery middlings, slurries and blended fines",
    rationale: "Ultra-high energy release per rupee with slow steady burn over continuous Hoffmann and Bull trench kilns.",
    specs: {
      "Ideal GCV": "6,000 – 8,200 kcal/kg",
      "Ash Limit": "< 25%",
      "Cost Efficiency": "Maximum thermal units per landed rupee"
    }
  }
];

export const METALS_MINERALS_CATEGORIES = [
  "IRON & STEEL INPUTS",
  "ALUMINIUM",
  "FERRO ALLOYS & ORES",
  "INDUSTRIAL MINERALS"
];

export const METALS_MINERALS_DATA = [
  // Iron & Steel Inputs
  {
    id: "iron-fines",
    category: "IRON & STEEL INPUTS",
    hsCode: "HS 2601 · FINES",
    statusBadge: "CORE",
    name: "IRON ORE FINES",
    desc: "For sinter plants and pelletisers, priced by Fe content.",
    image: "/assets/core_iron_ore.jpg",
    specs: [
      { key: "Fe content", val: "58 · 60 · 62 · 63 · 65%" },
      { key: "SiO₂ + Al₂O₃", val: "≤ 8%" },
      { key: "Size fraction", val: "0 – 10 mm" },
      { key: "Moisture", val: "≤ 8%" }
    ],
    fullSpecs: {
      "Total Fe": "58.0% – 65.0%",
      "SiO₂ + Al₂O₃": "≤ 8.0%",
      "Phosphorus": "< 0.06%",
      "Sizing": "0–10 mm (90% min)",
      "Origins": "Ballari-Hosapete (Karnataka), Barbil-Joda (Odisha)"
    }
  },
  {
    id: "iron-clo",
    category: "IRON & STEEL INPUTS",
    hsCode: "HS 2601 · LUMPS",
    statusBadge: "CORE",
    name: "CALIBRATED LUMP ORE (CLO)",
    desc: "Direct feed for DRI kilns and blast furnaces.",
    image: "/assets/core_iron_ore.jpg",
    specs: [
      { key: "Fe content", val: "62 – 66%" },
      { key: "Size (CLO)", val: "5 – 18 · 10 – 40 mm" },
      { key: "Phosphorus", val: "≤ 0.07%" },
      { key: "Tumbler index", val: "≥ 85%" }
    ],
    fullSpecs: {
      "Total Fe": "62.0% – 66.0%",
      "Size Options": "5–18 mm / 10–40 mm",
      "Tumbler Index (+6.3mm)": "≥ 85%",
      "Abrasion Index": "< 6%",
      "Applications": "Direct Reduced Iron (Sponge Iron), Mini blast furnaces"
    }
  },
  {
    id: "iron-pellets",
    category: "IRON & STEEL INPUTS",
    hsCode: "HS 2601 · PELLETS",
    statusBadge: "CORE",
    name: "IRON ORE PELLETS",
    desc: "Uniform feed for DRI and blast furnaces, from Indian pellet plants.",
    image: "/assets/cat_iron_pellets.jpg",
    specs: [
      { key: "Fe content", val: "63 – 66%" },
      { key: "Size range", val: "8 – 16 mm" },
      { key: "CCS strength", val: "≥ 220 kg/pellet" },
      { key: "Basicity", val: "Acid or fluxed" }
    ],
    fullSpecs: {
      "Total Fe": "63.5% – 66.0%",
      "Cold Crushing Strength": "≥ 220 – 260 kg/pellet",
      "Tumbler Index": "≥ 94%",
      "Size (8-16mm)": "≥ 92%",
      "Basicity": "Acid (DRI grade) / Fluxed (BF grade)"
    }
  },
  {
    id: "pig-iron",
    category: "IRON & STEEL INPUTS",
    hsCode: "HS 7201",
    statusBadge: "ON REQUEST",
    name: "PIG IRON",
    desc: "Foundry and steel-grade pig iron for induction furnaces and castings.",
    image: "/assets/core_coke.jpg",
    specs: [
      { key: "Fe content", val: "≥ 93%" },
      { key: "Carbon", val: "3.5 – 4.5%" },
      { key: "Silicon", val: "0.5 – 3.5%" },
      { key: "Phosphorus", val: "≤ 0.20%" }
    ],
    fullSpecs: {
      "Total Fe": "≥ 93.0%",
      "Carbon": "3.5% – 4.5%",
      "Silicon": "0.5% – 3.5%",
      "Manganese": "0.5% – 1.0%",
      "Form": "Ingots / pigs 15-25kg"
    }
  },
  {
    id: "sponge-iron-dri",
    category: "IRON & STEEL INPUTS",
    hsCode: "HS 7203",
    statusBadge: "ON REQUEST",
    name: "SPONGE IRON (DRI)",
    desc: "Direct-reduced iron for induction furnace steelmakers, in lump and fines.",
    image: "/assets/cat_iron_pellets.jpg",
    specs: [
      { key: "Total Fe", val: "90 – 94%" },
      { key: "Metallisation", val: "≥ 85%" },
      { key: "Carbon", val: "0.1 – 1.5%" },
      { key: "Size range", val: "3 – 20 mm" }
    ],
    fullSpecs: {
      "Total Fe": "90.0% – 94.0%",
      "Metallic Fe": "≥ 78.0% – 82.0%",
      "Metallisation": "≥ 85.0%",
      "Carbon": "0.15% – 1.50%"
    }
  },

  // Aluminium
  {
    id: "aluminium-ingots",
    category: "ALUMINIUM",
    hsCode: "HS 7601",
    statusBadge: "CORE",
    name: "ALUMINIUM INGOTS (P1020)",
    desc: "Primary smelter-grade remelt ingots with 99.7% minimum aluminium content.",
    image: "/assets/core_minerals_bauxite.jpg",
    specs: [
      { key: "Al content", val: "≥ 99.70% (P1020)" },
      { key: "Iron (Fe)", val: "≤ 0.20%" },
      { key: "Silicon (Si)", val: "≤ 0.10%" },
      { key: "Ingot weight", val: "20 – 25 kg / T-bar" }
    ],
    fullSpecs: {
      "Purity": "99.70% min",
      "Trace elements": "Fe ≤ 0.20%, Si ≤ 0.10%, Ga ≤ 0.03%",
      "Applications": "Extrusion billets, rolling slab alloys, casting foundries"
    }
  },
  {
    id: "calcined-alumina",
    category: "ALUMINIUM",
    hsCode: "HS 2818",
    statusBadge: "CORE",
    name: "ALUMINA (ALUMINIUM OXIDE)",
    desc: "Smelter-grade and refractory-grade calcined alumina powder.",
    image: "/assets/core_minerals_bauxite.jpg",
    specs: [
      { key: "Al₂O₃ content", val: "≥ 98.5%" },
      { key: "Loss on ignition", val: "≤ 1.0%" },
      { key: "SiO₂", val: "≤ 0.02%" },
      { key: "Particle size", val: "-45 micron > 90%" }
    ],
    fullSpecs: {
      "Al₂O₃": "≥ 98.5%",
      "Form": "Fine white free-flowing powder",
      "Packaging": "1-ton jumbo bags / bulk road tankers"
    }
  },
  {
    id: "bauxite-ore",
    category: "ALUMINIUM",
    hsCode: "HS 2606",
    statusBadge: "CORE",
    name: "BAUXITE (METALLURGICAL & CALCINED)",
    desc: "High alumina content ore for refineries, cement alumina correction and refractories.",
    image: "/assets/core_minerals_bauxite.jpg",
    specs: [
      { key: "Al₂O₃ (Smelter)", val: "42 – 48%" },
      { key: "Reactive Silica", val: "< 2.5 – 3.5%" },
      { key: "Calcined Bauxite", val: "80 – 86% Al₂O₃" },
      { key: "Origins", val: "Gujarat, Odisha, Guinea" }
    ],
    fullSpecs: {
      "Smelter Grade": "42% – 48% Al₂O₃",
      "Refractory Grade": "80% – 86% Al₂O₃",
      "Fe₂O₃": "2.0% – 18.0%"
    }
  },

  // Ferro Alloys & Ores
  {
    id: "silico-manganese",
    category: "FERRO ALLOYS & ORES",
    hsCode: "HS 7202",
    statusBadge: "CORE",
    name: "SILICO MANGANESE (SIMN)",
    desc: "Essential deoxidizer and alloying addition in secondary steelmaking.",
    image: "/assets/cat_silico_manganese.jpg",
    specs: [
      { key: "SiMn 60/14", val: "Mn ≥ 60%, Si ≥ 14%" },
      { key: "SiMn 65/16", val: "Mn ≥ 65%, Si ≥ 16%" },
      { key: "Carbon", val: "≤ 2.0%" },
      { key: "Phosphorus", val: "≤ 0.25%" }
    ],
    fullSpecs: {
      "Mn Content": "60.0% – 65.0%",
      "Si Content": "14.0% – 17.0%",
      "Sulphur": "≤ 0.03%",
      "Packaging": "1-ton jumbo bags or loose truck dispatch"
    }
  },
  {
    id: "ferro-manganese",
    category: "FERRO ALLOYS & ORES",
    hsCode: "HS 7202",
    statusBadge: "ON REQUEST",
    name: "FERRO MANGANESE (FEMN)",
    desc: "High carbon and medium carbon ferro manganese for structural steel and foundries.",
    image: "/assets/cat_silico_manganese.jpg",
    specs: [
      { key: "Manganese (Mn)", val: "70 – 78%" },
      { key: "Carbon (HC)", val: "6.0 – 8.0%" },
      { key: "Silicon", val: "≤ 1.5%" },
      { key: "Phosphorus", val: "≤ 0.30%" }
    ],
    fullSpecs: {
      "Mn Grade": "70% – 78% Mn",
      "Form": "10–50mm lumps",
      "Uses": "TMT rebar, wire rods, alloy steel"
    }
  },
  {
    id: "manganese-ore",
    category: "FERRO ALLOYS & ORES",
    hsCode: "HS 2602",
    statusBadge: "CORE",
    name: "MANGANESE ORE",
    desc: "Direct mining ore with 28% to 46% Mn for ferro-alloy smelting.",
    image: "/assets/cat_manganese_ore.jpg",
    specs: [
      { key: "Mn Content", val: "28 – 46%" },
      { key: "Fe Content", val: "8 – 16%" },
      { key: "SiO₂", val: "8 – 14%" },
      { key: "Size fraction", val: "10 – 75 mm lumps" }
    ],
    fullSpecs: {
      "Mn Range": "28.0% – 46.0%",
      "Origins": "Sandur (Karnataka), Central India, South Africa, Gabon"
    }
  },

  // Industrial Minerals
  {
    id: "limestone-flux",
    category: "INDUSTRIAL MINERALS",
    hsCode: "HS 2521",
    statusBadge: "CORE",
    name: "LIMESTONE (SMS & BF FLUX)",
    desc: "High purity calcium carbonate stone with ultra-low silica for steel flux and lime kilns.",
    image: "/assets/cat_limestone_sms.jpg",
    specs: [
      { key: "CaO content", val: "52.0 – 55.0% min" },
      { key: "SiO₂ (SMS)", val: "≤ 1.2 – 1.5%" },
      { key: "MgO", val: "≤ 1.5%" },
      { key: "Origins", val: "Rajasthan, UAE (Fujairah), Oman" }
    ],
    fullSpecs: {
      "CaO": "≥ 52.0% – 55.0%",
      "SiO₂": "< 1.2% (SMS), < 3.0% (BF)",
      "Sizes": "10-40mm, 30-60mm, 40-80mm"
    }
  },
  {
    id: "dolomite-flux",
    category: "INDUSTRIAL MINERALS",
    hsCode: "HS 2518",
    statusBadge: "CORE",
    name: "DOLOMITE (CALCINED & RAW)",
    desc: "Double carbonate mineral for refractory hearth maintenance and slag conditioning.",
    image: "/assets/5_Industrial_mineral_rocks.jpg",
    specs: [
      { key: "MgO content", val: "19.5 – 21.5%" },
      { key: "CaO content", val: "29.0 – 31.0%" },
      { key: "SiO₂", val: "< 1.0 – 2.0%" },
      { key: "Origins", val: "Bhutan, Chhattisgarh, Andhra Pradesh" }
    ],
    fullSpecs: {
      "MgO": "19.5% – 21.5%",
      "CaO": "29.0% – 31.0%",
      "Loss on Ignition": "42% – 44%"
    }
  },
  {
    id: "silica-sand",
    category: "INDUSTRIAL MINERALS",
    hsCode: "HS 2505",
    statusBadge: "ON REQUEST",
    name: "SILICA SAND & QUARTZ",
    desc: "High purity silica sand for foundries, glass production and water filtration.",
    image: "/assets/5_Industrial_mineral_rocks.jpg",
    specs: [
      { key: "SiO₂ content", val: "≥ 98.5 – 99.2%" },
      { key: "Fe₂O₃", val: "≤ 0.05%" },
      { key: "Grain fineness", val: "AFS 45 – 65" },
      { key: "Sizing", val: "Washed & graded mesh" }
    ],
    fullSpecs: {
      "SiO₂": "≥ 98.5%",
      "Fe₂O₃": "< 0.05%",
      "Moisture": "< 0.5% (dry)"
    }
  },
  {
    id: "bentonite-clay",
    category: "INDUSTRIAL MINERALS",
    hsCode: "HS 2508",
    statusBadge: "ON REQUEST",
    name: "BENTONITE & CLAYS",
    desc: "Sodium and calcium activated bentonite for iron ore pellet binding and foundry sand.",
    image: "/assets/5_Industrial_mineral_rocks.jpg",
    specs: [
      { key: "Montmorillonite", val: "≥ 70%" },
      { key: "Swelling index", val: "≥ 24 – 30 ml/2g" },
      { key: "Moisture", val: "≤ 10%" },
      { key: "Mesh size", val: "200 mesh (90% min)" }
    ],
    fullSpecs: {
      "Swelling Capacity": "24–30 ml",
      "Gelling Index": "> 70",
      "Origins": "Kutch (Gujarat), Rajasthan"
    }
  }
];

export const MINING_BELTS_DATA = [
  { region: "Karnataka", locations: "Ballari · Hosapete", mineral: "High-grade Iron Ore Fines, CLO & Manganese" },
  { region: "Odisha", locations: "Barbil · Joda · Keonjhar", mineral: "Iron Ore Fines, Calibrated Lumps & Chromite" },
  { region: "Chhattisgarh", locations: "Bailadila", mineral: "Ultra-pure 65%+ Fe Blue Dust & BF Grade Ore" },
  { region: "Goa", locations: "North & South Goa", mineral: "Export-grade low silica iron fines & river barging" }
];

export const SOURCING_ROUTES_DATA = [
  {
    title: "IMPORTED BY VESSEL",
    desc: "Direct cargoes from Indonesian and Australian load ports to the Indian port of your choice.",
    lotSize: "Supramax · Panamax",
    terms: "FOB · CFR · CIF",
    payment: "LC at sight · usance LC"
  },
  {
    title: "FROM PORT STOCKYARDS",
    desc: "Imported coal already landed at Indian ports, sold in smaller lots and moved by truck or rake to your plant.",
    lotSize: "500 – 10,000 t",
    terms: "Ex-yard · FOR · delivered",
    leadTime: "Days, not weeks"
  },
  {
    title: "DOMESTIC MINES",
    desc: "Indian coal bought through the Coal India and Singareni single-window e-auction, and from commercial and captive mines.",
    grades: "G1 – G17 · coking",
    transport: "Rail · road",
    payment: "Advance · agreed terms"
  }
];

export const PORTS_DATA = {
  westCoast: [
    { port: "Mundra", state: "Gujarat", volume: "16.7 Mt" },
    { port: "Hazira", state: "Gujarat", volume: "9.8 Mt" },
    { port: "Kandla", state: "Gujarat", volume: "7.5 Mt" },
    { port: "Jaigad", state: "Maharashtra", volume: "7.2 Mt" },
    { port: "Mormugao", state: "Goa", volume: "6.0 Mt" },
    { port: "Dahej", state: "Gujarat", volume: "4.7 Mt" },
    { port: "New Mangalore", state: "Karnataka", volume: "4.3 Mt" }
  ],
  eastCoast: [
    { port: "Paradip", state: "Odisha", volume: "15.7 Mt" },
    { port: "Dhamra", state: "Odisha", volume: "14.7 Mt" },
    { port: "Krishnapatnam", state: "Andhra Pradesh", volume: "11.3 Mt" },
    { port: "Visakhapatnam", state: "Andhra Pradesh", volume: "10.7 Mt" },
    { port: "Gangavaram", state: "Andhra Pradesh", volume: "7.7 Mt" },
    { port: "Ennore", state: "Tamil Nadu", volume: "5.4 Mt" },
    { port: "Tuticorin", state: "Tamil Nadu", volume: "5.1 Mt" }
  ],
  source: "Bars: coal discharged, Jan–Aug 2026, million tonnes · AXS Marine via Banchero Costa",
  tradingTerms: ["FOB", "CFR", "CIF", "FOR", "Ex-yard", "Delivered"]
};

export const TRADING_STEPS_DATA = [
  { num: "01", step: "ENQUIRY", desc: "You share the product, grade, quantity, delivery point and timing." },
  { num: "02", step: "OFFER & SPEC SHEET", desc: "We send a firm offer with the specification, origin, route and terms." },
  { num: "03", step: "CONTRACT", desc: "Sale agreement signed. Payment secured by LC, advance or agreed terms." },
  { num: "04", step: "INSPECTION", desc: "An independent surveyor certifies quality and quantity at loading." },
  { num: "05", step: "DISPATCH", desc: "Vessel, rake or trucks loaded; documents and tracking shared with you." },
  { num: "06", step: "DELIVERY", desc: "Coal received at your port or plant with final weight and quality reports." }
];

export const TRADING_GUARANTEES_DATA = [
  {
    title: "INDEPENDENT INSPECTION",
    desc: "Quality and quantity certified by SGS, Intertek or Bureau Veritas, as named in your contract."
  },
  {
    title: "DOCUMENTED DEALS",
    desc: "Every order has a written contract and spec sheet. Nothing moves on a verbal promise."
  },
  {
    title: "GST-REGISTERED COMPANY",
    desc: "A private limited company registered under GST in Karnataka. Every sale carries a proper tax invoice."
  },
  {
    title: "ONE POINT OF CONTACT",
    desc: "One person handles your order from offer to delivery, on call and on WhatsApp."
  }
];

export const GST_DOCUMENTS_DATA = {
  certTitle: "GST REGISTRATION CERTIFICATE",
  certForm: "FORM GST REG-06 · GOVERNMENT OF INDIA",
  fields: [
    { label: "GSTIN", val: "29AAKCV5319E1Z3" },
    { label: "LEGAL NAME", val: "Vicious Stone Private Limited" },
    { label: "CONSTITUTION", val: "Private limited company" },
    { label: "REGISTRATION TYPE", val: "Regular taxpayer" },
    { label: "VALID FROM", val: "13 June 2026" },
    { label: "STATE", val: "Karnataka (state code 29)" },
    { label: "PRINCIPAL PLACE OF BUSINESS", val: "No 8, 16th Main Road, 4th Block Koramangala, Bengaluru, Karnataka 560034" },
    { label: "DIRECTORS", val: "Anand Bhagwan Shukla, Nikhil Shukla" }
  ],
  verifyUrl: "https://services.gst.gov.in/services/searchtp",
  paperwork: [
    { title: "GST tax invoice", desc: "Issued under our GSTIN with the HSN code and the GST rate applicable on the date of supply." },
    { title: "E-way bill", desc: "Generated for consignments above ₹50,000, so goods move legally by road, rail or sea." },
    { title: "Contract and specification sheet", desc: "Grade, quantity, price, delivery point and terms agreed in writing before dispatch." },
    { title: "Quality and weight certificates", desc: "Issued by an independent surveyor, at loading, at delivery, or both, as agreed." },
    { title: "Shipping documents", desc: "For imported cargo: bill of lading, certificate of origin, and quality and weight certificates." }
  ],
  hsnCodes: [
    { code: "2701", desc: "Coal: anthracite, bituminous, other" },
    { code: "2704", desc: "Coke and semi-coke" },
    { code: "2713", desc: "Petroleum coke" },
    { code: "2601", desc: "Iron ores and concentrates" },
    { code: "7201", desc: "Pig iron" },
    { code: "7203", desc: "Sponge iron (DRI)" },
    { code: "7202", desc: "Ferro alloys" },
    { code: "7204", desc: "Ferrous scrap" },
    { code: "7601", desc: "Unwrought aluminium" },
    { code: "2818", desc: "Alumina (aluminium oxide)" },
    { code: "2606", desc: "Bauxite (aluminium ores)" },
    { code: "2602", desc: "Manganese ores" },
    { code: "2610", desc: "Chromium ores" },
    { code: "2521", desc: "Limestone flux" },
    { code: "2518", desc: "Dolomite" },
    { code: "2505", desc: "Silica sand" },
    { code: "2508", desc: "Bentonite and other clays" },
    { code: "2520", desc: "Gypsum" }
  ]
};

export const FAQ_ITEMS = [
  {
    q: "Do you supply both imported and domestic coal?",
    a: "Yes. We supply imported thermal and coking coal from Indonesia, Australia, South Africa, the US and Russia (by vessel or from port stockyards), as well as Indian non-coking (G1–G17) and coking coal sourced through Coal India / Singareni e-auctions."
  },
  {
    q: "What is the difference between GCV, GAR and NAR?",
    a: "GCV (Gross Calorific Value) is the total heat released by burning coal. GAR (Gross as Received) includes total moisture as delivered and is the international benchmark for Indonesian coal. NAR (Net as Received) deducts the latent heat of water vaporisation, representing actual usable furnace heat, and is standard for South African, Australian and US coal."
  },
  {
    q: "What else can you source besides coal?",
    a: "Beyond coal and metallurgical coke, we supply iron ore (fines, calibrated lump ore and pellets), pig iron, DRI (sponge iron), primary aluminium ingots (P1020), alumina, bauxite, ferro alloys (SiMn, FeMn, FeCr), manganese ore, limestone flux, dolomite, silica sand and bentonite."
  },
  {
    q: "Do you trade any restricted materials?",
    a: "No. Vicious Stone Private Limited strictly trades legally permissible, certified commodities in complete compliance with Indian mining laws, DGFT import policies, and GST council regulations."
  },
  {
    q: "Which coal suits my plant?",
    a: "Sponge iron DRI kilns run best on South African RB2/RB3 or high-CV Indonesian coal (5,000+ GAR); cement kilns utilize high-energy Indonesian or higher-sulphur US coal; power stations use economical 3,800–4,200 GAR Indonesian or Coal India G10–G13; blast furnaces require low-ash met coke and hard coking coals."
  },
  {
    q: "How do you price?",
    a: "We benchmark pricing against current international indices (ICI for Indonesia, API4 for Richards Bay, Platts for coking coal) plus landed shipping and rail freight. Offers are made with a firm price and stated validity in written format."
  },
  {
    q: "What quantities can I buy?",
    a: "From 50 to 500 tonnes by road tipper for trial and buffer stocks, 3,800–4,000 tonnes for a full BOXN railway train rake, up to 55,000–75,000 tonnes for Supramax and Panamax full vessel charters."
  },
  {
    q: "How is quality verified?",
    a: "Every consignment is independently sampled and tested by NABL or international accredited surveyors (SGS, Intertek, Bureau Veritas) at load port, discharge port, or dispatch stockyard, with a legal Certificate of Sampling & Analysis (COA)."
  },
  {
    q: "What payment terms do you offer?",
    a: "For vessel shipments, standard terms are irrevocable Letter of Credit (LC at sight or agreed usance). For domestic rakes and port stockyards, payment is by advance RTGS or mutually agreed commercial credit terms against standing bank guarantees."
  },
  {
    q: "Do you deliver outside Karnataka?",
    a: "Yes. While our corporate desk is headquartered in Koramangala, Bengaluru, we operate pan-India supply lines across Telangana, Andhra Pradesh, Odisha, Chhattisgarh, Maharashtra, Gujarat, Tamil Nadu and North Indian industrial belts."
  },
  {
    q: "Will I get a GST invoice?",
    a: "Yes, 100%. Vicious Stone Private Limited is a registered regular taxpayer (GSTIN: 29AAKCV5319E1Z3). Every delivery moves with a computerized GST tax invoice, legally verified e-way bills, and weighbridge slips."
  }
];

export const RFQ_PRODUCTS_LIST = [
  "Indonesian steam coal",
  "Australian thermal coal",
  "South African coal (RB1/RB2/RB3)",
  "US thermal coal",
  "Russian thermal coal",
  "Coking coal (PHCC / HCC / SSCC)",
  "PCI coal",
  "Indian non-coking coal (G-grade)",
  "Indian coking / washed coal",
  "Blended coal",
  "Met coke",
  "Anthracite",
  "Pet coke",
  "Iron ore fines",
  "Iron ore lumps",
  "Iron ore pellets",
  "Pig iron",
  "Sponge iron (DRI)",
  "Ferrous scrap",
  "Aluminium ingots",
  "Alumina",
  "Bauxite",
  "Ferro manganese",
  "Silico manganese",
  "Ferro chrome",
  "Manganese ore",
  "Chrome ore",
  "Limestone",
  "Dolomite",
  "Silica sand",
  "Bentonite",
  "Gypsum",
  "Other mineral"
];

// Backward-Compatibility Exports
export const CORE_MATERIALS = [
  {
    id: "coal",
    title: "Coal & Energy Fuels",
    tagline: "Thermal & Industrial Steam Coal",
    desc: "Imported Indonesian (GAR 3,400–5,800), Australian high-CV thermal, South African RB grades, and domestic Coal India G1–G17.",
    image: "/assets/core_coal.jpg",
    specs: ["GAR 3,400–5,800", "Low Ash & Sulphur", "Vessel & Port Stock"]
  },
  {
    id: "coke",
    title: "Coke & Carbon Reductants",
    tagline: "Metallurgical & Foundry Coke",
    desc: "Low-ash imported met coke (CSR 64%+), nut coke, foundry coke, and high-purity petroleum coke for steel, blast furnace, and induction.",
    image: "/assets/core_coke.jpg",
    specs: ["CSR > 64%", "Ash < 12.5%", "Moisture < 4%"]
  },
  {
    id: "iron-ore",
    title: "Iron Ore & Steel Inputs",
    tagline: "Fines, CLO, Pellets & Pig Iron",
    desc: "Direct procurement from Ballari-Hosapete and Odisha-Barbil mining belts. Calibrated lump ore (Fe 62–66%) and blast furnace pellets.",
    image: "/assets/core_iron_ore.jpg",
    specs: ["Fe 58% – 66%", "CLO 10–40mm", "CCS > 250 kg"]
  },
  {
    id: "minerals",
    title: "Metals & Industrial Minerals",
    tagline: "Aluminium, Ferro Alloys & Fluxes",
    desc: "Smelter-grade alumina, bauxite, Ferro Manganese, Silico Manganese, and SMS flux limestone (CaO 52%+) with high purity.",
    image: "/assets/core_minerals_bauxite.jpg",
    specs: ["FeMn / SiMn / FeCr", "SMS Limestone", "Bauxite Al2O3 > 44%"]
  }
];

export const CATALOG_PRODUCTS = [
  ...COAL_CATALOGUE_DATA,
  ...METALS_MINERALS_DATA
];

export const PLANT_ADVISOR_OPTIONS = GRADE_FINDER_INDUSTRIES;

export const PORTS_INFRASTRUCTURE = [
  {
    port: "Mundra",
    coast: "West Coast",
    state: "Gujarat",
    volume: "16.7 Mt",
    cargo: "Indonesian & South African Steam Coal, Petcoke, Limestone",
    handling: "Deep-draft Capesize berths (up to 17.5m draft), automated rail wagon-loading system (2 rakes/hr).",
    reach: "Direct railway links to North & West India (Punjab, Haryana, Rajasthan, NCR, Gujarat power & cement plants)."
  },
  {
    port: "Hazira",
    coast: "West Coast",
    state: "Gujarat",
    volume: "9.8 Mt",
    cargo: "Imported Steam Coal, Met Coke, Iron Pellets, Limestone",
    handling: "Multi-purpose deep-water berths, mechanized conveyor discharge directly connecting coastal industrial clusters.",
    reach: "Surat, Bharuch, Dahej industrial corridors, Central India steel and sponge iron plants."
  },
  {
    port: "Kandla",
    coast: "West Coast",
    state: "Gujarat",
    volume: "7.5 Mt",
    cargo: "Industrial Coal, Met Coke, Silica Sand, Bentonite",
    handling: "Dry cargo berths with heavy-duty shore cranes and expansive bonded stockyards.",
    reach: "Gujarat industrial belts, Rajasthan foundries and North Indian thermal power producers."
  },
  {
    port: "Jaigad",
    coast: "West Coast",
    state: "Maharashtra",
    volume: "7.2 Mt",
    cargo: "Steam Coal, Bauxite Ore, Industrial Minerals",
    handling: "Deep-water all-weather port (18.5m draft) capable of berthing fully laden Capesize and Newcastlemax vessels.",
    reach: "Maharashtra industrial zones, Karnataka border foundries, and southern thermal stations."
  },
  {
    port: "Mormugao",
    coast: "West Coast",
    state: "Goa",
    volume: "6.0 Mt",
    cargo: "Iron Ore Fines & Lumps, Coking Coal, Met Coke, Fluxes",
    handling: "Mechanized ore handling plant (MOHP), direct rail sidings to Ballari mining belt.",
    reach: "Goa iron ore belt, Ballari-Hosapete steel corridor, Western Karnataka industries."
  },
  {
    port: "Dahej",
    coast: "West Coast",
    state: "Gujarat",
    volume: "4.7 Mt",
    cargo: "Steam Coal, Anthracite, Chemical Grade Minerals",
    handling: "Dedicated solid cargo terminal with high-speed automated ship unloaders and covered conveyor transport.",
    reach: "Dahej PCPIR chemical corridor, Vadodara, and Central Gujarat manufacturing hubs."
  },
  {
    port: "New Mangalore",
    coast: "West Coast",
    state: "Karnataka",
    volume: "4.3 Mt",
    cargo: "Steam Coal, Iron Ore Pellets, Bauxite, Limestone",
    handling: "All-weather deep-water berths, mechanized handling, and Southern Railway connectivity.",
    reach: "Hassan, Mysuru, Bengaluru industrial cluster, and coastal Karnataka process boilers."
  },
  {
    port: "Paradip",
    coast: "East Coast",
    state: "Odisha",
    volume: "15.7 Mt",
    cargo: "Thermal Coal, Coking Coal, Iron Ore Pellets, Manganese",
    handling: "High-capacity automated coal discharge berths, mechanized wagon tipplers, and coastal shipping terminals.",
    reach: "Kalinganagar steel hub, Odisha-Jharkhand industrial belt, Eastern & Southern coastal plants."
  },
  {
    port: "Dhamra",
    coast: "East Coast",
    state: "Odisha",
    volume: "14.7 Mt",
    cargo: "Coking Coal, Thermal Coal, Iron Ore, Dolomite",
    handling: "Deep-draft berths (18m draft) capable of accommodating Super Capesize vessels, continuous automated stacker-reclaimers.",
    reach: "Direct electrified rail link to Bhadrak, catering to Odisha, West Bengal, and Chhattisgarh steel plants."
  },
  {
    port: "Krishnapatnam",
    coast: "East Coast",
    state: "Andhra Pradesh",
    volume: "11.3 Mt",
    cargo: "South African RB1/RB2/RB3, Indonesian Coal, Gypsum",
    handling: "Deep-water all-weather berths (18.5m draft), 360-degree mechanized dust-suppressed stockpiles.",
    reach: "Rayalaseema power corridor, Chennai-Bengaluru industrial corridor, and Andhra cement clusters."
  },
  {
    port: "Visakhapatnam",
    coast: "East Coast",
    state: "Andhra Pradesh",
    volume: "10.7 Mt",
    cargo: "Steam Coal, Met Coke, Manganese Ore, Iron Ore Fines",
    handling: "Outer harbour deep berths, automated conveyor evacuation, and comprehensive railway marshalling yards.",
    reach: "Visakhapatnam steel complex, Chhattisgarh sponge iron cluster, and Telangana power units."
  },
  {
    port: "Gangavaram",
    coast: "East Coast",
    state: "Andhra Pradesh",
    volume: "7.7 Mt",
    cargo: "Coking Coal, Low-Ash Steam Coal, Bauxite, Limestone",
    handling: "India's deepest port berths (up to 21m draft) accommodating fully laden Capesize bulk carriers.",
    reach: "East-Coast energy corridor, Hyderabad manufacturing zone, and Central India steelmakers."
  },
  {
    port: "Ennore (Kamarajar)",
    coast: "East Coast",
    state: "Tamil Nadu",
    volume: "5.4 Mt",
    cargo: "Thermal Steam Coal, Industrial Fuels",
    handling: "Dedicated coal berths for thermal power utilities with rapid coastal evacuation conveyors.",
    reach: "North Chennai power stations, Ranipet, Vellore, and Tamil Nadu manufacturing boilers."
  },
  {
    port: "Tuticorin (V.O.C.)",
    coast: "East Coast",
    state: "Tamil Nadu",
    volume: "5.1 Mt",
    cargo: "Imported Coal, Coke, Gypsum, Rock Phosphate",
    handling: "Mechanized coal handling terminals, expansive coastal stockyards with multi-modal freight connectivity.",
    reach: "Southern Tamil Nadu textile, chemical, cement, and thermal power facilities."
  }
];

