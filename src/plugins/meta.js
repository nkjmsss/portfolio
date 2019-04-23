import basepath from '~/assets/config/basepath'

function pascal(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default {
  head() {
    const meta = []

    if (this.meta.description) {
      meta.push({
        hid: 'description',
        name: 'description',
        content: this.meta.description,
      })
    }

    if (this.meta.type) {
      meta.push({
        hid: 'og:type',
        property: 'og:type',
        content: this.meta.type,
      })
    }

    if (this.meta.title) {
      meta.push({
        hid: 'og:title',
        property: 'og:title',
        content: this.meta.title,
      })
    }

    if (this.meta.description) {
      meta.push({
        hid: 'og:description',
        property: 'og:description',
        content: this.meta.description,
      })
    }

    if (this.meta.url) {
      meta.push({
        hid: 'og:url',
        property: 'og:url',
        content: basepath + this.meta.url,
      })
    }

    if (this.meta.image) {
      meta.push({
        hid: 'og:image',
        property: 'og:image',
        content: basepath + this.meta.image,
      })
    }

    return {
      title: this.meta.title || pascal(this.$route.name),
      meta: meta,
    }
  },

  data: () => ({
    meta: {},
  }),
}
