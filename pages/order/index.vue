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
            :category="storeMaster.categories"
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
                  <v-col md="6" :key="index">
                    <CardOrder :item="item" @dialog="handleDialog" />
                  </v-col>
                </template>
              </v-row>
            </div>
          </div>
        </div>
      </v-col>
      <v-col md="3"
        ><div>
          <pre>{{ storeMaster.uoms }}</pre>
        </div></v-col
      >
    </v-row>

    <!-- Modal Dialog Item -->
    <v-dialog v-model="dialog_detail" persistent scrollable max-width="650px">
      <v-card elevation="0">
        <div v-if="dialog_item" class="pa-5 dialog-container">
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
              <v-row class="mt-2">
                <div>
                  <h3>Mood</h3>
                  <div class="order-mood">
                    <div class="img-mood">
                      <img src="~/static/order/Hot.png" alt="variety icon" />
                    </div>
                    <div class="img-mood">
                      <img src="~/static/order/Cold.png" alt="variety icon" />
                    </div>
                  </div>
                </div>

                <div class="ml-5">
                  <h3>Size</h3>
                  <div class="order-mood">
                    <div class="img-mood">S</div>
                    <div class="img-mood">M</div>
                    <div class="img-mood">L</div>
                  </div>
                </div>
              </v-row>
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
    const storeMaster = useMasterStore()
    const storeProduct = useProductStore()

    return { storeMaster, storeProduct }
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
      dialog_detail: false,
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
    this.uom()
    this.variety()
    this.product()
  },
  methods: {
    async category() {
      const res = await this.storeMaster.getCategory({ status: 1 })

      return res
    },
    async uom() {
      const res = await this.storeMaster.getUom({ status: 1 })

      return res
    },
    async variety() {
      const res = await this.storeMaster.getVariety({ status: 1 })

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

.dialog-container {
  border-radius: 1rem !important;
  background: #f9f8fb;
  margin: 1rem;
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
.order-mood {
  display: flex;
  margin-top: 8px;

  .img-mood {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: #f6efef;
    margin-right: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 25px;
      height: 25px;
    }
  }

  .img-mood:hover {
    border-width: 2px;
    border-style: solid;

    border-color: #a6887e;
  }
}
</style>
