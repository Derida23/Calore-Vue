<template>
  <v-row class="mt-5 mb-5">
    <div class="card mx-2">
      <div class="image">
        <img src="/category/all.png" alt="all logo" />
      </div>
      <p>All</p>
    </div>

    <template v-for="(item, index) in category">
      <div :key="index" class="card mx-2">
        <div class="image">
          <img
            :src="`/category/${item.name.toLowerCase()}.png`"
            :alt="`${item.name} logo`"
          />
        </div>
        <p>{{ item.name }}</p>
      </div>
    </template>
  </v-row>
</template>

<script>
export default {
  name: 'CategoryComponent',
  props: {
    category: { type: Array, default: () => [] },
  },
}
</script>

<style lang="scss" scoped>
.card {
  width: 100px;
  height: 115px;
  background: white;
  cursor: pointer;

  border-style: solid;
  border-radius: 1rem;
  border-width: thin;
  border-color: #f3eef0;

  .image {
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 5rem;
    }
  }

  p {
    text-align: center;
    margin: 0px !important;
    margin-top: -7px !important;
    padding: 0px !important;
  }
}

.card:hover {
  background: #f5efef;
  border-color: #b0968e;

  p {
    font-weight: 700;
  }
}
</style>
