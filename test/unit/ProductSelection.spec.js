import { shallow, createLocalVue } from 'vue-test-utils'
import ProductSelection from '~/components/ProductSelection'
import { helper } from '~/test/helper'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('ProductSelection.vue', () => {
  let wrapper, expectTo, model, mutations, store
  const cartPanel = '.add-to-cart-panel'

  beforeEach(() => {
    mutations = {
      add: jest.fn(),
    }
    store = new Vuex.Store({
      state: {},
      mutations
    })

    model = {
      title: '產品模組標題',
      types: [
        [{id: 1, name: '紅'}, {id: 2, name: '黑'}, {id: 3, name: '白'}],
        [{id: 4, name: 'S'}, {id: 5, name: 'M'}, {id: 6, name: 'L'}]
      ],
      products: [
        {id: 1, types: [1, 4], price: 350},
        {id: 2, types: [2, 5], price: 350},
        {id: 3, types: [3, 6], price: 350}
      ]
    }

    wrapper = shallow(ProductSelection, {propsData: model, store, localVue})
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
    expectTo.see('紅', cartPanel)
    expectTo.see('S', cartPanel)

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

  it('要有加入購物車的按鈕', () => {
    expectTo.contain('.add-to-cart-button')
    expectTo.see('加入購物車', '.add-to-cart-button')
  })

  it('按加入，要觸發加入購物車的 action', () => {
    expectTo.click('.add-to-cart-button')
    expect(mutations.add).toHaveBeenCalled()
  })
})
