const CACHE_NAME = 'sciverse-cache-v1';
const assetsToCache = [
  'index.html',
  'manifest.json'
];

// ติดตั้งและแคชไฟล์
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

// ดึงข้อมูลจากแคชเมื่อไม่มีอินเทอร์เน็ต (Offline Mode)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});