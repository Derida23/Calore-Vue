<template>
  <div>
    <h1>Choose Category</h1>

    <Category :category="store.categories" />
    <div>ORDER</div>
  </div>
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
  mounted() {
    this.category()
  },
  methods: {
    async category() {
      const res = await this.store.getCategory({ status: 1 })

      return res
    },
  },
}
</script>
