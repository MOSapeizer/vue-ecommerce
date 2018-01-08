import { mount } from 'vue-test-utils'
import LandingPage from '~/components/LandingPage'
import { helper } from '~/test/helper'

describe('LandingPage.vue', () => {
  let wrapper, expectTo

  beforeEach(() => {
    wrapper = mount(LandingPage)
    expectTo = helper(wrapper, expect)
  })

  it('要有產品資訊', () => {
    expectTo.contain(".information")

    const information = '<img id="testImage" src="sample.jpg" alt="">'
    wrapper.setData({ information })

    expectTo.see(information, '.information')
  })
})
