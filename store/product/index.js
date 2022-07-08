import { defineStore } from 'pinia'
import * as api from '@/api'

export const useProductStore = defineStore('product', {
  state: () => ({
    datas: null,
    message: null,

    loading: false,
    code: 0,
  }),
  getters: {},
  actions: {
    async getProduct(params) {
      this.$nuxt.$overlay(true)

      this.loading = true

      const res = await api.apiProduct(params, 'get', this.$nuxt)

      this.message = res.message
      this.code = res.code
      this.loading = res.loading

      if (res.code === 200) {
        this.datas = res.data

        this.$nuxt.$overlay(false)
        return true
      }

      this.$nuxt.$overlay(false)
      return false
    },
  },
})
