import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    show_alert: false,
    title_alert: '',
    message_alert: '',

    loading: false,
    status: '',
    code: 0,
  }),
  getters: {},
  actions: {
    login() {},
  },
})
