<template>
  <div>
    <main class="main">
      <div class="page-header text-center" style="background-image: url('/assets/images/page-header-bg.jpg')">
        <div class="container">
          <h1 class="page-title">
            Playstation<span>Shop</span>
          </h1>
        </div><!-- End .container -->
      </div><!-- End .page-header -->
      <nav aria-label="breadcrumb" class="breadcrumb-nav mb-2">
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
              Playstation
            </li>
          </ol>
        </div><!-- End .container -->
      </nav><!-- End .breadcrumb-nav -->

      <div class="page-content">
        <div class="container">
          <div class="row">
            <div class="col-lg-9">
              <div class="toolbox">
                <div class="toolbox-left">
                  <div class="toolbox-info">
                    Showing {{ perPage }} of <span>{{ playstation.length }}</span> Products
                  </div><!-- End .toolbox-info -->
                </div><!-- End .toolbox-left -->

                <div class="toolbox-right">
                  <div class="toolbox-sort">
                    <label for="sortby">Sort by:</label>
                    <div class="select-custom">
                      <select id="sortby" name="sortby" class="form-control">
                        <option value="popularity" selected="selected">
                          Most Popular
                        </option>
                        <option value="rating">
                          Most Rated
                        </option>
                        <option value="date">
                          Date
                        </option>
                      </select>
                    </div>
                  </div><!-- End .toolbox-sort -->
                </div><!-- End .toolbox-right -->
              </div><!-- End .toolbox -->

              <div class="products mb-3">
                <div class="row justify-content-center">
                  <div v-for="product in playstation.slice((currentPage-1)*perPage,(currentPage-1)*perPage+perPage)" :key="product.id" class="col-6">
                    <div class="product product-7 text-center">
                      <figure class="product-media">
                        <span class="product-label label-new">New</span>
                        <a href="product.html">
                          <img :src="product.attributes.image.data.attributes.url" alt="Product image" class="product-image">
                        </a>

                        <div class="product-action-vertical">
                          <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                          <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div><!-- End .product-action-vertical -->

                        <div class="product-action">
                          <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                        </div><!-- End .product-action -->
                      </figure><!-- End .product-media -->

                      <div class="product-body">
                        <div class="product-cat">
                          <a href="#">iPhones</a>
                        </div><!-- End .product-cat -->
                        <h3 class="product-title">
                          <a href="product.html">{{ product.attributes.name }}</a>
                        </h3><!-- End .product-title -->
                        <div class="product-price">
                          &#8358; {{ product.attributes.price }}
                        </div><!-- End .product-price -->
                        <div class="ratings-container">
                          <div class="ratings">
                            <div class="ratings-val" style="width: 20%;" /><!-- End .ratings-val -->
                          </div><!-- End .ratings -->
                          <span class="ratings-text">( 2 Reviews )</span>
                        </div><!-- End .rating-container -->

                        <div class="product-nav product-nav-thumbs">
                          <a href="#" class="active">
                            <img :src="product.attributes.image.data.attributes.url" alt="product desc">
                          </a>
                          <a href="#">
                            <img :src="product.attributes.image.data.attributes.url" alt="product desc">
                          </a>
                        </div><!-- End .product-nav -->
                      </div><!-- End .product-body -->
                    </div><!-- End .product -->
                  </div><!-- End .col-sm-6 -->
                </div><!-- End .row -->
              </div><!-- End .products -->
            </div><!-- End .col-lg-9 -->
            <aside class="col-lg-3 order-lg-first">
              <div class="sidebar sidebar-shop">
                <div class="widget widget-clean">
                  <label>Filters:</label>
                  <a href="#" class="sidebar-filter-clear">Clean All</a>
                </div><!-- End .widget widget-clean -->

                <div class="widget widget-collapsible">
                  <h3 class="widget-title">
                    <a data-toggle="collapse" href="#widget-1" role="button" aria-expanded="true" aria-controls="widget-1">
                      Category
                    </a>
                  </h3><!-- End .widget-title -->

                  <div id="widget-1" class="collapse show">
                    <div class="widget-body">
                      <div class="filter-items filter-items-count">
                        <div class="filter-item">
                          <div class="custom-control custom-checkbox">
                            <input id="cat-1" type="checkbox" class="custom-control-input">
                            <label class="custom-control-label" for="cat-1">Dresses</label>
                          </div><!-- End .custom-checkbox -->
                          <span class="item-count">3</span>
                        </div><!-- End .filter-item -->

                        <div class="filter-item">
                          <div class="custom-control custom-checkbox">
                            <input id="cat-2" type="checkbox" class="custom-control-input">
                            <label class="custom-control-label" for="cat-2">T-shirts</label>
                          </div><!-- End .custom-checkbox -->
                          <span class="item-count">0</span>
                        </div><!-- End .filter-item -->

                        <div class="filter-item">
                          <div class="custom-control custom-checkbox">
                            <input id="cat-3" type="checkbox" class="custom-control-input">
                            <label class="custom-control-label" for="cat-3">Bags</label>
                          </div><!-- End .custom-checkbox -->
                          <span class="item-count">4</span>
                        </div><!-- End .filter-item -->

                        <div class="filter-item">
                          <div class="custom-control custom-checkbox">
                            <input id="cat-4" type="checkbox" class="custom-control-input">
                            <label class="custom-control-label" for="cat-4">Jackets</label>
                          </div><!-- End .custom-checkbox -->
                          <span class="item-count">2</span>
                        </div><!-- End .filter-item -->

                        <div class="filter-item">
                          <div class="custom-control custom-checkbox">
                            <input id="cat-5" type="checkbox" class="custom-control-input">
                            <label class="custom-control-label" for="cat-5">Shoes</label>
                          </div><!-- End .custom-checkbox -->
                          <span class="item-count">2</span>
                        </div><!-- End .filter-item -->

                        <div class="filter-item">
                          <div class="custom-control custom-checkbox">
                            <input id="cat-6" type="checkbox" class="custom-control-input">
                            <label class="custom-control-label" for="cat-6">Jumpers</label>
                          </div><!-- End .custom-checkbox -->
                          <span class="item-count">1</span>
                        </div><!-- End .filter-item -->

                        <div class="filter-item">
                          <div class="custom-control custom-checkbox">
                            <input id="cat-7" type="checkbox" class="custom-control-input">
                            <label class="custom-control-label" for="cat-7">Jeans</label>
                          </div><!-- End .custom-checkbox -->
                          <span class="item-count">1</span>
                        </div><!-- End .filter-item -->

                        <div class="filter-item">
                          <div class="custom-control custom-checkbox">
                            <input id="cat-8" type="checkbox" class="custom-control-input">
                            <label class="custom-control-label" for="cat-8">Sportwear</label>
                          </div><!-- End .custom-checkbox -->
                          <span class="item-count">0</span>
                        </div><!-- End .filter-item -->
                      </div><!-- End .filter-items -->
                    </div><!-- End .widget-body -->
                  </div><!-- End .collapse -->
                </div><!-- End .widget -->

                <div class="widget widget-collapsible">
                  <h3 class="widget-title">
                    <a data-toggle="collapse" href="#widget-2" role="button" aria-expanded="true" aria-controls="widget-2">
                      Size
                    </a>
                  </h3><!-- End .widget-title -->

                  <div id="widget-2" class="collapse show">
                    <div class="widget-body">
                      <div class="filter-items">
                        <div class="filter-item">
                          <div class="custom-control custom-checkbox">
                            <input id="size-1" type="checkbox" class="custom-control-input">
                            <label class="custom-control-label" for="size-1">XS</label>
                          </div><!-- End .custom-checkbox -->
                        </div><!-- End .filter-item -->

                        <div class="filter-item">
                          <div class="custom-control custom-checkbox">
                            <input id="size-2" type="checkbox" class="custom-control-input">
                            <label class="custom-control-label" for="size-2">S</label>
                          </div><!-- End .custom-checkbox -->
                        </div><!-- End .filter-item -->

                        <div class="filter-item">
                          <div class="custom-control custom-checkbox">
                            <input id="size-3" type="checkbox" class="custom-control-input" checked>
                            <label class="custom-control-label" for="size-3">M</label>
                          </div><!-- End .custom-checkbox -->
                        </div><!-- End .filter-item -->

                        <div class="filter-item">
                          <div class="custom-control custom-checkbox">
                            <input id="size-4" type="checkbox" class="custom-control-input" checked>
                            <label class="custom-control-label" for="size-4">L</label>
                          </div><!-- End .custom-checkbox -->
                        </div><!-- End .filter-item -->

                        <div class="filter-item">
                          <div class="custom-control custom-checkbox">
                            <input id="size-5" type="checkbox" class="custom-control-input">
                            <label class="custom-control-label" for="size-5">XL</label>
                          </div><!-- End .custom-checkbox -->
                        </div><!-- End .filter-item -->

                        <div class="filter-item">
                          <div class="custom-control custom-checkbox">
                            <input id="size-6" type="checkbox" class="custom-control-input">
                            <label class="custom-control-label" for="size-6">XXL</label>
                          </div><!-- End .custom-checkbox -->
                        </div><!-- End .filter-item -->
                      </div><!-- End .filter-items -->
                    </div><!-- End .widget-body -->
                  </div><!-- End .collapse -->
                </div><!-- End .widget -->

                <div class="widget widget-collapsible">
                  <h3 class="widget-title">
                    <a data-toggle="collapse" href="#widget-3" role="button" aria-expanded="true" aria-controls="widget-3">
                      Colour
                    </a>
                  </h3><!-- End .widget-title -->

                  <div id="widget-3" class="collapse show">
                    <div class="widget-body">
                      <div class="filter-colors">
                        <a href="#" style="background: #b87145;"><span class="sr-only">Color Name</span></a>
                        <a href="#" style="background: #f0c04a;"><span class="sr-only">Color Name</span></a>
                        <a href="#" style="background: #333333;"><span class="sr-only">Color Name</span></a>
                        <a href="#" class="selected" style="background: #cc3333;"><span class="sr-only">Color Name</span></a>
                        <a href="#" style="background: #3399cc;"><span class="sr-only">Color Name</span></a>
                        <a href="#" style="background: #669933;"><span class="sr-only">Color Name</span></a>
                        <a href="#" style="background: #f2719c;"><span class="sr-only">Color Name</span></a>
                        <a href="#" style="background: #ebebeb;"><span class="sr-only">Color Name</span></a>
                      </div><!-- End .filter-colors -->
                    </div><!-- End .widget-body -->
                  </div><!-- End .collapse -->
                </div><!-- End .widget -->

                <div class="widget widget-collapsible">
                  <h3 class="widget-title">
                    <a data-toggle="collapse" href="#widget-4" role="button" aria-expanded="true" aria-controls="widget-4">
                      Brand
                    </a>
                  </h3><!-- End .widget-title -->

                  <div id="widget-4" class="collapse show">
                    <div class="widget-body">
                      <div class="filter-items">
                        <div class="filter-item">
                          <div class="custom-control custom-checkbox">
                            <input id="brand-1" type="checkbox" class="custom-control-input">
                            <label class="custom-control-label" for="brand-1">Next</label>
                          </div><!-- End .custom-checkbox -->
                        </div><!-- End .filter-item -->

                        <div class="filter-item">
                          <div class="custom-control custom-checkbox">
                            <input id="brand-2" type="checkbox" class="custom-control-input">
                            <label class="custom-control-label" for="brand-2">River Island</label>
                          </div><!-- End .custom-checkbox -->
                        </div><!-- End .filter-item -->

                        <div class="filter-item">
                          <div class="custom-control custom-checkbox">
                            <input id="brand-3" type="checkbox" class="custom-control-input">
                            <label class="custom-control-label" for="brand-3">Geox</label>
                          </div><!-- End .custom-checkbox -->
                        </div><!-- End .filter-item -->

                        <div class="filter-item">
                          <div class="custom-control custom-checkbox">
                            <input id="brand-4" type="checkbox" class="custom-control-input">
                            <label class="custom-control-label" for="brand-4">New Balance</label>
                          </div><!-- End .custom-checkbox -->
                        </div><!-- End .filter-item -->

                        <div class="filter-item">
                          <div class="custom-control custom-checkbox">
                            <input id="brand-5" type="checkbox" class="custom-control-input">
                            <label class="custom-control-label" for="brand-5">UGG</label>
                          </div><!-- End .custom-checkbox -->
                        </div><!-- End .filter-item -->

                        <div class="filter-item">
                          <div class="custom-control custom-checkbox">
                            <input id="brand-6" type="checkbox" class="custom-control-input">
                            <label class="custom-control-label" for="brand-6">F&F</label>
                          </div><!-- End .custom-checkbox -->
                        </div><!-- End .filter-item -->

                        <div class="filter-item">
                          <div class="custom-control custom-checkbox">
                            <input id="brand-7" type="checkbox" class="custom-control-input">
                            <label class="custom-control-label" for="brand-7">Nike</label>
                          </div><!-- End .custom-checkbox -->
                        </div><!-- End .filter-item -->
                      </div><!-- End .filter-items -->
                    </div><!-- End .widget-body -->
                  </div><!-- End .collapse -->
                </div><!-- End .widget -->

                <div class="widget widget-collapsible">
                  <h3 class="widget-title">
                    <a data-toggle="collapse" href="#widget-5" role="button" aria-expanded="true" aria-controls="widget-5">
                      Price
                    </a>
                  </h3><!-- End .widget-title -->

                  <div id="widget-5" class="collapse show">
                    <div class="widget-body">
                      <div class="filter-price">
                        <div class="filter-price-text">
                          Price Range:
                          <span id="filter-price-range" />
                        </div><!-- End .filter-price-text -->

                        <div id="price-slider" /><!-- End #price-slider -->
                      </div><!-- End .filter-price -->
                    </div><!-- End .widget-body -->
                  </div><!-- End .collapse -->
                </div><!-- End .widget -->
              </div><!-- End .sidebar sidebar-shop -->
            </aside><!-- End .col-lg-3 -->
          </div><!-- End .row -->
        </div><!-- End .container -->
      </div><!-- End .page-content -->
    </main><!-- End .main -->
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'PlaystationPage',
  data () {
    return {
      playstation: [],
      api_url: process.env.BASE_URI || 'https://servicehub-strapi.herokuapp.com',
      error: null,
      perPage: 3,
      currentPage: 1
    }
  },
  computed: {
    rows () {
      return this.playstation.length
    }
  },
  async mounted () {
    try {
      const response = await this.$axios.get('https://servicehub-strapi.herokuapp.com/api/products?populate=*&filters[name][$startsWith]=PS&filters[name][$startsWith]=Ps&filters[name][$startsWith]=Fifa')
      this.playstation = response.data.data
    } catch (e) {
      this.error = e
    }
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
