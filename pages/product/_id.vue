<template>
  <div class="container p-0">
    <landing-page :html="model.information"></landing-page>
    <product-selection :title="model.title" :types="model.types" :products="model.products"></product-selection>
  </div>
</template>

<script>
  import axios from 'axios'
  import LandingPage from '~/components/LandingPage'
  import ProductSelection from '~/components/ProductSelection'

  export default {
    name: 'product',
    components: {
      LandingPage,
      ProductSelection
    },
    async asyncData ({route}) {
      let model
      try {
        model = await axios.get(`/model/${route.params.id}`)
      } catch (e) {
        model = {information: 'Model not found', title: '我是標題', types: [], products: []}
      }
      return {model}
    }
  }
</script>

<style scoped>

</style>
