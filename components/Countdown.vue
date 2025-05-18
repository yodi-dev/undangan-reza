<template>
  <section class="relative h-screen w-full overflow-hidden" :style="{
    backgroundImage: `url('/images/landing.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }">
    <!-- overlay gelap tipis -->
    <div class="absolute inset-0 bg-black/40"></div>

    <div class="relative z-10 flex flex-col items-center justify-end h-full text-center px-4 pb-32">
      <h1 class="font-heading text-5xl text-white sm:text-6xl">Reza & Desti</h1>
      <p class="font-body text-base text-white sm:text-lg py-5">Sabtu, 1 Juli 2025</p>
      <div class="flex space-x-2 sm:space-x-4">
        <div v-for="(item, i) in countdownItems" :key="i" class="flex flex-col items-center">
          <div class="bg-white/70 text-[#2c2c2c] font-bold rounded-lg shadow-lg px-4 py-2 text-2xl sm:text-3xl">
            {{ item.value }}
          </div>
          <div class="mt-1 text-xs sm:text-sm text-white/90">{{ item.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const target = new Date('2025-07-01T09:00:00+07:00').getTime()
const days = ref(0), hours = ref(0), minutes = ref(0), seconds = ref(0)
let timer

function update() {
  const diff = target - Date.now()
  days.value = Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0)
  hours.value = Math.max(Math.floor((diff / (1000 * 60 * 60)) % 24), 0)
  minutes.value = Math.max(Math.floor((diff / (1000 * 60)) % 60), 0)
  seconds.value = Math.max(Math.floor((diff / 1000) % 60), 0)
}

const countdownItems = computed(() => [
  { label: 'Hari', value: days.value },
  { label: 'Jam', value: hours.value },
  { label: 'Menit', value: minutes.value },
  { label: 'Detik', value: seconds.value },
])

onMounted(() => {
  update()
  timer = setInterval(update, 1000)
})
onUnmounted(() => clearInterval(timer))
</script>
