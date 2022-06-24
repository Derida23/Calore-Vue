import { defineStore } from 'pinia'
import * as api from '@/api'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    datas: null,
    message: null,

    loading: false,
    code: 0,
  }),
  getters: {},
  actions: {
    async login(params) {
      this.$nuxt.$overlay(true)
      this.loading = true

      const res = await api.apiLogin(params)
      this.datas = res.data
      this.message = res.message

      this.code = res.code
      this.loading = res.loading

      this.$nuxt.$overlay(false)
    },
  },
})
