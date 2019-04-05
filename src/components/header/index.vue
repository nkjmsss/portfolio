<template lang="pug">
  header
    v-hamberger(
      :isOpen="menuOpen"
      @hambergerClick="toggleOpen"
    )
</template>

<script>
import vHamberger from './button'

export default {
  name: 'VHeader',

  components: {
    vHamberger,
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
