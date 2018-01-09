export const state = () => ({
  cart: {
    products: []
  }
})

export const mutations = {
  add (state, productId) {
    let product = state.cart.products.find(product => product.id === productId)
    product ? product.count += 1 : this.cart.products.push({id: productId, count: 1})
  }
}
