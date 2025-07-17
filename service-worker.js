// service-worker.js

const CACHE_NAME = 'hymnal-pwa-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/app.js',
    '/manifest.json',
    'https://cdn.tailwindcss.com' // Caching do Tailwind CSS CDN
];

// Evento de instalação: Cacha os arquivos essenciais do app shell
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Service Worker: Cache aberto');
                return cache.addAll(urlsToCache);
            })
    );
});

// Evento de fetch: Serve arquivos do cache primeiro, depois da rede
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Retorna do cache se encontrado
                if (response) {
                    return response;
                }
                // Caso contrário, busca da rede
                return fetch(event.request).then(
                    response => {
                        // Verifica se recebemos uma resposta válida
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Clona a resposta. Uma resposta é um stream e só pode ser consumida uma vez.
                        // Precisamos de uma cópia para o cache e outra para o navegador.
                        const responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
            })
    );
});

// Evento de ativação: Limpa caches antigos
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        // Deleta caches que não estão na whitelist
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
