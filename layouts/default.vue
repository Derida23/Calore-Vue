<template>
  <div>
    <client-only>
      <v-overlay
        slot="placeholder"
        :show="true"
        class="loading-ssr"
      ></v-overlay>
      <v-app>
        <Sidebar
          v-if="
            $route.path !== '/' &&
            $route.path !== '/404' &&
            $route.path !== '/401' &&
            $route.path !== '/500'
          "
        />

        <Nuxt
          v-if="
            $route.path === '/' ||
            $route.path === '/404' ||
            $route.path === '/401' ||
            $route.path === '/500'
          "
        />
        <v-main v-else class="dashboard">
          <v-container>
            <Nuxt />
          </v-container>
        </v-main>
      </v-app>
    </client-only>
  </div>
</template>

<script>
import Sidebar from '@/components/Layout/Sidebar'

export default {
  name: 'DefaultLayout',
  components: { Sidebar },
}
</script>
