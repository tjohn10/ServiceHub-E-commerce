<template>
  <div>
    <main class="main">
      <div class="page-header text-center" style="background-image: url('/assets/images/page-header-bg.jpg')">
        <div class="container">
          <h1 class="page-title">
            Wishlist<span>Shop</span>
          </h1>
        </div><!-- End .container -->
      </div><!-- End .page-header -->
      <nav aria-label="breadcrumb" class="breadcrumb-nav">
        <div class="container">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Shop</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Wishlist
            </li>
          </ol>
        </div><!-- End .container -->
      </nav><!-- End .breadcrumb-nav -->

      <div class="page-content">
        <div class="container">
          <table class="table table-wishlist table-mobile">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Stock Status</th>
                <th />
                <th />
              </tr>
            </thead>

            <tbody>
              <tr v-for="product in selectedProducts" :key="product.id">
                <td class="product-col">
                  <div class="product">
                    <figure class="product-media">
                      <a href="#">
                        <img :src="product.attributes.image.data.attributes.url" alt="Product image">
                      </a>
                    </figure>

                    <h3 class="product-title">
                      <a href="#">{{ product.attributes.name }}</a>
                    </h3><!-- End .product-title -->
                  </div><!-- End .product -->
                </td>
                <td class="price-col">
                  &#8358; {{ product.attributes.price }}
                </td>
                <td class="stock-col">
                  <span class="in-stock">In stock</span>
                </td>
                <td class="action-col">
                  <div class="dropdown">
                    <button class="btn btn-block btn-outline-primary-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="icon-list-alt" />Select Options
                    </button>

                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">First option</a>
                      <a class="dropdown-item" href="#">Another option</a>
                      <a class="dropdown-item" href="#">The best option</a>
                    </div>
                  </div>
                </td>
                <td class="remove-col">
                  <div>
                    <button class="btn-remove" @click="removeFromWishlist(product)">
                      <i class="icon-close" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table><!-- End .table table-wishlist -->
        </div><!-- End .container -->
      </div><!-- End .page-content -->
    </main><!-- End .main -->
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'WishfulComp',
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
      selectedProducts: 'wishlist/items',
      price: 'wishlist/price'
    })
  },
  methods: {
    ...mapMutations({
      addToWishlist: 'wishlist/add',
      removeFromWishlist: 'wishlist/remove'
    })
  }
}
</script>

<style scoped>

</style>
