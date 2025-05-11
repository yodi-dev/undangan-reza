<template>
  <section class="py-12 bg-gradient-to-b from-[#fff9f5] to-[#fefbf7] text-center">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-gray-800 mb-8">Menuju Hari Bahagia</h2>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
        <div v-for="(item, i) in countdownItems" :key="i" class="bg-white rounded-xl shadow p-4">
          <div class="text-4xl font-extrabold text-[#2c2c2c]">{{ item.value }}</div>
          <div class="text-sm text-gray-500 mt-1">{{ item.label }}</div>
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
  const now = Date.now()
  const diff = target - now

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
