import Vue from 'vue'

function $sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

Vue.mixin({
  methods: {
    $sleep,
  },
})

export { $sleep }
