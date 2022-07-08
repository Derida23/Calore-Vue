<template>
  <v-row>
    <v-col md="9" class="pr-5">
      <div>
        <h1>Choose Category</h1>

        <Category
          :category="store.categories"
          :data="data_category"
          @choose="handleCategory"
        />

        <div>
          <div class="title-order">
            <h2>{{ data_category.name }} Menu</h2>
            <p v-if="data_category.id">12 {{ data_category.name }}s Result</p>
            <p v-else>12 Products Result</p>
          </div>
        </div>
      </div></v-col
    >
    <v-col md="3"><div>INI TEMPAT CHECKOUT</div></v-col>
  </v-row>
</template>

<script>
import { useMasterStore } from '@/store/master'
import Category from '@/components/Category'

export default {
  name: 'OrderPage',
  components: {
    Category,
  },
  setup() {
    const store = useMasterStore()

    return { store }
  },
  data() {
    return {
      data_category: { name: '', id: 0 },
    }
  },
  mounted() {
    this.category()
  },
  methods: {
    async category() {
      const res = await this.store.getCategory({ status: 1 })

      return res
    },
    handleCategory(params) {
      this.data_category = { name: params.name, id: Number(params.id) }
    },
  },
}
</script>

<style lang="scss" scoped>
.title-order {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
