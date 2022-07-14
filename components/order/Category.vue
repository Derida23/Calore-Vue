<template>
  <v-row class="mt-5 mb-5">
    <div class="card mx-2" @click="handleCategory({ name: '', id: 0 })">
      <div class="image">
        <img src="/category/all.png" alt="all logo" />
      </div>
      <p>All</p>
    </div>
    <div v-for="(item, index) in category" :key="index">
      <div
        class="card mx-2"
        :class="{ 'card-active': Number(item.id) === data.id }"
        @click="handleCategory(item)"
      >
        <div class="image">
          <img
            :src="`/category/${item.name.toLowerCase()}.png`"
            :alt="`${item.name} logo`"
          />
        </div>
        <p>{{ item.name }}</p>
      </div>
    </div>
  </v-row>
</template>

<script>
export default {
  name: 'CategoryComponent',
  props: {
    category: { type: Array, default: () => [] },
    data: { type: Object, default: () => {} },
  },
  methods: {
    handleCategory(params) {
      const data = { name: params.name, id: Number(params.id) }
      this.$emit('choose', data)
    },
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
  border-radius: 1.3rem;
  border-width: 2.3px;
  border-color: #f3eef0;

  .image {
    width: 100px;
    height: 78px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 4rem;
    }
  }

  p {
    text-align: center;
    margin: 0px !important;
    margin-top: -7px !important;
    padding: 0px !important;
  }
}

.card-active {
  background: #f5efef;
  border-color: #b0968e;

  p {
    font-weight: 700;
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
