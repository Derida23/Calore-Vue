<template>
  <div>ORDER</div>
</template>

<script>
import { useMasterStore } from '@/store/master'

export default {
  name: 'OrderPage',
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
