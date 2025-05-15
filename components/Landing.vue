<template>
  <section class="relative flex items-center justify-center h-screen bg-cover bg-center"
    style="background-image: url('/images/landing.jpg')">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-0"></div>

    <!-- Content -->
    <div
      class="relative bg-white/10 text-white text-center px-8 py-10 rounded-3xl shadow-2xl max-w-lg animate-fade-in space-y-5">
      <div class="flex justify-center text-5xl">
        <span>💍</span>
      </div>
      <h1 class="text-3xl md:text-4xl font-[Merriweather] font-bold tracking-wide drop-shadow-sm">
        Reza & Desti
      </h1>
      <p class="text-lg md:text-xl font-light text-white/90">
        Dengan segala kerendahan hati, kami mengundang Anda untuk hadir dalam
        momen istimewa kami.
      </p>
      <p class="text-sm text-white/70 italic">Bulan Juli 2025</p>
      <button @click="$emit('open')"
        class="mt-4 px-6 py-2 bg-white text-gray-800 font-semibold rounded-xl shadow-md hover:bg-gray-100 transition">
        Buka Undangan
      </button>
    </div>
  </section>
</template>

<script setup>
// Kosong, karena hanya UI
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap");

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(12px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>
