<template>
  <section id="rsvp-blessing" class="py-20 bg-white">
    <div class="max-w-2xl mx-auto px-4 space-y-16">

      <!-- Form Kehadiran -->
      <div class="bg-rose-50 p-6 rounded-xl shadow-md">
        <h2 class="text-2xl md:text-3xl font-bold text-center text-rose-600 mb-6">
          Konfirmasi Kehadiran & Ucapan
        </h2>
        <form @submit.prevent="submitForm" class="space-y-5">
          <div>
            <label class="block text-sm font-medium text-gray-700">Nama</label>
            <input
              v-model="form.name"
              type="text"
              required
              placeholder="Nama Anda"
              class="mt-1 block w-full rounded-lg border-gray-300 focus:ring-rose-200 focus:border-rose-400 shadow-sm"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Hadir?</label>
            <select
              v-model="form.attending"
              required
              class="mt-1 block w-full rounded-lg border-gray-300 focus:ring-rose-200 focus:border-rose-400 shadow-sm"
            >
              <option disabled value="">Pilih status kehadiran</option>
              <option value="yes">Ya, saya akan hadir</option>
              <option value="no">Maaf, tidak bisa hadir</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Ucapan</label>
            <textarea
              v-model="form.message"
              rows="3"
              placeholder="Tulis doa atau ucapan terbaikmu..."
              required
              class="mt-1 block w-full rounded-lg border-gray-300 focus:ring-rose-200 focus:border-rose-400 shadow-sm"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full py-2 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 transition"
          >
            Kirim Ucapan
          </button>
        </form>
      </div>

      <!-- Daftar Ucapan -->
      <div class="space-y-6">
        <h3 class="text-2xl font-semibold text-center text-gray-800">Ucapan & Kehadiran</h3>
        <ul class="space-y-4">
          <li
            v-for="(entry, index) in entries"
            :key="index"
            class="bg-gray-50 p-4 rounded-lg shadow flex items-start space-x-4"
          >
            <div class="text-2xl">
              <span v-if="entry.attending === 'yes'" class="text-green-500">🎉</span>
              <span v-else class="text-gray-400">🙏</span>
            </div>
            <div>
              <p class="font-semibold text-gray-800">{{ entry.name }}</p>
              <p class="text-sm italic text-gray-600 mt-1">"{{ entry.message }}"</p>
            </div>
          </li>
        </ul>
      </div>

      <!-- Toast -->
      <transition name="fade">
        <div
          v-if="toast.visible"
          class="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-rose-500 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          {{ toast.message }}
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({ name: '', attending: '', message: '' })
const entries = ref([])

const toast = ref({ visible: false, message: '' })

function submitForm() {
  entries.value.unshift({ ...form.value })
  toast.value = { visible: true, message: 'Ucapan berhasil dikirim!' }
  form.value = { name: '', attending: '', message: '' }
  setTimeout(() => (toast.value.visible = false), 2000)
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
