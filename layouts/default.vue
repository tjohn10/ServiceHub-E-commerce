<template>
  <div>
    <Header v-model="search" />
    <div>
      <!-- Page content -->
      <div class="main mt-4">
        <Nuxt />
      </div>
    </div>
    <Footer class="mt-4" />
  </div>
</template>

<script>

export default {
  name: 'DefaultLayout',
  data () {
    return {
      search: ''
    }
  }
}
</script>
