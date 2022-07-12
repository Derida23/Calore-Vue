<template>
  <div>
    <v-row class="order-container">
      <v-col md="9" class="pr-5">
        <div>
          <div class="title-page">
            <h1>Choose Category</h1>
            <div style="width: 40%">
              <v-text-field
                ref="search"
                v-model="filter.search"
                name="search"
                outlined
                dense
                type="search"
                placeholder="Enter to search menu..."
                append-icon="mdi-magnify"
                @keyup.enter="product()"
              />
            </div>
          </div>

          <Category
            :category="storeCategory.categories"
            :data="data_category"
            @choose="handleCategory"
          />

          <div>
            <div class="title-order">
              <h2>{{ data_category.name }} Menu</h2>
              <p v-if="data_category.id">
                {{ total_data }} {{ data_category.name }}s Result
              </p>
              <p v-else>{{ total_data }} Menu Result</p>
            </div>
            <div class="mt-4 card-container">
              <v-row>
                <template v-for="(item, index) in storeProduct.datas">
                  <v-col :key="index" md="6">
                    <CardOrder :item="item" @dialog="handleDialog" />
                  </v-col>
                </template>
              </v-row>
            </div>
          </div>
        </div>
      </v-col>
      <v-col md="3"><div>INI TEMPAT CHECKOUT</div></v-col>
    </v-row>

    <!-- Modal Dialog Item -->
    <v-dialog v-model="dialog_detail" persistent scrollable max-width="650px">
      <v-card elevation="0">
        <div v-if="dialog_item" class="ma-10">
          <v-row>
            <v-col md="6">
              <div class="d-flex">
                <div class="image-wrapper">
                  <img :src="dialog_item.image" :alt="dialog_item.name" />
                </div>

                <div class="ml-3">
                  <h3 class="order-title mt-2">{{ dialog_item.name }}</h3>
                  <div class="flex-around mt-3" style="width: 100px">
                    <v-btn icon>
                      <v-icon color="#714333">mdi-minus</v-icon>
                    </v-btn>
                    <b>1</b>
                    <v-btn icon>
                      <v-icon color="#714333">mdi-plus</v-icon>
                    </v-btn>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col md="6">
              <div class="mt-2">
                <h3>Mood</h3>
              </div>
            </v-col>
          </v-row>
        </div>
        <v-card-actions
          style="border-top: 1px solid #ebebeb; padding: 20px"
          class="d-flex align justify-end"
        >
          <v-btn
            dark
            depressed
            color="#BDBDBD"
            width="120px"
            height="48px"
            class="text-capitalize"
            style="border-radius: 8px"
            @click="handleDialog(null)"
          >
            Cancel
          </v-btn>
          <v-btn
            dark
            depressed
            color="#714333"
            width="150px"
            height="48px"
            class="text-capitalize"
            style="border-radius: 8px"
          >
            Cart
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { useMasterStore } from '@/store/master'
import { useProductStore } from '@/store/product'
import Category from '@/components/order/Category'
import CardOrder from '@/components/order/CardOrder'

export default {
  name: 'OrderPage',
  components: {
    Category,
    CardOrder,
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
      dialog_detail: true,
      dialog_item: null,
    }
  },
  computed: {
    total_data() {
      const data = this.storeProduct.datas ?? []
      return data.length
    },
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
    handleDialog(params) {
      this.dialog_detail = !!params
      this.dialog_item = params
    },
  },
}
</script>

<style lang="scss" scoped>
.order-container {
  height: 100vh;
  overflow: hidden;
}
.title-order {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title-page {
  display: flex;
  justify-content: space-between;
}
.card-container {
  padding-right: 12px;
  width: 100%;
  max-height: 57vh;

  overflow-y: scroll;
  overflow-x: hidden;
}
.card-container::-webkit-scrollbar {
  border-radius: 16px;
  width: 12px;
  padding-left: 10px;
  // background-color: #f5f8fa;
}

.card-container::-webkit-scrollbar-thumb {
  border-radius: 16px;
  background-color: #714333;
}

.card-container::-webkit-scrollbar-track {
  border-radius: 16px;
  background-color: transparent;
}

.card-container::-webkit-scrollbar-track-piece:end {
  border-radius: 16px;
  margin-bottom: 200px;
  background-color: #f3eef0;
}
.card-container::-webkit-scrollbar-track-piece:start {
  border-radius: 16px;
  background-color: #f3eef0;
}

.image-wrapper {
  width: 90px;
  height: 90px;

  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    background: #252525;
    width: 90px;
    height: 90px;
    object-fit: cover !important;
    border-radius: 0.5rem;
  }
}
</style>
