<template>
  <div class="container p-0">
    <div class="information" v-html="information"></div>
    <div class="add-to-cart-panel">
      <div class="title" v-text="title"></div>
      <select v-for="(type, index) in types" v-model="collects[index]" @change="updateProductId">
        <option v-for="attribute in type" :value="attribute.id" :key="attribute.id">
          {{ attribute.name }}
        </option>
      </select>
      <span class="price">{{ selectedProductPrice }}</span>
      <button class="add-to-cart-button" @click="addToCart"> 加入購物車</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'landing-page',
    created () {
      this.selectedProductId = this.hasProducts() ? this.products[0].id : undefined
      this.collects = this.hasProducts() ? this.products[0].types : []
    },
    methods: {
      hasProducts () {
        return this.products.length > 0
      },

      updateProductId () {
        this.selectedProductId = this.products.find(product =>
          this.collects.reduce((result, collect) => result && product.types.includes(collect), true)
        )
      },

      addToCart () {
        let product = this.cart.products.find(product => product.id === this.selectedProductId)
        product ? product.count += 1 : this.cart.products.push({id: this.selectedProductId, count: 1})
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
        collects: [],
        types: [],
        products: [],
        cart: {
          products: []
        },
        selectedProductId: undefined
      }
    }
  }
</script>

<style scoped>
</style>
