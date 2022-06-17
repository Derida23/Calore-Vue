import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    overlay: false,
  }),
  getters: {},
  actions: {
    onOverlay(show) {
      this.overlay = show
    },
  },
})
