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

      this.message = res.message
      this.code = res.code
      this.loading = res.loading

      if (res.code === 200) {
        this.datas = res.data.user

        this.$nuxt.$cookiz.set('calore-token', res.data.token, {
          path: '/',
          maxAge: 60 * 60 * 24 * 1,
        })
      }

      this.$nuxt.$overlay(false)
    },
  },
})
