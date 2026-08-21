/* ================================================================
 * Service Worker - 让站点可离线使用
 * ================================================================ */
const CACHE_NAME = 'xinjump-trip-v2';

// 让 cities.js 能在 Service Worker 里直接运行（其原代码使用 window）
self.window = self;
importScripts('./assets/js/cities.js');

const CITY_FILES = (typeof CITY_LIST !== 'undefined' ? CITY_LIST : [])
  .map(function (c) { return './assets/js/cities/' + c.file; });

const PRECACHE = [
  './',
  './index.html',
  './custom.html',
  './manifest.json',
  './assets/favicon.png',
  './assets/icon-512.png',
  './assets/js/cities.js'
].concat(CITY_FILES);

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) { return cache.addAll(PRECACHE); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (key) { return key !== CACHE_NAME; })
          .map(function (key) { return caches.delete(key); })
      );
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) return response;
      return fetch(event.request).then(function (networkResponse) {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'opaque') {
          return networkResponse;
        }
        var cloned = networkResponse.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, cloned);
        });
        return networkResponse;
      });
    })
  );
});
