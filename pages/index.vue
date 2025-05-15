<template>
  <div class="bg-[#fefbf7] text-[#2c2c2c] font-sans">
    <Landing v-if="!showInvitation" @open="showInvitation = true" />

    <template v-else>
      <Countdown />
      <AyatArRum />
      <BridgeGroum />
      <LoveStory />
      <Event />
      <Gallery />
      <Gift />
      <BlessingForm />
      <ThankYou />
    </template>
  </div>
</template>

<script setup>
import Landing from '~/components/Landing.vue'
import Countdown from '~/components/Countdown.vue'
import AyatArRum from '@/components/AyatArRum.vue'
import BridgeGroum from '~/components/BridgeGroum.vue'
import LoveStory from '@/components/LoveStory.vue'
import Event from '@/components/Event.vue'
import Gallery from '@/components/Gallery.vue'
import Gift from '@/components/Gift.vue'
import BlessingForm from '@/components/BlessingForm.vue'
import ThankYou from '~/components/ThankYou.vue'

import { ref } from 'vue'

const showInvitation = ref(false)

useSeoMeta({
  title: 'Reza & Desti | awan-dev',
  description: 'Undangan pernikahan resmi Reza & Desti. Temukan informasi acara, RSVP, lokasi, dan hitung mundur pernikahan kami.',
  ogTitle: 'Reza & Desti | Undangan Pernikahan',
  ogDescription: 'Undangan pernikahan resmi Reza & Desti.',
  ogImage: '/images/og-image.png',
  // ogUrl: 'https://domainmu.com',
  twitterCard: 'summary_large_image'
})

</script>

<style scoped>
body {
  font-family: 'Lato', sans-serif;
}
</style>
