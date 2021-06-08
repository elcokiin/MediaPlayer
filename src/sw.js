const VERSION = 'v1';

self.addEventListener('install', event => {
    // espera hasta que el precache se complete
    event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
    const request = event.request;
    // get
    if(request.method !== 'GET'){
        return;
    }

    // Buscar en cache
    event.respondWith(cacheResponse(request));

    // actualizar el cache
    event.waitUntil(updateCache(request));
});

async function precache(){
    const cache = await caches.open(VERSION);
    return cache.addAll([
        // './',
        // './index.html',
        // './terms.html',
        // './index.js',
        // './MediaPlayer.js',
        // './plugins/AutoPause.js',
        // './plugins/AutoPlay.js',
        // './index.css',
        // './video/Torbellino-colombia-Por Pareja.wmv.mp4',
    ])
}

async function cacheResponse(request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
}

async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
}