<script setup lang="ts">
const { isLoggedIn } = useAuth()
const { subscribe } = usePush()

const showBanner = ref(false)

onMounted(() => {
    const isPwa = window.matchMedia('(display-mode: standalone)').matches
        || (window.navigator as any).standalone === true

    if (isPwa) {
        navigateTo(isLoggedIn.value ? '/dashboard' : '/auth/login', { replace: true })
        return
    }

    if ('Notification' in window && Notification.permission === 'default') {
        showBanner.value = true
    }
})

const enableNotifications = async () => {
    showBanner.value = false
    await subscribe()
}

useHead({
    title: "JCITA App",
    meta: [
        {
            name: "description",
            content:
                "Jesus Christ is the Answer (JCITA) Church - Assembly of God, Tabacuhan, Sta. Rita, Olongapo City, Zambales, Philippines.",
        },
    ],
});

const navOpen = ref(false);

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Ministries", href: "#ministries" },
    { label: "Contact", href: "#contact" },
];

const logoMeaning = [
    {
        letter: "J",
        symbol: "The Fishing Hook",
        meaning:
            "Shaped like a fishing hook — a reminder of what we should really do: we are fishers of men.",
        verse: "Matthew 4:19",
        icon: `<svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2C8 2 5 5 5 9c0 3 2 5.5 4 7l3 4 3-4c2-1.5 4-4 4-7 0-4-3-7-7-7z" /><circle cx="12" cy="9" r="2" fill="currentColor" /></svg>`,
    },
    {
        letter: "C",
        symbol: "The Clock",
        meaning:
            "Shaped like a clock — Jesus Christ is the same yesterday, today, and forever. In any time, the Lord never changes and we can ALWAYS count on Him.",
        verse: "Hebrews 13:8",
        icon: `<svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>`,
    },
    {
        letter: "I",
        symbol: "The Checkmark",
        meaning:
            'Joined with the left stroke of "A" it forms a checkmark — because we believe that Jesus Christ really IS the answer.',
        verse: "",
        icon: `<svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 12 10 18 20 6" /></svg>`,
    },
    {
        letter: "T",
        symbol: "The Cross",
        meaning:
            "Shaped like a cross — the most common symbol for Jesus, His Love, and the gift of salvation He has given to us.",
        verse: "",
        icon: `<svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="2" x2="12" y2="22" /><line x1="5" y1="8" x2="19" y2="8" /></svg>`,
    },
    {
        letter: "A",
        symbol: "The Praying Hand",
        meaning:
            'Joined with "I" it forms a side view of a praying hand — we as a church will always use prayer as our first and best weapon.',
        verse: "",
        icon: `<svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l2 7h-4l2-7zM10 9v6l-2 4M14 9v6l2 4M10 13h4" /></svg>`,
    },
];

const serviceSchedule = [
    {
        day: "Sunday Worship",
        time: "9:00 AM - 12:00 PM",
        icon: `<svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /><circle cx="12" cy="12" r="5" /></svg>`,
    },
    {
        day: "Wednesday Prayer",
        time: "7:00 PM - 9:00 PM",
        icon: `<svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2C8 2 5 5 5 9c0 3 2 5.5 4 7l3 4 3-4c2-1.5 4-4 4-7 0-4-3-7-7-7z" /></svg>`,
    },
    {
        day: "Friday Bible Study",
        time: "7:00 PM - 9:00 PM",
        icon: `<svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15z" /></svg>`,
    },
    {
        day: "Saturday Youth",
        time: "5:00 PM - 7:00 PM",
        icon: `<svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>`,
    },
];

const ministries = [
    {
        name: "Worship Ministry",
        description:
            "Leading the congregation in praise and worship through music and song.",
    },
    {
        name: "Youth Ministry",
        description:
            "Empowering the next generation to grow in faith and serve the community.",
    },
    {
        name: "Prayer Ministry",
        description:
            "Dedicated intercessors lifting up the needs of the church and community.",
    },
    {
        name: "Women's Ministry",
        description:
            "Building a community of faith-filled women through fellowship and service.",
    },
    {
        name: "Men's Ministry",
        description:
            "Strengthening men in their walk with God through accountability and growth.",
    },
    {
        name: "Children's Ministry",
        description:
            "Nurturing young hearts to know and love Jesus through fun and engaging lessons.",
    },
];
</script>

<template>
    <div class="min-h-screen bg-neutral-950 text-white">
        <!-- Push Notification Banner -->
        <div
            v-if="showBanner"
            class="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-96 z-50 bg-neutral-900 border border-amber-400/30 rounded-xl p-4 shadow-xl flex items-center gap-4"
        >
            <div class="text-amber-400">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-5-5.917V4a1 1 0 10-2 0v1.083A6 6 0 006 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
            </div>
            <div class="flex-1">
                <p class="text-white text-sm font-semibold">Stay Updated</p>
                <p class="text-neutral-400 text-xs">Get notified about services and events.</p>
            </div>
            <div class="flex gap-2">
                <button
                    class="px-3 py-1.5 bg-amber-400 text-neutral-950 text-xs font-bold rounded-lg hover:bg-amber-300 transition-colors"
                    @click="enableNotifications"
                >
                    Allow
                </button>
                <button
                    class="px-3 py-1.5 text-neutral-500 text-xs hover:text-neutral-300 transition-colors"
                    @click="showBanner = false"
                >
                    Later
                </button>
            </div>
        </div>

        <!-- Navigation -->
        <nav
            class="fixed top-0 left-0 right-0 z-50 bg-neutral-950/95 backdrop-blur-sm border-b border-neutral-800"
        >
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <a href="#home" class="flex items-center gap-3">
                        <img
                            :src="'/logo.png'"
                            alt="JCITA Logo"
                            class="h-10 invert"
                        />
                    </a>

                    <!-- Desktop nav -->
                    <div class="hidden md:flex items-center gap-8">
                        <a
                            v-for="link in navLinks"
                            :key="link.href"
                            :href="link.href"
                            class="text-sm font-medium text-neutral-400 hover:text-amber-400 transition-colors uppercase tracking-wider"
                        >
                            {{ link.label }}
                        </a>
                    </div>

                    <!-- Mobile menu button -->
                    <button class="md:hidden p-2" @click="navOpen = !navOpen">
                        <svg
                            class="w-6 h-6 text-neutral-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                v-if="!navOpen"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            <path
                                v-else
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <!-- Mobile nav -->
                <div
                    v-if="navOpen"
                    class="md:hidden pb-4 border-t border-neutral-800"
                >
                    <a
                        v-for="link in navLinks"
                        :key="link.href"
                        :href="link.href"
                        class="block py-3 text-sm font-medium text-neutral-400 hover:text-amber-400 uppercase tracking-wider"
                        @click="navOpen = false"
                    >
                        {{ link.label }}
                    </a>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section
            id="home"
            class="relative min-h-screen flex items-center justify-center pt-16"
        >
            <!-- Background pattern -->
            <div
                class="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.08)_0%,_transparent_70%)]"
            ></div>

            <div class="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <img
                    :src="'/logo.png'"
                    alt="JCITA Logo"
                    class="h-32 sm:h-40 md:h-48 mx-auto mb-8 invert"
                />

                <h1
                    class="text-4xl sm:text-5xl md:text-7xl font-black mb-4 leading-tight tracking-tight"
                >
                    Jesus Christ is<br />
                    <span class="text-amber-400">the Answer</span>
                </h1>
                <p class="text-lg sm:text-xl text-neutral-400 mb-2 font-medium">
                    Assembly of God Church
                </p>
                <p class="text-neutral-500 mb-10">
                    Tabacuhan, Sta. Rita, Olongapo City, Zambales
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#services"
                        class="px-8 py-3.5 bg-amber-400 text-neutral-950 font-bold rounded-lg hover:bg-amber-300 transition-colors uppercase tracking-wider text-sm"
                    >
                        Join Our Worship | Test
                    </a>
                    <a
                        href="#contact"
                        class="px-8 py-3.5 border-2 border-neutral-600 text-neutral-300 font-bold rounded-lg hover:border-amber-400 hover:text-amber-400 transition-colors uppercase tracking-wider text-sm"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>

        <!-- Logo Meaning Section -->
        <section class="py-20 bg-neutral-900 border-y border-neutral-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-14">
                    <h2
                        class="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight"
                    >
                        What <span class="text-amber-400">JCITA</span> Stands
                        For
                    </h2>
                    <p class="text-neutral-500 text-lg">
                        Each letter in our logo carries a purpose
                    </p>
                </div>
                <div
                    class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
                >
                    <div
                        v-for="item in logoMeaning"
                        :key="item.letter"
                        class="bg-neutral-950 border border-neutral-800 rounded-xl p-6 text-center hover:border-amber-400/50 transition-all group"
                    >
                        <div
                            class="text-amber-400 flex justify-center mb-3 group-hover:scale-110 transition-transform"
                            v-html="item.icon"
                        ></div>
                        <div class="text-4xl font-black text-white mb-1">
                            {{ item.letter }}
                        </div>
                        <div
                            class="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-2"
                        >
                            {{ item.symbol }}
                        </div>
                        <p class="text-neutral-500 text-xs leading-relaxed">
                            {{ item.meaning }}
                        </p>
                        <p
                            v-if="item.verse"
                            class="text-amber-400/60 text-xs mt-2 italic"
                        >
                            {{ item.verse }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="py-20 bg-neutral-950">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-14">
                    <h2
                        class="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight"
                    >
                        About Our Church
                    </h2>
                    <div class="w-20 h-1 bg-amber-400 mx-auto"></div>
                </div>
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <!-- <p class="text-lg text-neutral-400 leading-relaxed mb-6">
                            Jesus Christ is the Answer (JCITA) is a vibrant Assembly of God church located in the heart
                            of Tabacuhan, Sta. Rita, Olongapo City, Zambales. We are part of the
                            <strong class="text-white">Philippines General Council of the Assemblies of God (PGCAG)</strong> under the
                            Central Luzon District.
                        </p> -->
                        <p
                            class="text-lg text-neutral-400 leading-relaxed mb-6"
                        >
                            Our mission is to share the love of Jesus Christ
                            with every person in our community through worship,
                            fellowship, discipleship, and service. We believe
                            that Jesus Christ truly is the answer to every need,
                            every question, and every challenge in life.
                        </p>
                        <p class="text-lg text-neutral-400 leading-relaxed">
                            Whether you are a long-time believer or just
                            exploring faith, you are welcome here. Come as you
                            are and experience the transforming power of God's
                            love.
                        </p>
                    </div>
                    <div
                        class="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 text-center"
                    >
                        <svg
                            class="w-16 h-16 text-amber-400 mx-auto mb-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                        >
                            <line x1="12" y1="2" x2="12" y2="22" />
                            <line x1="5" y1="8" x2="19" y2="8" />
                        </svg>
                        <h3 class="text-2xl font-black text-white mb-4">
                            Our Vision
                        </h3>
                        <p class="text-amber-400/80 text-lg italic">
                            "To be a Christ-centered community that transforms
                            lives, builds families, and impacts our city for the
                            glory of God."
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Service Schedule -->
        <section
            id="services"
            class="py-20 bg-neutral-900 border-y border-neutral-800"
        >
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-14">
                    <h2
                        class="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight"
                    >
                        Service Schedule
                    </h2>
                    <div class="w-20 h-1 bg-amber-400 mx-auto mb-4"></div>
                    <p class="text-neutral-500 text-lg">
                        Join us for worship and fellowship
                    </p>
                </div>
                <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div
                        v-for="service in serviceSchedule"
                        :key="service.day"
                        class="bg-neutral-950 border border-neutral-800 rounded-xl p-6 text-center hover:border-amber-400/50 transition-all group"
                    >
                        <div
                            class="text-amber-400 flex justify-center mb-4 group-hover:scale-110 transition-transform"
                            v-html="service.icon"
                        ></div>
                        <h3 class="font-bold text-white mb-2">
                            {{ service.day }}
                        </h3>
                        <p class="text-amber-400 font-medium text-sm">
                            {{ service.time }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Ministries -->
        <section id="ministries" class="py-20 bg-neutral-950">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-14">
                    <h2
                        class="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight"
                    >
                        Our Ministries
                    </h2>
                    <div class="w-20 h-1 bg-amber-400 mx-auto mb-4"></div>
                    <p class="text-neutral-500 text-lg">
                        Get involved and grow in your faith
                    </p>
                </div>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div
                        v-for="(ministry, index) in ministries"
                        :key="ministry.name"
                        class="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-amber-400/50 transition-all group"
                    >
                        <div
                            class="w-10 h-10 bg-amber-400/10 border border-amber-400/30 rounded-lg flex items-center justify-center mb-4 text-amber-400 font-bold text-sm group-hover:bg-amber-400/20 transition-colors"
                        >
                            {{ String(index + 1).padStart(2, "0") }}
                        </div>
                        <h3 class="text-lg font-bold text-white mb-2">
                            {{ ministry.name }}
                        </h3>
                        <p class="text-neutral-500 text-sm leading-relaxed">
                            {{ ministry.description }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact & Location -->
        <section
            id="contact"
            class="py-20 bg-neutral-900 border-t border-neutral-800"
        >
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-14">
                    <h2
                        class="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight"
                    >
                        Visit Us
                    </h2>
                    <div class="w-20 h-1 bg-amber-400 mx-auto"></div>
                </div>
                <div class="grid md:grid-cols-2 gap-12">
                    <div>
                        <div class="mb-8">
                            <h3
                                class="text-lg font-bold text-amber-400 uppercase tracking-wider mb-3"
                            >
                                Church Address
                            </h3>
                            <p class="text-neutral-400 text-lg leading-relaxed">
                                1384 Tabacuhan, Sta. Rita<br />
                                Olongapo City, Zambales 2200<br />
                                Philippines
                            </p>
                        </div>
                        <div class="mb-8">
                            <h3
                                class="text-lg font-bold text-amber-400 uppercase tracking-wider mb-4"
                            >
                                Connect With Us
                            </h3>
                            <div class="flex gap-4">
                                <a
                                    href="https://www.facebook.com/JCITATabacuhan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="flex items-center gap-2 px-5 py-2.5 bg-neutral-800 border border-neutral-700 text-white rounded-lg hover:border-amber-400 hover:text-amber-400 transition-all text-sm font-medium"
                                >
                                    <svg
                                        class="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                        />
                                    </svg>
                                    Facebook
                                </a>
                                <a
                                    href="https://x.com/JCITATabacuhan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="flex items-center gap-2 px-5 py-2.5 bg-neutral-800 border border-neutral-700 text-white rounded-lg hover:border-amber-400 hover:text-amber-400 transition-all text-sm font-medium"
                                >
                                    <svg
                                        class="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                        />
                                    </svg>
                                    X / Twitter
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3
                                class="text-lg font-bold text-amber-400 uppercase tracking-wider mb-3"
                            >
                                Affiliation
                            </h3>
                            <p class="text-neutral-400">
                                Philippines General Council of the Assemblies of
                                God (PGCAG)<br />
                                Central Luzon District
                            </p>
                        </div>
                    </div>
                    <div
                        class="bg-neutral-800 rounded-2xl overflow-hidden min-h-[300px] border border-neutral-700"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.0!2d120.28!3d14.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTabacuhan%2C+Sta.+Rita%2C+Olongapo+City!5e0!3m2!1sen!2sph!4v1"
                            width="100%"
                            height="100%"
                            style="border: 0; min-height: 300px"
                            allowfullscreen
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-neutral-950 border-t border-neutral-800 py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <img
                        :src="'/logo.png'"
                        alt="JCITA Logo"
                        class="h-12 mx-auto mb-4 invert"
                    />
                    <p class="text-neutral-500 mb-4">
                        Jesus Christ is the Answer Church, Assembly of God
                    </p>
                    <p class="text-neutral-600 text-sm">
                        1384 Tabacuhan, Sta. Rita, Olongapo City, Zambales 2200,
                        Philippines
                    </p>
                    <div class="mt-6 pt-6 border-t border-neutral-800">
                        <p class="text-neutral-700 text-sm">
                            &copy; {{ new Date().getFullYear() }} JCITA
                            Tabacuhan. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
