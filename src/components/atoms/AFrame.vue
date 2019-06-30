<template lang="pug">
  .a-frame(
    :style="style"
  )
</template>

<script>
export default {
  name: 'AFrame',

  data: () => ({
    height: 0,
    width: 0,
  }),

  computed: {
    style() {
      if (this.height && this.width) {
        return {
          height: `${this.height}px`,
          width: `${this.width}px`,
        }
      }
      return {}
    },
  },

  mounted() {
    this.setWindowSize()
    window.addEventListener('resize', this.setWindowSize)
  },

  methods: {
    setWindowSize() {
      this.height = window.innerHeight
      this.width = window.innerWidth
    },
  },
}
</script>

<style lang="scss" scoped>
.a-frame {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  border: $margin solid rgba($color: $white, $alpha: 0.4);
  pointer-events: none;
  z-index: 100;

  &::after {
    content: '';
    display: block;
    border: 3px solid $primary;
    width: 100%;
    height: 100%;
  }

  @include mq(lg) {
    border-width: $margin-pc;
  }
}
</style>
