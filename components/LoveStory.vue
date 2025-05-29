<template>
  <section id="love-story" class="py-20 font-[Inter,sans-serif]">
    <div class="max-w-3xl mx-auto px-4">
      <h2 class="text-4xl font-bold font-heading text-center mb-3 tracking-wide">
        Kisah Cinta
      </h2>
      <p class="text-center font-body mb-12 text-sm md:text-base leading-relaxed">
        Kisah kami dimulai dari aroma kopi dan senyum pelanggan — perjalanan hangat dari balik meja bar dan dapur.
      </p>

      <div class="relative border-l-2 border-gradient-to-b pl-6 space-y-10">
        <div v-for="(event, idx) in timeline" :key="idx" data-aos="fade-up" class="relative group">
          <!-- Timeline dot -->
          <div
            class="absolute -left-4 top-1 w-8 h-8 bg-white border-[4px] border-rose-500 rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105">
            <span class="text-xl">{{ event.icon }}</span>
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
    date: '10 Maret 2021',
    description: 'Kami pertama kali bertemu di sebuah restoran kecil. Aku bagian barista, dia di dapur. Awalnya cuma saling sapa, lalu jadi saling tunggu waktu istirahat.',
    icon: '🍽️'
  },
  {
    date: '24 Desember 2021',
    description: 'Malam Natal saat restoran sibuk, kami saling bantu tanpa banyak bicara. Tapi di akhir shift, dia kasih cokelat panas. Dari situ, semuanya berubah.',
    icon: '🎄'
  },
  {
    date: '12 Mei 2022',
    description: 'Libur bareng akhirnya datang. Kami jalan-jalan ke kota tua, makan jajanan kaki lima, dan ngobrol panjang seharian. Rasanya seperti tahu tujuan baru.',
    icon: '🚶‍♂️🚶‍♀️'
  },
  {
    date: '01 Januari 2025',
    description: 'Di dalam restoran yang kini kami kelola bersama, dia melamar. Di meja sudut tempat kami sering makan malam diam-diam. Aku bilang, "ya".',
    icon: '💍'
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
