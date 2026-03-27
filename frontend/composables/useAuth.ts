interface User {
    id: number
    name: string
    email: string
    avatar: string | null
    social_provider: string | null
}

interface AuthResponse {
    user: User
    token: string
}

export const useAuth = () => {
    const { public: { apiBase } } = useRuntimeConfig()
    const user = useState<User | null>('auth_user', () => null)
    const token = useCookie<string | null>('auth_token', {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
    })

    const isLoggedIn = computed(() => !!token.value && !!user.value)

    const setAuth = (data: AuthResponse) => {
        token.value = data.token
        user.value = data.user
    }

    const clearAuth = () => {
        token.value = null
        user.value = null
    }

    const fetchUser = async (): Promise<void> => {
        if (!token.value) return
        try {
            const data = await $fetch<User>(`${apiBase}/auth/user`, {
                headers: { Authorization: `Bearer ${token.value}` },
            })
            user.value = data
        } catch {
            clearAuth()
        }
    }

    const register = async (name: string, email: string, password: string, passwordConfirmation: string): Promise<void> => {
        const data = await $fetch<AuthResponse>(`${apiBase}/auth/register`, {
            method: 'POST',
            body: { name, email, password, password_confirmation: passwordConfirmation },
        })
        setAuth(data)
    }

    const login = async (email: string, password: string): Promise<void> => {
        const data = await $fetch<AuthResponse>(`${apiBase}/auth/login`, {
            method: 'POST',
            body: { email, password },
        })
        setAuth(data)
    }

    const logout = async (): Promise<void> => {
        try {
            await $fetch(`${apiBase}/auth/logout`, {
                method: 'POST',
                headers: { Authorization: `Bearer ${token.value}` },
            })
        } finally {
            clearAuth()
        }
    }

    const loginWithProvider = (provider: 'google' | 'facebook'): void => {
        window.location.href = `${apiBase}/auth/${provider}/redirect`
    }

    return {
        user: readonly(user),
        token: readonly(token),
        isLoggedIn,
        fetchUser,
        register,
        login,
        logout,
        loginWithProvider,
        setAuth,
    }
}
