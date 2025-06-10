<template>
  <section id="event-detail" class="font-body">
    <div class="max-w-4xl">
      <div class="bg-red-50 text-red-950 py-20">
        <h2 class="text-4xl font-bold font-heading text-center tracking-wide">
          Acara Pernikahan
        </h2>
        <div v-for="(event, index) in events" :key="index"
          class=" p-6 shadow-sm md:flex md:items-start md:space-x-6 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02]"
          data-aos="fade-up">
          <!-- Kiri: Info Acara -->
          <div class="md:w-1/2 space-y-3">
            <h3 class="text-xl font-semibold">{{ event.title }}</h3>
            <p class=" flex items-center gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                <path
                  d="M5.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V12ZM6 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H6ZM7.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75V12ZM8 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H8ZM9.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V10ZM10 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H10ZM9.25 14a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V14ZM12 9.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V10a.75.75 0 0 0-.75-.75H12ZM11.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75V12ZM12 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H12ZM13.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H14a.75.75 0 0 1-.75-.75V10ZM14 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H14Z" />
                <path fill-rule="evenodd"
                  d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z"
                  clip-rule="evenodd" />
              </svg>
              {{ event.date }}
            </p>
            <p class=" flex items-center gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z"
                  clip-rule="evenodd" />
              </svg>
              {{ event.time }}
            </p>
            <p class="flex items-start gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                <path fill-rule="evenodd"
                  d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                  clip-rule="evenodd" />
              </svg>
              <span>{{ event.location }}</span>
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
    time: 'Pukul 09:00 - Selesai',
    location: 'Prumnas Muara Siban Desa Indikat Ilir',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15924.049153595799!2d103.49610328674314!3d-3.807422826803422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3759c1f4809ff1%3A0x39082bdc1dda909!2sPerumnas!5e0!3m2!1sid!2sid!4v1747841218013!5m2!1sid!2sid'
  },
  {
    title: 'Resepsi',
    date: 'Sabtu, 26 Juli 2025',
    time: 'Pukul 09:00 WIB - Selesai',
    location: 'Prumnas Muara Siban Desa Indikat Ilir',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15924.049153595799!2d103.49610328674314!3d-3.807422826803422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3759c1f4809ff1%3A0x39082bdc1dda909!2sPerumnas!5e0!3m2!1sid!2sid!4v1747841218013!5m2!1sid!2sid'
  }
])
</script>
