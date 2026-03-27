<script setup lang="ts">
definePageMeta({ middleware: 'auth' })

useHead({ title: 'Dashboard — JCITA' })

const { user, logout } = useAuth()
const router = useRouter()
const { subscribe } = usePush()

const loggingOut = ref(false)
const showNotifBanner = ref(false)
const notifStatus = ref('— Not set')

onMounted(() => {
    if ('Notification' in window) {
        if (Notification.permission === 'default') showNotifBanner.value = true
        if (Notification.permission === 'granted') notifStatus.value = '✅ Enabled'
        if (Notification.permission === 'denied') notifStatus.value = '❌ Blocked'
    }
})

const handleLogout = async () => {
    loggingOut.value = true
    await logout()
    await router.push('/auth/login')
}

const enableNotifications = async () => {
    showNotifBanner.value = false
    await subscribe()
}

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Services', href: '/#services' },
    { label: 'Contact', href: '/#contact' },
]

const quickLinks = [
    { label: 'Sunday Worship', sub: '9:00 AM – 12:00 PM', icon: '☀️' },
    { label: 'Wednesday Prayer', sub: '7:00 PM – 9:00 PM', icon: '🙏' },
    { label: 'Friday Bible Study', sub: '7:00 PM – 9:00 PM', icon: '📖' },
    { label: 'Saturday Youth', sub: '5:00 PM – 7:00 PM', icon: '🎉' },
]
</script>

<template>
    <div style="min-height:100vh; background:#0a0a0a; color:#fff;">

        <!-- Push notification banner -->
        <div
            v-if="showNotifBanner"
            style="position:fixed; bottom:20px; left:16px; right:16px; max-width:400px; margin:0 auto; right:auto; background:#171717; border:1px solid #2a2a2a; border-radius:16px; padding:16px; display:flex; align-items:center; gap:12px; z-index:50; box-shadow:0 8px 32px rgba(0,0,0,0.5);"
        >
            <div style="color:#fbbf24;">
                <svg style="width:28px;height:28px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-5-5.917V4a1 1 0 10-2 0v1.083A6 6 0 006 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                </svg>
            </div>
            <div style="flex:1;">
                <p style="font-size:14px; font-weight:600; margin:0 0 2px;">Stay Updated</p>
                <p style="font-size:12px; color:#737373; margin:0;">Get notified about services and events.</p>
            </div>
            <div style="display:flex; gap:8px;">
                <button
                    style="padding:6px 14px; background:#fbbf24; color:#0a0a0a; font-size:12px; font-weight:700; border:none; border-radius:8px; cursor:pointer;"
                    @click="enableNotifications"
                >Allow</button>
                <button
                    style="padding:6px 10px; background:none; color:#737373; font-size:12px; border:none; cursor:pointer;"
                    @click="showNotifBanner = false"
                >Later</button>
            </div>
        </div>

        <!-- Top nav -->
        <nav style="position:sticky; top:0; background:rgba(10,10,10,0.95); backdrop-filter:blur(8px); border-bottom:1px solid #1a1a1a; z-index:40;">
            <div style="max-width:900px; margin:0 auto; padding:0 20px; display:flex; align-items:center; justify-content:space-between; height:56px;">
                <NuxtLink to="/" style="display:flex; align-items:center;">
                    <img :src="'/logo.png'" alt="JCITA" class="invert" style="height:32px; width:auto;" />
                </NuxtLink>

                <div style="display:flex; align-items:center; gap:8px;">
                    <div
                        style="width:32px; height:32px; border-radius:50%; background:#262626; display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:700; color:#fbbf24; overflow:hidden; flex-shrink:0;"
                    >
                        <img v-if="user?.avatar" :src="user.avatar" style="width:100%;height:100%;object-fit:cover;" />
                        <span v-else>{{ user?.name?.charAt(0).toUpperCase() }}</span>
                    </div>
                    <button
                        :disabled="loggingOut"
                        style="padding:6px 14px; background:#262626; border:1px solid #333; border-radius:10px; color:#a3a3a3; font-size:13px; cursor:pointer; display:flex; align-items:center; gap:6px;"
                        @click="handleLogout"
                    >
                        <svg style="width:14px;height:14px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                        </svg>
                        {{ loggingOut ? 'Signing out…' : 'Sign out' }}
                    </button>
                </div>
            </div>
        </nav>

        <!-- Main content -->
        <div style="max-width:900px; margin:0 auto; padding:32px 20px;">

            <!-- Welcome header -->
            <div style="margin-bottom:32px;">
                <p style="color:#fbbf24; font-size:13px; font-weight:600; text-transform:uppercase; letter-spacing:0.1em; margin:0 0 6px;">Welcome back</p>
                <h1 style="font-size:28px; font-weight:900; margin:0 0 4px;">{{ user?.name }}</h1>
                <p style="color:#737373; font-size:14px; margin:0;">{{ user?.email }}</p>
            </div>

            <!-- Stats row -->
            <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(160px,1fr)); gap:12px; margin-bottom:28px;">
                <div style="background:#171717; border:1px solid #1f1f1f; border-radius:16px; padding:20px;">
                    <p style="color:#737373; font-size:12px; text-transform:uppercase; letter-spacing:0.08em; margin:0 0 8px;">Member since</p>
                    <p style="font-size:18px; font-weight:800; margin:0; color:#fbbf24;">2025</p>
                </div>
                <div style="background:#171717; border:1px solid #1f1f1f; border-radius:16px; padding:20px;">
                    <p style="color:#737373; font-size:12px; text-transform:uppercase; letter-spacing:0.08em; margin:0 0 8px;">Login method</p>
                    <p style="font-size:14px; font-weight:700; margin:0; text-transform:capitalize;">
                        {{ user?.social_provider ?? 'Email' }}
                    </p>
                </div>
                <div style="background:#171717; border:1px solid #1f1f1f; border-radius:16px; padding:20px;">
                    <p style="color:#737373; font-size:12px; text-transform:uppercase; letter-spacing:0.08em; margin:0 0 8px;">Notifications</p>
                    <p style="font-size:14px; font-weight:700; margin:0;">{{ notifStatus }}</p>
                </div>
            </div>

            <!-- Service schedule -->
            <div style="background:#171717; border:1px solid #1f1f1f; border-radius:16px; padding:24px; margin-bottom:28px;">
                <h2 style="font-size:16px; font-weight:800; margin:0 0 20px; color:#fbbf24; text-transform:uppercase; letter-spacing:0.05em;">Service Schedule</h2>
                <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:12px;">
                    <div
                        v-for="item in quickLinks"
                        :key="item.label"
                        style="background:#0a0a0a; border:1px solid #1f1f1f; border-radius:12px; padding:16px;"
                    >
                        <span style="font-size:22px; display:block; margin-bottom:8px;">{{ item.icon }}</span>
                        <p style="font-size:14px; font-weight:700; margin:0 0 4px;">{{ item.label }}</p>
                        <p style="font-size:12px; color:#737373; margin:0;">{{ item.sub }}</p>
                    </div>
                </div>
            </div>

            <!-- Quick links to site -->
            <div style="background:#171717; border:1px solid #1f1f1f; border-radius:16px; padding:24px;">
                <h2 style="font-size:16px; font-weight:800; margin:0 0 16px; color:#fbbf24; text-transform:uppercase; letter-spacing:0.05em;">Explore</h2>
                <div style="display:flex; flex-wrap:wrap; gap:10px;">
                    <NuxtLink
                        v-for="link in navLinks"
                        :key="link.href"
                        :to="link.href"
                        style="padding:8px 18px; background:#0a0a0a; border:1px solid #262626; border-radius:10px; color:#a3a3a3; font-size:13px; font-weight:500; text-decoration:none;"
                    >
                        {{ link.label }}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
