import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    datas: null,
    message: null,

    loading: false,
    code: 0,
  }),
  getters: {},
  actions: {
    menu() {
      const dataMenu = [
        {
          id: 1,
          name: 'home',
          url: 'home',
          img: '/menu/home',
          active: false,
        },
        {
          id: 2,
          name: 'order',
          url: 'order',
          img: '/menu/order',
          active: false,
        },
        {
          id: 3,
          name: 'history',
          url: 'history',
          img: '/menu/history',
          active: false,
        },
        {
          id: 4,
          name: 'profile',
          url: 'profile',
          img: '/menu/profile',
          active: false,
        },
        {
          id: 5,
          name: 'setting',
          url: 'setting',
          img: '/menu/setting',
          active: false,
        },
      ]

      const vanillaMenu = dataMenu.reduce((result, menu) => {
        if (menu.name === this.$nuxt.route.name) menu.active = true
        result.push(menu)

        return result
      }, [])

      this.datas = vanillaMenu

      return true
    },
    setActive(params) {
      const dataMenu = JSON.parse(JSON.stringify(this.datas))

      const vanillaMenu = dataMenu.reduce((result, menu) => {
        menu.active = false
        result.push(menu)

        return result
      }, [])

      vanillaMenu[params].active = true
      this.datas = vanillaMenu

      return true
    },
  },
})
