<template>
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
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'product-selection',
    created () {
      this.selectedProductId = this.hasProducts() ? this.products[0].id : undefined
      this.collects = this.hasProducts() ? this.products[0].types : []
    },
    props: {
      title: {
        type: String,
        default: '產品標題'
      },
      types: {
        type: Array,
        required: true
      },
      products: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        collects: [],
        selectedProductId: undefined
      }
    },
    methods: {
      ...mapMutations(['add']),
      hasProducts () {
        return this.products.length > 0
      },

      updateProductId () {
        this.selectedProductId = this.products.find(product =>
          this.collects.reduce((result, collect) => result && product.types.includes(collect), true)
        )
      },

      addToCart () {
        this.add(this.selectedProductId)
      }
    },
    computed: {
      ...mapState(['cart']),
      selectedProductPrice () {
        let product = this.products.find(product => product.id === this.selectedProductId)
        return product ? product.price : 0
      }
    }
  }
</script>

<style scoped>

</style>
