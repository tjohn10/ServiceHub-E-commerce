<template>
  <div>
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
              <a href="#">Pages</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Contact us
            </li>
          </ol>
        </div><!-- End .container -->
      </nav><!-- End .breadcrumb-nav -->
      <div class="container">
        <div class="page-header page-header-big text-center" style="background-image: url('/assets/images/contact-header-bg.jpg')">
          <h1 class="page-title text-white">
            Contact us<span class="text-white">keep in touch with us</span>
          </h1>
        </div><!-- End .page-header -->
      </div><!-- End .container -->

      <div class="page-content pb-0">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 mb-2 mb-lg-0">
              <h2 class="title mb-1">
                Contact Information
              </h2><!-- End .title mb-2 -->
              <p class="mb-3">
                Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
              </p>
              <div class="row">
                <div class="col-sm-7">
                  <div class="contact-info">
                    <h3>The Office</h3>

                    <ul class="contact-list">
                      <li>
                        <i class="icon-map-marker" />
                        No 5 Pepple Street, Second Floor (Shop B13), Opposite Zenith Bank, Computer Village, Ikeja
                      </li>
                      <li>
                        <i class="icon-phone" />
                        <a href="tel:#">08127821234</a>
                      </li>
                      <li>
                        <i class="icon-envelope" />
                        <a href="mailto:imadojoe@yahoo.com"> Email: imadojoe@yahoo.com</a>
                      </li>
                    </ul><!-- End .contact-list -->
                  </div><!-- End .contact-info -->
                </div><!-- End .col-sm-7 -->

                <div class="col-sm-5">
                  <div class="contact-info">
                    <h3>The Office</h3>

                    <ul class="contact-list">
                      <li>
                        <i class="icon-clock-o" />
                        <span class="text-dark">Monday-Saturday</span> <br>8am-7pm
                      </li>
                      <li>
                        <i class="icon-calendar" />
                        <span class="text-dark">Sunday</span> <br>11am-6pm ET
                      </li>
                    </ul><!-- End .contact-list -->
                  </div><!-- End .contact-info -->
                </div><!-- End .col-sm-5 -->
              </div><!-- End .row -->
            </div><!-- End .col-lg-6 -->
            <div class="col-lg-6">
              <h2 class="title mb-1">
                Got Any Questions?
              </h2><!-- End .title mb-2 -->
              <p class="mb-2">
                Use the form below to get in touch with the sales team
              </p>

              <form action="#" class="contact-form mb-3">
                <div class="row">
                  <div class="col-sm-6">
                    <label for="cname" class="sr-only">Name</label>
                    <input id="cname" type="text" class="form-control" placeholder="Name *" required>
                  </div><!-- End .col-sm-6 -->

                  <div class="col-sm-6">
                    <label for="cemail" class="sr-only">Email</label>
                    <input id="cemail" type="email" class="form-control" placeholder="Email *" required>
                  </div><!-- End .col-sm-6 -->
                </div><!-- End .row -->

                <div class="row">
                  <div class="col-sm-6">
                    <label for="cphone" class="sr-only">Phone</label>
                    <input id="cphone" type="tel" class="form-control" placeholder="Phone">
                  </div><!-- End .col-sm-6 -->

                  <div class="col-sm-6">
                    <label for="csubject" class="sr-only">Subject</label>
                    <input id="csubject" type="text" class="form-control" placeholder="Subject">
                  </div><!-- End .col-sm-6 -->
                </div><!-- End .row -->

                <label for="cmessage" class="sr-only">Message</label>
                <textarea
                  id="cmessage"
                  class="form-control"
                  cols="30"
                  rows="4"
                  required
                  placeholder="Message *"
                />

                <button type="submit" class="btn btn-outline-primary-2 btn-minwidth-sm">
                  <span>SUBMIT</span>
                  <i class="icon-long-arrow-right" />
                </button>
              </form><!-- End .contact-form -->
            </div><!-- End .col-lg-6 -->
          </div><!-- End .row -->
        </div><!-- End .container -->
      </div><!-- End .page-content -->
    </main><!-- End .main -->
  </div>
</template>

<script>
export default {
  name: 'ContactPage'
}
</script>

<style scoped>

</style>
