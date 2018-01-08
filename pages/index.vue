<template>
  <section class="container p-0">
    <landing-page></landing-page>
  </section>
</template>

<script>
  import LandingPage from '~/components/LandingPage'

  export default {
    components: {
      LandingPage
    }
  }
</script>

<style>
  body {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  }
</style>
