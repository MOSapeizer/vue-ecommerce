import { mount, shallow, createLocalVue } from 'vue-test-utils'
import LandingPage from '~/components/LandingPage'
import { helper } from '~/test/helper'
import Vuex from 'vuex'

describe('LandingPage.vue', () => {
  let wrapper, expectTo, model

  describe('產品資訊區塊', () => {

    beforeEach(() => {

      model = {
        html: '<img id="testImage" src="sample.jpg" alt="">',
      }

      wrapper = mount(LandingPage, {propsData: model})
      expectTo = helper(wrapper, expect)
    })

    it('要有產品資訊', () => {
      expectTo.contain('.information')
      expectTo.see(model.information, '.information')
    })
  })
})
