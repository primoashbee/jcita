<script setup lang="ts">
useHead({
    script: [
        {
            innerHTML: `
                (function() {
                    var mode = localStorage.getItem('jcita-color-mode');
                    if (mode !== 'light') {
                        document.documentElement.classList.add('dark');
                    }
                })();
            `,
        },
    ],
})
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
