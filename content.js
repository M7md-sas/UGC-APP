// ==============================================
// UGC Academy — Content Database
// ==============================================

// ===== 17 MODULES =====
const MODULES = [
  {
    id: 1,
    title: "مقدمة في الشبكة الكهربائية السعودية",
    titleEn: "Saudi Power Grid Introduction",
    desc: "نظرة شاملة على شبكة SEC ومستويات الجهد",
    duration: "2.5 ساعة",
    difficulty: "مبتدئ",
    lessons: 8,
    objectives: [
      "فهم بنية شبكة SEC الكاملة",
      "التمييز بين مستويات الجهد (EHV, HV, MV)",
      "معرفة الأطراف المعنية في أي مشروع",
      "الفرق بين الخطوط الهوائية والأرضية"
    ]
  },
  {
    id: 2,
    title: "المرحلة التعاقدية والمواصفات",
    titleEn: "Contracts & Specifications",
    desc: "PTS, GTS, SOW, BOQ والمعايير الدولية",
    duration: "3 ساعات",
    difficulty: "متوسط",
    lessons: 10,
    objectives: [
      "قراءة وفهم PTS و GTS",
      "معرفة معايير SEC: TMSS, DMS, MSS",
      "فهم معايير IEC 60840, 62067, 60287",
      "التعامل مع قائمة الموردين المعتمدين (AVL)"
    ]
  },
  {
    id: 3,
    title: "مرحلة التصميم والتخطيط",
    titleEn: "Design & Planning",
    desc: "Route Survey, NOCs, حسابات التصميم",
    duration: "4 ساعات",
    difficulty: "متقدم",
    lessons: 12,
    objectives: [
      "إجراء Route Survey باحتراف",
      "التعامل مع تصاريح الجهات (NOCs)",
      "حسابات Ampacity حسب IEC 60287",
      "تصميم نظام Bonding"
    ]
  },
  {
    id: 4,
    title: "الكيبل الأرضي — الأنواع والتركيب",
    titleEn: "Underground Cables — Types & Construction",
    desc: "XLPE, EPR, PILC وطبقات الكيبل",
    duration: "3.5 ساعة",
    difficulty: "متوسط",
    lessons: 11,
    objectives: [
      "التمييز بين أنواع العزل: XLPE, EPR, PILC",
      "فهم الطبقات التسع للكيبل",
      "معرفة Water Treeing و Electrical Treeing",
      "فهم Skin Effect و Proximity Effect"
    ]
  },
  {
    id: 5,
    title: "التوريد والنقل والاستلام",
    titleEn: "Procurement & Delivery",
    desc: "FAT, Shipping, Pre-Installation Tests",
    duration: "2 ساعة",
    difficulty: "متوسط",
    lessons: 7,
    objectives: [
      "حضور Factory Acceptance Test (FAT)",
      "إجراء Site Delivery Inspection",
      "Storage Requirements",
      "Pre-Installation Tests: Sheath, Megger"
    ]
  },
  {
    id: 6,
    title: "الأعمال المدنية (Civil Works)",
    titleEn: "Civil Works",
    desc: "الحفر، الخنادق، المناهيل، العبور",
    duration: "4.5 ساعة",
    difficulty: "متوسط",
    lessons: 14,
    objectives: [
      "تصميم الخندق وطبقاته",
      "أنظمة الدفن: Direct, Duct Bank, Tunnel, CLSM",
      "تصميم وتركيب المناهيل",
      "العبور (Road, Railway, Pipeline, HDD)"
    ]
  },
  {
    id: 7,
    title: "سحب الكيابل (Cable Pulling)",
    titleEn: "Cable Pulling",
    desc: "حسابات Pulling Tension و Side Wall Pressure",
    duration: "2.5 ساعة",
    difficulty: "متقدم",
    lessons: 9,
    objectives: [
      "إجراء Duct Proofing و Mandrel Test",
      "حساب Pulling Tension: T = μ × W × L",
      "حساب Side Wall Pressure",
      "التعامل مع Jamming Ratio"
    ]
  },
  {
    id: 8,
    title: "الوصلات والنهايات",
    titleEn: "Joints & Terminations",
    desc: "Straight, Transition, IJ Joints + Terminations",
    duration: "5 ساعات",
    difficulty: "متقدم",
    lessons: 16,
    objectives: [
      "التمييز بين أنواع الوصلات",
      "فهم تقنيات التصنيع: Pre-moulded, Cold/Heat Shrink",
      "بيئة العمل النظيفة (Clean Room)",
      "مراحل تركيب Straight Joint كاملة"
    ]
  },
  {
    id: 9,
    title: "نظام التأريض والـ Bonding",
    titleEn: "Earthing & Bonding System",
    desc: "Solid, Single-Point, Cross Bonding",
    duration: "3 ساعات",
    difficulty: "متقدم",
    lessons: 10,
    objectives: [
      "فهم أنظمة Bonding الثلاثة",
      "تركيب Link Boxes و SVL",
      "حساب Induced Voltage (<65V)",
      "حساب Circulating Current Losses"
    ]
  },
  {
    id: 10,
    title: "Surge Arresters (مانعات الصواعق)",
    titleEn: "Surge Arresters",
    desc: "Gapped SiC, Gapless MOV",
    duration: "2 ساعة",
    difficulty: "متوسط",
    lessons: 6,
    objectives: [
      "فهم Lightning و Switching Surges",
      "اختيار Ur, MCOV, Energy Class",
      "اختبارات Surge Arresters",
      "Polymer vs Porcelain"
    ]
  },
  {
    id: 11,
    title: "كيابل الفايبر البصرية",
    titleEn: "Fiber Optic Cables",
    desc: "OPGW, ADSS, OTDR, Splicing",
    duration: "3.5 ساعة",
    difficulty: "متقدم",
    lessons: 12,
    objectives: [
      "التمييز بين أنواع الفايبر",
      "إجراء Fusion Splicing باحتراف",
      "قراءة OTDR Waveform",
      "استخدامات Differential Protection (87L)"
    ]
  },
  {
    id: 12,
    title: "الاختبارات الكاملة (Testing Protocol)",
    titleEn: "Complete Testing Protocol",
    desc: "HV, PD, VLF, Tan Delta - بروتوكول شامل",
    duration: "6 ساعات",
    difficulty: "متقدم",
    lessons: 20,
    featured: true,
    objectives: [
      "إجراء Sheath Test (10 kV DC)",
      "AC Resonant Test للجهد العالي",
      "Partial Discharge Test (<5 pC للـ EHV)",
      "تحليل Tan Delta (<0.1% للـ XLPE)"
    ]
  },
  {
    id: 13,
    title: "السلامة (HSE)",
    titleEn: "Health, Safety & Environment",
    desc: "PTW, LOTO, PPE, Emergency Procedures",
    duration: "2.5 ساعة",
    difficulty: "مبتدئ",
    lessons: 8,
    required: true,
    objectives: [
      "نظام التصاريح PTW و LOTO",
      "استخدام PPE (Arc-Rated Coveralls)",
      "التعامل مع Induced Voltages",
      "First Aid للصدمة الكهربائية"
    ]
  },
  {
    id: 14,
    title: "الجودة (QA/QC)",
    titleEn: "Quality Assurance & Control",
    desc: "ITP, MS, RA, NCR, MTC",
    duration: "3 ساعات",
    difficulty: "متوسط",
    lessons: 9,
    objectives: [
      "كتابة ITP احترافية",
      "نقاط التفتيش: Hold, Witness, Review",
      "التعامل مع NCR",
      "Material Traceability"
    ]
  },
  {
    id: 15,
    title: "التوثيق والتسليم (Handover)",
    titleEn: "Documentation & Handover",
    desc: "As-Built, Test Reports, O&M Manuals",
    duration: "2.5 ساعة",
    difficulty: "متوسط",
    lessons: 7,
    objectives: [
      "إعداد As-Built Drawings",
      "Test Reports الاحترافية",
      "إجراءات التسليم: PAC, FAC, DLP",
      "Punch List و SAT"
    ]
  },
  {
    id: 16,
    title: "الصيانة والتشغيل (O&M)",
    titleEn: "Operation & Maintenance",
    desc: "DTS, PD Online, Fault Location",
    duration: "3 ساعات",
    difficulty: "متقدم",
    lessons: 10,
    objectives: [
      "Online Monitoring (DTS, PD, DAS)",
      "الاختبارات الدورية السنوية",
      "Fault Location Techniques",
      "Thermography"
    ]
  },
  {
    id: 17,
    title: "اعتبارات السوق السعودي",
    titleEn: "Saudi Market Considerations",
    desc: "التحديات البيئية والمعايير المحلية",
    duration: "2 ساعة",
    difficulty: "متوسط",
    lessons: 6,
    objectives: [
      "التعامل مع الحرارة والتربة الصبخية",
      "عبور الأودية (Wadi Crossings)",
      "الأنفاق (الرياض، مكة)",
      "Local Content Requirements"
    ]
  }
];

// ===== 10 LIBRARY CATEGORIES =====
const CATEGORIES = [
  {
    id: "c1", num: "01", title: "الشبكة والجهود", titleEn: "Network & Voltages",
    desc: "مستويات الجهد، SEC، معايير IEC", color: "cat-bg-1",
    icon: `<svg viewBox="0 0 40 40" fill="none"><path d="M5 20 L12 20 L15 12 L20 28 L25 12 L28 20 L35 20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="20" cy="20" r="16" stroke="white" stroke-width="1" stroke-dasharray="2 3" opacity="0.6"/></svg>`,
    subsections: [
      { id: "c1-s1", title: "مستويات الجهد (EHV / HV / MV / LV)", topics: ["380 kV و 230 kV", "132 kV / 115 kV / 110 kV", "69 kV Sub-Transmission", "33 kV / 13.8 kV / 11 kV"] },
      { id: "c1-s2", title: "شبكة SEC والبنية التنظيمية", topics: ["هيكل SEC", "الأقسام الرئيسية", "مناطق التشغيل الأربع", "الدور والمسؤوليات"] },
      { id: "c1-s3", title: "الخط الهوائي (OHL) vs الأرضي (UGC)", topics: ["مقارنة شاملة", "متى نختار OHL؟", "متى نختار UGC؟", "التحول من OHL إلى UGC"] },
      { id: "c1-s4", title: "الأطراف المعنية في المشروع", topics: ["المالك (Owner)", "الاستشاري (Consultant)", "المقاول (Contractor)", "المورد (Supplier)"] }
    ]
  },
  {
    id: "c2", num: "02", title: "التصميم والتوريد", titleEn: "Design & Procurement",
    desc: "Route Survey، حسابات، FAT، AVL", color: "cat-bg-2",
    icon: `<svg viewBox="0 0 48 40" fill="none"><rect x="3" y="8" width="18" height="22" rx="1.5" stroke="white" stroke-width="1.8" fill="white" fill-opacity="0.08"/><line x1="6" y1="13" x2="18" y2="13" stroke="white" stroke-width="1" opacity="0.7"/><path d="M6 18 L10 18 L10 24 L14 24 L14 27" stroke="white" stroke-width="1.3" fill="none"/><circle cx="14" cy="27" r="1.5" fill="white"/><path d="M23 19 L27 19 M27 19 L25 17 M27 19 L25 21" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M29 14 L38 10 L45 14 L45 27 L38 31 L29 27 Z" stroke="white" stroke-width="1.8" fill="white" fill-opacity="0.15"/><path d="M29 14 L38 18 L45 14" stroke="white" stroke-width="1.8" fill="none"/><line x1="38" y1="18" x2="38" y2="31" stroke="white" stroke-width="1.5"/><path d="M34 22 L37 24.5 L42 20" stroke="white" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>`,
    subsections: [
      { id: "c2-s1", title: "Route Survey (دراسة المسار)", topics: ["GPS و Total Station", "GPR (Ground Penetrating Radar)", "Cable Locators", "تحديد العوائق"] },
      { id: "c2-s2", title: "تصاريح الجهات (NOCs)", topics: ["البلدية والأمانة", "STC والاتصالات", "شركة المياه", "أرامكو والدفاع المدني", "وزارة النقل"] },
      { id: "c2-s3", title: "دراسة التربة", topics: ["Soil Thermal Resistivity (1.2-2.5 K.m/W)", "Chemical Analysis", "التربة الصبخية", "منسوب المياه الجوفية"] },
      { id: "c2-s4", title: "حسابات التصميم", topics: ["Ampacity Calculation (IEC 60287)", "Derating Factors", "Short Circuit Withstand", "Voltage Drop"] },
      { id: "c2-s5", title: "Factory Acceptance Test (FAT)", topics: ["Routine Tests", "Sample Tests", "Type Tests", "Prequalification Tests"] },
      { id: "c2-s6", title: "الموردون المعتمدون (AVL)", topics: ["Nexans", "Prysmian", "NKT", "LS Cable", "SCC / Saudi Cable", "Riyadh Cables", "Jeddah Cables"] }
    ]
  },
  {
    id: "c3", num: "03", title: "الأعمال المدنية والسحب", titleEn: "Civil Works & Pulling",
    desc: "خنادق، مناهيل، Cable Pulling", color: "cat-bg-3",
    icon: `<svg viewBox="0 0 40 40" fill="none"><path d="M4 28 L14 28 L18 22 L26 22 L30 28 L36 28" stroke="white" stroke-width="2" fill="rgba(255,255,255,0.15)"/><line x1="4" y1="32" x2="36" y2="32" stroke="white" stroke-width="1" stroke-dasharray="3 2" opacity="0.7"/><circle cx="22" cy="16" r="3" stroke="white" stroke-width="2" fill="white" fill-opacity="0.3"/><line x1="22" y1="10" x2="22" y2="6" stroke="white" stroke-width="1.5"/></svg>`,
    subsections: [
      { id: "c3-s1", title: "التحضير والمسح", topics: ["Site Survey", "Utility Detection", "Method Statement (MS)", "Risk Assessment (RA)", "Permit to Work (PTW)"] },
      { id: "c3-s2", title: "القطع والحفر", topics: ["Asphalt Cutting", "Excavation", "Shoring", "Dewatering"] },
      { id: "c3-s3", title: "طبقات الخندق", topics: ["الرمل الخارجي", "رمل الحماية العلوي", "Cable Tiles", "Warning Tape", "الرمل الحرارى"] },
      { id: "c3-s4", title: "أنظمة الدفن", topics: ["Direct Buried", "Duct Bank", "Tunnels", "TBF", "CLSM (Flowable Fill)"] },
      { id: "c3-s5", title: "الاختبارات المدنية", topics: ["Proctor Test", "Sand Cone Test", "Thermal Resistivity Test"] },
      { id: "c3-s6", title: "العبور (Crossings)", topics: ["Road Crossing", "Railway Crossing", "Pipeline Crossing", "Wadi Crossing", "HDD (Horizontal Directional Drilling)"] },
      { id: "c3-s7", title: "المناهيل والغرف", topics: ["أبعاد المناهيل القياسية", "Pre-cast vs Cast-in-situ", "المكونات الداخلية"] },
      { id: "c3-s8", title: "سحب الكيابل (Cable Pulling)", topics: ["Duct Proofing و Mandrel Test", "Rodding", "حسابات قوة السحب", "Side Wall Pressure", "Jamming Ratio"] },
      { id: "c3-s9", title: "معدات السحب", topics: ["Winch", "Rollers", "Bell Mouth", "Swivel", "Pulling Eye", "Dynamometer", "Lubricant"] }
    ]
  },
  {
    id: "c4", num: "04", title: "الكيابل الأرضية", titleEn: "Underground Cables",
    desc: "XLPE، PILC، الطبقات، المقاسات", color: "cat-bg-4",
    featured: true,
    icon: `<svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="16" fill="white" fill-opacity="0.1"/><circle cx="20" cy="20" r="13" fill="white" fill-opacity="0.15"/><circle cx="20" cy="20" r="10" fill="white" fill-opacity="0.2"/><circle cx="20" cy="20" r="7" fill="white" fill-opacity="0.3"/><circle cx="20" cy="20" r="4" fill="white" fill-opacity="0.6"/><circle cx="20" cy="20" r="1.5" fill="#F1C40F"/></svg>`,
    subsections: [
      { id: "c4-s1", title: "أنواع العزل", topics: ["XLPE (Cross-Linked Polyethylene)", "EPR (Ethylene Propylene Rubber)", "PILC (Paper Insulated Lead Covered)"] },
      { id: "c4-s2", title: "طبقات الكيبل التسع", topics: ["Conductor (الموصل)", "Inner Semi-conductor", "XLPE Insulation", "Outer Semi-conductor", "Metallic Screen", "Water Blocking Tape", "Al/Cu Sheath", "HDPE Outer Sheath"] },
      { id: "c4-s3", title: "مقاسات الكيابل حسب الجهد", topics: ["كيابل 380 kV", "كيابل 230 kV", "كيابل 132 kV", "كيابل 33 kV", "كيابل 11 kV"] },
      { id: "c4-s4", title: "ظواهر العزل", topics: ["Water Treeing", "Electrical Treeing", "Space Charge (لماذا يُمنع DC على XLPE)"] },
      { id: "c4-s5", title: "ظواهر كهربائية", topics: ["Skin Effect", "Proximity Effect", "Losses"] }
    ]
  },
  {
    id: "c5", num: "05", title: "الوصلات والنهايات", titleEn: "Joints & Terminations",
    desc: "Joints، Terminations، مراحل التركيب", color: "cat-bg-5",
    featured: true, mostSearched: true,
    icon: `<svg viewBox="0 0 48 40" fill="none"><rect x="4" y="17" width="16" height="6" rx="1" fill="white" fill-opacity="0.3"/><rect x="28" y="17" width="16" height="6" rx="1" fill="white" fill-opacity="0.3"/><rect x="18" y="14" width="12" height="12" rx="1.5" fill="white" fill-opacity="0.8"/><circle cx="24" cy="20" r="2" fill="#6B5B95"/><line x1="20" y1="8" x2="20" y2="12" stroke="white" stroke-width="1.5"/><line x1="28" y1="8" x2="28" y2="12" stroke="white" stroke-width="1.5"/></svg>`,
    subsections: [
      { id: "c5-s1", title: "أنواع الوصلات", topics: ["Straight Joint", "Transition Joint (XLPE/PILC)", "Insulated Joint (IJ)", "Stop Joint", "Branch Joint"] },
      { id: "c5-s2", title: "أنواع النهايات", topics: ["Outdoor Termination", "GIS Termination", "Transformer Termination", "Plug-in Termination", "Indoor Termination"] },
      { id: "c5-s3", title: "تقنيات التصنيع", topics: ["Pre-moulded (EPDM/Silicone)", "Cold Shrink", "Heat Shrink"] },
      { id: "c5-s4", title: "مراحل تركيب Straight Joint", topics: [
        "المرحلة 1: تجهيز بيئة العمل",
        "المرحلة 2: قياس وقطع الكيبل",
        "المرحلة 3: إزالة الطبقات (Stripping)",
        "المرحلة 4: معالجة السطح",
        "المرحلة 5: تركيب Conductor Connector",
        "المرحلة 6: تسخين وانكماش الطبقات",
        "المرحلة 7: الاختبارات النهائية"
      ]},
      { id: "c5-s5", title: "بيئة العمل (Clean Room)", topics: ["Joint Tent", "ضبط الرطوبة (<70%)", "منع الغبار", "الإضاءة المناسبة"] },
      { id: "c5-s6", title: "مؤهلات الـ Jointer", topics: ["المتطلبات الفنية", "الشهادات المطلوبة", "التدريب المستمر"] },
      { id: "c5-s7", title: "الأخطاء الشائعة", topics: ["ملامسة العزل باليد", "تسرب الرطوبة", "Crimping خاطئ", "تسخين زائد/ناقص"] }
    ]
  },
  {
    id: "c6", num: "06", title: "التأريض والحماية", titleEn: "Earthing & Protection",
    desc: "Bonding، Link Boxes، Surge Arresters", color: "cat-bg-6",
    icon: `<svg viewBox="0 0 40 40" fill="none"><line x1="20" y1="6" x2="20" y2="20" stroke="white" stroke-width="2" stroke-linecap="round"/><line x1="12" y1="20" x2="28" y2="20" stroke="white" stroke-width="2" stroke-linecap="round"/><line x1="14" y1="24" x2="26" y2="24" stroke="white" stroke-width="2" stroke-linecap="round"/><line x1="16" y1="28" x2="24" y2="28" stroke="white" stroke-width="2" stroke-linecap="round"/><line x1="18" y1="32" x2="22" y2="32" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>`,
    subsections: [
      { id: "c6-s1", title: "أنظمة Bonding", topics: ["Solid Bonding", "Single-Point Bonding", "Cross Bonding"] },
      { id: "c6-s2", title: "المكونات", topics: ["Link Boxes", "SVL (Sheath Voltage Limiters)", "ECC (Earth Continuity Conductor)", "Earth Rods"] },
      { id: "c6-s3", title: "الحسابات", topics: ["Induced Voltage (<65V)", "Sheath Current", "Circulating Current Losses"] },
      { id: "c6-s4", title: "Surge Arresters", topics: ["Gapped SiC", "Gapless MOV", "Polymer vs Porcelain", "اختيار Ur و MCOV"] }
    ]
  },
  {
    id: "c7", num: "07", title: "كيابل الفايبر", titleEn: "Fiber Optic Cables",
    desc: "OTDR، Splicing، Protection", color: "cat-bg-7",
    icon: `<svg viewBox="0 0 48 40" fill="none"><path d="M4 20 Q 16 8, 24 20 T 44 20" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M4 20 Q 16 32, 24 20 T 44 20" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6"/><circle cx="4" cy="20" r="2" fill="white"/><circle cx="44" cy="20" r="2" fill="white"/><circle cx="24" cy="20" r="3" fill="white"/></svg>`,
    subsections: [
      { id: "c7-s1", title: "أنواع الفايبر", topics: ["OPGW", "ADSS", "Direct Buried", "Duct Type", "Composite Cable"] },
      { id: "c7-s2", title: "أنواع الألياف", topics: ["Single-Mode (G.652, G.655, G.657)", "Multi-Mode (OM3, OM4)"] },
      { id: "c7-s3", title: "مكونات المحطة", topics: ["ODF (Optical Distribution Frame)", "Splice Trays", "Pigtails", "Connectors"] },
      { id: "c7-s4", title: "Fusion Splicing", topics: ["خطوات الـ Splicing", "معايير القبول", "تجهيز الأدوات", "الأخطاء الشائعة"] },
      { id: "c7-s5", title: "الاختبارات", topics: ["OTDR (1310/1550/1625 nm)", "Insertion Loss (OLTS)", "Return Loss", "Chromatic Dispersion", "PMD", "End-Face Inspection"] },
      { id: "c7-s6", title: "الاستخدامات", topics: ["Differential Protection (87L)", "Teleprotection", "SCADA", "DTS (Distributed Temperature Sensing)", "DAS"] }
    ]
  },
  {
    id: "c8", num: "08", title: "الاختبارات الفنية", titleEn: "Technical Tests",
    desc: "HV، PD، VLF، Tan Delta", color: "cat-bg-8",
    featured: true,
    icon: `<svg viewBox="0 0 40 40" fill="none"><path d="M14 6 L14 16 Q14 24, 20 28 Q26 24, 26 16 L26 6" stroke="white" stroke-width="2" fill="white" fill-opacity="0.25"/><line x1="14" y1="6" x2="26" y2="6" stroke="white" stroke-width="2"/><circle cx="20" cy="18" r="2" fill="white"/><path d="M18 30 L22 30 L22 34 L18 34 Z" fill="white" fill-opacity="0.5"/></svg>`,
    subsections: [
      { id: "c8-s1", title: "Pre-Installation Tests", topics: ["Visual Inspection", "Sheath Integrity (10 kV DC × 1 min)", "Megger Test (IR)", "Drum Continuity"] },
      { id: "c8-s2", title: "During Installation Tests", topics: ["Duct Proving", "Mandrel Test", "Cable Identification", "Phasing"] },
      { id: "c8-s3", title: "Sheath Test", topics: ["10 kV DC × 1 min", "تفسير النتائج", "Troubleshooting"] },
      { id: "c8-s4", title: "HV Test (الرئيسي)", topics: ["AC Resonant Test 380 kV (360 kV × 60 min)", "AC Resonant 230 kV (225 kV × 60 min)", "AC Resonant 132 kV (130 kV × 60 min)", "VLF Test (0.1 Hz)", "DC Test (ممنوع على XLPE ❌)"] },
      { id: "c8-s5", title: "Partial Discharge (PD)", topics: ["حد EHV: <5 pC", "حد HV: <10 pC", "PD Location", "IEC 60270"] },
      { id: "c8-s6", title: "Tan Delta", topics: ["XLPE الجديد: <0.1%", "تفسير النتائج", "طرق القياس"] },
      { id: "c8-s7", title: "Sheath Bonding Tests", topics: ["Induced Voltage", "SVL Functional", "DC Continuity (ECC)", "Sheath Resistance"] },
      { id: "c8-s8", title: "Phase Sequence", topics: ["اختبار Phasing", "Rotation Test", "الأدوات"] },
      { id: "c8-s9", title: "System Tests", topics: ["Closed Loop Test (8-24 ساعة)", "Protection Relays (87L، 21، 50/51)", "CT/VT Tests", "SCADA Verification", "Interlocking", "End-to-End Trip"] }
    ]
  },
  {
    id: "c9", num: "09", title: "السلامة والجودة", titleEn: "HSE & Quality",
    desc: "PTW، LOTO، PPE، ITP، NCR", color: "cat-bg-9",
    required: true,
    icon: `<svg viewBox="0 0 40 40" fill="none"><path d="M20 5 L30 10 L30 20 Q30 28, 20 34 Q10 28, 10 20 L10 10 Z" stroke="white" stroke-width="2" fill="white" fill-opacity="0.2"/><path d="M15 19 L18 22 L25 15" stroke="white" stroke-width="2.5" stroke-linecap="round" fill="none"/></svg>`,
    subsections: [
      { id: "c9-s1", title: "نظام التصاريح", topics: ["PTW (Permit to Work)", "LOTO (Lock-Out Tag-Out)", "Portable Earthing"] },
      { id: "c9-s2", title: "المخاطر", topics: ["Induced Voltages", "Arc Flash", "Confined Space", "Excavation Collapse", "Manual Handling"] },
      { id: "c9-s3", title: "PPE", topics: ["Arc-Rated Coveralls (Cat 2/4)", "Safety Helmet", "EH Boots", "Insulated Gloves", "Gas Detector"] },
      { id: "c9-s4", title: "Emergency Procedures", topics: ["خطة الطوارئ", "أرقام الاتصال", "First Aid للصدمة الكهربائية"] },
      { id: "c9-s5", title: "وثائق الجودة", topics: ["ITP (Inspection Test Plan)", "Method Statement (MS)", "Risk Assessment (RA)"] },
      { id: "c9-s6", title: "نقاط التفتيش", topics: ["Hold Points", "Witness Points", "Review Points"] },
      { id: "c9-s7", title: "NCR وتتبع المواد", topics: ["Non-Conformance Reports", "Material Traceability", "Batch Numbers", "MTC"] }
    ]
  },
  {
    id: "c10", num: "10", title: "الصيانة والتسليم", titleEn: "Maintenance & Handover",
    desc: "O&M، Handover، Fault Location", color: "cat-bg-10",
    icon: `<svg viewBox="0 0 48 40" fill="none"><rect x="6" y="9" width="36" height="22" rx="2" stroke="white" stroke-width="1.8" fill="white" fill-opacity="0.08"/><path d="M9 20 L15 20 L17 15 L20 25 L23 13 L26 27 L29 18 L32 20 L39 20" stroke="white" stroke-width="2" stroke-linecap="round" fill="none"/><circle cx="39" cy="20" r="1.5" fill="white"/><line x1="18" y1="31" x2="30" y2="31" stroke="white" stroke-width="1.5" opacity="0.6"/><path d="M22 31 L22 34 L26 34 L26 31" stroke="white" stroke-width="1.5" fill="white" fill-opacity="0.25"/></svg>`,
    subsections: [
      { id: "c10-s1", title: "Online Monitoring", topics: ["DTS (Distributed Temperature Sensing)", "PD Online Monitoring", "Sheath Current Monitoring", "DAS"] },
      { id: "c10-s2", title: "الاختبارات الدورية", topics: ["Sheath Test سنوي", "Thermography", "Link Box Inspection", "Manhole Inspection"] },
      { id: "c10-s3", title: "Fault Location", topics: ["TDR (Time Domain Reflectometry)", "Murray Loop", "Bridge Methods", "Acoustic Pin-pointing", "Surge Wave"] },
      { id: "c10-s4", title: "وثائق التسليم", topics: ["As-Built Drawings", "Test Reports", "Route Maps", "Registers", "MTC", "O&M Manuals", "Warranty", "Spare Parts"] },
      { id: "c10-s5", title: "إجراءات التسليم", topics: ["Punch List", "SAT (Site Acceptance Test)", "PAC (Provisional Acceptance)", "FAC (Final Acceptance)", "DLP (Defect Liability Period)"] }
    ]
  }
];

// ===== DETAILED TOPIC CONTENT (Full examples) =====
const TOPIC_DETAILS = {
  "c5-s4-0": {
    title: "المرحلة 1: تجهيز بيئة العمل",
    category: "الوصلات والنهايات",
    categoryEn: "Joints & Terminations",
    duration: "8 دقائق",
    difficulty: "متقدم",
    objectives: [
      "تحضير Joint Tent باحتراف",
      "ضبط الرطوبة ودرجة الحرارة",
      "تنظيف وتعقيم المنطقة",
      "التحقق من الإضاءة المناسبة"
    ],
    content: `
      <h3>لماذا بيئة العمل مهمة؟</h3>
      <p>تركيب الوصلة في بيئة غير مثالية هو <strong>السبب الأول</strong> لفشل الوصلات في جهد عالي. أي ذرة غبار أو رطوبة داخل طبقات العزل = Partial Discharge مؤكد لاحقاً، وقد يؤدي لعطل كارثي بعد أشهر من التشغيل.</p>

      <h3>متطلبات Joint Tent</h3>
      <ul>
        <li><strong>الحجم:</strong> لا يقل عن 3×3×2.5 متر للكيابل 132 kV فأعلى</li>
        <li><strong>الإحكام:</strong> مغلقة تماماً، بدون أي فتحات تسمح بدخول الغبار</li>
        <li><strong>الأرضية:</strong> نظيفة، مغطاة بسجاد خاص أو بلاستيك محكم</li>
        <li><strong>الإضاءة:</strong> لا تقل عن 500 lux، موزعة على كامل المنطقة</li>
      </ul>

      <h3>ضبط الرطوبة ودرجة الحرارة</h3>
      <p>الرطوبة النسبية يجب أن تبقى <strong>أقل من 70%</strong> طوال فترة العمل. الحرارة المثالية بين <strong>15-30 درجة مئوية</strong>. استخدم جهاز قياس رطوبة رقمي ومكيف/مزيل رطوبة عند الحاجة.</p>

      <h3>الخطوات التفصيلية</h3>
      <ul>
        <li>نصب الخيمة على أرضية مستوية قبل بدء العمل بـ 24 ساعة على الأقل</li>
        <li>تفعيل مزيل الرطوبة قبل دخول الـ Jointer</li>
        <li>تنظيف الأرضية والجدران بقماش مبلل بالكحول الإيزوبروبيلي</li>
        <li>إحضار جميع الأدوات وفحصها قبل الإغلاق</li>
        <li>ارتداء بدلة العمل النظيفة والقفازات داخل الخيمة</li>
      </ul>
    `,
    tools: [
      { name: "Joint Tent", icon: "tent" },
      { name: "مقياس رطوبة رقمي", icon: "droplet" },
      { name: "مزيل رطوبة", icon: "wind" },
      { name: "كحول إيزوبروبيلي", icon: "spray-can" },
      { name: "قماش تنظيف خاص", icon: "brush" },
      { name: "إضاءة LED محمولة", icon: "lightbulb" }
    ],
    hseWarnings: [
      "فحص PTW و LOTO قبل البدء",
      "التأكد من Portable Earthing مُركّب بشكل صحيح",
      "وجود طفاية حريق جاهزة داخل الخيمة",
      "عدم الأكل أو الشرب داخل بيئة العمل النظيفة"
    ],
    commonMistakes: [
      "البدء في العمل قبل استقرار الرطوبة",
      "إدخال أدوات ملوثة بالغبار",
      "فتح الخيمة بشكل متكرر أثناء العمل",
      "عدم توثيق قراءات الرطوبة/الحرارة"
    ],
    references: ["IEC 60840 Section 12.4", "SEC TMSS-02-03", "Cable Joint Manufacturer Manual"]
  },

  "c5-s4-2": {
    title: "المرحلة 3: إزالة الطبقات (Stripping)",
    category: "الوصلات والنهايات",
    categoryEn: "Joints & Terminations",
    duration: "15 دقيقة",
    difficulty: "متقدم",
    objectives: [
      "التعرف على الطبقات التسع وترتيب إزالتها",
      "استخدام الأدوات المناسبة لكل طبقة",
      "تجنّب الأخطاء التي تُفشل الوصلة",
      "فحص السطح بعد الإزالة"
    ],
    content: `
      <h3>ترتيب الطبقات من الخارج للداخل</h3>
      <ol>
        <li>HDPE Outer Sheath (الغلاف الخارجي)</li>
        <li>Al/Cu Metallic Sheath (الغلاف المعدني)</li>
        <li>Water Blocking Tape (شريط مانع الماء)</li>
        <li>Metallic Screen (الشاشة المعدنية)</li>
        <li>Outer Semi-conductor (العازل الخارجي)</li>
        <li>XLPE Insulation (العزل الرئيسي)</li>
        <li>Inner Semi-conductor (العازل الداخلي)</li>
        <li>Conductor Screen (شاشة الموصل)</li>
        <li>Conductor (الموصل)</li>
      </ol>

      <h3>الخطوات العملية</h3>
      <p><strong>1. إزالة الغلاف الخارجي</strong> — استخدم Cable Knife واقطع دائرياً بعمق الغلاف فقط. المسافة حسب دليل مصنّع الوصلة (عادة 600-800 mm).</p>
      <p><strong>2. إزالة الشاشة المعدنية</strong> — لف الأسلاك للخلف بعناية واحفظها — ستُستخدم لتوصيل ECC. <span style="color:var(--danger);font-weight:700">لا تقطعها!</span></p>
      <p><strong>3. إزالة العزل الخارجي (Semi-Con)</strong> — استخدم Semi-Con Stripping Tool المخصصة. السرعة والعمق يجب أن يكونا ثابتين.</p>
      <p><strong>4. فحص سطح العزل XLPE</strong> — يجب أن يكون السطح أملس تماماً، بدون خدوش أو بقايا Semi-Con. أي شائبة تسبب Partial Discharge.</p>
      <p><strong>5. كشف الموصل</strong> — أزل العزل الداخلي بدقة. الطول = نصف طول الـ Compression Sleeve.</p>
    `,
    tools: [
      { name: "Cable Knife مخصص", icon: "scissors" },
      { name: "Semi-Con Stripping Tool", icon: "wrench" },
      { name: "متر قياس دقيق", icon: "ruler" },
      { name: "سائل تنظيف خاص", icon: "spray-can" },
      { name: "قفازات نظيفة", icon: "hand" },
      { name: "قلم علامات", icon: "pen-line" }
    ],
    hseWarnings: [
      "تأكد من فصل الكيبل وتأريضه (Portable Earthing)",
      "استخدم القفازات دائماً — سكاكين حادة جداً",
      "لا تلمس سطح العزل XLPE بيدك العارية"
    ],
    commonMistakes: [
      "قطع عميق جداً يصل للطبقة التالية → ضعف كهربائي",
      "بقايا Semi-Con على XLPE → Partial Discharge مؤكد",
      "خدش على سطح العزل → إعادة العمل من البداية",
      "عدم قياس المسافات بدقة"
    ],
    references: ["IEC 60840 §12.5", "SEC TMSS-02-03", "Cable Joint Installation Manual"]
  },

  // ===== c1: الشبكة والجهود =====
  "c1-s1-0": {
  "title": "380 kV و 230 kV",
  "category": "الشبكة والجهود",
  "categoryEn": "Network & Voltages",
  "duration": "8 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "فهم دور جهد 380 kV كشبكة Super Grid في المملكة",
    "معرفة الفرق التشغيلي بين 380 kV و 230 kV",
    "تحديد المناطق الجغرافية التي يخدمها كل جهد",
    "ربط مستويات الجهد بمعايير IEC والمواصفات السعودية"
  ],
  "content": "<h3>جهد 380 kV — شبكة Super Grid السعودية</h3><p>يُمثّل جهد <strong>380 kV</strong> العمود الفقري لمنظومة نقل الكهرباء في المملكة العربية السعودية، ويُعرف بـ <strong>Super Grid</strong>. يُستخدم هذا الجهد لنقل كميات ضخمة من الطاقة الكهربائية لمسافات تتجاوز <strong>300-500 كم</strong> بين مناطق المملكة الكبرى (الرياض، مكة، المدينة، جدة، المنطقة الشرقية، نجران، جازان).</p><h3>لماذا 380 kV تحديداً؟</h3><p>الرفع إلى هذا المستوى العالي من الجهد يهدف أساساً إلى <strong>تقليل التيار</strong> وبالتالي تقليل خسائر النقل (Joule Losses = I²R). عند مضاعفة الجهد، ينخفض التيار لنصف قيمته، فتنخفض الخسائر إلى الربع — وهذا مبدأ فيزيائي أساسي يُبرر التكلفة العالية لبنية الـ 380 kV.</p><ul><li><strong>جهد التشغيل الأقصى (Um)</strong>: 420 kV حسب IEC 62067</li><li><strong>جهد الطور (U₀)</strong>: 220 kV</li><li><strong>مستوى العزل (BIL)</strong>: 1550 kV للكيابل الأرضية</li><li><strong>المقاطع المستخدمة في SEC</strong>: 1C × 2000mm² أو 2500mm² Cu (Milliken Conductor)</li></ul><h3>جهد 230 kV — نقل رئيسي انتقالي</h3><p>يُستخدم جهد <strong>230 kV</strong> في بعض أجزاء الشبكة كمرحلة انتقالية بين الـ 380 kV والجهود الأدنى، وهو أكثر شيوعاً في المنطقة الغربية وبعض مشاريع التوسع القديمة. يُعتبر جهداً من فئة <strong>Extra High Voltage (EHV)</strong> ولكن بمستوى أدنى من الـ 380 kV.</p><ul><li><strong>جهد التشغيل الأقصى (Um)</strong>: 245 kV</li><li><strong>جهد الطور (U₀)</strong>: 133 kV</li><li><strong>المقاطع المستخدمة</strong>: 1C × 1600mm² أو 2000mm² Cu</li><li><strong>المعيار المرجعي</strong>: IEC 62067 (للكيابل فوق 150 kV)</li></ul><h3>مقارنة سريعة: 380 kV vs 230 kV</h3><ul><li><strong>الاستخدام</strong>: 380 kV للربط بين المناطق الكبرى — 230 kV للتغذية المحلية لكبار المستهلكين</li><li><strong>التكلفة</strong>: 380 kV أعلى تكلفةً في التصميم والمعدات والاختبار</li><li><strong>الجهد التشخيصي (HV Test)</strong>: 380 kV يستلزم 360 kV × 60 دقيقة — 230 kV يستلزم 225 kV × 60 دقيقة</li><li><strong>الوزن والأبعاد</strong>: كيابل 380 kV أضخم وأثقل، مما يُعقّد اللوجستيات والسحب</li></ul>",
  "tools": [
    {
      "name": "Single Line Diagram",
      "icon": "cpu"
    },
    {
      "name": "HV Test Set (Resonant)",
      "icon": "zap"
    }
  ],
  "hseWarnings": [
    "المسافة الآمنة الدنيا من خطوط 380 kV الحية لا تقل عن 4 أمتار حسب SEC SSES",
    "العمل على كيابل 380 kV يستلزم تصريح PTW خاص بالجهود العالية جداً (EHV PTW)",
    "الجهد المستحث (Induced Voltage) على الكيابل المجاورة قد يبلغ آلاف الفولتات — لا تلمس أي كيبل غير مؤرض"
  ],
  "commonMistakes": [
    "الخلط بين Um (جهد التشغيل الأقصى) وU (الجهد الاسمي) عند اختيار مستوى العزل",
    "تطبيق معايير IEC 60840 على كيابل 230 kV بدلاً من IEC 62067 الأصح لجهود > 150 kV",
    "إهمال حساب Thermal Backfill لكيابل 380 kV مما يؤدي لتخفيض Ampacity الفعلي"
  ],
  "references": [
    "IEC 62067 — Power Cables above 150 kV",
    "SEC TMSS-01 Rev. Latest — Transmission Material Standards",
    "IEC 60287-1-1 — Current Rating Calculations"
  ]
},

  "c1-s1-1": {
  "title": "132 kV / 115 kV / 110 kV",
  "category": "الشبكة والجهود",
  "categoryEn": "Network & Voltages",
  "duration": "8 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "التمييز بين ثلاثة مستويات جهد متقاربة: 132 kV و 115 kV و 110 kV",
    "فهم السبب التاريخي والجغرافي لوجود هذه المستويات الثلاثة في SEC",
    "معرفة المواصفات الأساسية للكيابل في كل مستوى",
    "تحديد معايير HV Test المناسبة لكل جهد"
  ],
  "content": "<h3>لماذا ثلاثة مستويات متقاربة؟</h3><p>يُثير هذا السؤال دائماً فضول المهندسين الجدد. الإجابة تاريخية وجغرافية: شبكة SEC نشأت من دمج شبكات إقليمية مستقلة بُنيت في حقب زمنية مختلفة وبمعايير متباينة. المنطقة الشرقية ورثت بنية أرامكو (115 kV)، بينما اعتمدت معظم مناطق المملكة على 110 kV أو 132 kV.</p><h3>جهد 132 kV</h3><p>يُستخدم في المنطقة الغربية والوسطى وبعض مناطق الجنوب. يُعدّ الأكثر توافقاً مع المعايير البريطانية IEC/BS التاريخية.</p><ul><li><strong>Um</strong>: 145 kV — <strong>U₀</strong>: 76 kV</li><li><strong>BIL</strong>: 650 kV</li><li><strong>المقطع الشائع</strong>: 1C × 1200mm² أو 1600mm² Cu/Al</li><li><strong>HV Test</strong>: 1.7 × U₀ = <strong>130 kV</strong> × 60 دقيقة (AC Resonant)</li><li><strong>المعيار</strong>: IEC 60840</li></ul><h3>جهد 115 kV — نظام المنطقة الشرقية</h3><p>هذا الجهد حصري تقريباً في <strong>المنطقة الشرقية (SEC-EOA)</strong> وموروث من البنية التحتية التي بنتها <strong>أرامكو السعودية</strong> لتغذية منشآتها الصناعية. يتوافق مع المعايير الأمريكية ANSI/IEEE.</p><ul><li><strong>Um</strong>: 123 kV — <strong>U₀</strong>: 66.4 kV</li><li><strong>المقطع الشائع</strong>: 1C × 1000mm² أو 1200mm² Cu</li><li><strong>HV Test</strong>: 1.7 × U₀ ≈ <strong>113 kV</strong> × 60 دقيقة</li><li><strong>ملاحظة مهمة</strong>: عند التوصيل بين نظام 115 kV ونظام 110 kV أو 132 kV، يتطلب ذلك محولات ربط (Interface Transformers) أو محولات ذات نسب خاصة</li></ul><h3>جهد 110 kV — الأكثر انتشاراً في المدن</h3><p>يُعدّ <strong>110 kV</strong> الجهد الأكثر استخداماً في مشاريع التوسع الحضري لـ SEC، خاصةً في الرياض وجدة ومكة المكرمة. معظم مشاريع الكيابل الأرضية الجديدة (UGC) التي تنفذها SEC في المدن تعمل على هذا الجهد.</p><ul><li><strong>Um</strong>: 123 kV — <strong>U₀</strong>: 63.5 kV</li><li><strong>BIL</strong>: 550 kV</li><li><strong>المقطع الشائع</strong>: 1C × 1000mm² أو 1200mm² Cu/Al (XLPE)</li><li><strong>HV Test</strong>: 1.7 × U₀ = <strong>108 kV</strong> × 60 دقيقة (AC Resonant أو VLF)</li><li><strong>المعيار</strong>: IEC 60840</li><li><strong>عمق الدفن</strong>: 1.25 متر (Top of Cable) في المناطق العادية</li></ul><h3>جدول مقارنة سريع</h3><pre>الجهد   | Um      | U₀      | HV Test  | المعيار\n132 kV  | 145 kV  | 76 kV   | 130 kV   | IEC 60840\n115 kV  | 123 kV  | 66.4 kV | 113 kV   | ANSI/IEC\n110 kV  | 123 kV  | 63.5 kV | 108 kV   | IEC 60840</pre>",
  "tools": [
    {
      "name": "AC Resonant Test Set",
      "icon": "zap"
    },
    {
      "name": "Single Line Diagram",
      "icon": "cpu"
    },
    {
      "name": "Cable Drum Identifier",
      "icon": "layers"
    }
  ],
  "hseWarnings": [
    "مسافة الأمان الدنيا لجهود 110-132 kV: 2 متر على الأقل من الموصلات الحية",
    "كيابل 115 kV في المنطقة الشرقية قد تكون ضمن مسارات أرامكو — تحقق من NOC قبل أي حفر",
    "لا تخلط بين جهد الاختبار لـ 132 kV و 110 kV — الفارق 22 kV قد يُتلف الكيبل"
  ],
  "commonMistakes": [
    "افتراض أن 115 kV و 110 kV نفس النظام — هما نظامان مختلفان بمعايير مختلفة",
    "استخدام ملحقات (Accessories) معتمدة لـ 132 kV على كيابل 110 kV دون التحقق من توافق Um",
    "إغفال الفرق في U₀ عند حساب جهد الاختبار (HV Test Voltage)"
  ],
  "references": [
    "IEC 60840 — Power Cables 30 kV to 150 kV",
    "SEC TMSS-02 — HV Cable Systems",
    "ANSI/IEEE C57.12 — للنظام الأمريكي في المنطقة الشرقية"
  ]
},

  "c1-s1-2": {
  "title": "69 kV Sub-Transmission",
  "category": "الشبكة والجهود",
  "categoryEn": "Network & Voltages",
  "duration": "6 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "فهم موقع 69 kV في هرم الشبكة الكهربائية السعودية",
    "معرفة الفرق بين Transmission و Sub-Transmission",
    "تحديد المقاطع والمواصفات الشائعة لكيابل 69 kV",
    "معرفة اختبارات ما بعد التركيب لهذا الجهد"
  ],
  "content": "<h3>ما هو Sub-Transmission؟</h3><p>يقع جهد <strong>69 kV</strong> في المنطقة الانتقالية بين شبكة النقل الرئيسية (Transmission) وشبكة التوزيع (Distribution). يُسمى هذا المستوى <strong>Sub-Transmission</strong> لأنه يأخذ الطاقة من محطات النقل الرئيسية ويوصّلها إلى محطات التحويل الثانوية (Secondary Substations) التي تخدم المناطق الصناعية والتجارية والسكنية الكبيرة.</p><h3>أين يُستخدم 69 kV في السعودية؟</h3><ul><li>في <strong>المناطق الصناعية الكبرى</strong> كالجبيل وينبع حيث يكون الحمل الصناعي كثيفاً</li><li>كحلقة وصل بين محطات 110/132 kV ومحطات التوزيع 33 kV</li><li>في بعض مناطق المنطقة الشرقية كامتداد لنظام أرامكو</li><li>في <strong>مشاريع التوسع الحضري السريع</strong> حيث لا يكون بناء محطة 110 kV اقتصادياً للحمل المتوقع</li></ul><h3>مواصفات كيابل 69 kV</h3><ul><li><strong>Um</strong>: 72.5 kV — <strong>U₀</strong>: 40 kV</li><li><strong>BIL</strong>: 325 kV</li><li><strong>المقطع الشائع</strong>: 1C × 630mm² أو 1000mm² Cu/Al (XLPE)</li><li><strong>العزل</strong>: XLPE حصرياً في المشاريع الجديدة</li><li><strong>عمق الدفن</strong>: 1.0 متر (Top of Cable) في المناطق الاعتيادية</li><li><strong>HV Test</strong>: 1.7 × U₀ = <strong>68 kV</strong> × 60 دقيقة أو VLF (0.1 Hz) × 3 × U₀</li></ul><h3>نظام الـ Bonding لكيابل 69 kV</h3><p>للمسافات القصيرة (أقل من 500 متر): يُستخدم <strong>Single-Point Bonding</strong>. للمسافات الأطول: يُوصى بـ <strong>Cross Bonding</strong> لتقليل خسائر الـ Sheath، خاصةً عند تيارات الحمل العالية التي تكون شائعة في المناطق الصناعية.</p>",
  "tools": [
    {
      "name": "VLF Test Set",
      "icon": "zap"
    },
    {
      "name": "Megger (IR Tester)",
      "icon": "activity"
    },
    {
      "name": "Phase Rotation Meter",
      "icon": "settings"
    }
  ],
  "hseWarnings": [
    "رغم أن 69 kV أقل من 110 kV، فهو جهد قاتل — لا تستهن بإجراءات العزل والتأريض",
    "تأكد من إجراء Sheath Test (10 kV DC) قبل الـ HV Test لتجنب تلف الـ Outer Jacket أثناء الاختبار"
  ],
  "commonMistakes": [
    "استخدام VLF Test بجهد مرتفع جداً يتجاوز 3×U₀ مما يُجهد العزل دون مبرر",
    "إهمال Cross Bonding في الخطوط الطويلة مما يرفع Sheath Losses ودرجة حرارة الكيبل",
    "الخلط بين معايير IEC 60840 (للـ 69 kV) وIEC 60502-2 (للـ 33 kV وأقل)"
  ],
  "references": [
    "IEC 60840 — Power Cables 30 kV up to 150 kV",
    "SEC TMSS-03 — Sub-Transmission Cable Systems",
    "IEC 60287-1-1 — Ampacity Calculations"
  ]
},

  "c1-s1-3": {
  "title": "33 kV / 13.8 kV / 11 kV",
  "category": "الشبكة والجهود",
  "categoryEn": "Network & Voltages",
  "duration": "7 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "فهم دور جهود التوزيع المتوسطة في الشبكة السعودية",
    "التمييز بين 33 kV و 13.8 kV و 11 kV وسياق استخدام كل منها",
    "معرفة أنواع الكيابل وطرق العزل المستخدمة في كل جهد",
    "تحديد اختبارات القبول المناسبة لشبكة التوزيع المتوسطة"
  ],
  "content": "<h3>شبكة التوزيع المتوسطة (MV Distribution)</h3><p>تُمثّل هذه الجهود الثلاثة <strong>الشبكة الأكثر كثافةً في مدن المملكة</strong>، إذ تصل الكهرباء من المحطات الرئيسية إلى المحطات الثانوية (Secondary/Distribution Substations) التي تُغذي المباني السكنية والتجارية مباشرةً.</p><h3>جهد 33 kV</h3><p>يُستخدم في <strong>الحلقات الرئيسية (Ring Mains)</strong> وفي تغذية المجمعات الصناعية والتجارية الكبرى. شائع في الرياض وجدة ومكة كمستوى توزيع عالٍ.</p><ul><li><strong>Um</strong>: 36 kV — <strong>U₀</strong>: 19 kV</li><li><strong>المقطع الشائع</strong>: 3C × 300mm² أو 3×1C × 400-630mm² Cu/Al (XLPE)</li><li><strong>HV Test</strong>: VLF 0.1 Hz × 3 × U₀ = 57 kV × 60 دقيقة، أو AC Resonant</li><li><strong>المعيار</strong>: IEC 60502-2</li></ul><h3>جهد 13.8 kV</h3><p>جهد موروث من النظام الأمريكي، شائع في <strong>المنطقة الشرقية</strong> لتغذية المستهلكين الصناعيين المتوسطين ومحطات التوزيع الثانوية. يتوافق مع معيار ANSI/IEEE.</p><ul><li><strong>Um</strong>: 15 kV — <strong>U₀</strong>: 8 kV</li><li><strong>المقطع الشائع</strong>: 3C × 185-400mm² Cu/Al (XLPE)</li><li><strong>HV Test</strong>: VLF × 3 × U₀ = 24 kV × 60 دقيقة</li></ul><h3>جهد 11 kV</h3><p>يُعدّ <strong>11 kV</strong> الجهد الأكثر انتشاراً في شبكة التوزيع السعودية، وهو الجهد الأساسي لتغذية المحطات الثانوية (33/0.4 kV أو 11/0.4 kV) في الأحياء السكنية والتجارية.</p><ul><li><strong>Um</strong>: 12 kV — <strong>U₀</strong>: 6.35 kV</li><li><strong>المقطع الشائع</strong>: 3C × 95-400mm² Cu/Al (XLPE)</li><li><strong>HV Test</strong>: VLF × 3 × U₀ = 19 kV × 60 دقيقة</li><li><strong>المعيار</strong>: IEC 60502-2</li><li><strong>عمق الدفن</strong>: 0.8-1.0 متر (Top of Cable)</li></ul><h3>ملاحظات تطبيقية مهمة</h3><ul><li>كيابل MV عادةً ثلاثية الموصلات (3-Core) مما يُبسّط التركيب لكنه يُعقّد إصلاح العيوب</li><li>الـ Bonding في MV: عادةً <strong>Solid Bonding</strong> (كلا الطرفين مؤرضان) نظراً لقصر المسافات</li><li>جهاز VLF أخف وأرخص بكثير من Resonant Set — لذا يُفضَّل في اختبارات MV الميدانية</li></ul>",
  "tools": [
    {
      "name": "VLF Test Set",
      "icon": "zap"
    },
    {
      "name": "Tan Delta Meter",
      "icon": "activity"
    },
    {
      "name": "Cable Fault Locator (TDR)",
      "icon": "search"
    }
  ],
  "hseWarnings": [
    "جهد 11 kV قاتل رغم أنه يبدو منخفضاً مقارنةً بـ 110 kV — إجراءات LOTO إلزامية",
    "عند VLF Test، تأكد من عزل الكيبل تماماً من الطرفين وتأريض الفازات غير المختبَرة"
  ],
  "commonMistakes": [
    "تطبيق VLF Test بجهد خاطئ (الخلط بين U₀ للـ 11 kV و 33 kV)",
    "إغفال اختبار Sheath Integrity قبل VLF Test على كيابل قديمة مما يُسبب Breakdown غير متوقع",
    "الافتراض بأن كيابل MV لا تحتاج PD Test — كيابل 33 kV تستفيد من PD بشكل كبير"
  ],
  "references": [
    "IEC 60502-2 — Power Cables 6 kV to 30 kV",
    "SEC DMS-01 — Distribution Material Standards",
    "IEC 60270 — Partial Discharge Measurements"
  ]
},

  "c1-s2-0": {
  "title": "هيكل SEC",
  "category": "الشبكة والجهود",
  "categoryEn": "Network & Voltages",
  "duration": "7 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "فهم الهيكل التنظيمي لشركة SEC على المستوى الاستراتيجي",
    "التعرف على وحدات الأعمال الرئيسية داخل SEC",
    "معرفة العلاقة بين SEC وGRIDCO والجهات التنظيمية",
    "فهم دور كل وحدة في مشاريع الكيابل الأرضية"
  ],
  "content": "<h3>الشركة السعودية للكهرباء (Saudi Electricity Company - SEC)</h3><p>تأسست <strong>SEC</strong> عام 2000م بدمج شركات الكهرباء الإقليمية المتعددة تحت كيان واحد. تعمل تحت إشراف وزارة الطاقة وهيئة تنظيم الكهرباء والإنتاج المزدوج <strong>(ECRA)</strong>، وهي مدرجة في سوق الأسهم السعودية (تداول).</p><h3>إعادة الهيكلة — ظهور GRIDCO</h3><p>في إطار رؤية 2030 وإصلاح قطاع الطاقة، جرى فصل نشاط <strong>نقل الكهرباء</strong> عن SEC وإسناده إلى <strong>شركة الشبكة الوطنية للكهرباء (GRIDCO)</strong>. هذا يعني أن مشاريع كيابل النقل (110 kV فأعلى) باتت تحت إشراف GRIDCO، بينما تتولى SEC مشاريع التوزيع (33 kV وأقل) وإدارة المحطات والتشغيل.</p><h3>الوحدات الرئيسية ذات الصلة بمشاريع الكيابل</h3><ul><li><strong>Transmission Projects Group (TPG)</strong>: المسؤول عن تنفيذ مشاريع النقل (EPC Contracts)</li><li><strong>Distribution Projects Group (DPG)</strong>: مشاريع التوزيع في المدن</li><li><strong>Projects &amp; Development (P&amp;D)</strong>: التصميم والدراسات الفنية</li><li><strong>Asset Management</strong>: إدارة الأصول والصيانة الطويلة الأمد</li><li><strong>Technical Standards Department</strong>: إصدار TMSS وDMS والمواصفات الفنية</li></ul><h3>أهمية معرفة الهيكل للمهندس الميداني</h3><p>معرفة الهيكل التنظيمي تُحدد <strong>من تتواصل معه</strong> في كل مرحلة: فموافقة الرسومات تذهب لـ P&D، ونقاط Hold Points يشهدها مفتش TPG/DPG، وأي NCR يُرفع لـ Quality Department. فهم هذه المسارات يُسرّع المشاريع ويمنع التأخيرات البيروقراطية.</p>",
  "tools": [
    {
      "name": "Organization Chart",
      "icon": "layers"
    },
    {
      "name": "Document Control System",
      "icon": "file-text"
    }
  ],
  "hseWarnings": [
    "أي عمل على شبكة SEC يستلزم تصريح PTW صادر من الجهة المختصة (GRIDCO أو SEC حسب الجهد)",
    "الدخول لأي منشأة SEC/GRIDCO يستلزم تصريح دخول + HSE Induction"
  ],
  "commonMistakes": [
    "التواصل مع الجهة الخطأ (مثلاً مراجعة GRIDCO لمشروع توزيع 11 kV تابع لـ SEC)",
    "إغفال الحصول على موافقة Technical Standards قبل استخدام مواد غير مدرجة في TMSS/DMS"
  ],
  "references": [
    "SEC Annual Report — Corporate Structure",
    "ECRA Regulations — Saudi Arabia Power Sector Reform",
    "Vision 2030 — Energy Sector Transformation Program"
  ]
},

  "c1-s2-1": {
  "title": "الأقسام الرئيسية",
  "category": "الشبكة والجهود",
  "categoryEn": "Network & Voltages",
  "duration": "6 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "التعرف على الأقسام الفنية الرئيسية في SEC/GRIDCO",
    "فهم دور كل قسم في دورة حياة مشروع الكيابل الأرضية",
    "معرفة التسلسل الصحيح للتواصل مع الأقسام المختلفة",
    "فهم آلية اعتماد المواصفات والرسومات"
  ],
  "content": "<h3>الأقسام الفنية الرئيسية المؤثرة على مشاريع UGC</h3><h3>1. قسم التخطيط (Planning Department)</h3><p>يُحدد الاحتياجات المستقبلية للشبكة ويُصدر <strong>Load Flow Studies</strong> التي تُحدد المقاطع المطلوبة وعدد الدوائر. هو الجهة التي تُقرر <strong>متى وأين</strong> يُنفَّذ المشروع.</p><h3>2. قسم التصميم والدراسات (Design &amp; Engineering)</h3><p>يُنتج رسومات المسارات (Route Drawings) وحسابات Ampacity وتصاميم المناهيل. مراجعته إلزامية لـ <strong>اعتماد Method Statements</strong> الحساسة.</p><h3>3. قسم المشاريع (Projects Department)</h3><p>يُدير تنفيذ العقود (EPC / Supply &amp; Install). يضم مفتشي Hold Points الذين يُوقّعون على <strong>ITP Witness Points</strong> ولا يمكن تجاوزهم.</p><h3>4. قسم الجودة (Quality Department / QA-QC)</h3><p>يراجع ITP و Method Statements ويرفع تقارير NCR. أي انحراف عن المواصفة (Non-Conformance) يمر عبره قبل أي حل.</p><h3>5. قسم المعايير التقنية (Technical Standards)</h3><p>يُصدر ويُحدّث <strong>TMSS</strong> (Transmission Material &amp; System Standards) و<strong>DMS</strong> (Distribution Material Standards). أي مادة غير مدرجة في هذه الوثائق تحتاج <strong>Technical Deviation</strong> معتمداً منه.</p><h3>6. قسم السلامة (HSE Department)</h3><p>يُدير PTW System ويُجري Safety Audits. في المشاريع الكبيرة يُعيّن <strong>HSE Officer</strong> بدوام كامل في الموقع.</p>",
  "tools": [
    {
      "name": "Document Management System",
      "icon": "file-text"
    },
    {
      "name": "ITP Template",
      "icon": "check-circle"
    }
  ],
  "hseWarnings": [
    "لا يجوز البدء بأي خطوة Hold Point قبل حضور مفتش SEC/GRIDCO الرسمي",
    "رفع NCR ليس عقوبةً — إغفاله هو المشكلة الحقيقية التي قد تُلغي القبول النهائي"
  ],
  "commonMistakes": [
    "تجاوز Hold Points بحجة ضغط الجدول الزمني — يُسبب إعادة العمل بالكامل",
    "تقديم Method Statement لقسم المشاريع دون اعتماد مسبق من قسم المعايير"
  ],
  "references": [
    "SEC TMSS — General Requirements Section",
    "SEC Project Execution Manual (PEM)",
    "ISO 9001 — Quality Management Systems"
  ]
},

  "c1-s2-2": {
  "title": "مناطق التشغيل الأربع",
  "category": "الشبكة والجهود",
  "categoryEn": "Network & Voltages",
  "duration": "6 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "التعرف على المناطق التشغيلية الأربع لـ SEC",
    "فهم خصائص كل منطقة من حيث الجهد والكثافة السكانية",
    "معرفة التحديات التقنية الخاصة بكل منطقة",
    "ربط اختيار نوع الكيابل بالبيئة الجغرافية للمنطقة"
  ],
  "content": "<h3>المناطق التشغيلية الأربع لشركة SEC</h3><h3>1. المنطقة الوسطى (Central Operating Area - COA)</h3><p>تشمل <strong>الرياض والمنطقة الوسطى</strong>. الأكثر كثافةً في مشاريع UGC نظراً للتوسع العمراني السريع. التحديات: <strong>درجات حرارة مرتفعة جداً</strong> (حتى 50°C) وتربة رملية جافة بـ ρ مرتفعة. يُستخدم Thermal Backfill بشكل إلزامي في معظم مشاريعها.</p><h3>2. المنطقة الغربية (Western Operating Area - WOA)</h3><p>تشمل <strong>جدة ومكة المكرمة والمدينة المنورة والطائف</strong>. تتميز بتضاريس متنوعة (جبال، سواحل، وديان). مكة والمدينة لهما متطلبات خاصة لكثافة الحج والعمرة مما يستلزم موثوقية فائقة (N-1 Contingency كحد أدنى). الرطوبة الساحلية في جدة تُشكّل تحدياً للـ Terminations.</p><h3>3. المنطقة الشرقية (Eastern Operating Area - EOA)</h3><p>تشمل <strong>الدمام والجبيل والخبر والأحساء</strong>. تتميز بوجود شبكتين: شبكة SEC التقليدية وشبكة أرامكو الموروثة (115 kV). أبرز تحدياتها: <strong>المياه الجوفية المرتفعة</strong> في بعض المناطق، والتربة الصبخية المالحة التي تؤثر على الـ Outer Jacket. تستلزم بعض مشاريعها كيابل بـ Double Jacket أو Submarine-type.</p><h3>4. المنطقة الجنوبية (Southern Operating Area - SOA)</h3><p>تشمل <strong>أبها وجازان ونجران وبيشة</strong>. التحديات: تضاريس جبلية شديدة الوعورة تُعقّد مسارات الكيابل وتستلزم كثيراً من HDD وتقنيات العبور. رطوبة مرتفعة في جازان تُشابه بيئة المناطق الاستوائية.</p>",
  "tools": [
    {
      "name": "GIS / GPS Mapping",
      "icon": "map-pin"
    },
    {
      "name": "Soil Report",
      "icon": "layers"
    }
  ],
  "hseWarnings": [
    "في المنطقة الشرقية، خطر التربة الصبخية يُسرّع تآكل الـ Metallic Sheath — تحقق من Chemical Analysis قبل اختيار نوع الـ Jacket",
    "في المنطقة الجنوبية، خطر الفيضانات الموسمية يستلزم عمقاً إضافياً للكيابل في مجاري الأودية"
  ],
  "commonMistakes": [
    "تطبيق نفس مواصفة Thermal Backfill في الرياض على مشروع في جازان دون مراعاة الرطوبة",
    "إغفال خطر التربة الصبخية في المنطقة الشرقية عند اختيار مواد الـ Jacket"
  ],
  "references": [
    "SEC Regional Operating Procedures",
    "Saudi Building Code — Geotechnical Requirements",
    "CIGRÉ Technical Brochure 880 — Special Environments"
  ]
},

  "c1-s2-3": {
  "title": "الدور والمسؤوليات",
  "category": "الشبكة والجهود",
  "categoryEn": "Network & Voltages",
  "duration": "6 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "فهم توزيع المسؤوليات بين مختلف الأطراف في مشاريع UGC",
    "معرفة مسؤوليات SEC/GRIDCO كـ Asset Owner",
    "فهم حدود صلاحية المقاول مقابل الاستشاري",
    "معرفة آليات التواصل الرسمية في المشاريع"
  ],
  "content": "<h3>مصفوفة المسؤوليات في مشاريع الكيابل الأرضية</h3><h3>SEC / GRIDCO — المالك (Asset Owner)</h3><ul><li>إصدار المواصفات الفنية (TMSS / DMS)</li><li>اعتماد التصاميم النهائية</li><li>إصدار تصاريح العمل (PTW)</li><li>مراقبة Hold Points وWitness Points</li><li>قبول الاختبارات النهائية والتسليم</li><li>تشغيل الأصول بعد التسليم (O&M)</li></ul><h3>الاستشاري (Consultant / PMC)</h3><ul><li>إعداد التصاميم التفصيلية (Detail Design)</li><li>مراجعة واعتماد Method Statements المقاول</li><li>الإشراف على التنفيذ (Construction Supervision)</li><li>مراجعة نتائج الاختبارات وإصدار توصيات القبول</li><li>رفع تقارير التقدم لـ SEC</li><li><strong>لا يتدخل في إدارة العمالة أو التوريد مباشرة</strong></li></ul><h3>المقاول (Contractor / EPC)</h3><ul><li>تنفيذ جميع الأعمال المدنية والميكانيكية والكهربائية</li><li>إعداد وتقديم Method Statements وITPs</li><li>توريد المواد المعتمدة في TMSS أو الحصول على Technical Deviation</li><li>إجراء جميع الاختبارات بحضور الاستشاري وممثل SEC</li><li>الضمان لفترة DLP (عادة 12-24 شهراً)</li></ul><h3>نقاط الاحتكاك الشائعة</h3><p>كثيراً ما تنشأ نزاعات حول: <strong>تفسير المواصفة</strong>، وحول <strong>تأخير الاعتمادات</strong> (Submittals)، وحول <strong>Hold Points التي لم يُحضرها المفتش في الوقت المحدد</strong>. فهم الحدود الواضحة لكل طرف يُقلل هذه النزاعات.</p>",
  "tools": [
    {
      "name": "RACI Matrix",
      "icon": "file-text"
    },
    {
      "name": "Submittal Register",
      "icon": "check-circle"
    }
  ],
  "hseWarnings": [
    "المسؤولية القانونية عن حوادث الموقع تقع على المقاول أولاً — لكن SEC/GRIDCO قد تُوقف المشروع فوراً",
    "المستشار لا يُعطي تعليمات مباشرة للعمال — يمر كل شيء عبر مهندس المقاول المسؤول"
  ],
  "commonMistakes": [
    "بدء التنفيذ قبل اعتماد Method Statement من الاستشاري — يُسبب إيقاف العمل وإعادة التنفيذ",
    "الاعتقاد بأن موافقة الاستشاري تُلزم المالك — المالك له استقلالية في القبول النهائي"
  ],
  "references": [
    "FIDIC Silver Book 2017 — Employer's Obligations",
    "SEC General Conditions of Contract",
    "Saudi Labor Law — Contractor Obligations"
  ]
},

  "c1-s3-0": {
  "title": "مقارنة شاملة: OHL vs UGC",
  "category": "الشبكة والجهود",
  "categoryEn": "Network & Voltages",
  "duration": "10 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "مقارنة الخطوط الهوائية (OHL) بالكيابل الأرضية (UGC) تقنياً واقتصادياً",
    "فهم الاختلافات الكهربائية الجوهرية بين النظامين",
    "تحليل معايير الاختيار من منظور التصميم",
    "التعرف على حالات التكامل بين OHL وUGC في شبكة SEC"
  ],
  "content": "<h3>نظرة عامة: Overhead Lines (OHL) vs Underground Cables (UGC)</h3><p>كلا النظامين يحمل الطاقة الكهربائية، لكنهما يختلفان جذرياً في الفيزياء والتكلفة والصيانة والأداء. في السعودية، الخطوط الهوائية هي الأساس التاريخي، لكن التوجه نحو UGC يتسارع بقوة في المدن.</p><h3>المقارنة التقنية</h3><ul><li><strong>Capacitance (C)</strong>: UGC أعلى بـ 20-30 مرة من OHL — يُسبب <strong>Charging Current</strong> عالياً يُقلل Ampacity الفعلية ويُعقّد تصميم التعويض (Reactive Power Compensation)</li><li><strong>Inductance (L)</strong>: OHL أعلى بكثير — يُسبب انخفاضاً في جهد منتصف الخط (Ferranti Effect)</li><li><strong>Resistance (R)</strong>: متقارب، لكن UGC يعمل بحرارة أعلى مما يرفع R قليلاً</li><li><strong>Impedance</strong>: UGC أقل impedance → أعلى تيار قصر (Fault Current) → يحتاج تصميم حماية مختلفاً</li><li><strong>الطول القصوى الموصى به لـ UGC</strong>: 30-50 كم عند الجهود العالية قبل أن تُصبح Charging Currents مشكلة تستلزم Reactors</li></ul><h3>المقارنة الاقتصادية</h3><ul><li><strong>CAPEX</strong>: UGC أغلى بـ 5-10 أضعاف من OHL للجهود العالية (380 kV)</li><li><strong>OPEX</strong>: UGC أقل تكلفةً في الصيانة السنوية</li><li><strong>متوسط العمر</strong>: OHL 40-50 سنة — UGC XLPE 40 سنة أيضاً لكن إصلاح العيوب أصعب وأطول</li><li><strong>تكلفة إصلاح العيوب</strong>: UGC أعلى بكثير (حفر + joint + اختبار)</li></ul><h3>المقارنة البيئية والجمالية</h3><ul><li>UGC لا يُشوّه المنظر البصري — أهم بكثير في المناطق المقدسة والمدن السياحية</li><li>UGC مقاوم للعواصف الرملية والبرد والرياح — ميزة واضحة في السعودية</li><li>OHL تُسبب EMF مرئياً في المناطق المفتوحة — قد يُقيّد البناء حولها</li></ul>",
  "tools": [
    {
      "name": "Load Flow Software (PSS/E)",
      "icon": "cpu"
    },
    {
      "name": "Cost Estimation Sheet",
      "icon": "file-text"
    }
  ],
  "hseWarnings": [
    "عند التحول من OHL إلى UGC، إجراء التأريض يختلف جذرياً — لا تطبق إجراءات OHL على UGC",
    "تيار الشحن العالي (Charging Current) لـ UGC الطويل قد يُسبب overvoltage خطير عند فصل الحمل"
  ],
  "commonMistakes": [
    "تجاهل Charging Current عند تصميم مسارات UGC طويلة (> 20 كم عند 110 kV فأعلى)",
    "تطبيق نظام حماية OHL (Distance Relay) مباشرة على UGC دون تعديل معاملات الحماية",
    "إهمال حساب Reactive Power Compensation عند استبدال OHL بـ UGC"
  ],
  "references": [
    "CIGRÉ Technical Brochure 738 — Overhead Lines vs Underground Cables",
    "IEC 60287-3-2 — Economic Optimization",
    "SEC Planning Criteria Manual"
  ]
},

  "c1-s3-1": {
  "title": "متى نختار OHL؟",
  "category": "الشبكة والجهود",
  "categoryEn": "Network & Voltages",
  "duration": "6 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "تحديد معايير الاختيار لصالح الخطوط الهوائية",
    "فهم الحالات التي يكون فيها OHL الخيار الاقتصادي والتقني الأمثل",
    "معرفة القيود الجغرافية التي تفرض OHL",
    "تحليل مشاريع SEC التي اعتمدت OHL وأسباب ذلك"
  ],
  "content": "<h3>متى يكون OHL الخيار الأمثل؟</h3><h3>1. المسافات الطويلة في المناطق غير المأهولة</h3><p>الخطوط الهوائية تتفوق اقتصادياً بوضوح في المناطق الصحراوية الشاسعة. مثلاً، خطوط 380 kV التي تربط الرياض بجازان أو بالمدينة المنورة (مسافات 500-800 كم) لا يمكن تنفيذها بالكيابل الأرضية اقتصادياً.</p><h3>2. تيارات القصر العالية جداً</h3><p>في محطات الربط الرئيسية حيث تكون Short Circuit Levels مرتفعة جداً (> 50 kA)، يكون OHL أسهل في التعامل مع هذه التيارات لأن الـ Fault Current في الهواء لا يُسبب ضغطاً ميكانيكياً على كيبل.</p><h3>3. سهولة الصيانة والإصلاح السريع</h3><p>عطل في OHL (مثل كسر Insulator أو Tower) يُصلَح في ساعات — عطل كيبل أرضي قد يأخذ أسابيع (حفر + joint + اختبار + ردم).</p><h3>4. التضاريس الصعبة التي تُعيق الحفر</h3><p>في المناطق الجبلية جنوب المملكة حيث الصخور صلبة، قد يكون تركيب برج OHL أسهل وأرخص من الحفر بالانفجار.</p><h3>5. المرونة في التوسع</h3><p>إضافة دائرة ثانية لخط OHL قائم أسهل من مد كيبل أرضي إضافي في مسار محاط بالبنية التحتية.</p><h3>القرار الاقتصادي</h3><p>حساب <strong>Levelized Cost of Energy (LCOE)</strong> للـ OHL مقابل UGC على مدى 40 سنة عادةً يُعطي OHL ميزةً واضحة للمسافات > 50 كم في المناطق غير الحضرية.</p>",
  "tools": [
    {
      "name": "Route Feasibility Study",
      "icon": "map-pin"
    },
    {
      "name": "Cost-Benefit Analysis",
      "icon": "file-text"
    }
  ],
  "hseWarnings": [
    "خطوط OHL بجانب مطارات القصيم والمدينة وغيرها تخضع لقيود ارتفاع خاصة من هيئة الطيران",
    "خطوط 380 kV الهوائية تُحدث EMF يستلزم setback distances من المناطق السكنية حسب ECRA"
  ],
  "commonMistakes": [
    "اختيار OHL في المناطق الحضرية بحجة التوفير — التكاليف المخفية (Right of Way، تعويضات، NOCs) تُلغي هذه الميزة",
    "إغفال تأثير العواصف الرملية الشديدة على Insulators — يُزيد من تكاليف الصيانة الموسمية"
  ],
  "references": [
    "CIGRÉ Technical Brochure 373 — Options for Overhead Lines",
    "SEC TMSS — Overhead Line Standards",
    "IEC 60826 — Loading and Strength of OHL"
  ]
},

  "c1-s3-2": {
  "title": "متى نختار UGC؟",
  "category": "الشبكة والجهود",
  "categoryEn": "Network & Voltages",
  "duration": "7 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "تحديد معايير الاختيار لصالح الكيابل الأرضية",
    "فهم الحالات التي يُفرض فيها UGC كخيار إلزامي",
    "ربط قرار اختيار UGC بالبيئة الحضرية والاعتبارات الاجتماعية",
    "معرفة السياسات الرسمية لـ SEC/GRIDCO في هذا الشأن"
  ],
  "content": "<h3>متى يكون UGC الخيار الإلزامي أو المفضل؟</h3><h3>1. المناطق الحضرية الكثيفة</h3><p>في مركز الرياض وجدة ومكة والمدينة، لا يوجد Right of Way كافٍ لبرج OHL. كذلك الجمالية والأمان من الحوادث يجعلان UGC الخيار الوحيد عملياً.</p><h3>2. توجيهات أمانات المدن ووزارة الشؤون البلدية</h3><p>في السنوات الأخيرة باتت معظم أمانات المدن السعودية الكبرى تُلزم بعدم مد خطوط هوائية داخل النطاق العمراني — مما يجعل UGC قراراً تنظيمياً لا اختيارياً.</p><h3>3. المناطق المقدسة ومحيط الحرمين</h3><p>مكة المكرمة والمدينة المنورة لديهما سياسة صارمة لإزالة الخطوط الهوائية كلياً وتحويلها لكيابل أرضية ضمن مشاريع التطوير المستمرة.</p><h3>4. المطارات والمناطق الحساسة</h3><p>محيط المطارات ومنشآت الرادار والاتصالات يمنع OHL لأسباب الملاحة الجوية والتداخل الكهرومغناطيسي.</p><h3>5. المناطق عالية الموثوقية (N-1 Contingency)</h3><p>الكيابل الأرضية أقل تأثراً بالعوامل الجوية مما يجعلها أكثر موثوقية — معيار حاسم لتغذية المستشفيات والمطارات والمشاريع الاستراتيجية.</p><h3>6. NEOM وVision 2030 Projects</h3><p>جميع مشاريع رؤية 2030 الكبرى (NEOM، القدية، البحر الأحمر) تعتمد UGC حصرياً لتحقيق المعايير الجمالية والبيئية المطلوبة.</p>",
  "tools": [
    {
      "name": "Urban Planning Map",
      "icon": "map-pin"
    },
    {
      "name": "Reliability Analysis Tool",
      "icon": "activity"
    }
  ],
  "hseWarnings": [
    "في المناطق الحضرية الكثيفة، خطر الحفر بجانب كيابل أخرى قائمة عالٍ — GPR Survey إلزامي قبل أي حفر",
    "كيابل UGC في مناطق الحج تعمل تحت أحمال ذروة شديدة — Ampacity Calculation بأسوأ السيناريوهات إلزامي"
  ],
  "commonMistakes": [
    "تصميم UGC للمسافات الطويلة جداً دون تخطيط للـ Reactive Power Compensation",
    "اختيار UGC في مناطق ذات تربة شديدة الحرارة دون التحقق من Thermal Backfill المناسب"
  ],
  "references": [
    "SEC Underground Cabling Policy",
    "Royal Commission for Makkah — Technical Standards",
    "NEOM Technical Specifications"
  ]
},

  "c1-s3-3": {
  "title": "التحول من OHL إلى UGC",
  "category": "الشبكة والجهود",
  "categoryEn": "Network & Voltages",
  "duration": "9 دقائق",
  "difficulty": "متقدم",
  "objectives": [
    "فهم التحديات التقنية الفريدة في مشاريع التحول من OHL إلى UGC",
    "معرفة متطلبات نقطة الالتقاء (Transition Point) وهياكل Gantry",
    "حساب تأثير الـ Charging Current عند استبدال OHL بـ UGC",
    "فهم متطلبات الحماية الكهربائية المعدّلة"
  ],
  "content": "<h3>مشاريع التحول (OHL-to-UGC Transition) — تحديات فريدة</h3><p>هذا النوع من المشاريع شائع في مشاريع تحسين المدن السعودية، حيث يُزال جزء من خط هوائي قائم ويُستبدل بكيبل أرضي في القطاع الحضري، مع إبقاء الأجزاء الريفية هوائية.</p><h3>نقطة الالتقاء (Transition Point) — Gantry Structure</h3><p>عند نقطة التحول من الجوي للأرضي، يُنشأ هيكل معدني يُسمى <strong>Gantry</strong>. يحمل هذا الهيكل:</p><ul><li><strong>Outdoor Terminations</strong> للكيبل الأرضي</li><li><strong>Surge Arresters</strong> لحماية الكيبل من صواعق البرق المنتقلة من الخط الهوائي</li><li><strong>Disconnectors</strong> للعزل عند الصيانة</li><li><strong>Current Transformers (CTs)</strong> للقياس والحماية</li></ul><h3>مشكلة Charging Current</h3><p>عند استبدال OHL بـ UGC، يرتفع Charging Current بشكل حاد. مثلاً، كيبل 110 kV × 10 كم XLPE 1200mm² له Charging Current ≈ 50-80 أمبير — وهذا التيار يسري حتى بدون أي حمل فعلي، مما يُقلل Ampacity المتاحة ويُغيّر خصائص الجهد على الخط.</p><h3>تغيير معاملات الحماية</h3><p>بعد التحول، يتغير impedance الخط بشكل جذري. يجب إعادة ضبط:</p><ul><li><strong>Distance Relay (21)</strong> — معاملات المنطقة تتغير كلياً</li><li><strong>Differential Protection (87L)</strong> — يُفضَّل تركيبه خصيصاً للمقطع الكابلي</li><li><strong>Auto-Reclosing</strong> — يُلغى بالكامل على مقطع الكيبل (UGC لا يتحمل إعادة الوصل على عطل)</li></ul>",
  "tools": [
    {
      "name": "Surge Arrester Test Set",
      "icon": "zap"
    },
    {
      "name": "Thermal Camera (IR)",
      "icon": "thermometer"
    },
    {
      "name": "Protection Relay Test Set",
      "icon": "settings"
    }
  ],
  "hseWarnings": [
    "Gantry Structures ترتفع حتى 10-15 متراً — يتطلب العمل عليها Work at Height Permit منفصل",
    "صواعق البرق تنتقل من OHL مباشرة إلى كيبل الـ Transition — Surge Arresters ليست اختيارية بل إلزامية"
  ],
  "commonMistakes": [
    "إلغاء Auto-Reclosing على الخط الهوائي كاملاً بدلاً من إلغائه على مقطع الكيبل فقط",
    "نسيان إعادة ضبط Distance Relay بعد التحول — يُسبب عدم انتقائية الحماية"
  ],
  "references": [
    "CIGRÉ Technical Brochure 250 — Joints and Transitions OHL/UGC",
    "IEC 60099-4 — Surge Arresters for AC Systems",
    "SEC TMSS — Transition Structure Requirements"
  ]
},

  "c1-s4-0": {
  "title": "المالك (Owner)",
  "category": "الشبكة والجهود",
  "categoryEn": "Network & Voltages",
  "duration": "5 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "فهم دور المالك (Owner/Employer) في عقود UGC",
    "معرفة حقوق وواجبات SEC/GRIDCO كـ Asset Owner",
    "فهم آلية إصدار تعليمات الموقع وتغييرات العقد",
    "معرفة متطلبات التقارير الدورية للمالك"
  ],
  "content": "<h3>المالك (Owner / Employer) في مشاريع UGC</h3><p>في سياق مشاريع SEC وGRIDCO، المالك هو الجهة التي تمتلك الأصل (الكيبل والمحطات) وتتحمل المسؤولية الاستراتيجية والمالية للمشروع. في معظم عقود SEC يُستخدم نموذج <strong>FIDIC Silver Book</strong> (EPC Turnkey).</p><h3>مسؤوليات المالك الرئيسية</h3><ul><li><strong>إصدار المواصفات الفنية</strong>: TMSS وDMS والمعايير المرجعية الإلزامية</li><li><strong>توفير Right of Way</strong>: الحصول على حق المرور من الجهات الحكومية لمسار الكيبل</li><li><strong>إصدار تصاريح PTW</strong>: لا يعمل أحد على الشبكة الحية دون موافقته</li><li><strong>توفير نقاط الاتصال بالشبكة</strong>: إخلاء Bays في المحطتين الطرفيتين للاختبار والتشغيل</li><li><strong>قبول الأعمال والتوقيع على شهادات الإنجاز</strong>: PAC وFAC</li><li><strong>تشغيل الأصل بعد PAC</strong>: يتسلّم المسؤولية التشغيلية الكاملة</li></ul><h3>صلاحيات المالك</h3><p>للمالك حق <strong>إيقاف العمل</strong> في أي وقت لأسباب السلامة أو الجودة دون تعويض للمقاول. وله حق <strong>رفض أي مادة</strong> لا تستوفي TMSS حتى لو كانت موافقاً عليها مبدئياً من الاستشاري.</p>",
  "tools": [
    {
      "name": "Contract Document",
      "icon": "file-text"
    },
    {
      "name": "Acceptance Certificate Template",
      "icon": "check-circle"
    }
  ],
  "hseWarnings": [
    "المالك يحق له إيقاف المشروع فوراً عند أي انتهاك HSE خطير — دون الحاجة لأي إشعار مسبق",
    "تسليم الأصل للمالك بعد PAC يعني نقل مسؤولية السلامة التشغيلية إليه كلياً"
  ],
  "commonMistakes": [
    "مفاوضة المالك على تخفيف متطلبات TMSS — TMSS غير قابلة للتفاوض إلا بـ Technical Deviation رسمي",
    "افتراض أن موافقة الاستشاري تُلزم المالك — المالك له استقلالية في القبول النهائي"
  ],
  "references": [
    "FIDIC Silver Book 2017 — Employer's Obligations",
    "SEC General Conditions of Contract",
    "Saudi Labor Law — Contractor Obligations"
  ]
},

  "c1-s4-1": {
  "title": "الاستشاري (Consultant)",
  "category": "الشبكة والجهود",
  "categoryEn": "Network & Voltages",
  "duration": "5 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "فهم الدور المحوري للاستشاري في مشاريع UGC",
    "معرفة الفرق بين PMC وDesign Consultant وSupervision Consultant",
    "فهم صلاحيات الاستشاري وحدودها",
    "معرفة معايير اختيار الاستشاري في مشاريع SEC"
  ],
  "content": "<h3>الاستشاري (Consultant) — العقل التقني للمشروع</h3><p>الاستشاري يُمثّل المالك تقنياً في الموقع وفي عمليات المراجعة. قد يكون واحداً أو عدة أطراف حسب حجم المشروع.</p><h3>أنواع الاستشاري في مشاريع SEC</h3><ul><li><strong>PMC (Project Management Consultant)</strong>: يُدير المشروع كاملاً نيابةً عن المالك — يشمل الجدول والتكلفة والجودة</li><li><strong>Design Consultant</strong>: يُنتج التصاميم التفصيلية (Route Drawings, Calculations, Specs)</li><li><strong>Supervision Consultant</strong>: يُشرف على التنفيذ الميداني ويوقّع على ITP</li></ul><h3>المسؤوليات الميدانية للاستشاري</h3><ul><li>مراجعة واعتماد Method Statements وITPs والرسومات الورشية (Shop Drawings)</li><li>التوقيع على Witness Points بعد التحقق الفعلي من التنفيذ</li><li>إصدار Site Instructions (SI) للمقاول</li><li>رفع تقارير تقدم أسبوعية/شهرية للمالك</li><li><strong>لا يُعطي أوامر مباشرة للعمال</strong> — يتواصل دائماً مع مهندس المقاول</li></ul><h3>الاستشاريون المعتمدون في مشاريع SEC</h3><p>من أبرز الاستشاريين النشطين: <strong>AECOM، WSP، Power Engineers، Parsons، Saudi Consulting Services (SCS)، Dar Al Handasah</strong>.</p>",
  "tools": [
    {
      "name": "Site Instruction Form",
      "icon": "pen-line"
    },
    {
      "name": "ITP Review Checklist",
      "icon": "check-circle"
    }
  ],
  "hseWarnings": [
    "الاستشاري مُلزَم بالإبلاغ الفوري عن أي انتهاك HSE يُشاهده — السكوت يُعرّضه للمسؤولية القانونية",
    "توقيع الاستشاري على Witness Point لا يُعني إعفاء المقاول من مسؤولية الجودة"
  ],
  "commonMistakes": [
    "الاستشاري يوقّع على ITP دون حضور فعلي في الموقع — ممارسة خطيرة وغير مقبولة",
    "إصدار Site Instructions شفهية دون توثيق — يُسبب نزاعات لاحقة حول المسؤولية"
  ],
  "references": [
    "FIDIC White Book — Client-Consultant Agreement",
    "SEC Consultant Qualification Requirements",
    "ISO 17020 — Requirements for Inspection Bodies"
  ]
},

  "c1-s4-2": {
  "title": "المقاول (Contractor)",
  "category": "الشبكة والجهود",
  "categoryEn": "Network & Voltages",
  "duration": "6 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "فهم مسؤوليات المقاول في تنفيذ مشاريع UGC",
    "معرفة المتطلبات التأهيلية للمقاولين في SEC",
    "التعرف على أبرز المقاولين النشطين في السوق السعودي",
    "فهم نظام التعاقد من الباطن (Subcontracting) وحدوده"
  ],
  "content": "<h3>المقاول في مشاريع UGC</h3><p>المقاول هو الطرف المنفّذ الذي يتحمل المسؤولية الكاملة عن التنفيذ الفعلي للأعمال المدنية والكهربائية وإجراء الاختبارات. في عقود SEC EPC، المقاول مسؤول أيضاً عن التوريد (Supply).</p><h3>متطلبات تأهيل المقاولين في SEC</h3><ul><li><strong>تصنيف الهيئة السعودية للمقاولين</strong>: درجة أولى أو ثانية حسب حجم المشروع</li><li><strong>خبرة مثبتة</strong>: مشاريع مماثلة (نفس الجهد أو أعلى) خلال الـ 10 سنوات الماضية</li><li><strong>كوادر فنية مؤهلة</strong>: مهندسون معتمدون + Jointers معتمدون من الشركات المصنعة</li><li><strong>نظام إدارة الجودة</strong>: ISO 9001 فعّال ومعتمد</li><li><strong>نظام HSE</strong>: ISO 45001 أو OHSAS 18001</li></ul><h3>أبرز المقاولين في السوق السعودي</h3><ul><li><strong>Al-Toukhi Company</strong> — من أكبر مقاولي SEC محلياً</li><li><strong>NESMA &amp; Partners</strong> — الأعمال الكهربائية والمدنية الكبرى</li><li><strong>Archirodon, CEGELEC</strong> — المقاولون الدوليون</li><li><strong>Power Tech, Saudi Electric Services</strong> — المقاولون المحليون المتخصصون</li></ul><h3>التعاقد من الباطن (Subcontracting)</h3><p>SEC تُقيّد Subcontracting للأعمال الحرجة — بالذات Jointing وHV Testing يجب أن يؤديها فريق المقاول المباشر أو مقاول فرعي معتمد مُدرَج في قائمة المقاول الرئيسي المعتمدة.</p>",
  "tools": [
    {
      "name": "Contractor Qualification File",
      "icon": "file-text"
    },
    {
      "name": "Method Statement Template",
      "icon": "pen-line"
    }
  ],
  "hseWarnings": [
    "المقاول مسؤول قانونياً عن جميع حوادث العمل لعماله وعمال مقاوليه الفرعيين",
    "أي تعاقد فرعي غير معتمد من المالك يعرّض المقاول لإنهاء العقد فوراً"
  ],
  "commonMistakes": [
    "تعيين Jointers غير معتمدين من الشركة المصنعة للـ Accessories — يُسبب رفض الضمان كاملاً",
    "إهمال تقديم Subcontractor Approval قبل البدء — يُسبب إيقاف العمل"
  ],
  "references": [
    "Saudi Contractors Authority (SCA) Regulations",
    "SEC Prequalification Requirements for Contractors",
    "FIDIC Silver Book — Contractor's Obligations"
  ]
},

  "c1-s4-3": {
  "title": "المورد (Supplier)",
  "category": "الشبكة والجهود",
  "categoryEn": "Network & Voltages",
  "duration": "6 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "فهم دور المورد في سلسلة توريد مشاريع UGC",
    "معرفة متطلبات الموردين المعتمدين لدى SEC",
    "فهم آلية FAT وكيفية التحقق من الجودة في المصنع",
    "معرفة متطلبات المحتوى المحلي (Local Content) في قطاع الطاقة"
  ],
  "content": "<h3>المورد (Supplier / Manufacturer) في مشاريع UGC</h3><p>المورد هو الجهة التي تُصنّع وتُورّد المواد والمعدات الرئيسية: الكيابل، الـ Accessories (Joints &amp; Terminations)، المناهيل، الـ Link Boxes، SVLs، والكيابل الضوئية.</p><h3>متطلبات الموردين المعتمدين لدى SEC</h3><ul><li><strong>القائمة البيضاء (Approved Vendor List - AVL)</strong>: كل مادة لها قائمة موردين معتمدين في TMSS. المورد غير المدرج لا يمكن قبول موادّه.</li><li><strong>اختبارات النوع (Type Tests)</strong>: يُثبت المورد بشهادات معتمدة مختبرياً أن منتجه اجتاز IEC Type Tests</li><li><strong>اختبارات القبول في المصنع (FAT)</strong>: SEC ترسل مفتشاً لحضور Routine Tests على كل طبلة كيابل قبل الشحن</li><li><strong>شهادات المواد (MTC)</strong>: كل دفعة من المواد يصحبها Material Test Certificate من مختبر معتمد</li><li><strong>Traceability</strong>: كل Drum وكل Joint Kit له رقم Serial يُمكّن تتبعه من المصنع للموقع</li></ul><h3>المحتوى المحلي (Local Content)</h3><p>في إطار برنامج رؤية 2030، SEC تُشجّع (وأحياناً تُلزم) بنسب معينة من الموردين المحليين. الشركات السعودية: <strong>Saudi Cable Company (SCC)، Riyadh Cables، Jeddah Cables</strong> تحظى بأفضلية في عملية المنافسة.</p><h3>إجراء FAT بإيجاز</h3><ul><li>تنسيق مسبق مع المصنع على جدول الإنتاج</li><li>إرسال مفتش SEC/الاستشاري للمصنع</li><li>حضور Partial Discharge Test وAC Voltage Test لكل طبلة</li><li>فحص الأبعاد والعلامات والطول</li><li>توقيع على Drum Release Certificate قبل الشحن</li></ul>",
  "tools": [
    {
      "name": "Approved Vendor List (AVL)",
      "icon": "check-circle"
    },
    {
      "name": "MTC Template",
      "icon": "file-text"
    },
    {
      "name": "FAT Checklist",
      "icon": "check-circle"
    }
  ],
  "hseWarnings": [
    "استلام كيابل بدون MTC أو بـ MTC غير معتمدة من مختبر ILAC هو انتهاك صريح لـ TMSS",
    "تخزين الطبل بشكل أفقي أو في درجات حرارة منخفضة جداً يُلغي ضمان المصنع"
  ],
  "commonMistakes": [
    "قبول كيابل من مورد غير مدرج في AVL بحجة التوفير في التكلفة — يُسبب رفض المشروع كاملاً",
    "إغفال حضور FAT في المصنع مما يُكتشف لاحقاً أن كيابل مشحونة دون اختبار Partial Discharge"
  ],
  "references": [
    "SEC TMSS Approved Vendor List (latest edition)",
    "IEC 60840 / IEC 62067 — Factory Tests Requirements",
    "Saudi Vision 2030 — Local Content Program"
  ]
},

  // ===== Previous Session Topics =====
  "c4-s1-0": {
    title: "XLPE — Cross-Linked Polyethylene",
    category: "الكيابل الأرضية",
    categoryEn: "Underground Cables",
    duration: "15 دقيقة",
    difficulty: "متوسط",
    objectives: [
      "خصائص XLPE الكيميائية والكهربائية",
      "فهم عملية Cross-Linking",
      "مزايا XLPE على PILC",
      "حدود درجة الحرارة واستخدامات XLPE"
    ],
    content: `
      <h3>ما هو XLPE؟</h3>
      <p>XLPE (Cross-Linked Polyethylene) هو البوليمر الأكثر استخداماً في عزل كيابل الجهد العالي حول العالم منذ السبعينيات. الاسم يُشير لعملية ربط متقاطع (Cross-Linking) بين سلاسل البوليمر بشبكة ثلاثية الأبعاد.</p>

      <h3>عملية Cross-Linking</h3>
      <p>PE (Polyethylene) العادي عند التسخين يلين ويذوب. بإضافة Cross-Linking Agents (عادة Peroxides) وتطبيق حرارة وضغط، تتشكل روابط قوية بين السلاسل. النتيجة: مادة تحتفظ بقوتها ومرونتها حتى 90°C (و130°C لفترات قصيرة).</p>

      <h3>الخصائص الكهربائية</h3>
      <ul>
        <li>مقاومة معزول نوعية: &gt; 10¹⁶ Ω·m</li>
        <li>معامل عزل (εr): 2.3</li>
        <li>Tan Delta (جديد): &lt; 0.1%</li>
        <li>درجة حرارة عمل قصوى: 90°C</li>
        <li>قدرة تحمل قصر الدارة: 250°C</li>
      </ul>

      <h3>مقارنة مع PILC</h3>
      <ul>
        <li>XLPE يتحمل درجة حرارة أعلى = ampacity أكبر بـ 20-30%</li>
        <li>XLPE لا يحتاج زيت = لا مشكلة تسرب زيت</li>
        <li>XLPE أخف وزناً = أسهل في السحب</li>
        <li>XLPE غير متوافق مع DC Test (عكس PILC)</li>
      </ul>

      <h3>في السوق السعودي</h3>
      <p>شركة SEC تعتمد XLPE حصراً في جميع مشاريعها الجديدة منذ منتصف التسعينيات. المنتجون الرئيسيون في السعودية: Saudi Cable Company (SCC)، Riyadh Cables، Jeddah Cables.</p>
    `,
    tools: [],
    hseWarnings: ["XLPE لا يتحلل بسهولة — انتبه للتخلص من مخلفاته"],
    commonMistakes: [
      "استخدام DC Test على XLPE (ممنوع تماماً)"
    ],
    references: ["IEC 60840", "IEC 62067", "IEC 60287 (Rating)"]
  },

  "c4-s4-0": {
    title: "Water Treeing — التشجّر المائي",
    category: "الكيابل الأرضية",
    categoryEn: "Underground Cables",
    duration: "12 دقيقة",
    difficulty: "متقدم",
    objectives: [
      "فهم ظاهرة Water Treeing وآلية نموها",
      "العوامل المحفّزة لـ Water Treeing",
      "كيف يُكتشف؟",
      "متى يستوجب استبدال الكيبل؟"
    ],
    content: `
      <h3>ما هو Water Treeing؟</h3>
      <p>Water Treeing هي ظاهرة تدهور بطيء في عزل XLPE، تظهر كأشجار مجهرية (يُرى تحت المجهر) تمتد داخل العزل. تسبّبها الجزيئات الصغيرة من الماء التي تتسرب داخل العزل عبر السنين.</p>

      <h3>آلية التكوين</h3>
      <ul>
        <li>الماء يتسرب من خلال HDPE Sheath المتشقق أو من الوصلات</li>
        <li>تحت المجال الكهربائي، جزيئات الماء تتحرك وتُكوّن قنوات مجهرية</li>
        <li>القنوات تنمو تدريجياً من 1 mm بعد سنوات إلى عبور كامل العزل بعد عقود</li>
        <li>عند عبور العزل كاملاً → Electrical Treeing → Breakdown</li>
      </ul>

      <h3>المحفّزات في السعودية</h3>
      <ul>
        <li><strong>المياه الجوفية:</strong> خاصة في المناطق الساحلية (جدة، الدمام)</li>
        <li><strong>التربة الصبخية:</strong> محتوى ملحي عالٍ = إلكتروليت يسرّع التسرب</li>
        <li><strong>حرارة الصيف:</strong> الدورات الحرارية تُشقق HDPE Sheath</li>
        <li><strong>كيابل 80s-90s:</strong> أقل مقاومة من الكيابل الحديثة</li>
      </ul>

      <h3>الكشف والتشخيص</h3>
      <p>VLF + Tan Delta هو الاختبار الأفضل لاكتشاف Water Treeing. قيم Tan Delta ترتفع مع تقدم التشجر (من &lt;0.1% لكيبل جديد إلى &gt;1% لكيبل متدهور). DTS (Distributed Temperature Sensing) يُظهر نقاط ساخنة في مواقع التشجر المتقدم.</p>

      <h3>القرار: استبدال أم متابعة؟</h3>
      <ul>
        <li>Tan Delta &lt; 0.5%: متابعة سنوية</li>
        <li>Tan Delta 0.5-1%: مراقبة كل 6 أشهر + تخطيط للاستبدال</li>
        <li>Tan Delta &gt; 1% أو ارتفاع حاد بين قياسين: استبدال فوري</li>
      </ul>
    `,
    tools: [
      { name: "VLF Test Set + Tan Delta", icon: "activity" },
      { name: "DTS System", icon: "thermometer" },
      { name: "كاميرا مجهرية (للعينات)", icon: "camera" }
    ],
    hseWarnings: ["الكيابل ذات Tan Delta مرتفع قد تفشل أثناء تطبيق الجهد — توخَّ الحذر"],
    commonMistakes: [
      "تجاهل ارتفاع Tan Delta تدريجياً عبر السنين"
    ],
    references: ["IEC 60840 Annex F", "CIGRE TB-496 Water Trees", "IEEE 400.4"]
  },

  // ─── Bonding System ───────────────────────────────────────────────,

  "c5-s1-0": {
    title: "Straight Joint (الوصلة المستقيمة)",
    category: "الوصلات والنهايات",
    categoryEn: "Joints & Terminations",
    duration: "12 دقيقة",
    difficulty: "متقدم",
    objectives: [
      "تعريف Straight Joint وأين تُستخدم",
      "الفرق بين أنواع Straight Joints",
      "الأبعاد والأوزان النموذجية",
      "حالات اللجوء لـ Straight Joint"
    ],
    content: `
      <h3>ما هي الوصلة المستقيمة؟</h3>
      <p>Straight Joint هي الوصلة التي تربط كيبلين <strong>من نفس النوع والجهد والمقطع</strong> في خط مستقيم. تُستخدم حين يزيد طول المقطع المطلوب عن الطول الأقصى للدرم الواحد (عادة 500-1000 m للجهد العالي).</p>

      <h3>أنواع Straight Joints</h3>
      <ul>
        <li><strong>Pre-moulded Slip-Over:</strong> الأكثر استخداماً في 132 kV فأعلى — موثوقية عالية</li>
        <li><strong>Cold Shrink:</strong> سريع التطبيق، جيد للمتوسط وبعض العالي</li>
        <li><strong>Heat Shrink:</strong> الأقل استخداماً في الجهد العالي بسبب مخاطر التطبيق</li>
        <li><strong>Taped:</strong> الطريقة التقليدية القديمة، نادراً في المشاريع الحديثة</li>
      </ul>

      <h3>الأبعاد والأوزان (132 kV - 800 mm² Al)</h3>
      <ul>
        <li>الطول الكلي للوصلة: 1.5 - 2.5 متر</li>
        <li>قطر الجسم: 200-280 mm</li>
        <li>وزن مجموعة الوصلة: 15-30 kg</li>
        <li>وقت التركيب الإجمالي: 8-16 ساعة (جوينتر خبير)</li>
      </ul>

      <h3>متى نختار Straight Joint؟</h3>
      <p>القاعدة بسيطة: إذا احتجت وصل كيبلين من نفس النوع في خط مستمر — Straight Joint. إذا كانت هناك تغيير في نوع الكيبل أو نظام Bonding — انتقل لـ Transition أو IJ Joint.</p>
    `,
    tools: [
      { name: "Joint Kit كامل من المصنّع", icon: "package" },
      { name: "قائمة أدوات المصنّع", icon: "list" }
    ],
    hseWarnings: ["تحقق من شهادة اعتماد الجوينتر على هذا النوع من الوصلات"],
    commonMistakes: [
      "استخدام Joint Kit لجهد مختلف عن جهد الكيبل",
      "اختيار نوع Straight Joint غير متوافق مع نظام التأريض"
    ],
    references: ["IEC 60840 §11", "IEC 62067", "SEC TMSS-02-03"]
  },

  "c5-s1-1": {
    title: "Transition Joint (الوصلة الانتقالية XLPE/PILC)",
    category: "الوصلات والنهايات",
    categoryEn: "Joints & Terminations",
    duration: "15 دقيقة",
    difficulty: "متقدم",
    objectives: [
      "فهم سبب الحاجة لـ Transition Joint",
      "التحديات الخاصة بالربط بين XLPE وPILC",
      "نظام الإحكام ضد الزيت",
      "اعتبارات الجهد عند نقطة الانتقال"
    ],
    content: `
      <h3>لماذا Transition Joint؟</h3>
      <p>كيابل PILC القديمة (ورق + زيت + رصاص) لا تزال موجودة في شبكة SEC القديمة. عند تجديد الشبكة، نحتاج ربط PILC القديم بـ XLPE الجديد. <strong>Transition Joint هي الحل الوحيد المعتمد.</strong></p>

      <h3>التحديات التقنية</h3>
      <ul>
        <li><strong>اختلاف العزل:</strong> ورق مشبّع بزيت vs بوليمر صلب — خصائص كهربائية مختلفة</li>
        <li><strong>الزيت في PILC:</strong> يجب منعه من التسرب للـ XLPE — يؤثر على عزل XLPE</li>
        <li><strong>اختلاف الشاشة:</strong> رصاص (PILC) vs نحاس (XLPE) — معالجة مختلفة للـ Bonding</li>
        <li><strong>التمدد الحراري:</strong> الرصاص والبوليمر يتمددان بمعدلات مختلفة</li>
      </ul>

      <h3>نظام الإحكام ضد الزيت (Oil Barrier)</h3>
      <p>يحتوي كل Transition Joint على نظام Oil Barrier مزدوج يمنع زيت PILC من الوصول لعزل XLPE. عادة يكون Epoxy Seal + Metal Cylinder. هذا النظام يُفحص قبل الاستخدام ويُوثّق.</p>

      <h3>اعتبارات ميدانية في السعودية</h3>
      <p>في شبكة SEC، الانتقال الأكثر شيوعاً هو <strong>11 kV PILC → 11 kV XLPE</strong> في المدن القديمة. لا تزال مئات الوصلات الانتقالية تعمل في الرياض وجدة والمدينة. عمرها الافتراضي 25-30 سنة إذا ركّبت صحيح.</p>
    `,
    tools: [
      { name: "Transition Joint Kit متكامل", icon: "package" },
      { name: "Oil Barrier Components", icon: "shield" },
      { name: "Torque Wrench للإحكام", icon: "settings" }
    ],
    hseWarnings: [
      "زيت PILC قد يكون ملوثاً بـ PCB في الكيابل القديمة جداً — استشر HSE",
      "تعامل مع PILC بقفازات مقاومة للزيوت"
    ],
    commonMistakes: [
      "إهمال Oil Barrier — يفشل الـ XLPE Insulation خلال أشهر",
      "عدم التحقق من نقاء زيت PILC قبل الوصل"
    ],
    references: ["IEC 60840 §11.5", "CIGRE TB-823", "SEC TMSS Transition Joints Section"]
  },

  "c5-s1-2": {
    title: "Insulated Joint - IJ (الوصلة المعزولة)",
    category: "الوصلات والنهايات",
    categoryEn: "Joints & Terminations",
    duration: "12 دقيقة",
    difficulty: "متقدم",
    objectives: [
      "فهم الدور الكهربائي لـ IJ في نظام Cross Bonding",
      "بنية IJ والفرق عن Straight Joint",
      "معايير اختبار IJ",
      "الأخطاء الشائعة في تركيب IJ"
    ],
    content: `
      <h3>ما المميّز في IJ؟</h3>
      <p>IJ = Insulated Joint. شبيهة بـ Straight Joint من الخارج، لكن تختلف جوهرياً: <strong>تعزل الشاشة المعدنية كهربائياً عند نقطة الوصلة</strong>. هذا ضروري في نظام Cross Bonding لتقسيم خط الكيبل إلى Minor Sections.</p>

      <h3>البنية الداخلية</h3>
      <ul>
        <li>الموصل: متصل كالعادة (Compression Connector)</li>
        <li>العزل الرئيسي: Pre-moulded EPDM Body كالعادة</li>
        <li><strong>الشاشة المعدنية: مقطوعة ومعزولة بـ Insulating Sleeve</strong></li>
        <li>HDPE Outer Sheath: مستمر بدون قطع</li>
      </ul>

      <h3>مستوى الجهد على الشاشة في IJ</h3>
      <p>الشاشة عند نقطة IJ يمكن أن تكون تحت جهد حتى 15-20 kV في حالة الأعطال. لذا يُركّب SVL (Sheath Voltage Limiter) موازٍ لـ IJ لحماية عزل الشاشة.</p>

      <h3>اختبارات IJ الخاصة</h3>
      <ul>
        <li><strong>Insulation Resistance عبر نقطة العزل:</strong> لا تقل عن 500 MΩ</li>
        <li><strong>AC Withstand:</strong> 10 kV AC لمدة 1 دقيقة عبر نقطة عزل الشاشة</li>
        <li>تُجرى هذه الاختبارات قبل توصيل SVL</li>
      </ul>
    `,
    tools: [
      { name: "IJ Kit من المصنّع", icon: "package" },
      { name: "SVL (يُركّب معها دائماً)", icon: "shield" },
      { name: "Megger 5 kV", icon: "activity" }
    ],
    hseWarnings: ["الشاشة في IJ تحت جهد — لا تلمس أطراف الشاشة المعزولة"],
    commonMistakes: [
      "توصيل الشاشة الخاطئة بـ Link Box — يُلغي فائدة الـ Cross Bonding كلياً",
      "نسيان SVL — يؤدي لفشل عزل الشاشة أثناء العطل"
    ],
    references: ["IEC 60840 §11.6", "CIGRE TB-347 Cross Bonding"]
  },

  // ─── HV Tests ────────────────────────────────────────────────────,

  "c5-s4-1": {
    title: "المرحلة 2: قياس وقطع الكيبل",
    category: "الوصلات والنهايات",
    categoryEn: "Joints & Terminations",
    duration: "10 دقائق",
    difficulty: "متقدم",
    objectives: [
      "حساب أطوال الكيبل بدقة قبل القطع",
      "استخدام أدوات القطع المناسبة لكل مقاس",
      "ضمان عمودية القطع وخلوه من التشوه",
      "توثيق الأطوال والأرقام"
    ],
    content: `
      <h3>لماذا القياس حرج في هذه المرحلة؟</h3>
      <p>أي خطأ في القياس = قطعة كيبل ضائعة لا يمكن استرجاعها. الكيبل بـ 380 kV قد يكلّف مئات الآلاف من الريالات للمتر. <strong>القاعدة: قِس مرتين، واقطع مرة واحدة.</strong></p>

      <h3>الأطوال القياسية لـ Straight Joint (132 kV - XLPE)</h3>
      <ul>
        <li><strong>الطول الكلي من كل طرف:</strong> 800 - 1200 mm حسب دليل المصنّع</li>
        <li><strong>منطقة التداخل (Overlap):</strong> 50 mm على الأقل</li>
        <li><strong>منطقة الـ Conductor:</strong> تعتمد على طول Connector ÷ 2</li>
        <li><strong>هامش الأمان:</strong> أضف 50 mm إضافية قبل القطع الأول</li>
      </ul>

      <h3>أدوات القطع المناسبة</h3>
      <ul>
        <li><strong>Hydraulic Cable Cutter:</strong> للمقاسات 300 mm² فأعلى — تعطي قطعاً عمودياً تماماً</li>
        <li><strong>Mechanical Ratchet Cutter:</strong> للمقاسات حتى 300 mm²</li>
        <li><strong>ممنوع:</strong> الزاوية الكاشفة أو المنشار — يتسبب في تشوه الموصل</li>
      </ul>

      <h3>الخطوات التفصيلية</h3>
      <ul>
        <li>ضع علامة بقلم محايد (لا يترك آثار كيميائية) على نقطة القطع</li>
        <li>استخدم Ratchet Cutter بشكل عمودي تماماً على محور الكيبل</li>
        <li>تحقق من استواء وجه القطع بالزاوية أو المسطرة</li>
        <li>إذا لم يكن عمودياً تماماً، أعِد القطع بإزالة 10 mm فقط</li>
        <li>سجّل الأطوال في نموذج التوثيق</li>
      </ul>

      <h3>التوثيق الإلزامي</h3>
      <p>في كل وصلة، سجّل: رقم الدرم، طول الكيبل المتبقي، تاريخ القطع، اسم الجوينتر، والأطوال المقاسة. هذا جزء من ITP ويُراجع من المفتش.</p>
    `,
    tools: [
      { name: "Hydraulic Cable Cutter", icon: "scissors" },
      { name: "مسطرة فولاذية 1 متر", icon: "ruler" },
      { name: "قلم ترقيم محايد", icon: "pen-line" },
      { name: "ورقة توثيق الوصلة", icon: "file-text" },
      { name: "شريط قياس", icon: "ruler" }
    ],
    hseWarnings: [
      "تأكد من Portable Earthing قبل أي لمس للكيبل",
      "ارتدِ قفازات مقاومة للقطع عند استخدام أدوات القطع",
      "لا تستخدم مواد كيميائية بالقرب من موقع القطع"
    ],
    commonMistakes: [
      "القطع المائل — يعطي سطحاً غير منتظم للـ Connector",
      "عدم ترك هامش أمان — يضطرك للقطع مرة ثانية بخسارة",
      "عدم التحقق من تواصل الشاشة المعدنية بعد القطع",
      "القطع بالمنشار — يشوه نهاية الموصل"
    ],
    references: ["IEC 60840 §12.3", "SEC TMSS-02-03", "Tyco/Raychem Joint Installation Guide"]
  },

  "c5-s4-3": {
    title: "المرحلة 4: معالجة السطح",
    category: "الوصلات والنهايات",
    categoryEn: "Joints & Terminations",
    duration: "20 دقيقة",
    difficulty: "متقدم",
    objectives: [
      "تنظيف سطح XLPE من جميع الملوثات",
      "تحضير السطح بالطرق المعتمدة",
      "قياس خشونة السطح والتحقق منها",
      "فهم لماذا تُفشل الملوثات الوصلة"
    ],
    content: `
      <h3>لماذا معالجة السطح حيوية؟</h3>
      <p>سطح XLPE يجب أن يكون <strong>أملس كالمرآة</strong>. أي تلوث — حتى الدهون الطبيعية من بشرة يدك — يخلق نقاط تعزيز كهربائي (Electric Stress Enhancement) تؤدي إلى Partial Discharge، وبمرور الوقت إلى Electrical Treeing وفشل العزل.</p>

      <h3>مواد التنظيف المعتمدة</h3>
      <ul>
        <li><strong>Isopropyl Alcohol (IPA) 99.9%:</strong> الأساسي — يُزيل الدهون ويتبخر نظيفاً</li>
        <li><strong>Acetone النقي:</strong> للإزالة الأولية للبقايا الثقيلة فقط</li>
        <li><strong>قماش نظيف خاص (Lint-free Cloth):</strong> لا تستخدم قماش عادي يترك ألياف</li>
        <li><strong>ممنوع:</strong> البنزين، التنر، الماء، أي مادة غير معتمدة</li>
      </ul>

      <h3>تقنية التنظيف الصحيحة</h3>
      <ul>
        <li>دائماً امسح باتجاه واحد من الداخل للخارج (من الموصل نحو الغلاف)</li>
        <li>استخدم قطعة قماش نظيفة لكل مسحة — لا تعد استخدامها</li>
        <li>استمر حتى تصبح القطعة بيضاء تماماً بدون أي لون</li>
        <li>لا تلمس السطح بيدك بعد التنظيف — لا حتى بالقفازات الخارجية</li>
      </ul>

      <h3>الفحص البصري</h3>
      <p>بعد التنظيف، افحص السطح تحت إضاءة قوية ومكبّر. تحقق من:</p>
      <ul>
        <li>غياب بقايا Semi-Con (أي نقاط أو خطوط سوداء)</li>
        <li>غياب الخدوش العميقة (أعمق من 0.2 mm)</li>
        <li>لمعان منتظم على كامل السطح</li>
      </ul>

      <h3>متى نعيد Stripping؟</h3>
      <p>إذا وجدت خدشاً عميقاً أو بقية Semi-Con لا تزول بالتنظيف، يجب إعادة الـ Stripping من البداية. هذا أفضل بكثير من قبول وصلة ستفشل بعد التشغيل.</p>
    `,
    tools: [
      { name: "Isopropyl Alcohol 99.9%", icon: "droplet" },
      { name: "Lint-free Cloths", icon: "layers" },
      { name: "مصباح يدوي قوي", icon: "lightbulb" },
      { name: "عدسة مكبّرة", icon: "search" },
      { name: "قفازات نظيفة (Latex-free)", icon: "hand" }
    ],
    hseWarnings: [
      "Isopropyl Alcohol قابل للاشتعال — لا تستخدمه بالقرب من اللهب",
      "تجنّب استنشاق الأبخرة — تهوية كافية داخل الخيمة",
      "قفازات مقاومة للمواد الكيميائية عند التعامل مع المذيبات"
    ],
    commonMistakes: [
      "المسح بحركة دائرية — يعيد توزيع الملوثات بدلاً من إزالتها",
      "إعادة استخدام نفس القطعة — تُعيد التلوث",
      "الاستعجال والاكتفاء بنظافة ظاهرية",
      "لمس السطح بالأصابع بعد التنظيف"
    ],
    references: ["IEC 60840 §12.5.3", "SEC TMSS-02-03", "Nexans Joint Installation Manual"]
  },

  "c5-s4-4": {
    title: "المرحلة 5: تركيب Conductor Connector",
    category: "الوصلات والنهايات",
    categoryEn: "Joints & Terminations",
    duration: "25 دقيقة",
    difficulty: "متقدم",
    objectives: [
      "اختيار Connector المناسب للمقاس والنوع",
      "تنفيذ Crimping بالضغط الصحيح",
      "فحص جودة الـ Crimping",
      "معالجة حواف Connector بعد التركيب"
    ],
    content: `
      <h3>ما هو Conductor Connector؟</h3>
      <p>Compression Connector هو الغلاف المعدني الذي يربط موصلَي الكيبلين معاً. جودته تحدد مقاومة التوصيل الكهربائي والتماسك الميكانيكي للوصلة كلها.</p>

      <h3>اختيار الـ Connector الصحيح</h3>
      <ul>
        <li><strong>المقطع:</strong> يجب أن يتطابق مع مقطع الموصل تماماً (مثلاً 1600 mm² Al)</li>
        <li><strong>النوع:</strong> Circular Compression للمقاسات الكبيرة، Hex Compression للمتوسطة</li>
        <li><strong>المادة:</strong> مطابقة لمادة الموصل — Aluminum مع Aluminum، Copper مع Copper</li>
        <li><strong>المعتمد:</strong> من موردين في قائمة AVL المعتمدة من SEC</li>
      </ul>

      <h3>خطوات الـ Crimping</h3>
      <ul>
        <li>نظّف الموصل بـ IPA وأزل أكسيد الألومنيوم (إن وجد)</li>
        <li>أدخل الموصل في الـ Connector حتى النهاية بالكامل</li>
        <li>ضع Compression Tool على النقطة الأولى حسب دليل المصنّع</li>
        <li>اضغط حتى يُغلق رأس الأداة تماماً (Full Stroke) — لا تتوقف في المنتصف</li>
        <li>انتقل للنقطة التالية بالترتيب المحدد</li>
        <li>عدد الـ Crimps حسب المقطع: 300 mm² = 4 Crimps، 1600 mm² = 8-10 Crimps</li>
      </ul>

      <h3>فحص ما بعد الـ Crimping</h3>
      <p>استخدم الـ Go/No-Go Gauge للتحقق من عمق الضغط. احسب مقاومة DC بالـ Micro-ohmmeter — يجب أن تكون أقل من المواصفة (عادة أقل من 1.5× مقاومة موصل مكافئ).</p>

      <h3>معالجة الحواف (Critical!)</h3>
      <p>بعد الـ Crimping، الـ Connector يصبح له حواف حادة. يجب:</p>
      <ul>
        <li>برد (File) كل الحواف بمبرد ناعم حتى لا يبقى أي زاوية حادة</li>
        <li>التحقق باليد المتقفزة (بالقفاز) أنه لا يوجد نتوء</li>
        <li>التنظيف بـ IPA مجدداً بعد البرد</li>
        <li><strong>السبب:</strong> الحواف الحادة = تعزيز للمجال الكهربائي = Partial Discharge</li>
      </ul>
    `,
    tools: [
      { name: "Hydraulic Crimping Tool", icon: "wrench" },
      { name: "مجموعة Dies بالمقاسات", icon: "settings" },
      { name: "Go/No-Go Gauge", icon: "check-circle" },
      { name: "Micro-ohmmeter", icon: "activity" },
      { name: "مبرد دقيق (File)", icon: "minus" },
      { name: "فرشاة تنظيف معادن", icon: "brush" }
    ],
    hseWarnings: [
      "Hydraulic Tools تحت ضغط عالٍ — فحص الخراطيم قبل الاستخدام",
      "ارتدِ نظارات واقية عند الضغط",
      "لا تضع يدك قرب رأس الـ Crimping Tool"
    ],
    commonMistakes: [
      "Crimping غير كامل (Half-stroke) — يعطي توصيلاً ضعيفاً",
      "نسيان معالجة الحواف — يسبب PD فوري",
      "استخدام Die خاطئ بمقاس أكبر أو أصغر",
      "عدم فحص المقاومة بعد التركيب"
    ],
    references: ["IEC 61238-1", "SEC TMSS-02-03 §8", "Prysmian Jointing Manual"]
  },

  "c5-s4-5": {
    title: "المرحلة 6: تسخين وانكماش الطبقات",
    category: "الوصلات والنهايات",
    categoryEn: "Joints & Terminations",
    duration: "45 دقيقة",
    difficulty: "متقدم",
    objectives: [
      "التمييز بين Pre-moulded وHeat Shrink وCold Shrink",
      "تطبيق Pre-moulded EPDM بالضغط الصحيح",
      "استخدام مسدس الحرارة بالطريقة الصحيحة",
      "التحقق من كمال التطبيق"
    ],
    content: `
      <h3>تقنيات الإنهاء الثلاث</h3>
      <p><strong>1. Pre-moulded (EPDM/Silicone)</strong> — تُستخدم في جهد 132 kV فأعلى. تُصنع بدقة مطابقة لأبعاد الكيبل وتُدفع على سطح XLPE بالضغط اليدوي مع Lubricant معتمد.</p>
      <p><strong>2. Cold Shrink</strong> — تتمدد بدعم بلاستيكي داخلي يُسحب تدريجياً. ممتازة للمتوسط والعالي، سهلة التطبيق.</p>
      <p><strong>3. Heat Shrink</strong> — تتقلص بالحرارة. تستخدم للجهد المتوسط أكثر من العالي.</p>

      <h3>تطبيق Pre-moulded (الأكثر استخداماً في EHV)</h3>
      <ul>
        <li>ضع Lubricant معتمد (من المصنّع فقط) على سطح XLPE بطبقة رقيقة ومنتظمة</li>
        <li>أمسك الـ Body من الطرفين وادفعه بحركة دورانية (twist) حتى يصل للمركز</li>
        <li>تأكد من توسط الـ Connector تماماً داخل الـ Body</li>
        <li>لا تستخدم أي مادة تشحيم غير معتمدة — تؤثر على خصائص EPDM</li>
        <li>وقت التطبيق المثالي: 20-30 دقيقة — لا تتسرع</li>
      </ul>

      <h3>تطبيق Heat Shrink</h3>
      <ul>
        <li>تأكد من الحرارة الموحّدة — مسافة المسدس 15-20 cm من السطح</li>
        <li>حرّك المسدس بانتظام في حركة حلزونية من المركز للأطراف</li>
        <li>درجة الحرارة المثلى: 110-130°C (تحقق من الـ Melt Indicator)</li>
        <li>لا تسخّن بقعة واحدة — تسبب احتراق أو تشوه</li>
      </ul>

      <h3>الفحص البصري بعد التطبيق</h3>
      <p>تحقق من: عدم وجود فقاعات هواء، انتظام السطح، غياب أي تشوه أو احتراق، محاذاة مثالية للمحور.</p>
    `,
    tools: [
      { name: "Pre-moulded Body (من المصنّع)", icon: "package" },
      { name: "Lubricant معتمد", icon: "droplet" },
      { name: "Heat Gun احترافي (2000W)", icon: "flame" },
      { name: "Thermometer مسدسي", icon: "thermometer" },
      { name: "قفازات حرارية", icon: "hand" }
    ],
    hseWarnings: [
      "Heat Gun تصل لـ 300°C+ — احذر الحروق",
      "الأبخرة من الـ Lubricant قد تكون مهيّجة للجهاز التنفسي",
      "لا تستخدم Heat Gun في بيئة بها أبخرة قابلة للاشتعال"
    ],
    commonMistakes: [
      "دفع Pre-moulded بدون Lubricant — يمزق EPDM",
      "عدم توسيط الـ Connector — عدم تناسق المجال الكهربائي",
      "تسخين موضعي — يسبب فقاعات هواء خطيرة",
      "استخدام Lubricant من مصدر خاطئ"
    ],
    references: ["IEC 60840 §12.6", "Raychem RSTB Application Guide", "3M HV Joint Manual"]
  },

  "c5-s4-6": {
    title: "المرحلة 7: الاختبارات النهائية",
    category: "الوصلات والنهايات",
    categoryEn: "Joints & Terminations",
    duration: "30 دقيقة",
    difficulty: "متقدم",
    objectives: [
      "إجراء Sheath Test على الوصلة المنجزة",
      "فحص توصيل الشاشة المعدنية",
      "توثيق نتائج الاختبارات",
      "معرفة معايير القبول"
    ],
    content: `
      <h3>لا تدفن الوصلة قبل الاختبار!</h3>
      <p>هذه القاعدة الذهبية. اختبار الوصلة قبل الدفن يوفّر عليك حفر المنطقة كاملاً إذا اكتشفت عيباً. <strong>كل وصلة جديدة = اختبار إلزامي.</strong></p>

      <h3>Sheath Integrity Test</h3>
      <ul>
        <li><strong>الجهد:</strong> 10 kV DC</li>
        <li><strong>المدة:</strong> 1 دقيقة</li>
        <li><strong>القبول:</strong> لا يوجد تيار تسرب أو ارتفاع (pass/fail)</li>
        <li><strong>الهدف:</strong> التأكد من سلامة HDPE Outer Sheath</li>
      </ul>

      <h3>DC Continuity Test للشاشة</h3>
      <ul>
        <li>تحقق من استمرارية الشاشة المعدنية من طرف للطرف الآخر</li>
        <li>المقاومة المقاسة يجب أن تتطابق مع المحسوبة نظرياً (بحدود ±10%)</li>
        <li>تحقق من توصيل ECC أيضاً</li>
      </ul>

      <h3>Pre-HV Megger Test</h3>
      <ul>
        <li>استخدم Megger بجهد 5 kV DC على الموصل لمدة 1 دقيقة</li>
        <li>مقاومة العزل: لا تقل عن 1000 MΩ</li>
        <li>إذا كانت القراءة منخفضة، يوجد مشكلة في العزل</li>
      </ul>

      <h3>توثيق نتائج الوصلة (Joint Record Sheet)</h3>
      <p>يجب توثيق: رقم الوصلة، إحداثيات GPS، اسم الجوينتر، تاريخ ووقت التركيب، قراءات الرطوبة/الحرارة خلال العمل، نتائج كل اختبار، توقيع مهندس الموقع، توقيع المفتش.</p>

      <h3>بعد موافقة المفتش فقط</h3>
      <p>الوصلة تُدفن فقط بعد توقيع مهندس QA/QC والمفتش على Joint Record Sheet. هذه وثيقة قانونية تبقى مع مستندات المشروع للأبد.</p>
    `,
    tools: [
      { name: "DC High Voltage Tester (10 kV)", icon: "zap" },
      { name: "Megger (5 kV)", icon: "activity" },
      { name: "Micro-ohmmeter", icon: "cpu" },
      { name: "Joint Record Sheet", icon: "file-text" },
      { name: "GPS Device", icon: "map-pin" }
    ],
    hseWarnings: [
      "10 kV DC خطر قاتل — تأكد من Isolation الكامل لجميع الأطراف",
      "ضع لافتة 'اختبار جارٍ' على طرفَي الكيبل",
      "لا أحد يلمس الكيبل أثناء الاختبار"
    ],
    commonMistakes: [
      "الدفن قبل الاختبار — غلطة لا تُغفر",
      "عدم التوثيق — مشكلة قانونية وتقنية مستقبلاً",
      "اختبار Sheath بدون عزل أطراف الكيبل الأخرى"
    ],
    references: ["IEC 60229", "IEC 60840 §12.7", "SEC TMSS-02-03 §10"]
  },

  // ─── Joint Types ──────────────────────────────────────────────────,

  "c6-s1-0": {
    title: "Solid Bonding — التأريض الصلب",
    category: "التأريض والحماية",
    categoryEn: "Earthing & Protection",
    duration: "10 دقيقة",
    difficulty: "متوسط",
    objectives: [
      "تعريف Solid Bonding وأين يُستخدم",
      "مزايا وعيوب Solid Bonding",
      "متى يُختار على بقية الأنظمة",
      "تأثيره على الـ Ampacity"
    ],
    content: `
      <h3>ما هو Solid Bonding؟</h3>
      <p>في Solid Bonding، الشاشة المعدنية للكيبل مُؤرّضة <strong>من الطرفين</strong> (وأحياناً في نقاط وسطية). لا يوجد SVL أو عزل — الشاشة متصلة مباشرة بالأرض في كل نقطة توقف.</p>

      <h3>مزايا Solid Bonding</h3>
      <ul>
        <li>أبسط نظام — لا Link Boxes، لا SVL</li>
        <li>تأريض فعّال لتيارات القصر</li>
        <li>مناسب للكيابل القصيرة (&lt; 500 متر) حيث الخسائر مقبولة</li>
        <li>لا خطر من Induced Voltage على الشاشة</li>
      </ul>

      <h3>العيوب الرئيسية</h3>
      <ul>
        <li><strong>Circulating Currents:</strong> في الكيابل الطويلة، تيارات دائرية تسري في الشاشة — تُسبب خسارة طاقة وتسخيناً</li>
        <li>خسارة الـ Ampacity قد تصل 20-30% في بعض الحالات</li>
        <li>التوازن بين الأطوار قد يتأثر</li>
      </ul>

      <h3>متى يُستخدم؟</h3>
      <ul>
        <li>كيابل قصيرة في محطات التحويل</li>
        <li>كيابل 11 kV في الشبكة التوزيعية</li>
        <li>حالات يصعب فيها تركيب Link Boxes</li>
        <li>في SEC: كثيراً في شبكة 33 kV و11 kV</li>
      </ul>
    `,
    tools: [],
    hseWarnings: ["تحقق من استمرارية Bonding بعد كل صيانة أو تمديد"],
    commonMistakes: [
      "استخدام Solid Bonding في كيابل طويلة — يُسبب خسائر كبيرة",
      "عدم التوثيق الدقيق لنقاط التأريض"
    ],
    references: ["IEC 60840 §12.8", "CIGRE TB-347", "SEC TMSS Bonding Section"]
  },

  "c6-s1-1": {
    title: "Cross Bonding — نظام التقاطع",
    category: "التأريض والحماية",
    categoryEn: "Earthing & Protection",
    duration: "18 دقيقة",
    difficulty: "متقدم",
    objectives: [
      "مبدأ عمل Cross Bonding وسبب فعاليته",
      "تقسيم الكيبل إلى Major/Minor Sections",
      "دور IJ وLink Box وSVL",
      "حسابات Induced Voltage"
    ],
    content: `
      <h3>لماذا Cross Bonding؟</h3>
      <p>في الكيابل الطويلة أحادية الطور (132 kV فأعلى)، التيار المتناوب في الموصل يُحدث جهداً مستحثاً (Induced Voltage) في الشاشة المعدنية. في Solid Bonding، هذا الجهد يسبب تيارات دائرية وخسائر. Cross Bonding يُلغي هذه التيارات <strong>بجعل مجموع الجهود المستحثة = صفر</strong>.</p>

      <h3>مبدأ Cross Bonding</h3>
      <p>الكيبل يُقسم إلى <strong>Major Sections</strong>، كل منها 3 Minor Sections متساوية. عند نقاط الفصل، الشاشة المعدنية للأطوار الثلاثة تُتبادل (Phase A → B → C → A). الجهود المستحثة في كل Minor Section تلغي بعضها بعد دورة كاملة.</p>

      <h3>المكونات</h3>
      <ul>
        <li><strong>IJ (Insulated Joint):</strong> عند نقاط الفصل — تعزل الشاشة كهربائياً</li>
        <li><strong>Link Box:</strong> صندوق يحتوي على نقاط التقاطع وSVL</li>
        <li><strong>SVL:</strong> يحمي عزل الشاشة من الجهد الزائد أثناء الأعطال</li>
        <li><strong>ECC:</strong> موصل أرضي يُجري تيار القصر عبر نقاط IJ</li>
      </ul>

      <h3>متطلب الطول لـ Cross Bonding</h3>
      <p>Cross Bonding يبدأ يؤتي ثماره في الكيابل التي يزيد طولها عن <strong>500 متر</strong> (إرشاد عام). في كيابل 132 kV، كل مقطع يعمل كمرجع إذا كان طول Minor Section 300-500 متر.</p>

      <h3>حساب Induced Voltage</h3>
      <p>الجهد المستحث النظري (إذا لم يكن Cross Bonding):</p>
      <pre style="background:var(--border);padding:10px;border-radius:8px;font-family:JetBrains Mono;font-size:11px">Vs = ω × M × I × L
ω = 2π × 50 = 314 rad/s
M = Mutual Inductance ≈ 0.2 mH/km (تقريباً)
I = تيار الموصل
L = طول Section بالكيلومتر

يجب أن يكون Vs < 65 V (معيار السلامة)</pre>
    `,
    tools: [
      { name: "Link Box + SVL", icon: "box" },
      { name: "Induced Voltage Meter", icon: "activity" },
      { name: "Continuity Tester", icon: "check-circle" }
    ],
    hseWarnings: [
      "الشاشة في كيابل ذات Cross Bonding تحمل جهداً — لا تلمسها بدون فحص",
      "SVL تحمي من ارتفاع جهد الشاشة لـ 15-20 kV أثناء الأعطال"
    ],
    commonMistakes: [
      "تبادل خاطئ لأطراف الشاشة في Link Box — يُلغي فائدة Cross Bonding كلياً",
      "نسيان SVL — خطر على عزل الشاشة أثناء الأعطال"
    ],
    references: ["IEC 60840 §12.8.4", "CIGRE TB-347", "SEC TMSS-09 Bonding"]
  },

  "c8-s4-0": {
    title: "AC Resonant Test - 380 kV",
    category: "الاختبارات الفنية",
    categoryEn: "Technical Tests",
    duration: "20 دقيقة",
    difficulty: "متقدم",
    objectives: [
      "فهم مبدأ عمل AC Resonant Test",
      "الجهد والمدة القياسية للـ 380 kV",
      "معدات الاختبار ومكوناتها",
      "تفسير نتائج الاختبار"
    ],
    content: `
      <h3>مبدأ AC Resonant Test</h3>
      <p>كيبل XLPE هو بطبيعته Capacitor ضخم. نظام AC Resonant يستغل هذه الخاصية بضخ طاقة تردد متغير حتى يحدث الرنين (Resonance)، مما يُضخّم الجهد للمستوى المطلوب <strong>باستهلاك طاقة أقل بكثير</strong> من محوّل تقليدي.</p>

      <h3>المعيار القياسي — 380 kV XLPE</h3>
      <ul>
        <li><strong>مستوى الاختبار:</strong> 360 kV (0.95 U₀ × 1.7)</li>
        <li><strong>المدة:</strong> 60 دقيقة متواصلة</li>
        <li><strong>معيار القبول:</strong> لا يحدث Breakdown + PD &lt; 5 pC طوال الاختبار</li>
        <li><strong>المرجع:</strong> IEC 62067 + SEC TMSS</li>
      </ul>

      <h3>مكونات نظام AC Resonant</h3>
      <ul>
        <li><strong>Variable Frequency Source:</strong> يتحكم في التردد (20-300 Hz)</li>
        <li><strong>Reactor (HV Coil):</strong> ملف عالي الجهد بـ Q-Factor عالٍ</li>
        <li><strong>Coupling Capacitor:</strong> لقياس PD أثناء الاختبار</li>
        <li><strong>HV Measuring Divider:</strong> لقياس الجهد بدقة</li>
        <li><strong>PD Detector:</strong> IEC 60270 compliant</li>
      </ul>

      <h3>إجراءات الاختبار خطوة بخطوة</h3>
      <ul>
        <li>تركيب المعدات وتوصيل الكيبل (يستغرق 4-8 ساعات)</li>
        <li>Pre-conditioning: رفع الجهد بالتدريج حتى U₀ ثم تخفيضه</li>
        <li>رفع الجهد بمعدل لا يتجاوز 1 kV/ثانية حتى مستوى الاختبار</li>
        <li>الإبقاء على الجهد لمدة 60 دقيقة مع مراقبة PD المستمرة</li>
        <li>تخفيض الجهد تدريجياً وتسجيل النتائج</li>
      </ul>

      <h3>ماذا يعني Failure؟</h3>
      <p>إذا انهار الكيبل (Breakdown) أو تجاوز PD الحدود، يعني وجود عيب في العزل أو الوصلات أو النهايات. يجب تحديد موقع العيب بـ TDR/PD Location ثم إصلاحه.</p>
    `,
    tools: [
      { name: "AC Resonant Test System (كامل)", icon: "zap" },
      { name: "PD Detector (IEC 60270)", icon: "activity" },
      { name: "HV Divider", icon: "cpu" },
      { name: "Data Logger", icon: "hard-drive" }
    ],
    hseWarnings: [
      "منطقة خطر نصف قطرها 10 متر على الأقل — ممنوع الاقتراب",
      "تأريض كامل للمعدات والكيبل قبل وبعد الاختبار",
      "PTW خاص من التشغيل مطلوب",
      "فريق الاختبار لا يقل عن شخصين"
    ],
    commonMistakes: [
      "رفع الجهد بسرعة — يسبب Breakdown مصطنع",
      "عدم Pre-conditioning الكيبل",
      "تجاهل ارتفاع PD المؤقت في بداية الاختبار"
    ],
    references: ["IEC 62067 §12.4", "CIGRE TB-401", "SEC Test Procedure HV-380"]
  },

  "c8-s4-1": {
    title: "AC Resonant Test - 132 kV",
    category: "الاختبارات الفنية",
    categoryEn: "Technical Tests",
    duration: "15 دقيقة",
    difficulty: "متقدم",
    objectives: [
      "الجهد والمدة للـ 132 kV",
      "الاختلافات عن 380 kV",
      "تحديد نقاط الاختبار",
      "متطلبات توصيل نظام الاختبار"
    ],
    content: `
      <h3>معيار اختبار 132 kV XLPE</h3>
      <p>طبقاً لـ IEC 60840 و SEC TMSS:</p>
      <ul>
        <li><strong>جهد الاختبار:</strong> 130 kV (قيمة فعّالة)</li>
        <li><strong>المدة:</strong> 60 دقيقة</li>
        <li><strong>حد PD:</strong> &lt; 10 pC طوال الاختبار</li>
        <li><strong>التردد:</strong> 20-300 Hz (Resonant Frequency)</li>
      </ul>

      <h3>تكوين نظام الاختبار لـ 132 kV</h3>
      <p>يختلف تصميم الـ Resonant System حسب طول الكيبل وعدد الوصلات. لكل 1 كيلومتر من 132 kV XLPE، سعة الكيبل تقريباً 200-250 nF. على الفني حساب Q-Factor المطلوب لتحديد عدد Reactors.</p>

      <h3>الاختلاف عن 380 kV</h3>
      <ul>
        <li>المعدات أصغر وأخف — يمكن نقلها بسيارة بدلاً من شاحنة ثقيلة</li>
        <li>حد PD أعلى (10 vs 5 pC) لكنه لا يزال صارماً</li>
        <li>وقت الإعداد أقل (3-5 ساعات بدلاً من 4-8)</li>
        <li>خطر الجهد أقل لكنه لا يزال قاتلاً</li>
      </ul>

      <h3>التوثيق المطلوب</h3>
      <p>تقرير الاختبار يشمل: تاريخ ووقت الاختبار، هوية الكيبل والوصلات، اسم الجهاز وأرقام التسلسلية، منحنى PD عبر الزمن، التوقيعات. يُرسل للمالك والاستشاري.</p>
    `,
    tools: [
      { name: "Resonant System 200 kV", icon: "zap" },
      { name: "PD Measurement System", icon: "activity" },
      { name: "Test Report Template", icon: "file-text" }
    ],
    hseWarnings: [
      "130 kV تُقتل فورياً — إجراءات السلامة غير قابلة للتساهل",
      "فحص عزل جميع الوصلات (Grounding Points) قبل الاختبار"
    ],
    commonMistakes: [
      "اختبار الكيبل مباشرة بدون Pre-Test Megger",
      "عدم فصل SVL و Link Boxes قبل الاختبار"
    ],
    references: ["IEC 60840 §12.4", "SEC TMSS-12 Testing Protocol"]
  },

  "c8-s4-2": {
    title: "VLF Test (Very Low Frequency)",
    category: "الاختبارات الفنية",
    categoryEn: "Technical Tests",
    duration: "12 دقيقة",
    difficulty: "متوسط",
    objectives: [
      "متى يُستخدم VLF بدلاً من AC Resonant؟",
      "الجهد والتردد القياسيين",
      "محدودية VLF",
      "VLF مع Tan Delta"
    ],
    content: `
      <h3>ما هو VLF؟</h3>
      <p>Very Low Frequency = اختبار بجهد AC بتردد 0.1 Hz (أبطأ 500 مرة من التردد الصناعي). يستهلك طاقة أقل بكثير من AC Resonant، مما يجعله مناسباً للاختبارات الدورية وللكيابل المتوسطة.</p>

      <h3>أين يُستخدم VLF؟</h3>
      <ul>
        <li>كيابل <strong>11 kV و 33 kV</strong> — الأكثر شيوعاً</li>
        <li>الاختبارات الدورية الدورية (Periodic Tests) بدلاً من AC Resonant</li>
        <li>بعد إصلاح كيبل أو استبداله جزئياً</li>
        <li><strong>لا يُستخدم بديلاً عن Resonant Test في 132 kV فأعلى</strong></li>
      </ul>

      <h3>المعيار القياسي</h3>
      <ul>
        <li>التردد: 0.1 Hz (الأكثر استخداماً)</li>
        <li>جهد الاختبار: 2U₀ (مرتين الجهد الاسمي فيز-ارض)</li>
        <li>المدة: 30-60 دقيقة</li>
        <li>المرجع: IEC 60060-3 + IEEE 400.2</li>
      </ul>

      <h3>VLF + Tan Delta</h3>
      <p>الاستخدام الأذكى لـ VLF هو إجراؤه مع قياس Tan Delta في نفس الوقت. هذا يعطيك معلومتين: هل الكيبل يتحمل الجهد (Withstand)؟ وما هو مستوى تدهور عزله (Tan Delta)؟</p>

      <h3>محدودية VLF</h3>
      <ul>
        <li>حساسية PD أقل من AC Resonant بسبب التردد المنخفض</li>
        <li>ليس مقبولاً كـ Commissioning Test في كيابل EHV</li>
        <li>قد يعطي نتائج متشائمة (False Positive) في بعض أنواع التدهور</li>
      </ul>
    `,
    tools: [
      { name: "VLF Test Set (0.1 Hz)", icon: "zap" },
      { name: "Tan Delta Measurement Unit", icon: "bar-chart-2" },
      { name: "Cable Capacitance Meter", icon: "cpu" }
    ],
    hseWarnings: [
      "الجهد 2U₀ قد يصل 19 kV للـ 11 kV — خطر كهربائي حقيقي",
      "تأريض طرف الكيبل الآخر قبل الاختبار"
    ],
    commonMistakes: [
      "استخدام VLF للـ EHV — غير مقبول كـ Commissioning Test",
      "الاختبار بدون قياس Tan Delta — يضيّع نصف قيمة VLF"
    ],
    references: ["IEC 60060-3", "IEEE 400.2", "CIGRE WG D1.51"]
  },

  "c8-s4-3": {
    title: "DC Test على XLPE — لماذا ممنوع؟",
    category: "الاختبارات الفنية",
    categoryEn: "Technical Tests",
    duration: "10 دقيقة",
    difficulty: "متوسط",
    objectives: [
      "فهم ظاهرة Space Charge في XLPE",
      "لماذا DC Test أفسد كيابل جيدة",
      "الاختبارات البديلة المقبولة",
      "الحالات الاستثنائية المقبولة لـ DC"
    ],
    content: `
      <h3>القاعدة الذهبية</h3>
      <p style="color:var(--danger);font-weight:700;font-size:16px">⛔ DC High Voltage Test ممنوع على كيابل XLPE</p>
      <p>هذا ليس تشدداً — هذا علم فيزياء. استخدام DC على XLPE يمكن أن يُفسد كيبلاً مثبّتاً ومجتازاً لجميع اختبارات AC.</p>

      <h3>ظاهرة Space Charge</h3>
      <p>عند تطبيق DC على XLPE، تتراكم الشحنات (Space Charge) في داخل جزيئات بوليمر XLPE. هذه الشحنات تُشوّه توزيع المجال الكهربائي. عندما تُوصّل الكيبل على شبكة AC لاحقاً، تتفاعل الشحنات المتراكمة مع جهد AC لتُعظّم المجال الكهربائي محلياً — مما يُسرّع فشل العزل.</p>

      <h3>الدليل التاريخي</h3>
      <p>في التسعينيات، طُبّق DC Test على كيابل XLPE كما كان شائعاً مع PILC. النتيجة: آلاف الكيلومترات من الكيابل التي فشلت مبكراً. هذا أدى لحظر DC Test على XLPE في IEC 60840 منذ 1999.</p>

      <h3>البدائل المعتمدة</h3>
      <ul>
        <li><strong>AC Resonant Test:</strong> الأفضل للـ Commissioning (132 kV فأعلى)</li>
        <li><strong>VLF Test:</strong> للاختبارات الدورية والمتوسط</li>
        <li><strong>Tan Delta:</strong> تقييم حالة العزل</li>
      </ul>

      <h3>متى يُقبل DC على الكيابل؟</h3>
      <ul>
        <li><strong>Sheath Test (10 kV DC):</strong> مقبول — يختبر HDPE Sheath فقط، لا العزل الرئيسي</li>
        <li><strong>كيابل PILC:</strong> مقبول — العزل الورقي لا يتأثر بـ Space Charge</li>
        <li>كيابل XLPE: ممنوع على العزل الرئيسي تحت أي ظرف</li>
      </ul>
    `,
    tools: [],
    hseWarnings: ["إذا طالبك أحد بـ DC Test على XLPE — ارفض وأرسل المرجع IEC 60840"],
    commonMistakes: [
      "قبول DC Test بدلاً من Resonant لأنه أرخص — غلطة قد تُفسد الكيبل"
    ],
    references: ["IEC 60840 §12.4.2", "CIGRE TB-401", "IEEE 400.2 §5.3"]
  },

  // ─── Partial Discharge ───────────────────────────────────────────,

  "c8-s5-0": {
    title: "ما هو Partial Discharge؟ — الأساسيات",
    category: "الاختبارات الفنية",
    categoryEn: "Technical Tests",
    duration: "15 دقيقة",
    difficulty: "متوسط",
    objectives: [
      "تعريف PD وآلية حدوثه",
      "أنواع PD الشائعة في كيابل XLPE",
      "وحدة قياس PD (pC)",
      "لماذا PD خطر على العزل؟"
    ],
    content: `
      <h3>ما هو Partial Discharge؟</h3>
      <p>Partial Discharge هو <strong>تفريغ كهربائي جزئي داخل فجوة أو عيب في العزل</strong>، لا يصل إلى مرحلة Breakdown الكامل. يحدث عندما يتجاوز المجال الكهربائي المحلي قدرة الهواء (أو المادة الأخرى) على الصمود في منطقة صغيرة.</p>

      <h3>أسباب PD في كيابل XLPE</h3>
      <ul>
        <li><strong>فجوات هواء (Voids):</strong> في داخل العزل — ناتجة عن تصنيع خاطئ</li>
        <li><strong>بقايا Semi-Con على XLPE:</strong> في الوصلات — خطأ في الـ Stripping</li>
        <li><strong>حواف Connector حادة:</strong> في الوصلات — خطأ في الـ Crimping</li>
        <li><strong>رطوبة أو ملوثات:</strong> في الوصلات والنهايات</li>
        <li><strong>Water Trees:</strong> في الكيابل القديمة</li>
      </ul>

      <h3>وحدة القياس: pC (picocoulomb)</h3>
      <p>PD يُقاس بـ pC (10⁻¹² Coulomb). هذه كميات صغيرة جداً من الشحنة الكهربائية تنتقل أثناء كل نبضة تفريغ. الأجهزة الحديثة تقيس حتى 1 pC.</p>

      <h3>الحدود المعيارية</h3>
      <ul>
        <li><strong>كيابل EHV (380, 230 kV):</strong> &lt; 5 pC</li>
        <li><strong>كيابل HV (132, 110 kV):</strong> &lt; 10 pC</li>
        <li>أي قراءة أعلى = عيب يجب تحديده وإصلاحه</li>
      </ul>

      <h3>لماذا PD خطر؟</h3>
      <p>كل نبضة PD تحرق جزءاً ضئيلاً من العزل. بعد آلاف أو ملايين النبضات (يمكن أن تحدث بالثانية)، يتوسع العيب حتى يصل لـ Breakdown. هذا قد يستغرق أشهراً أو سنوات، لكنه حتمي إن لم يُعالج.</p>
    `,
    tools: [
      { name: "PD Detector (IEC 60270)", icon: "activity" },
      { name: "Coupling Capacitor", icon: "cpu" },
      { name: "Calibration Pulse Generator", icon: "settings" }
    ],
    hseWarnings: ["قياس PD يتم تحت جهد عالٍ — إجراءات السلامة الكاملة إلزامية"],
    commonMistakes: [
      "الخلط بين PD الحقيقي وPD من التداخل الكهرومغناطيسي (Noise)",
      "عدم معايرة الجهاز — نتائج غير صحيحة"
    ],
    references: ["IEC 60270", "IEC 60840 §12.4", "CIGRE TB-654"]
  },

  "c8-s5-1": {
    title: "قياس PD — الطريقة والمعدات",
    category: "الاختبارات الفنية",
    categoryEn: "Technical Tests",
    duration: "18 دقيقة",
    difficulty: "متقدم",
    objectives: [
      "دائرة قياس PD القياسية (IEC 60270)",
      "طرق قياس PD المختلفة",
      "تفسير نتائج PD Pattern",
      "التمييز بين PD والـ Noise"
    ],
    content: `
      <h3>دائرة قياس PD القياسية (IEC 60270)</h3>
      <p>تتكون من: مصدر جهد عالٍ → كيبل تحت الاختبار → Coupling Capacitor (1-10 nF) → Measuring Impedance → PD Detector. الـ Coupling Capacitor يمرر نبضات PD (تردد عالٍ) إلى الجهاز بينما يحجب الجهد العالٍ.</p>

      <h3>أنواع قياس PD</h3>
      <ul>
        <li><strong>Conventional (IEC 60270):</strong> عند نهايات الكيبل — القياس الرسمي المعتمد</li>
        <li><strong>PD Location:</strong> يحدد موقع العيب على الكيبل بالمتر — باستخدام TDR أو عبر Correlation</li>
        <li><strong>Online PD Monitoring:</strong> أثناء التشغيل الطبيعي — يتطلب Sensors دائمة التركيب</li>
        <li><strong>Acoustic PD:</strong> يكشف PD بالصوت الصادر من المنهول</li>
      </ul>

      <h3>PRPD Pattern (Phase Resolved PD)</h3>
      <p>الجهاز الحديث يعرض PD كـ Pattern على محور الزاوية الطورية (0-360°). شكل الـ Pattern يكشف نوع المصدر:</p>
      <ul>
        <li><strong>Internal Voids:</strong> Pattern متماثل في الموجبة والسالبة</li>
        <li><strong>Surface Discharge:</strong> Pattern غير متماثل مع تركيز في زاوية بعينها</li>
        <li><strong>Corona:</strong> Pattern في نصف موجة واحدة فقط</li>
      </ul>

      <h3>التمييز بين PD والـ Noise</h3>
      <p>التداخل الكهرومغناطيسي من معدات قريبة قد يشبه PD. للتمييز: PD الحقيقي مرتبط بالطور (Phase Locked)، بينما الـ Noise عشوائي. استخدم Differential Measurement بجهازين في طرفَي الكيبل لإلغاء الـ Noise.</p>
    `,
    tools: [
      { name: "Digital PD Analyzer", icon: "activity" },
      { name: "Coupling Capacitor", icon: "cpu" },
      { name: "Calibrator (IEC 60270)", icon: "check-circle" },
      { name: "Band-pass Filter", icon: "filter" }
    ],
    hseWarnings: ["الاختبار تحت جهد مرتفع — فريق مؤهل فقط"],
    commonMistakes: [
      "عدم معايرة الجهاز قبل كل اختبار",
      "الخلط بين Corona من الكابلات الهوائية المجاورة وPD داخلي"
    ],
    references: ["IEC 60270", "IEC 60885-3", "CIGRE TB-841"]
  },

  "c8-s5-2": {
    title: "PD Location — تحديد موقع العيب",
    category: "الاختبارات الفنية",
    categoryEn: "Technical Tests",
    duration: "20 دقيقة",
    difficulty: "متقدم",
    objectives: [
      "طرق تحديد موقع PD",
      "حساب موقع العيب من زمن الانتشار",
      "دقة القياس والعوامل المؤثرة",
      "تسلسل الخطوات العملية"
    ],
    content: `
      <h3>لماذا نحتاج PD Location؟</h3>
      <p>معرفة أن هناك PD في الكيبل لا يكفي — نحتاج أن نعرف <strong>أين بالضبط</strong> حتى نحفر في المكان الصحيح. قياس PD يحدد الموقع بدقة ±1 متر في الكيابل الجيدة.</p>

      <h3>مبدأ Time Domain Reflectometry للـ PD</h3>
      <p>نبضة PD تنتشر من موقع العيب في اتجاهين — نحو الطرف A ونحو الطرف B. بقياس فرق الزمن بين وصول النبضة للطرفين، نحسب موقع العيب:</p>
      <pre style="background:var(--border);padding:12px;border-radius:8px;font-family:JetBrains Mono;font-size:12px">موقع العيب = (L + (tA - tB) × v) / 2
L = طول الكيبل
v = سرعة الإشارة (≈ 170 m/µs لـ XLPE)
tA, tB = زمن وصول النبضة</pre>

      <h3>طرق PD Location</h3>
      <ul>
        <li><strong>Two-End Measurement:</strong> أجهزة في الطرفين متزامنة بـ GPS — أكثر دقة</li>
        <li><strong>Time-of-Flight:</strong> من نهاية واحدة مع انعكاس النبضة — للكيابل القصيرة</li>
        <li><strong>Frequency Domain:</strong> بالتحليل الطيفي — للكيابل المعقدة</li>
      </ul>

      <h3>العوامل المؤثرة في الدقة</h3>
      <ul>
        <li>معرفة سرعة الإشارة الدقيقة (تختلف حسب نوع العزل)</li>
        <li>وجود وصلات في المسار (تؤخر الإشارة)</li>
        <li>مستوى الـ Noise البيئي</li>
        <li>تزامن الجهازين (بـ GPS Synchronization)</li>
      </ul>

      <h3>بعد تحديد الموقع</h3>
      <p>احفر في الموقع المحدد ±2 متر. افحص الوصلة أو النهاية القريبة أولاً — هي المصدر الأكثر احتمالاً. إذا لم تجد شيئاً واضحاً، أعد الاختبار بعد ترطيب التربة.</p>
    `,
    tools: [
      { name: "Dual-End PD System", icon: "activity" },
      { name: "GPS Synchronizer", icon: "map-pin" },
      { name: "Laptop مع برنامج التحليل", icon: "laptop" },
      { name: "خريطة الكيبل (Cable Route Map)", icon: "map" }
    ],
    hseWarnings: ["العمل تحت جهد — فريق مؤهل وPTW نشط"],
    commonMistakes: [
      "استخدام سرعة إشارة خاطئة — يعطي موقعاً خاطئاً بعشرات الأمتار",
      "عدم مراعاة أطوال الوصلات في حساب الموقع"
    ],
    references: ["IEC 60885-3", "CIGRE TB-654 §6", "IEEE 400-2023"]
  },

  // ─── Cable Types ──────────────────────────────────────────────────,

  // ===== c2: التصميم والتوريد =====
  "c2-s1-0": {
  "title": "GPS و Total Station",
  "category": "التصميم والتوريد",
  "categoryEn": "Design & Procurement",
  "duration": "8 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "فهم استخدام GPS وTotal Station في مسح مسارات الكيابل",
    "معرفة الفرق بين الجهازين ومتى يُستخدم كل منهما",
    "تحديد دقة القياسات المطلوبة لمشاريع SEC",
    "إنتاج Route Survey Report مطابق لمتطلبات الاستشاري"
  ],
  "content": "<h3>أهمية المسح الميداني (Route Survey) في مشاريع UGC</h3><p>قبل أي قلم تصميم، يجب رفع المسار الفعلي بدقة عالية. أخطاء المسح تُسبب تعارضات مع الخدمات القائمة، تغيير مسارات مكلفة، وتأخيرات في الجدول. أدوات المسح الأساسية هي <strong>GPS</strong> و<strong>Total Station</strong>.</p><h3>GPS (Global Positioning System)</h3><p>يعتمد على استقبال إشارات من أقمار صناعية لتحديد الإحداثيات ثلاثية الأبعاد (X, Y, Z). في مشاريع UGC يُستخدم <strong>GPS المتفاضل (DGPS / RTK-GPS)</strong> لتحقيق دقة ≤ 2 سم.</p><ul><li><strong>RTK-GPS (Real-Time Kinematic)</strong>: يُستخدم محطة مرجعية ثابتة (Base Station) وجهاز متنقل (Rover) — يُعطي دقة أفقية 1-2 سم في الوقت الفعلي</li><li><strong>الاستخدام الأمثل</strong>: رفع المسار العام، تحديد مواقع المناهيل، توثيق إحداثيات الكيابل المدفونة بعد التركيب (As-Built)</li><li><strong>القيود</strong>: يفقد دقته تحت الأشجار الكثيفة أو بين المباني الطويلة (Urban Canyon Effect)</li></ul><h3>Total Station</h3><p>جهاز بصري إلكتروني يقيس الزوايا الأفقية والرأسية والمسافات بالليزر في آنٍ واحد. يُعطي دقة مميزة في البيئات الحضرية التي يضعف فيها GPS.</p><ul><li><strong>الدقة</strong>: 1-3 مم في المسافة، 1-5 ثوانٍ قوسية في الزاوية</li><li><strong>الاستخدام الأمثل</strong>: رفع تفصيلي للتقاطعات، مناطق الحفر الدقيقة، تحديد مواقع Manholes بدقة مطلقة</li><li><strong>ربط بشبكة الإسناد</strong>: يجب ربط القياسات بـ Benchmarks معتمدة من هيئة المساحة الجيولوجية السعودية (SGS)</li></ul><h3>منهجية العمل المتكاملة</h3><p>في المشاريع الكبيرة، يُستخدم الجهازان معاً: <strong>GPS-RTK للمسح العام السريع</strong> على طول المسار، ثم <strong>Total Station للتفاصيل الدقيقة</strong> عند التقاطعات والنقاط الحرجة. تُرفع البيانات في <strong>نظام إحداثيات UTM Zone 37N أو 38N</strong> حسب موقع المشروع في السعودية.</p>",
  "tools": [
    {
      "name": "RTK-GPS Rover",
      "icon": "map-pin"
    },
    {
      "name": "Total Station",
      "icon": "ruler"
    },
    {
      "name": "AutoCAD Civil 3D",
      "icon": "cpu"
    }
  ],
  "hseWarnings": [
    "عمل فريق المسح على الطريق يستلزم Traffic Management Plan معتمد + ملابس عاكسة عالية الوضوح (Hi-Vis)",
    "لا تضع معدات المسح أو تقف في منطقة Exclusion Zone لأي خط كهربائي هوائي قائم"
  ],
  "commonMistakes": [
    "إجراء المسح بـ GPS عادي (غير RTK) مما يُعطي دقة ±5 متر — غير مقبولة في مشاريع UGC",
    "عدم ربط المسح بـ Benchmarks معتمدة فيُصبح المسح معزولاً وغير قابل للتحقق",
    "إغفال رفع الخدمات القائمة الظاهرة (أعمدة الكهرباء، غرف الصرف) مع المسار"
  ],
  "references": [
    "SEC Survey Requirements — Route Survey Manual",
    "Saudi Geospatial Authority (SGS) — Geodetic Standards",
    "ISO 17123-5 — Field Procedures for Total Stations"
  ]
},

  "c2-s1-1": {
  "title": "GPR (Ground Penetrating Radar)",
  "category": "التصميم والتوريد",
  "categoryEn": "Design & Procurement",
  "duration": "9 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "فهم مبدأ عمل GPR وقدراته في كشف الخدمات المدفونة",
    "معرفة قيود GPR وأسباب محدوديته في التربة السعودية",
    "تفسير صور GPR (Radargrams) بشكل صحيح",
    "دمج نتائج GPR مع أدوات الكشف الأخرى"
  ],
  "content": "<h3>ما هو GPR؟</h3><p><strong>Ground Penetrating Radar</strong> هو تقنية تعتمد على إرسال نبضات رادارية عالية التردد (10 MHz – 2.6 GHz) إلى الأرض ورصد الإشارات المنعكسة من الطبقات والأجسام المدفونة. الهدف الأساسي في مشاريع UGC هو <strong>رسم خارطة شاملة لجميع الخدمات المدفونة</strong> قبل أي حفر.</p><h3>كيف يعمل GPR؟</h3><p>تُرسَل النبضة الكهرومغناطيسية عبر هوائي (Antenna) مسحوب على سطح الأرض. عند مصادفة تغيير في الخصائص الكهربائية للوسط (كيبل، أنبوب، فراغ، طبقة صخرية)، تنعكس جزء من الطاقة للأعلى ويرصدها المستقبل. زمن الرجوع يُحدد العمق، وشكل الانعكاس يُحدد نوع الجسم.</p><h3>عمق الاختراق والدقة</h3><ul><li><strong>التربة الجافة (رمل/صخر)</strong>: اختراق حتى 3-5 متر — مناسب جداً للمناطق الصحراوية السعودية</li><li><strong>التربة الطينية أو الملحية (صبخة)</strong>: عمق اختراق قد ينخفض لـ 0.5 متر فقط — قيد كبير في أجزاء من المنطقة الشرقية</li><li><strong>دقة التحديد الأفقي</strong>: ±5-10 سم بالهوائيات عالية التردد (500 MHz+)</li></ul><h3>تفسير Radargram</h3><ul><li><strong>الأنبوب المعدني أو الكيبل</strong>: يُظهر قوس هذائلي (Hyperbolic Reflection) واضح</li><li><strong>الفراغ أو الأنبوب البلاستيكي</strong>: انعكاس أضعف، قد يحتاج خبرة أكبر في التفسير</li><li><strong>طبقة مياه جوفية</strong>: خط أفقي ممتد على طول المسح</li></ul><h3>GPR في السياق السعودي</h3><p>GPR يُعطي أفضل نتائجه في <strong>التربة الرملية الجافة</strong> الشائعة في الرياض ونجد — وهو حظ موفور. لكن في الدمام والجبيل والمناطق الساحلية، التربة الصبخية تُضعف الإشارة بشكل كبير، مما يستلزم الاعتماد على أدوات تكميلية.</p>",
  "tools": [
    {
      "name": "GPR System (GSSI / Sensors & Software)",
      "icon": "radio"
    },
    {
      "name": "Utility Mapping Software",
      "icon": "map-pin"
    },
    {
      "name": "Cable Locator (EM)",
      "icon": "activity"
    }
  ],
  "hseWarnings": [
    "GPR يُصدر إشعاعات كهرومغناطيسية منخفضة الطاقة — لا يُستخدم فوق مواد متفجرة أو قرب أجهزة تنظيم ضربات القلب",
    "نتائج GPR ليست نهائية — أي حفر بجانب خدمات مكتشفة يجب أن يبدأ يدوياً (Trial Pit) لتأكيد الموقع"
  ],
  "commonMistakes": [
    "الاعتماد على GPR وحده دون Cable Locator — كل أداة تكشف ما لا تكشفه الأخرى",
    "تفسير Radargram دون مشغّل مؤهل — التفسير الخاطئ أخطر من عدم الاستخدام",
    "إجراء GPR Survey مرة واحدة فقط — يُفضَّل تكراره بعد الأمطار أو تغييرات في الموقع"
  ],
  "references": [
    "ASTM D6432 — Standard Guide for Using GPR",
    "CIGRÉ Technical Brochure 792 — Utility Detection Methods",
    "SEC Civil Works Specification — Utility Detection"
  ]
},

  "c2-s1-2": {
  "title": "Cable Locators",
  "category": "التصميم والتوريد",
  "categoryEn": "Design & Procurement",
  "duration": "8 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "فهم مبدأ عمل أجهزة Cable Locators الكهرومغناطيسية",
    "معرفة الفرق بين الكشف النشط (Active) والسلبي (Passive)",
    "إتقان إجراءات التحديد الدقيق لموقع وعمق الكيابل",
    "تجنب الأخطاء الشائعة في تفسير النتائج"
  ],
  "content": "<h3>Cable Locators — المبدأ الكهرومغناطيسي</h3><p>تعتمد أجهزة Cable Locators على اكتشاف <strong>المجالات الكهرومغناطيسية</strong> المنبعثة من الكيابل الكهربائية والأنابيب الموصلة المدفونة.</p><h3>الكشف السلبي (Passive Mode)</h3><p>يكتشف الجهاز الإشارات الكهرومغناطيسية الطبيعية الصادرة من الكيابل الحاملة لتيار متردد (50/60 Hz). مناسب لكيابل القوى الحية، لكنه <strong>غير موثوق للكيابل الصامتة أو الأنابيب</strong>.</p><h3>الكشف النشط (Active Mode)</h3><p>يُحقن إشارة تردد محدد عبر جهاز الإرسال (Transmitter) في الكيبل أو الأنبوب المستهدف، ثم يتتبع جهاز الاستقبال (Receiver) هذه الإشارة على طول المسار. يُعطي <strong>دقة أعلى بكثير</strong>.</p><h3>طرق توصيل الإشارة</h3><ul><li><strong>Direct Connection</strong>: توصيل Transmitter مباشرة بالكيبل من نقطة مكشوفة</li><li><strong>Induction Clamp</strong>: تحريض إشارة بدون فصل الكيبل</li><li><strong>Signal Induction</strong>: وضع Transmitter فوق الأرض مباشرةً (أقل دقةً)</li></ul><h3>قياس العمق</h3><p>معظم أجهزة الجيل الحديث (مثل <strong>Radiodetection RD8100، Vivax-Metrotech vLoc3</strong>) تُعطي قياس عمق تلقائي بدقة ±5-10% من العمق الحقيقي.</p><h3>قيود مهمة</h3><ul><li>في المناطق ذات الكثافة العالية من الخدمات، الإشارات تتداخل — يصعب تمييز كيبل بعينه</li><li>الكيابل غير الموصلة (Fiber في أنابيب HDPE) لا تُكتشف بـ EM Locator</li></ul>",
  "tools": [
    {
      "name": "Radiodetection RD8100",
      "icon": "radio"
    },
    {
      "name": "Signal Transmitter",
      "icon": "zap"
    },
    {
      "name": "Trial Pit Tools",
      "icon": "wrench"
    }
  ],
  "hseWarnings": [
    "قبل توصيل Transmitter بأي كيبل، تحقق أنه بلا جهد (Dead) بجهاز قياس معتمد — الكيابل الحية تُسبب صدمة كهربائية قاتلة",
    "لا تعتمد على Cable Locator وحده لتجنب الحفر على الكيابل — ادفن التجربة (Trial Pit) عند أي شك"
  ],
  "commonMistakes": [
    "استخدام Passive Mode فقط والاعتقاد بأنه كشف جميع الخدمات — الكيابل الصامتة والأنابيب غير مرئية له",
    "قراءة العمق من الجهاز كقيمة مطلقة — العمق الفعلي قد يختلف ±15% خاصةً في التربة غير المتجانسة"
  ],
  "references": [
    "PAS 128 — Specification for Underground Utility Detection",
    "Radiodetection RD8100 Operation Manual",
    "SEC Civil Works Specification — Utility Detection Section"
  ]
},

  "c2-s1-3": {
  "title": "تحديد العوائق",
  "category": "التصميم والتوريد",
  "categoryEn": "Design & Procurement",
  "duration": "7 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "التعرف على أنواع العوائق التي تواجه مسارات الكيابل في السعودية",
    "فهم منهجية توثيق العوائق وتصنيفها",
    "معرفة الحلول الهندسية لكل نوع من العوائق",
    "إعداد Obstacle Register مطابق لمتطلبات SEC"
  ],
  "content": "<h3>أنواع العوائق في مشاريع UGC السعودية</h3><h3>1. العوائق تحت الأرض (Underground Obstacles)</h3><ul><li><strong>كيابل كهربائية قائمة</strong>: SEC، أرامكو، وزارة الدفاع — تستلزم مسافة فصل ≥ 300mm</li><li><strong>أنابيب المياه (SWPC/SWCC)</strong>: مسافة فصل ≥ 300mm</li><li><strong>أنابيب الصرف الصحي</strong>: ≥ 300mm، مع مراعاة تسرب العوامل الكيميائية</li><li><strong>أنابيب الغاز والبترول (أرامكو/SABIC)</strong>: ≥ 600mm فصل + NOC إلزامي + Method Statement خاص</li><li><strong>كيابل الاتصالات (STC، Zain، Mobily)</strong>: ≥ 300mm</li></ul><h3>2. العوائق فوق الأرض وعلى السطح</h3><ul><li><strong>أعمدة الإنارة وأعمدة الكهرباء</strong>: قد تستلزم نقل الأعمدة أو تعديل المسار</li><li><strong>الأشجار والمناظر الطبيعية</strong>: حماية الجذور تستلزم HDD أحياناً</li></ul><h3>3. العوائق الإدارية</h3><ul><li><strong>ملكيات خاصة</strong>: يستلزم الحصول على تعويض أو تغيير المسار</li><li><strong>مواقع أثرية</strong>: تحتاج تنسيق مع هيئة التراث</li><li><strong>مناطق عسكرية أو أمنية</strong>: تصاريح خاصة قد تأخذ أشهراً</li></ul><h3>منهجية توثيق العوائق</h3><p>يُعدّ <strong>Obstacle Register</strong> بجدول يشمل: رقم العائق، النوع، الموقع (GPS)، العمق المقدر، النتيجة (تغيير مسار / عبور خاص / تنسيق مع جهة)، والجهة المسؤولة عن الحل. يُراجَع هذا السجل أسبوعياً مع الاستشاري.</p>",
  "tools": [
    {
      "name": "GPR System",
      "icon": "radio"
    },
    {
      "name": "GIS Mapping Software",
      "icon": "map-pin"
    },
    {
      "name": "Obstacle Register (Excel)",
      "icon": "file-text"
    }
  ],
  "hseWarnings": [
    "اكتشاف أنبوب غاز أو بترول غير موثق أثناء الحفر → أوقف العمل فوراً وأبلغ المشرف وفريق الطوارئ",
    "لا تحفر يدوياً بجانب أنابيب الغاز — استخدم Vacuum Excavation (Suction Excavator)"
  ],
  "commonMistakes": [
    "الاعتماد فقط على خرائط الجهات دون تحقق ميداني — الخرائط الرسمية كثيراً ما تكون غير محدّثة في السعودية",
    "تجاهل توثيق العوائق المحلولة — NOC المنتهية الصلاحية يُسبب إيقاف المشروع لاحقاً"
  ],
  "references": [
    "SEC Route Survey Manual",
    "PAS 128 — Underground Utility Mapping Quality Levels",
    "Saudi Aramco SAES-L-100 — Pipeline Crossing Requirements"
  ]
},

  "c2-s2-0": {
  "title": "البلدية والأمانة",
  "category": "التصميم والتوريد",
  "categoryEn": "Design & Procurement",
  "duration": "7 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "فهم متطلبات الحصول على NOC من البلدية والأمانة",
    "معرفة المستندات المطلوبة لتقديم طلب الحفر",
    "تقدير المدة الزمنية النموذجية للحصول على الموافقات",
    "فهم اشتراطات استعادة الطريق (Reinstatement) بعد الحفر"
  ],
  "content": "<h3>دور البلدية والأمانة في مشاريع UGC</h3><p>البلديات والأمانات هي الجهات المسؤولة عن الطرق والأرصفة والفضاء العام داخل النطاق العمراني. أي حفر في الطريق العام يستلزم <strong>تصريح حفر (Excavation Permit / NOC)</strong> من البلدية قبل البدء.</p><h3>المستندات المطلوبة عادةً</h3><ul><li>رسم تنفيذي (Drawing) معتمد يُظهر موقع وأبعاد الحفر</li><li>خطاب تفويض من SEC/GRIDCO (كالمالك)</li><li>خطة إدارة المرور (Traffic Management Plan) معتمدة من المرور</li><li>وثيقة تأمين على الأضرار المدنية</li><li>برنامج زمني للحفر والإصلاح</li><li>مواصفات استعادة الطريق (Asphalt Reinstatement Specification)</li></ul><h3>مدة الحصول على NOC</h3><p>في الظروف العادية: <strong>2-4 أسابيع</strong> للطرق الثانوية. للطرق الرئيسية والتقاطعات الحساسة قد تصل <strong>6-8 أسابيع</strong> أو أكثر. في مناطق مكة والمدينة خلال مواسم الحج والعمرة، قد تُوقف البلدية منح تصاريح الحفر كلياً.</p><h3>اشتراطات استعادة الطريق (Reinstatement)</h3><p>البلديات السعودية عادةً تشترط إعادة الطريق لحالته الأصلية أو أفضل (Like-for-Like أو Better). يشمل ذلك: طبقات الأسفلت بنفس السماكات الأصلية، وعادةً تُطلب فترة ضمان <strong>12-24 شهراً</strong> على أعمال الاستعادة.</p>",
  "tools": [
    {
      "name": "Drawing Set (AutoCAD)",
      "icon": "pen-line"
    },
    {
      "name": "Traffic Management Plan",
      "icon": "map-pin"
    },
    {
      "name": "NOC Tracking Register",
      "icon": "file-text"
    }
  ],
  "hseWarnings": [
    "الحفر في الطريق بدون NOC من البلدية يُعرّض المقاول لغرامات مالية وإيقاف العمل فوراً",
    "يجب تركيب حواجز وإضاءة تحذيرية ليلية في جميع مناطق الحفر المفتوحة — متطلب بلدي إلزامي"
  ],
  "commonMistakes": [
    "تقديم طلب NOC بدون خطة إدارة المرور — هو السبب الأول لرفض الطلب أو تأخيره",
    "الحفر خارج النطاق المعتمد في الرسم المرفق مع NOC — يُلغي التصريح ويستلزم تصريحاً جديداً"
  ],
  "references": [
    "Ministry of Municipal and Rural Affairs — Excavation Permit Regulations",
    "Amanah Riyadh — Road Reinstatement Specifications",
    "SEC Standard Operating Procedures — NOC Management"
  ]
},

  "c2-s2-1": {
  "title": "STC والاتصالات",
  "category": "التصميم والتوريد",
  "categoryEn": "Design & Procurement",
  "duration": "6 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "فهم متطلبات التنسيق مع شركات الاتصالات (STC، Zain، Mobily)",
    "معرفة إجراءات الحصول على NOC من شركات الاتصالات",
    "تحديد مسافات الفصل المطلوبة بين كيابل الاتصالات وكيابل القوى",
    "التعامل مع حالات الاكتشاف المفاجئ لكيابل اتصالات أثناء الحفر"
  ],
  "content": "<h3>أهمية التنسيق مع شركات الاتصالات</h3><p>شبكة كيابل الاتصالات في المدن السعودية كثيفة للغاية وموثقة بشكل متفاوت. STC تمتلك أكبر شبكة، تليها Zain وMobily وشركات الألياف الأخرى. قطع كيبل اتصالات يُسبب تعطل خدمات حيوية وغرامات ضخمة.</p><h3>إجراءات الحصول على NOC</h3><ul><li>تقديم مخططات المسار عبر البوابة الإلكترونية أو مكتب STC للمشاريع</li><li>طلب خرائط الكيابل القائمة (As-Built Maps) — قد تكون ناقصة أو غير دقيقة</li><li>تنسيق موعد للكشف الميداني المشترك مع مهندس STC</li><li>الحصول على NOC الكتابي الذي يُحدد شروط التعامل مع كيابلهم</li></ul><h3>مسافات الفصل المطلوبة</h3><ul><li><strong>بين كيابل القوى وكيابل الاتصالات</strong>: ≥ 300mm فصل أفقي</li><li><strong>عند التقاطع العمودي</strong>: ≥ 100mm مع وضع لوح حماية بينهما</li><li><strong>للجهود العالية (110 kV فأعلى)</strong>: قد تُطلب مسافة 500-600mm</li></ul><h3>التعامل مع الاكتشاف المفاجئ</h3><p>عند اكتشاف كيبل اتصالات غير موثق أثناء الحفر: <strong>أوقف الحفر الآلي فوراً، استخدم الحفر اليدوي، وثّق بالصور والإحداثيات، وتواصل مع STC/الجهة المعنية قبل الاستمرار</strong>.</p>",
  "tools": [
    {
      "name": "EM Cable Locator",
      "icon": "radio"
    },
    {
      "name": "Trial Pit Equipment",
      "icon": "wrench"
    },
    {
      "name": "NOC Register",
      "icon": "file-text"
    }
  ],
  "hseWarnings": [
    "قطع كيبل اتصالات فايبر بصري يُعطل خدمات البنك المركزي أو خدمات طوارئ 911 — تبعات قانونية خطيرة",
    "لا تفترض أن غياب الإشارة في Cable Locator يعني غياب الكيابل — كيابل الفايبر غير موصلة كهربائياً"
  ],
  "commonMistakes": [
    "الاكتفاء بخرائط STC الرسمية دون تحقق ميداني — 30-40% من الكيابل الفعلية غير موثقة في الخرائط",
    "إهمال كيابل شركات الاتصالات الصغيرة (ISPs المحليين) التي لا تظهر في خرائط STC"
  ],
  "references": [
    "CITC — Trench Sharing Guidelines",
    "STC Technical Requirements for Cable Proximity",
    "SEC Civil Works Specification — Separation Distances"
  ]
},

  "c2-s2-2": {
  "title": "شركة المياه",
  "category": "التصميم والتوريد",
  "categoryEn": "Design & Procurement",
  "duration": "6 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "معرفة إجراءات التنسيق مع شركات المياه الوطنية والمناطقية",
    "فهم المخاطر الخاصة بالقرب من أنابيب المياه",
    "تحديد مسافات الفصل المطلوبة",
    "التعامل مع حالات كسر أنابيب المياه أثناء الحفر"
  ],
  "content": "<h3>الجهات المعنية بالمياه في السعودية</h3><p>تتعدد الجهات: <strong>شركة المياه الوطنية (NWC)</strong> للمناطق الحضرية الكبرى، و<strong>وزارة البيئة والمياه والزراعة</strong> للمشاريع الريفية، و<strong>SWCC</strong> لبعض المناطق الساحلية.</p><h3>المخاطر الخاصة بالقرب من أنابيب المياه</h3><ul><li><strong>تسرب المياه يرفع Soil Thermal Resistivity</strong>: يُعطل حساب Ampacity ويُسبب تراكم حرارة حول الكيبل</li><li><strong>التآكل الكهروكيميائي (Electrolytic Corrosion)</strong>: الإمكانية الكهرية المختلفة بين الكيبل وأنبوب المياه تُسبب تآكلاً للـ Metallic Sheath</li><li><strong>انهيار الحفر</strong>: تسرب المياه من أنابيب قديمة يُضعف التربة المحيطة</li></ul><h3>مسافات الفصل</h3><ul><li><strong>أنبوب مياه شرب</strong>: ≥ 300mm أفقياً، ≥ 150mm رأسياً عند التقاطع</li><li><strong>أنبوب مياه ضغط عالٍ (> 6 bar)</strong>: ≥ 500mm والتنسيق المباشر مع NWC إلزامي</li></ul><h3>إجراء الحفر اليدوي القريب</h3><p>عند الاقتراب من أنبوب مياه موثق (< 500mm): يُوقف الحفر الآلي كلياً ويُنتقل للحفر اليدوي أو بـ Vacuum Excavator حتى يتم تحديد الأنبوب بصرياً بالكامل.</p>",
  "tools": [
    {
      "name": "Vacuum Excavator",
      "icon": "wind"
    },
    {
      "name": "Pipe Locator",
      "icon": "radio"
    },
    {
      "name": "Emergency Repair Kit (Water)",
      "icon": "droplet"
    }
  ],
  "hseWarnings": [
    "كسر أنبوب مياه ضغط عالٍ يُسبب انهيار الخندق فوراً — خطر الدفن الحي للعمال",
    "في المناطق ذات المياه الجوفية المرتفعة (المنطقة الشرقية)، احتفر بجانب أنابيب المياه فقط مع ضخ مستمر (Dewatering)"
  ],
  "commonMistakes": [
    "تجاهل التسريبات الصغيرة من أنابيب المياه القديمة المجاورة — تراكمها على سنوات يُدمر الـ HDPE Jacket",
    "عدم طلب Pipe Pressure Drawing من NWC — الضغط الفعلي قد يختلف كثيراً عن النظري"
  ],
  "references": [
    "NWC Technical Standards — Cable Proximity to Water Mains",
    "SEC Civil Works Specification — Utility Separation",
    "IEC 60287-3-1 — External Heat Sources Proximity"
  ]
},

  "c2-s2-3": {
  "title": "أرامكو والدفاع المدني",
  "category": "التصميم والتوريد",
  "categoryEn": "Design & Procurement",
  "duration": "8 دقائق",
  "difficulty": "متقدم",
  "objectives": [
    "فهم متطلبات NOC أرامكو السعودية للمشاريع بالقرب من منشآتها",
    "معرفة اشتراطات الدفاع المدني للمشاريع الكهربائية",
    "تحديد مسافات الفصل الإلزامية من أنابيب الهيدروكربونات",
    "فهم بروتوكول الاستجابة للطوارئ في مناطق أرامكو"
  ],
  "content": "<h3>أرامكو السعودية — الجهة الأصعب في الحصول على NOC</h3><p>أي مشروع UGC يمر بالقرب من منشآت أرامكو يستلزم NOC من إدارة المشاريع في أرامكو. هذا النوع من الموافقات من أطول الموافقات زمناً وأكثرها تعقيداً.</p><h3>متطلبات أرامكو الأساسية</h3><ul><li><strong>مسافة الفصل من أنابيب الهيدروكربونات</strong>: ≥ 600mm في العادة، وقد ترتفع لـ 1000mm+ حسب ضغط الأنبوب وقطره</li><li><strong>الرسومات</strong>: يجب تقديم رسومات بتنسيق SmartPlant أو AutoCAD وفق SAES</li><li><strong>Method Statement خاص</strong>: للعمل في مناطق التأثير (Areas of Influence) بجانب أنابيبهم</li><li><strong>Hot Work Permit</strong>: أي لحام أو عمل بالحرارة داخل منطقة أرامكو يستلزم تصريح خاص</li><li><strong>HSE Induction</strong>: جميع العمال يجب أن يجتازوا دورة HSE أرامكو قبل دخول منشآتهم</li></ul><h3>الدفاع المدني</h3><p>يُطلب NOC الدفاع المدني بشكل رئيسي في: المشاريع داخل أو بجوار منشآت الوقود، والأنفاق ومشاريع الأعماق الكبيرة.</p><h3>المدة الزمنية</h3><p>NOC أرامكو: <strong>4-12 أسبوع</strong>. NOC الدفاع المدني: <strong>2-4 أسابيع</strong>.</p>",
  "tools": [
    {
      "name": "SAES Drawing Template",
      "icon": "pen-line"
    },
    {
      "name": "Gas Detector (4-Gas)",
      "icon": "wind"
    },
    {
      "name": "Fire Extinguisher (CO2)",
      "icon": "flame"
    }
  ],
  "hseWarnings": [
    "أي حفر يقترب من أنبوب هيدروكربونات ويكتشف رائحة غاز → أوقف كل الأعمال فوراً وأخلِ المنطقة بنطاق 50 متر",
    "لا يُسمح بأي آلة تعمل بالديزل داخل بعض مناطق أرامكو الخطرة — تحقق من نوع المعدات المسموح بها"
  ],
  "commonMistakes": [
    "البدء في تصميم المسار دون الاستفسار المسبق من أرامكو عن مواقع الأنابيب — يُسبب إعادة تصميم كاملة",
    "إغفال تجديد NOC المنتهي الصلاحية — صلاحية NOC أرامكو عادةً 6-12 شهراً فقط"
  ],
  "references": [
    "Saudi Aramco SAES-L-100 — Pipeline Standards",
    "Saudi Aramco GI-0002.714 — Excavation Near Pipelines",
    "Civil Defense Kingdom of Saudi Arabia — Fire Safety Regulations"
  ]
},

  "c2-s2-4": {
  "title": "وزارة النقل",
  "category": "التصميم والتوريد",
  "categoryEn": "Design & Procurement",
  "duration": "6 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "فهم متطلبات وزارة النقل لعبور الطرق السريعة والطرق الرئيسية",
    "معرفة اشتراطات HDD للعبور تحت الطرق",
    "تحديد المتطلبات الخاصة لعبور طرق السكك الحديدية",
    "فهم إجراءات Traffic Management الإلزامية"
  ],
  "content": "<h3>دور وزارة النقل في مشاريع UGC</h3><p>وزارة النقل (عبر <strong>الهيئة العامة للطرق</strong>) هي الجهة المسؤولة عن الطرق الرئيسية والطرق السريعة والجسور خارج النطاق البلدي. أي عبور أو مسايرة لهذه الطرق يستلزم NOC منها.</p><h3>متطلبات عبور الطرق الرئيسية</h3><ul><li><strong>HDD إلزامي</strong> لعبور الطرق السريعة (Expressways) بدون إيقاف حركة المرور</li><li><strong>الأنابيب المستخدمة في HDD</strong>: عادةً GRP أو HDPE بجدار سميك (SDR 11 أو أقل)</li><li><strong>عمق الكيبل أسفل الطريق</strong>: ≥ 1.5 متر من قاع الطريق</li><li><strong>Casing Pipe</strong>: في بعض الحالات تُطلب أنبوب فولاذي (Steel Casing) كحماية إضافية</li></ul><h3>عبور السكك الحديدية (SAR، قطار الحرمين)</h3><p>يُعدّ من أصعب العبورات. تستلزم هيئة SAR دراسة هندسية كاملة وقد يُنفَّذ العبور في نوافذ توقف القطار (Engineering Windows) ليلاً.</p><h3>Traffic Management Plan</h3><p>أي عمل على الطريق يستلزم خطة معتمدة من إدارة المرور تشمل: Lane Closure Plan، وضع الحواجز والإشارات، توقيت العمل (عادةً يُمنع في ساعات الذروة).</p>",
  "tools": [
    {
      "name": "HDD Machine",
      "icon": "settings"
    },
    {
      "name": "Traffic Cones & Barriers",
      "icon": "alert-triangle"
    },
    {
      "name": "Road Crossing Drawing",
      "icon": "pen-line"
    }
  ],
  "hseWarnings": [
    "عمال موقع الحفر على الطريق في خطر مستمر من حوادث المرور — خطة إدارة المرور ليست اختيارية",
    "HDD تحت طريق سريع يستلزم Mud Return Management — الطين المتسرب على الطريق يُسبب انزلاق المركبات"
  ],
  "commonMistakes": [
    "تصميم HDD بنصف قطر انحناء أقل من الحد الأدنى المسموح للكيبل (Minimum Bending Radius)",
    "عدم تركيب Spare Conduits إضافية أثناء HDD — المستقبل يشكرك عندما تحتاج دائرة إضافية"
  ],
  "references": [
    "General Authority for Roads — Crossing Permit Requirements",
    "SAR (Saudi Railway Authority) — Crossing Standards",
    "AASHTO — Highway Design Standards for Utility Crossings"
  ]
},

  "c2-s3-0": {
  "title": "Soil Thermal Resistivity",
  "category": "التصميم والتوريد",
  "categoryEn": "Design & Procurement",
  "duration": "10 دقائق",
  "difficulty": "متقدم",
  "objectives": [
    "فهم مفهوم المقاومة الحرارية للتربة وتأثيرها على Ampacity الكيبل",
    "معرفة طريقة قياس Thermal Resistivity في الموقع",
    "تفسير نتائج القياسات واتخاذ قرار Thermal Backfill",
    "تحديد القيم النموذجية للتربة السعودية المختلفة"
  ],
  "content": "<h3>ما هي Soil Thermal Resistivity؟</h3><p><strong>المقاومة الحرارية للتربة (ρ)</strong> هي مقياس لمدى مقاومة التربة لنقل الحرارة. وحدتها <strong>K·m/W</strong>. القيمة العالية تعني التربة تعيق انتقال الحرارة = تتراكم الحرارة حول الكيبل = تنخفض Ampacity.</p><h3>لماذا هي حرجة في السعودية؟</h3><p>التربة الرملية الجافة الشائعة لها قيمة ρ مرتفعة: <strong>1.5 – 2.5 K·m/W</strong>. في صيف الرياض حيث تتجاوز درجة حرارة التربة على عمق متر 35-40°C، ارتفاع ρ يُقلص Ampacity بنسبة <strong>15-25%</strong>.</p><h3>طريقة القياس الميدانية</h3><p>يُستخدم جهاز <strong>Thermal Needle Probe</strong> وفق معيار <strong>IEEE 442 / ASTM D5334</strong>: يُدفن الإبرة في نموذج التربة، يُطبَّق تدفق حراري ثابت، يُرصد ارتفاع درجة الحرارة بالزمن، تُحسب ρ من ميل المنحنى.</p><h3>القيم النموذجية في التربة السعودية</h3><ul><li><strong>رمل جاف</strong>: 2.0 – 2.5 K·m/W</li><li><strong>رمل رطب</strong>: 0.8 – 1.2 K·m/W</li><li><strong>صبخة</strong>: 0.6 – 1.0 K·m/W</li><li><strong>Thermal Backfill معتمد (FTB)</strong>: ≤ 1.0 K·m/W (مطلوب في معظم مشاريع SEC)</li></ul><h3>قرار Thermal Backfill</h3><p>إذا كانت ρ الطبيعية > 1.2 K·m/W، يُستخدم <strong>Fluidized Thermal Backfill (FTB)</strong> بسماكة كافية حول الكيبل (عادةً 300mm من كل جانب).</p>",
  "tools": [
    {
      "name": "KD2 Pro Thermal Needle Probe",
      "icon": "thermometer"
    },
    {
      "name": "Soil Sample Containers",
      "icon": "box"
    },
    {
      "name": "IEC 60287 Ampacity Calculator",
      "icon": "cpu"
    }
  ],
  "hseWarnings": [
    "أخذ عينات التربة من عمق الحفر يستلزم اتباع Excavation Safety Procedures كاملة",
    "لا تفترض قيمة ρ من النوع البصري للتربة فقط — التربة الرملية الجافة المكدّسة قد تكون ρ = 3.0 K·m/W"
  ],
  "commonMistakes": [
    "قياس ρ مرة واحدة فقط في مكان واحد وتعميمها على كامل المسار — يجب القياس كل 200-500 متر",
    "إهمال قياس ρ للـ Thermal Backfill المُجهّز في الموقع — المزيج قد لا يحقق المواصفة"
  ],
  "references": [
    "IEC 60287-1-1 — Current Rating, Thermal Resistivity",
    "IEEE 442 — Guide for Soil Thermal Resistivity Measurements",
    "ASTM D5334 — Standard Test Method for Thermal Conductivity of Soil"
  ]
},

  "c2-s3-1": {
  "title": "Chemical Analysis",
  "category": "التصميم والتوريد",
  "categoryEn": "Design & Procurement",
  "duration": "7 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "فهم أهمية التحليل الكيميائي للتربة قبل تركيب الكيابل",
    "معرفة العوامل الكيميائية التي تُهدد سلامة الكيابل على المدى البعيد",
    "تحديد أنواع الحماية الإضافية المطلوبة بناءً على نتائج التحليل",
    "معرفة المختبرات المعتمدة للتحليل الكيميائي في السعودية"
  ],
  "content": "<h3>لماذا التحليل الكيميائي للتربة؟</h3><p>التربة بيئة كيميائية تؤثر على مواد الكيبل على مدى عمره (40 سنة). التحليل الكيميائي يكشف عن المواد الضارة التي قد تُسرّع تدهور الـ HDPE Outer Jacket أو الـ Metallic Sheath.</p><h3>المعاملات الكيميائية الرئيسية</h3><ul><li><strong>pH</strong>: التربة الحمضية (pH < 5) أو القلوية جداً (pH > 9) تُسرّع تآكل الـ Metallic Sheath. النطاق الآمن: 6-9</li><li><strong>Chloride Content</strong>: الخطر الأكبر في المنطقة الشرقية والمناطق الساحلية. الحد المقبول: < 200 ppm</li><li><strong>Sulfate Content</strong>: تُؤثر على الخرسانة وبعض مواد المناهيل. الحد: < 600 ppm</li><li><strong>Organic Content</strong>: تحلّل المواد العضوية يُنتج أحماضاً وغازات قد تتراكم في المناهيل</li><li><strong>Electrical Resistivity</strong>: للتربة المنخفضة المقاومة (< 10 Ω·m) خطر التآكل الكهروكيميائي مرتفع</li></ul><h3>التربة الصبخية — تحدي المنطقة الشرقية</h3><p>الصبخة تستلزم: كيابل بـ <strong>Double HDPE Jacket</strong>، أو Jacket مُضاف له مضادات الكلوريد، أو <strong>HDPE Conduits</strong> تُعزل الكيبل تماماً عن التربة الصبخية.</p><h3>معايير أخذ العينات</h3><p>يُؤخذ نموذج تربة كل <strong>200-500 متر</strong> على طول المسار. يُرسَل للمختبر المعتمد (SGS، Bureau Veritas، AECOM Labs) للتحليل الشامل.</p>",
  "tools": [
    {
      "name": "Soil Sampling Auger",
      "icon": "wrench"
    },
    {
      "name": "pH Meter",
      "icon": "activity"
    },
    {
      "name": "Lab Report Template",
      "icon": "file-text"
    }
  ],
  "hseWarnings": [
    "التربة الملوثة كيميائياً قد تكون خطرة على الجهاز التنفسي — ارتدِ قناع P2 عند أخذ العينات",
    "اكتشاف تلوث هيدروكربوني في التربة يستلزم إبلاغ الجهات البيئية فوراً قبل الاستمرار"
  ],
  "commonMistakes": [
    "الاكتفاء بتحليل عينة واحدة من بداية المسار وتعميم النتيجة — التربة غير متجانسة على طول الكيلومترات",
    "إهمال تحليل مياه التربة الجوفية في المنطقة الشرقية"
  ],
  "references": [
    "BS 1377 — Methods of Test for Soils for Civil Engineering Purposes",
    "ASTM D4972 — pH of Soils",
    "IEC 60287-3-1 — Soil Corrosivity Assessment"
  ]
},

  "c2-s3-2": {
  "title": "التربة الصبخية",
  "category": "التصميم والتوريد",
  "categoryEn": "Design & Procurement",
  "duration": "8 دقائق",
  "difficulty": "متقدم",
  "objectives": [
    "فهم طبيعة التربة الصبخية وتوزيعها الجغرافي في السعودية",
    "معرفة التأثيرات المدمرة للصبخة على مواد الكيابل",
    "تحديد الحلول الهندسية المناسبة للتركيب في التربة الصبخية",
    "اختيار أنواع الكيابل والمواد المناسبة لبيئة الصبخة"
  ],
  "content": "<h3>ما هي التربة الصبخية (Sabkha)?</h3><p><strong>الصبخة</strong> تربة رسوبية مشبعة بالأملاح والمعادن (كلوريدات، كبريتات، كربونات) نتيجة التبخر الشديد وارتفاع المياه الجوفية المالحة. تنتشر على نطاق واسع في <strong>ساحل الخليج العربي (المنطقة الشرقية)، ساحل البحر الأحمر (جدة، ينبع)، وبعض المناطق الداخلية المنخفضة</strong>.</p><h3>تأثير الصبخة على الكيابل</h3><ul><li><strong>تآكل HDPE Outer Jacket</strong>: الكلوريدات المركّزة تُدخل Stress Cracking في HDPE</li><li><strong>تآكل Metallic Sheath</strong>: التربة الصبخية منخفضة المقاومة الكهربائية (< 5 Ω·m) تُسرّع التآكل الكهروكيميائي</li><li><strong>تآكل الخرسانة</strong>: الكبريتات تُهاجم الخرسانة العادية للمناهيل</li><li><strong>انتفاخ وانهيار التربة</strong>: الصبخة تتمدد عند الترطيب وتنكمش عند الجفاف</li></ul><h3>الحلول الهندسية</h3><ul><li><strong>للكيابل</strong>: HDPE مُعالَج بمضادات UV والإجهاد (UV-Stabilized, Stress Crack Resistant HDPE)</li><li><strong>لعزل الكيبل</strong>: تركيب الكيبل داخل أنابيب HDPE محكمة الإغلاق مع Bentonite Seal</li><li><strong>للمناهيل</strong>: خرسانة مقاومة للكبريتات (SRC) أو طلاء Epoxy داخلي وخارجي</li></ul>",
  "tools": [
    {
      "name": "Soil Resistivity Meter (Wenner)",
      "icon": "activity"
    },
    {
      "name": "pH & Chloride Test Kit",
      "icon": "droplet"
    },
    {
      "name": "HDPE Duct Sealing Equipment",
      "icon": "box"
    }
  ],
  "hseWarnings": [
    "الحفر في الصبخة المشبعة بالمياه يستلزم Dewatering مستمراً وShoring لجدران الخندق",
    "الغازات المتراكمة في فراغات الصبخة (H₂S، CO₂) قد تنبثق أثناء الحفر — Gas Detector إلزامي"
  ],
  "commonMistakes": [
    "استخدام كيابل بـ Standard HDPE Jacket في تربة صبخية دون تعديل — يبدأ التآكل بعد 5-10 سنوات",
    "بناء مناهيل بخرسانة عادية (OPC) في مناطق كبريتات عالية — تتفتت الخرسانة خلال 15 سنة"
  ],
  "references": [
    "CIGRÉ Technical Brochure 880 — Underground Cables in Specific Environments",
    "ASTM C150 — Sulfate Resistant Cement",
    "Saudi Aramco SAES-A-114 — Sabkha and Salt Flat Areas"
  ]
},

  "c2-s3-3": {
  "title": "منسوب المياه الجوفية",
  "category": "التصميم والتوريد",
  "categoryEn": "Design & Procurement",
  "duration": "7 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "فهم تأثير منسوب المياه الجوفية على تصميم مشاريع UGC",
    "معرفة طرق تحديد منسوب المياه الجوفية في الموقع",
    "تحديد التصميمات الخاصة للكيابل في المناطق ذات المياه الجوفية المرتفعة",
    "فهم متطلبات Dewatering وأثرها على جدول المشروع"
  ],
  "content": "<h3>المياه الجوفية وتأثيرها على UGC</h3><p>منسوب المياه الجوفية يُحدد جوهرياً كيفية تصميم وتنفيذ وتشغيل الكيابل الأرضية. في المملكة، المنطقة الشرقية الساحلية هي الأكثر تأثراً حيث يصل المنسوب أحياناً لـ <strong>0.5-1.5 متر من سطح الأرض</strong>.</p><h3>تحديد المنسوب ميدانياً</h3><ul><li><strong>آبار الرصد (Monitoring Wells)</strong>: حفر آبار ضيقة (100-150mm قطر) بعمق 3-5 متر لقياس مستوى الماء المستقر</li><li><strong>بيانات الجيولوجيا</strong>: الاستعانة بدراسات الهيئة الجيولوجية السعودية</li><li><strong>القياس الموسمي</strong>: المنسوب يتغير موسمياً — قياسات في الشتاء والصيف إلزامية</li></ul><h3>تأثير المياه الجوفية على الكيابل</h3><ul><li><strong>تحسين Ampacity</strong>: المياه تُقلل ρ التربة → تُحسّن نقل الحرارة (تأثير إيجابي)</li><li><strong>تسريع التآكل</strong>: المياه المالحة تُسرّع التآكل الكيميائي (تأثير سلبي جداً)</li><li><strong>Water Treeing</strong>: دخول الرطوبة لعزل XLPE المتشقق يُسبب تدهور العزل</li><li><strong>رفع Buoyancy</strong>: الكيابل أو الأنابيب الطافية في الماء تحتاج Ballasting</li></ul><h3>الحلول التصميمية</h3><ul><li><strong>Water-Blocked Cable Design</strong>: استخدام Longitudinal Water Blocking Tape وRadial Water Barrier</li><li><strong>Dewatering أثناء التركيب</strong>: ضخ مستمر من جزء Open Sump داخل الخندق</li><li><strong>Manhole Waterproofing</strong>: Bentonite Sheets أو Crystalline Waterproofing على جدران المناهيل</li></ul>",
  "tools": [
    {
      "name": "Water Level Meter (Dip Meter)",
      "icon": "droplet"
    },
    {
      "name": "Submersible Pump (Dewatering)",
      "icon": "wind"
    },
    {
      "name": "Well Point System",
      "icon": "settings"
    }
  ],
  "hseWarnings": [
    "الحفر في مناطق المياه الجوفية المرتفعة يُضاعف خطر انهيار الخندق — Sheet Piling أو Well Point System قبل الحفر",
    "مضخات Dewatering تُصرف مياهاً قد تحمل ملوثات — تحقق من متطلبات التصريف البيئي مع البلدية"
  ],
  "commonMistakes": [
    "حساب Ampacity بافتراض تربة جافة في منطقة مياه جوفية مرتفعة — يُعطي نتيجة متفائلة لكنها غير دقيقة",
    "إغفال Buoyancy Calculation للأنابيب في ترب مشبعة — الأنابيب الفارغة ترتفع وتكسر الخندق"
  ],
  "references": [
    "IEC 60287-3-1 — Installation Conditions, Groundwater",
    "BS 8004 — Foundations in Waterlogged Conditions",
    "Saudi Geological Survey — Groundwater Atlas"
  ]
},

  "c2-s4-0": {
  "title": "Ampacity Calculation (IEC 60287)",
  "category": "التصميم والتوريد",
  "categoryEn": "Design & Procurement",
  "duration": "15 دقائق",
  "difficulty": "متقدم",
  "objectives": [
    "فهم نموذج الدائرة الحرارية المكافئة لحساب Ampacity",
    "إتقان تطبيق معيار IEC 60287-1-1 خطوة بخطوة",
    "معرفة مصادر الحرارة الداخلية والخارجية في الكيبل",
    "حساب Ampacity لكيبل 110 kV نموذجي بالأرقام الفعلية"
  ],
  "content": "<h3>ما هي Ampacity؟</h3><p><strong>Ampacity</strong> هي أقصى تيار مستمر يمكن للكيبل حمله دون أن تتجاوز درجة حرارة الموصل الحد الأقصى. لكيابل XLPE: <strong>90°C أثناء التشغيل العادي</strong> و250°C عند القصر القصير.</p><h3>معادلة Ampacity الأساسية (IEC 60287-1-1)</h3><pre>I² = (Δθ - Wd × [0.5T₁ + n(T₂ + T₃ + T₄)]) / (RT₁ + nR(1+λ₁)T₂ + nR(1+λ₁+λ₂)(T₃+T₄))</pre><ul><li><strong>Δθ</strong>: فرق الحرارة المسموح = θmax - θambient (90 - 40 = 50°C في السعودية)</li><li><strong>Wd</strong>: خسائر العزل الكهربائية (Dielectric Losses)</li><li><strong>T₁, T₂, T₃, T₄</strong>: المقاومات الحرارية للطبقات</li><li><strong>R</strong>: مقاومة الموصل AC عند درجة التشغيل</li><li><strong>λ₁, λ₂</strong>: نسب خسائر الشاشة والغلاف المعدني</li></ul><h3>مصادر الحرارة في الكيبل</h3><ul><li><strong>Joule Losses (I²R)</strong>: في الموصل — المصدر الرئيسي</li><li><strong>Dielectric Losses (Wd)</strong>: في عزل XLPE — مهمة جداً عند 380 kV</li><li><strong>Sheath Losses</strong>: خسائر تحريض في الغلاف المعدني — يُقللها Cross Bonding</li></ul><h3>مثال عملي: كيبل 110 kV، 1200mm² Cu، XLPE</h3><ul><li>θmax = 90°C، θambient = 40°C، Δθ = 50°C</li><li>R (مقاومة AC عند 90°C) ≈ 0.0176 Ω/km</li><li>ρ التربة = 1.0 K·m/W (Thermal Backfill)</li><li><strong>النتيجة التقريبية: I ≈ 880-950 أمبير</strong></li></ul><p>بدون Thermal Backfill (ρ = 2.0): تنخفض Ampacity لـ <strong>700-750 أمبير</strong> — فارق 20-25%.</p>",
  "tools": [
    {
      "name": "CYMCAP / ETAP / DIgSILENT",
      "icon": "cpu"
    },
    {
      "name": "IEC 60287 Spreadsheet Calculator",
      "icon": "file-text"
    },
    {
      "name": "Thermal Needle Probe",
      "icon": "thermometer"
    }
  ],
  "hseWarnings": [
    "الكيبل العامل فوق Ampacity يُسرّع تدهور عزل XLPE بشكل أسّي — ارتفاع 10°C يُنصّف عمر العزل",
    "لا تعمل بحسابات Ampacity تقريبية لمشاريع EHV — استخدم برنامج محسوب معتمداً"
  ],
  "commonMistakes": [
    "استخدام θambient = 25°C (القيمة الأوروبية) في مشاريع السعودية — يُعطي Ampacity متضخمة وغير آمنة",
    "إهمال Dielectric Losses عند 132 kV فأعلى — تُساهم بـ 5-15% من الحرارة الكلية"
  ],
  "references": [
    "IEC 60287-1-1 — Electric Cables, Current Rating, Part 1-1",
    "IEC 60287-2-1 — Thermal Resistance, Part 2-1",
    "CIGRÉ Technical Brochure 640 — A Guide for Rating Calculations"
  ]
},

  "c2-s4-1": {
  "title": "Derating Factors",
  "category": "التصميم والتوريد",
  "categoryEn": "Design & Procurement",
  "duration": "10 دقائق",
  "difficulty": "متقدم",
  "objectives": [
    "فهم مفهوم معاملات تخفيض الحمل (Derating Factors) وتطبيقاتها",
    "حساب عامل التخفيض لكل ظرف تركيب بشكل مستقل ومجمّع",
    "تحديد الحالات الحرجة التي تستوجب تقليص عدد الدوائر أو رفع المقطع",
    "تطبيق Derating Factors على مشاريع SEC الفعلية"
  ],
  "content": "<h3>ما هي Derating Factors؟</h3><p>عندما تختلف ظروف التركيب عن الظروف القياسية المحسوبة، تنخفض Ampacity الفعلية. <strong>Derating Factor (DF)</strong> هو معامل يُضرب في الـ Ampacity الاسمية للحصول على القدرة الحمل الفعلية.</p><h3>1. عامل درجة الحرارة المحيطة</h3><ul><li>θambient = 40°C → DF ≈ <strong>0.87</strong></li><li>θambient = 50°C (تربة صحراوية صيف الرياض) → DF ≈ <strong>0.77</strong></li></ul><h3>2. عامل المقاومة الحرارية للتربة</h3><ul><li>ρ = 1.0 K·m/W (Thermal Backfill) → DF = 1.0</li><li>ρ = 1.5 K·m/W → DF ≈ <strong>0.91</strong></li><li>ρ = 2.5 K·m/W (رمل جاف) → DF ≈ <strong>0.78</strong></li></ul><h3>3. عامل التجميع (Grouping Factor)</h3><ul><li>دائرة واحدة → DF = 1.0</li><li>دائرتان متجاورتان (فصل 300mm) → DF ≈ <strong>0.87</strong></li><li>ثلاث دوائر → DF ≈ <strong>0.79</strong></li></ul><h3>الـ Derating المتراكم — مثال واقعي</h3><p>كيبل 110 kV في الرياض، Ampacity اسمية = 900A:</p><ul><li>× درجة حرارة 40°C: × 0.87 = 783A</li><li>× تربة رملية جافة ρ=2.0: × 0.82 = 642A</li><li>× دائرتان متجاورتان: × 0.87 = <strong>559A</strong></li></ul><p><strong>تراجع 38%</strong> من الـ Ampacity الاسمية — هذا يُوضّح لماذا Thermal Backfill ليس رفاهية.</p>",
  "tools": [
    {
      "name": "CYMCAP Software",
      "icon": "cpu"
    },
    {
      "name": "Ampacity Derating Spreadsheet",
      "icon": "file-text"
    },
    {
      "name": "Thermal Camera (DTS)",
      "icon": "thermometer"
    }
  ],
  "hseWarnings": [
    "الكيبل المحمّل فوق Ampacity الفعلية يسخن بصمت حتى Thermal Breakdown — DTS Online Monitoring حماية أساسية",
    "لا تستند لـ Ampacity datasheet المصنّع مباشرة — دائماً احسب الـ Derating لظروف موقعك الفعلية"
  ],
  "commonMistakes": [
    "تطبيق عامل تجميع واحد لكل الخندق دون مراعاة المسافات الفعلية بين الكيابل",
    "نسيان إعادة التحقق من Ampacity بعد تغيير عمق الدفن أو نظام الـ Bonding في مرحلة الـ Detail Design"
  ],
  "references": [
    "IEC 60287-1-1 — Current Rating, Grouping and Soil Thermal Effects",
    "CIGRÉ Technical Brochure 640 — Calculation Guide for Ratings",
    "SEC TMSS — Ampacity and Derating Requirements"
  ]
},

  "c2-s4-2": {
  "title": "Short Circuit Withstand",
  "category": "التصميم والتوريد",
  "categoryEn": "Design & Procurement",
  "duration": "10 دقائق",
  "difficulty": "متقدم",
  "objectives": [
    "فهم معادلة تحمّل التيار القصير للموصل والشاشة المعدنية",
    "حساب الحد الأدنى لمقطع الموصل والشاشة بناءً على تيار القصر",
    "معرفة زمن القطع المعتمد في شبكة SEC للحسابات",
    "التحقق من كفاية مقطع الكيبل المختار لتحمّل القصر"
  ],
  "content": "<h3>ما هو Short Circuit Withstand؟</h3><p>عند حدوث قصر كهربائي، يتدفق تيار ضخم لفترة قصيرة حتى تعمل الحماية. خلال هذه الفترة، يُسخّن التيار الموصلَ بسرعة هائلة. <strong>Short Circuit Withstand</strong> هو قدرة الكيبل على تحمّل هذا التسخين دون تلف دائم.</p><h3>المعادلة الأساسية (IEC 60949)</h3><pre>I²t = K² × A²</pre><ul><li><strong>I</strong>: تيار القصر (A)</li><li><strong>t</strong>: زمن القطع (ثانية)</li><li><strong>K</strong>: ثابت المادة — للنحاس = 226 (من 90°C إلى 250°C) — للألمنيوم = 148</li><li><strong>A</strong>: مقطع الموصل (mm²)</li></ul><h3>مثال عملي لموصل 110 kV</h3><ul><li>تيار القصر (Isc) = 31.5 kA</li><li>زمن القطع الاحتياطي (Backup) = 0.5 ثانية (الحالة الأسوأ)</li><li>المقطع المطلوب: A ≥ 31500 × √0.5 / 226 = <strong>98.5 mm²</strong></li></ul><h3>زمن القطع في شبكة SEC</h3><ul><li><strong>حماية Differential (87L)</strong>: 0.05-0.1 ثانية</li><li><strong>Distance Relay (21) Zone 1</strong>: 0.1-0.15 ثانية</li><li><strong>Backup (Zone 2/3)</strong>: 0.4-0.6 ثانية — هذا هو الحالة الحاكمة</li></ul>",
  "tools": [
    {
      "name": "Short Circuit Calculator (ETAP/DIgSILENT)",
      "icon": "cpu"
    },
    {
      "name": "Protection Coordination Study",
      "icon": "file-text"
    },
    {
      "name": "IEC 60949 Spreadsheet",
      "icon": "activity"
    }
  ],
  "hseWarnings": [
    "شاشة الكيبل التي تحمل تيار قصر فوق قدرتها تنصهر وتتلف العزل — يُسبب حريق في المنهل",
    "الـ SVL في Link Boxes يجب أن يكون تيار تحمّل الصدمة مناسباً لـ Isc في المحطة"
  ],
  "commonMistakes": [
    "حساب Short Circuit Withstand للموصل فقط وإهمال الشاشة المعدنية — الشاشة تنصهر أحياناً قبل الموصل",
    "استخدام زمن الحماية الرئيسية فقط (0.1 ثانية) وتجاهل زمن الـ Backup (0.5 ثانية)"
  ],
  "references": [
    "IEC 60949 — Calculation of Thermally Permissible SC Currents",
    "IEC 60986 — Short Circuit Temperature Limits for XLPE",
    "SEC Protection Coordination Standards"
  ]
},

  "c2-s4-3": {
  "title": "Voltage Drop",
  "category": "التصميم والتوريد",
  "categoryEn": "Design & Procurement",
  "duration": "8 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "حساب هبوط الجهد (Voltage Drop) على امتداد كيبل أرضي",
    "فهم مكونات الـ Impedance للكيابل الأرضية (R، X، B)",
    "التحقق من معيار القبول لـ Voltage Drop في شبكة SEC",
    "التمييز بين Voltage Drop وVoltage Regulation"
  ],
  "content": "<h3>Voltage Drop في الكيابل الأرضية</h3><p>هبوط الجهد هو الفرق بين الجهد في بداية الكيبل ونهايته عند التحميل. يتأثر بـ <strong>مقاومة الموصل R</strong> و<strong>الممانعة التحريضية X</strong>.</p><h3>معادلة Voltage Drop المُبسَّطة</h3><pre>ΔV = I × L × (R·cos φ + X·sin φ)</pre><h3>قيم R وX النموذجية</h3><ul><li><strong>1200mm² Cu عند 90°C</strong>: R = 0.0176 Ω/km، X ≈ 0.09 Ω/km</li><li><strong>630mm² Al عند 90°C</strong>: R = 0.063 Ω/km، X ≈ 0.11 Ω/km</li></ul><h3>معيار القبول في شبكة SEC</h3><ul><li><strong>Voltage Drop أقصاه ±5%</strong> من الجهد الاسمي في الظروف العادية</li><li><strong>±10%</strong> في حالات الطوارئ (N-1 Contingency)</li></ul><h3>Ferranti Effect في UGC</h3><p>عند تشغيل الكيبل بدون حمل أو بحمل خفيف جداً، يُسبب الـ Charging Current ارتفاعاً في الجهد عند طرف الاستقبال. الحل: تركيب <strong>Shunt Reactors</strong> في طرفي الكيبل لامتصاص القدرة التفاعلية الزائدة.</p>",
  "tools": [
    {
      "name": "Load Flow Software (ETAP/PSS·E)",
      "icon": "cpu"
    },
    {
      "name": "Impedance Calculator",
      "icon": "activity"
    },
    {
      "name": "Power Quality Analyzer",
      "icon": "zap"
    }
  ],
  "hseWarnings": [
    "Ferranti Effect عند تشغيل كيابل طويلة بدون حمل قد يرفع الجهد > 10% — يُتلف معدات المحطة",
    "قبل تشغيل كيبل طويل جديد لأول مرة، تأكد من تركيب Shunt Reactors المصممة وجاهزيتها"
  ],
  "commonMistakes": [
    "إهمال Charging Current في حساب Voltage Drop للكيابل الطويلة — يُعطي نتيجة خاطئة",
    "استخدام X الخاص بـ OHL في حساب UGC — X الكيابل الأرضية أقل بكثير"
  ],
  "references": [
    "IEC 60287-1-1 — Impedance Parameters for Cable Systems",
    "CIGRÉ Technical Brochure 110 — Reactive Power Compensation",
    "SEC Planning Criteria — Voltage Limits"
  ]
},

  "c2-s5-0": {
  "title": "Routine Tests",
  "category": "التصميم والتوريد",
  "categoryEn": "Design & Procurement",
  "duration": "8 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "فهم الغرض من Routine Tests وطبيعتها",
    "معرفة الاختبارات المحددة التي تُجرى على كل طبلة كيبل",
    "تفسير نتائج Routine Tests وقرار القبول أو الرفض",
    "فهم العلاقة بين Routine Tests ونتائج FAT الشاملة"
  ],
  "content": "<h3>ما هي Routine Tests؟</h3><p><strong>Routine Tests</strong> تُجرى على <strong>كل طبلة كيبل</strong> يُنتجها المصنع. هدفها التحقق من سلامة المنتج وخلوه من العيوب التصنيعية قبل الشحن.</p><h3>Routine Tests لكيابل HV/EHV (IEC 60840 / IEC 62067)</h3><ol><li><strong>Conductor Resistance Test</strong>: قياس مقاومة الموصل DC عند 20°C</li><li><strong>AC Voltage Test (PD Free)</strong>: رفع الجهد إلى 2.5-3.5 × U₀ لمدة 30 دقيقة</li><li><strong>Partial Discharge Test</strong>: قياس PD عند U₀ — القيمة < 10 pC (HV) أو < 5 pC (EHV)</li><li><strong>Dielectric Loss Angle (tan δ)</strong>: لكيابل EHV — tan δ < 10⁻⁴</li><li><strong>Outer Jacket Test</strong>: 10 kV DC × 1 دقيقة</li></ol><h3>توثيق Routine Tests</h3><p>كل اختبار يُوثَّق في <strong>Routine Test Certificate</strong> موقّع من مختبر المصنع. رقم الطبل وطول الكيبل مدوّنان في الشهادة ويُطابَقان مع ما يصل للموقع.</p>",
  "tools": [
    {
      "name": "AC/DC HV Test Set (Factory)",
      "icon": "zap"
    },
    {
      "name": "PD Measurement System",
      "icon": "activity"
    },
    {
      "name": "Wheatstone Bridge (Resistance)",
      "icon": "settings"
    }
  ],
  "hseWarnings": [
    "حضور FAT في مصنع خارج المملكة يستلزم تنسيق تأشيرة دخول مبكر",
    "لا تقبل شهادة Routine Test دون التحقق من هوية المختبر المُصدِر (يجب أن يكون ILAC-accredited)"
  ],
  "commonMistakes": [
    "قبول Routine Test Certificate من مختبر غير معتمد (Non-ILAC) — لا قيمة قانونية له أمام SEC",
    "عدم مطابقة رقم الطبل في الشهادة مع رقم الطبل الفعلي عند الاستلام"
  ],
  "references": [
    "IEC 60840 — Clause 12: Routine Tests for HV Cables",
    "IEC 62067 — Clause 12: Routine Tests for EHV Cables",
    "SEC FAT Procedure Manual"
  ]
},

  "c2-s5-1": {
  "title": "Sample Tests",
  "category": "التصميم والتوريد",
  "categoryEn": "Design & Procurement",
  "duration": "7 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "فهم طبيعة Sample Tests والفرق بينها وبين Routine Tests",
    "معرفة عدد العينات المطلوبة وكيفية اختيارها",
    "التعرف على الاختبارات التي تُجرى ضمن Sample Tests",
    "فهم نتائج الفشل في Sample Tests وتداعياتها"
  ],
  "content": "<h3>Sample Tests — اختبارات على عينات ممثّلة</h3><p><strong>Sample Tests</strong> تُجرى على <strong>عينات مأخوذة من دفعة التوريد</strong>. تهدف لاختبار خصائص تفصيلية للمادة والتصنيع لا يمكن قياسها بشكل اقتصادي على كل وحدة.</p><h3>اختبارات Sample Tests النموذجية (IEC 60840 Clause 13)</h3><ul><li><strong>Bending Test</strong>: ثني الكيبل حول قطر مُحدد ثم Electrical Test</li><li><strong>Measurement of Insulation Thickness</strong>: قياس سماكة XLPE في نقاط متعددة</li><li><strong>Measurement of Outer Sheath Thickness</strong>: سماكة HDPE</li><li><strong>Tensile Strength & Elongation of Outer Sheath</strong>: يُثبت جودة مادة HDPE</li><li><strong>Shrinkage Test على XLPE</strong>: يُثبت درجة التشابك الكيميائي</li><li><strong>Hot Set Test (Crosslinking Test)</strong>: أهم اختبار جودة XLPE — يُقيس Elongation Under Load عند 200°C</li></ul><h3>نتائج الفشل في Sample Tests</h3><p>فشل عينة يُفضي إلى: إيقاف الشحن، إعادة الاختبار على عينات مضاعفة، وفي حالة الفشل الثاني: <strong>رفض الدفعة كاملة</strong>.</p>",
  "tools": [
    {
      "name": "Universal Testing Machine (UTM)",
      "icon": "settings"
    },
    {
      "name": "Hot Set Test Oven",
      "icon": "thermometer"
    },
    {
      "name": "Micrometer & Optical Microscope",
      "icon": "search"
    }
  ],
  "hseWarnings": [
    "Sample Tests تُجرى في مختبر المصنع — يجب على الممثل الزائر الالتزام بإجراءات سلامة المختبر",
    "الطبل الذي أُخذت منه العينة يُعاد إغلاقه بعناية — أي تلف للكيبل عند أخذ العينة يستلزم توثيقاً فورياً"
  ],
  "commonMistakes": [
    "قبول Sample Tests من دفعة سابقة على دفعة جديدة — كل دفعة إنتاج لها Sample Tests مستقلة",
    "إغفال Hot Set Test — هو الاختبار الوحيد الذي يُثبت فعلياً أن XLPE متشابك كيميائياً بشكل صحيح"
  ],
  "references": [
    "IEC 60840 — Clause 13: Sample Tests",
    "IEC 62067 — Clause 13: Sample Tests for EHV",
    "IEC 60811 — Mechanical Tests for Insulation and Sheaths"
  ]
},

  "c2-s5-2": {
  "title": "Type Tests",
  "category": "التصميم والتوريد",
  "categoryEn": "Design & Procurement",
  "duration": "9 دقائق",
  "difficulty": "متقدم",
  "objectives": [
    "فهم الغرض من Type Tests وطبيعتها الاستثنائية",
    "معرفة بروتوكول Type Tests الكامل وفق IEC 60840/62067",
    "تحديد متى تُطلب Type Tests الجديدة من المورد",
    "فهم تفسير نتائج Type Tests وشهاداتها"
  ],
  "content": "<h3>ما هي Type Tests؟</h3><p><strong>Type Tests</strong> تُجرى <strong>مرة واحدة فقط</strong> على نموذج من تصميم كيبل معين في مختبر معتمد. هدفها إثبات أن هذا التصميم مناسب لخدمة العمر الكامل (40 سنة). لا تُجرى على كل دفعة إنتاج.</p><h3>متى تُجرى Type Tests جديدة؟</h3><ul><li>عند تقديم تصميم جديد أو تعديل جوهري</li><li>عند تغيير المورد أو المصنع</li><li>عادةً صلاحية شهادة Type Test: <strong>5 سنوات</strong></li></ul><h3>بروتوكول Type Tests (IEC 60840 Clause 14)</h3><ol><li><strong>Bending Test + PD</strong>: ثني الكيبل ثم قياس PD</li><li><strong>Tan Delta Measurement</strong>: عند مستويات جهد مختلفة</li><li><strong>High Voltage Test (AC)</strong>: 4×U₀ × 4 ساعات</li><li><strong>Impulse Withstand Test (BIL)</strong>: موجة 1.2/50μs</li><li><strong>Switching Impulse Test</strong>: للجهود > 230 kV</li><li><strong>Load Cycle Test</strong>: 20 دورة تسخين/تبريد</li><li><strong>Thermal Stability Test</strong>: يُثبت الاستقرار الحراري عند الحمل الأقصى</li></ol><h3>Type Tests للملحقات</h3><p>Joints وTerminations لها Type Tests مستقلة. فشل أي مكوّن = فشل الـ Type Test كاملاً.</p>",
  "tools": [
    {
      "name": "HV Impulse Generator (Marx Generator)",
      "icon": "zap"
    },
    {
      "name": "PD Measurement System",
      "icon": "activity"
    },
    {
      "name": "Temperature Cycling Controller",
      "icon": "thermometer"
    }
  ],
  "hseWarnings": [
    "Type Tests تُجرى في مختبرات KEMA، CESI، PEHLA — لا تُجرى في الموقع أبداً",
    "الاطلاع على نتائج Type Tests يستلزم NDA في بعض الأحيان"
  ],
  "commonMistakes": [
    "قبول شهادة Type Test منتهية الصلاحية (> 5 سنوات)",
    "افتراض أن Type Tests الكيبل تُغطي الملحقات — كل منها له Type Test مستقلة"
  ],
  "references": [
    "IEC 60840 — Clause 14: Type Tests",
    "IEC 62067 — Clause 14: Type Tests for EHV",
    "CIGRÉ Technical Brochure 303 — Cable Qualification Testing"
  ]
},

  "c2-s5-3": {
  "title": "Prequalification Tests",
  "category": "التصميم والتوريد",
  "categoryEn": "Design & Procurement",
  "duration": "9 دقائق",
  "difficulty": "متقدم",
  "objectives": [
    "فهم مفهوم Prequalification Tests وضرورتها للكيابل EHV",
    "معرفة بروتوكول PQ Test الكامل (المدة، الإجهادات، معايير القبول)",
    "التمييز بين Type Tests وPrequalification Tests",
    "فهم موقع SEC من متطلبات PQ في مشاريعها"
  ],
  "content": "<h3>Prequalification Tests — اختبار عمر سنة كاملة</h3><p><strong>Prequalification Test (PQ)</strong> اختبار طويل الأمد لكيابل فوق 150 kV (EHV)، مدته <strong>12 شهراً</strong>. نصّت عليه IEC 62067 كمتطلب إلزامي لتصاميم EHV الجديدة.</p><h3>بروتوكول PQ Test (IEC 62067 Annex A)</h3><ul><li><strong>Test Object</strong>: مقطع كيبل 100 متر على الأقل مع Joint وTerminations</li><li><strong>الجهد المطبَّق</strong>: 1.7 × U₀ بشكل مستمر</li><li><strong>دورات التحميل الحراري</strong>: 180 دورة × (8 ساعات تسخين حتى 90°C + 16 ساعة تبريد)</li><li><strong>PD</strong>: قياس دوري كل شهر — يجب أن يظل < 10 pC</li><li><strong>الاختبار الختامي</strong>: HV Withstand + PD + Tan Delta</li></ul><h3>موقف SEC من PQ Test</h3><p>SEC تُطلب شهادة PQ Test سارية لجميع مشاريع <strong>380 kV و230 kV</strong>. يُقبل PQ Test من: KEMA، CESI، PEHLA، IREQ.</p>",
  "tools": [
    {
      "name": "Long Duration HV Test System",
      "icon": "zap"
    },
    {
      "name": "PD Online Monitoring System",
      "icon": "activity"
    },
    {
      "name": "Thermal Monitoring (DTS)",
      "icon": "thermometer"
    }
  ],
  "hseWarnings": [
    "PQ Test يستغرق سنة كاملة — يجب تضمين هذه المدة في جدول المشروع إذا كان المورد يحتاجها",
    "التحقق من تاريخ انتهاء شهادة PQ — شهادة أُنجزت قبل 10+ سنوات على تصميم مُعدَّل لا تُجزئ"
  ],
  "commonMistakes": [
    "قبول PQ Test على تصميم مختلف قليلاً دون الرجوع لـ SEC Technical Standards",
    "الخلط بين PQ Test وType Test — PQ Test أشمل وأطول ويُغطي الطويل المدى"
  ],
  "references": [
    "IEC 62067 — Annex A: Prequalification Tests for EHV",
    "CIGRÉ Technical Brochure 303 — Testing of HV/EHV Cable Systems",
    "SEC TMSS — Prequalification Requirements for EHV Cables"
  ]
},

  "c2-s6-0": {
  "title": "Nexans",
  "category": "التصميم والتوريد",
  "categoryEn": "Design & Procurement",
  "duration": "6 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "التعرف على Nexans كمورد رئيسي في مشاريع SEC",
    "معرفة نطاق منتجات Nexans لجهود الشبكة السعودية",
    "فهم موقع Nexans في قائمة الموردين المعتمدين لدى SEC",
    "التعرف على المشاريع الرئيسية لـ Nexans في المملكة"
  ],
  "content": "<h3>Nexans — شركة الكيابل الفرنسية العالمية</h3><p><strong>Nexans</strong> من أكبر ثلاثة مصنعي كيابل في العالم. تمتلك مصانع في أوروبا وأمريكا وآسيا. محل اعتماد قوي في قائمة SEC Approved Vendor List لجهود 33 kV حتى 380 kV.</p><h3>أبرز منتجات Nexans في السوق السعودي</h3><ul><li><strong>XLPE Cables EHV</strong>: كيابل 380 kV و230 kV بموصلات Milliken حتى 2500mm²</li><li><strong>XLPE HV Cables</strong>: كيابل 110-132 kV بمقاطع 630-1600mm² Cu/Al</li><li><strong>Joints &amp; Terminations</strong>: تحت علامة Nexans accessories أو Euromold</li><li><strong>Fiber Optic Cables</strong>: OPGW، ADSS، Direct Buried Fiber</li></ul><h3>نقاط القوة التقنية</h3><ul><li>تقنية <strong>Milliken Conductor</strong> للمقاطع الكبيرة لتقليل Skin Effect</li><li>نظام <strong>Easyclean XLPE</strong> لتقليل مستوى PD</li><li>خبرة واسعة في EHV بشهادات PQ متعددة</li></ul>",
  "tools": [
    {
      "name": "Nexans Product Catalog",
      "icon": "book-open"
    },
    {
      "name": "Cable Drum Handling Equipment",
      "icon": "box"
    }
  ],
  "hseWarnings": [
    "كيابل Nexans EHV أوزانها ضخمة (حتى 50+ طن/طبل) — يتطلب رافعة ذات قدرة مناسبة",
    "حفظ Drum في وضع رأسي مستقيم دائماً — التحويل للوضع الأفقي دون إذن Nexans يُلغي الضمان"
  ],
  "commonMistakes": [
    "قبول ملحقات من جهة غير معتمدة من Nexans مع كيابل Nexans — يُلغي الضمان",
    "إهمال التحقق من تاريخ إنتاج الطبل — كيابل XLPE مخزنة > 2 سنة قد تحتاج إعادة اختبار"
  ],
  "references": [
    "Nexans Technical Catalog — HV/EHV Cables",
    "SEC Approved Vendor List — Cable Section",
    "IEC 62067 — Nexans Prequalification Test Reports"
  ]
},

  "c2-s6-1": {
  "title": "Prysmian",
  "category": "التصميم والتوريد",
  "categoryEn": "Design & Procurement",
  "duration": "5 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "التعرف على Prysmian كأكبر مصنع كيابل في العالم",
    "معرفة نطاق منتجات Prysmian في شبكة SEC",
    "فهم تقنيات Prysmian الخاصة المتعلقة بمشاريع EHV",
    "التعرف على الحضور الإقليمي لـ Prysmian في السوق السعودي"
  ],
  "content": "<h3>Prysmian Group — الأكبر عالمياً في صناعة الكيابل</h3><p><strong>Prysmian</strong> (إيطاليا) أكبر مصنع كيابل في العالم بمبيعات تتجاوز 14 مليار يورو سنوياً.</p><h3>التقنيات الحصرية لـ Prysmian</h3><ul><li><strong>P-Laser Technology</strong>: XLPE بدرجة نقاء فائقة تُقلل PD بشكل استثنائي</li><li><strong>Milliken Conductor</strong>: للمقاطع فوق 1200mm² لتقليل Skin Effect</li><li><strong>DryCure XLPE</strong>: تشابك كيميائي جاف يُقلل احتمال Water Treeing</li></ul><h3>نطاق المنتجات في السوق السعودي</h3><ul><li>كيابل XLPE من 11 kV حتى 500 kV</li><li>Joints وTerminations تحت علامة Prysmian وKabelmetal</li><li>كيابل الاتصالات الفايبر (OPGW، ADSS، Composite)</li></ul>",
  "tools": [
    {
      "name": "Prysmian Product Catalog",
      "icon": "book-open"
    },
    {
      "name": "P-Laser PD Test Certificate",
      "icon": "file-text"
    }
  ],
  "hseWarnings": [
    "كيابل 380 kV من Prysmian P-Laser تتطلب بروتوكول خاص للتعامل مع الطبل",
    "Joint Kits لكيابل Prysmian لا تتبادل مع كيابل Nexans أو NKT"
  ],
  "commonMistakes": [
    "الاعتقاد بأن P-Laser Technology تعني الكيبل بلا PD كلياً — التقليل الكبير لا يعني الصفر",
    "استخدام Jointing Instructions لكيبل قديم على كيبل P-Laser جديد — الإجراءات مختلفة"
  ],
  "references": [
    "Prysmian Group Technical Catalog — EHV Cables",
    "IEC 62067 — Prysmian PQ Test Certificates",
    "SEC Approved Vendor List"
  ]
},

  "c2-s6-2": {
  "title": "NKT",
  "category": "التصميم والتوريد",
  "categoryEn": "Design & Procurement",
  "duration": "5 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "التعرف على NKT كمورد متخصص في كيابل الجهد العالي",
    "معرفة نطاق منتجات NKT المناسبة لمشاريع SEC",
    "فهم ميزة NKT في سوق EHV",
    "معرفة الحضور الإقليمي لـ NKT في منطقة الشرق الأوسط"
  ],
  "content": "<h3>NKT — المتخصص الاسكندنافي في HV/EHV</h3><p><strong>NKT</strong> (الدنمارك/ألمانيا) تُركز على <strong>كيابل الجهد العالي والعالي جداً</strong>، مما يجعلها منافساً قوياً في هذا القطاع.</p><h3>نقاط القوة</h3><ul><li>رائدة في <strong>HVDC Cables</strong> — مهم لمشاريع ربط الشبكات الإقليمية</li><li>خبرة واسعة في <strong>Offshore Submarine Cables</strong> — ذات صلة بمشاريع NEOM</li><li>Accessories System متكامل لجميع مستويات الجهد</li></ul><h3>المنتجات في نطاق SEC</h3><ul><li>XLPE AC Cables: 110 kV حتى 420 kV</li><li>HVDC Cables للمشاريع المستقبلية</li><li>Joint &amp; Termination Systems</li></ul>",
  "tools": [
    {
      "name": "NKT Product Catalog",
      "icon": "book-open"
    },
    {
      "name": "HVDC System Design Tools",
      "icon": "cpu"
    }
  ],
  "hseWarnings": [
    "NKT Accessories Systems مختلفة عن الموردين الآخرين — لا تستخدم NKT Joints على كيابل Nexans أو العكس",
    "كيابل NKT HVDC تتطلب مهارات خاصة — فريق مؤهل من NKT مباشرة للمشاريع الكبرى"
  ],
  "commonMistakes": [
    "تطبيق معرفة HVAC Jointing على HVDC Cables — إجراءات مختلفة جذرياً",
    "إغفال أن بعض مواصفات NKT تستلزم Jointing Instructions خاصة بكل مشروع"
  ],
  "references": [
    "NKT Technical Catalog — HV & EHV Cables",
    "IEC 62067 — NKT Type Test Certificates",
    "CIGRÉ — HVDC Cable Technology Review"
  ]
},

  "c2-s6-3": {
  "title": "LS Cable",
  "category": "التصميم والتوريد",
  "categoryEn": "Design & Procurement",
  "duration": "5 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "التعرف على LS Cable كمورد آسيوي رئيسي معتمد لدى SEC",
    "معرفة نطاق منتجات LS Cable وقدراتها التصنيعية",
    "فهم الميزة التنافسية لـ LS Cable",
    "معرفة متطلبات التحقق الخاصة عند التعامل مع موردين آسيويين"
  ],
  "content": "<h3>LS Cable & System — الكوري العملاق</h3><p><strong>LS Cable & System</strong> (كوريا الجنوبية) من أكبر مصنعي الكيابل في آسيا وأحد العشرة الكبار عالمياً.</p><h3>نطاق المنتجات</h3><ul><li>كيابل XLPE من 22 kV حتى 345 kV</li><li>Joints وTerminations لجميع مستويات الجهد</li><li>كيابل الاتصالات الفايبر (OPGW، ADSS)</li><li>كيابل التوزيع (11 kV، 33 kV) بكميات كبيرة</li></ul><h3>نقاط القوة التنافسية</h3><ul><li><strong>السعر</strong>: عادةً أقل بـ 10-20% من الموردين الأوروبيين</li><li><strong>سرعة التسليم</strong>: طاقة إنتاجية عالية</li><li><strong>الجودة</strong>: شهادات Type Tests من KEMA وKERI</li></ul><h3>اعتبارات خاصة</h3><p>عند التعامل مع أي مورد آسيوي: التحقق من أن شهادات Type Tests من مختبرات ILAC-accredited، والتأكيد على حضور FAT بشكل إلزامي.</p>",
  "tools": [
    {
      "name": "LS Cable Product Catalog",
      "icon": "book-open"
    },
    {
      "name": "Factory Audit Checklist",
      "icon": "check-circle"
    }
  ],
  "hseWarnings": [
    "التحقق من شهادات FAT قبل الشحن إلزامي — المسافة تجعل العودة مكلفة",
    "ضمان توافق وحدات Drum مع الرافعات المتوفرة في الموقع"
  ],
  "commonMistakes": [
    "الاعتماد على أسعار LS Cable دون احتساب تكاليف الشحن البحري والجمارك",
    "إغفال وقت الشحن من كوريا (4-6 أسابيع) في جدول المشروع"
  ],
  "references": [
    "LS Cable & System Technical Catalog",
    "SEC Approved Vendor List",
    "IEC 60840 / 62067 — LS Cable Type Test Certificates"
  ]
},

  "c2-s6-4": {
  "title": "SCC / Saudi Cable",
  "category": "التصميم والتوريد",
  "categoryEn": "Design & Procurement",
  "duration": "6 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "التعرف على شركة Saudi Cable Company (SCC) وتاريخها",
    "معرفة نطاق منتجات SCC المعتمدة لدى SEC",
    "فهم ميزة المحتوى المحلي في تعاملات SEC مع SCC",
    "معرفة القدرات الإنتاجية لـ SCC وحدودها"
  ],
  "content": "<h3>Saudi Cable Company (SCC) — الرائد الوطني</h3><p><strong>شركة الكيابل السعودية (SCC)</strong> مقرها جدة، تأسست عام 1975. تمتلك قدرات إنتاجية لكيابل من 11 kV حتى 132 kV.</p><h3>نطاق المنتجات المعتمدة في SEC</h3><ul><li><strong>كيابل التوزيع</strong>: 11 kV، 13.8 kV، 33 kV</li><li><strong>كيابل النقل الفرعي</strong>: 69 kV</li><li><strong>كيابل النقل</strong>: حتى 132 kV</li><li><strong>كيابل القدرة المنخفضة</strong>: LV Cables</li></ul><h3>ميزة المحتوى المحلي (Local Content)</h3><p>ضمن برنامج رؤية 2030، SCC تحظى بأفضلية واضحة في مناقصات SEC. الاشتراطات الحكومية قد تُلزم بنسبة محتوى محلي ≥ 30-40% في بعض العقود.</p><h3>نقاط يجب مراعاتها</h3><ul><li>SCC لا تُنتج حالياً كيابل EHV (380 kV، 230 kV) بشكل تنافسي</li><li>تقدم SCC خدمات تقنية ودعماً لوجستياً محلياً</li></ul>",
  "tools": [
    {
      "name": "SCC Product Catalog",
      "icon": "book-open"
    },
    {
      "name": "Local Content Calculator",
      "icon": "file-text"
    }
  ],
  "hseWarnings": [
    "كيابل SCC الواردة من المصنع في جدة تُفحص بنفس صرامة الكيابل الواردة من الخارج — لا تنازل في FAT",
    "الكيابل المخزنة في مستودعات SCC > سنة تحتاج اختبار إعادة تأهيل قبل التركيب"
  ],
  "commonMistakes": [
    "افتراض أن الكيابل المحلية لا تحتاج FAT لأن المصنع قريب — FAT واجبة بغض النظر عن موقع المصنع",
    "تحميل SCC مسؤولية توريد EHV في مشاريع 230/380 kV — خارج نطاق قدراتها الحالية"
  ],
  "references": [
    "SCC Technical Catalog",
    "SEC Approved Vendor List",
    "Vision 2030 Local Content Program — Energy Sector"
  ]
},

  "c2-s6-5": {
  "title": "Riyadh Cables",
  "category": "التصميم والتوريد",
  "categoryEn": "Design & Procurement",
  "duration": "5 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "التعرف على شركة Riyadh Cables وموقعها في السوق السعودي",
    "معرفة نطاق منتجات Riyadh Cables في مشاريع SEC",
    "فهم التخصص الجغرافي لـ Riyadh Cables",
    "مقارنة Riyadh Cables مع SCC وJeddah Cables"
  ],
  "content": "<h3>شركة Riyadh Cables</h3><p><strong>Riyadh Cables Group</strong> تُركز على كيابل التوزيع والقدرة المنخفضة والمتوسطة، وتُعدّ من الموردين الرئيسيين لـ SEC في المنطقة الوسطى.</p><h3>نطاق المنتجات</h3><ul><li><strong>LV Power Cables</strong>: 0.6/1 kV بمختلف المقاطع</li><li><strong>MV Cables</strong>: 11 kV، 13.8 kV، 33 kV (XLPE)</li><li><strong>Sub-Transmission</strong>: 69 kV في بعض المشاريع</li><li><strong>Control Cables</strong>: للمحطات والمنشآت الصناعية</li><li><strong>Aluminum Conductors (ACSR)</strong>: للخطوط الهوائية</li></ul><h3>نقاط التميز</h3><ul><li>قرب المصنع من مشاريع المنطقة الوسطى يُخفض تكاليف الشحن</li><li>قدرة على تلبية طلبات غير قياسية (Custom Orders) بمرونة</li><li>خدمة ما بعد البيع محلية</li></ul>",
  "tools": [
    {
      "name": "Riyadh Cables Product Catalog",
      "icon": "book-open"
    },
    {
      "name": "MV Cable Selection Chart",
      "icon": "layers"
    }
  ],
  "hseWarnings": [
    "حتى كيابل LV من Riyadh Cables تحتاج Drum Test Certificate — لا تركّب أي كيبل دون وثائقه",
    "تخزين كيابل LV/MV في درجات حرارة > 50°C يُدهور HDPE Jacket"
  ],
  "commonMistakes": [
    "طلب كيابل 69 kV من Riyadh Cables دون التحقق مسبقاً من توفر Type Tests المناسبة",
    "إغفال تحديد تعليمات التخزين للمقاول — الكيابل المخزنة بشكل خاطئ تتلف قبل التركيب"
  ],
  "references": [
    "Riyadh Cables Technical Catalog",
    "SEC DMS — Distribution Cable Specifications",
    "IEC 60502-1/2 — MV Cable Standards"
  ]
},

  "c2-s6-6": {
  "title": "Jeddah Cables",
  "category": "التصميم والتوريد",
  "categoryEn": "Design & Procurement",
  "duration": "5 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "التعرف على شركة Jeddah Cables وتخصصها في السوق",
    "معرفة نطاق منتجات Jeddah Cables ومواصفاتها",
    "فهم موقع Jeddah Cables في منافسات مشاريع SEC الغربية",
    "مقارنة المزايا والقيود مقارنةً بـ SCC وRiyadh Cables"
  ],
  "content": "<h3>Jeddah Cables Company</h3><p><strong>Jeddah Cables</strong> شركة وطنية متخصصة في إنتاج كيابل القدرة والاتصالات، تعمل بشكل رئيسي في خدمة مشاريع المنطقة الغربية.</p><h3>نطاق المنتجات</h3><ul><li><strong>MV Distribution Cables</strong>: 11 kV، 33 kV (XLPE)</li><li><strong>LV Power Cables</strong>: بمختلف المواصفات</li><li><strong>Armored Cables</strong>: للمنشآت الصناعية والبترولية</li><li><strong>Control &amp; Instrumentation Cables</strong></li></ul><h3>الميزة الجغرافية</h3><p>قرب المصنع من مشاريع جدة ومكة يُمثل ميزة لوجستية في التسليم السريع. خاصةً في مشاريع الحج والعمرة ذات الجداول الضيقة.</p><h3>ملاحظات عامة للموردين الوطنيين الثلاثة</h3><p>الثلاثي الوطني (SCC، Riyadh Cables، Jeddah Cables) يُوفر تغطية جغرافية جيدة للمملكة. التوجه المستقبلي هو دفع هذه الشركات لرفع قدراتها نحو كيابل HV أعلى.</p>",
  "tools": [
    {
      "name": "Jeddah Cables Product Catalog",
      "icon": "book-open"
    },
    {
      "name": "MV Distribution Cable Spec Sheet",
      "icon": "file-text"
    }
  ],
  "hseWarnings": [
    "شهادات اختبار كيابل Jeddah Cables يجب التحقق من أنها من مختبرات معتمدة",
    "الكيابل الواردة من أي مورد محلي تخضع لنفس شروط استقبال المواد"
  ],
  "commonMistakes": [
    "اختيار المورد الأقل سعراً دون التحقق من قائمة Approved Vendors الخاصة بالمشروع",
    "الجمع بين كيابل من مورد واحد وملحقات من مورد آخر غير متوافق"
  ],
  "references": [
    "Jeddah Cables Technical Catalog",
    "SEC DMS — Distribution Material Standards",
    "IEC 60502-2 — Medium Voltage Cables"
  ]
},

  // ===== c3: الأعمال المدنية والسحب =====
  "c3-s1-0": {
  "title": "Site Survey",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "8 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "فهم أهداف Site Survey قبل بدء الأعمال المدنية",
    "معرفة البيانات التي يجب جمعها وتوثيقها في المسح الميداني",
    "إعداد Site Survey Report مطابق لمتطلبات SEC",
    "ربط نتائج المسح بقرارات التصميم والتنفيذ"
  ],
  "content": "<h3>ما هو Site Survey؟</h3><p><strong>Site Survey</strong> هو المسح الميداني الشامل الذي يُجريه فريق المقاول قبل أي عمل حفر أو تنفيذ. هدفه <strong>التحقق من أن الواقع الميداني يتطابق مع الرسومات</strong>، واكتشاف أي تعارضات أو مستجدات لم تظهر في مرحلة التصميم.</p><h3>عناصر Site Survey الكاملة</h3><ul><li><strong>Topographic Survey</strong>: رفع كنتورات الأرض والارتفاعات (Levels) على طول المسار</li><li><strong>Utility Survey</strong>: تحديد جميع الخدمات الموجودة (GPR + Cable Locator) وتوثيقها على الخريطة</li><li><strong>Existing Structures</strong>: جرد المباني والأسوار والجسور وأعمدة الإنارة على المسار</li><li><strong>Road Conditions</strong>: توثيق حالة الأسفلت (طبقاته، سماكاته) قبل الحفر</li><li><strong>Access Points</strong>: تحديد نقاط الدخول للمعدات الثقيلة ومناطق تخزين الطبل</li></ul><h3>التوثيق المطلوب</h3><p>يُعدّ <strong>Site Survey Report</strong> يشمل: خريطة المسار المُحدَّثة، صور فوتوغرافية مُرقَّمة، جدول الخدمات المكتشفة، وتوصيات التعامل مع كل عائق. يُقدَّم للاستشاري في غضون 5-7 أيام.</p><h3>Site Survey مقابل Route Survey</h3><p>Route Survey هو مسح التصميم الأولي — Site Survey هو التحقق الميداني قبل التنفيذ. Site Survey يُجريه المقاول ويُصادق عليه الاستشاري.</p>",
  "tools": [
    {
      "name": "RTK-GPS Rover",
      "icon": "map-pin"
    },
    {
      "name": "GPR System",
      "icon": "radio"
    },
    {
      "name": "Digital Camera",
      "icon": "camera"
    },
    {
      "name": "Total Station",
      "icon": "ruler"
    }
  ],
  "hseWarnings": [
    "فريق Site Survey على الطرق يستلزم Traffic Management Plan معتمد + ملابس Hi-Vis",
    "عند استخدام GPR قرب كيابل كهربائية حية، تأكد من المسافة الآمنة ≥ 2m"
  ],
  "commonMistakes": [
    "إجراء Site Survey في وقت غير مناسب مما يُعطي بيانات غير دقيقة",
    "الاكتفاء بمسح خط المسار فقط دون مسح عرضي (±5m على كل جانب)",
    "عدم توثيق حالة الأسفلت بالصور قبل الحفر — يُسبب نزاعات في مرحلة الاستعادة"
  ],
  "references": [
    "SEC Civil Works Specification — Site Investigation",
    "PAS 128 — Specification for Underground Utility Detection",
    "BS 5930 — Code of Practice for Site Investigations"
  ]
},

  "c3-s1-1": {
  "title": "Utility Detection",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "9 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "إتقان منهجية كشف الخدمات المدفونة بشكل منهجي وموثوق",
    "دمج GPR وEM Locator وTrial Pits في نظام كشف متكامل",
    "فهم مستويات جودة الكشف (Quality Levels A/B/C/D) وفق PAS 128",
    "إعداد Utility Map دقيقة تُستخدم في التنفيذ"
  ],
  "content": "<h3>لماذا Utility Detection حرجة جداً؟</h3><p>في السعودية، قُدّرت نسبة الخدمات غير الموثقة بـ <strong>30-50%</strong> في المدن القديمة. ضرب كيبل كهربائي حي = خطر وفاة + انقطاع خدمة + غرامات.</p><h3>مستويات جودة الكشف (PAS 128)</h3><ul><li><strong>QL-D</strong>: الاكتفاء بالخرائط الرسمية فقط — أدنى موثوقية</li><li><strong>QL-C</strong>: QL-D + GPR Survey</li><li><strong>QL-B</strong>: QL-C + EM Locator</li><li><strong>QL-A</strong>: QL-B + Trial Pits — أعلى مستوى</li></ul><p>SEC تُطلب <strong>QL-B كحد أدنى</strong> وQL-A في المناطق الحرجة.</p><h3>المنهجية المتكاملة</h3><ol><li>جمع الخرائط الرسمية من جميع الجهات</li><li>GPR Survey على طول المسار</li><li>EM Locator Active Mode لتتبع كل خدمة موصلة</li><li>وضع Flags ملونة على الأرض</li><li>Trial Pits عند كل تقاطع أو نقطة غير واضحة</li><li>رسم Utility Map نهائية على CAD</li></ol><h3>ألوان الترميز القياسية</h3><ul><li>أحمر: كهرباء | برتقالي: اتصالات | أصفر: غاز | أزرق: مياه | أخضر: صرف صحي</li></ul>",
  "tools": [
    {
      "name": "GPR (GSSI SIR-4000)",
      "icon": "radio"
    },
    {
      "name": "EM Locator (RD8100)",
      "icon": "activity"
    },
    {
      "name": "Vacuum Excavator",
      "icon": "wind"
    },
    {
      "name": "Utility Marking Flags",
      "icon": "map-pin"
    }
  ],
  "hseWarnings": [
    "Trial Pit قرب كيابل كهربائية: حفر يدوي فقط على بُعد < 500mm",
    "أي شك في وجود أنبوب غاز → Vacuum Excavation إلزامي + Gas Detector مستمر"
  ],
  "commonMistakes": [
    "إجراء EM Locator بـ Passive Mode فقط — يُغفل الكيابل الصامتة",
    "عدم توثيق مواقع Trial Pits بإحداثيات GPS دقيقة",
    "إغفال أن بعض كيابل الاتصالات دُفنت بعمق 0.3m فقط"
  ],
  "references": [
    "PAS 128:2022 — Specification for Underground Utility Detection",
    "ASTM D6432 — Standard Guide for GPR",
    "SEC Civil Works Manual — Utility Detection Procedures"
  ]
},

  "c3-s1-2": {
  "title": "Method Statement (MS)",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "9 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "فهم الغرض من Method Statement وهيكله الإلزامي",
    "معرفة محتويات MS لأعمال الحفر وسحب الكيابل والوصلات",
    "إعداد MS مطابق لمتطلبات SEC",
    "فهم عملية الاعتماد وتسلسل الموافقات"
  ],
  "content": "<h3>ما هو Method Statement؟</h3><p><strong>Method Statement (MS)</strong> وثيقة تقنية يُعدّها المقاول تصف بالتفصيل كيفية تنفيذ نشاط محدد. لا يبدأ أي نشاط حرج دون اعتماد MS مسبق.</p><h3>هيكل Method Statement النموذجي</h3><ol><li>Scope of Work: وصف النشاط وحدوده</li><li>References: المواصفات والمعايير المطبقة</li><li>Personnel & Responsibilities: الكوادر ومؤهلاتهم</li><li>Equipment & Materials: قائمة المعدات مع شهادات المعايرة</li><li>Pre-Activity Checks: ما يجب التحقق منه قبل البدء</li><li>Step-by-Step Procedure: الخطوات التنفيذية بالتفصيل</li><li>Quality Control Points: نقاط الفحص ومعايير القبول</li><li>HSE Requirements: المخاطر وإجراءات التحكم</li><li>Environmental Controls: التحكم في الغبار والضوضاء والنفايات</li><li>Emergency Procedures: ماذا نفعل عند الحوادث</li></ol><h3>عملية الاعتماد</h3><p>MS يُرفع للاستشاري → تعليقات خلال 5-7 أيام → تعديل ورفع نسخة جديدة → اعتماد بختم. نسخة معتمدة فقط تُستخدم في الموقع.</p>",
  "tools": [
    {
      "name": "MS Template (Word)",
      "icon": "file-text"
    },
    {
      "name": "Risk Matrix Tool",
      "icon": "alert-triangle"
    },
    {
      "name": "Document Control System",
      "icon": "hard-drive"
    }
  ],
  "hseWarnings": [
    "تنفيذ نشاط حرج بدون MS معتمد = Non-Conformance فوري وإيقاف العمل من SEC",
    "MS معتمد لا يعني تخليصاً من مسؤولية الحوادث"
  ],
  "commonMistakes": [
    "نسخ MS من مشروع سابق دون تعديل تفاصيل المشروع الحالي",
    "كتابة MS عاماً دون ذكر أرقام معدات محددة وأسماء الأفراد المسؤولين",
    "إهمال تحديث MS عند تغيير المعدات أو الكوادر أثناء التنفيذ"
  ],
  "references": [
    "SEC Project Execution Manual — Method Statement Requirements",
    "ISO 9001 — Document Control Procedures",
    "OHSAS 18001 / ISO 45001 — HSE Risk Assessment in MS"
  ]
},

  "c3-s1-3": {
  "title": "Risk Assessment (RA)",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "8 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "فهم منهجية تقييم المخاطر في أعمال UGC",
    "بناء Risk Matrix لنشاط ميداني كامل",
    "تحديد إجراءات التحكم المناسبة لكل خطر",
    "إعداد RA مطابق لمتطلبات SEC / OHSAS 18001"
  ],
  "content": "<h3>ما هو Risk Assessment؟</h3><p><strong>Risk Assessment (RA)</strong> عملية منهجية لتحديد المخاطر، تقييم احتمالية حدوثها وشدة عواقبها، ووضع إجراءات تحكم لتقليلها إلى مستوى مقبول (ALARP).</p><h3>منهجية Risk Assessment (5 خطوات)</h3><ol><li>تحديد الأخطار (Hazard Identification)</li><li>تحديد من قد يتضرر: عمال، جمهور، بيئة</li><li>تقييم المخاطر: Risk = Likelihood × Severity على مصفوفة 5×5</li><li>إجراءات التحكم (Hierarchy): Elimination → Substitution → Engineering → Admin → PPE</li><li>المراجعة والتحديث عند تغيير النشاط أو حدوث Near Miss</li></ol><h3>أمثلة على مخاطر UGC</h3><ul><li><strong>الضرب العرضي لكيبل حي</strong>: Risk=15 (High) → Control: GPR + Trial Pit + Vacuum Excavator</li><li><strong>انهيار جدار الحفر</strong>: Risk=12 → Control: Shoring + Trench Box + Soil Assessment</li><li><strong>الصدمة الكهربائية من HV Test Set</strong>: Risk=10 → Control: Exclusion Zone + PTW</li></ul>",
  "tools": [
    {
      "name": "Risk Matrix Template (Excel)",
      "icon": "file-text"
    },
    {
      "name": "JSA Form",
      "icon": "check-circle"
    },
    {
      "name": "Incident Reporting System",
      "icon": "alert-triangle"
    }
  ],
  "hseWarnings": [
    "Risk Assessment يجب مراجعته في الموقع مع الفريق قبل بدء كل نشاط",
    "أي Near Miss يجب إعادة مراجعة RA فوراً"
  ],
  "commonMistakes": [
    "تقييم المخاطر على الورق فقط دون Toolbox Talk مع العمال",
    "عدم تحديث RA عند تغيير ظروف الموقع",
    "إعطاء كل خطر درجة منخفضة لتسهيل اعتماد الوثيقة — ممارسة خطيرة"
  ],
  "references": [
    "ISO 45001:2018 — Occupational Health and Safety",
    "SEC HSE Management System — Risk Assessment Procedure",
    "OHSAS 18001 — Hazard Identification and Risk Assessment"
  ]
},

  "c3-s1-4": {
  "title": "Permit to Work (PTW)",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "8 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "فهم نظام PTW في SEC وأهميته للسلامة",
    "معرفة أنواع التصاريح وشروط إصدار كل منها",
    "إتقان إجراءات طلب واستلام وإعادة PTW",
    "فهم ما يُلغي PTW وإجراءات الطوارئ"
  ],
  "content": "<h3>Permit to Work (PTW) — درع السلامة الأول</h3><p>نظام تصاريح العمل يُضمن أن الأعمال الخطرة تُنفَّذ بعد اتخاذ جميع الاحتياطات اللازمة وبإذن صريح. في SEC/GRIDCO، لا يُعمل على أي جهاز كهربائي دون PTW ساري.</p><h3>أنواع PTW في مشاريع UGC</h3><ul><li>Civil Works Permit: للحفر والأعمال المدنية</li><li>Electrical Work Permit (High Voltage): يستلزم LOTO كامل</li><li>Hot Work Permit: للحام وأعمال النار</li><li>Confined Space Entry Permit: للمناهيل والغرف المغلقة</li><li>Excavation Permit: بجانب كيابل أو بنية تحتية حيوية</li></ul><h3>إجراء PTW</h3><ol><li>طلب PTW كتابي من المقاول لـ SEC/GRIDCO</li><li>مراجعة الطلب من مهندس SEC</li><li>الاستلام والإقرار — موقّع من الطرفين</li><li>تنفيذ العمل ضمن النطاق والزمن المحددين</li><li>إعادة PTW عند انتهاء العمل</li></ol><h3>ما يُلغي PTW فوراً</h3><ul><li>اكتشاف ظرف غير متوقع | حادث أو Near Miss | تغيير نطاق العمل | انقضاء الصلاحية</li></ul>",
  "tools": [
    {
      "name": "PTW Form (SEC Standard)",
      "icon": "file-text"
    },
    {
      "name": "LOTO Lock & Tag Set",
      "icon": "shield"
    },
    {
      "name": "Voltage Detector",
      "icon": "zap"
    }
  ],
  "hseWarnings": [
    "البدء بأي عمل كهربائي بدون PTW صادر من SEC = جريمة يُعاقب عليها قانوناً في السعودية",
    "PTW لشخص واحد لا يُحوَّل لشخص آخر — كل تغيير يستلزم إعادة إصدار"
  ],
  "commonMistakes": [
    "تجاوز نطاق العمل المحدد في PTW معتقداً أن الفارق بسيط",
    "عدم إعادة PTW عند انقضاء وقت العمل"
  ],
  "references": [
    "SEC Safety Rules — Permit to Work System",
    "IEC 60900 — Live Working Safety",
    "ISO 45001 — Control of Work Permit Requirements"
  ]
},

  "c3-s2-0": {
  "title": "Asphalt Cutting",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "7 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "معرفة معايير قطع الأسفلت المطابقة لمتطلبات SEC والبلديات",
    "اختيار معدات القطع المناسبة وتشغيلها بأمان",
    "تحديد عروض الخندق حسب الجهد وعدد الدوائر",
    "فهم اشتراطات استعادة الطريق بعد الردم"
  ],
  "content": "<h3>Asphalt Cutting — البداية الصحيحة للخندق</h3><p>القطع الصحيح للأسفلت هو الخطوة الأولى في الأعمال المدنية. المعيار: <strong>Saw Cut مستقيم ونظيف بماكينة قطع رطبة (Wet Diamond Saw)</strong>.</p><h3>عروض الخندق (SEC)</h3><ul><li>كيابل 11-33 kV، دائرة واحدة: عرض 600-800mm</li><li>كيابل 110 kV، دائرة واحدة: عرض 1000-1200mm</li><li>كيابل 110 kV، دائرتان: عرض 1400-1600mm</li><li>كيابل 380 kV، دائرة واحدة: عرض 1500-2000mm</li></ul><h3>إجراءات ما بعد القطع</h3><p>رفع قطع الأسفلت، وضع حواجز على طول الخندق المفتوح. يُحظر ترك خندق مفتوح بدون حواجز ليلاً.</p>",
  "tools": [
    {
      "name": "Wet Diamond Saw Cutter",
      "icon": "scissors"
    },
    {
      "name": "Water Tanker (للتبريد)",
      "icon": "droplet"
    },
    {
      "name": "Traffic Cones & Barriers",
      "icon": "alert-triangle"
    }
  ],
  "hseWarnings": [
    "القطع الجاف مُحظور في المناطق السكانية — الغبار الناعم مُسرطن",
    "ماكينة القطع تُصدر ضجيجاً > 100 dB — واقيات سمع إلزامية"
  ],
  "commonMistakes": [
    "قطع الأسفلت بعرض أكبر من الضروري — يُضاعف تكاليف الاستعادة",
    "عدم استخدام Chalk Line قبل القطع — يُنتج خندقاً متعرجاً"
  ],
  "references": [
    "SEC Civil Works Standard Specification",
    "Amanah Riyadh — Road Opening & Reinstatement Guide",
    "BS 7533 — Pavement Reinstatement after Excavation"
  ]
},

  "c3-s2-1": {
  "title": "Excavation",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "9 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "معرفة أعماق الحفر المعيارية لكل مستوى جهد في شبكة SEC",
    "اختيار معدات الحفر المناسبة لكل نوع تربة",
    "التعامل مع الطوارئ أثناء الحفر",
    "ضمان استقامة قاع الخندق وتدرّجاته الصحيحة"
  ],
  "content": "<h3>أعماق الحفر المعيارية (SEC TMSS)</h3><ul><li>11-33 kV: عمق 0.8-1.0 متر</li><li>69 kV: عمق 1.0 متر</li><li>110-132 kV: عمق 1.25 متر</li><li>230-380 kV: عمق 1.75 متر</li><li>عبور الطرق الرئيسية: +0.5 متر</li><li>عبور الأودية: 2.0-3.0 متر</li></ul><h3>معدات الحفر</h3><ul><li>Backhoe Loader (JCB): للخناديق الضيقة حتى 3m — الأكثر استخداماً</li><li>Mini Excavator: للمناطق الضيقة والأرصفة</li><li>Vacuum Excavator: بجانب الخدمات الحيوية</li></ul><h3>جودة الحفر</h3><ul><li>استقامة قاع الخندق: انحراف ≤ ±10mm/m</li><li>تدرّج الانحدار: 1:500 نحو نقاط التصريف</li><li>نظافة القاع: إزالة الحصى الكبير قبل وضع الرمل</li></ul>",
  "tools": [
    {
      "name": "Backhoe Loader (JCB)",
      "icon": "settings"
    },
    {
      "name": "Laser Level",
      "icon": "ruler"
    },
    {
      "name": "Vacuum Excavator",
      "icon": "wind"
    }
  ],
  "hseWarnings": [
    "الحفر بعمق > 1.2 متر دون Shoring — خطر انهيار يُودي بحياة العمال (OSHA Trenching Rule)",
    "لا تدخل الخندق قبل تركيب Trench Box أو Shoring المناسب"
  ],
  "commonMistakes": [
    "ترك حواف الخندق العلوية مهشّمة دون قطع نظيف",
    "الحفر أعمق من المطلوب دون سبب مبرر",
    "إهمال قياس عمق الخندق بشكل منتظم"
  ],
  "references": [
    "SEC TMSS — Trench Dimensions and Depths",
    "OSHA 29 CFR 1926 Subpart P — Excavations",
    "BS 6031 — Code of Practice for Earthworks"
  ]
},

  "c3-s2-2": {
  "title": "Shoring",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "8 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "فهم متى وكيف يُستخدم Shoring لحماية جدران الخندق",
    "التمييز بين أنواع Shoring المختلفة وتطبيقاتها",
    "حساب حمولة التربة الجانبية",
    "معرفة معايير OSHA وSEC لـ Excavation Safety"
  ],
  "content": "<h3>ما هو Shoring ولماذا؟</h3><p>نظام دعم ميكانيكي لجدران الخندق لمنع انهيارها. يصبح إلزامياً عند: عمق > 1.2م، تربة غير متماسكة، وجود أحمال مجاورة، أو تربة رطبة.</p><h3>أنواع Shoring في UGC</h3><ul><li><strong>Trench Box (Shield)</strong>: صندوق فولاذي/ألمنيوم جاهز — الأسرع والأكثر استخداماً. مناسب حتى 4m</li><li><strong>Timber Shoring</strong>: ألواح خشبية + Struts معدنية — مرن للأشكال غير المنتظمة</li><li><strong>Sheet Piling</strong>: ألواح فولاذية تُدق قبل الحفر — للأعماق الكبيرة > 5m ومناطق المياه الجوفية</li></ul><h3>Benching (التدريج) كبديل</h3><p>في التربة المتماسكة، تدريج جدران الخندق بزاوية آمنة بدلاً من Shoring. يعيبه أنه يتطلب عرضاً إضافياً كبيراً.</p>",
  "tools": [
    {
      "name": "Trench Box (Aluminium/Steel)",
      "icon": "box"
    },
    {
      "name": "Sheet Pile Driver",
      "icon": "settings"
    }
  ],
  "hseWarnings": [
    "انهيار جدار الخندق بعمق 1.5m يُسبب ضغطاً > طن على الجسم. Trench Box قبل الدخول",
    "لا تضع حواف التربة المحفورة على حافة الخندق — المسافة الدنيا 0.6m"
  ],
  "commonMistakes": [
    "تحريك Trench Box بينما العمال لا يزالون في الخندق — ممنوع منعاً باتاً",
    "اختيار Trench Box بطول أقصر من عمق الخندق — يترك الجزء السفلي بلا حماية"
  ],
  "references": [
    "OSHA 29 CFR 1926 Subpart P — Excavations",
    "BS 6031 — Earthworks Safety",
    "SEC Civil Works Manual — Trenching Safety"
  ]
},

  "c3-s2-3": {
  "title": "Dewatering",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "7 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "تحديد متى يُطلب Dewatering في مشاريع UGC السعودية",
    "معرفة طرق Dewatering المختلفة",
    "فهم تأثير Dewatering على استقرار التربة والمباني المجاورة",
    "التخطيط لتصريف المياه المستخرجة"
  ],
  "content": "<h3>متى يُطلب Dewatering؟</h3><p>يُطلب عندما يكون منسوب المياه الجوفية أعلى من قاع الخندق. شائع في المنطقة الشرقية (الدمام، الجبيل) والمناطق الساحلية.</p><h3>طرق Dewatering</h3><ul><li><strong>Open Sump Pumping</strong>: حفرة تجميع + مضخة غاطسة — الأبسط والأكثر استخداماً</li><li><strong>Well Point System</strong>: نقاط ضخ خارج الخندق تُخفض المنسوب قبل الحفر — أكثر فعالية</li><li><strong>Sheet Piling + Dewatering</strong>: للمشاريع الكبيرة والأعماق الكبيرة</li></ul><h3>تأثيرات جانبية</h3><ul><li>Settlement: ضخ المياه يُسبب هبوط تربة في المنطقة المحيطة</li><li>Sand Piping: الضخ المفرط في الرمل يجرف الحبيبات ويُسبب تجاويف</li></ul>",
  "tools": [
    {
      "name": "Submersible Pump (Dewatering)",
      "icon": "wind"
    },
    {
      "name": "Well Point System",
      "icon": "settings"
    },
    {
      "name": "Water Level Meter (Dip Meter)",
      "icon": "droplet"
    }
  ],
  "hseWarnings": [
    "الكيابل الكهربائية ومضخات Dewatering في نفس الخندق — تأكد من كابلات المضخة معزولة",
    "توقف Dewatering فجأة = ارتفاع سريع للمياه الجوفية — خطر طوف الأنابيب"
  ],
  "commonMistakes": [
    "بدء الحفر قبل تشغيل Well Point System بوقت كافٍ (24-48 ساعة)",
    "إهمال مراقبة Settlement Markers على المباني المجاورة"
  ],
  "references": [
    "BS 8004 — Foundations in Waterlogged Ground",
    "CIRIA Report C515 — Control of Groundwater for Temporary Works",
    "SEC Civil Works Manual — Dewatering Procedures"
  ]
},

  "c3-s3-0": {
  "title": "الرمل الخارجي (Bedding Sand)",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "7 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "فهم دور Bedding Sand في حماية الكيبل",
    "معرفة مواصفات الرمل المطلوبة حسب SEC TMSS",
    "إجراء اختبار التحقق من مواصفات الرمل في الموقع",
    "التمييز بين أنواع الرمل وسبب رفض بعضها"
  ],
  "content": "<h3>طبقة الرمل الخارجي — فراش الكيبل</h3><p>Bedding Sand أول طبقة توضع في قاع الخندق قبل الكيابل. تُوفر سطحاً ناعماً منتظماً يمنع تعرض الكيبل للضغط الموضعي.</p><h3>مواصفات Bedding Sand (SEC TMSS)</h3><ul><li>النوع: رمل نقي ناعم خالٍ من الحصى (Clean Sharp Sand)</li><li>الحجم الأقصى للحبيبة: ≤ 5mm</li><li>لا يحتوي كلوريدات أو كبريتات: pH 6-9</li><li>السماكة: 100mm تحت الكيبل</li></ul><h3>لماذا الرمل الحاد وليس الناعم؟</h3><p>الرمل الناعم جداً (Dune Sand) له حبيبات كروية تنزلق وتُعطي دمكاً ضعيفاً. الرمل الحاد له حبيبات مضلّعة تتشابك وتُعطي ثباتاً أكبر.</p>",
  "tools": [
    {
      "name": "Sieve Set",
      "icon": "layers"
    },
    {
      "name": "Chloride Test Kit",
      "icon": "droplet"
    },
    {
      "name": "Sand Sampling Scoop",
      "icon": "box"
    }
  ],
  "hseWarnings": [
    "الرمل الملوث كيميائياً يُدمر HDPE Jacket — لا تستخدم رمل المصدر المجهول",
    "نقل الرمل بشاحنات مكشوفة في الرياح يُسبب مشكلة غبار"
  ],
  "commonMistakes": [
    "استخدام Dune Sand المتوفر بكثرة في السعودية — دمك ضعيف",
    "وضع طبقة رمل أقل من 100mm لتوفير المواد"
  ],
  "references": [
    "SEC TMSS — Trench Backfill Specifications",
    "BS 882 — Specification for Aggregates from Natural Sources",
    "IEC 60287-3-1 — Soil Properties Around Cables"
  ]
},

  "c3-s3-1": {
  "title": "رمل الحماية العلوي (Covering Sand)",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "6 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "فهم دور Covering Sand في الحماية الحرارية والميكانيكية",
    "معرفة السماكة المطلوبة وعلاقتها بمستوى الجهد",
    "التمييز بين Covering Sand وThermal Backfill",
    "معرفة إجراءات الدمك الصحيحة فوق الكيابل"
  ],
  "content": "<h3>Covering Sand — الدرع المباشر للكيبل</h3><p>تُضاف فوق الكيابل مباشرة. هدفها مزدوج: الحماية الحرارية والحماية الميكانيكية.</p><h3>السماكة المطلوبة</h3><ul><li>كيابل 11-33 kV: 150mm فوق أعلى الكيبل</li><li>كيابل 69-132 kV: 200mm</li><li>كيابل 230-380 kV: 200-300mm</li></ul><h3>إجراءات الدمك الصحيحة</h3><p>الدمك فوق الكيابل يجب أن يكون <strong>خفيفاً جداً (Hand Compaction أو Light Plate Compactor)</strong>. الدمك الثقيل ممنوع — يُسبب تشوهاً في الكيبل وتلفاً للـ HDPE Jacket.</p>",
  "tools": [
    {
      "name": "Light Plate Compactor",
      "icon": "settings"
    },
    {
      "name": "Sand Depth Measuring Rod",
      "icon": "ruler"
    },
    {
      "name": "Hand Tamper",
      "icon": "wrench"
    }
  ],
  "hseWarnings": [
    "لا تسمح بأي مركبة بمرور فوق الخندق قبل اكتمال طبقات الردم",
    "أثناء الردم اليدوي، استخدم معدات غير حادة لتجنب ثقب HDPE Jacket"
  ],
  "commonMistakes": [
    "استخدام Heavy Vibratory Compactor على Covering Sand مباشرة — يُسبب تلف Jacket",
    "إهمال قياس السماكة الفعلية في الموقع"
  ],
  "references": [
    "SEC TMSS — Covering Sand Specifications",
    "IEC 60287-3-1 — Thermal Backfill Around Cables",
    "BS 6086 — Cable Installation Code of Practice"
  ]
},

  "c3-s3-2": {
  "title": "Cable Tiles",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "6 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "فهم دور Cable Tiles في منظومة حماية الكيبل",
    "معرفة مواصفات الألواح المعتمدة في مشاريع SEC",
    "معرفة الموقع الصحيح في طبقات الخندق",
    "التمييز بين أنواع الألواح (خرسانية، بلاستيكية)"
  ],
  "content": "<h3>Cable Tiles — الطبقة الحامية المرئية</h3><p>ألواح توضع فوق Covering Sand لحماية الكيابل من الحفر العرضي غير المقصود. عندما يحفر أحد في المستقبل، يصطدم بالألواح قبل الكيبل.</p><h3>أنواع Cable Tiles في مشاريع SEC</h3><ul><li>Concrete Cable Tiles: خرسانية مسبقة الصب — الأكثر استخداماً في HV/EHV. 600×300×50mm. مقاومة الضغط ≥ 25 MPa</li><li>Interlocking Plastic Tiles: بلاستيكية HDPE/PP — خفيفة. مناسبة لـ MV/LV</li></ul><h3>الموقع الصحيح</h3><p>توضع فوق Covering Sand مباشرة، أي بعد 200-300mm من أعلى الكيبل. يجب أن تُغطي عرض الكيابل + 150mm من كل جانب.</p>",
  "tools": [
    {
      "name": "Tile Placement Tool",
      "icon": "wrench"
    },
    {
      "name": "QC Inspection Form",
      "icon": "check-circle"
    }
  ],
  "hseWarnings": [
    "الألواح الخرسانية ثقيلة (20-25kg) — استخدام أساليب رفع آمنة",
    "لا تضع الألواح قبل التأكد من صحة موقع الكيابل وإجراء Sheath Test"
  ],
  "commonMistakes": [
    "وضع الألواح فوق الكيابل مباشرة دون Covering Sand",
    "عدم تغطية عرض كامل الكيابل بالألواح"
  ],
  "references": [
    "SEC TMSS — Cable Protection Slab Specifications",
    "BS 6086 — Code of Practice for Cable Installation",
    "SEC Standard Drawing — Trench Cross-Section"
  ]
},

  "c3-s3-3": {
  "title": "Warning Tape",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "5 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "فهم الغرض المزدوج من Warning Tape (بصري وكهرومغناطيسي)",
    "معرفة نوعَي Warning Tape المستخدمَين",
    "تحديد الموقع الصحيح لكل نوع في طبقات الخندق",
    "معرفة الألوان والنصوص المطلوبة"
  ],
  "content": "<h3>Warning Tape — التحذير المدفون</h3><p>شريط تحذيري يُدفن في الخندق فوق الكيابل. هدفه الأول: تحذير أي حفّار مستقبلي بصرياً. هدفه الثاني (للنوع المعدني): قابلية الكشف بـ Cable Locator.</p><h3>نوعا Warning Tape في مشاريع SEC</h3><ul><li><strong>Metallic (Detectable) Warning Tape</strong>: شريط بلاستيكي بداخله شريط معدني. يُوضع مباشرة فوق Cable Tiles. يُكتشف بـ EM Locator من السطح. اللون الأحمر: CAUTION — ELECTRIC CABLE BELOW</li><li><strong>Plain Plastic Warning Tape</strong>: بدون معدن. يُوضع في منتصف طبقة Backfill عادةً 200-300mm تحت السطح</li></ul><h3>المواصفات</h3><ul><li>العرض: ≥ 150mm | السماكة: ≥ 100 ميكرون | الكتابة: كل 500mm</li></ul>",
  "tools": [
    {
      "name": "Warning Tape Dispenser",
      "icon": "layers"
    },
    {
      "name": "EM Cable Locator (للتحقق)",
      "icon": "radio"
    }
  ],
  "hseWarnings": [
    "Warning Tape ليست بديلاً عن Utility Survey — هي الخط الأخير من الحماية",
    "تأكد من فرد الشريط بشكل مستقيم بدون انكسارات"
  ],
  "commonMistakes": [
    "استخدام Non-Detectable Tape فقط لكيابل HV",
    "وضع Warning Tape بعمق ضحل جداً (أقل من 200mm) — يُزال مع أول أعمال صيانة للطريق"
  ],
  "references": [
    "SEC TMSS — Warning Tape Specifications",
    "BS 6086 — Underground Cable Warning Requirements",
    "HSE UK HS(G)47 — Avoiding Danger from Underground Services"
  ]
},

  "c3-s3-4": {
  "title": "الرمل الحراري (Thermal Backfill)",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "10 دقائق",
  "difficulty": "متقدم",
  "objectives": [
    "فهم الفرق الجوهري بين Thermal Backfill والرمل العادي",
    "معرفة مواصفات FTB المعتمدة في مشاريع SEC HV/EHV",
    "معرفة طريقة التحضير والاختبار والتطبيق الميداني",
    "حساب الكمية المطلوبة لمشروع بطول محدد"
  ],
  "content": "<h3>لماذا Thermal Backfill؟</h3><p>في مشاريع الجهود العالية، كفاءة نقل الحرارة تُحدد Ampacity الكيبل. التربة الطبيعية في السعودية (رمل جاف) قد يصل ρ لها 2.5 K·m/W مما يُقلص Ampacity بأكثر من 25%. الحل: <strong>Fluidized Thermal Backfill (FTB)</strong> ذي ρ ≤ 1.0 K·m/W.</p><h3>تركيب FTB النموذجي</h3><ul><li>Aggregate (حصى مُحدد): 55-65%</li><li>Sand: 20-30%</li><li>Cement (بنسبة منخفضة): 3-5%</li><li>Water: لتحقيق Flowability</li></ul><h3>معايير القبول لـ FTB (SEC)</h3><ul><li>ρ ≤ 1.0 K·m/W في حالة الجفاف</li><li>Compressive Strength: 0.5-2.0 MPa</li><li>Slump Test: 100-200mm</li></ul><h3>التطبيق الميداني</h3><p>يُسكب FTB من الجانبين حول الكيابل بشكل تدريجي. الحد الأدنى للسماكة: 150mm من كل جانب و150mm فوق الكيابل.</p>",
  "tools": [
    {
      "name": "Thermal Needle Probe (KD2 Pro)",
      "icon": "thermometer"
    },
    {
      "name": "Slump Test Cone",
      "icon": "layers"
    },
    {
      "name": "FTB Mixer Truck",
      "icon": "settings"
    }
  ],
  "hseWarnings": [
    "FTB يحتوي على أسمنت — قفازات مقاومة للقلويات وواقي عيون عند التعامل معه",
    "لا تسكب FTB على كيابل ساخنة جداً (> 60°C)"
  ],
  "commonMistakes": [
    "الاكتفاء باختبار ρ للـ FTB في حالته الرطبة فقط — ρ ترتفع عند الجفاف",
    "تطبيق FTB بطبقات سميكة جداً (> 500mm) — يُسبب Segregation وفجوات هوائية"
  ],
  "references": [
    "IEC 60287-3-1 — Thermal Backfill Properties",
    "CIGRÉ Technical Brochure 640 — Thermal Backfill Specifications",
    "SEC TMSS — Thermal Backfill Requirements for HV/EHV"
  ]
},

  "c3-s4-0": {
  "title": "Direct Buried",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "8 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "فهم نظام الدفن المباشر وشروط استخدامه",
    "معرفة مزايا وعيوب Direct Buried مقارنةً بـ Duct Bank",
    "معرفة متطلبات التركيب الصحيح",
    "تحديد حالات UGC السعودية التي يُطبَّق فيها"
  ],
  "content": "<h3>Direct Buried — الدفن المباشر</h3><p>يُدفن الكيبل مباشرة في التربة مع طبقات الرمل الحراري دون وضعه في أنابيب.</p><h3>متى يُستخدم؟</h3><ul><li>المناطق غير الحضرية والصحراء</li><li>الكيابل الكبيرة EHV (230 kV و380 kV)</li><li>الأجزاء الريفية من المسار</li></ul><h3>مزايا Direct Buried</h3><ul><li>نقل حرارة أفضل → Ampacity أعلى | أقل تكلفةً | أسهل وأسرع تنفيذاً</li></ul><h3>عيوب Direct Buried</h3><ul><li>إصلاح العيوب يستلزم حفراً كاملاً | أكثر عرضةً للتلف الميكانيكي | لا يسمح بالتوسع دون حفر</li></ul><h3>اشتراطات Direct Buried في SEC</h3><ul><li>Thermal Backfill إلزامي لكيابل 110 kV فأعلى</li><li>Cable Tiles فوق Covering Sand | Warning Tape مزدوج | Minimum Bending Radius محقق</li></ul>",
  "tools": [
    {
      "name": "Thermal Backfill Mixer",
      "icon": "layers"
    },
    {
      "name": "Compaction Test Equipment",
      "icon": "activity"
    }
  ],
  "hseWarnings": [
    "كيابل EHV المدفونة مباشرة تُسخّن التربة فوقها — لا تزرع أشجار أو تُقم منشآت فوق مسار Direct Buried EHV",
    "As-Built GPS إلزامية بعد التركيب — كيابل مفقودة الموقع خطر في المستقبل"
  ],
  "commonMistakes": [
    "افتراض أن Direct Buried هو الأرخص دائماً في المدن",
    "إهمال توثيق As-Built لمسار الكيبل المدفون بدقة GPS"
  ],
  "references": [
    "SEC TMSS — Direct Buried Installation Requirements",
    "IEC 60287-3-1 — Cable Installation Methods",
    "CIGRÉ Technical Brochure 880 — Buried Cable Systems"
  ]
},

  "c3-s4-1": {
  "title": "Duct Bank",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "10 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "فهم نظام Duct Bank وبنيته التفصيلية",
    "اختيار نوع الأنبوب المناسب لكل تطبيق",
    "حساب تأثير Duct Bank على Ampacity",
    "معرفة اشتراطات التصميم الميكانيكي للمناطق الحضرية"
  ],
  "content": "<h3>Duct Bank — نظام الأنابيب</h3><p>الكيابل تُدفن داخل أنابيب (Conduits/Ducts) يُصبّ حولها خرسانة أو Flowable Fill. يُستخدم في المناطق الحضرية ونقاط العبور.</p><h3>أنواع الأنابيب في SEC</h3><ul><li>HDPE Duct: الأكثر استخداماً للكيابل الكهربائية. SDR 11 للـ HV</li><li>uPVC Duct: للكيابل المتوسطة والمنخفضة. أرخص لكن أقل مقاومة</li><li>GRP Duct: لعبور الطرق والسكك الحديدية — مقاومة ميكانيكية عالية</li><li>Steel Casing: للأحمال الثقيلة جداً</li></ul><h3>تأثير Duct Bank على Ampacity</h3><p>كيبل 110 kV في HDPE Duct يكون Ampacity أقل بـ 10-15% من Direct Buried في نفس ظروف التربة.</p><h3>أبعاد Duct Bank (SEC)</h3><ul><li>القطر الداخلي: ≥ 1.5 × OD الكيبل (عادةً 200mm لكيابل 110 kV)</li><li>فصل الأنابيب: ≥ 75mm | Spare Ducts: 1-2 أنبوب فارغ لكل مجموعة</li></ul>",
  "tools": [
    {
      "name": "HDPE Duct Fusion Welder",
      "icon": "settings"
    },
    {
      "name": "Mandrel Test Kit",
      "icon": "wrench"
    },
    {
      "name": "Duct Rodding Equipment",
      "icon": "layers"
    }
  ],
  "hseWarnings": [
    "صبّ الخرسانة حول الأنابيب يُنتج حرارة هيدراتية — لا تدخل الخندق خلال فترة المعالجة",
    "الأنابيب الفارغة (Spare Ducts) تجمع غازات — أغلقها بـ Duct Plugs"
  ],
  "commonMistakes": [
    "صبّ خرسانة Duct Bank دون التأكد من توازي الأنابيب",
    "إهمال تركيب Spare Ducts — تكلفة بسيطة مقابل حفر كامل مستقبلاً"
  ],
  "references": [
    "SEC TMSS — Duct Bank Design and Installation",
    "IEC 61386 — Conduit Systems for Cable Management",
    "CIGRÉ Technical Brochure 640 — Duct Bank Thermal Effects"
  ]
},

  "c3-s4-2": {
  "title": "Cable Tunnels",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "10 دقائق",
  "difficulty": "متقدم",
  "objectives": [
    "فهم متى تُبرَّر Cable Tunnels تقنياً واقتصادياً",
    "معرفة متطلبات التصميم الإنشائي والكهربائي",
    "فهم أنظمة السلامة الخاصة بالأنفاق",
    "التعرف على مشاريع Tunnel في مدن المملكة"
  ],
  "content": "<h3>Cable Tunnels — الحل للكثافة الفائقة</h3><p>أنفاق مشياة (Walk-In) تُركَّب فيها الكيابل على Racks. تُستخدم عند كثافة كيابل عالية جداً أو عندما تكون تكلفة إعادة الحفر عالية.</p><h3>متى يُختار Tunnel؟</h3><ul><li>≥ 4-6 دوائر في نفس المسار الحضري</li><li>مناطق يُحظر فيها الحفر المتكرر</li><li>تحت المحطات الكهربائية الكبرى (GIS Substations)</li><li>مشاريع NEOM والمدن الذكية</li></ul><h3>مكونات Cable Tunnel</h3><ul><li>هيكل Tunnel الإنشائي: خرسانة مسلحة، قطر داخلي 2-4m</li><li>Cable Racks & Cleats: رفوف فولاذية مقاومة للصدأ</li><li>Ventilation System: هواء قسري (Forced Ventilation)</li><li>Fire Detection & Suppression: CO₂ أو Water Mist</li><li>Sump Pumps + Lighting + CCTV</li></ul>",
  "tools": [
    {
      "name": "Gas Detector (4-Gas)",
      "icon": "wind"
    },
    {
      "name": "Ventilation Fan System",
      "icon": "wind"
    },
    {
      "name": "Fire Detection Panel",
      "icon": "flame"
    }
  ],
  "hseWarnings": [
    "Cable Tunnels بيئة مغلقة — Confined Space Entry Procedures إلزامية قبل كل دخول",
    "حريق كيبل في نفق مغلق خطر بالغ — نظام الإطفاء يجب فعّالاً دائماً"
  ],
  "commonMistakes": [
    "تصميم Tunnel دون مراعاة حرارة تشغيل الكيابل داخله",
    "إهمال Sump Pumps في نقاط منخفضة النفق"
  ],
  "references": [
    "IEC 60502-4 — Cable Installation in Tunnels",
    "CIGRÉ Technical Brochure 218 — Cable Tunnels",
    "NFPA 130 — Fire Safety in Tunnels"
  ]
},

  "c3-s4-3": {
  "title": "Thermal Backfill (TBF)",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "8 دقائق",
  "difficulty": "متقدم",
  "objectives": [
    "فهم أنواع Thermal Backfill المعتمدة في مشاريع SEC",
    "مقارنة FTB وCMB وCLSM",
    "معرفة إجراءات ضبط الجودة لـ TBF في الموقع",
    "التحقق من تحقيق ρ المستهدفة بعد التطبيق"
  ],
  "content": "<h3>أنواع Thermal Backfill في مشاريع SEC</h3><h3>1. FTB (Fluidized Thermal Backfill)</h3><p>الأكثر استخداماً في SEC للـ HV/EHV. مزيج Aggregate + Sand + Cement + Water يتدفق ذاتياً.</p><ul><li>ρ المستهدفة: ≤ 1.0 K·m/W (جاف)</li><li>مقاومة الضغط: 0.5-2.0 MPa (قابل لإعادة الحفر)</li><li>Slump: 150-200mm</li></ul><h3>2. CMB (Cement Mortar Backfill)</h3><p>Cement + Fine Sand. يتصلب أقوى مما قد يُصعّب إعادة الحفر. يُستخدم أحياناً في Duct Banks.</p><h3>3. CLSM</h3><p>تركيب محدد يُعطي ρ ≤ 0.8 K·m/W. تكلفته أعلى لكن يُتيح Ampacity أعلى.</p><h3>التحقق الميداني من ρ</h3><p>بعد 7 أيام من تطبيق FTB، يُقاس ρ بـ Thermal Needle Probe. القيمة يجب ≤ 1.0 K·m/W.</p>",
  "tools": [
    {
      "name": "FTB Batching Plant",
      "icon": "settings"
    },
    {
      "name": "Thermal Needle Probe (KD2 Pro)",
      "icon": "thermometer"
    },
    {
      "name": "Slump Cone Test Kit",
      "icon": "layers"
    },
    {
      "name": "Cube Moulds",
      "icon": "box"
    }
  ],
  "hseWarnings": [
    "FTB بالكميات الكبيرة قلوي — واقيات يدوية ووجه إلزامية",
    "لا تصب FTB في خندق يحتوي مياه راكدة"
  ],
  "commonMistakes": [
    "قبول FTB Batch دون إجراء Slump Test في الموقع",
    "عدم أخذ Cube Samples لاختبار المقاومة من كل Batch"
  ],
  "references": [
    "CIGRÉ Technical Brochure 640 — Thermal Backfill",
    "ASTM C94 — Ready-Mixed Concrete",
    "SEC TMSS — Thermal Backfill Specification and Testing"
  ]
},

  "c3-s4-4": {
  "title": "CLSM (Flowable Fill)",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "7 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "التمييز بين CLSM وFTB",
    "معرفة مواصفات CLSM لمشاريع UGC",
    "فهم مزايا CLSM في تقليل وقت التنفيذ",
    "تحديد قيود CLSM"
  ],
  "content": "<h3>CLSM — Controlled Low-Strength Material</h3><p>مادة ردم سائلة ذاتية الاستواء (Self-Leveling) تُستخدم كبديل للردم التقليدي. تتميز بقدرتها على ملء الفجوات دون دمك ميكانيكي.</p><h3>تركيب CLSM</h3><ul><li>Portland Cement: كمية منخفضة (30-100 kg/m³)</li><li>Fly Ash: يُحسن Flowability</li><li>Fine Aggregate: رمل ناعم</li><li>Water: نسبة عالية لتحقيق السيولة</li></ul><h3>مزايا CLSM في UGC</h3><ul><li>لا يحتاج دمكاً ميكانيكياً — يُوفر وقتاً ويقلل خطر إتلاف الكيابل</li><li>يملأ الفجوات حول الكيابل بشكل مثالي</li><li>يُسرّع إعادة فتح الطريق للحركة (24-48 ساعة)</li><li>يُقلل من Settlement المستقبلي للخندق</li></ul>",
  "tools": [
    {
      "name": "Concrete Mixer / Ready Mix Truck",
      "icon": "settings"
    },
    {
      "name": "Flow Test Cone (ASTM D6103)",
      "icon": "layers"
    },
    {
      "name": "Penetration Resistance Gauge",
      "icon": "activity"
    }
  ],
  "hseWarnings": [
    "CLSM سائل وقت الصب — يُولّد ضغطاً جانبياً على جدران الخندق. تأكد من Shoring مناسب",
    "CLSM يُولّد حرارة هيدراتية — قد تُلحق ضرراً بـ HDPE Jacket إذا صُبّ بكميات كبيرة مرة واحدة"
  ],
  "commonMistakes": [
    "استخدام CLSM بمقاومة ضغط عالية جداً في مناطق ستحتاج حفراً مستقبلياً",
    "إهمال Flow Test قبل الصب"
  ],
  "references": [
    "ACI 229R — Controlled Low-Strength Materials",
    "ASTM D6103 — Standard Test for Flow of CLSM",
    "SEC TMSS — CLSM Specification for Cable Duct Encasement"
  ]
},

  "c3-s5-0": {
  "title": "Proctor Test",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "8 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "فهم مبدأ اختبار Proctor وعلاقته بضبط جودة الدمك",
    "التمييز بين Standard Proctor وModified Proctor",
    "تفسير Proctor Curve وتحديد MDD وOMC",
    "تطبيق نسبة الدمك المطلوبة (95% MDD) في مشاريع SEC"
  ],
  "content": "<h3>ما هو Proctor Test؟</h3><p>يُحدد <strong>الكثافة الجافة القصوى (MDD)</strong> للتربة ونسبة الرطوبة المثلى (OMC). تُستخدم نتائجه كمرجع للتحقق من كفاءة الدمك في الموقع.</p><h3>Standard Proctor vs Modified Proctor</h3><ul><li>Standard Proctor (ASTM D698): طاقة دمك منخفضة — للطبقات السطحية الخفيفة</li><li>Modified Proctor (ASTM D1557): طاقة دمك أعلى — <strong>هو المعيار الحاكم في مشاريع SEC للطريق</strong></li></ul><h3>نسبة الدمك المطلوبة في مشاريع SEC</h3><ul><li>الطبقات تحت الكيابل: ≥ 90% MDD (خفيفة لحماية الكيابل)</li><li>طبقات Backfill العليا: ≥ 95% MDD</li><li>Base Course تحت الأسفلت: ≥ 98% MDD</li></ul>",
  "tools": [
    {
      "name": "Proctor Mould & Rammer",
      "icon": "wrench"
    },
    {
      "name": "Moisture Content Oven",
      "icon": "thermometer"
    },
    {
      "name": "Nuclear Density Gauge (Troxler)",
      "icon": "activity"
    }
  ],
  "hseWarnings": [
    "جهاز Nuclear Density Gauge يحتوي مواد مشعة — تدريب وترخيص خاص إلزامي",
    "أخذ عينات من عمق الخندق يستلزم Trench Safety Procedures"
  ],
  "commonMistakes": [
    "إجراء Proctor Test مرة واحدة لكامل المشروع — تعديلات مصدر التربة تستلزم Proctor جديداً",
    "الاكتفاء بـ Standard Proctor لمشاريع الطرق الرئيسية"
  ],
  "references": [
    "ASTM D1557 — Standard Test for Modified Proctor",
    "BS 1377-4 — Soil Compaction Tests",
    "SEC Civil Works Specification — Compaction Requirements"
  ]
},

  "c3-s5-1": {
  "title": "Sand Cone Test",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "7 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "فهم مبدأ Sand Cone Test وكيفية قياس كثافة التربة الميدانية",
    "تنفيذ الاختبار خطوة بخطوة في موقع الخندق",
    "حساب نسبة الدمك ومقارنتها بـ Modified Proctor",
    "معرفة تردد الاختبار المطلوب في مشاريع SEC"
  ],
  "content": "<h3>Sand Cone Test — التحقق الميداني من الدمك</h3><p>الاختبار الأكثر استخداماً في مشاريع UGC للتحقق من أن كثافة التربة المدموكة تُحقق نسبة الدمك المطلوبة.</p><h3>خطوات الاختبار</h3><ol><li>تسوية السطح في نقطة الاختبار</li><li>وضع Base Plate وحفر ثقب قطر 100mm وعمق 150mm</li><li>جمع التربة المستخرجة بالكامل في كيس</li><li>قلب Sand Cone Apparatus فوق الثقب وفتح الصمام</li><li>حساب حجم الثقب من وزن الرمل المستخدم</li><li>حساب: γd = (Wet Weight / Volume) / (1 + w) ثم Relative Compaction = γd / MDD × 100%</li></ol><h3>تردد الاختبار في مشاريع SEC</h3><ul><li>كل 100 متر طولي من الخندق لكل طبقة</li><li>Hold Point: نتيجة ≥ 95% MDD شرط للمضي في طبقة الأسفلت</li></ul>",
  "tools": [
    {
      "name": "Sand Cone Apparatus",
      "icon": "layers"
    },
    {
      "name": "Calibration Sand (Ottawa Sand)",
      "icon": "box"
    },
    {
      "name": "Moisture Content Tin & Scale",
      "icon": "activity"
    },
    {
      "name": "Drying Oven",
      "icon": "thermometer"
    }
  ],
  "hseWarnings": [
    "نقطة الاختبار على الطريق تستلزم إشارات تحذير وحواجز",
    "الحفرة المفتوحة للاختبار يجب إغلاقها فوراً — خطر التعثر"
  ],
  "commonMistakes": [
    "عدم معايرة كثافة الرمل القياسي بشكل دوري",
    "أخذ عينة رطوبة من السطح بدلاً من عمق الطبقة المدموكة"
  ],
  "references": [
    "ASTM D1556 — Standard Test for Density by Sand Cone",
    "BS 1377-9 — In-Situ Tests",
    "SEC ITP — Compaction Testing Frequency Requirements"
  ]
},

  "c3-s5-2": {
  "title": "Thermal Resistivity Test",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "8 دقائق",
  "difficulty": "متقدم",
  "objectives": [
    "إتقان إجراء Thermal Resistivity Test للتربة وThermal Backfill في الموقع",
    "معرفة معايير القبول لـ ρ في مشاريع HV/EHV",
    "تفسير نتائج القياسات وقرار الردم أو الرفض",
    "معرفة تردد الاختبار المطلوب"
  ],
  "content": "<h3>Thermal Resistivity Test في الموقع</h3><p>يتحقق من الخاصية الحرارية للوسط المحيط بالكيبل — ما يُحدد Ampacity الفعلية على مدى عمر الكيبل.</p><h3>جهاز القياس: Thermal Needle Probe</h3><p>يُستخدم KD2 Pro وفق IEEE 442 / ASTM D5334:</p><ol><li>تُدفن إبرة حرارية في التربة أو عينة Backfill</li><li>يُطبَّق تدفق حراري ثابت Q لمدة 60-120 ثانية</li><li>يُرصد ارتفاع درجة الحرارة Δθ(t)</li><li>تُحسب ρ = 4π × Q / slope(ln(t) vs θ)</li></ol><h3>معيار القبول: ρ ≤ 1.0 K·m/W (SEC للـ HV/EHV)</h3><h3>تردد الاختبار</h3><ul><li>كل 200-500 متر على طول المسار | كل تغيير في مصدر مواد الردم | على كل Batch رئيسي من FTB</li></ul>",
  "tools": [
    {
      "name": "KD2 Pro Thermal Analyzer",
      "icon": "thermometer"
    },
    {
      "name": "Thermal Test Report Template",
      "icon": "file-text"
    }
  ],
  "hseWarnings": [
    "الإبرة الحرارية دقيقة جداً — أي انحناء يُتلفها ويُعطي قراءات خاطئة",
    "الاختبار على FTB الطازج (< 24 ساعة) يُعطي نتائج مضللة"
  ],
  "commonMistakes": [
    "قياس ρ في حالة التربة الرطبة مباشرة بعد الأمطار — يُعطي قيمة منخفضة مصطنعة",
    "استخدام Probe قديم غير معايَر"
  ],
  "references": [
    "IEEE 442 — Guide for Soil Thermal Resistivity Measurements",
    "ASTM D5334 — Standard Test Method for Thermal Conductivity of Soil",
    "IEC 60287-3-1 — Thermal Properties of Installation Media"
  ]
},

  "c3-s6-0": {
  "title": "Road Crossing",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "9 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "معرفة طرق عبور الطرق المختلفة وشروط اختيار كل منها",
    "فهم متطلبات Open Cut مقابل HDD",
    "معرفة المواصفات الخاصة لأنابيب العبور",
    "فهم اشتراطات Reinstatement بعد العبور"
  ],
  "content": "<h3>طرق عبور الطرق</h3><h3>1. Open Cut</h3><p>حفر الطريق بخندق مفتوح. مسموح للطرق الثانوية مع Traffic Management Plan. أقل تكلفةً وأسهل تنفيذاً.</p><h3>2. Jack & Bore</h3><p>دفع أنبوب فولاذي تحت الطريق بالضغط الهيدروليكي. مناسب لأقطار متوسطة وأعماق متوسطة.</p><h3>3. HDD</h3><p>الحل الأفضل للطرق الرئيسية والسريعة. بئر انحنائية يُدفع فيها الكيبل دون حفر سطحي.</p><h3>مواصفات أنابيب العبور</h3><ul><li>GRP: الأفضل للعبور المباشر — خفيف ومقاوم للتآكل</li><li>Steel Casing: للأحمال الثقيلة جداً</li><li>عمق الكيبل تحت قاع الطريق: ≥ 1.5م</li></ul>",
  "tools": [
    {
      "name": "HDD Machine",
      "icon": "settings"
    },
    {
      "name": "Traffic Management Barriers",
      "icon": "alert-triangle"
    },
    {
      "name": "Asphalt Core Drill",
      "icon": "scissors"
    }
  ],
  "hseWarnings": [
    "Open Cut في طرق ذات حركة مرور = خطر دهس. Night Work أحياناً أكثر أماناً",
    "HDD يستلزم مراقبة مستمرة لضغط Drilling Mud — Frack Out خطر"
  ],
  "commonMistakes": [
    "Open Cut طريق رئيسية بدون Night Work Permit خاص",
    "إهمال وضع Spare Conduits في العبور"
  ],
  "references": [
    "General Authority for Roads — Road Crossing Standards",
    "ASTM F905 — Qualification of Equipment (HDD)",
    "SEC TMSS — Road Crossing Requirements"
  ]
},

  "c3-s6-1": {
  "title": "Railway Crossing",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "8 دقائق",
  "difficulty": "متقدم",
  "objectives": [
    "فهم المتطلبات الخاصة لعبور خطوط السكك الحديدية في السعودية",
    "معرفة اشتراطات هيئة سكك الحديد (SAR)",
    "فهم تصميم Casing لعبور السكة الحديدية",
    "معرفة متطلبات الاختبار والتصاريح الخاصة"
  ],
  "content": "<h3>خصوصية عبور السكك الحديدية</h3><p>عبور خطوط القطار يُعدّ من أصعب نقاط العبور. الأخطار: تأثير الاهتزاز، الحمل الديناميكي الضخم، والاضطراب على بنية السكة.</p><h3>المتطلبات التقنية (SAR)</h3><ul><li>HDD إلزامي — لا يُسمح بـ Open Cut تحت خطوط القطار النشطة</li><li>Steel Casing مزدوج الجدار (Double Wall)</li><li>العمق الدنيا: ≥ 1.5م من أسفل القاعدة الإنشائية للسكة</li><li>Cathodic Protection: للأنابيب الفولاذية من تيارات القطارات الكهربائية</li></ul><h3>إجراء NOC من SAR</h3><ul><li>تقديم Structural Analysis مُثبِتة أن العبور لن يؤثر على ثبات السكة</li><li>تنفيذ العمل في <strong>Engineering Windows</strong> (نوافذ توقف القطار)</li><li>حضور مفتش SAR إلزامي</li></ul>",
  "tools": [
    {
      "name": "HDD Machine (Heavy Duty)",
      "icon": "settings"
    },
    {
      "name": "Vibration Monitor",
      "icon": "activity"
    },
    {
      "name": "Cathodic Protection System",
      "icon": "shield"
    }
  ],
  "hseWarnings": [
    "Engineering Window يعني القطار متوقف — تحقق مزدوج قبل الدخول للمنطقة",
    "اهتزاز القطار يمكن أن يُبعثر معدات العمل — أمّن جميع المعدات قبل عبور أي قطار"
  ],
  "commonMistakes": [
    "الاعتماد على جداول القطار الرسمية دون تأكيد مباشر من غرفة تحكم SAR",
    "إهمال Cathodic Protection لـ Steel Casing"
  ],
  "references": [
    "SAR (Saudi Railway Authority) — Engineering Standards for Crossings",
    "BS EN 14364 — GRP Pipes for Underground Use",
    "IEC 62128 — Stray Current from Railway Systems"
  ]
},

  "c3-s6-2": {
  "title": "Pipeline Crossing",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "8 دقائق",
  "difficulty": "متقدم",
  "objectives": [
    "فهم المخاطر الخاصة بعبور أنابيب الهيدروكربونات",
    "معرفة مسافات الفصل ومتطلبات Cathodic Protection Interference",
    "فهم متطلبات NOC أرامكو للعبور",
    "إتقان إجراءات الطوارئ عند اكتشاف تسرب غاز"
  ],
  "content": "<h3>عبور أنابيب الهيدروكربونات — أخطر عبور</h3><p>عبور أنابيب الغاز والنفط يُعدّ الأشد حرجاً وخطورةً في مشاريع UGC. الأخطاء هنا قد تُسبب كوارث.</p><h3>مسافات الفصل الإلزامية</h3><ul><li>فصل أفقي: ≥ 600mm في الظروف الاعتيادية</li><li>فصل رأسي عند التقاطع: ≥ 300mm مع Concrete Protection Slab</li><li>أنابيب غاز ضغط عالٍ (> 7 bar): قد يرتفع الفصل لـ 1000mm</li></ul><h3>مخاطر Cathodic Protection Interference</h3><p>أنابيب أرامكو محمية بـ ICCP. تيارات الـ ICCP قد تُسرّب للكيابل المجاورة مسببةً تآكلاً في Metallic Sheath.</p><h3>إجراءات العبور مع أرامكو</h3><ol><li>NOC مع رسومات معتمدة من أرامكو</li><li>HDD بدلاً من Open Cut قرب أنابيب أرامكو النشطة</li><li>حضور مفتش أرامكو طوال فترة الحفر</li><li>Gas Detector مستمر التشغيل</li></ol><h3>ماذا تفعل عند رائحة غاز؟</h3><p><strong>أوقف كل الأعمال فوراً → أخرج جميع العمال → ابتعد 50م → لا تشغّل أي شرارة → اتصل بأرامكو وفرق الطوارئ</strong></p>",
  "tools": [
    {
      "name": "Gas Detector (LEL, H₂S, CO, O₂)",
      "icon": "wind"
    },
    {
      "name": "HDD Machine",
      "icon": "settings"
    },
    {
      "name": "Pipe-to-Soil Potential Meter",
      "icon": "activity"
    }
  ],
  "hseWarnings": [
    "رائحة الغاز = إخلاء فوري. تجاهلها خطر انفجار",
    "إشعال السيجارة في نطاق 50م من منطقة تسرب غاز = خطر وفاة فوري"
  ],
  "commonMistakes": [
    "افتراض أن أنابيب أرامكو القديمة (> 30 سنة) خارجة من الخدمة",
    "إهمال دراسة Stray Current Interference مع أنظمة ICCP"
  ],
  "references": [
    "Saudi Aramco GI-0002.714 — Excavation Near Pipelines",
    "NACE SP0169 — Control of External Corrosion on Pipelines",
    "IEC 60287-3-1 — Proximity to Pipelines"
  ]
},

  "c3-s6-3": {
  "title": "Wadi Crossing",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "8 دقائق",
  "difficulty": "متقدم",
  "objectives": [
    "فهم تحديات عبور الأودية في بيئة السعودية",
    "معرفة متطلبات التصميم الهيدرولوجي",
    "اختيار طريقة العبور المناسبة",
    "تصميم الحماية من السيول"
  ],
  "content": "<h3>الأودية السعودية — تحدٍّ موسمي</h3><p>الوادي مجرى مائي جاف معظم العام لكنه يتحول فجأة لتيار جارف قوي خلال موسم الأمطار. شائع في جنوب المملكة وغربها.</p><h3>المعطيات الهيدرولوجية المطلوبة</h3><ul><li>Flood Return Period: 100-Year Flood كحد أدنى للتصميم</li><li>Peak Discharge (Q): من دراسات MEWA</li><li>عمق الجريان: يُحدد الحد الأدنى لعمق الدفن</li></ul><h3>طرق العبور</h3><ul><li>Deep Burial: دفن أسفل عمق الجريان الأقصى + 1.0م + Riprap Protection</li><li>HDD: الحل الأفضل للأودية العميقة والعريضة</li><li>Aerial Crossing: تعليق الكيبل على جسر موجود — نادر</li></ul><h3>Riprap Protection</h3><p>طبقة حجارة كبيرة (100-500kg للحجر) تُفرش فوق منطقة العبور لمنع التآكل (Scour).</p>",
  "tools": [
    {
      "name": "HDD Machine",
      "icon": "settings"
    },
    {
      "name": "Hydrological Analysis Software",
      "icon": "cpu"
    },
    {
      "name": "Riprap Placement Equipment",
      "icon": "layers"
    }
  ],
  "hseWarnings": [
    "العمل في الوادي خلال موسم الأمطار مُحظور تماماً — السيول تأتي فجأة",
    "تحقق من تقارير الطقس من NCMC قبل كل يوم عمل في مناطق الأودية"
  ],
  "commonMistakes": [
    "تصميم عمق الدفن بناءً على فيضان 10 سنوات بدلاً من 100 سنة",
    "إهمال Scour Protection (Riprap)"
  ],
  "references": [
    "USACE — Hydraulic Design of Stream Crossings",
    "Saudi MEWA — Flood Studies and Wadi Data",
    "FHWA HEC-23 — Bridge Scour Countermeasures"
  ]
},

  "c3-s6-4": {
  "title": "HDD (Horizontal Directional Drilling)",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "12 دقائق",
  "difficulty": "متقدم",
  "objectives": [
    "فهم مبدأ HDD وتسلسل عمليات الحفر والسحب",
    "معرفة قيود HDD من حيث الطول والانحناء والتربة",
    "حساب Pulling Back Load",
    "معرفة مشاكل HDD الشائعة وكيفية التعامل معها"
  ],
  "content": "<h3>HDD — الحفر الاتجاهي الأفقي</h3><p>تُحفر بئر انحنائية تحت العائق (طريق، سكة، نهر، وادٍ) من نقطة دخول إلى خروج دون حفر سطحي. ثم يُسحب الكيبل أو الأنبوب خلالها.</p><h3>مراحل HDD الثلاث</h3><ol><li>Pilot Bore: حفر بئر صغيرة (100-150mm) على طول المسار بـ Steerable Drill Head</li><li>Reaming: توسيع البئر تدريجياً حتى القطر المطلوب (= 1.5 × OD الكيبل)</li><li>Pullback: سحب الكيبل/الأنبوب خلال البئر الموسَّعة</li></ol><h3>Drilling Fluid (Bentonite Mud)</h3><p>يُضخ Bentonite Slurry باستمرار لتبريد الرأس، نقل الفتات للخارج، تثبيت جدران البئر، وتقليل الاحتكاك.</p><h3>حدود HDD</h3><ul><li>الطول الأقصى: حتى 1500م في التربة المناسبة</li><li>Minimum Bending Radius: 40-50 × OD الكيبل</li></ul>",
  "tools": [
    {
      "name": "HDD Rig (Vermeer/Ditch Witch)",
      "icon": "settings"
    },
    {
      "name": "Drill Head Tracking System",
      "icon": "cpu"
    },
    {
      "name": "Bentonite Mixing Unit",
      "icon": "droplet"
    },
    {
      "name": "Pulling Force Monitor",
      "icon": "activity"
    }
  ],
  "hseWarnings": [
    "Frack Out يُلوّث التربة والمياه الجوفية — مراقبة ضغط الضخ مستمرة",
    "Stuck Drill Pipe = أزمة كبيرة. لا تزيد القوة عشوائياً"
  ],
  "commonMistakes": [
    "تصميم HDD Path بنصف قطر انحناء أقل من الحد الأدنى للكيبل",
    "إهمال اختبار Tracking Accuracy للـ Drill Head قبل البدء"
  ],
  "references": [
    "ASTM F1962 — Use of Maxi-Horizontal Directional Drilling",
    "ISTT — HDD Guidelines",
    "SEC TMSS — HDD Specification for Cable Crossings"
  ]
},

  "c3-s7-0": {
  "title": "أبعاد المناهيل القياسية",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "8 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "معرفة الأبعاد القياسية للمناهيل حسب مستوى الجهد في مشاريع SEC",
    "فهم العوامل التي تُحدد أبعاد المنهل",
    "معرفة متطلبات الارتفاع الداخلي",
    "حساب حجم المنهل للوصلات المتعددة"
  ],
  "content": "<h3>المنهل (Manhole / Jointing Bay) — بيت الوصلة</h3><p>غرفة تحت الأرض تُركَّب فيها وصلات الكيابل. أبعاده تُحدد بناءً على: عدد الكيابل، الجهد، عدد الوصلات، ونصف قطر الانحناء الأدنى (MBR).</p><h3>الأبعاد القياسية في مشاريع SEC</h3><ul><li>كيابل 11-33 kV: 3.0m × 1.5m × 2.0m (L×W×H)</li><li>كيابل 69-110 kV: 5.0m × 2.0m × 2.5m</li><li>كيابل 132 kV: 6.0m × 2.0m × 2.5m</li><li>كيابل 230 kV: 7.0m × 2.2m × 2.5m</li><li>كيابل 380 kV: 8.0m × 2.5m × 2.5m</li></ul><h3>متى يكبر المنهل؟</h3><p>في المناهيل التي تحتوي وصلات متعددة (مثلاً Cross Bonding: 3 IJ في منهل واحد)، يُضاف طول إضافي لكل وصلة.</p>",
  "tools": [
    {
      "name": "AutoCAD (Manhole Layout)",
      "icon": "pen-line"
    },
    {
      "name": "MBR Calculation Table",
      "icon": "ruler"
    }
  ],
  "hseWarnings": [
    "المنهل الذي لا يوفر ارتفاعاً داخلياً ≥ 2.2م يُصعّب عمل الجوينتر",
    "فتحة الدخول ≥ 600mm قطر — الأصغر يمنع إخراج شخص مصاب على نقالة"
  ],
  "commonMistakes": [
    "تصميم منهل يُهمل إضافة مساحة للـ Cable Slack (1.5-2م على كل جانب)",
    "إهمال حساب MBR في زوايا الدخول والخروج"
  ],
  "references": [
    "SEC TMSS — Manhole Design Standards",
    "IEC 60840 / 62067 — Cable Handling and Bending Radius",
    "CIGRÉ Technical Brochure — Manhole Design Principles"
  ]
},

  "c3-s7-1": {
  "title": "Pre-cast vs Cast-in-situ",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "7 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "المقارنة بين المناهيل المسبقة الصب والمصبوبة في الموقع",
    "معرفة العوامل التي تُحدد الاختيار",
    "فهم مزايا وعيوب كل نوع في السياق السعودي",
    "تحديد اشتراطات الجودة الخاصة بكل نوع"
  ],
  "content": "<h3>Pre-cast Manholes — المسبقة الصب</h3><p>تُصنَّع في المصنع كقطع جاهزة تُوصَّل في الموقع. تُستخدم في معظم مشاريع 11-132 kV في SEC.</p><h3>مزايا Pre-cast</h3><ul><li>جودة مضبوطة | سريع التركيب (يوماً بدلاً من أسابيع) | أقل تكلفةً للأحجام القياسية</li></ul><h3>عيوب Pre-cast</h3><ul><li>أبعاد ثابتة | وصلات بين القطع قد تكون نقاط ضعف | رافعات ثقيلة لنقل القطع الكبيرة</li></ul><h3>Cast-in-situ (CIS)</h3><p>تُصنَّع بالصب الخرساني المباشر في الموقع. تُستخدم للأحجام الكبيرة غير القياسية (230 kV، 380 kV) أو عند الحاجة لأبعاد مخصصة.</p><h3>مزايا CIS</h3><ul><li>مرونة كاملة في الأبعاد | بنية أحادية متكاملة | مناسبة لمشاريع EHV</li></ul><h3>عيوب CIS</h3><ul><li>أبطأ بكثير (7-28 يوماً) | الجودة تعتمد على إشراف الموقع | أعلى تكلفةً للأحجام القياسية</li></ul>",
  "tools": [
    {
      "name": "Pre-cast Crane Lifting Set",
      "icon": "box"
    },
    {
      "name": "Formwork System (CIS)",
      "icon": "layers"
    },
    {
      "name": "Concrete Cube Testing Kit",
      "icon": "activity"
    }
  ],
  "hseWarnings": [
    "رفع قطع Pre-cast الكبيرة (وزن > 5 طن) يستلزم Crane Lift Plan معتمد",
    "الدخول لمنهل CIS قبل اكتمال معالجة الخرسانة (< 28 يوم) خطر"
  ],
  "commonMistakes": [
    "استخدام Pre-cast لمنهل 380 kV دون دراسة إمكانية رفع الأجزاء",
    "صب CIS في درجات حرارة > 38°C دون إجراءات Hot Weather Concreting"
  ],
  "references": [
    "ACI 305R — Hot Weather Concreting",
    "BS EN 1917 — Concrete Manhole Chambers",
    "SEC TMSS — Manhole Construction Specifications"
  ]
},

  "c3-s7-2": {
  "title": "المكونات الداخلية للمناهيل",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "9 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "معرفة جميع المكونات الداخلية للمنهل ووظيفة كل منها",
    "فهم متطلبات Cable Cleats وأهميتها في حالات القصر",
    "معرفة اشتراطات التهوية وصرف المياه",
    "تحديد متطلبات الحماية من الحريق"
  ],
  "content": "<h3>المكونات الداخلية للمنهل — كاملة</h3><h3>1. Cable Supports & Cleats</h3><p>رفوف فولاذية SS316 + Cable Cleats تُثبّت الكيابل. المهمة الأساسية: <strong>تحمّل القوى الكهروديناميكية عند القصر</strong>. تُركَّب كل 500-800mm.</p><h3>2. Sump Pit</h3><p>حفرة تجميع في أدنى نقطة (500×500×500mm) تجمع مياه التسرب.</p><h3>3. Ventilation</h3><ul><li>Natural Ventilation: فتحات تهوية طبيعية — كافية للمناهيل الصغيرة</li><li>Forced Ventilation: مراوح كهربائية — إلزامية للمناهيل الكبيرة (EHV)</li></ul><h3>4. Ladder & Access</h3><p>سلم فولاذي مقاوم للصدأ + Platform عند مستوى الوصلات.</p><h3>5. Fire Protection</h3><ul><li>Fire Barriers: تُسدّ فتحات الكيابل في الجدار</li><li>Fire-Retardant Coating: طلاء مثبّط للحريق</li><li>Fire Detector: في مشاريع EHV</li></ul><h3>6. Earthing System</h3><p>شريط نحاسي (Copper Earth Bar) يتصل بجميع الأجزاء المعدنية.</p>",
  "tools": [
    {
      "name": "Cable Cleats (Ellis Patents)",
      "icon": "box"
    },
    {
      "name": "Gas Detector (4-Gas)",
      "icon": "wind"
    },
    {
      "name": "Forced Ventilation Fan",
      "icon": "wind"
    },
    {
      "name": "Sump Pump (Submersible)",
      "icon": "droplet"
    }
  ],
  "hseWarnings": [
    "Cable Cleats غير محكمة الثبت تنكسر عند تيار القصر — خطر حريق وإصابات",
    "قبل كل دخول للمنهل: اختبار الغاز + تشغيل التهوية 10 دقائق + Buddy System"
  ],
  "commonMistakes": [
    "اختيار Cable Cleats بناءً على وزن الكيبل فقط دون حساب Electrodynamic Forces",
    "إهمال Fire Barriers عند فتحات الكيابل"
  ],
  "references": [
    "IEC 61914 — Cable Cleats",
    "BS EN 1366-3 — Fire Resistance of Service Penetrations",
    "SEC TMSS — Manhole Internal Fittings Requirements"
  ]
},

  "c3-s8-0": {
  "title": "Duct Proofing و Mandrel Test",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "8 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "فهم الغرض من Duct Proofing قبل سحب الكيابل",
    "إتقان إجراء Mandrel Test وتفسير نتائجه",
    "معرفة أبعاد Mandrel المطلوبة لكل قطر أنبوب",
    "التعامل مع حالات فشل Mandrel Test"
  ],
  "content": "<h3>لماذا Duct Proofing قبل سحب الكيابل؟</h3><p>يجب التحقق من أن الأنابيب: مستقيمة الداخل، خالية من الانسدادات، غير منكسرة، وضمن حدود الانحناء المسموحة. سحب كيبل EHV في أنبوب مشوه يُسبب تلفاً لا يُعوَّض.</p><h3>Mandrel Test</h3><p>أسطوانة صلبة قطرها = <strong>95% من القطر الداخلي الاسمي للأنبوب</strong>. يُسحب خلال الأنبوب. إذا مرّ بسهولة = اجتياز.</p><h3>مثال: أنبوب HDPE داخلي 200mm</h3><ul><li>قطر Mandrel = 0.95 × 200 = 190mm</li><li>طول Mandrel = 300mm</li></ul><h3>إجراء Mandrel Test</h3><ol><li>تمرير حبل نايلون (Guide Rope) بالـ Rodding</li><li>ربط Mandrel + Foam Swab بطرف الحبل</li><li>سحب Mandrel ببطء — أي مقاومة تعني عائقاً</li><li>توثيق النتيجة في Duct Proofing Certificate</li></ol>",
  "tools": [
    {
      "name": "Mandrel (Steel/PVC)",
      "icon": "wrench"
    },
    {
      "name": "Foam Swab (Pipe Pig)",
      "icon": "box"
    },
    {
      "name": "Duct CCTV Camera",
      "icon": "camera"
    }
  ],
  "hseWarnings": [
    "سحب Mandrel بقوة مفرطة عند الاستقرار قد يُكسر الأنبوب — توقف وشخّص قبل الزيادة",
    "لا تسحب الكيابل في أنبوب لم يجتاز Mandrel Test"
  ],
  "commonMistakes": [
    "استخدام Mandrel بقطر 90% بدلاً من 95%",
    "إجراء Mandrel Test بدون Foam Swab قبله — الحطام يظل داخل الأنبوب"
  ],
  "references": [
    "SEC TMSS — Duct Proving Requirements",
    "BS EN 61386-24 — Conduit Systems, Underground Installations",
    "IEEE P1679 — Cable Duct Proving Procedures"
  ]
},

  "c3-s8-1": {
  "title": "Rodding",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "6 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "فهم عملية Rodding وغرضها في الاستعداد لسحب الكيابل",
    "معرفة أنواع Rods وطريقة استخدامها",
    "إتقان تمرير Draw Rope عبر الأنابيب الطويلة",
    "التعامل مع العوائق أثناء Rodding"
  ],
  "content": "<h3>Rodding — تمهيد طريق الكيبل</h3><p>إدخال قضبان مرنة (Rods) متشابكة في الأنبوب بهدف: تنظيف الأنبوب، التحقق من عدم وجود انسداد، وتمرير Draw Rope لاحقاً.</p><h3>أدوات Rodding</h3><ul><li>Fibreglass Rods: قضبان مرنة قطر 10-16mm — الأكثر استخداماً</li><li>Steel Rods: لتفتيت العوائق الصلبة</li><li>Power Rodder: للأنابيب الطويلة > 50م</li></ul><h3>الخطوات</h3><ol><li>ربط Cleaning Brush في مقدمة Rod الأول</li><li>دفع Rods بالتوصيل التدريجي حتى الوصول للطرف الآخر</li><li>ربط Draw Rope بطرف الـ Rod في المنهل البعيد</li><li>سحب Rods للخلف بينما يسحب الحبل خلف الأنابيب</li></ol>",
  "tools": [
    {
      "name": "Fibreglass Rods Set",
      "icon": "wrench"
    },
    {
      "name": "Cleaning Brush",
      "icon": "settings"
    },
    {
      "name": "Draw Rope (PP/Nylon)",
      "icon": "layers"
    },
    {
      "name": "Power Rodder Machine",
      "icon": "settings"
    }
  ],
  "hseWarnings": [
    "Rod تنكسر وتنقلب فجأة عند الاستقرار — قفازات ونظارات واقية إلزامية",
    "لا تُضغط Rods بقوة مفرطة — Rod منكسرة داخل الأنبوب أصعب إزالةً من العائق"
  ],
  "commonMistakes": [
    "تمرير Draw Rope بدون Cleaning Brush أولاً",
    "إهمال اختبار قوة الحبل (SWL) قبل استخدامه"
  ],
  "references": [
    "SEC TMSS — Duct Rodding and Preparation",
    "BS 7671 — Cable Installation Guidance",
    "Cable Installation Manual (Nexans/Prysmian)"
  ]
},

  "c3-s8-2": {
  "title": "حسابات قوة السحب (Pulling Tension)",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "12 دقائق",
  "difficulty": "متقدم",
  "objectives": [
    "إتقان حساب قوة السحب للمسارات الأفقية والمنحنية والرأسية",
    "معرفة الحد الأقصى المسموح لقوة السحب لكل نوع كيبل",
    "فهم تأثير Coefficient of Friction وطريقة تقليله",
    "التحقق من قبول مسار السحب قبل التنفيذ"
  ],
  "content": "<h3>المعادلة الأساسية — مسار أفقي مستقيم</h3><pre>T = μ × W × L</pre><ul><li>T: قوة السحب (N) | μ: معامل الاحتكاك | W: وزن الكيبل (N/m) | L: طول المسار (m)</li></ul><h3>قيم μ النموذجية</h3><ul><li>كيبل جاف في HDPE: μ = 0.4-0.5</li><li>مع Cable Lubricant: μ = 0.2-0.3</li><li>في Duct مبلل: μ = 0.15-0.2</li></ul><h3>المسار المنحني — Capstan Effect</h3><pre>T_out = T_in × e^(μ × θ)</pre><p>انحناء 90° مع μ=0.3: T_out ≈ 1.6 × T_in — أي الشد يزداد 60% في انحناء واحد!</p><h3>الحدود القصوى المسموحة</h3><ul><li>للموصل النحاسي: T_max = 70 N/mm² × مقطع الموصل</li><li>للموصل الألمنيوم: T_max = 40 N/mm² × مقطع</li></ul><h3>مثال: كيبل 110 kV 1200mm² Cu</h3><ul><li>T أفقي = 0.25 × 245 × 400 = 24.5 kN — ضمن الحدود ✓</li></ul>",
  "tools": [
    {
      "name": "Pulling Tension Calculator",
      "icon": "cpu"
    },
    {
      "name": "Dynamometer (Load Cell)",
      "icon": "activity"
    },
    {
      "name": "Cable Lubricant (Polywater J)",
      "icon": "droplet"
    }
  ],
  "hseWarnings": [
    "إذا وصل Dynamometer للحد الأقصى → أوقف Winch فوراً. لا تزيد القوة",
    "قطع Pulling Eye أثناء السحب يُطلق طرف الكيبل بقوة خطيرة — لا تقف أمام خط السحب"
  ],
  "commonMistakes": [
    "إهمال حساب Capstan Effect في الانحناءات",
    "عدم تطبيق Cable Lubricant بالكمية الكافية"
  ],
  "references": [
    "IEEE 1185 — Cable Installation in Conduit",
    "Southwire Cable Installation Guide",
    "Prysmian / Nexans Pulling Tension Calculator"
  ]
},

  "c3-s8-3": {
  "title": "Side Wall Pressure",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "8 دقائق",
  "difficulty": "متقدم",
  "objectives": [
    "فهم مفهوم Side Wall Pressure وأسباب خطورته",
    "حساب SWP في نقاط الانحناء",
    "معرفة الحد الأقصى المسموح لـ SWP لكيابل HV/EHV",
    "تصميم Corner Rollers لتقليل SWP"
  ],
  "content": "<h3>Side Wall Pressure — الضغط الجانبي على الانحناءات</h3><p>عند انحناء الكيبل في منعطف، تنشأ قوة ضاغطة على الجانب الداخلي. إذا تجاوزت الحد المسموح، تُشوّه HDPE Jacket أو تُتلف طبقات الكيبل الخارجية.</p><h3>معادلة SWP</h3><pre>SWP = T / R</pre><ul><li>SWP: الضغط الجانبي (N/m) | T: قوة الشد (N) | R: نصف قطر الانحناء (m)</li></ul><h3>الحد الأقصى المسموح</h3><ul><li>كيابل XLPE HV/EHV: 3000-5000 N/m (3-5 kN/m)</li></ul><h3>كيف تُقلل SWP؟</h3><ul><li>زيادة نصف قطر Corner Roller (R أكبر)</li><li>تقليل T بتطبيق Cable Lubricant</li><li>Push-Pull Method: دفع من طرف وسحب من الآخر</li></ul>",
  "tools": [
    {
      "name": "Large Radius Corner Roller",
      "icon": "settings"
    },
    {
      "name": "Tension Monitor (Dynamometer)",
      "icon": "activity"
    },
    {
      "name": "SWP Calculator",
      "icon": "cpu"
    }
  ],
  "hseWarnings": [
    "تلف HDPE Jacket من SWP الزائد لا يُرى فوراً — يظهر في Sheath Test لاحقاً",
    "Corner Rollers غير مثبتة تنزلق وتُسبب SWP غير متحكم به"
  ],
  "commonMistakes": [
    "حساب SWP باستخدام T الأولية بدلاً من T عند الانحناء بعد تراكم الاحتكاك",
    "استخدام نفس Corner Rollers لجميع أقطار الكيابل"
  ],
  "references": [
    "IEEE 1185 — Conduit and Duct Installation of Cable",
    "CIGRÉ Technical Brochure — Cable Pulling Mechanics",
    "Prysmian / Nexans Cable Handling Guidelines"
  ]
},

  "c3-s8-4": {
  "title": "Jamming Ratio",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "7 دقائق",
  "difficulty": "متقدم",
  "objectives": [
    "فهم مفهوم Jamming Ratio وسبب حرجيّته",
    "حساب Jamming Ratio للكيابل ثلاثية الأطوار في أنبوب واحد",
    "تحديد نطاق D/d الآمن",
    "اختيار قطر الأنبوب الصحيح لثلاثة كيابل"
  ],
  "content": "<h3>Jamming Ratio — خطر الانحشار الصامت</h3><p>عند سحب ثلاثة كيابل في نفس الأنبوب (Triple Pull)، قد تنحشر في الانحناءات. <strong>Jamming Ratio</strong> معيار رياضي يُحدد ما إذا كان هناك خطر انحشار.</p><h3>معادلة Jamming Ratio</h3><pre>J = D / d</pre><ul><li>D: القطر الداخلي للأنبوب | d: القطر الخارجي لكل كيبل</li></ul><h3>نطاقات J وتفسيرها</h3><ul><li>J < 2.0: خطر انحشار مرتفع جداً</li><li>J = 2.0-2.5: منطقة الخطر (Jamming Zone)</li><li>J > 2.5 (ويُفضَّل > 3.0): آمن</li></ul><h3>مثال عملي</h3><ul><li>3 كيابل 110 kV بـ OD = 100mm</li><li>أنبوب D=230mm → J = 2.3 ← خطر!</li><li>أنبوب D=300mm → J = 3.0 ← آمن ✓</li></ul>",
  "tools": [
    {
      "name": "Jamming Ratio Calculator",
      "icon": "cpu"
    },
    {
      "name": "Cable OD Measurement Tape",
      "icon": "ruler"
    }
  ],
  "hseWarnings": [
    "انحشار 3 كيابل EHV أثناء السحب = أزمة كبيرة. الوقاية بالحساب المسبق",
    "لا تحاول تحرير الكيابل المنحشرة بزيادة قوة الـ Winch"
  ],
  "commonMistakes": [
    "حساب J بناءً على القطر الاسمي بدلاً من الـ OD الفعلي",
    "اعتقاد أن J > 2.0 آمن تماماً — الموصى به J > 2.5"
  ],
  "references": [
    "IEEE 1185 — Cable Installation in Conduit, Jamming Ratio",
    "Southwire Cable Installation Guide — Three-Cable Conduit",
    "CIGRÉ Technical Brochure — Cable Pulling Calculations"
  ]
},

  "c3-s9-0": {
  "title": "Winch",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "7 دقائق",
  "difficulty": "متوسط",
  "objectives": [
    "معرفة أنواع Winches المستخدمة في سحب كيابل HV/EHV",
    "فهم متطلبات Calibration وشهادات Winch",
    "معرفة إجراءات التشغيل الآمن",
    "فهم نظام Overload Protection"
  ],
  "content": "<h3>Winch — قلب عملية السحب</h3><p>جهاز ميكانيكي/هيدروليكي يُولّد قوة السحب اللازمة. اختيار Winch بقدرة مناسبة وتشغيله بشكل صحيح يضمن عدم تجاوز Pulling Tension المسموح.</p><h3>أنواع Winches</h3><ul><li>Hydraulic Cable Winch: الأكثر استخداماً في HV/EHV. قدرات 5-50 kN. تحكم دقيق في السرعة والقوة. مُجهَّز بـ Load Cell</li><li>Electric Winch: أصغر وأهدأ. مناسب لـ MV والمسافات القصيرة</li><li>Bull Wheel Winch: للسحب المستمر لمسافات طويلة جداً</li></ul><h3>معايرة Winch</h3><ul><li>شهادة معايرة سارية (سنوية) من جهة معتمدة</li><li>Load Cell مُعايَرة تُعطي قراءة فعلية في الوقت الحقيقي</li><li>Overload Protection: يُوقف Winch تلقائياً عند التجاوز</li></ul><h3>سرعة السحب</h3><ul><li>كيابل HV/EHV (110 kV فأعلى): 5-10 م/دقيقة</li><li>كيابل MV: 10-20 م/دقيقة</li></ul>",
  "tools": [
    {
      "name": "Hydraulic Cable Winch (5-50 kN)",
      "icon": "settings"
    },
    {
      "name": "Load Cell / Dynamometer",
      "icon": "activity"
    },
    {
      "name": "Winch Calibration Certificate",
      "icon": "file-text"
    }
  ],
  "hseWarnings": [
    "لا تقف في خط الحبل — انقطاع الحبل المشدود خطر إصابة خطير",
    "Winch بدون Load Cell وOverload Protection ممنوع في مشاريع HV/EHV"
  ],
  "commonMistakes": [
    "تشغيل Winch بسرعة عالية في بداية السحب",
    "إهمال مراقبة Load Cell طوال فترة السحب"
  ],
  "references": [
    "IEEE 1185 — Power Cable Installation",
    "ISO 4309 — Wire Ropes in Cranes",
    "SEC Method Statement — Cable Pulling Operations"
  ]
},

  "c3-s9-1": {
  "title": "Rollers",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "6 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "معرفة أنواع Rollers المستخدمة في سحب الكيابل",
    "فهم الفاصل الصحيح بين الـ Rollers",
    "معرفة كيفية اختيار Cable Roller المناسب",
    "فهم دور Rollers في تقليل الاحتكاك"
  ],
  "content": "<h3>Cable Rollers — حاملو الكيبل أثناء السحب</h3><p>بكرات تُوضع على طول مسار السحب لحمل الكيبل ومنعه من الاحتكاك المباشر بالتربة أو جدران الأنابيب.</p><h3>أنواع Rollers</h3><ul><li>Straight Rollers (Ground Rollers): أفقية مستقيمة — كل 3-5م على طول الخندق</li><li>Corner/Bend Rollers: لتوجيه الكيبل في الانحناءات. نصف قطرها ≥ MBR</li><li>Vertical Rollers (Sheaves): رأسية عند مداخل المناهيل</li></ul><h3>تقليل الاحتكاك</h3><p>استخدام Rollers يُخفّض μ من 0.5 (على أرض ترابية) إلى 0.1-0.15 — تقليل بـ 70% يُخفّض Pulling Tension بالنسبة نفسها.</p>",
  "tools": [
    {
      "name": "Straight Cable Rollers (HDPE)",
      "icon": "layers"
    },
    {
      "name": "Corner Bend Roller Set",
      "icon": "settings"
    },
    {
      "name": "Vertical Sheave",
      "icon": "box"
    }
  ],
  "hseWarnings": [
    "Rollers المتحركة تحت الكيابل الثقيلة — خطر سحق الأصابع. قفازات جلدية إلزامية",
    "تأكد من تثبيت كل Roller قبل بدء السحب"
  ],
  "commonMistakes": [
    "مسافات بين Rollers أكبر من 5م — تُسبب ترهلاً (Sag)",
    "استخدام Corner Roller بنصف قطر أقل من MBR الكيبل"
  ],
  "references": [
    "Nexans / Prysmian Cable Handling Guidelines",
    "IEEE 1185 — Roller Spacing Requirements",
    "SEC Method Statement — Cable Pulling Accessories"
  ]
},

  "c3-s9-2": {
  "title": "Bell Mouth",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "5 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "فهم وظيفة Bell Mouth عند مداخل الأنابيب",
    "معرفة مواصفات Bell Mouth المناسبة",
    "فهم آلية توزيع الضغط",
    "معرفة كيفية تثبيت Bell Mouth"
  ],
  "content": "<h3>Bell Mouth — حارس مدخل الأنبوب</h3><p>قطعة مخروطية الشكل تُركَّب في مدخل الأنبوب لتوجيه الكيبل بلطف. بدونها، يصطدم الكيبل بحافة الأنبوب الحادة مما يُخدش أو يثقب الـ HDPE Jacket.</p><h3>التصميم الهندسي</h3><ul><li>شكل مخروطي بزاوية فتحة 20-30°</li><li>نصف قطر التقوّس الداخلي: ≥ MBR الكيبل</li><li>السطح الداخلي: أملس (Polished Steel أو HDPE)</li><li>قطر الفوهة الداخلية: أكبر من OD الكيبل بـ 20-30mm</li></ul><h3>أين يُركَّب؟</h3><ul><li>عند كل مدخل أنبوب من المنهل</li><li>عند الانعطافات الرأسية في الأنابيب</li></ul>",
  "tools": [
    {
      "name": "Bell Mouth (Polished Steel/HDPE)",
      "icon": "box"
    },
    {
      "name": "Clamps for Bell Mouth Fixing",
      "icon": "wrench"
    }
  ],
  "hseWarnings": [
    "Bell Mouth معدني حادّ الحواف يُخدش الـ HDPE Jacket — فحص الصقل قبل التركيب",
    "Bell Mouth غير مثبّت يدور مع الكيبل ويُضاعف الضغط"
  ],
  "commonMistakes": [
    "استخدام Bell Mouth ذي نصف قطر أقل من MBR",
    "إهمال تركيبه اعتقاداً بأن المسافة قصيرة"
  ],
  "references": [
    "Nexans Cable Installation Manual — Bell Mouth Specifications",
    "IEEE 1185 — Cable Entry into Conduit",
    "SEC Method Statement — Cable Pulling Accessories"
  ]
},

  "c3-s9-3": {
  "title": "Swivel",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "5 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "فهم وظيفة Swivel في منع التفاف الكيبل",
    "معرفة أنواع Swivels",
    "فهم ظاهرة Torque في الكيابل الملتوية",
    "معرفة كيفية تركيب Swivel في سلسلة السحب"
  ],
  "content": "<h3>Swivel — مانع الالتفاف</h3><p>حلقة دوّارة تُفصل بين حبل السحب والكيبل فتمتص عزم الدوران (Torque) الذي يُسبب التواء الكيبل.</p><h3>موقع Swivel في سلسلة السحب</h3><pre>Winch Rope → Swivel → Pulling Eye → Cable</pre><h3>قدرة Swivel المطلوبة</h3><p>WLL (Working Load Limit) ≥ Pulling Tension المحسوبة مع هامش أمان 2:1 على الأقل.</p>",
  "tools": [
    {
      "name": "Pulling Swivel (Ball Bearing)",
      "icon": "settings"
    },
    {
      "name": "Load Rating Chart",
      "icon": "file-text"
    }
  ],
  "hseWarnings": [
    "Swivel ذو قدرة أقل من الشد الفعلي قد ينكسر — قطعه أثناء السحب خطير",
    "فحص Swivel قبل كل استخدام للتأكد من حرية دورانه"
  ],
  "commonMistakes": [
    "استخدام Swivel بدون التحقق من WLL",
    "تركيب Swivel في الموقع الخاطئ في سلسلة السحب"
  ],
  "references": [
    "Nexans / Prysmian Cable Installation Guide",
    "IEEE 1185 — Anti-Twist Pulling Swivel",
    "SEC Method Statement — Cable Pulling Equipment"
  ]
},

  "c3-s9-4": {
  "title": "Pulling Eye",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "6 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "فهم أنواع Pulling Eyes وكيفية تركيبها",
    "معرفة الحد الأقصى لقوة السحب لكل نوع",
    "التمييز بين Pulling Eye وCable Pulling Sock",
    "فهم إجراءات تركيب Pulling Eye على كيابل HV/EHV"
  ],
  "content": "<h3>Pulling Eye — نقطة الاتصال مع الكيبل</h3><p>يتصل مباشرة بطرف الكيبل ويُنقل قوة السحب. اختيار النوع الصحيح وتركيبه بشكل سليم يمنع انفصال الكيبل أثناء السحب.</p><h3>نوعا Pulling Eye</h3><ul><li><strong>Pulling Eye على الموصل</strong>: يُثبَّت بالـ Crimping — الطريقة المفضلة لكيابل HV/EHV</li><li><strong>Pulling Sock (Mesh Grip)</strong>: شبكة فولاذية تُحكم على الـ Jacket. مناسب للكيابل MV والمسافات القصيرة</li></ul><h3>تركيب Pulling Eye على كيابل HV/EHV</h3><ol><li>تجهيز طرف الكيبل حسب تعليمات المصنع</li><li>تنظيف الموصل من الأكسيد</li><li>إدخال الموصل في Pulling Eye</li><li>Crimping بضغط هيدروليكي محدد</li><li>Pull Test قبل السحب الفعلي</li></ol>",
  "tools": [
    {
      "name": "Hydraulic Crimping Tool",
      "icon": "wrench"
    },
    {
      "name": "Pulling Eye (Copper/Aluminium)",
      "icon": "box"
    },
    {
      "name": "Cable Pulling Sock (Mesh Grip)",
      "icon": "layers"
    }
  ],
  "hseWarnings": [
    "Pulling Eye مُركَّبة بـ Crimping غير مكتمل = انفصال مفاجئ أثناء السحب",
    "لا تستخدم Pulling Sock بمفرده على كيابل EHV > 200م"
  ],
  "commonMistakes": [
    "استخدام Die Crimping خاطئ",
    "اختيار Pulling Eye من Copper لموصل Aluminium — تآكل كيميائي"
  ],
  "references": [
    "Nexans Cable Installation Guide — Pulling Eye",
    "IEEE 1185 — Cable Pulling Attachment Methods",
    "SEC Method Statement — Cable Pulling Accessories"
  ]
},

  "c3-s9-5": {
  "title": "Dynamometer",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "6 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "فهم وظيفة Dynamometer في مراقبة عملية السحب",
    "معرفة أنواع Dynamometers",
    "قراءة وتفسير بيانات Dynamometer أثناء السحب",
    "اتخاذ القرار الصحيح عند الوصول لحدود الشد"
  ],
  "content": "<h3>Dynamometer — عين عملية السحب</h3><p>يُركَّب في سلسلة السحب بين الـ Winch والحبل لقياس قوة السحب الفعلية بالوقت الحقيقي.</p><h3>موقع Dynamometer</h3><pre>Winch → Dynamometer → Swivel → Pulling Eye → Cable</pre><h3>القراءات المهمة أثناء السحب</h3><ul><li>Steady Reading: قوة ثابتة = سحب طبيعي</li><li>Gradual Increase: زيادة تدريجية = تراكم احتكاك طبيعي</li><li>Sudden Spike: ارتفاع مفاجئ = عائق في الأنبوب. أوقف فوراً</li><li>Oscillating Reading: تذبذب = مشكلة في Rollers أو السرعة</li></ul>",
  "tools": [
    {
      "name": "Digital Dynamometer (Load Cell)",
      "icon": "activity"
    },
    {
      "name": "Wireless Tension Monitor",
      "icon": "radio"
    },
    {
      "name": "Data Logger",
      "icon": "hard-drive"
    }
  ],
  "hseWarnings": [
    "Dynamometer دون شهادة معايرة سارية = قراءات غير موثوقة",
    "الانشغال بقراءة Dynamometer وتجاهل ما يحدث في الموقع = خطر"
  ],
  "commonMistakes": [
    "وضع Limit Alert عند 100% من Tmax دون هامش أمان",
    "عدم تسجيل بيانات Dynamometer طوال عملية السحب"
  ],
  "references": [
    "IEEE 1185 — Cable Pulling Monitoring",
    "ISO 376 — Calibration of Force-Measuring Instruments",
    "SEC ITP — Cable Pulling Monitoring Requirements"
  ]
},

  "c3-s9-6": {
  "title": "Cable Lubricant",
  "category": "الأعمال المدنية والسحب",
  "categoryEn": "Civil Works & Cable Pulling",
  "duration": "6 دقائق",
  "difficulty": "مبتدئ",
  "objectives": [
    "فهم دور Cable Lubricant في تقليل قوة السحب",
    "معرفة الأنواع المختلفة وشروط اختيار كل منها",
    "التحقق من توافق Lubricant مع مواد الكيبل والأنبوب",
    "معرفة طريقة التطبيق الصحيحة"
  ],
  "content": "<h3>Cable Lubricant — مُيسِّر السحب</h3><p>مادة تُطبَّق على سطح الكيبل لتقليل μ. يُخفّض Pulling Tension بنسبة 40-60% — فارق يُحدد نجاح أو فشل السحب في المسارات الطويلة.</p><h3>أنواع Cable Lubricants</h3><ul><li>Water-Based (مثل Polywater J): الأكثر استخداماً. غير قابلة للاشتعال، متوافقة مع HDPE وXLPE</li><li>Gel-Based: قوام جيلاتيني يلتصق بسطح الكيبل أطول — أفضل للأنابيب الرأسية</li><li>Wax-Based: للدرجات الحرارة المرتفعة (صيف السعودية)</li></ul><h3>طريقة التطبيق</h3><ul><li>تُطبَّق بوفرة على سطح الكيبل أثناء انطلاقه من الطبل</li><li>يُعاد التطبيق كل 50-100م للمسارات الطويلة</li></ul>",
  "tools": [
    {
      "name": "Polywater J Lubricant",
      "icon": "droplet"
    },
    {
      "name": "Lubricant Pump Applicator",
      "icon": "settings"
    },
    {
      "name": "Application Brush",
      "icon": "wrench"
    }
  ],
  "hseWarnings": [
    "Cable Lubricant يُزلق السطح — انتبه للكيابل المُشحَّمة خارج الأنابيب لتجنب الانزلاق",
    "تجنب استنشاق رذاذ بعض Lubricants في المناطق مغلقة التهوية"
  ],
  "commonMistakes": [
    "استخدام شحم سيارات كـ Lubricant — يُتلف الـ HDPE Jacket",
    "تطبيق Lubricant قبل يوم من السحب — يجفّ ويفقد فعاليته"
  ],
  "references": [
    "Polywater J Technical Data Sheet",
    "IEEE 1185 — Lubricants for Cable Installation",
    "Nexans / Prysmian Approved Lubricant List"
  ]
}
};

// ===== GLOSSARY (50+ Terms) =====
const GLOSSARY = [
  { ar: "الكيبل الأرضي", en: "Underground Cable (UGC)", def: "كيبل كهربائي مدفون أو مركّب في أنفاق أو قنوات تحت الأرض لنقل الطاقة الكهربائية." },
  { ar: "الخط الهوائي", en: "Overhead Line (OHL)", def: "خط كهربائي يُعلّق على أبراج أو أعمدة فوق سطح الأرض." },
  { ar: "الجهد فائق العلو", en: "Extra High Voltage (EHV)", def: "الجهد الذي يتجاوز 230 kV، مثل 380 kV." },
  { ar: "الجهد العالي", en: "High Voltage (HV)", def: "الجهد بين 100-230 kV، مثل 132 kV و 110 kV." },
  { ar: "الجهد المتوسط", en: "Medium Voltage (MV)", def: "الجهد بين 1-100 kV، مثل 33 kV و 11 kV." },
  { ar: "الموصل", en: "Conductor", def: "الجزء المعدني (نحاس أو ألومنيوم) داخل الكيبل الذي ينقل التيار." },
  { ar: "العزل", en: "Insulation", def: "الطبقة العازلة التي تمنع تسرب التيار من الموصل." },
  { ar: "الشاشة المعدنية", en: "Metallic Screen", def: "طبقة معدنية في الكيبل تعمل كمسار لتيار القصر والأرض." },
  { ar: "XLPE", en: "Cross-Linked Polyethylene", def: "نوع عزل بوليمري يتحمل درجات حرارة عالية، الأكثر استخداماً اليوم." },
  { ar: "PILC", en: "Paper Insulated Lead Covered", def: "كيبل قديم معزول بالورق المشبّع بالزيت ومغلف بالرصاص." },
  { ar: "العزل الداخلي", en: "Semi-Conductor", def: "طبقة شبه موصلة تعمل على تجانس المجال الكهربائي حول الموصل." },
  { ar: "الوصلة المستقيمة", en: "Straight Joint", def: "وصلة لربط كيبلين من نفس النوع والمواصفات." },
  { ar: "الوصلة الانتقالية", en: "Transition Joint", def: "وصلة لربط نوعين مختلفين من الكيبل، مثل XLPE و PILC." },
  { ar: "الوصلة المعزولة", en: "Insulated Joint (IJ)", def: "وصلة تعزل الشاشة المعدنية، تُستخدم في نظام Cross Bonding." },
  { ar: "النهاية الخارجية", en: "Outdoor Termination", def: "نهاية الكيبل عند الربط بالهواء الطلق، للمحطات المكشوفة." },
  { ar: "نهاية GIS", en: "GIS Termination", def: "نهاية كيبل مخصصة للربط بمفاتيح معزولة بغاز SF6." },
  { ar: "اختبار الجهد العالي", en: "HV Test", def: "اختبار تطبيق جهد عالي على الكيبل للتحقق من سلامة العزل." },
  { ar: "Partial Discharge", en: "Partial Discharge (PD)", def: "تفريغ جزئي داخل فجوة عزل، يدل على عيب داخلي. الحد <5 pC للـ EHV." },
  { ar: "Tan Delta", en: "Dissipation Factor", def: "مقياس لفقد الطاقة في العزل. XLPE الجديد <0.1%." },
  { ar: "Megger Test", en: "Insulation Resistance Test", def: "اختبار قياس مقاومة العزل، القيمة ≥1000 MΩ." },
  { ar: "VLF", en: "Very Low Frequency", def: "اختبار بجهد AC بتردد منخفض 0.1 Hz للكيابل المتوسطة." },
  { ar: "OTDR", en: "Optical Time Domain Reflectometer", def: "جهاز اختبار الفايبر البصري عن بُعد لقياس الفقد والأعطال." },
  { ar: "Fusion Splicing", en: "Fusion Splicing", def: "ربط ليفين بصريين عن طريق صهرهما بالحرارة." },
  { ar: "OPGW", en: "Optical Ground Wire", def: "كيبل فايبر مدمج مع سلك الأرضي في الخطوط الهوائية." },
  { ar: "ADSS", en: "All-Dielectric Self-Supporting", def: "كيبل فايبر عازل ذاتي الحمل، لا يحتوي على معادن." },
  { ar: "التأريض الصلب", en: "Solid Bonding", def: "نظام bonding حيث تُؤرّض الشاشة المعدنية من الطرفين." },
  { ar: "Single-Point Bonding", en: "Single-Point Bonding", def: "تأريض من طرف واحد فقط مع SVL في الطرف الآخر." },
  { ar: "Cross Bonding", en: "Cross Bonding", def: "نظام تقاطع الشاشات لتقليل الخسائر في الكيابل الطويلة." },
  { ar: "Link Box", en: "Link Box", def: "صندوق يحتوي على نقاط توصيل الشاشة المعدنية والـ SVL." },
  { ar: "SVL", en: "Sheath Voltage Limiter", def: "جهاز يحمي الشاشة من الجهد الزائد أثناء الصواعق." },
  { ar: "ECC", en: "Earth Continuity Conductor", def: "موصل أرضي يضمن استمرارية التأريض بين الوصلات." },
  { ar: "Ampacity", en: "Ampacity", def: "الحد الأقصى للتيار الذي يتحمله الكيبل باستمرار بدون تلف." },
  { ar: "Route Survey", en: "Route Survey", def: "دراسة مسار الكيبل قبل التركيب لتحديد العوائق والمخاطر." },
  { ar: "NOC", en: "No Objection Certificate", def: "تصريح من الجهات المعنية للعمل في مسار معيّن." },
  { ar: "GPR", en: "Ground Penetrating Radar", def: "جهاز رادار لاكتشاف الخدمات المدفونة قبل الحفر." },
  { ar: "HDD", en: "Horizontal Directional Drilling", def: "تقنية حفر أفقي موجّه لتركيب الكيابل بدون حفر مفتوح." },
  { ar: "Duct Bank", en: "Duct Bank", def: "مجموعة قنوات متوازية داخل كتلة خرسانية لاحتضان الكيابل." },
  { ar: "CLSM", en: "Controlled Low-Strength Material", def: "مادة مالئة ذاتية التماسك، تُستخدم بدلاً من الردم التقليدي." },
  { ar: "Manhole", en: "Manhole", def: "غرفة تحت الأرض تحتوي على الوصلات وتسمح بالوصول للصيانة." },
  { ar: "PTW", en: "Permit to Work", def: "تصريح رسمي للعمل يصدر قبل بدء أي عمل خطر." },
  { ar: "LOTO", en: "Lock-Out Tag-Out", def: "نظام إقفال ووسم مصادر الطاقة لحماية العمال." },
  { ar: "Portable Earthing", en: "Portable Earthing", def: "جهاز تأريض مؤقت يُركّب قبل العمل لتفريغ الشحنات." },
  { ar: "Arc Flash", en: "Arc Flash", def: "قوس كهربائي عالي الطاقة قد يسبب حروقاً خطيرة." },
  { ar: "PPE", en: "Personal Protective Equipment", def: "معدات الحماية الشخصية (خوذة، قفازات، أحذية، إلخ)." },
  { ar: "ITP", en: "Inspection Test Plan", def: "خطة تفصيلية للتفتيش والاختبار خلال المشروع." },
  { ar: "NCR", en: "Non-Conformance Report", def: "تقرير عند مخالفة المواصفات أو المعايير." },
  { ar: "MTC", en: "Material Test Certificate", def: "شهادة اختبار المواد من المصنع." },
  { ar: "PAC", en: "Provisional Acceptance Certificate", def: "شهادة القبول المبدئي للمشروع." },
  { ar: "FAC", en: "Final Acceptance Certificate", def: "شهادة القبول النهائي بعد فترة الضمان." },
  { ar: "DLP", en: "Defect Liability Period", def: "فترة ضمان المقاول لإصلاح العيوب (عادة سنة)." },
  { ar: "DTS", en: "Distributed Temperature Sensing", def: "نظام مراقبة حرارة الكيبل باستخدام الفايبر البصري." },
  { ar: "DAS", en: "Distributed Acoustic Sensing", def: "نظام مراقبة الاهتزازات الصوتية على طول الفايبر." },
  { ar: "Water Treeing", en: "Water Treeing", def: "تشجر مجهري ناتج عن تسرب الماء للعزل، يؤدي لفشل الكيبل." },
  { ar: "Skin Effect", en: "Skin Effect", def: "ظاهرة تمركز التيار قرب سطح الموصل عند الترددات العالية." },
  { ar: "IEC 60840", en: "IEC 60840", def: "المعيار الدولي للكيابل الأرضية 30-150 kV." },
  { ar: "IEC 62067", en: "IEC 62067", def: "المعيار الدولي للكيابل الأرضية فوق 150 kV." },
  { ar: "IEC 60287", en: "IEC 60287", def: "المعيار الدولي لحسابات Current Rating." },
  { ar: "SEC TMSS", en: "SEC TMSS", def: "مواصفات الشركة السعودية للكهرباء للنقل." }
];

// ===== ROLES =====
const ROLES = [
  { id: "site", title: "مهندس موقع", titleEn: "Site Engineer", icon: "hard-hat" },
  { id: "testing", title: "مهندس اختبارات", titleEn: "Testing Engineer", icon: "flask-conical" },
  { id: "qaqc", title: "مهندس جودة", titleEn: "QA/QC Engineer", icon: "shield-check" },
  { id: "pm", title: "مدير مشروع", titleEn: "Project Manager", icon: "briefcase" },
  { id: "consultant", title: "استشاري", titleEn: "Consultant", icon: "user-cog" },
  { id: "inspector", title: "مفتش SEC", titleEn: "SEC Inspector", icon: "search" },
  { id: "student", title: "طالب / خريج جديد", titleEn: "Student / Graduate", icon: "graduation-cap" }
];

// ===== CALCULATORS =====
const CALCULATORS = [
  {
    id: "ampacity", title: "التيار الأقصى", titleEn: "Ampacity", icon: "activity",
    color: "v-ehv", reference: "IEC 60287",
    desc: "حساب السعة الحالية للكيبل حسب ظروف التركيب"
  },
  {
    id: "pulling", title: "قوة السحب", titleEn: "Pulling Tension", icon: "move-horizontal",
    color: "v-hv", reference: "IEEE 1185",
    desc: "T = μ × W × L — لحساب قوة السحب الآمنة"
  },
  {
    id: "vdrop", title: "هبوط الجهد", titleEn: "Voltage Drop", icon: "trending-down",
    color: "secondary-500", reference: "IEC 60364",
    desc: "حساب فقدان الجهد على طول الكيبل"
  },
  {
    id: "sc", title: "القصر الكهربائي", titleEn: "Short Circuit", icon: "alert-triangle",
    color: "cat-500", reference: "IEC 60949",
    desc: "I²t = K² × A² — تحمل الكيبل لتيار القصر"
  },
  {
    id: "fiber", title: "فقدان الفايبر", titleEn: "Fiber Loss", icon: "radio",
    color: "success", reference: "ITU-T G.652",
    desc: "حساب dB Budget الكلي لخط الفايبر"
  },
  {
    id: "site", title: "ظروف الموقع 🇸🇦", titleEn: "Saudi Site Derating", icon: "map-pin",
    color: "success", reference: "SEC TMSS",
    desc: "Derating Factors للظروف السعودية"
  }
];

// ===== QUIZ QUESTIONS =====
const QUIZ_QUESTIONS = {
  module12: [
    {
      q: "ما هو الحد الأقصى المسموح لقراءة Partial Discharge في كيبل 132 kV بعد التركيب؟",
      options: ["< 2 pC", "< 5 pC", "< 10 pC", "< 25 pC"],
      correct: 2,
      explain: "حد PD للـ HV (132 kV) هو 10 pC حسب IEC 60270. للـ EHV (230+) الحد أقل = 5 pC."
    },
    {
      q: "ما هو الاختبار الممنوع تطبيقه على كيبل XLPE؟",
      options: ["AC Resonant Test", "VLF Test", "DC High Voltage Test", "Megger Test"],
      correct: 2,
      explain: "DC High Voltage Test يسبب Space Charge داخل XLPE مما يقلل عمره الافتراضي، لذا ممنوع."
    },
    {
      q: "كم الحد الأقصى لـ Induced Voltage في نظام Bonding؟",
      options: ["25 V", "50 V", "65 V", "100 V"],
      correct: 2,
      explain: "الحد المسموح هو 65 V حسب معايير السلامة لحماية العاملين."
    },
    {
      q: "ما هي مدة Sheath Test القياسية؟",
      options: ["30 ثانية", "1 دقيقة", "5 دقائق", "15 دقيقة"],
      correct: 1,
      explain: "Sheath Test = 10 kV DC لمدة 1 دقيقة حسب IEC 60229."
    },
    {
      q: "ما قيمة Tan Delta المقبولة لعزل XLPE الجديد؟",
      options: ["< 0.01%", "< 0.1%", "< 1%", "< 5%"],
      correct: 1,
      explain: "Tan Delta للـ XLPE الجديد يجب أن يكون أقل من 0.1%."
    }
  ]
};

// ===== DECISION TREES =====
const DECISION_TREES = [
  {
    id: "pd-high",
    title: "ارتفاع PD أثناء الاختبار",
    desc: "ماذا أفعل إذا ارتفعت قراءة Partial Discharge؟",
    steps: [
      {
        q: "هل الجهاز والاتصالات سليمة؟",
        options: [
          { label: "نعم، فحصت كل شي", next: 1 },
          { label: "لا، لم أفحص بعد", action: "راجع فحص المعدات أولاً" }
        ]
      },
      {
        q: "ما هي قيمة قراءة PD الحالية؟",
        options: [
          { label: "< 5 pC — آمن", severity: "safe", next: 2 },
          { label: "5 - 10 pC — تحذير", severity: "warn", next: 3 },
          { label: "> 10 pC — حرج", severity: "danger", next: 4 },
          { label: "لا أستطيع القراءة", next: 5 }
        ],
        explain: "حد PD للـ EHV = 5 pC، للـ HV = 10 pC. تجاوز الحد يعني عيب داخلي محتمل."
      },
      {
        q: "النتيجة: القراءة طبيعية",
        options: [ { label: "أكمل الاختبار", action: "يمكنك متابعة الاختبار بأمان" } ]
      },
      {
        q: "راقب لمدة 15 دقيقة، هل استقرت القراءة؟",
        options: [
          { label: "نعم، استقرت", next: 2 },
          { label: "لا، تزداد", next: 4 }
        ]
      },
      {
        q: "⚠️ إجراء فوري",
        options: [ { label: "أوقف الاختبار وبلّغ", action: "أوقف رفع الجهد. احفظ البيانات. بلّغ المدير فوراً. افحص الوصلات والنهايات الجديدة." } ]
      },
      {
        q: "ماذا يحدث على الشاشة؟",
        options: [
          { label: "الشاشة مظلمة", action: "مشكلة في الجهاز — اتصل بالدعم الفني" },
          { label: "القيم متذبذبة", action: "تداخل كهرومغناطيسي — افحص التأريض" }
        ]
      }
    ]
  },
  {
    id: "cable-stuck",
    title: "الكيبل لا ينسحب",
    desc: "تشخيص مشكلة انحباس الكيبل في القناة",
    steps: [
      {
        q: "هل تعدّت قوة السحب الحد المسموح؟",
        options: [
          { label: "نعم، قاربت الحد", next: 1 },
          { label: "لا، ضمن الحد", next: 2 }
        ]
      },
      {
        q: "⚠️ أوقف السحب فوراً",
        options: [ { label: "تحقق من المسار", action: "أوقف السحب. قد يكون هناك عائق أو انحناء حاد. استخدم Mandrel Test لفحص القناة." } ]
      },
      {
        q: "هل استخدمت Lubricant؟",
        options: [
          { label: "نعم", action: "تحقق من نوع الـ Lubricant — قد يكون غير مناسب للقناة" },
          { label: "لا", action: "أضف Lubricant مناسب وأعد المحاولة بحذر" }
        ]
      }
    ]
  }
];

// ===== COMMUNICATION TEMPLATES =====
const TEMPLATES = [
  {
    id: "ncr", title: "كتابة NCR (تقرير عدم مطابقة)", type: "formal",
    template: `السادة / [اسم المقاول]\n\nالموضوع: تقرير عدم مطابقة رقم [NCR-####]\n\nنفيدكم بأنه أثناء التفتيش بتاريخ [التاريخ] تم رصد المخالفة التالية:\n\n- الموقع: [اسم الموقع]\n- الوصف: [وصف المخالفة]\n- المرجع: [رقم البند في المواصفات]\n\nالإجراء المطلوب: [التصحيح المطلوب]\nالموعد النهائي: [التاريخ]\n\nمع التقدير،\n[الاسم]`
  },
  {
    id: "rfi", title: "الرد على RFI", type: "formal",
    template: `Reference: RFI-####\nSubject: [الموضوع]\n\nDear [Name],\n\nIn response to your Request for Information dated [date] regarding [topic], please find our technical clarification below:\n\n1. [النقطة الأولى]\n2. [النقطة الثانية]\n3. [النقطة الثالثة]\n\nKindly confirm receipt and proceed accordingly.\n\nBest regards,\n[Name]`
  },
  {
    id: "daily", title: "Daily Progress Report", type: "report",
    template: `التقرير اليومي — [التاريخ]\n\nالمشروع: [اسم المشروع]\nالقسم: [القسم]\n\n✅ الأعمال المنجزة اليوم:\n- [البند 1]\n- [البند 2]\n\n🔄 الأعمال الجارية:\n- [البند 1]\n\n⚠️ المشاكل والعوائق:\n- [البند 1]\n\n📋 الخطة لغداً:\n- [البند 1]\n\nالقوى العاملة: [العدد]\nالمعدات: [القائمة]\n\n[الاسم والتوقيع]`
  },
  {
    id: "eot", title: "طلب تمديد فترة التنفيذ (EOT)", type: "formal",
    template: `To: [Client Name]\nRef: EOT-####\nSubject: Request for Extension of Time\n\nDear Sir,\n\nWe hereby formally request an Extension of Time of [X] days for the captioned project due to the following reasons:\n\n1. [السبب الأول - مع الأدلة]\n2. [السبب الثاني - مع الأدلة]\n\nSupporting Documents:\n- [المرفق 1]\n- [المرفق 2]\n\nThe new proposed completion date is [date].\n\nYour kind approval is highly appreciated.\n\nBest regards,\n[Signature]`
  },
  {
    id: "moc", title: "محضر اجتماع (MoM)", type: "report",
    template: `محضر اجتماع\n\nالتاريخ: [date]\nالوقت: [time]\nالمكان: [location]\nالمشروع: [project]\n\nالحضور:\n1. [الاسم] - [الدور]\n2. [الاسم] - [الدور]\n\nجدول الأعمال:\n1. [البند]\n2. [البند]\n\nالقرارات والتكاليف:\n| الرقم | البند | المسؤول | الموعد |\n|------|------|--------|--------|\n| 1 | [القرار] | [الاسم] | [التاريخ] |\n\nالموعد القادم: [date]`
  }
];

// ===== RED FLAGS =====
const RED_FLAGS = [
  {
    title: "قراءة PD ترتفع فجأة أثناء الاختبار",
    category: "اختبارات",
    severity: "critical",
    desc: "قد يكون هناك عيب داخلي في الوصلة أو النهاية. أوقف الاختبار فوراً."
  },
  {
    title: "تدفق مياه في المنهول",
    category: "مدني",
    severity: "high",
    desc: "قد يؤدي لتلف الكيابل على المدى الطويل. يحتاج معالجة عاجلة بـ waterproofing."
  },
  {
    title: "Hot Spot في تحليل DTS",
    category: "صيانة",
    severity: "high",
    desc: "نقطة ساخنة غير طبيعية قد تدل على Overload أو مشكلة في التركيب."
  },
  {
    title: "تأخر تسليم المواد عن الموعد",
    category: "إدارة مشاريع",
    severity: "medium",
    desc: "راجع العقد، أرسل خطاب رسمي، وابدأ إجراءات EOT إذا لزم."
  },
  {
    title: "غياب الجوينتر المعتمد في يوم الوصلة",
    category: "جودة",
    severity: "high",
    desc: "لا تبدأ العمل بدون جوينتر معتمد. أي وصلة بدون إشراف ستفشل."
  },
  {
    title: "رطوبة تزيد عن 70% في Joint Tent",
    category: "تركيب",
    severity: "critical",
    desc: "أوقف العمل، فعّل مزيل الرطوبة، انتظر حتى الاستقرار."
  },
  {
    title: "رفض Material Test Certificate",
    category: "جودة",
    severity: "high",
    desc: "لا تقبل مواد بدون MTC. ارفض التوصيل وأرسل NCR."
  },
  {
    title: "تسرب زيت من PILC Joint قديم",
    category: "صيانة",
    severity: "medium",
    desc: "علامة على تدهور الوصلة. خطط لاستبدالها بـ Transition Joint إلى XLPE."
  }
];

// ===== EMERGENCY PROCEDURES =====
const EMERGENCY = [
  {
    title: "صعقة كهربائية لعامل",
    icon: "zap-off",
    color: "danger",
    steps: [
      "لا تلمس المصاب قبل فصل الكهرباء",
      "افصل مصدر الطاقة فوراً (المفتاح الرئيسي)",
      "اتصل بالطوارئ 997 فوراً",
      "ابدأ CPR إذا توقف التنفس",
      "حافظ على المصاب دافئاً حتى وصول الإسعاف",
      "لا تعطي المصاب أي سوائل"
    ]
  },
  {
    title: "انهيار خندق",
    icon: "alert-octagon",
    color: "danger",
    steps: [
      "أبعد الجميع عن المنطقة فوراً",
      "لا تحاول إنقاذ بنفسك قبل التأمين",
      "اتصل بالدفاع المدني 998",
      "وثّق المشهد بالصور",
      "ابلّغ الاستشاري والمالك",
      "لا تبدأ عمليات الإنقاذ بدون خبراء"
    ]
  },
  {
    title: "حريق في Joint أو Termination",
    icon: "flame",
    color: "danger",
    steps: [
      "افصل التغذية الكهربائية فوراً",
      "استخدم طفاية CO2 أو مسحوق جاف (ليس ماء!)",
      "أخلِ المنطقة من العمال",
      "اتصل بالدفاع المدني 998",
      "لا تقترب قبل تبريد المنطقة",
      "وثّق الحادث للتحقيق"
    ]
  },
  {
    title: "Cable Fault في الليل",
    icon: "moon",
    color: "warning",
    steps: [
      "تأكد من عزل الكيبل المعطّل (LOTO)",
      "استخدم Portable Earthing قبل اللمس",
      "ابدأ Fault Location بـ TDR",
      "نسّق مع Control Room",
      "جهز فريق الإصلاح + معدات السحب",
      "وثّق كل الخطوات في Shift Log"
    ]
  },
  {
    title: "كشف تسرب غاز في المنهول",
    icon: "wind",
    color: "danger",
    steps: [
      "اخرج من المنهول فوراً",
      "لا تستخدم أي معدات كهربائية",
      "افتح فتحات التهوية",
      "اتصل بالدفاع المدني + Gas Detector",
      "حدد نوع الغاز قبل العودة",
      "لا تدخل قبل فحص الغاز = 0"
    ]
  }
];

// Export for global use
window.APP_DATA = {
  MODULES, CATEGORIES, TOPIC_DETAILS, GLOSSARY, ROLES,
  CALCULATORS, QUIZ_QUESTIONS, DECISION_TREES,
  TEMPLATES, RED_FLAGS, EMERGENCY
};
