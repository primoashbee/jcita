import { defineStore } from 'pinia'

interface User {
    id: number
    name: string
    email: string
    avatar: string | null
    social_provider: string | null
    created_at: string
}

export const useUsersStore = defineStore('users', () => {
    const { public: { apiBase } } = useRuntimeConfig()
    const { token } = useAuth()

    const users = ref<User[]>([])
    const loading = ref(false)
    const error = ref<string | null>(null)

    const fetch = async () => {
        loading.value = true
        error.value = null
        try {
            users.value = await $fetch<User[]>(`${apiBase}/users`, {
                headers: { Authorization: `Bearer ${token.value}` },
            })
        } catch {
            error.value = 'Failed to load users.'
        } finally {
            loading.value = false
        }
    }

    return { users, loading, error, fetch }
})
