import { mount } from 'vue-test-utils'
import Logo from '~/components/Logo'

describe('Logo.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Logo)
  })

  it('should has a name', () => {
    expect(wrapper.name()).toBe("logo")
  })
})
