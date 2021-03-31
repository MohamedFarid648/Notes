
/*in index.html:
<script>
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./serviceWorker.js').then(function (registration) {
            console.log('Service worker registered successfully', registration);
        }).catch(function (err) {
            console.log('Service worker registration failed: ', err);
        });
        };
    </script>
    
    and put serviceWorker.js with the same folder of index.html
    */
//https://web.dev/offline-cookbook/

var cache_name = 'register-offline';
var cached_urls = [
    "./index.html",
    "./css/style.css",
    "./css/bootstrap.min.css",
    "./js/jquery-3.6.0.min.js",
    "./js/bootstrap.min.js",
    "./js/bootstrapValidator.js",
    "./js/script.js",
    "./css/dancing-script3.woff2"

];
/*
     "./css/dancing-script.css",
     "./css/dancing-script.woff2",
     "./css/dancing-scrip2.woff2",
     "./css/dancing-script3.woff2", */

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cache_name)
            .then(function (cache) {
                return cache.addAll(cached_urls);
            })
    );
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheName.startsWith('pages-cache-') && staticCacheName !== cacheName) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', function (event) {
    console.log('Fetch event for ', event.request.url);
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                console.log('Found ', event.request.url, ' in cache');
                return response;
            }
            console.log('Network request for ', event.request.url);
            return fetch(event.request).then(function (response) {
                if (response.status === 404) {
                    return caches.match('./404.html');
                }
                return caches.open(cached_urls).then(function (cache) {
                    if (event.request.url.indexOf('http') === 0) {
                        cache.put(event.request.url, response.clone());
                        return response;
                    }

                });
            });
        }).catch(function (error) {
            console.log('Error, ', error);
            console.log(error);

            // window.location = 'index.html';
            // return caches.open('/');
            // return caches.match('index.html');

        })
    );
});