export const usePush = () => {
    const { public: { apiBase } } = useRuntimeConfig()

    const subscribe = async () => {
        if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
            console.warn('Push notifications not supported')
            return
        }

        const permission = await Notification.requestPermission()
        if (permission !== 'granted') return

        const { data } = await useFetch<{ public_key: string }>(`${apiBase}/push/vapid-public-key`)
        if (!data.value?.public_key) return

        const registration = await navigator.serviceWorker.ready

        const subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(data.value.public_key),
        })

        const key = subscription.getKey('p256dh')
        const auth = subscription.getKey('auth')

        await $fetch(`${apiBase}/push/subscribe`, {
            method: 'POST',
            body: {
                endpoint: subscription.endpoint,
                public_key: key ? btoa(String.fromCharCode(...new Uint8Array(key))) : '',
                auth_token: auth ? btoa(String.fromCharCode(...new Uint8Array(auth))) : '',
            },
        })
    }

    const unsubscribe = async () => {
        const registration = await navigator.serviceWorker.ready
        const subscription = await registration.pushManager.getSubscription()
        if (!subscription) return

        await $fetch(`${apiBase}/push/unsubscribe`, {
            method: 'POST',
            body: { endpoint: subscription.endpoint },
        })

        await subscription.unsubscribe()
    }

    return { subscribe, unsubscribe }
}

function urlBase64ToUint8Array(base64String: string): Uint8Array {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
    const rawData = atob(base64)
    return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)))
}
