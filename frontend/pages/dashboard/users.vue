<script setup lang="ts">
definePageMeta({ middleware: 'auth' })
useHead({ title: 'Users — JCITA' })

const { isDark, toggleColorMode, initColorMode } = useAppColorMode()
const { user } = useAuth()
const store = useUsersStore()

onMounted(async () => {
    initColorMode()
    await store.fetch()
})

const initials = (name: string) => name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)

const formatDate = (date: string) => new Date(date).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
})
</script>

<template>
    <div style="min-height:100vh; background:var(--bg); color:var(--text);">

        <!-- Nav -->
        <nav style="position:sticky; top:0; background:var(--nav-bg); backdrop-filter:blur(8px); border-bottom:1px solid var(--border-nav); z-index:40;">
            <div style="max-width:900px; margin:0 auto; padding:0 20px; display:flex; align-items:center; justify-content:space-between; height:56px;">
                <div style="display:flex; align-items:center; gap:16px;">
                    <NuxtLink to="/dashboard" style="display:flex; align-items:center;">
                        <img :src="'/logo.png'" alt="JCITA" :class="isDark ? 'invert' : ''" style="height:32px; width:auto;" />
                    </NuxtLink>
                    <span style="color:var(--border); font-size:18px;">/</span>
                    <span style="color:var(--text-muted); font-size:14px; font-weight:500;">Users</span>
                </div>

                <div style="display:flex; align-items:center; gap:8px;">
                    <button
                        style="background:var(--input-bg); border:1px solid var(--border); border-radius:8px; padding:6px; cursor:pointer; color:var(--text-muted); display:flex;"
                        @click="toggleColorMode"
                    >
                        <svg v-if="isDark" style="width:16px;height:16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"/>
                        </svg>
                        <svg v-else style="width:16px;height:16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                        </svg>
                    </button>
                    <NuxtLink
                        to="/dashboard"
                        style="padding:6px 14px; background:var(--input-bg); border:1px solid var(--border); border-radius:10px; color:var(--text-secondary); font-size:13px; text-decoration:none; display:flex; align-items:center; gap:6px;"
                    >
                        <svg style="width:14px;height:14px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                        </svg>
                        Dashboard
                    </NuxtLink>
                </div>
            </div>
        </nav>

        <!-- Content -->
        <div style="max-width:900px; margin:0 auto; padding:32px 20px;">

            <!-- Header -->
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:24px;">
                <div>
                    <h1 style="font-size:24px; font-weight:900; margin:0 0 4px;">Members</h1>
                    <p style="color:var(--text-muted); font-size:14px; margin:0;">
                        {{ store.loading ? 'Loading…' : `${store.users.length} registered user${store.users.length !== 1 ? 's' : ''}` }}
                    </p>
                </div>
                <button
                    style="padding:8px 16px; background:var(--input-bg); border:1px solid var(--border); border-radius:10px; color:var(--text-secondary); font-size:13px; cursor:pointer; display:flex; align-items:center; gap:6px;"
                    :disabled="store.loading"
                    @click="store.fetch()"
                >
                    <svg style="width:14px;height:14px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                    </svg>
                    Refresh
                </button>
            </div>

            <!-- Error -->
            <div v-if="store.error" style="background:rgba(239,68,68,0.08); border:1px solid rgba(239,68,68,0.2); border-radius:12px; padding:14px 16px; color:#f87171; font-size:14px; margin-bottom:20px;">
                {{ store.error }}
            </div>

            <!-- Loading skeleton -->
            <div v-if="store.loading" style="display:flex; flex-direction:column; gap:8px;">
                <div v-for="i in 5" :key="i" style="background:var(--card-bg); border:1px solid var(--border-card); border-radius:14px; padding:16px 20px; display:flex; align-items:center; gap:14px;">
                    <div style="width:40px; height:40px; border-radius:50%; background:var(--input-bg); flex-shrink:0;"></div>
                    <div style="flex:1;">
                        <div style="height:14px; background:var(--input-bg); border-radius:6px; width:40%; margin-bottom:8px;"></div>
                        <div style="height:12px; background:var(--input-bg); border-radius:6px; width:60%;"></div>
                    </div>
                </div>
            </div>

            <!-- Users list -->
            <div v-else style="display:flex; flex-direction:column; gap:8px;">
                <div
                    v-for="u in store.users"
                    :key="u.id"
                    style="background:var(--card-bg); border:1px solid var(--border-card); border-radius:14px; padding:16px 20px; display:flex; align-items:center; gap:14px; transition:border-color 0.2s;"
                    @mouseenter="($event.currentTarget as HTMLElement).style.borderColor='#fbbf24'"
                    @mouseleave="($event.currentTarget as HTMLElement).style.borderColor=''"
                >
                    <!-- Avatar -->
                    <div style="width:40px; height:40px; border-radius:50%; background:var(--input-bg); display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:700; color:#fbbf24; overflow:hidden; flex-shrink:0;">
                        <img v-if="u.avatar" :src="u.avatar" style="width:100%;height:100%;object-fit:cover;" />
                        <span v-else>{{ initials(u.name) }}</span>
                    </div>

                    <!-- Info -->
                    <div style="flex:1; min-width:0;">
                        <div style="display:flex; align-items:center; gap:8px; margin-bottom:2px;">
                            <p style="font-size:14px; font-weight:700; margin:0; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">{{ u.name }}</p>
                            <span v-if="u.id === user?.id" style="font-size:10px; font-weight:700; background:#fbbf24; color:#0a0a0a; padding:1px 6px; border-radius:4px; text-transform:uppercase; letter-spacing:0.05em; flex-shrink:0;">You</span>
                        </div>
                        <p style="font-size:12px; color:var(--text-muted); margin:0; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">{{ u.email }}</p>
                    </div>

                    <!-- Meta -->
                    <div style="text-align:right; flex-shrink:0;">
                        <p style="font-size:12px; font-weight:600; color:var(--text-secondary); margin:0 0 2px; text-transform:capitalize;">
                            {{ u.social_provider ?? 'Email' }}
                        </p>
                        <p style="font-size:11px; color:var(--text-muted); margin:0;">{{ formatDate(u.created_at) }}</p>
                    </div>
                </div>

                <p v-if="store.users.length === 0" style="text-align:center; color:var(--text-muted); font-size:14px; padding:40px 0;">
                    No users found.
                </p>
            </div>
        </div>
    </div>
</template>
