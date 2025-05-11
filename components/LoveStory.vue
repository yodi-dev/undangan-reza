<template>
  <section id="love-story" class="py-20 bg-rose-50">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center text-rose-600 mb-12">Our Love Story</h2>

      <div class="relative border-l-4 border-rose-300 pl-8 space-y-12">
        <div
          v-for="(event, idx) in timeline"
          :key="idx"
          data-aos="fade-up"
          class="relative group"
        >
          <!-- Timeline dot -->
          <div class="absolute -left-[14px] top-1 w-7 h-7 bg-white border-[5px] border-rose-500 rounded-full flex items-center justify-center shadow-md">
            <span class="text-lg">{{ event.icon }}</span>
          </div>

          <!-- Content -->
          <div class="bg-white shadow-lg rounded-xl p-5 border border-rose-100">
            <p class="text-sm text-rose-400 font-medium">{{ event.date }}</p>
            <p class="text-gray-700 text-lg mt-1">{{ event.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({ duration: 800, once: true })
})

const timeline = ref([
  {
    date: '01 Jan 2020',
    description: 'Pertemuan pertama di kafe kecil dekat kampus.',
    icon: '☕️'
  },
  {
    date: '14 Feb 2020',
    description: 'Mulai resmi berpacaran sambil makan malam romantis.',
    icon: '❤️'
  },
  {
    date: '10 Jun 2021',
    description: 'Liburan bersama di pantai, kenangan tak terlupakan.',
    icon: '🌊'
  },
  {
    date: '05 Mei 2025',
    description: 'Lamaran, menuju babak baru kehidupan.',
    icon: '💍'
  }
])
</script>

<style scoped>
/* Optional: smooth AOS fade-in */
</style>
