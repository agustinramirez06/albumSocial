const CACHE = 'csydp-stickers-v1';
const BUCKET = 'https://wumpbrsnzoybwszjsbwv.supabase.co/storage/v1/object/public/images-album';

self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.url.startsWith(BUCKET)) {
    e.respondWith(
      caches.match(e.request).then(cached =>
        cached || fetch(e.request).then(res => {
          const c = res.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, c));
          return res;
        })
      )
    );
  }
});
