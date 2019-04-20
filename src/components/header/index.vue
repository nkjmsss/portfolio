<template lang="pug">
  header
    v-hamberger
    v-content
</template>

<script>
import vHamberger from './button'
import vContent from './content'
import { tabTrapEnable, tabTrapDisable } from '~/mixins/tabTrapping'

export default {
  name: 'VHeader',

  components: {
    vHamberger,
    vContent,
  },

  computed: {
    isOpen() {
      return this.$store.state.menuOpen
    },
  },

  watch: {
    isOpen: {
      handler(newval) {
        if (newval) {
          tabTrapEnable(this.$el)
        } else {
          tabTrapDisable()
        }
      },
      imidiate: true,
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  @include font-en;
}
</style>
