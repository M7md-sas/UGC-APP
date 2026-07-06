# UGC Academy — أكاديمية الخطوط الكهربائية الأرضية

تطبيق تعليمي متخصص للمهندسين الكهربائيين في قطاع الكهرباء السعودي (SEC)، يغطي تقنيات الخطوط الكهربائية الأرضية من المستوى المبتدئ إلى الخبير.

## المحتوى

- **17 موديولاً تعليمياً** مرتبة بشكل خطي من الأساسيات إلى الاحتراف
- **مكتبة تقنية** مقسّمة إلى 10 أقسام (وصلات، اختبارات، مواد، معدات...)
- **6 حاسبات هندسية** بمعادلات حقيقية (Pulling Tension، Voltage Drop، Ampacity...)
- **شجرات قرار** تفاعلية لحل مشاكل الميدان
- **57 مصطلحاً** ثنائي اللغة في القاموس الهندسي
- **قوالب تواصل** احترافية (NCR, RFI, Daily Report...)
- **بروتوكولات طوارئ** ميدانية

## التقنية

- Progressive Web App (PWA) — يعمل offline بعد التثبيت
- Mobile-First — مُحسَّن للشاشات الصغيرة
- RTL كامل + Dark/Light Mode
- بدون frameworks — Vanilla JS/CSS خالص

## التشغيل المحلي

```bash
git clone https://github.com/m7md-sas/ugc-app.git
cd ugc-app
python3 -m http.server 8000
# افتح: http://localhost:8000
```

## الهيكل

```
├── index.html          # نقطة الدخول
├── manifest.json       # إعدادات PWA
├── service-worker.js   # Caching & Offline
├── src/
│   ├── app.js          # منطق التطبيق
│   ├── content.js      # قاعدة البيانات
│   ├── media.js        # بيانات الوسائط
│   └── styles.css      # نظام التصميم
└── assets/
    └── icons/          # أيقونات التطبيق
```

## الترخيص

© 2025 UGC Academy. جميع الحقوق محفوظة.
