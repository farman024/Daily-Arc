// Daily Arc - Service Worker v1 (network-first navigations, cache-first assets)
const CACHE = 'daily-arc-v1';

const PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(PRECACHE).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  if (url.hostname.includes('supabase')) return;
  if (url.hostname.includes('googleapis.com')) return;
  if (url.hostname.includes('gstatic.com')) return;
  if (url.hostname.includes('cdnjs.cloudflare.com')) return;
  if (url.protocol === 'chrome-extension:') return;

  const isNavigate = e.request.mode === 'navigate';

  e.respondWith(
    isNavigate
      // Network-first: always serve latest HTML, cached copy only when offline
      ? fetch(e.request).then(res => {
          if (res && res.status === 200) {
            caches.open(CACHE).then(c => c.put(e.request, res.clone()));
          }
          return res;
        }).catch(() => caches.match(e.request).then(cached => cached || caches.match('./index.html')))
      // Cache-first for static assets
      : caches.match(e.request).then(cached => {
          const net = fetch(e.request).then(res => {
            if (res && res.status === 200) {
              caches.open(CACHE).then(c => c.put(e.request, res.clone()));
            }
            return res;
          }).catch(() => cached || caches.match('./index.html'));
          return cached || net;
        })
  );
});
