<template>
  <main class="main">
    <nav aria-label="breadcrumb" class="breadcrumb-nav border-0 mb-0">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <nuxt-link to="/">
              Home
            </nuxt-link>
          </li>
          <li class="breadcrumb-item">
            <nuxt-link to="/">
              Pages
            </nuxt-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            404
          </li>
        </ol>
      </div><!-- End .container -->
    </nav><!-- End .breadcrumb-nav -->

    <div class="error-content text-center" style="background-image: url('/assets/images/backgrounds/error-bg.jpg')">
      <div class="container">
        <h1 class="error-title">
          Error 404
        </h1><!-- End .error-title -->
        <p>We are sorry, the page you've requested is not available.</p>
        <nuxt-link to="/" class="btn btn-outline-primary-2 btn-minwidth-lg">
          <span>BACK TO HOMEPAGE</span>
          <i class="icon-long-arrow-right" />
        </nuxt-link>
      </div><!-- End .container -->
    </div><!-- End .error-content text-center -->
  </main><!-- End .main -->
</template>
<script>
export default {
  name: 'ErrorLayout'
}
</script>

<style scoped>

</style>
