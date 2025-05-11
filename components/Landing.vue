<template>
  <section
    class="relative flex items-center justify-center h-screen bg-cover bg-center"
    style="background-image: url('/images/bg-landing.jpeg')"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-0"></div>

    <!-- Content -->
    <div
      class="relative z-10 backdrop-blur-sm bg-white/10 text-white text-center px-6 py-8 rounded-2xl shadow-lg max-w-md space-y-5 animate-fade-in"
    >
      <h1 class="text-4xl font-bold tracking-wide drop-shadow-md">Undangan Pernikahan</h1>
      <p class="text-xl font-medium">Nara & Pasangan</p>
      <button
        @click="$emit('open')"
        class="mt-4 px-6 py-2 bg-white text-black rounded-lg shadow hover:bg-gray-200 transition"
      >
        Lihat Undangan
      </button>
    </div>
  </section>
</template>

<script setup>
// Tidak perlu logic tambahan di sini
</script>

<style scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(10px);
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
