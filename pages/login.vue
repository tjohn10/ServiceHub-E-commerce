<template>
  <div class="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17" style="background-image: url('/assets/images/backgrounds/login-bg.jpg')">
    <div class="container">
      <div class="form-box">
        <div class="form-tab">
          <ul class="nav nav-pills nav-fill" role="tablist">
            <li class="nav-item">
              <a
                id="signin-tab-2"
                class="nav-link"
                data-toggle="tab"
                href="#signin-2"
                role="tab"
                aria-controls="signin-2"
                aria-selected="false"
              >Sign In</a>
            </li>
            <li class="nav-item">
              <a
                id="register-tab-2"
                class="nav-link active"
                data-toggle="tab"
                href="#register-2"
                role="tab"
                aria-controls="register-2"
                aria-selected="true"
              >Register</a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="signin-2" class="tab-pane fade" role="tabpanel" aria-labelledby="signin-tab-2">
              <form action="#">
                <div class="form-group">
                  <label for="singin-email-2">Username or email address *</label>
                  <input id="singin-email-2" type="text" class="form-control" name="singin-email" required>
                </div><!-- End .form-group -->

                <div class="form-group">
                  <label for="singin-password-2">Password *</label>
                  <input id="singin-password-2" type="password" class="form-control" name="singin-password" required>
                </div><!-- End .form-group -->

                <div class="form-footer">
                  <button type="submit" class="btn btn-outline-primary-2">
                    <span>LOG IN</span>
                    <i class="icon-long-arrow-right" />
                  </button>

                  <div class="custom-control custom-checkbox">
                    <input id="signin-remember-2" type="checkbox" class="custom-control-input">
                    <label class="custom-control-label" for="signin-remember-2">Remember Me</label>
                  </div><!-- End .custom-checkbox -->

                  <a href="#" class="forgot-link">Forgot Your Password?</a>
                </div><!-- End .form-footer -->
              </form>
              <div class="form-choice">
                <p class="text-center">
                  or sign in with
                </p>
                <div class="row">
                  <div class="col-sm-6">
                    <a href="#" class="btn btn-login btn-g">
                      <i class="icon-google" />
                      Login With Google
                    </a>
                  </div><!-- End .col-6 -->
                  <div class="col-sm-6">
                    <a href="#" class="btn btn-login btn-f">
                      <i class="icon-facebook-f" />
                      Login With Facebook
                    </a>
                  </div><!-- End .col-6 -->
                </div><!-- End .row -->
              </div><!-- End .form-choice -->
            </div><!-- .End .tab-pane -->
            <div id="register-2" class="tab-pane fade show active" role="tabpanel" aria-labelledby="register-tab-2">
              <form action="#">
                <div class="form-group">
                  <label for="register-email-2">Your email address *</label>
                  <input id="register-email-2" type="email" class="form-control" name="register-email" required>
                </div><!-- End .form-group -->

                <div class="form-group">
                  <label for="register-password-2">Password *</label>
                  <input id="register-password-2" type="password" class="form-control" name="register-password" required>
                </div><!-- End .form-group -->

                <div class="form-footer">
                  <button type="submit" class="btn btn-outline-primary-2">
                    <span>SIGN UP</span>
                    <i class="icon-long-arrow-right" />
                  </button>

                  <div class="custom-control custom-checkbox">
                    <input id="register-policy-2" type="checkbox" class="custom-control-input" required>
                    <label class="custom-control-label" for="register-policy-2">I agree to the <a href="#">privacy policy</a> *</label>
                  </div><!-- End .custom-checkbox -->
                </div><!-- End .form-footer -->
              </form>
              <div class="form-choice">
                <p class="text-center">
                  or sign in with
                </p>
                <div class="row">
                  <div class="col-sm-6">
                    <a href="#" class="btn btn-login btn-g">
                      <i class="icon-google" />
                      Login With Google
                    </a>
                  </div><!-- End .col-6 -->
                  <div class="col-sm-6">
                    <a href="#" class="btn btn-login  btn-f">
                      <i class="icon-facebook-f" />
                      Login With Facebook
                    </a>
                  </div><!-- End .col-6 -->
                </div><!-- End .row -->
              </div><!-- End .form-choice -->
            </div><!-- .End .tab-pane -->
          </div><!-- End .tab-content -->
        </div><!-- End .form-tab -->
      </div><!-- End .form-box -->
    </div><!-- End .container -->
  </div>
</template>

<script>
export default {
  name: 'LoginPage'
}
</script>

<style scoped>

</style>
