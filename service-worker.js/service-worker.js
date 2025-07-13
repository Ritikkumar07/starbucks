self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("starbugs-v1").then((cache) => {
      return cache.addAll([
        "index.html",
        "menu.html",
        "cart.html",
        "style.css",
        "images/Starbucks-Logo.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => {
      return res || fetch(event.request);
    })
  );
});
