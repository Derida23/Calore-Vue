<template>
  <div class="item-container">
    <v-row>
      <v-col md="4">
        <div class="image-wrapper">
          <img :src="item.image" :alt="item.name" />
        </div>
      </v-col>
      <v-col md="8" class="order-description">
        <h3 class="order-title">{{ item.name }}</h3>
        <p class="mt-2">{{ item.description | truncate() }}.</p>
        <h3>{{ item.unit_price | money() }}</h3>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'CardOrder',
  props: {
    item: { type: Object, default: () => {} },
  },
}
</script>

<style lang="scss" scoped>
.item-container {
  cursor: pointer;
  background: #fffefe;
  border-radius: 1rem;
  width: 100%;
  height: auto;

  padding: 1rem;
}
.item-container:hover {
  box-shadow: 0 16px 24px hsl(0deg 0% 75% / 16%);
}
.image-wrapper {
  width: 110px;
  height: 130px;

  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    background: #252525;
    width: 110px;
    height: 130px;
    object-fit: cover !important;
    border-radius: 0.5rem;
  }
}
.order-description {
  p {
    color: #a0a0a1;
    font-size: 14px;
  }

  .order-title {
    color: #12151e;
  }
}
</style>
