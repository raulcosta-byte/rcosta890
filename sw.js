const cacheName = 'copa2026-v2';
const assets = [
  './',
  './index.html',
  'https://cdn-icons-png.flaticon.com/512/831/831276.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
