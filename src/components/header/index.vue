<template lang="pug">
  header
    v-hamberger(
      :isOpen="menuOpen"
      @hambergerClick="toggleMenu"
    )
    v-content(
      :isOpen="menuOpen"
    )
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

  data: () => ({
    menuOpen: false,
  }),

  watch: {
    async menuOpen(before) {
      if (before) {
        await this.$sleep(100)
      }

      this.$store.commit('setHideFrameOutside', this.menuOpen)
    },
  },

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
  },
}
</script>
