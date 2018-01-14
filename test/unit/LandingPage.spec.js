import { mount } from 'vue-test-utils'
import LandingPage from '~/components/LandingPage'
import { helper } from '~/test/helper'

describe('LandingPage.vue', () => {
  let wrapper, expectTo, model

  beforeEach(() => {

    model = {
      html: '<img id="testImage" src="sample.jpg" alt="">',
    }

    wrapper = mount(LandingPage, {propsData: model})
    expectTo = helper(wrapper, expect)
  })

  it('要有產品資訊', () => {
    expectTo.contain('.information')
    expectTo.see(model.html, '.information')
  })
})
