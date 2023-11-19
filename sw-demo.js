if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js', { scope: '/'}).then(() => {
        console.log('Service worker registration successful with scope: ', navigator.serviceWorker.scope);
    }).catch(() => {
        console.log('Service worker registration failed.');
    })
  });
}