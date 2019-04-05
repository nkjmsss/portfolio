<template lang="pug">
  header
    v-hamberger(
      :isOpen="menuOpen"
      @hambergerClick="toggleOpen"
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

  methods: {
    toggleOpen() {
      this.menuOpen = !this.menuOpen
    },
  },
}
</script>

<style lang="scss" scoped></style>
