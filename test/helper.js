export const helper = (wrapper, expect) => {

  return {
    input: (selector, value) => {
      wrapper.find(selector).element.value = value
    },

    click: (selector) => {
      wrapper.find(selector).trigger('click')
    },

    contain: (selector) => {
      expect(wrapper.contains(selector)).toBe(true)
    },

    notContain: (selector) => {
      expect(wrapper.contains(selector)).toBe(false)
    },

    picture: (name, selector) => {
      let wrap = selector ? wrapper.find(selector) : wrapper

      expect(wrap.element.src).toContain(name)
    },

    name: (name) => {
      expect(wrapper.name()).toEqual(name)
    },

    see: (content, selector) => {
      let wrap = selector ? wrapper.find(selector) : wrapper

      expect(wrap.html()).toContain(content)
    },

    cannotSee: (content, selector) => {
      let wrap = selector ? wrapper.find(selector) : wrapper

      expect(wrap.html()).not.toContain(content)
    }
  }
}
