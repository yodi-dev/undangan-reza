<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  meta: [
    { name: 'description', content: '' },
    { property: 'og:title', content: 'Undangan Pernikahan Reza & Nabila' },
    { property: 'og:description', content: 'Kami mengundang Anda untuk hadir di hari bahagia kami.' },
    { property: 'og:image', content: 'https://undangan-kamu.vercel.app/images/og-image.jpg' },
    { property: 'og:url', content: 'https://undangan-kamu.vercel.app' },
    { property: 'og:type', content: 'website' },
  ]
})
</script>
