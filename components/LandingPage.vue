<template>
  <div class="information" v-html="html"></div>
</template>

<script>
  export default {
    name: 'landing-page',
    props: {
      html: ''
    }
  }
</script>

<style lang="sass">
  .information img
    width: 100%
    height: auto
</style>
