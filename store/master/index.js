import { defineStore } from 'pinia'
import * as api from '@/api'

export const useMasterStore = defineStore('master', {
  state: () => ({
    categories: null,
    message: null,

    loading: false,
    code: 0,
  }),
  getters: {},
  actions: {
    async getCategory(params) {
      this.$nuxt.$overlay(true)

      this.loading = true

      const res = await api.apiCategory(params, 'get', this.$nuxt)

      this.message = res.message
      this.code = res.code
      this.loading = res.loading

      if (res.code === 200) {
        this.categories = res.data

        this.$nuxt.$overlay(false)
        return true
      }

      this.$nuxt.$overlay(false)
      return false
    },
  },
})
