<template>
  <v-row>
    <v-col md="9" class="pr-5">
      <div>
        <h1>Choose Category</h1>

        <Category
          :category="storeCategory.categories"
          :data="data_category"
          @choose="handleCategory"
        />

        <div>
          <div class="title-order">
            <h2>{{ data_category.name }} Menu</h2>
            <p v-if="data_category.id">
              {{ storeProduct.datas.length }} {{ data_category.name }}s Result
            </p>
            <p v-else>{{ storeProduct.datas.length }} Menu Result</p>
          </div>
          <pre>{{ storeProduct.datas }}</pre>
        </div>
      </div>
    </v-col>
    <v-col md="3"><div>INI TEMPAT CHECKOUT</div></v-col>
  </v-row>
</template>

<script>
import { useMasterStore } from '@/store/master'
import { useProductStore } from '@/store/product'
import Category from '@/components/Category'

export default {
  name: 'OrderPage',
  components: {
    Category,
  },
  setup() {
    const storeCategory = useMasterStore()
    const storeProduct = useProductStore()

    return { storeCategory, storeProduct }
  },
  data() {
    return {
      data_category: { name: '', id: 0 },
      filter: {
        page: '',
        limit: '',
        search: '',
        status: 1,
        category_id: '',
      },
    }
  },
  mounted() {
    this.category()
    this.product()
  },
  methods: {
    async category() {
      const res = await this.storeCategory.getCategory({ status: 1 })

      return res
    },
    async product() {
      const res = await this.storeProduct.getProduct(this.filter)

      return res
    },

    handleCategory(params) {
      this.handleFilter({
        name: 'category_id',
        value: Number(params.id) ? Number(params.id) : '',
      })
      this.data_category = { name: params.name, id: Number(params.id) }
    },
    handleFilter(params) {
      const data = { ...this.filter, [params.name]: params.value }
      this.filter = data

      this.product()
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
