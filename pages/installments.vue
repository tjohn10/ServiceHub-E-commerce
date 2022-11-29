<template>
  <div>
    <section class="container">
      <InstallmentsCarousel />
    </section>
    <!-- Banks -->
    <section class="container mt-3">
      <h5 class="text-black-50">
        With over 40 financial institutions
      </h5>
      <div class="row">
        <div class="col-2 col-md-2 col-sm-6">
          <img class="w-100" src="https://cdn.vanguardngr.com/wp-content/uploads/2021/01/ALAT.jpg" alt="bank">
        </div>
        <div class="col-2 col-md-2 col-sm-6">
          <img
            class="w-100"
            src="https://spectaprime.azureedge.net/specta-prime/basic/assets/img/specta_logo.png"
            alt="bank"
          >
        </div>
        <div class="col-2 col-md-2 col-sm-6">
          <img class="w-100" src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Ecobank_Logo_EN.png" alt="bank">
        </div>
        <div class="col-2 col-md-2 col-sm-6">
          <img
            class="w-100"
            src="https://nigeriannewsdirect.com/wp-content/uploads/2022/04/Kuda-bank-logo.png"
            alt="bank"
          >
        </div>
        <div class="col-2 col-md-2 col-sm-6">
          <img class="w-100" src="https://techeconomy.ng/wp-content/uploads/2022/06/Carbon-Zero-.png" alt="Carbon Zero">
        </div>
        <div class="col-2 col-md-2 col-sm-6">
          <img class="w-100" src="https://www.nipc.gov.ng/wp-content/uploads/2019/01/gtbank-logo.jpeg" alt="bank">
        </div>
      </div>
    </section>
    <!-- institutions card -->
    <section class="pricing py-5">
      <div class="container">
        <div class="row justify-content-center text-center">
          <!-- Free Tier -->
          <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">
                  CredPal
                </h5>
                <img
                  class="w-100"
                  height="250"
                  src="https://i0.wp.com/refinedng.com/wp-content/uploads/2020/12/unnamed-1.jpg?resize=687%2C386&ssl=1"
                  alt="..."
                >
                Pay in 4 installments.
                <hr>
                <ul class="fa-ul">
                  <li><span>&#10003;</span>Shopping Limit - 5,000,000</li>
                  <li><span>&#10003;</span>5% Monthly Interest</li>
                  <li><span>&#10003;</span>2-6 months Installments</li>
                  <li><span>&#10003;</span>30% Initial Deposit</li>
                  <li><span>&#10003;</span> Swift Processing</li>
                  <li><span>&#10003;</span>0-3 Working Days Delivery</li>
                </ul>
                <div class="d-grid">
                  <a href="#" class="btn btn-primary text-uppercase">Button</a>
                </div>
              </div>
            </div>
          </div>
          <!-- Plus Tier -->
          <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">
                  Payfi
                </h5>
                <hr>
                <img
                  class="w-100"
                  src="https://www.dreamworksdirect.com/wp-content/uploads/2022/05/Logo-Test-10.png"
                  style="height: 120px;"
                  alt="..."
                >
                <h5 class="mt-2 text-black-50 text-center text-muted">
                  Pay in 6 installments.
                </h5>
                <hr>
                <ul class="fa-ul">
                  <li><span>&#10003;</span>Shopping Limit - 3,000,000</li>
                  <li><span>&#10003;</span>Only for employed customers</li>
                  <li><span>&#10003;</span>2.5% Monthly Interest</li>
                  <li><span>&#10003;</span>1-3 months Installments</li>
                  <li><span>&#10003;</span>38.33% Initial Deposit</li>
                  <li><span>&#10003;</span>Swift Processing</li>
                  <li><span>&#10003;</span>0-3 Working Days Delivery</li>
                </ul>
                <div class="d-grid">
                  <a href="#" class="btn btn-primary text-uppercase">Button</a>
                </div>
              </div>
            </div>
          </div>
          <!-- Pro Tier -->
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">
                  Carbon Zero
                </h5>
                <img
                  class="w-100"
                  height="250"
                  style="margin-left: 10%"
                  src="https://techeconomy.ng/wp-content/uploads/2022/06/Carbon-Zero-.png"
                  alt="..."
                >
                <h6 class="mt-2 text-muted text-black-50">
                  Pay in 4-6 installments.
                </h6>
                <hr>
                <ul>
                  <li><span>&#10003;</span>Shopping Limit - 5,000,000</li>
                  <li><span>&#10003;</span>1-3 months Installments (0% Interest)</li>
                  <li><span>&#10003;</span>4-6 months Installments (2% Interest)</li>
                  <li><span>&#10003;</span>0% Monthly Interest</li>
                  <li><span>&#10003;</span>25% Initial Deposit</li>
                  <li><span>&#10003;</span>Swift Processing</li>
                  <li><span>&#10003;</span>0-3 Working Days Delivery</li>
                </ul>
                <div class="d-grid mt-5">
                  <nuxt-link to="/installments/carbon" class="btn btn-primary text-uppercase">
                    Get Started
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center text-center mt-3">
          <!-- Free Tier -->
          <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">
                  <span>Lipa Later</span>
                </h5>
                <img
                  src="data:image/png;base64,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"
                  class="w-100 mt-2"
                  height="200"
                  alt="..."
                >
                <h6 class="text-muted text-center mt-2">
                  Pay in 2-12 installments
                </h6>
                <hr>
                <ul class="mt-2">
                  <li><span>&#10003;</span>Shopping Limit - 20,000,000</li>
                  <li><span>&#10003;</span>5% monthly interest</li>
                  <li><span>&#10003;</span>3-12 installments</li>
                  <li><span>&#10003;</span>20% down-payment</li>
                  <li><span>&#10003;</span>Swift Processing</li>
                  <li><span>&#10003;</span>0-3 Working Days Delivery</li>
                </ul>
                <div class="d-grid mt-8">
                  <nuxt-link to="installments/lipa" class="btn btn-primary text-uppercase">
                    Get Started
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <!-- Plus Tier -->
          <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">
                  Payfi
                </h5>
                <hr>
                <img
                  src="https://www.dreamworksdirect.com/wp-content/uploads/2022/05/Logo-Test-10.png"
                  style="margin-left: 30%; height: 100px; width: 120px;"
                  alt="..."
                >
                <h5 class="mt-2 text-black-50 text-center text-muted">
                  Pay in 6 installments.
                </h5>
                <hr>
                <ul class="fa-ul">
                  <li><span>&#10003;</span>Shopping Limit - 3,000,000</li>
                  <li><span>&#10003;</span>Only for employed customers</li>
                  <li><span>&#10003;</span>2.5% Monthly Interest</li>
                  <li><span>&#10003;</span>1-3 months Installments</li>
                  <li><span>&#10003;</span>38.33% Initial Deposit</li>
                  <li><span>&#10003;</span>Swift Processing</li>
                  <li><span>&#10003;</span>0-3 Working Days Delivery</li>
                </ul>
                <div class="d-grid">
                  <a href="#" class="btn btn-primary text-uppercase">Button</a>
                </div>
              </div>
            </div>
          </div>
          <!-- Pro Tier -->
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">
                  Klump
                </h5>
                <img
                  src="https://media-exp2.licdn.com/dms/image/C4D0BAQEG1kA32l-lSg/company-logo_200_200/0/1642666580979?e=2147483647&v=beta&t=V3F5hGV9AwOlRZnPf6PnNmqePDLVB3JTd_VQe1DAnRc"
                  width="100"
                  class="mt-2"
                  height="100"
                  style="margin-left: 35%;"
                  alt="..."
                >
                <h5 class="mt-2 text-muted text-black-50 text-center">
                  Pay in 3 installments
                </h5>
                <hr>
                <ul>
                  <li><span>&#10003;</span>Shopping Limit - 500,000</li>
                  <li><span>&#10003;</span>3 Months Installments</li>
                  <li><span>&#10003;</span> 25% Initial Deposit</li>
                  <li><span>&#10003;</span>2% Monthly Interest</li>
                  <li><span>&#10003;</span>Swift Processing</li>
                  <li><span>&#10003;</span> 0-3 Working Days Delivery</li>
                </ul>
                <div class="d-grid mt-6">
                  <nuxt-link to="/installments/klump" class="btn btn-primary text-uppercase">
                    Get Started
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- why you should -->
    <section class="container mt-3">
      <div class="row">
        <div class="col-md-6 col-sm-12 justify-content-center">
          <div class="mt-4">
            <h5 class="mt-2 text-black-50 text-center">
              Why you should get your device in installments.
            </h5>
          </div>
          <div>
            <h5 class="mt-2 text-black-50 text-center">
              You Shouldn't have to break the bank everytime to get a new device.
            </h5>
          </div>
          <div>
            <h5 class="mt-2 text-black-50">
              Servicehub dey for you.
            </h5>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-4 align-items-center">
              <b-iconstack font-scale="5">
                <b-icon stacked icon="circle-fill" variant="danger" />
                <b-icon stacked icon="x-circle" scale="0.5" variant="white" />
                <b-icon stacked icon="circle" variant="danger" />
              </b-iconstack>
              <h5>
                Zero <br>Collateral
              </h5>
            </div>
            <div class="col-md-4">
              <b-iconstack font-scale="5">
                <b-icon stacked icon="circle-fill" variant="danger" />
                <b-icon stacked icon="tag" scale="0.5" variant="white" />
                <b-icon stacked icon="circle" variant="danger" />
              </b-iconstack>
            </div>
            <div class="col-md-4">
              <b-iconstack font-scale="5">
                <b-icon stacked icon="circle-fill" variant="danger" />
                <b-icon stacked icon="calender2-week" scale="0.5" variant="white" />
                <b-icon stacked icon="circle" variant="danger" />
              </b-iconstack>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-4">
              <b-iconstack font-scale="5">
                <b-icon stacked icon="circle-fill" variant="danger" />
                <b-icon stacked icon="x-circle" scale="0.5" variant="white" />
                <b-icon stacked icon="circle" variant="danger" />
              </b-iconstack>
            </div>
            <div class="col-md-4">
              <b-iconstack font-scale="5">
                <b-icon stacked icon="circle-fill" variant="danger" />
                <b-icon stacked icon="tag-fill" scale="0.5" variant="white" />
                <b-icon stacked icon="circle" variant="danger" />
              </b-iconstack>
            </div>
            <div class="col-md-4">
              <b-iconstack font-scale="5">
                <b-icon stacked icon="circle-fill" variant="danger" />
                <b-icon stacked icon="calender2" scale="0.5" variant="white" />
                <b-icon stacked icon="circle" variant="danger" />
              </b-iconstack>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- how to -->
    <section class="container mt-3">
      <div class="align-items-center">
        <h5 class="text-center bg-gray w-auto">
          How it works
        </h5>
      </div>
      <div class="row" />
    </section>
    <div class="wave-top mt-3" />
    <!--testimonials -->
    <section>
      <div class="wave-mid align-items-center">
        <h3 class="text-white text-center">
          Testimonials
        </h3>
      </div>
      <div class="wave-bottom" />
    </section>
    <!-- support -->
    <section class="container mt-3">
      <div class="row">
        <button
          class="btn align-self-center justify-content-center"
          style="border-radius: 25%; width: fit-content; background-color: lightgrey;"
        >
          Support
        </button>
      </div>
      <div class="row mt-2">
        <div class="col-md-5 mr-1">
          <img src="/assets/images/demos/demo-4/cats/1.png" alt="support">
        </div>
        <div class="col-md-6">
          <div class="accordion" role="tablist">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button v-b-toggle.accordion-1 block variant="light" class="font-weight-bold">
                  Accordion 1
                </b-button>
              </b-card-header>
              <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
                  <b-card-text>{{ text }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button v-b-toggle.accordion-2 block variant="light" class="font-weight-bold">
                  Accordion 2
                </b-button>
              </b-card-header>
              <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>This ois another test</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button v-b-toggle.accordion-3 block variant="light" class="font-weight-bold">
                  Accordion 3
                </b-button>
              </b-card-header>
              <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>This is just a test</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'InstallmentsPage'
}
</script>

<style scoped>
.wave-top {
  position: relative;
  margin-top: 20px;
}

.wave-top::before,
.wave-top::after {
  border-bottom: 5px solid rgba(237, 30, 30, 1);
}

.wave-top::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 10px;
  background-size: 20px 40px;
  background-image: radial-gradient(circle at 10px -15px, transparent 20px, rgba(237, 30, 30, 1) 21px);
}

.wave-top::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 15px;
  background-size: 40px 40px;
  background-image: radial-gradient(circle at 10px 26px, rgba(237, 30, 30, 1) 20px, transparent 21px);
}

.wave-mid {
  background-color: rgba(237, 30, 30, 1);
  height: 50px;
}

.wave-bottom {
  position: relative;
}

.wave-bottom::before,
.wave-bottom::after {
  border-top: 5px solid rgba(237, 30, 30, 1);
}

.wave-bottom::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 10px;
  background-size: 20px 40px;
  background-image: radial-gradient(circle at 10px -15px, transparent 20px, #fff 21px);
}

.wave-bottom::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 15px;
  background-size: 40px 40px;
  background-image: radial-gradient(circle at 10px 26px, #fff 20px, transparent 21px);
}
.card-img-top{
  margin-left: 30%;
  margin-top: 5%;
  width: 150px;
  height: 150px;
}
li{
  margin-top: 10px;
  margin-bottom: 10px;
}
.card{
  max-height: 700px;
}
section.pricing {
  background: #007bff;
  background: linear-gradient(to right, #0062E6, #33AEFF);
}

.pricing .card {
  border: none;
  border-radius: 1rem;
  transition: all 0.2s;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.pricing hr {
  margin: 1.5rem 0;
}

.pricing .card-title {
  margin: 0.5rem 0;
  font-size: 0.9rem;
  letter-spacing: .1rem;
  font-weight: bold;
}

.pricing .card-price {
  font-size: 3rem;
  margin: 0;
}

.pricing .card-price .period {
  font-size: 0.8rem;
}

.pricing ul li {
  margin-bottom: 1rem;
}

.pricing .text-muted {
  opacity: 0.7;
}

.pricing .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: .1rem;
  font-weight: bold;
  padding: 1rem;
  opacity: 0.7;
  transition: all 0.2s;
}

/* Hover Effects on Card */

@media (min-width: 992px) {
  .pricing .card:hover {
    margin-top: -.25rem;
    margin-bottom: .25rem;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);
  }

  .pricing .card:hover .btn {
    opacity: 1;
  }
}
</style>
