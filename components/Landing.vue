<template>
  <section ref="landingRef"
    class="relative flex items-end md:items-center justify-center h-screen bg-no-repeat bg-cover bg-[center_80%] md:bg-[center_35%]"
    style="background-image: url('/images/landing.webp')">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-0"></div>

    <!-- Content -->
    <div class="relative mb-16 text-white text-center px-8 py-10 rounded-3xl shadow-2xl max-w-lg animate-fade-in">
      <p class="font-second text-xl">The Wedding Of</p>
      <h1 class="text-5xl font-heading font-bold tracking-wide my-8">
        Desti & Reza
      </h1>
      <p class="text-sm md:text-lg font-second font-light text-white/90 italic">
        Kepada Yth:
      </p>
      <p class="font-second text-lg">{{ guestName }}</p>
      <button @click="openInvitation"
        class="mt-4 inline-flex items-center gap-2 px-6 py-2 bg-white text-gray-800 font-second font-semibold rounded-3xl shadow-md hover:bg-gray-100 transition">
        <span><img src="/images/invitation.png" alt="Ikon Undangan" class="w-5 h-5" loading="lazy" />
        </span>
        <span>Buka Undangan</span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const guestName = ref('Tamu Undangan')

onMounted(() => {
  const hash = decodeURIComponent(window.location.hash.replace('#', ''))
  if (hash) guestName.value = hash.replace(/-/g, ' ')
})

const emit = defineEmits(['open'])
const landingRef = ref(null)

const openInvitation = () => {
  landingRef.value.classList.add('opacity-0')
  setTimeout(() => {
    emit('open')
    window.dispatchEvent(new Event('play-music'))
  }, 700)
}
</script>

<style scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1.2s ease-out;
}
</style>
