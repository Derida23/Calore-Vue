<template>
  <div>
    <v-navigation-drawer class="navbar-header" app>
      <v-layout class="brand-container" align-center justify-center>
        Logo Header
      </v-layout>

      <v-list class="list" dense>
        <v-list-item-group color="red">
          <div class="product-type">Product Type</div>
          <div>
            <div class="list__title">
              <p class="list__title__text">Text</p>
            </div>

            <div>
              <v-list-item>
                <v-list-item-action> Icon </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Menu Name</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'SidebarLayout',
  computed: {},
  methods: {},
}
</script>
