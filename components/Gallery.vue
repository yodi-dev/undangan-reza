<template>
  <section id="gallery" class="py-20 bg-rose-50">
    <div class="max-w-5xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-rose-600 mb-10">Galeri Kami</h2>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div
          v-for="(img, index) in images"
          :key="index"
          class="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          @click="showLightbox(index)"
        >
          <img
            :src="img.src"
            :alt="img.alt"
            class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Lightbox viewer -->
      <vue-easy-lightbox
        :visible="lightbox.visible"
        :imgs="images.map(i => i.src)"
        :index="lightbox.index"
        @hide="lightbox.visible = false"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

// Dummy gallery images (pakai URL umum dulu)
const images = ref([
  { src: '/images/1.jpeg', alt: 'Foto 1' },
  { src: '/images/2.jpeg', alt: 'Foto 2' },
  { src: '/images/3.jpeg', alt: 'Foto 3' },
  { src: '/images/4.jpeg', alt: 'Foto 4' },
  { src: '/images/5.jpeg', alt: 'Foto 5' },
  { src: '/images/6.jpeg', alt: 'Foto 6' },
  { src: '/images/7.jpeg', alt: 'Foto 7' },
  { src: '/images/8.jpeg', alt: 'Foto 8' }
])

const lightbox = ref({
  visible: false,
  index: 0
})

function showLightbox(index) {
  lightbox.value.index = index
  lightbox.value.visible = true
}
</script>

<script>
export default {
  components: {
    VueEasyLightbox
  }
}
</script>
