<template>
  <v-app>
    <client-only>
      <v-overlay
        slot="placeholder"
        :show="true"
        class="loading-ssr"
      ></v-overlay>
      <Nuxt />
    </client-only>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
