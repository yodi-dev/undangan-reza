<template>
  <!-- Root wrapper for global transitions or providers -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <div class="fixed bottom-5 right-5 z-50">
    <button @click="toggleMusic" class="bg-white text-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 transition">
      <span v-if="isPlaying">🔊</span>
      <span v-else>🔈</span>
    </button>
    <audio ref="audioRef" loop preload="auto">
      <source src="/audio/bg-music.mp3" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const audioRef = ref(null)
const isPlaying = ref(false)

const toggleMusic = () => {
  if (!audioRef.value) return

  if (audioRef.value.paused) {
    audioRef.value.play()
    isPlaying.value = true
  } else {
    audioRef.value.pause()
    isPlaying.value = false
  }
}

// Optional: autoplay saat mounted
onMounted(() => {
  // uncomment kalau mau auto play saat buka halaman
  audioRef.value?.play()
  isPlaying.value = true
})
</script>

<style global></style>
