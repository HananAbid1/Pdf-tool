self.addEventListener('install', (e) => {
  // Skip waiting to activate immediately
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  // Claim clients immediately so the first load is controlled
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Just pass the request straight to the network
  e.respondWith(fetch(e.request));
});
