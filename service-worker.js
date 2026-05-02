// UGC Academy — Service Worker
// Network First للملفات الديناميكية، Cache First للصور والأيقونات
const CACHE = 'ugc-v3';

// الملفات الأساسية للتطبيق (precache عند التثبيت)
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './favicon.webp',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png'
];

// التثبيت — precache للأيقونات والملفات الأساسية
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(cache =>
      // نتجاهل الأخطاء عشان لا يفشل التثبيت لو ملف مفقود
      Promise.all(
        PRECACHE_URLS.map(url =>
          cache.add(url).catch(err => console.warn('[SW] precache skip:', url, err))
        )
      )
    )
  );
});

// التفعيل — احذف كل كاش قديم
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// الطلبات
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  const url = e.request.url;

  // تجاهل طلبات Google Fonts و YouTube و Lucide CDN — تذهب مباشرة للشبكة
  if (url.includes('fonts.googleapis.com') ||
      url.includes('fonts.gstatic.com') ||
      url.includes('youtube.com') ||
      url.includes('youtu.be') ||
      url.includes('unpkg.com')) {
    return; // المتصفح يتعامل معها
  }

  const isDynamic = url.includes('.js') || url.includes('.css') ||
                    url.includes('.html') || url.endsWith('/');

  if (isDynamic) {
    // ملفات JS/CSS/HTML — Network First (التحديثات تظهر فوراً)
    e.respondWith(
      fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      }).catch(() => caches.match(e.request).then(cached =>
        cached || new Response('Offline', { status: 503 })
      ))
    );
  } else {
    // صور وأيقونات — Cache First (للأداء)
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        });
      })
    );
  }
});

// رسالة من الـ app لتحديث SW (لو احتجنا لاحقاً)
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
