<template>
  <section id="event-detail" class="py-16 bg-white font-body">
    <div class="max-w-4xl">
      <h2 class="text-4xl font-bold font-heading text-center text-neutral-800 mb-12 tracking-wide">
        Acara Pernikahan
      </h2>

      <div class="space-y-12">
        <div v-for="(event, index) in events" :key="index"
          class="bg-[#fefbf7] border border-amber-200 p-6 shadow-sm md:flex md:items-start md:space-x-6 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02] rounded-2xl"
          data-aos="fade-up">
          <!-- Kiri: Info Acara -->
          <div class="md:w-1/2 space-y-3">
            <h3 class="text-2xl font-semibold text-amber-700">{{ event.title }}</h3>
            <p class="text-neutral-600 flex items-center gap-2 text-sm">
              📅 {{ event.date }}
            </p>
            <p class="text-neutral-600 flex items-center gap-2 text-sm">
              🕒 {{ event.time }}
            </p>
            <p class="text-neutral-600 flex items-start gap-2 text-sm">
              📍<span>{{ event.location }}</span>
            </p>
          </div>

          <!-- Kanan: Peta -->
          <div class="mt-6 md:mt-0 md:w-1/2">
            <div class="overflow-hidden shadow-md">
              <iframe :src="event.mapUrl" width="100%" height="220" style="border:0;" allowfullscreen=""
                loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({ duration: 800, once: true })
})

const events = ref([
  {
    title: 'Akad Nikah',
    date: 'Sabtu, 26 Juli 2025',
    time: 'Pukul 08:00 - 09:00 WIB',
    location: 'Masjid Agung, Jl. Merpati No.10, Jakarta',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.123456789!2d106.827153!3d-6.175110!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f123456789ab%3A0xabcdef1234567890!2sMasjid%20Agung%20Jakarta!5e0!3m2!1sen!2sid!4v0000000000000'
  },
  {
    title: 'Resepsi',
    date: 'Sabtu, 26 Juli 2025',
    time: 'Pukul 09:00 WIB - selesai',
    location: 'Gedung Serbaguna, Jl. Melati No.5, Jakarta',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.987654321!2d106.828000!3d-6.176000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fabcdef12345%3A0x123456abcdef7890!2sGedung%20Serbaguna!5e0!3m2!1sen!2sid!4v0000000000001'
  }
])
</script>
