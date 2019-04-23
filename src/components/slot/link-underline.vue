<template lang="pug">
  nuxt-link.link--underline(
    :to="to"
    exact
    :tabIndex="tabIndex"
    :style="style"
  )
    slot
</template>

<script>
import em from '~/plugins/em'

export default {
  name: 'VLink',

  props: {
    to: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    classList: [],
    lineWidth: 0,
  }),

  computed: {
    isActive() {
      return this.classList.findIndex(v => v === 'nuxt-link-active') >= 0
    },

    tabIndex() {
      return this.isActive ? -1 : 0
    },

    style() {
      return {
        '--line-width': `${this.lineWidth}px`,
      }
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

  mounted() {
    this.lineWidth = em(0.1, this.$el)
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
    height: 1px;
    height: var(--line-width, 1px);
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
