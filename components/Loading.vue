<template>
  <div v-if="loading" class="loading-overlay">
    <div class="loading-container">
      <img class="loading-item" src="img/logo-cimb.png" alt="Icon Loading" />
    </div>
  </div>
</template>

<script>
import { useMainStore } from '~/store'

export default {
  name: 'LoadingPage',
  setup() {
    const store = useMainStore()

    return { store }
  },
  data: () => ({}),
  computed: {
    loading: {
      get() {
        return this.store.overlay
      },
      set(val) {
        return this.store.onOverlay(val)
      },
    },
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
    fail() {
      this.loading = false
    },
  },
}
</script>
