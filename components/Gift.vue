<template>
  <section id="gift" class="py-20 bg-rose-50">
    <div class="max-w-2xl mx-auto px-4 text-center space-y-10">
      <div>
        <h2 class="text-3xl font-bold text-rose-600 mb-2">Wedding Gift</h2>
        <p class="text-gray-600">Doa restu Anda merupakan hadiah terindah. Namun, jika ingin mengirimkan tanda kasih,
          kami siapkan informasi berikut:</p>
      </div>

      <!-- Daftar Rekening -->
      <div class="space-y-4">
        <div v-for="(bank, idx) in banks" :key="idx"
          class="bg-white rounded-xl shadow-md p-4 flex items-center justify-between hover:shadow-lg transition">
          <div class="text-left">
            <p class="font-semibold text-gray-800">{{ bank.name }}</p>
            <p class="text-sm text-gray-600 tracking-wide">{{ bank.account }}</p>
            <p class="text-sm text-gray-600 italic">a.n. {{ bank.owner }}</p>
          </div>
          <button @click="copyToClipboard(bank.account)"
            class="px-3 py-1.5 bg-rose-500 text-white text-sm rounded-lg hover:bg-rose-600 transition">
            Salin
          </button>
        </div>
      </div>

      <!-- Toast Notif -->
      <transition name="fade">
        <div v-if="toast.visible"
          class="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-rose-500 text-white px-4 py-2 rounded-lg shadow-lg">
          {{ toast.message }}
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const banks = ref([
  { name: 'Bank BCA', account: '7455190011', owner: 'Desti Amalia' },
])

const toast = ref({
  visible: false,
  message: ''
})

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    toast.value.message = 'Nomor rekening disalin!'
    toast.value.visible = true
    setTimeout(() => (toast.value.visible = false), 2000)
  })
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
