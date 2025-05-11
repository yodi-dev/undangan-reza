<template>
  <section id="thank-you" class="py-20 bg-gray-100 text-center">
    <div class="max-w-xl mx-auto space-y-6 px-4">
      <h2 class="text-3xl font-bold text-rose-600">Terima Kasih</h2>
      <p class="text-gray-700 text-lg leading-relaxed">
        Dengan penuh cinta dan rasa syukur, kami mengucapkan terima kasih atas doa, dukungan, dan kehadiranmu di hari bahagia kami.
        Semoga kebahagiaan dan berkah senantiasa menyertai kita semua.
      </p>
      <div class="flex justify-center space-x-4 pt-2">
        <a
          v-for="(social, idx) in socials"
          :key="idx"
          :href="social.url"
          target="_blank"
          class="transition transform hover:scale-110"
        >
          <img :src="social.icon" :alt="social.name" class="w-8 h-8" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const socials = ref([
  { name: 'Instagram Nara', url: 'https://instagram.com/nara', icon: '/images/instagram.svg' },
  { name: 'Instagram Pasangan', url: 'https://instagram.com/pasangan', icon: '/images/instagram.svg' }
])
</script>

<style scoped>
/* Tambahan efek soft */
img {
  filter: grayscale(20%);
}
</style>
