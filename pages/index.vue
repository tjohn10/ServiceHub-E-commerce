<template>
  <div>
    <main class="main">
      <div class="container">
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="/assets/images/demos/demo-4/slider/slide-1.png"
          img-width="1024"
          img-height="500"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <b-carousel-slide>
            <div class="container">
              <div class="row">
                <div class="col-auto col-sm-7 col-md-6 col-lg-5">
                  <h3 class="intro-subtitle text-third">
                    Deals and Promotions
                  </h3><!-- End .h3 intro-subtitle -->
                  <h1 class="intro-title">
                    Beats by
                  </h1>
                  <h1 class="intro-title">
                    Dre Studio 3
                  </h1><!-- End .intro-title -->

                  <div class="intro-price">
                    <sup class="intro-old-price">$349,95</sup>
                    <span class="text-third">
                      $279<sup>.99</sup>
                    </span>
                  </div><!-- End .intro-price -->

                  <a href="category.html" class="btn btn-primary btn-round">
                    <span>Shop More</span>
                    <i class="icon-long-arrow-right" />
                  </a>
                </div><!-- End .col-lg-11 offset-lg-1 -->
              </div><!-- End .row -->
            </div>
          </b-carousel-slide>

          <!-- Slides with custom text -->
          <b-carousel-slide img-src="/assets/images/demos/demo-4/slider/slide-1.png">
            <div class="row justify-content-end">
              <div class="col-auto col-sm-7 col-md-6 col-lg-5">
                <h3 class="intro-subtitle text-third">
                  Deals and Promotions
                </h3><!-- End .h3 intro-subtitle -->
                <h1 class="intro-title">
                  Beats by
                </h1>
                <h1 class="intro-title">
                  Dre Studio 3
                </h1><!-- End .intro-title -->

                <div class="intro-price">
                  <sup class="intro-old-price">$349,95</sup>
                  <span class="text-third">
                    $279<sup>.99</sup>
                  </span>
                </div><!-- End .intro-price -->

                <nuxt-link to="/shop" class="btn btn-primary btn-round">
                  <span>Shop More</span>
                  <i class="icon-long-arrow-right" />
                </nuxt-link>
              </div><!-- End .col-lg-11 offset-lg-1 -->
            </div><!-- End .row -->
          </b-carousel-slide>
          <!-- New Slide -->
          <b-carousel-slide img-src="/assets/images/demos/demo-4/slider/slide-2.png">
            <div class="container intro-content">
              <div class="row justify-content-end">
                <div class="col-auto col-sm-7 col-md-6 col-lg-5">
                  <h3 class="intro-subtitle text-primary">
                    New Arrival
                  </h3><!-- End .h3 intro-subtitle -->
                  <h1 class="intro-title">
                    Apple iPad Pro <br>12.9 Inch, 64GB
                  </h1><!-- End .intro-title -->

                  <div class="intro-price">
                    <sup>Today:</sup>
                    <span class="text-primary">
                      $999<sup>.99</sup>
                    </span>
                  </div><!-- End .intro-price -->

                  <a href="category.html" class="btn btn-primary btn-round">
                    <span>Shop More</span>
                    <i class="icon-long-arrow-right" />
                  </a>
                </div><!-- End .col-md-6 offset-md-6 -->
              </div><!-- End .row -->
            </div><!-- End .intro-content -->
          </b-carousel-slide>
        </b-carousel>
      </div>

      <div class="container">
        <h2 class="title text-center mb-4 mt-4">
          Explore Popular Categories
        </h2><!-- End .title text-center -->

        <div class="cat-blocks-container">
          <div class="row">
            <div class="col-6 col-sm-4 col-lg-2">
              <nuxt-link to="/shop/macbook" class="cat-block">
                <figure>
                  <span>
                    <img src="/assets/images/demos/demo-4/cats/1.png" alt="Category image">
                  </span>
                </figure>

                <h3 class="cat-block-title">
                  Computer & Laptop
                </h3><!-- End .cat-block-title -->
              </nuxt-link>
            </div><!-- End .col-sm-4 col-lg-2 -->

            <div class="col-6 col-sm-4 col-lg-2">
              <nuxt-link to="/shop/imacs" class="cat-block">
                <figure>
                  <span>
                    <img src="/iMac.jpg" alt="Category image">
                  </span>
                </figure>

                <h3 class="cat-block-title">
                  iMacs
                </h3><!-- End .cat-block-title -->
              </nuxt-link>
            </div><!-- End .col-sm-4 col-lg-2 -->

            <div class="col-6 col-sm-4 col-lg-2">
              <nuxt-link to="/shop/iphone" class="cat-block">
                <figure>
                  <span>
                    <img src="/assets/images/demos/demo-4/cats/3.png" alt="Category image">
                  </span>
                </figure>

                <h3 class="cat-block-title">
                  iPhones
                </h3><!-- End .cat-block-title -->
              </nuxt-link>
            </div><!-- End .col-sm-4 col-lg-2 -->

            <div class="col-6 col-sm-4 col-lg-2">
              <a href="category.html" class="cat-block">
                <figure>
                  <span>
                    <img src="/ps4-product-thumbnail-01-en-14sep21.webp" alt="Category image">
                  </span>
                </figure>

                <h3 class="cat-block-title">PlayStations</h3><!-- End .cat-block-title -->
              </a>
            </div><!-- End .col-sm-4 col-lg-2 -->

            <div class="col-6 col-sm-4 col-lg-2">
              <nuxt-link to="/shop/speakers" class="cat-block">
                <figure>
                  <span>
                    <img src="/assets/images/demos/demo-4/cats/5.png" alt="Category image">
                  </span>
                </figure>

                <h3 class="cat-block-title">
                  Audio
                </h3><!-- End .cat-block-title -->
              </nuxt-link>
            </div><!-- End .col-sm-4 col-lg-2 -->

            <div class="col-6 col-sm-4 col-lg-2">
              <nuxt-link to="/shop/apple-watches" class="cat-block">
                <figure>
                  <span>
                    <img src="/assets/images/demos/demo-4/cats/6.png" alt="Category image">
                  </span>
                </figure>

                <h3 class="cat-block-title">
                  Smart Watches
                </h3><!-- End .cat-block-title -->
              </nuxt-link>
            </div><!-- End .col-sm-4 col-lg-2 -->
          </div><!-- End .row -->
        </div><!-- End .cat-blocks-container -->
      </div><!-- End .container -->

      <div class="mb-4" /><!-- End .mb-4 -->

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-4">
            <div class="banner banner-overlay banner-overlay-light">
              <a href="#">
                <img src="/assets/images/demos/demo-4/banners/banner-1.png" alt="Banner">
              </a>

              <div class="banner-content">
                <h4 class="banner-subtitle">
                  <a href="#">Smart Offer</a>
                </h4><!-- End .banner-subtitle -->
                <h3 class="banner-title">
                  <a href="#">Save 20% <strong>on Samsung <br>Galaxy Note9</strong></a>
                </h3><!-- End .banner-title -->
                <nuxt-link to="/shop/samsung" class="banner-link">
                  Shop Now<i class="icon-long-arrow-right" />
                </nuxt-link>
              </div><!-- End .banner-content -->
            </div><!-- End .banner -->
          </div><!-- End .col-md-4 -->

          <div class="col-md-6 col-lg-4">
            <div class="banner banner-overlay banner-overlay-light">
              <a href="#">
                <img src="/assets/images/demos/demo-4/banners/banner-2.jpg" alt="Banner">
              </a>

              <div class="banner-content">
                <h4 class="banner-subtitle">
                  <a href="#">Time Deals</a>
                </h4><!-- End .banner-subtitle -->
                <h3 class="banner-title">
                  <a href="#"><strong>Bose SoundSport</strong> <br>Time Deal -30%</a>
                </h3><!-- End .banner-title -->
                <a href="#" class="banner-link">Shop Now<i class="icon-long-arrow-right" /></a>
              </div><!-- End .banner-content -->
            </div><!-- End .banner -->
          </div><!-- End .col-md-4 -->

          <div class="col-md-6 col-lg-4">
            <div class="banner banner-overlay banner-overlay-light">
              <a href="#">
                <img src="/assets/images/demos/demo-4/banners/banner-3.png" alt="Banner">
              </a>

              <div class="banner-content">
                <h4 class="banner-subtitle">
                  <a href="#">Clearance</a>
                </h4><!-- End .banner-subtitle -->
                <h3 class="banner-title">
                  <a href="#"><strong>IPhone 11 Pro Max</strong> <br>Save 15%</a>
                </h3><!-- End .banner-title -->
                <a href="#" class="banner-link">Shop Now<i class="icon-long-arrow-right" /></a>
              </div><!-- End .banner-content -->
            </div><!-- End .banner -->
          </div><!-- End .col-lg-4 -->
        </div><!-- End .row -->
      </div><!-- End .container -->

      <div class="mb-3" /><!-- End .mb-5 -->

      <div class="mb-6" /><!-- End .mb-6 -->

      <div class="container">
        <div class="cta cta-border mb-5 mt-5" style="background-image: url(/assets/images/demos/demo-4/bg-1.jpg);">
          <img src="/assets/images/demos/demo-4/camera.png" alt="camera" class="cta-img">
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="cta-content">
                <div class="cta-text text-right text-white">
                  <p>Shop Today’s Deals <br><strong>Awesome Made Easy. HERO7 Black</strong></p>
                </div><!-- End .cta-text -->
                <a href="#" class="btn btn-primary btn-round"><span>Shop Now - $429.99</span><i class="icon-long-arrow-right" /></a>
              </div><!-- End .cta-content -->
            </div><!-- End .col-md-12 -->
          </div><!-- End .row -->
        </div><!-- End .cta -->
      </div><!-- End .container -->

      <!-- Product Logos -->
      <div class="container">
        <div class="row">
          <div class="col-md-2">
            <img src="/assets/images/brands/brand1.png" alt="comp1">
          </div>
          <div class="col-md-2">
            <img src="/assets/images/brands/brand2.png" alt="comp1">
          </div>
          <div class="col-md-2">
            <img src="/assets/images/brands/brand3.png" alt="comp1">
          </div>
          <div class="col-md-2">
            <img src="/assets/images/brands/brand4.png" alt="comp1">
          </div>
          <div class="col-md-2">
            <img src="/assets/images/brands/brand5.png" alt="comp1">
          </div>
          <div class="col-md-2">
            <img src="/assets/images/brands/brand6.png" alt="comp1">
          </div>
        </div>
        <hr class="mb-0">
      </div><!-- End .container -->

      <div class="bg-light pt-5 pb-6">
        <div class="container trending-products">
          <div class="heading heading-flex mb-3">
            <div class="heading-left">
              <h2 class="title">
                Trending Products
              </h2><!-- End .title -->
            </div><!-- End .heading-left -->

            <div class="heading-right">
              <ul class="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                <li class="nav-item">
                  <a
                    id="trending-top-link"
                    class="nav-link active"
                    data-toggle="tab"
                    href="#trending-top-tab"
                    role="tab"
                    aria-controls="trending-top-tab"
                    aria-selected="true"
                  >Top Rated</a>
                </li>
                <li class="nav-item">
                  <a
                    id="trending-best-link"
                    class="nav-link"
                    data-toggle="tab"
                    href="#trending-best-tab"
                    role="tab"
                    aria-controls="trending-best-tab"
                    aria-selected="false"
                  >Best Selling</a>
                </li>
                <li class="nav-item">
                  <a
                    id="trending-sale-link"
                    class="nav-link"
                    data-toggle="tab"
                    href="#trending-sale-tab"
                    role="tab"
                    aria-controls="trending-sale-tab"
                    aria-selected="false"
                  >On Sale</a>
                </li>
              </ul>
            </div><!-- End .heading-right -->
          </div><!-- End .heading -->

          <div class="row">
            <div class="col-xl-5col d-none d-xl-block">
              <div class="banner bg-dark">
                <a href="#">
                  <p class="text-white-50 text-center">Smart Phone</p>
                  <p class="text-white text-center">Iphone 13 <br>Pro Max</p>
                  <img src="/13promax.png" alt="banner">
                  <div class="mt-2 mb-2 bg-primary text-center">
                    <nuxt-link to="/shop/samsung" class="text-white justify-content-center">Shop Now<i class="icon-long-arrow-right" /></nuxt-link>
                  </div>
                </a>
              </div><!-- End .banner -->
            </div><!-- End .col-xl-5col -->

            <div class="col-xl-4-5col">
              <div class="tab-content tab-content-carousel just-action-icons-sm">
                <div id="trending-top-tab" class="tab-pane p-0 fade show active" role="tabpanel" aria-labelledby="trending-top-link">
                  <TrendCarousel />
                </div><!-- .End .tab-pane -->
                <div id="trending-best-tab" class="tab-pane p-0 fade" role="tabpanel" aria-labelledby="trending-best-link">
                  <OwlCarousel />
                </div><!-- .End .tab-pane -->
                <div id="trending-sale-tab" class="tab-pane p-0 fade" role="tabpanel" aria-labelledby="trending-sale-link">
                  <ProductCarousel />
                </div><!-- .End .tab-pane -->
              </div><!-- End .tab-content -->
            </div><!-- End .col-xl-4-5col -->
          </div><!-- End .row -->
        </div><!-- End .container -->
      </div><!-- End .bg-light pt-5 pb-6 -->

      <div class="mb-5" /><!-- End .mb-5 -->

      <div class="container for-you">
        <div class="heading heading-flex mb-3">
          <div class="heading-left">
            <h2 class="title">
              Recommendation For You
            </h2><!-- End .title -->
          </div><!-- End .heading-left -->

          <div class="heading-right">
            <a href="#" class="title-link">View All Recommendation <i class="icon-long-arrow-right" /></a>
          </div><!-- End .heading-right -->
        </div><!-- End .heading -->

        <div class="products">
          <div class="row justify-content-center">
            <div v-for="product in products" :key="product.id" class="col-6 col-md-4 col-lg-3">
              <div class="product product-2">
                <figure class="product-media">
                  <span class="product-label label-circle label-sale">Sale</span>
                  <a href="product.html">
                    <img :src="product.attributes.image.data.attributes.url" alt="Product image" class="product-image">
                  </a>

                  <div class="product-action-vertical">
                    <a href="#" class="btn-product-icon btn-wishlist btn-expandable" @click="addToWishlist(product)"><span>add to wishlist</span></a>
                  </div><!-- End .product-action -->

                  <div class="product-action">
                    <a href="#" class="btn-product btn-cart" @click="addToCart(product)"><span>add to cart</span></a>
                    <a href="#" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                  </div><!-- End .product-action -->
                </figure><!-- End .product-media -->

                <div class="product-body">
                  <h3 class="product-title">
                    <a href="product.html">{{ product.attributes.name }}</a>
                  </h3><!-- End .product-title -->
                  <div class="product-price">
<!--                    <span class="new-price">$279.99</span>-->
                  <span class="old-price">&#8358; {{ product.attributes.price.toLocaleString() }}</span>
                  </div><!-- End .product-price -->
                  <div class="ratings-container">
                    <div class="ratings">
                      <div class="ratings-val" style="width: 40%;" /><!-- End .ratings-val -->
                    </div><!-- End .ratings -->
                    <span class="ratings-text">( 4 Reviews )</span>
                  </div><!-- End .rating-container -->

                  <div class="product-nav product-nav-dots">
                    <a href="#" class="active" style="background: #666666;"><span class="sr-only">Color name</span></a>
                    <a href="#" style="background: #ff887f;"><span class="sr-only">Color name</span></a>
                    <a href="#" style="background: #6699cc;"><span class="sr-only">Color name</span></a>
                    <a href="#" style="background: #f3dbc1;"><span class="sr-only">Color name</span></a>
                    <a href="#" style="background: #eaeaec;"><span class="sr-only">Color name</span></a>
                  </div><!-- End .product-nav -->
                </div><!-- End .product-body -->
              </div><!-- End .product -->
            </div><!-- End .col-sm-6 col-md-4 col-lg-3 -->
          </div><!-- End .row -->
        </div><!-- End .products -->
      </div><!-- End .container -->

      <div class="mb-4" /><!-- End .mb-4 -->

      <div class="container">
        <hr class="mb-0">
      </div><!-- End .container -->

      <div class="icon-boxes-container bg-transparent">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-lg-3">
              <div class="icon-box icon-box-side">
                <span class="icon-box-icon text-dark">
                  <i class="icon-rocket" />
                </span>
                <div class="icon-box-content">
                  <h3 class="icon-box-title">
                    Free Shipping
                  </h3><!-- End .icon-box-title -->
                  <p>Orders  &#8358; 100,000 or more</p>
                </div><!-- End .icon-box-content -->
              </div><!-- End .icon-box -->
            </div><!-- End .col-sm-6 col-lg-3 -->

            <div class="col-sm-6 col-lg-3">
              <div class="icon-box icon-box-side">
                <span class="icon-box-icon text-dark">
                  <i class="icon-rotate-left" />
                </span>

                <div class="icon-box-content">
                  <h3 class="icon-box-title">
                    Free Returns
                  </h3><!-- End .icon-box-title -->
                  <p>Within 30 days</p>
                </div><!-- End .icon-box-content -->
              </div><!-- End .icon-box -->
            </div><!-- End .col-sm-6 col-lg-3 -->

            <div class="col-sm-6 col-lg-3">
              <div class="icon-box icon-box-side">
                <span class="icon-box-icon text-dark">
                  <i class="icon-info-circle" />
                </span>

                <div class="icon-box-content">
                  <h3 class="icon-box-title">
                    Get 20% Off 1 Item
                  </h3><!-- End .icon-box-title -->
                  <p>when you sign up</p>
                </div><!-- End .icon-box-content -->
              </div><!-- End .icon-box -->
            </div><!-- End .col-sm-6 col-lg-3 -->

            <div class="col-sm-6 col-lg-3">
              <div class="icon-box icon-box-side">
                <span class="icon-box-icon text-dark">
                  <i class="icon-life-ring" />
                </span>

                <div class="icon-box-content">
                  <h3 class="icon-box-title">
                    We Support
                  </h3><!-- End .icon-box-title -->
                  <p>24/7 amazing services</p>
                </div><!-- End .icon-box-content -->
              </div><!-- End .icon-box -->
            </div><!-- End .col-sm-6 col-lg-3 -->
          </div><!-- End .row -->
        </div><!-- End .container -->
      </div><!-- End .icon-boxes-container -->
    </main>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'IndexPage',
  data () {
    return {
      slide: 0,
      products: '',
      sliding: null
    }
  },
  async created () {
    try {
      const response = await this.$axios.get('https://servicehub-strapi.herokuapp.com/api/products?populate=*&pagination[page]=1&pagination[pageSize]=12')
      this.products = response.data.data
    } catch (e) {
      this.error = e
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    ...mapMutations({
      addToCart: 'cart/add',
      addToWishlist: 'wishlist/add',
      removeFromWishlist: 'wishlist/remove',
      removeFromCart: 'cart/remove'
    })
  }
}
</script>
<style>
@import '~/static/assets/css/style.css';
@import '~/static/assets/css/demos/demo-4.css';
@import '~/static/assets/css/skins/skin-demo-4.css';
</style>
