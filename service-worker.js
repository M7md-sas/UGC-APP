// UGC Academy — Service Worker
const CACHE = 'ugc-v1';
const ASSETS = [
  '/UGC-APP/',
  '/UGC-APP/index.html',
  '/UGC-APP/app.js',
  '/UGC-APP/content.js',
  '/UGC-APP/styles.css',
  '/UGC-APP/manifest.json',
  '/UGC-APP/icon-192.png',
  '/UGC-APP/icon-512.png'
];

// التثبيت — تخزين الملفات
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

// التفعيل — حذف الكاش القديم
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// الطلبات — من الكاش أولاً ثم الشبكة
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (!res || res.status !== 200 || res.type === 'opaque') return res;
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      }).catch(() => caches.match('/UGC-APP/index.html'));
    })
  );
});
