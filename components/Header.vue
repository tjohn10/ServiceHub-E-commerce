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
                  <nuxt-link to="#signin-modal" data-toggle="modal">
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
                  placeholder="Search product ..."
                  required
                >
              </div><!-- End .header-search-wrapper -->
            </form>
          </div><!-- End .header-search -->
        </div>

        <div class="header-right">
          <div class="dropdown compare-dropdown">
            <nuxt-link
              to="#"
              class="dropdown-toggle"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              data-display="static"
              title="Compare Products"
              aria-label="Compare Products"
            >
              <div class="icon">
                <i class="icon-random" />
              </div>
              <p>Compare</p>
            </nuxt-link>

            <div class="dropdown-menu dropdown-menu-right">
              <ul class="compare-products">
                <li class="compare-product">
                  <nuxt-link to="#" class="btn-remove" title="Remove Product">
                    <i class="icon-close" />
                  </nuxt-link>
                  <h4 class="compare-product-title">
                    <nuxt-link to="product.html">
                      Blue Night Dress
                    </nuxt-link>
                  </h4>
                </li>
                <li class="compare-product">
                  <nuxt-link to="#" class="btn-remove" title="Remove Product">
                    <i class="icon-close" />
                  </nuxt-link>
                  <h4 class="compare-product-title">
                    <nuxt-link to="product.html">
                      White Long Skirt
                    </nuxt-link>
                  </h4>
                </li>
              </ul>

              <div class="compare-actions">
                <nuxt-link to="#" class="action-link">
                  Clear All
                </nuxt-link>
                <nuxt-link to="#" class="btn btn-outline-primary-2">
                  <span>Compare</span><i class="icon-long-arrow-right" />
                </nuxt-link>
              </div>
            </div><!-- End .dropdown-menu -->
          </div><!-- End .compare-dropdown -->

          <div class="wishlist">
            <nuxt-link to="/wishlist" title="Wishlist">
              <div class="icon">
                <i class="icon-heart-o" />
                <span class="wishlist-count badge">3</span>
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
                <span class="cart-count">2</span>
              </div>
              <p>Cart</p>
            </nuxt-link>

            <div class="dropdown-menu dropdown-menu-right">
              <div class="dropdown-cart-products">
                <div class="product">
                  <div class="product-cart-details">
                    <h4 class="product-title">
                      <nuxt-link to="product.html">
                        Beige knitted elastic runner shoes
                      </nuxt-link>
                    </h4>

                    <span class="cart-product-info">
                      <span class="cart-product-qty">1</span>
                      x $84.00
                    </span>
                  </div><!-- End .product-cart-details -->

                  <figure class="product-image-container">
                    <nuxt-link to="product.html" class="product-image">
                      <img src="/assets/images/products/cart/product-1.jpg" alt="product">
                    </nuxt-link>
                  </figure>
                  <nuxt-link to="#" class="btn-remove" title="Remove Product">
                    <i class="icon-close" />
                  </nuxt-link>
                </div><!-- End .product -->

                <div class="product">
                  <div class="product-cart-details">
                    <h4 class="product-title">
                      <nuxt-link to="product.html">
                        Blue utility pinafore denim dress
                      </nuxt-link>
                    </h4>

                    <span class="cart-product-info">
                      <span class="cart-product-qty">1</span>
                      x $76.00
                    </span>
                  </div><!-- End .product-cart-details -->

                  <figure class="product-image-container">
                    <nuxt-link to="product.html" class="product-image">
                      <img src="/assets/images/products/cart/product-2.jpg" alt="product">
                    </nuxt-link>
                  </figure>
                  <nuxt-link to="#" class="btn-remove" title="Remove Product">
                    <i class="icon-close" />
                  </nuxt-link>
                </div><!-- End .product -->
              </div><!-- End .cart-product -->

              <div class="dropdown-cart-total">
                <span>Total</span>

                <span class="cart-total-price">$160.00</span>
              </div><!-- End .dropdown-cart-total -->

              <div class="dropdown-cart-action">
                <nuxt-link to="cart.html" class="btn btn-primary">
                  View Cart
                </nuxt-link>
                <nuxt-link to="checkout.html" class="btn btn-outline-primary-2">
                  <span>Checkout</span><i class="icon-long-arrow-right" />
                </nuxt-link>
              </div><!-- End .dropdown-cart-total -->
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
            <ul class="menu sf-arrows">
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
                <nuxt-link to="blog.html" class="sf-with-ul">
                  Blog
                </nuxt-link>

                <ul>
                  <li>
                    <nuxt-link to="blog.html">
                      Classic
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="blog-listing.html">
                      Listing
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#">
                      Grid
                    </nuxt-link>
                    <ul>
                      <li>
                        <nuxt-link to="blog-grid-2cols.html">
                          Grid 2 columns
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="blog-grid-3cols.html">
                          Grid 3 columns
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="blog-grid-4cols.html">
                          Grid 4 columns
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="blog-grid-sidebar.html">
                          Grid sidebar
                        </nuxt-link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <nuxt-link to="#">
                      Masonry
                    </nuxt-link>
                    <ul>
                      <li>
                        <nuxt-link to="blog-masonry-2cols.html">
                          Masonry 2 columns
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="blog-masonry-3cols.html">
                          Masonry 3 columns
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="blog-masonry-4cols.html">
                          Masonry 4 columns
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="blog-masonry-sidebar.html">
                          Masonry sidebar
                        </nuxt-link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <nuxt-link to="#">
                      Mask
                    </nuxt-link>
                    <ul>
                      <li>
                        <nuxt-link to="blog-mask-grid.html">
                          Blog mask grid
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="blog-mask-masonry.html">
                          Blog mask masonry
                        </nuxt-link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <nuxt-link to="#">
                      Single Post
                    </nuxt-link>
                    <ul>
                      <li>
                        <nuxt-link to="single.html">
                          Default with sidebar
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="single-fullwidth.html">
                          Fullwidth no sidebar
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="single-fullwidth-sidebar.html">
                          Fullwidth with sidebar
                        </nuxt-link>
                      </li>
                    </ul>
                  </li>
                </ul>
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
  </header><!-- End .header -->
</template>

<script>
export default {
  name: 'HeaderComp'
}
</script>

<style scoped>
@import '~/static/assets/css/style.css';
@import '~/static/assets/css/demos/demo-4.css';
@import '~/static/assets/css/skins/skin-demo-4.css';
</style>
