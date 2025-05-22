<template>
  <section id="event-detail" class="bg-[#fefbf7] font-body py-20 border border-rose-200">
    <div class="max-w-4xl">
      <div>
        <h2 class="text-4xl font-bold font-heading text-center text-rose-600 tracking-wide">
          Acara Pernikahan
        </h2>
        <div v-for="(event, index) in events" :key="index"
          class="bg-[#fefbf7] p-6 shadow-sm md:flex md:items-start md:space-x-6 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02]"
          data-aos="fade-up">
          <!-- Kiri: Info Acara -->
          <div class="md:w-1/2 space-y-3">
            <h3 class="text-xl font-semibold text-rose-700">{{ event.title }}</h3>
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
    location: 'Prumnas Muara Siban Desa Indikat Ilir Kec. Gumay Talang Kab. Lahat, Sumatera Selatan',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15924.049153595799!2d103.49610328674314!3d-3.807422826803422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3759c1f4809ff1%3A0x39082bdc1dda909!2sPerumnas!5e0!3m2!1sid!2sid!4v1747841218013!5m2!1sid!2sid'
  },
  {
    title: 'Resepsi',
    date: 'Sabtu, 26 Juli 2025',
    time: 'Pukul 09:00 WIB - Selesai',
    location: 'Prumnas Muara Siban Desa Indikat Ilir Kec. Gumay Talang Kab. Lahat, Sumatera Selatan',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15924.049153595799!2d103.49610328674314!3d-3.807422826803422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3759c1f4809ff1%3A0x39082bdc1dda909!2sPerumnas!5e0!3m2!1sid!2sid!4v1747841218013!5m2!1sid!2sid'
  }
])
</script>
