<template lang="pug">
  header
    v-hamberger
    v-content
</template>

<script>
import vHamberger from './button'
import vContent from './content'

export default {
  name: 'VHeader',

  components: {
    vHamberger,
    vContent,
  },

  watch: {
    async menuOpen(before) {
      if (before) {
        await this.$sleep(100)
      }

      this.$store.commit('setHideFrameOutside', this.menuOpen)
    },
  },
}
</script>
