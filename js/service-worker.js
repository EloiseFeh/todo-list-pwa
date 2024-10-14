const CACHE_NAME = 'todo-app-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/style.css',
    '/js/script.js',
    '/manifest.json',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('Cache aberto');
            return cache.addAll(urlsToCache);
        })
    )
})

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request) // Verifica se a requisição está no cache
        .then(response => {
            return response || fetch(event.request);
            // Se estiver, retorna a resposta do cache. Se não, faz a requisição
        })
    )
})