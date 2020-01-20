self.addEventListener('push', function(e) {
    var options = {
        body: 'Notificação gerada através de push',
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
    e.waitUntil(
        self.registration.showNotification('teste de mensagem com push!', options)
    );
});