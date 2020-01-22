self.addEventListener('push', function(event) {
    var options = {
        body: event.data.text(),
        icon: './push_logo.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {
                action: 'explore',
                title: 'Explorar',
                //icon: './check.png'
            },
            {
                action: 'close',
                title: 'Fechar',
                //icon: './check.png'
            }
        ]
    };
    event.waitUntil(
        self.registration.showNotification(event.data.text(), options)
    );
});