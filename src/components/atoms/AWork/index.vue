<script>
import webContainer from './web.vue'

export default {
  name: 'AWork',
  functional: true,
  props: {
    item: {
      type: Object,
      required: true,
    },
    maxRowCount: {
      type: Number,
      required: true,
    },
  },
  render: function(createElement, context) {
    function wrapperType() {
      const item = context.props.item
      const component = {
        web: webContainer,
        dtp: webContainer, // TODO
        logo: webContainer, // TODO
        others: webContainer, // TODO
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
}
</script>
