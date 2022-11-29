<template>
  <no-ssr>
    <CarouselComp :autoplay="true">
      <img src="https://res.cloudinary.com/darapaudl/image/upload/v1653407159/small_iphone_11_pro_max_2_cb81cab0f0.jpg" alt="">

      <img src="https://res.cloudinary.com/darapaudl/image/upload/v1653267284/Samsung_Galaxy_S20_Ultra_9a8794cdeb.webp" alt="">

      <img src="https://res.cloudinary.com/darapaudl/image/upload/v1653266595/small_apple_macbook_pro_13_m1_8gb_512gb_ssd_laptop_cef3c11936.jpg" alt="">

      <img src="https://res.cloudinary.com/darapaudl/image/upload/v1653343808/medium_series6_red_2c5dfd3a7e.webp" alt="">

      <img src="https://res.cloudinary.com/darapaudl/image/upload/v1653267078/Beats_EP_On_Ear_Headphones_ce1cefa7d7.jpg" alt="">

      <img src="https://res.cloudinary.com/darapaudl/image/upload/v1653267080/small_beatsbud_3_0bc7ab72c7.jpg" alt="">
    </CarouselComp>
  </no-ssr>
</template>

<script>
export default {
  name: 'TrendCarousel',
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
