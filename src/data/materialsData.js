// Comprehensive Product, Logistics & Technical Data for Vicious Stone Private Limited

export const COMPANY_INFO = {
  name: "Vicious Stone",
  fullName: "Vicious Stone Private Limited",
  tagline: "Powering Industries with Reliable Raw Materials",
  subtitle: "Your trusted partner for Coal, Coke, Iron Ore and Industrial Minerals sourcing, trading, and multi-modal logistics.",
  regType: "Private Limited",
  gstin: "29AAKCV5319E1Z3",
  address: "Koramangala, Bengaluru, Karnataka 560034, India",
  phone: "+91 99863 72383",
  altPhone: "+91 98765 43210",
  email: "contact@viciousstone.com",
  salesEmail: "sales@viciousstone.com",
  whatsappNumber: "919986372383",
  defaultWhatsAppMessage: "Hello Vicious Stone, I am inquiring about industrial raw material sourcing for my plant.",
  stats: [
    { value: "10+", label: "Countries Sourced From", desc: "Mines in India, Indonesia, South Africa, Australia & Oman" },
    { value: "500+", label: "Verified Mine Suppliers", desc: "Direct long-term pithead & auction linkages" },
    { value: "1.2M+", label: "MT Supplied Annually", desc: "Bulk mineral volumes across Indian industrial corridors" },
    { value: "120+", label: "Active Industrial Clients", desc: "Steel mills, cement kilns, power stations & foundries" }
  ]
};

export const CORE_MATERIALS = [
  {
    id: "coal",
    title: "Thermal & Coking Coal",
    tagline: "High GCV · Low Ash · Precision Sized",
    desc: "Imported Indonesian, South African RB grades, Australian thermal & coking coals, plus domestic Coal India e-auction allocations.",
    image: "/assets/6_Coal.jpg",
    accent: "from-sky-500 to-blue-700",
    specs: ["GCV: 3,400 to 6,900 kcal/kg", "Ash: 4% to 22%", "Sulphur: 0.2% to 0.8%"],
    link: "#materials"
  },
  {
    id: "coke",
    title: "Metallurgical & Foundry Coke",
    tagline: "High CSR · Low Moisture · High Fixed Carbon",
    desc: "Low-ash Met Coke and Foundry Coke in calibrated lump sizes for blast furnaces, cupola furnaces, and ferro-alloy smelters.",
    image: "/assets/7_Coke.jpg",
    accent: "from-cyan-500 to-sky-700",
    specs: ["CSR: 55% to 70%", "Ash: <12.5%", "Fixed Carbon: 85% to 88%"],
    link: "#materials"
  },
  {
    id: "iron-ore",
    title: "Iron Ore Fines, Lumps & Pellets",
    tagline: "58% to 64.5% Fe · Direct DRI & BF Grade",
    desc: "Sourced directly from Bellary-Hospet (Karnataka) and Barbil-Joda (Odisha) mining sectors with calibrated screening.",
    image: "/assets/8_Iron_Ore.jpg",
    accent: "from-amber-600 to-orange-700",
    specs: ["Fe Content: 58% – 64.5%", "Pellet CCS: >250 kg/pellet", "CLO Size: 10-40mm"],
    link: "#materials"
  },
  {
    id: "other-minerals",
    title: "Aluminium & Industrial Minerals",
    tagline: "Bauxite · Manganese · Limestone · Gypsum",
    desc: "High-grade metallurgical and refractory bauxite, SMS-grade limestone, manganese ore, dolomite, and ferro alloys.",
    image: "/assets/10_Bauxite.jpg",
    accent: "from-teal-500 to-sky-700",
    specs: ["Al₂O₃: 42% – 85%", "CaO: >52% (Limestone)", "Mn: 28% – 48%"],
    link: "#materials"
  }
];

export const CATALOG_PRODUCTS = [
  // Coal & Coke
  {
    id: "indo-coal",
    name: "Indonesian Steam Coal",
    category: "Coal & Coke",
    image: "/assets/6_Coal.jpg",
    shortDesc: "Low ash, low sulphur thermal coal ideal for CFBC, AFBC boilers and cement rotary kilns.",
    origin: "Kalimantan & South Sumatra, Indonesia",
    typicalGrades: ["3400 GAR", "3800 GAR", "4200 GAR", "4600 GAR", "5000 GAR", "5800 GAR"],
    specs: {
      "GCV Range": "3,400 – 5,800 kcal/kg (GAR)",
      "Total Moisture": "28% – 42% (low ranks) / 14% – 20% (high)",
      "Ash Content (ADB)": "4.0% – 8.0%",
      "Volatile Matter": "38% – 44%",
      "Total Sulphur": "0.15% – 0.60% (Max 0.8%)",
      "Sizing": "0–50 mm (crushed)"
    },
    applications: "Power plants, Cement kilns, Paper mills, Textile processing boilers",
    supplyMode: "Capesize/Supramax to Indian ports, Rakes to siding, Tipper fleets"
  },
  {
    id: "sa-coal",
    name: "South African Thermal Coal (RB1 / RB2 / RB3)",
    category: "Coal & Coke",
    image: "/assets/2_Coal_stockpile_with_conveyor.jpg",
    shortDesc: "High energy, low moisture benchmark coal with superior grindability for sponge iron DRI and cement.",
    origin: "Richards Bay Coal Terminal (RBCT), South Africa",
    typicalGrades: ["RB1 (6,000 NAR)", "RB2 (5,500 NAR)", "RB3 (4,800 – 5,000 NAR)"],
    specs: {
      "GCV Range": "4,800 – 6,000 kcal/kg (NAR)",
      "Total Moisture": "8.0% – 12.0%",
      "Ash Content (ADB)": "14.0% – 23.0%",
      "Volatile Matter": "22% – 28%",
      "Total Sulphur": "<0.75% to 1.0%",
      "HGI": "45 – 55"
    },
    applications: "Direct Reduced Iron (Sponge Iron Kilns), Captive Power, Cement production",
    supplyMode: "Pan-India vessel discharge at Vizag, Krishnapatnam, Ennore, Kandla"
  },
  {
    id: "aus-coal",
    name: "Australian Thermal & Semi-Soft Coal",
    category: "Coal & Coke",
    image: "/assets/13_Coal_stockyard_with_stacker_conveyor.jpg",
    shortDesc: "Premium high-CV coal with exceptional calorific density and consistent burning characteristics.",
    origin: "Newcastle / Gladstone, Australia",
    typicalGrades: ["5,500 NAR", "6,000 NAR Benchmark"],
    specs: {
      "GCV Range": "5,500 – 6,000 kcal/kg (NAR)",
      "Total Moisture": "9.0% – 13.0%",
      "Ash Content (ADB)": "12.0% – 16.0%",
      "Volatile Matter": "28% – 34%",
      "Total Sulphur": "0.55% – 0.70%"
    },
    applications: "Supercritical Thermal Power Plants, High-efficiency boilers, Steelmaking blends",
    supplyMode: "Vessel shipments & custom bonded port stockpiles"
  },
  {
    id: "met-coke",
    name: "Low Ash Metallurgical Coke (Met Coke)",
    category: "Coal & Coke",
    image: "/assets/7_Coke.jpg",
    shortDesc: "Hard, porous carbon fuel with high mechanical strength and exceptional coke reactivity (CSR).",
    origin: "Domestic By-product Batteries & Imported (China, Poland, Japan)",
    typicalGrades: ["Foundry Grade (80-120mm)", "Blast Furnace Grade (25-80mm)", "Nut Coke (10-25mm)"],
    specs: {
      "Fixed Carbon": "85.0% – 88.0%",
      "Ash Content": "11.5% – 12.5% max",
      "Volatile Matter": "<1.5%",
      "CSR": "60% – 68%",
      "CRI": "24% – 28%",
      "Moisture": "<4.0%"
    },
    applications: "Blast furnaces, Cupola iron casting, Ferro-alloy smelters, Lead/Zinc smelting",
    supplyMode: "Screened and dispatched by road tipper or railway rakes"
  },

  // Iron & Steel
  {
    id: "iron-fines",
    name: "Iron Ore Fines (58% – 64.5% Fe)",
    category: "Iron & Steel",
    image: "/assets/8_Iron_Ore.jpg",
    shortDesc: "High Fe iron ore fines sourced from Bellary-Hospet and Barbil mines, tested for low alumina & silica.",
    origin: "Bellary-Sandur (Karnataka) & Keonjhar/Barbil (Odisha)",
    typicalGrades: ["58/57% Fe Fines", "60/59% Fe Fines", "62.5% Fe Fines", "64.5% Fe High Grade"],
    specs: {
      "Total Fe": "58.0% – 64.5%",
      "SiO₂ + Al₂O₃": "< 6.5% – 8.0%",
      "Phosphorus": "< 0.05% – 0.07%",
      "Moisture": "6.0% – 10.0%",
      "Size": "0 – 10 mm (90% min)"
    },
    applications: "Sintering plants, Pellet manufacturing units, Export/Domestic steel integrators",
    supplyMode: "Direct mine dispatch, Railway rakes from Bellary / Barbil sidings"
  },
  {
    id: "iron-lumps",
    name: "Calibrated Lump Ore (CLO)",
    category: "Iron & Steel",
    image: "/assets/3_Iron_ore_pile.jpg",
    shortDesc: "Washed and sized lump ore with high tumbler strength for direct charging into sponge iron DRI kilns.",
    origin: "Karnataka & Odisha Mines",
    typicalGrades: ["5-18 mm", "10-30 mm", "10-40 mm"],
    specs: {
      "Total Fe": "62.0% – 64.0%",
      "Size Fraction": "10–30mm or 10–40mm (>90%)",
      "Tumbler Index": ">85%",
      "Abrasion Index": "<6%",
      "Phosphorus": "<0.06%"
    },
    applications: "Direct Reduced Iron (Sponge Iron Kilns), Mini blast furnaces",
    supplyMode: "Direct rake / tipper delivery to plant hopper"
  },
  {
    id: "iron-pellets",
    name: "Iron Ore Pellets (Blast Furnace & DRI Grade)",
    category: "Iron & Steel",
    image: "/assets/5_Industrial_mineral_rocks.jpg",
    shortDesc: "Spherical agglomerated iron ore with controlled basicity and cold crushing strength >250 kg/pellet.",
    origin: "Major Indian Pellet Plants (Karnataka, Odisha, Chhattisgarh)",
    typicalGrades: ["BF Grade (Basicity 0.8-1.1)", "DRI Grade (Acid Pellets, Fe 64%+)"],
    specs: {
      "Total Fe": "63.5% – 64.5%",
      "Cold Crushing Strength (CCS)": "> 250 – 280 kg/pellet",
      "Tumbler Index (+6.3mm)": "> 94%",
      "Size (9-16mm)": "> 92%",
      "SiO₂ + Al₂O₃": "< 5.0%"
    },
    applications: "Gas-based & coal-based DRI units, Induction & Electric Arc Furnaces",
    supplyMode: "Rake allocations direct from plant sidings"
  },

  // Aluminium & Ferro Alloys
  {
    id: "bauxite-raw",
    name: "Metallurgical & Refractory Bauxite",
    category: "Aluminium & Ferro Alloys",
    image: "/assets/10_Bauxite.jpg",
    shortDesc: "High alumina content ore for aluminium smelting, refractory bricks, and abrasive manufacturing.",
    origin: "Gujarat (Kutch/Jamnagar), Odisha & Import (Guinea)",
    typicalGrades: ["Smelter Grade (42-46% Al₂O₃)", "Refractory Calcined Bauxite (80-86% Al₂O₃)"],
    specs: {
      "Al₂O₃": "44.0% – 85.0%",
      "Reactive Silica": "< 2.5% – 3.5%",
      "Fe₂O₃": "2.0% – 18.0%",
      "Loss on Ignition (LOI)": "12% – 28%",
      "Moisture": "< 8.0%"
    },
    applications: "Alumina refineries, Refractories, Abrasives, Cement alumina corrector",
    supplyMode: "Truckloads & full train rakes"
  },
  {
    id: "silico-manganese",
    name: "Silico Manganese (SiMn 60/14 & 65/16)",
    category: "Aluminium & Ferro Alloys",
    image: "/assets/4_Bauxite_ore.jpg",
    shortDesc: "Standard ferro alloy deoxidizer and alloying agent for carbon steel and stainless steel production.",
    origin: "Smelters across Karnataka, Andhra Pradesh & Chhattisgarh",
    typicalGrades: ["SiMn 60/14", "SiMn 65/16"],
    specs: {
      "Manganese (Mn)": "60.0% – 65.0% min",
      "Silicon (Si)": "14.0% – 17.0%",
      "Carbon (C)": "max 2.0%",
      "Phosphorus (P)": "max 0.25%",
      "Sulphur (S)": "max 0.03%",
      "Sizing": "10–50mm / 10–100mm"
    },
    applications: "Secondary steelmaking, TMT bar production, Structural steel foundries",
    supplyMode: "1-ton jumbo bags or loose truck dispatch"
  },

  // Industrial Minerals
  {
    id: "limestone",
    name: "Limestone (SMS, BF & Chemical Grade)",
    category: "Industrial Minerals",
    image: "/assets/11_Limestone.jpg",
    shortDesc: "High purity calcium carbonate stone with ultra-low silica, sourced domestically and imported from UAE/Oman.",
    origin: "Rajasthan (Jaisalmer/Gotan), UAE (Fujairah) & Oman",
    typicalGrades: ["SMS Grade (SiO₂ < 1.5%)", "Blast Furnace Grade", "Quicklime Kiln Grade"],
    specs: {
      "CaO": "52.0% – 55.0% min",
      "SiO₂": "< 1.2% – 2.5%",
      "MgO": "< 1.5% – 2.0%",
      "Al₂O₃": "< 0.5%",
      "Loss on Ignition (LOI)": "41% – 43%",
      "Size": "10-40mm, 30-60mm, 40-80mm"
    },
    applications: "Steelmaking flux, Lime calcination, Cement clinker, Paper & glass production",
    supplyMode: "Port discharge (Mundra/Vizag/Chennai) & Domestic rakes"
  },
  {
    id: "manganese-ore",
    name: "Manganese Ore (High & Medium Grade)",
    category: "Industrial Minerals",
    image: "/assets/9_Manganese.jpg",
    shortDesc: "Direct mining ore with 28% to 46% Mn for ferro-alloy production, batteries, and chemical synthesis.",
    origin: "Sandur (Karnataka), MOIL Central India & South Africa / Gabon imports",
    typicalGrades: ["Low Grade (28-32% Mn)", "Medium Grade (34-38% Mn)", "High Grade (42-46% Mn)"],
    specs: {
      "Mn Content": "28.0% – 46.0%",
      "Fe Content": "8.0% – 16.0%",
      "SiO₂": "8.0% – 14.0%",
      "Phosphorus": "0.08% – 0.15%",
      "Size": "10–75 mm lumps"
    },
    applications: "Silico-manganese smelting, Ferro-manganese production, Dry cell battery chemicals",
    supplyMode: "Bulk tippers & rake dispatches"
  },
  {
    id: "dolomite",
    name: "Dolomite (Calcined & Raw)",
    category: "Industrial Minerals",
    image: "/assets/5_Industrial_mineral_rocks.jpg",
    shortDesc: "Double carbonate mineral for refractory hearth maintenance and steelmaking slag conditioning.",
    origin: "Bhutan, Chhattisgarh & Andhra Pradesh",
    typicalGrades: ["SMS Grade (SiO₂ < 1.0%)", "BF Flux Grade", "Refractory Sinter Grade"],
    specs: {
      "MgO": "19.5% – 21.5%",
      "CaO": "29.0% – 31.0%",
      "SiO₂": "< 1.0% – 2.0%",
      "Fe₂O₃": "< 0.5%",
      "Size": "10–40mm / 25–60mm"
    },
    applications: "Refractory gunning mixes, Converter slag conditioning, Glass & Ceramics",
    supplyMode: "Dedicated road fleet and container rakes"
  }
];

// Interactive Coal & Mineral Plant Advisor / Calculator
export const PLANT_ADVISOR_OPTIONS = [
  {
    id: "sponge-iron",
    name: "Sponge Iron (DRI Rotary Kiln)",
    badge: "Direct Reduction",
    desc: "Requires non-coking coal with high reactivity, high volatile matter, and low degradation during reduction.",
    recommendedCoal: "South African RB2 (5,500 NAR) or RB3 (5,000 NAR) / High-CV Indonesian 5,500 GAR",
    recommendedIron: "Calibrated Lump Ore (10-30mm, Fe 62-63%) or DRI Grade Pellets (CCS >250)",
    specs: {
      "Ideal GCV": "5,000 – 5,800 kcal/kg (NAR)",
      "Ash Limit": "< 18% – 22%",
      "Volatile Matter": "24% – 32%",
      "Fixed Carbon": "> 48%",
      "Recommended Size": "10 – 30 mm (lumps)"
    },
    rationale: "South African RB2 provides high carbon conversion and consistent kiln temperatures without clinkering or ring formation."
  },
  {
    id: "cement-kiln",
    name: "Cement Plant (Rotary Kiln & Precalciner)",
    badge: "Clinker Production",
    desc: "High thermal energy with balanced ash chemistry; low moisture to reduce flame impingement delays.",
    recommendedCoal: "Indonesian 4,200 / 5,000 GAR or South African RB2 / Petcoke Blend",
    recommendedIron: "Iron Ore Fines (Fe 58-60% as iron corrector in raw meal) + High Grade Limestone",
    specs: {
      "Ideal GCV": "4,200 – 6,500 kcal/kg",
      "Total Moisture": "< 20% (kiln) / < 30% (precalciner)",
      "Ash Chemistry": "Consistent silica-to-alumina ratio",
      "Sulphur Tolerance": "< 1.5% in kiln burner"
    },
    rationale: "Indonesian coal provides fast ignition in precalciners while petcoke blends maximize flame temperature at minimal cost."
  },
  {
    id: "power-plant",
    name: "Thermal Power Station (AFBC / CFBC Boilers)",
    badge: "Base Load Power",
    desc: "Fluidized bed boilers capable of handling varying ash contents while maintaining continuous steam pressure.",
    recommendedCoal: "Indonesian 3,800 / 4,200 GAR or Domestic CIL G11-G14 E-Auction",
    recommendedIron: "N/A (Energy Feedstock)",
    specs: {
      "Ideal GCV": "3,400 – 4,400 kcal/kg (GAR)",
      "Ash Content": "5% – 30% depending on boiler design",
      "Total Moisture": "32% – 38%",
      "Sulphur": "< 0.5% (compliant with environmental norms)"
    },
    rationale: "Indonesian 4200 GAR is the most cost-effective per million kcal, keeping per-unit generation costs under strict budget."
  },
  {
    id: "steel-rolling",
    name: "Steel Re-Rolling & Forging Mills",
    badge: "Furnace Reheating",
    desc: "Re-heating furnace and producer gas generators require clean sizing with low tar and low ash fusion risk.",
    recommendedCoal: "South African RB1 (6,000 NAR) or Premium Low Ash Met Coke",
    recommendedIron: "High Grade DRI / Billets",
    specs: {
      "Ideal GCV": "> 5,800 kcal/kg (NAR)",
      "Ash": "< 14%",
      "Ash Fusion Temp (AFT)": "> 1,350°C",
      "Sulphur": "< 0.6%"
    },
    rationale: "Prevents slag buildup on furnace hearths and eliminates sulfur pick-up on hot billet surfaces."
  },
  {
    id: "textile-paper",
    name: "Textile, Paper & Process Boilers",
    badge: "Steam Generation",
    desc: "Small-to-medium industrial boilers with chain grate or pulverized firing requiring low ash and clean combustion.",
    recommendedCoal: "Indonesian 4,200 / 5,000 GAR or Domestic Washed Coal",
    recommendedIron: "N/A",
    specs: {
      "Ideal GCV": "4,000 – 5,200 kcal/kg (GAR)",
      "Ash Content": "< 8% (minimizes ash handling and disposal)",
      "Volatile Matter": "> 36%",
      "Moisture": "< 30%"
    },
    rationale: "Low ash (<6%) Indonesian coal drastically lowers boiler maintenance and fly ash disposal costs for urban factories."
  }
];

// Logistics and Port Infrastructure
export const PORTS_INFRASTRUCTURE = [
  {
    port: "Visakhapatnam (Vizag)",
    coast: "East Coast",
    cargo: "Coal (Indonesian/SA), Manganese Ore, Iron Ore Fines",
    handling: "Dedicated mechanised coal terminals (VGCB), rail rake sidings, multi-acre stockyards",
    reach: "Telangana, Odisha, Chhattisgarh, Central India"
  },
  {
    port: "Krishnapatnam",
    coast: "East Coast",
    cargo: "Indonesian & South African Thermal Coal, Met Coke, Gypsum",
    handling: "Deep draft berths for Capesize vessels, high discharge rate (40k MT/day), automated rake loading",
    reach: "Andhra Pradesh, Karnataka (Bellary/Bangalore), Tamil Nadu"
  },
  {
    port: "Ennore / Kamarajar",
    coast: "East Coast",
    cargo: "Thermal Coal, Iron Ore Pellets, Bauxite",
    handling: "Dedicated bulk cargo berths, high-speed conveyor evacuation, direct Southern Railway siding",
    reach: "Chennai industrial corridor, Salem, Coimbatore, South Karnataka"
  },
  {
    port: "New Mangalore (NMPT)",
    coast: "West Coast",
    cargo: "Coking Coal, Met Coke, Limestone, Iron Ore",
    handling: "All-weather deep-water port, modern mechanised unloaders, rail siding to South interior",
    reach: "Hassan, Mysore, Bangalore, Shimoga, Hubli"
  },
  {
    port: "Kandla / Mundra",
    coast: "West Coast",
    cargo: "South African RB grades, US Coal, Russian Anthracite, UAE Limestone",
    handling: "Largest private bulk terminals in India, 24/7 rake evacuation with automated tipplers",
    reach: "Gujarat, Rajasthan, Punjab, Haryana, North India"
  },
  {
    port: "Haldia & Paradip",
    coast: "East Coast",
    cargo: "Coking coal, Indonesian steam coal, Metallurgical coke",
    handling: "Strategic gateway for eastern steel & power belts, mechanized rail wagon tipplers",
    reach: "Jharkhand, West Bengal, Bihar, Odisha"
  }
];

// Frequently Asked Questions
export const FAQ_ITEMS = [
  {
    q: "What are the minimum order quantities (MOQ) for coal and minerals?",
    a: "For road transport by multi-axle tippers, our minimum order quantity is 50 Metric Tonnes (approx. 2-3 truckloads). For rail supply, we organize full train rakes (approx. 3,800 to 4,000 MT per rake). For large industrial plants, we also handle full vessel charters (Supramax / Panamax 55,000 to 75,000 MT)."
  },
  {
    q: "How do you guarantee that the delivered material matches specified GCV and Ash parameters?",
    a: "Every consignment is accompanied by a Certificate of Sampling and Analysis (COA) issued by internationally accredited testing bodies such as SGS, Inspectorate Griffith, or NABL-certified laboratories. We perform sampling at both discharge port stockyards and during dispatch loading. Clients are welcome to assign third-party inspection teams at the loading point."
  },
  {
    q: "Do you supply material with GST compliance and e-Way bills?",
    a: "Yes. Vicious Stone Private Limited is a registered regular taxpayer with GSTIN 29AAKCV5319E1Z3. Every dispatch is accompanied by an authentic tax invoice, computerized weighbridge slips, and valid e-Way bills generated directly on the government portal."
  },
  {
    q: "Can Vicious Stone handle long-term monthly standing supply contracts?",
    a: "Yes, we specialize in 6-month to 12-month standing fuel and raw material supply agreements for captive power plants, cement plants, and steel mills. This ensures consistent monthly rake deliveries with indexed price hedging, buffer stockpiling at nearby port yards, and uninterrupted plant operations."
  },
  {
    q: "What is your typical delivery turnaround time?",
    a: "For materials readily stocked in our port yards (Vizag, Krishnapatnam, Ennore, Mangalore), truck dispatch begins within 24 to 48 hours of purchase order confirmation. Railway rake placement typically takes 3 to 7 working days subject to railway freight allotment."
  }
];
