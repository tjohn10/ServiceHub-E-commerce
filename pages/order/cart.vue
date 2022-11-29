<template>
  <main class="main">
    <div class="page-header text-center" style="background-image: url('/static/assets/images/page-header-bg.jpg')">
      <div class="container">
        <h1 class="page-title">
          Shopping Cart<span>Shop</span>
        </h1>
      </div><!-- End .container -->
    </div><!-- End .page-header -->
    <nav aria-label="breadcrumb" class="breadcrumb-nav">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <nuxt-link to="/">
              Home
            </nuxt-link>
          </li>
          <li class="breadcrumb-item">
            <nuxt-link to="/shop">
              Shop
            </nuxt-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Shopping Cart
          </li>
        </ol>
      </div><!-- End .container -->
    </nav><!-- End .breadcrumb-nav -->

    <div class="page-content">
      <div class="cart">
        <div class="container">
          <div class="row">
            <div class="col-lg-9">
              <!--              <table class="table table-cart table-mobile">-->
              <!--                <thead>-->
              <!--                  <tr>-->
              <!--                    <th>Product</th>-->
              <!--                    <th>Price</th>-->
              <!--                    <th>Quantity</th>-->
              <!--                    <th>Total</th>-->
              <!--                    <th />-->
              <!--                  </tr>-->
              <!--                </thead>-->

              <!--                <tbody>-->
              <!--                  <tr v-for="item in getCart" :key="item.id">-->
              <!--                    <td class="product-col">-->
              <!--                      <div class="product">-->
              <!--                        <figure class="product-media">-->
              <!--                          <a href="#">-->
              <!--                            <img :src="item.attributes.image.data.attributes.url" alt="Product image">-->
              <!--                          </a>-->
              <!--                        </figure>-->

              <!--                        <h3 class="product-title">-->
              <!--                          <a href="#">{{ item.name }}</a>-->
              <!--                        </h3>&lt;!&ndash; End .product-title &ndash;&gt;-->
              <!--                      </div>&lt;!&ndash; End .product &ndash;&gt;-->
              <!--                    </td>-->
              <!--                    <td class="price-col">-->
              <!--                      {{ item.price }}-->
              <!--                    </td>-->
              <!--                    <td class="quantity-col">-->
              <!--                      &lt;!&ndash;                      <div class="cart-product-quantity">&ndash;&gt;-->
              <!--                      &lt;!&ndash;                        <input&ndash;&gt;-->
              <!--                      &lt;!&ndash;                          type="number"&ndash;&gt;-->
              <!--                      &lt;!&ndash;                          class="form-control"&ndash;&gt;-->
              <!--                      &lt;!&ndash;                          value="1"&ndash;&gt;-->
              <!--                      &lt;!&ndash;                          min="1"&ndash;&gt;-->
              <!--                      &lt;!&ndash;                          max="10"&ndash;&gt;-->
              <!--                      &lt;!&ndash;                          step="1"&ndash;&gt;-->
              <!--                      &lt;!&ndash;                          data-decimals="0"&ndash;&gt;-->
              <!--                      &lt;!&ndash;                          required&ndash;&gt;-->
              <!--                      &lt;!&ndash;                        >&ndash;&gt;-->
              <!--                      &lt;!&ndash;                      </div>&lt;!&ndash; End .cart-product-quantity &ndash;&gt;&ndash;&gt;-->
              <!--                      {{ item.quantity }}-->
              <!--                    </td>-->
              <!--                    <td class="total-col">-->
              <!--                      {{ formatCartTotal(getCartTotal) | formatPrice }}-->
              <!--                    </td>-->
              <!--                    <td class="remove-col">-->
              <!--                      <button class="btn-remove">-->
              <!--                        <i class="icon-close" />-->
              <!--                      </button>-->
              <!--                    </td>-->
              <!--                  </tr>-->
              <!--                </tbody>-->
              <!--              </table>&lt;!&ndash; End .table table-wishlist &ndash;&gt;-->
              <div
                v-for="item in getCart"
                :key="item.id"
                class="w-4/5 sm:w-1/2 flex items-center space-x-3 mx-auto shadow-lg m-5 p-3"
              >
                <div>
                  <img class="h-24" :src="`${item.url}`" alt="">
                </div>
                <div>
                  <p>
                    {{ item.name }}
                  </p>
                  <p>
                    {{ item.quantity | formatQuantity }}
                  </p>
                  <button class="button--delete" @click="deleteCartItem(item.id)">
                    Delete
                  </button>
                </div>
              </div>
              <div class="w-4/5 sm:w-1/2 mb-2 mx-auto">
                <p>
                  <span>Total: </span> {{ formatCartTotal(getCartTotal) | formatPrice }}
                </p>
                <button
                  v-show="getCartTotal > 0"
                  class="button--green mx-auto"
                  @click="handleSubmit"
                >
                  checkout
                </button>
              </div>

              <div class="cart-bottom">
                <div class="cart-discount">
                  <form action="#">
                    <div class="input-group">
                      <input type="text" class="form-control" required placeholder="coupon code">
                      <div class="input-group-append">
                        <button class="btn btn-outline-primary-2" type="submit">
                          <i class="icon-long-arrow-right" />
                        </button>
                      </div><!-- .End .input-group-append -->
                    </div><!-- End .input-group -->
                  </form>
                </div><!-- End .cart-discount -->

                <a href="#" class="btn btn-outline-dark-2"><span>UPDATE CART</span><i class="icon-refresh" /></a>
              </div><!-- End .cart-bottom -->
            </div><!-- End .col-lg-9 -->
            <aside class="col-lg-3">
              <div class="summary summary-cart">
                <h3 class="summary-title">
                  Cart Total
                </h3><!-- End .summary-title -->

                <table class="table table-summary">
                  <tbody>
                    <tr class="summary-subtotal">
                      <td>Subtotal:</td>
                      <td> {{ formatCartTotal(getCartTotal) | formatPrice }}</td>
                    </tr><!-- End .summary-subtotal -->
                    <tr class="summary-shipping">
                      <td>Shipping:</td>
                      <td>&nbsp;</td>
                    </tr>

                    <tr class="summary-shipping-row">
                      <td>
                        <div class="custom-control custom-radio">
                          <input id="free-shipping" type="radio" name="shipping" class="custom-control-input">
                          <label class="custom-control-label" for="free-shipping">Free Shipping</label>
                        </div><!-- End .custom-control -->
                      </td>
                      <td>$0.00</td>
                    </tr><!-- End .summary-shipping-row -->

                    <tr class="summary-shipping-row">
                      <td>
                        <div class="custom-control custom-radio">
                          <input id="standard-shipping" type="radio" name="shipping" class="custom-control-input">
                          <label class="custom-control-label" for="standard-shipping">Standard:</label>
                        </div><!-- End .custom-control -->
                      </td>
                      <td>$10.00</td>
                    </tr><!-- End .summary-shipping-row -->

                    <tr class="summary-shipping-row">
                      <td>
                        <div class="custom-control custom-radio">
                          <input id="express-shipping" type="radio" name="shipping" class="custom-control-input">
                          <label class="custom-control-label" for="express-shipping">Express:</label>
                        </div><!-- End .custom-control -->
                      </td>
                      <td>$20.00</td>
                    </tr><!-- End .summary-shipping-row -->

                    <tr class="summary-shipping-estimate">
                      <td>Estimate for Your Country<br> <a href="dashboard.html">Change address</a></td>
                      <td>&nbsp;</td>
                    </tr><!-- End .summary-shipping-estimate -->

                    <tr class="summary-total">
                      <td>Total:</td>
                      <td>$160.00</td>
                    </tr><!-- End .summary-total -->
                  </tbody>
                </table><!-- End .table table-summary -->

                <nuxt-link to="/order/checkout" class="btn btn-outline-primary-2 btn-order btn-block">
                  PROCEED TO CHECKOUT
                </nuxt-link>
              </div><!-- End .summary -->

              <nuxt-link to="/shop" class="btn btn-outline-dark-2 btn-block mb-3">
                <span>CONTINUE SHOPPING</span><i class="icon-refresh" />
              </nuxt-link>
            </aside><!-- End .col-lg-3 -->
          </div><!-- End .row -->
        </div><!-- End .container -->
      </div><!-- End .cart -->
    </div><!-- End .page-content -->
  </main><!-- End .main -->
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CartPage',
  filters: {
    formatPrice (price) {
      return `&#8358; ${price}`
    },
    formatQuantity (num) {
      return num === 1 ? `${num} unit` : `${num} units`
    }
  },
  computed: {
    ...mapGetters({
      getCart: 'getCart',
  getCartTotal: 'getCartTotal'
    })
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
