<template>
  <header class="header header-intro-clearance header-4">
    <div class="header-top">
      <div class="container">
        <div class="header-left">
          <div class="social-icons social-icons-sm">
            <nuxt-link to="tel:08127821234" class="mr-3">
              <i class="icon-phone" />Call: 08127821234
            </nuxt-link>
            <a href="https://www.facebook.com/servicehubbng" class="social-icon" title="Facebook" target="_blank"><i class="icon-facebook-f" /></a>
            <a href="https://twitter.com/servicehubb_ng" class="social-icon" title="Twitter" target="_blank"><i class="icon-twitter" /></a>
            <a href="https://www.instagram.com/servicehubb.ng/" class="social-icon" title="Instagram" target="_blank"><i class="icon-instagram" /></a>
            <a href="https://wa.me/2348127821234?text=Welcome to ServiceHub" class="social-icon" title="Youtube" target="_blank"><i class="icon-whatsapp" /></a>
          </div><!-- End .social-icons -->
        </div><!-- End .header-left -->

        <div class="header-right">
          <ul class="top-menu">
            <li>
              <nuxt-link to="#">
                Links
              </nuxt-link>
              <ul>
                <li>
                  <div class="header-dropdown">
                    <nuxt-link to="#">
                      USD
                    </nuxt-link>
                    <div class="header-menu">
                      <ul>
                        <li>
                          <nuxt-link to="#">
                            Eur
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="#">
                            Usd
                          </nuxt-link>
                        </li>
                      </ul>
                    </div><!-- End .header-menu -->
                  </div>
                </li>
                <li>
                  <div class="header-dropdown">
                    <nuxt-link to="#">
                      English
                    </nuxt-link>
                    <div class="header-menu">
                      <ul>
                        <li>
                          <nuxt-link to="#">
                            English
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="#">
                            French
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="#">
                            Spanish
                          </nuxt-link>
                        </li>
                      </ul>
                    </div><!-- End .header-menu -->
                  </div>
                </li>
                <li>
                  <nuxt-link to="/login" data-toggle="modal">
                    Sign in / Sign up
                  </nuxt-link>
                </li>
              </ul>
            </li>
          </ul><!-- End .top-menu -->
        </div><!-- End .header-right -->
      </div><!-- End .container -->
    </div><!-- End .header-top -->

    <div class="header-middle">
      <div class="container">
        <div class="header-left">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <nuxt-link to="/" class="logo">
            <img src="/1%20(1).jpg" alt="Molla Logo" width="100" height="100">
          </nuxt-link>
        </div><!-- End .header-left -->

        <div class="header-center">
          <div class="header-search header-search-extended header-search-visible d-none d-lg-block">
            <nuxt-link to="#" class="search-toggle" role="button">
              <i class="icon-search" />
            </nuxt-link>
            <form action="#" method="get">
              <div class="header-search-wrapper search-wrapper-wide">
                <label for="q" class="sr-only">Search</label>
                <button class="btn btn-primary" type="submit">
                  <i class="icon-search" />
                </button>
                <input
                  id="q"
                  type="search"
                  class="form-control"
                  name="q"
                  :value="value"
                  placeholder="Search product ..."
                  required
                  @input="updateValue($event.target.value)"
                >
              </div><!-- End .header-search-wrapper -->
            </form>
          </div><!-- End .header-search -->
        </div>

        <div class="header-right">
          <div class="wishlist">
            <nuxt-link to="/order/wishlist" title="Wishlist">
              <div class="icon">
                <i class="icon-heart-o" />
                <span class="wishlist-count badge">{{ noOfWishItems }}</span>
              </div>
              <p>Wishlist</p>
            </nuxt-link>
          </div><!-- End .compare-dropdown -->

          <div class="dropdown cart-dropdown">
            <nuxt-link
              to="#"
              class="dropdown-toggle"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              data-display="static"
            >
              <div class="icon">
                <i class="icon-shopping-cart" />
                <span class="cart-count">{{ numberOfItems }}</span>
              </div>
              <p>Cart</p>
            </nuxt-link>

            <div class="dropdown-menu dropdown-menu-right">
              <div class="dropdown-cart-products">
                <Cart />
              </div><!-- End .dropdown-menu -->
            </div><!-- End .cart-dropdown -->
          </div><!-- End .header-right -->
        </div><!-- End .container -->
      </div><!-- End .header-middle -->

      <div id="navbarNavDropdown" class="header-bottom sticky-header">
        <div class="container">
          <div class="header-left">
            <div class="dropdown category-dropdown">
              <nuxt-link
                to="#"
                class="dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
                title="Browse Categories"
              >
                Browse Categories <i class="icon-angle-down" />
              </nuxt-link>

              <div class="dropdown-menu">
                <nav class="side-nav">
                  <ul class="menu-vertical sf-arrows">
                    <li class="item-lead">
                      <nuxt-link to="#">
                        Daily offers
                      </nuxt-link>
                    </li>
                    <li class="item-lead">
                      <nuxt-link to="#">
                        Gift Ideas
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/shop/iphone">
                        iPhones
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/shop/imacs">
                        iMacs
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/shop/macbook">
                        Macbooks
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/shop/playstation">
                        PlayStation
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/shop/samsung">
                        Samsung
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/shop/speakers">
                        Speakers
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/shop/accessories">
                        Accessories
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/shop/ipads">
                        iPads
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/shop/hp-laptops">
                        Laptops
                      </nuxt-link>
                    </li>
                  </ul><!-- End .menu-vertical -->
                </nav><!-- End .side-nav -->
              </div><!-- End .dropdown-menu -->
            </div><!-- End .category-dropdown -->
          </div><!-- End .header-left -->

          <div class="header-center">
            <nav class="main-nav">
              <ul class="menu sf-arrows justify-content-between">
                <li class="megamenu-container active">
                  <nuxt-link to="/" class="">
                    Home
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/shop">
                    Shop
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/shop">
                    Deals
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/installments">
                    Installments
                  </nuxt-link>
                </li>
                <li>
                  <ul>
                    <li>
                      <nuxt-link to="about.html" class="sf-with-ul">
                        About
                      </nuxt-link>

                      <ul>
                        <li>
                          <nuxt-link to="about.html">
                            About 01
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="about-2.html">
                            About 02
                          </nuxt-link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <nuxt-link to="contact.html" class="sf-with-ul">
                        Contact
                      </nuxt-link>

                      <ul>
                        <li>
                          <nuxt-link to="contact.html">
                            Contact 01
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="contact-2.html">
                            Contact 02
                          </nuxt-link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <nuxt-link to="login.html">
                        Login
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="faq.html">
                        FAQs
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="404.html">
                        Error 404
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="coming-soon.html">
                        Coming Soon
                      </nuxt-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <nuxt-link to="/blog">
                    Blog
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/contact">
                    Contacts
                  </nuxt-link>
                </li>
              </ul><!-- End .menu -->
            </nav><!-- End .main-nav -->
          </div><!-- End .header-center -->

          <div class="header-right">
            <i class="la la-lightbulb-o" /><p>Clearance<span class="highlight">&nbsp;Up to 30% Off</span></p>
          </div>
        </div><!-- End .container -->
      </div><!-- End .header-bottom -->
    </div>
  </header><!-- End .header -->
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'HeaderComp',
  props: {
    value: String
  },
  computed: {
    ...mapGetters({
      username: 'auth/username',
      numberOfItems: 'cart/numberOfItems',
      noOfWishItems: 'wishlist/numberOfItems'
    })
  },
  methods: {
    ...mapMutations({
      logout: 'auth/logout'
    }),
    updateValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>
@import '~/static/assets/css/style.css';
@import '~/static/assets/css/demos/demo-4.css';
@import '~/static/assets/css/skins/skin-demo-4.css';
</style>
