<template>
  <section id="love-story" class="py-20 font-[Inter,sans-serif]">
    <div class="max-w-3xl mx-auto px-4">
      <h2 class="text-4xl font-bold font-heading text-center mb-3 tracking-wide mb-8">
        Kisah Cinta
      </h2>
      <div class="relative border-l-2 border-gradient-to-b pl-6 space-y-10">
        <div v-for="(event, idx) in timeline" :key="idx" data-aos="fade-up" class="relative group">
          <!-- Timeline dot -->
          <div
            class="absolute -left-4 top-1 w-8 h-8 bg-white border-[4px] border-rose-500 rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105">
            <span class="text-xl"><img :src="event.icon" alt="Icon" class="w-6 h-6" />
            </span>
          </div>

          <!-- Content -->
          <div class="bg-white shadow-md hover:shadow-lg rounded-xl p-5 border border-rose-100 transition duration-300">
            <p class="text-xs text-rose-600 font-semibold uppercase tracking-wide">{{ event.date }}</p>
            <p class="text-neutral-700 font-body text-base mt-2 leading-relaxed">{{ event.description }}</p>
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
    date: 'Pertemuan',
    description: 'Tidak ada yang kebetulan di dunia ini. Semua sudah mempunyai porsi masing2 dan telah disusun rapi oleh sang maha kuasa. Pertemuan kami bermula dari tempat kerja sebuah restoran di kota teh obeng (batam), akhir tahun 2021.',
    icon: '/icons/icon1.png'
  },
  {
    date: 'Pendekatan',
    description: 'Katanya cinta dapat tumbuh dengan kebersamaan, seiring berjalannya waktu kami semakin dekat walau tidak ada kata pacaran dan terus berlanjut.',
    icon: '/icons/icon2.png'
  },
  {
    date: 'Tunangan',
    description: 'Hingga akhirnya di tahun ke-3 (awal tahun 2024) kami memutuskan untuk cuti bersama ke kampung halamanku dan mengenal lebih dekat keluarga besar kami berdua. Di ikat dengan sebuah cincin, kami dan keluarga meresmikan hubungan dengan tujuan ke jenjang yang lebih serius.',
    icon: '/icons/icon3.png'
  },
  {
    date: 'Pernikahan',
    description: 'Alhamdulillah tidak ada usaha yang mengkhianati hasil, dengan penuh perjuangan di tanah perantauan kami mengusahakan untuk bisa mengikrarkan janji suci pernikahan di tahun ini.',
    icon: '/icons/icon4.png'
  }
])
</script>

<style scoped>
/* Efek gradasi lembut */
.border-gradient-to-b {
  border-image: linear-gradient(to bottom, #fc4d5f, #fec7dd);
  /* Amber tone */
  border-image-slice: 1;
}
</style>
