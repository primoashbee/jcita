<script setup lang="ts">
definePageMeta({ middleware: 'guest' })

useHead({ title: 'Sign In — JCITA' })

const { login, loginWithProvider } = useAuth()
const router = useRouter()

const form = reactive({ email: '', password: '' })
const error = ref('')
const loading = ref(false)
const showPassword = ref(false)

const submit = async () => {
    error.value = ''
    loading.value = true
    try {
        await login(form.email, form.password)
        await router.push('/dashboard')
    } catch (e: unknown) {
        const err = e as { data?: { message?: string; errors?: Record<string, string[]> } }
        const errors = err?.data?.errors
        if (errors) {
            error.value = Object.values(errors).flat()[0] ?? 'Login failed.'
        } else {
            error.value = err?.data?.message ?? 'Invalid email or password.'
        }
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <div style="min-height:100vh; background:#0a0a0a; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:48px 24px;">

        <!-- Logo -->
        <NuxtLink to="/" style="display:block; text-align:center; margin-bottom:32px;">
            <img
                :src="'/logo.png'"
                alt="JCITA"
                class="invert"
                style="height:60px; width:auto; display:block; margin:0 auto 16px;"
            />
            <span style="color:#737373; font-size:13px;">Jesus Christ is the Answer</span>
        </NuxtLink>

        <!-- Card -->
        <div style="width:100%; max-width:400px; background:#171717; border:1px solid #262626; border-radius:20px; padding:32px;">

            <h1 style="color:#fff; font-size:24px; font-weight:900; text-align:center; margin:0 0 4px;">Sign in</h1>
            <p style="color:#737373; font-size:14px; text-align:center; margin:0 0 28px;">Welcome back</p>

            <!-- Error -->
            <div v-if="error" style="background:rgba(239,68,68,0.08); border:1px solid rgba(239,68,68,0.2); border-radius:12px; padding:12px 14px; color:#f87171; font-size:13px; margin-bottom:20px; display:flex; align-items:flex-start; gap:8px;">
                <svg style="width:15px;height:15px;flex-shrink:0;margin-top:1px;" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                </svg>
                {{ error }}
            </div>

            <!-- Facebook -->
            <button
                type="button"
                style="width:100%; display:flex; align-items:center; justify-content:center; gap:10px; padding:12px; background:#1877F2; border:1px solid #1877F2; border-radius:12px; color:#fff; font-size:14px; font-weight:600; cursor:pointer; margin-bottom:20px; transition:background 0.2s;"
                @click="loginWithProvider('facebook')"
                @mouseenter="($event.currentTarget as HTMLElement).style.background='#1565d8'"
                @mouseleave="($event.currentTarget as HTMLElement).style.background='#1877F2'"
            >
                <svg style="width:18px;height:18px;flex-shrink:0;" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Continue with Facebook
            </button>

            <!-- Google -->
            <button
                type="button"
                style="width:100%; display:flex; align-items:center; justify-content:center; gap:10px; padding:12px; background:#fff; border:1px solid #e5e7eb; border-radius:12px; color:#111; font-size:14px; font-weight:600; cursor:pointer; margin-bottom:12px; transition:background 0.2s;"
                @click="loginWithProvider('google')"
                @mouseenter="($event.currentTarget as HTMLElement).style.background='#f3f4f6'"
                @mouseleave="($event.currentTarget as HTMLElement).style.background='#fff'"
            >
                <svg style="width:18px;height:18px;flex-shrink:0;" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
            </button>

            <!-- Divider -->
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:24px;">
                <div style="flex:1; height:1px; background:#262626;"></div>
                <span style="color:#525252; font-size:11px; text-transform:uppercase; letter-spacing:0.1em;">or</span>
                <div style="flex:1; height:1px; background:#262626;"></div>
            </div>

            <!-- Email -->
            <div style="margin-bottom:16px;">
                <label style="display:block; color:#a3a3a3; font-size:13px; font-weight:500; margin-bottom:8px;">Email</label>
                <input
                    v-model="form.email"
                    type="email"
                    required
                    autocomplete="email"
                    placeholder="you@example.com"
                    style="width:100%; padding:12px 16px; background:#262626; border:1px solid #333; border-radius:12px; color:#fff; font-size:14px; outline:none; box-sizing:border-box; transition:border-color 0.2s;"
                    @focus="($event.target as HTMLInputElement).style.borderColor='#fbbf24'"
                    @blur="($event.target as HTMLInputElement).style.borderColor='#333'"
                />
            </div>

            <!-- Password -->
            <div style="margin-bottom:24px;">
                <label style="display:block; color:#a3a3a3; font-size:13px; font-weight:500; margin-bottom:8px;">Password</label>
                <div style="position:relative;">
                    <input
                        v-model="form.password"
                        :type="showPassword ? 'text' : 'password'"
                        required
                        autocomplete="current-password"
                        placeholder="••••••••"
                        style="width:100%; padding:12px 44px 12px 16px; background:#262626; border:1px solid #333; border-radius:12px; color:#fff; font-size:14px; outline:none; box-sizing:border-box; transition:border-color 0.2s;"
                        @focus="($event.target as HTMLInputElement).style.borderColor='#fbbf24'"
                        @blur="($event.target as HTMLInputElement).style.borderColor='#333'"
                    />
                    <button
                        type="button"
                        tabindex="-1"
                        style="position:absolute; right:14px; top:50%; transform:translateY(-50%); background:none; border:none; color:#525252; cursor:pointer; padding:0; display:flex;"
                        @click="showPassword = !showPassword"
                    >
                        <svg v-if="!showPassword" style="width:16px;height:16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                        </svg>
                        <svg v-else style="width:16px;height:16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Submit -->
            <button
                type="button"
                :disabled="loading"
                style="width:100%; display:flex; align-items:center; justify-content:center; gap:8px; padding:13px; background:#fbbf24; border:none; border-radius:12px; color:#0a0a0a; font-size:13px; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; cursor:pointer; transition:background 0.2s;"
                @click="submit"
                @mouseenter="($event.currentTarget as HTMLElement).style.background='#f59e0b'"
                @mouseleave="($event.currentTarget as HTMLElement).style.background='#fbbf24'"
            >
                <svg v-if="loading" style="width:16px;height:16px;" class="animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle style="opacity:0.25;" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                    <path style="opacity:0.75;" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                {{ loading ? 'Signing in…' : 'Sign In' }}
            </button>

            <p style="text-align:center; margin-top:20px; font-size:13px; color:#525252;">
                No account?
                <NuxtLink to="/auth/register" style="color:#fbbf24; font-weight:600; text-decoration:none; margin-left:4px;">Sign up</NuxtLink>
            </p>
        </div>
    </div>
</template>
