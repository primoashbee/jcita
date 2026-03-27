<script setup lang="ts">
useHead({ title: 'Authenticating… — JCITA' })

const { setAuth, fetchUser } = useAuth()
const router = useRouter()
const route = useRoute()

onMounted(async () => {
    const token = route.query.token as string | undefined

    if (!token) {
        await router.replace('/auth/login?error=oauth_failed')
        return
    }

    // Fetch user details and store auth state
    const { public: { apiBase } } = useRuntimeConfig()
    try {
        const user = await $fetch<{ id: number; name: string; email: string; avatar: string | null; social_provider: string | null }>(
            `${apiBase}/auth/user`,
            { headers: { Authorization: `Bearer ${token}` } }
        )
        setAuth({ user, token })
        await router.replace('/dashboard')
    } catch {
        await router.replace('/auth/login?error=oauth_failed')
    }
})
</script>

<template>
    <div class="min-h-screen bg-neutral-950 flex items-center justify-center">
        <div class="text-center">
            <div class="w-12 h-12 border-2 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p class="text-neutral-400">Signing you in…</p>
        </div>
    </div>
</template>
