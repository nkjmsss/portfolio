<template lang="pug">
  transition(
    name="fade"
  )
    .hide(
      v-if="show"
    )
</template>

<script>
export default {
  computed: {
    show() {
      return this.$store.state.hideFrameOutside
    },
  },
}
</script>

<style lang="scss" scoped>
.hide {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: $margin;
  pointer-events: none;
  z-index: 400;
  background-color: $white;

  &::after {
    content: '';
    display: block;
    border: 3px solid $primary;
    width: 100%;
    height: 100%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
