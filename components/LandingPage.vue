<template>
  <div class="information" v-html="html"></div>
</template>

<script>
  export default {
    name: 'landing-page',
    props () {
      return {
        html: ''
      }
    }
  }
</script>

<style scoped>
</style>
