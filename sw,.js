this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('my-cache-v1').then((cache) => {
            return cache.addAll([ '/']);
        })
    );
    // caches.open('my-cache-v1').then((cache) => {
    //     cache.addAll([ '/']);
    // })
});

this.addEventListener('activate', function(event) {
    event.waitUntil(
        Promise.all([
            this.clients.claim(),
            caches.keys().then((keyList) => {
                return Promise.all(keyList.map((key) => {
                    if (key!=='my-cache-v1') {
                        // 不匹配 则缓存会被丢弃
                        return caches.delete(key);
                    }
                }));
            })
        ])
        // caches.keys().then((keyList) => {
        //     return Promise.all(keyList.map((key) => {
        //         if (key!=='my-cache-v1') {
        //             // 不匹配 则缓存会被丢弃
        //             return caches.delete(key);
        //         }
        //     }));
        // })
    );
    
    // event.waitUntil(
    //     caches.keys().then((keyList) => {
    //         return Promise.all(keyList.map((key) => {
    //             if (key!=='my-cache-v1') {
    //                 return caches.delete(key);
    //             }
    //         }));
    //     })
    // );
});