<template>
  <div>
    <main class="main">
      <div class="page-header text-center" style="background-image: url('/static/assets/images/page-header-bg.jpg')">
        <div class="container">
          <h1 class="page-title">
            All Products<span>Shop</span>
          </h1>
        </div><!-- End .container -->
      </div><!-- End .page-header -->
      <nav aria-label="breadcrumb" class="breadcrumb-nav mb-2">
        <div class="container">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Shop</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              All Products
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
                    Showing {{ perPage }} of <span>{{ products.length }}</span> Products
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
                  <div class="toolbox-layout">
                    <a href="category-list.html" class="btn-layout">
                      <svg width="16" height="10">
                        <rect x="0" y="0" width="4" height="4" />
                        <rect x="6" y="0" width="10" height="4" />
                        <rect x="0" y="6" width="4" height="4" />
                        <rect x="6" y="6" width="10" height="4" />
                      </svg>
                    </a>

                    <a href="category-2cols.html" class="btn-layout">
                      <svg width="10" height="10">
                        <rect x="0" y="0" width="4" height="4" />
                        <rect x="6" y="0" width="4" height="4" />
                        <rect x="0" y="6" width="4" height="4" />
                        <rect x="6" y="6" width="4" height="4" />
                      </svg>
                    </a>

                    <a href="category.html" class="btn-layout active">
                      <svg width="16" height="10">
                        <rect x="0" y="0" width="4" height="4" />
                        <rect x="6" y="0" width="4" height="4" />
                        <rect x="12" y="0" width="4" height="4" />
                        <rect x="0" y="6" width="4" height="4" />
                        <rect x="6" y="6" width="4" height="4" />
                        <rect x="12" y="6" width="4" height="4" />
                      </svg>
                    </a>

                    <a href="category-4cols.html" class="btn-layout">
                      <svg width="22" height="10">
                        <rect x="0" y="0" width="4" height="4" />
                        <rect x="6" y="0" width="4" height="4" />
                        <rect x="12" y="0" width="4" height="4" />
                        <rect x="18" y="0" width="4" height="4" />
                        <rect x="0" y="6" width="4" height="4" />
                        <rect x="6" y="6" width="4" height="4" />
                        <rect x="12" y="6" width="4" height="4" />
                        <rect x="18" y="6" width="4" height="4" />
                      </svg>
                    </a>
                  </div><!-- End .toolbox-layout -->
                </div><!-- End .toolbox-right -->
              </div><!-- End .toolbox -->

              <div class="products mb-3">
                <div class="row justify-content-center">
                  <div v-for="product in products.slice((currentPage-1)*perPage,(currentPage-1)*perPage+perPage)" :key="product.id" class="col-6 col-md-4 col-lg-4">
                    <div class="product product-7 text-center">
                      <figure class="product-media">
                        <span class="product-label label-new">New</span>
                        <a href="product.html">
                          <img :src="product.attributes.image.data.attributes.url" alt="Product image" class="product-image">
                        </a>

                        <div class="product-action-vertical">
                          <a href="#" class="btn-product-icon btn-wishlist btn-expandable" @click="addToWishlist(product)"><span>add to wishlist</span></a>
                          <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        </div><!-- End .product-action-vertical -->

                        <div class="product-action">
                          <a href="#" class="btn-product btn-cart" @click="addToCart(product)"><span>add to cart</span></a>
                        </div><!-- End .product-action -->
                      </figure><!-- End .product-media -->

                      <div class="product-body">
                        <div class="product-cat">
                          <a href="#">Products</a>
                        </div><!-- End .product-cat -->
                        <h3 class="product-title">
                          <a href="product.html">{{ product.attributes.name }}</a>
                        </h3><!-- End .product-title -->
                        <div class="product-price">
                          &#8358; {{ product.attributes.price.toLocaleString() }}
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
                  </div><!-- End .col-sm-6 col-lg-4 -->
                </div><!-- End .row -->
              </div><!-- End .products -->
              <div class="overflow-auto align-items-center">
                <!--                <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" use-router />-->
                <b-pagination
                  v-model="currentPage"
                  class="ml-lg-5"
                  :total-rows="rows"
                  :per-page="perPage"
                  aria-controls="my-table"
                />
              </div>
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
                            <nuxt-link to="/shop/samsung/watches">
                              <label class="custom-control-label">Watches</label>
                            </nuxt-link>
                          </div><!-- End .custom-checkbox -->
                          <span class="item-count">3</span>
                        </div><!-- End .filter-item -->

                        <div class="filter-item">
                          <div class="custom-control custom-checkbox">
                            <nuxt-link to="/shop/samsung/buds">
                              <label class="custom-control-label">Buds</label>
                            </nuxt-link>
                          </div><!-- End .custom-checkbox -->
                        </div><!-- End .filter-item -->

                        <div class="filter-item">
                          <div class="custom-control custom-checkbox">
                            <nuxt-link to="/shop/samsung/tabs">
                              <label class="custom-control-label">Tabs</label>
                            </nuxt-link>
                          </div><!-- End .custom-checkbox -->
                          <span class="item-count">4</span>
                        </div><!-- End .filter-item -->
                      </div><!-- End .filter-items -->
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
                            <nuxt-link to="/shop/accessories">
                              <label class="custom-control-label">Apple</label>
                            </nuxt-link>
                          </div><!-- End .custom-checkbox -->
                        </div><!-- End .filter-item -->

                        <div class="filter-item">
                          <div class="custom-control custom-checkbox">
                            <nuxt-link to="/shop/hp-laptops">
                              <label class="custom-control-label">HP</label>
                            </nuxt-link>
                          </div><!-- End .custom-checkbox -->
                        </div><!-- End .filter-item -->

                        <div class="filter-item">
                          <div class="custom-control custom-checkbox">
                            <nuxt-link to="/shop/imacs">
                              <label class="custom-control-label">IMacs</label>
                            </nuxt-link>
                          </div><!-- End .custom-checkbox -->
                        </div><!-- End .filter-item -->

                        <div class="filter-item">
                          <div class="custom-control custom-checkbox">
                            <nuxt-link to="/shop/speakers/beats">
                              <label class="custom-control-label">Beats</label>
                            </nuxt-link>
                          </div><!-- End .custom-checkbox -->
                        </div><!-- End .filter-item -->

                        <div class="filter-item">
                          <div class="custom-control custom-checkbox">
                            <nuxt-link to="/shop/iphone">
                              <label class="custom-control-label">IPhones</label>
                            </nuxt-link>
                          </div><!-- End .custom-checkbox -->
                        </div><!-- End .filter-item -->

                        <div class="filter-item">
                          <div class="custom-control custom-checkbox">
                            <nuxt-link to="/shop/apple-watches">
                              <label class="custom-control-label">Apple Watches</label>
                            </nuxt-link>
                          </div><!-- End .custom-checkbox -->
                        </div><!-- End .filter-item -->
                      </div><!-- End .filter-items -->
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
  name: 'ProductCategory',
  data () {
    return {
      products: [],
      api_url: process.env.BASE_URI || 'https://servicehub-strapi.herokuapp.com',
      error: null,
      perPage: 9,
      currentPage: 1
    }
  },
  computed: {
    rows () {
      return this.products.length
    }
  },

  async created () {
    try {
      const response = await this.$axios.get('https://servicehub-strapi.herokuapp.com/api/products?populate=*&pagination[page]=1&pagination[pageSize]=188')
      this.products = response.data.data
    } catch (e) {
      this.error = e
    }
  },
  methods: {
    ...mapMutations({
      addToCart: 'cart/add',
      addToWishlist: 'wishlist/add',
      removeFromWishlist: 'wishlist/remove',
      removeFromCart: 'cart/remove'
    }),
    linkGen (pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    }
  }
}
</script>

<style>
@import '~/static/assets/css/style.css';
@import '~/static/assets/css/demos/demo-4.css';
@import '~/static/assets/css/skins/skin-demo-4.css';
</style>
