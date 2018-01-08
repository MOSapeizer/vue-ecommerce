<template>
  <div class="container p-0">
    <div class="information" v-html="information"></div>
    <div class="add-to-cart-panel">
      <div class="title" v-text="title"></div>
      <select name="product" id="" v-model="selectedProductId">
        <option v-for="(product, key) in products" :value="product.id" :key="product.id" v-text="product.title"></option>
      </select>
      <span class="price">{{ selectedProductPrice }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'landing-page',
    created () {
      this.selectedProductId = this.hasProducts() ? this.products[0].id : undefined
    },
    methods: {
      hasProducts () {
        return this.products.length > 0
      }
    },
    computed: {
      selectedProductPrice () {
        let product = this.products.find(product => product.id === this.selectedProductId)
        return product ? product.price : 0
      }
    },
    data () {
      return {
        title: '',
        information: '',
        products: [],
        selectedProductId: undefined
      }
    }
  }
</script>

<style scoped>
</style>
