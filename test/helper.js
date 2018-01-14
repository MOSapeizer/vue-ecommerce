export const helper = (wrapper, expect) => {

  return {
    input: (selector, value) => {
      wrapper.find(selector).element.value = value
    },

    click: (selector) => {
      wrapper.find(selector).trigger('click')
    },

    submit: (selector) => {
      wrapper.find(selector).trigger('submit')
    },

    contain: (selector) => {
      expect(wrapper.contains(selector)).toBe(true)
    },

    notContain: (selector) => {
      expect(wrapper.contains(selector)).toBe(false)
    },

    picture: (name, selector) => {
      let wrap = selector ? wrapper.find(selector) : wrapper

      expect(wrap.is("img")).toBe(true);
      expect(wrap.element.src).toContain(name)
    },

    hasPicture: (name, selector) => {
      let wrap = selector ? wrapper.find(selector) : wrapper

      wrap = wrap.find('img')
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
