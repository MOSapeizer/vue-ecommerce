<template>
  <div class="container p-0">
    <div class="information" v-html="information"></div>
  </div>
</template>

<script>
  export default {
    name: 'landing-page',
    data () {
      return {
        information: '<img width="100%" src="https://dreamkisstw.com/images/1512627085372.jpg" alt="">'
      }
    }
  }
</script>

<style scoped>
</style>
