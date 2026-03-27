<script setup lang="ts">
useHead({ title: 'Terms of Service — JCITA' })
</script>

<template>
    <div style="min-height:100vh; background:#0a0a0a; color:#fff; padding:48px 24px;">
        <div style="max-width:720px; margin:0 auto;">

            <!-- Back -->
            <NuxtLink to="/" style="display:inline-flex; align-items:center; gap:8px; color:#737373; font-size:14px; text-decoration:none; margin-bottom:40px;">
                <svg style="width:16px;height:16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
                Back to Home
            </NuxtLink>

            <!-- Header -->
            <div style="margin-bottom:40px;">
                <img :src="'/logo.png'" alt="JCITA" class="invert" style="height:48px; width:auto; display:block; margin-bottom:24px;" />
                <h1 style="font-size:32px; font-weight:900; margin:0 0 8px;">Terms of Service</h1>
                <p style="color:#737373; font-size:14px; margin:0;">Last updated: March 27, 2025</p>
            </div>

            <div style="line-height:1.8; color:#a3a3a3; font-size:15px;">

                <section style="margin-bottom:32px;">
                    <h2 style="color:#fff; font-size:18px; font-weight:700; margin:0 0 12px;">1. Acceptance of Terms</h2>
                    <p>By accessing or using the JCITA App, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the app.</p>
                </section>

                <section style="margin-bottom:32px;">
                    <h2 style="color:#fff; font-size:18px; font-weight:700; margin:0 0 12px;">2. About the App</h2>
                    <p>The JCITA App is a free service provided by Jesus Christ is the Answer Church (Assembly of God), Tabacuhan, Sta. Rita, Olongapo City, Zambales, Philippines. The app provides church members and visitors with information about services, events, and church announcements.</p>
                </section>

                <section style="margin-bottom:32px;">
                    <h2 style="color:#fff; font-size:18px; font-weight:700; margin:0 0 12px;">3. User Accounts</h2>
                    <p>To access certain features, you may create an account using your email address or by signing in with Facebook. You are responsible for:</p>
                    <ul style="margin:12px 0; padding-left:20px;">
                        <li style="margin-bottom:8px;">Maintaining the confidentiality of your account credentials</li>
                        <li style="margin-bottom:8px;">All activities that occur under your account</li>
                        <li style="margin-bottom:8px;">Providing accurate and truthful information</li>
                    </ul>
                </section>

                <section style="margin-bottom:32px;">
                    <h2 style="color:#fff; font-size:18px; font-weight:700; margin:0 0 12px;">4. Acceptable Use</h2>
                    <p>You agree to use the JCITA App only for lawful purposes. You must not:</p>
                    <ul style="margin:12px 0; padding-left:20px;">
                        <li style="margin-bottom:8px;">Use the app in any way that violates applicable laws or regulations</li>
                        <li style="margin-bottom:8px;">Attempt to gain unauthorized access to any part of the app</li>
                        <li style="margin-bottom:8px;">Use the app to transmit harmful, offensive, or inappropriate content</li>
                        <li style="margin-bottom:8px;">Impersonate any person or entity</li>
                    </ul>
                </section>

                <section style="margin-bottom:32px;">
                    <h2 style="color:#fff; font-size:18px; font-weight:700; margin:0 0 12px;">5. Push Notifications</h2>
                    <p>By enabling push notifications, you consent to receive messages from JCITA regarding church services, events, and announcements. You may disable notifications at any time through your device settings or within the app.</p>
                </section>

                <section style="margin-bottom:32px;">
                    <h2 style="color:#fff; font-size:18px; font-weight:700; margin:0 0 12px;">6. Intellectual Property</h2>
                    <p>All content in the JCITA App, including the logo, text, and design, is the property of Jesus Christ is the Answer Church. You may not reproduce or distribute any content without prior written permission.</p>
                </section>

                <section style="margin-bottom:32px;">
                    <h2 style="color:#fff; font-size:18px; font-weight:700; margin:0 0 12px;">7. Disclaimer</h2>
                    <p>The JCITA App is provided "as is" without warranties of any kind. We do not guarantee that the app will be available at all times or free from errors.</p>
                </section>

                <section style="margin-bottom:32px;">
                    <h2 style="color:#fff; font-size:18px; font-weight:700; margin:0 0 12px;">8. Changes to Terms</h2>
                    <p>We reserve the right to update these Terms of Service at any time. Continued use of the app after changes constitutes acceptance of the new terms.</p>
                </section>

                <section style="margin-bottom:32px;">
                    <h2 style="color:#fff; font-size:18px; font-weight:700; margin:0 0 12px;">9. Contact Us</h2>
                    <p>For any questions regarding these Terms of Service, please contact us:</p>
                    <div style="margin-top:12px; padding:16px; background:#171717; border:1px solid #262626; border-radius:12px;">
                        <p style="margin:0 0 4px;"><strong style="color:#fff;">JCITA — Jesus Christ is the Answer Church</strong></p>
                        <p style="margin:0 0 4px;">1384 Tabacuhan, Sta. Rita, Olongapo City, Zambales 2200, Philippines</p>
                        <p style="margin:0;">
                            Facebook:
                            <a href="https://www.facebook.com/JCITATabacuhan" target="_blank" style="color:#fbbf24; text-decoration:none;">facebook.com/JCITATabacuhan</a>
                        </p>
                    </div>
                </section>

            </div>
        </div>
    </div>
</template>
