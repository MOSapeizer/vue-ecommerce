import { mount } from 'vue-test-utils'
import LandingPage from '~/components/LandingPage'
import { helper } from '~/test/helper'

describe('LandingPage.vue', () => {
  let wrapper, expectTo, model

  describe('產品資訊區塊', () => {

    beforeEach(() => {

      model = {
        information: '<img id="testImage" src="sample.jpg" alt="">',
      }

      wrapper = mount(LandingPage, {data: model})
      expectTo = helper(wrapper, expect)
    })

    it('要有產品資訊', () => {
      expectTo.contain('.information')
      expectTo.see(model.information, '.information')
    })
  })

  describe('產品選擇區塊', () => {

    const cartPanel = '.add-to-cart-panel'

    beforeEach(() => {
      model = {
        title: '產品模組標題',
        products: [
          {id: 1, title: '產品方案', price: 350},
          {id: 2, title: '產品方案2', price: 450},
        ]
      }

      wrapper = mount(LandingPage, {data: model})
      expectTo = helper(wrapper, expect)
    })

    it('要存在', () => {
      expectTo.contain(`${cartPanel}`)
    })

    it('顯示產品標題', () => {
      const $productTitle = `${cartPanel} .title`
      expectTo.contain($productTitle)
      expectTo.see(model.title, $productTitle)
    })

    it('預設顯示第一個產品的資訊', () => {
      const $productSelect = `${cartPanel} select`
      expectTo.contain($productSelect)
      expectTo.see('產品方案', $productSelect)

      const $productPrice = `${cartPanel} .price`
      expectTo.contain($productPrice)
      expectTo.see(model.products[0].price, $productPrice)
    })

    it('選擇產品後，要顯示對應的價錢', () => {
      // Vue-test-utils 並沒有提供更好的方法：
      // 要追蹤這個 issue 請到 https://github.com/vuejs/vue-test-utils/issues/260
      wrapper.setData({
        selectedProductId: 2
      })

      // 我比較想用的方法
      // const $productOptions = `${cartPanel} select option`
      // wrapper.findAll($productOptions).at(1).trigger('click')

      const $productPrice = `${cartPanel} .price`
      expectTo.contain($productPrice)
      expectTo.see(model.products[1].price, $productPrice)
    })
  })

})
