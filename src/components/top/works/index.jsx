import Vue from 'vue'
import webContainer from './web.vue'
import dtpContainer from './dtp.vue'
import logoContainer from './logo.vue'

export default Vue.component('works', {
  functional: true,
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  render: function(createElement, context) {
    function wrapperType() {
      const item = context.props.item
      const component = {
        web: webContainer,
        dtp: dtpContainer,
        logo: logoContainer,
      }[item.type]

      if (!component) {
        throw new Error(`Invalid item type "${item.type}"`)
      }

      return component
    }

    return createElement(
      wrapperType(),
      {
        props: context.props,
      },
      context.children
    )
  },
})
