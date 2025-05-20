<template>
  <section id="event-detail" class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-rose-600 mb-12">Acara Pernikahan</h2>

      <div class="space-y-12">
        <div v-for="(event, index) in events" :key="index"
          class="bg-rose-50 border border-rose-200 rounded-2xl p-6 shadow-md md:flex md:items-start md:space-x-6"
          data-aos="fade-up">
          <!-- Left Info -->
          <div class="md:w-1/2 space-y-3">
            <h3 class="text-2xl font-semibold text-rose-700">{{ event.title }}</h3>
            <p class="text-gray-600 flex items-center gap-2">
              📅 {{ event.date }}
            </p>
            <p class="text-gray-600 flex items-center gap-2">
              🕒 {{ event.time }}
            </p>
            <p class="text-gray-600 flex items-start gap-2">
              📍<span>{{ event.location }}</span>
            </p>
          </div>

          <!-- Right Map -->
          <div class="mt-6 md:mt-0 md:w-1/2">
            <div class="rounded-xl overflow-hidden shadow-lg">
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
