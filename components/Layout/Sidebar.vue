<template>
  <v-navigation-drawer class="sidebar-left" app>
    <v-layout class="brand-container" align-center justify-center>
      <img
        style="cursor: pointer"
        src="/calore-header.jpg"
        alt="calore logo"
        @click="$router.push('order')"
      />
    </v-layout>

    <v-list class="list" dense>
      <div v-for="(menu, index) in store.datas" :key="index">
        <v-list-item :class="menu.name === 'setting' && 'relative-setting'">
          <div
            class="menu-container"
            :class="{ 'menu-active': menu.active }"
            @click="handleRoute(menu.url, index)"
          >
            <div class="flex">
              <img
                class="menu-icon"
                :src="menu.img + `${menu.active ? '-active.png' : '.png'}`"
                :alt="menu.name + ' icon'"
              />
            </div>
            <p class="menu-name">{{ menu.name }}</p>
          </div>
        </v-list-item>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { useMenuStore } from '@/store/menu'
export default {
  name: 'SidebarLayout',
  setup() {
    const store = useMenuStore()

    return { store }
  },
  mounted() {
    this.loadMenu()
  },
  methods: {
    loadMenu() {
      this.store.menu()
    },
    handleRoute(url, index) {
      this.store.setActive(index)
      this.$router.push(url)
    },
  },
}
</script>
