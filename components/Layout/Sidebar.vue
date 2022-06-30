<template>
  <v-navigation-drawer class="sidebar-left" app>
    <v-layout class="brand-container" align-center justify-center>
      <img src="/calore-header.jpg" alt="calore logo" />
    </v-layout>

    <v-list class="list" dense>
      <v-list-item>
        <div class="menu-container">
          <div class="flex">
            <img
              class="menu-icon"
              src="/menu/dashboard.png"
              alt="dashboard icon"
            />
          </div>
          <p class="menu-name">Home</p>
        </div>
      </v-list-item>
      <v-list-item>
        <div class="menu-container">
          <div class="flex">
            <img class="menu-icon" src="/menu/order.png" alt="order icon" />
          </div>
          <p class="menu-name">Order</p>
        </div>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'SidebarLayout',
  computed: {},
  methods: {},
}
</script>
