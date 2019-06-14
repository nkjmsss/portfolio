import Atoms from '~/components/atoms/index.js'
import Molecules from '~/components/molecules/index.js'

export default {
  install(Vue) {
    const atomComponents = Object.entries(Atoms)
    const moleculeComponents = Object.entries(Molecules)
    const components = [...atomComponents, ...moleculeComponents]
    components.forEach(component => {
      Vue.component(component[0], component[1])
    })
  },
}
