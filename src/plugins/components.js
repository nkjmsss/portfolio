import Atoms from '~/components/atoms/index.js'

export default {
  install(Vue) {
    const atomComponents = Object.entries(Atoms)
    const components = [...atomComponents]
    components.forEach(component => {
      Vue.component(component[0], component[1])
    })
  },
}
