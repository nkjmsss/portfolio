<template lang="pug">
  nuxt-link.link--underline(
    :to="to"
    exact
    :tabIndex="tabIndex"
  )
    slot
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    classList: [],
  }),

  computed: {
    isActive() {
      return this.classList.findIndex(v => v === 'nuxt-link-active') >= 0
    },

    tabIndex() {
      return this.isActive ? -1 : 0
    },
  },

  watch: {
    $route: {
      handler() {
        this.setClassList()
      },
      immediate: true,
    },
  },

  methods: {
    setClassList() {
      this.$nextTick(function() {
        this.classList = [].slice.call(this.$el.classList)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.link--underline {
  position: relative;
  display: inline-block;
  height: 1.2em;
  line-height: 1;
  color: inherit;
  text-decoration: inherit;
  overflow: hidden;
  font-family: inherit;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateX(-110%);
    width: 100%;
    height: 0.1em;
    background-color: currentColor;
    transition: ease-out 0.2s;
    transform-origin: left;
  }

  &:not(.nuxt-link-active) {
    &:hover,
    &:focus {
      &::after {
        transform: translateX(0);
      }
    }
  }

  // active link
  &.nuxt-link-active {
    cursor: initial;

    &::after {
      width: 30%;
      transform: translateX(-50%);
      left: 50%;
    }
  }
}
</style>
