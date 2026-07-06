// ===== UGC Academy — Media Library =====
// أضف فيديوهات وصور لكل موضوع هنا
// البنية: "مفتاح-الموضوع": { videos: [...], images: [...] }

const TOPIC_MEDIA = {

  // ===== c5-s4-0: المرحلة 1: تجهيز بيئة العمل =====
  "c5-s4-0": {
    videos: [
      {
        id: "dQw4w9WgXcQ",
        title: "تجهيز بيئة العمل للوصلات عالية الجهد",
        subtitle: "فيديو تجريبي — استبدله برابط حقيقي",
        duration: "0:00",
        source: "YouTube"
      }
    ],
    images: []
  },

  // ===== c1-s1-0: 380 kV و 230 kV =====
  "c1-s1-0": {
    videos: [],
    images: [
      {
        url: "https://i.postimg.cc/QNWGhqTV/Snapchat-1000168645.jpg",
        title: "صورة تجريبية",
        description: "هذي صورة تجريبية فقط — استبدلها بصورة تقنية"
      }
    ]
  },

  // ===== c8-s1-1: Sheath Integrity Test =====
  "c8-s1-1": {
    videos: [
      {
        id: "Tef7jeaFXgY",
        title: "10kV DC Sheath Test — EHV Cable",
        subtitle: "اختبار عملي ميداني على كيبل EHV",
        duration: "3:42",
        source: "YouTube"
      },
      {
        id: "CArZP7A2z_A",
        title: "Cable Sheath Test Device Training",
        subtitle: "شرح الجهاز والإجراءات بالتفصيل",
        duration: "8:15",
        source: "YouTube"
      },
      {
        id: "13VjLJklkf8",
        title: "MV Cable Sheath Integrity Test",
        subtitle: "تطبيق عملي على كيبل MV 13.8kV",
        duration: "5:30",
        source: "YouTube"
      }
    ],
    images: []
  }

  // ===== أضف مواضيع أخرى هنا بنفس البنية =====
  // "c1-s1-0": {
  //   videos: [
  //     { id: "YOUTUBE_ID", title: "العنوان", subtitle: "الوصف", duration: "5:00", source: "YouTube" }
  //   ],
  //   images: [
  //     { url: "رابط الصورة", title: "عنوان الصورة", description: "شرح تفصيلي للصورة" }
  //   ]
  // }

};

window.APP_DATA.TOPIC_MEDIA = TOPIC_MEDIA;
