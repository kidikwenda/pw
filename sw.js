self.addEventListener('push', () => {
    self.registration.sendNotification('teste message', {});
})  