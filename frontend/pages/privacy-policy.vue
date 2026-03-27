<script setup lang="ts">
useHead({ title: 'Privacy Policy — JCITA' })
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
                <h1 style="font-size:32px; font-weight:900; margin:0 0 8px;">Privacy Policy</h1>
                <p style="color:#737373; font-size:14px; margin:0;">Last updated: March 27, 2025</p>
            </div>

            <div style="line-height:1.8; color:#a3a3a3; font-size:15px;">

                <section style="margin-bottom:32px;">
                    <h2 style="color:#fff; font-size:18px; font-weight:700; margin:0 0 12px;">1. Introduction</h2>
                    <p>Jesus Christ is the Answer Church (JCITA), located at 1384 Tabacuhan, Sta. Rita, Olongapo City, Zambales, Philippines, operates the JCITA App. This Privacy Policy explains how we collect, use, and protect your personal information when you use our application.</p>
                </section>

                <section style="margin-bottom:32px;">
                    <h2 style="color:#fff; font-size:18px; font-weight:700; margin:0 0 12px;">2. Information We Collect</h2>
                    <p>We collect the following information when you create an account or log in:</p>
                    <ul style="margin:12px 0; padding-left:20px;">
                        <li style="margin-bottom:8px;"><strong style="color:#fff;">Name</strong> — to personalize your experience</li>
                        <li style="margin-bottom:8px;"><strong style="color:#fff;">Email address</strong> — for account identification and communication</li>
                        <li style="margin-bottom:8px;"><strong style="color:#fff;">Profile picture</strong> — when signing in via Facebook (optional)</li>
                        <li style="margin-bottom:8px;"><strong style="color:#fff;">Push notification tokens</strong> — to send church updates and announcements</li>
                    </ul>
                </section>

                <section style="margin-bottom:32px;">
                    <h2 style="color:#fff; font-size:18px; font-weight:700; margin:0 0 12px;">3. How We Use Your Information</h2>
                    <p>Your information is used solely to:</p>
                    <ul style="margin:12px 0; padding-left:20px;">
                        <li style="margin-bottom:8px;">Provide and maintain your account</li>
                        <li style="margin-bottom:8px;">Send push notifications about church services, events, and announcements</li>
                        <li style="margin-bottom:8px;">Improve the JCITA App experience</li>
                    </ul>
                    <p>We do <strong style="color:#fff;">not</strong> sell, rent, or share your personal information with third parties for marketing purposes.</p>
                </section>

                <section style="margin-bottom:32px;">
                    <h2 style="color:#fff; font-size:18px; font-weight:700; margin:0 0 12px;">4. Facebook Login</h2>
                    <p>When you choose to sign in with Facebook, we receive your name, email address, and profile picture from Facebook. We use this information only to create and manage your JCITA account. We do not access your Facebook friends list, posts, or any other data beyond what is required for login.</p>
                </section>

                <section style="margin-bottom:32px;">
                    <h2 style="color:#fff; font-size:18px; font-weight:700; margin:0 0 12px;">5. Data Security</h2>
                    <p>We implement appropriate technical measures to protect your personal information. Your password is encrypted using industry-standard hashing. Access tokens are stored securely and expire after 30 days of inactivity.</p>
                </section>

                <section id="data-retention" style="margin-bottom:32px;">
                    <h2 style="color:#fff; font-size:18px; font-weight:700; margin:0 0 12px;">6. Data Retention & Deletion</h2>
                    <p>We retain your personal information for as long as your account is active. To request deletion of your account and all associated personal data, contact us via Facebook at <a href="https://www.facebook.com/JCITATabacuhan" target="_blank" style="color:#fbbf24; text-decoration:none;">facebook.com/JCITATabacuhan</a>. We will process your request within 30 days.</p>
                </section>

                <section style="margin-bottom:32px;">
                    <h2 style="color:#fff; font-size:18px; font-weight:700; margin:0 0 12px;">7. Children's Privacy</h2>
                    <p>Our app is not directed to children under 13. We do not knowingly collect personal information from children under 13.</p>
                </section>

                <section style="margin-bottom:32px;">
                    <h2 style="color:#fff; font-size:18px; font-weight:700; margin:0 0 12px;">8. Changes to This Policy</h2>
                    <p>We may update this Privacy Policy from time to time. We will notify you of any changes by updating the date at the top of this page.</p>
                </section>

                <section style="margin-bottom:32px;">
                    <h2 style="color:#fff; font-size:18px; font-weight:700; margin:0 0 12px;">9. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us:</p>
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
