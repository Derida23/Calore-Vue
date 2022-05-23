<template>
  <v-app
    ><client-only>
      <v-main>
        <v-container>
          <Nuxt />
        </v-container>
      </v-main>
    </client-only>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
