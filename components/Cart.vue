<template>
  <div>
    <div v-for="product in selectedProducts" :key="product.id" class="product">
      <div class="product-cart-details">
        <h4 class="product-title">
          <nuxt-link to="product.html">
            {{ product.attributes.name }}
          </nuxt-link>
        </h4>

        <span class="cart-product-info">
          <span class="cart-product-qty">{{ product.quantity }}</span>
          x &#8358; {{ product.attributes.price }}
        </span>
      </div><!-- End .product-cart-details -->

      <figure class="product-image-container">
        <nuxt-link to="product.html" class="product-image">
          <img :src="product.attributes.image.data.attributes.url" alt="product">
        </nuxt-link>
      </figure>
      <div v-if="checkout">
        <a href="#" class="btn-remove" title="Remove Product" @click="removeFromCart(product)">
          <i class="icon-close" />
        </a>
      </div>
    </div><!-- End .product -->
    <div class="dropdown-cart-total">
      <span>Total</span>

      <span class="cart-total-price">&#8358; {{price}}</span>
    </div><!-- End .dropdown-cart-total -->

    <div v-if="checkout" class="dropdown-cart-action">
      <nuxt-link to="/order/cart" class="btn btn-primary">
        View Cart
      </nuxt-link>
      <nuxt-link to="/order/checkout" class="btn btn-outline-primary-2">
        <span>Checkout</span><i class="icon-long-arrow-right" />
      </nuxt-link>
    </div><!-- End .dropdown-cart-total -->
<!--    <div v-else class="uk-text-meta">-->
<!--      Empty-->
<!--    </div>-->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'CartComp',
  props: {
    checkout: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      api_url: process.env.BASE_URI || 'https://servicehub-strapi.herokuapp.com'
    }
  },
  computed: {
    ...mapGetters({
      selectedProducts: 'cart/items',
      price: 'cart/price'
    })
  },
  methods: {
    ...mapMutations({
      addToCart: 'cart/add',
      removeFromCart: 'cart/remove'
    })
  }
}
</script>

<style scoped>

</style>
