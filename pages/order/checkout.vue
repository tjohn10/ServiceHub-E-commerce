<template>
  <div>
    <main class="main">
      <div class="page-header text-center" style="background-image: url('/static/assets/images/page-header-bg.jpg')">
        <div class="container">
          <h1 class="page-title">
            Checkout<span>Shop</span>
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
              Checkout
            </li>
          </ol>
        </div><!-- End .container -->
      </nav><!-- End .breadcrumb-nav -->
      <div v-if="success" class="uk-alert-success">
        <a class="uk-alert-close" />
        <p>{{ success.message }}</p>
      </div>
      <div v-if="err" class="uk-alert-danger">
        <a class="uk-alert-close" />
        <p>{{ err.message }}</p>
      </div>

      <div class="page-content">
        <div class="checkout">
          <div class="container">
            <div class="checkout-discount">
              <form action="#">
                <input id="checkout-discount-input" type="text" class="form-control" required>
                <label for="checkout-discount-input" class="text-truncate">Have a coupon? <span>Click here to enter your code</span></label>
              </form>
            </div><!-- End .checkout-discount -->
            <form action="#">
              <div class="row">
                <div class="col-lg-9">
                  <h2 class="checkout-title">
                    Billing Details
                  </h2><!-- End .checkout-title -->
                  <div class="row">
                    <div class="col-sm-6">
                      <label>First Name *</label>
                      <input v-model="firstname" type="text" class="form-control" required>
                    </div><!-- End .col-sm-6 -->

                    <div class="col-sm-6">
                      <label>Last Name *</label>
                      <input v-model="lastname" type="text" class="form-control" required>
                    </div><!-- End .col-sm-6 -->
                  </div><!-- End .row -->

                  <label>Company Name (Optional)</label>
                  <input v-model="company" type="text" class="form-control">

                  <label>Country *</label>
                  <input v-model="country" type="text" class="form-control" required>

                  <label>Street address *</label>
                  <input v-model="address" type="text" class="form-control" placeholder="House number and Street name" required>

                  <div class="row">
                    <div class="col-sm-6">
                      <label>Town / City *</label>
                      <input v-model="town" type="text" class="form-control" required>
                    </div><!-- End .col-sm-6 -->

                    <div class="col-sm-6">
                      <label>State</label>
                      <input v-model="state" type="text" class="form-control" required>
                    </div><!-- End .col-sm-6 -->
                  </div><!-- End .row -->

                  <div class="row">
                    <div class="col-sm-6">
                      <label>Phone *</label>
                      <input v-model="phone" type="tel" class="form-control" required>
                    </div><!-- End .col-sm-6 -->
                  </div><!-- End .row -->

                  <label>Email address *</label>
                  <input v-model="email" type="email" class="form-control" required>

                  <label>Order notes (optional)</label>
                  <textarea v-model="notes" class="form-control" cols="30" rows="4" placeholder="Notes about your order, e.g. special notes for delivery" />
                </div><!-- End .col-lg-9 -->
                <aside class="col-lg-3">
                  <div>
                    <h3 class="summary-title">
                      Your Order
                    </h3><!-- End .summary-title -->

                    <table class="table table-summary">
                      <tbody>
                        <tr>
                          <td><Cart :checkout="false" /></td>
                        </tr>
                        <!--                        <tr>-->
                        <!--                          <td>Shipping:</td>-->
                        <!--                          <td>Free shipping</td>-->
                        <!--                        </tr>-->
                        <!--                        <tr class="summary-total">-->
                        <!--                          <td>Total:</td>-->
                        <!--                          <td></td>-->
                        <!--                        </tr>&lt;!&ndash; End .summary-total &ndash;&gt;-->
                      </tbody>
                    </table><!-- End .table table-summary -->

                    <button type="submit" class="btn btn-outline-primary-2 btn-order btn-block" @click="initializePaystack">
                      <span class="btn-text">Place Order</span>
                      <span class="btn-hover-text">Proceed to Payment</span>
                    </button>
                  </div><!-- End .summary -->
                </aside><!-- End .col-lg-3 -->
              </div><!-- End .row -->
            </form>
          </div><!-- End .container -->
        </div><!-- End .checkout -->
      </div><!-- End .page-content -->
    </main><!-- End .main -->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'CheckoutComp',
  data () {
    return {
      firstname: '',
      lastname: '',
      phone: '',
      state: '',
      town: '',
      country: '',
      company: '',
      notes: '',
      success: null,
      err: null,
      address: '',
      email: '',
      stripeKey: process.env.stripePublishable,
      paystackKey: process.env.PAYSTACK_KEY
    }
  },
  computed: {
    ...mapGetters({
      username: 'auth/username',
      token: 'auth/token',
      selectedProducts: 'cart/items',
      price: 'cart/price'
    })
  },
  methods: {
    ...mapMutations({
      emptyCart: 'cart/emptyList',
      addToCart: 'cart/add',
      removeFromCart: 'cart/remove'
    }),
    initializePaystack () {
      const address = this.address
      const username = this.username
      this.$paystack({
        key: 'pk_live_ce185b47a92da127373a07232376a4fff75f0b81', // Replace with your public key.
        email: this.email,
        amount: this.$store.getters['cart/price'],
        ref: '',
        currency: 'ngn',
        callback: async () => {
          try {
            await this.$http.$post('orders', {
              data: {
                address,
                amount: this.$store.getters['cart/price'],
                user: username,
                products: this.$store.getters['cart/items']
              }
            })
            // this.emptyCart()
            this.success = {
              message: 'Payment completed successfully'
            }
          } catch (err) {
            this.err = err.response?.data?.error
          }
        },
        onClose: () => {
          this.$router.push('index')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
