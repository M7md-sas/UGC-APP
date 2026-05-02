# 🎓 UGC Academy

> **أكاديمية الخطوط الكهربائية الأرضية** — تطبيق ويب تقدمي (PWA) تعليمي تفاعلي لمهندسي شركة الكهرباء السعودية (SEC).

[![PWA](https://img.shields.io/badge/PWA-ready-brightgreen)]()
[![Mobile First](https://img.shields.io/badge/Mobile-first-blue)]()
[![Arabic RTL](https://img.shields.io/badge/Arabic-RTL-orange)]()
[![No Build](https://img.shields.io/badge/No_Build_Step-vanilla_JS-yellow)]()

🌐 **الرابط المباشر**: [m7md-sas.github.io/UGC-APP](https://m7md-sas.github.io/UGC-APP/)

---

## 🎯 نظرة عامة

تطبيق تعليمي شامل للخطوط الكهربائية الأرضية موجّه لمهندسي SEC بثلاث شرائح (مبتدئ / متوسط / خبير). الهدف: نقل المهندس من **منفّذ** إلى **مدير مشروع**.

### المميزات الرئيسية

- 📚 **17 موديول تعليمي** متدرّج
- 🗂️ **مكتبة هرمية** بـ 10 أقسام رئيسية
- 🧮 **6 حاسبات هندسية** مبنية على معايير IEC و IEEE
- 🌳 **شجرات قرار تفاعلية** لسيناريوهات الميدان
- 🚨 **8 إشارات حمراء** من الواقع
- 📋 **5 قوالب تواصل** احترافية
- 🆘 **5 بروتوكولات طوارئ** كاملة
- 📖 **57+ مصطلح** في القاموس الهندسي ثنائي اللغة
- 🎯 **اختبار تشخيصي** Gap Analysis
- 🌙 **Dark / Light mode** كامل
- 📱 **PWA** يعمل offline

---

## 📁 بنية المشروع

```
UGC-APP/
├── index.html             # الصفحة الرئيسية + Splash + PWA setup
├── app.js                 # منطق التطبيق + التنقل + كل الشاشات
├── styles.css             # نظام التصميم الكامل (RTL + Dark/Light)
├── content.js             # قاعدة بيانات المحتوى (TOPIC_DETAILS, ...)
├── media.js               # فيديوهات وصور لكل موضوع
├── manifest.json          # PWA manifest
├── service-worker.js      # Network First + Cache strategy
│
├── favicon.webp           # أيقونة المتصفح
├── icon-192.png           # أيقونة PWA 192x192
├── icon-512.png           # أيقونة PWA 512x512
├── apple-touch-icon.png   # أيقونة iOS
│
├── HANDOVER.md            # دليل تسليم المشروع للمطوّرين
└── README.md              # هذا الملف
```

---

## 🚀 طريقة التشغيل

### محلياً

```bash
# Clone the repo
git clone https://github.com/m7md-sas/UGC-APP.git
cd UGC-APP

# شغّل خادم محلي بسيط (PWA يحتاج HTTPS أو localhost)
python3 -m http.server 8000
# أو
npx serve .

# افتح المتصفح على
http://localhost:8000
```

### النشر على GitHub Pages

1. ارفع المشروع إلى GitHub
2. اذهب إلى **Settings → Pages**
3. اختر **Source: main branch / root**
4. انتظر دقيقة وستحصل على رابط مثل:
   `https://USERNAME.github.io/UGC-APP/`

> ⚠️ **مهم**: لو غيّرت اسم الـ repository، حدّث `start_url` و `scope` في `manifest.json`.

---

## 🎨 الهوية البصرية

| اللون | HEX | الاستخدام |
|------|-----|-----------|
| 🔵 أزرق UGC | `#1E3A5F` | اللون الأساسي |
| 🟣 بنفسجي UGC | `#6B5B95` | المكتبة + الفئات |
| 🟡 ذهبي UGC | `#f59e0b` | Accent + التنبيهات |

### الخطوط
- **العربية**: IBM Plex Sans Arabic
- **الإنجليزية**: Inter
- **التقنية / الأرقام**: JetBrains Mono

---

## 🛠️ التقنيات المستخدمة

- **HTML5** + **CSS3** (CSS Variables + Grid + Flexbox)
- **Vanilla JavaScript** (بدون أي framework — لا React ولا Vue)
- **Lucide Icons** عبر CDN
- **Google Fonts** (Inter, IBM Plex Sans Arabic, JetBrains Mono)
- **Service Worker API** للـ PWA
- **LocalStorage** لحفظ الحالة

---

## 📐 معايير التطوير

### قواعد JavaScript الإلزامية

```javascript
// ✅ NULL-GUARD دائماً
const el = document.getElementById('xpDisplay');
if (el) el.textContent = xp;

// ✅ فصل المنطق عن العرض
function showQuestion(q) { displayQuestion(q); }      // عرض فقط
function nextQuestion() { xp += 10; loadNext(); }     // المكافأة عند الانتقال
```

### قاعدة Service Worker
- **JS / CSS / HTML**: Network First (التحديثات تظهر فوراً)
- **الصور والأيقونات**: Cache First (للأداء)

---

## 📊 حالة المشروع

### ✅ يعمل بنسبة 100%
- Single-page navigation مع 20+ صفحة
- Bottom navigation (5 tabs)
- LocalStorage state management
- Dark / Light mode
- RTL كامل
- PWA (offline support)
- popstate للتعامل مع زر الرجوع في الجوال

### 🟡 قيد التطوير
- محتوى تفصيلي لـ 20-30 موضوع إضافي
- Onboarding flow
- Gap Analysis كامل (30 سؤال)
- 3D Cable Cross-Section

راجع [HANDOVER.md](./HANDOVER.md) للتفاصيل الكاملة.

---

## 🤝 المساهمة

إذا أردت إضافة محتوى أو ميزة جديدة، اتبع البنية الموجودة في `HANDOVER.md`.

### إضافة موضوع جديد بمحتوى كامل
افتح `content.js` وأضف في `TOPIC_DETAILS`:
```javascript
"categoryId-subsectionIdx-topicIdx": {
  title: "...",
  category: "...",
  duration: "X دقائق",
  difficulty: "متوسط",
  objectives: [...],
  content: `<h3>...</h3><p>...</p>`,
  hseWarnings: [...],
  references: ["IEC ...", "SEC TMSS-..."]
}
```

### إضافة فيديو لموضوع
افتح `media.js`:
```javascript
"c8-s1-1": {
  videos: [
    { id: "YOUTUBE_ID", title: "...", subtitle: "...", duration: "5:00", source: "YouTube" }
  ],
  images: []
}
```

---

## 📄 الترخيص

هذا المشروع تعليمي مفتوح المصدر. الاستخدام التجاري يحتاج موافقة المؤلف.

---

## 👤 المؤلف

**م. محمد** — مهندس كهرباء ومطوّر التطبيق

---

<div align="center">

**صُنع بعناية ❤️ لمهندسي SEC**

</div>
