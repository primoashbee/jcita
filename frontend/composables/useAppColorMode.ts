export const useAppColorMode = () => {
    const isDark = useState<boolean>('color-mode', () => true)

    const applyMode = (dark: boolean) => {
        if (import.meta.client) {
            if (dark) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        }
    }

    const toggleColorMode = () => {
        isDark.value = !isDark.value
        if (import.meta.client) {
            localStorage.setItem('jcita-color-mode', isDark.value ? 'dark' : 'light')
        }
        applyMode(isDark.value)
    }

    const initColorMode = () => {
        if (import.meta.client) {
            const saved = localStorage.getItem('jcita-color-mode')
            isDark.value = saved ? saved === 'dark' : true
            applyMode(isDark.value)
        }
    }

    return { isDark: readonly(isDark), toggleColorMode, initColorMode }
}
