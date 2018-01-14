import { mount } from 'vue-test-utils'
import Checkout from '~/pages/checkout'
import sinon from 'sinon'
import { helper } from '~/test/helper'

describe('Checkout.vue', () => {
  let wrapper, expectTo, products

  beforeEach(() => {
    products = [
      {
        id: 1, image: '/product-1.png', title: '我是產品標題',
        types: [{name: '顏色', value: '紅'}, {name: '尺寸', value: 'M'}]
      }
    ]

    wrapper = mount(Checkout)
    wrapper.setData({products})
    expectTo = helper(wrapper, expect)
  })

  describe('購物車的區塊', () => {

    it('要存在', () => {
      expectTo.contain('.cart-section')
    })

    it('購物車區塊要顯示產品圖片', () => {
      expectTo.hasPicture(products[0].image, '.cart-section .item:first-child .item-picture')
    })

    it('購物車區塊要有產品標題', () => {
      expectTo.see(products[0].title, '.cart-section .item:first-child .item-title')
    })

    it('購物車區塊要有產品方案', () => {
      expectTo.see('顏色：紅', '.cart-section .item:first-child .item-types')
      expectTo.see('尺寸：M', '.cart-section .item:first-child .item-types')
    })
  })


  describe('收件者資料的區塊', () =>{
    it('要存在', () => {
      expectTo.contain('.checkout-information')
    })

    it('要能輸入姓名', () => {
      expectTo.contain('.checkout-information input#full-name')
    })

    it('要能輸入電話', () => {
      expectTo.contain('.checkout-information input#phone')
    })

    it('要能輸入地址', () => {
      expectTo.contain('.checkout-information input#address')
    })

    it('要能輸入 Email', () => {
      expectTo.contain('.checkout-information input#email')
    })

    it('要顯示金額', () => {
      let products = [
        {unitPrice: 350}, {unitPrice: 450}
      ]

      wrapper.setData({products})
      expectTo.see(
        products.reduce((total,p) => total + p.unitPrice, 0),
        '.checkout-information .checkout-information-price'
      )
    })

    it('要能送出使用者資訊', () => {
      let form = {
        name: '哥哥母湯',
        email: 'sample@gmail.com',
        address: '猜猜紅心A在哪',
        phone: '0987654321'
      }

      let setOrder = sinon.stub()
      wrapper.setMethods({ setOrder })
      wrapper.setData({ form })
      expectTo.submit('#sendForm')
      expect(setOrder.called).toBe(true)
    })
  })
})
