import Atoms from '~/components/atoms/index.js'
import Molecules from '~/components/molecules/index.js'
import Organisms from '~/components/organisms/index.js'
import Helpers from '~/components/helpers/index.js'

export default {
  install(Vue) {
    const atomComponents = Object.entries(Atoms)
    const moleculeComponents = Object.entries(Molecules)
    const organismComponents = Object.entries(Organisms)
    const helperComponents = Object.entries(Helpers)
    const components = [
      ...atomComponents,
      ...moleculeComponents,
      ...organismComponents,
      ...helperComponents,
    ]
    components.forEach(component => {
      Vue.component(component[0], component[1])
    })
  },
}
