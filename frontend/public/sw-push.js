self.addEventListener('push', (event) => {
    let data = {}
    try {
        data = event.data ? event.data.json() : {}
    } catch {
        data = { title: 'JCITA', body: event.data ? event.data.text() : '' }
    }
    const title = data.title || 'JCITA'
    const options = {
        body: data.body || '',
        icon: '/icon-192x192.png',
        badge: '/icon-192x192.png',
        data: { url: data.url || '/' },
    }
    event.waitUntil(self.registration.showNotification(title, options))
})

self.addEventListener('notificationclick', (event) => {
    event.notification.close()
    event.waitUntil(clients.openWindow(event.notification.data.url))
})
