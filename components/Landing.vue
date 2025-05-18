<template>
  <section ref="landingRef"
    class="relative flex items-end md:items-center justify-center h-screen bg-no-repeat bg-cover bg-[center_80%] md:bg-[center_35%]"
    style="background-image: url('/images/landing.jpg')">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-0"></div>

    <!-- Content -->
    <div
      class="relative mb-28 bg-white/10 text-white text-center px-8 py-10 rounded-3xl shadow-2xl max-w-lg animate-fade-in space-y-5">
      <h1 class="text-3xl md:text-4xl font-heading font-bold tracking-wide drop-shadow-sm">
        Reza & Desti
      </h1>
      <p class="text-lg md:text-xl font-body font-light text-white/90 leading-relaxed">
        Dengan segala kerendahan hati, kami mengundang Bapak/Ibu/Saudara/i untuk hadir
        dalam momen istimewa kami.
      </p>
      <button @click="openInvitation"
        class="mt-4 inline-flex items-center gap-2 px-6 py-2 bg-white text-gray-800 font-semibold rounded-xl shadow-md hover:bg-gray-100 transition">
        <span>📩</span>
        <span>Buka Undangan</span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

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
