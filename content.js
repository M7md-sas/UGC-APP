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
