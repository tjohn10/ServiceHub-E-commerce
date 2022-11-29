<template>
  <div>
    <Wishful />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'WishList',
  filters: {
    formatPrice (price) {
      return `N${price}`
    },
    formatQuantity (num) {
      return num === 1 ? `${num} unit` : `${num} units`
    }
  },
  computed: {
    ...mapGetters(['getCart', 'getCartTotal'])
  },
  methods: {
    async handleSubmit (e) {
    },
    formatCartTotal (num) {
      if (num > 0) {
        return num.toFixed(2)
      } else {
        return num
      }
    },
    ...mapActions(['deleteCartItem'])
  }
}
</script>

<style scoped>

</style>
