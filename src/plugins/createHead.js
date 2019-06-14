export default {
  install(Vue) {
    Vue.prototype.$createHead = function({
      title = null,
      image = null,
      description = null,
    }) {
      const meta = []
      if (title) {
        meta.push({
          hid: 'og:title',
          name: 'og:title',
          content: title + ' | nkjmsss',
        })
      }
      if (image) {
        meta.push({
          hid: 'og:image',
          name: 'og:image',
          content: image,
        })
        meta.push({
          hid: 'twitter:image',
          name: 'twitter:image',
          content: image,
        })
      }
      if (description) {
        meta.push({
          hid: 'description',
          name: 'description',
          content: description,
        })
        meta.push({
          hid: 'og:description',
          name: 'og:description',
          content: description,
        })
      }
      return {
        title: title || '',
        meta,
      }
    }
  },
}
