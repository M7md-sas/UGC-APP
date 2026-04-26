// UGC Academy — Service Worker (Network First)
const CACHE = 'ugc-v2';

// التثبيت
self.addEventListener('install', e => {
  self.skipWaiting();
});

// التفعيل — احذف كل كاش قديم
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// الطلبات — الشبكة أولاً، الكاش احتياط فقط
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  const url = e.request.url;
  const isDynamic = url.includes('.js') || url.includes('.css') || url.includes('.html');

  if (isDynamic) {
    // ملفات JS/CSS/HTML — دائماً من الشبكة عشان التحديثات
    e.respondWith(
      fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      }).catch(() => caches.match(e.request))
    );
  } else {
    // صور وأيقونات — كاش أولاً
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
