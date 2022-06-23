import { defineStore } from 'pinia'
import * as api from '@/api'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    data: null,
    show_alert: false,
    title_alert: '',
    message_alert: '',

    loading: false,
    code: 0,
  }),
  getters: {},
  actions: {
    async login(params) {
      this.$nuxt.$overlay(true)

      const res = await api.apiLogin(params)

      this.title_alert = res.title_alert
      this.message_alert = res.message_alert

      this.status = res.status
      this.code = res.code
      this.loading = res.loading
      this.$nuxt.$overlay(false)
    },
  },
})
