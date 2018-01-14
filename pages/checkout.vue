<template>
  <div>
    <div class="cart-section">
      <div class="item" v-for="product in products">
        <div class="item-picture">
          <img :src="product.image" alt="">
        </div>
        <div class="item-description">
          <h5 class="item-title" v-text="product.title"></h5>
          <div class="item-types">
            <p v-for="type in product.types">{{ type.name }}：{{ type.value }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="checkout-information">
      <form action="/" @submit.prevent="setOrder">
        <div>
          <label for="full-name"> 姓名 </label>
          <input id="full-name" type="text" name="full-name">
        </div>
        <div>
          <label for="phone"> 電話 </label>
          <input id="phone" type="text" name="phone">
        </div>
        <div>
          <label for="address"> 地址 </label>
          <input id="address" type="text" name="address">
        </div>
        <div>
          <label for="email"> Email </label>
          <input id="email" type="text" name="email">
        </div>
        <span class="checkout-information-price" v-text="totalPrice"></span>
        <button id="sendForm" type="submit">送出</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'checkout',
    data () {
      return {
        products: []
      }
    },
    methods: {
      setOrder () {}
    },
    computed: {
      totalPrice () {
        return this.products.reduce((t, p) => t + p.unitPrice, 0)
      }
    }
  }
</script>

<style scoped>

</style>
