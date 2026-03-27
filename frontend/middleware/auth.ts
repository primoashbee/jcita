export default defineNuxtRouteMiddleware(async () => {
    const { token, user, fetchUser, isLoggedIn } = useAuth()

    if (token.value && !user.value) {
        await fetchUser()
    }

    if (!isLoggedIn.value) {
        return navigateTo('/auth/login')
    }
})
