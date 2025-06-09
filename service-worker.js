self.addEventListener('install', event => {
  console.log('[Service Worker] Installing...');
  self.skipWaiting(); // Activate worker immediately
});

self.addEventListener('activate', event => {
  console.log('[Service Worker] Activated');
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});


/*
No issues are present in the current service worker code.
- The 'install' event logs installation and calls skipWaiting for immediate activation.
- The 'activate' event logs activation.
- The 'fetch' event simply proxies network requests.

However, this service worker does not provide offline support or caching. If you want offline capabilities, consider adding caching logic.
*/
