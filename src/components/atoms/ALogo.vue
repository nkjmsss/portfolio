<template lang="pug">
  .logo(
    :style="style"
    :class="className"
  )
    .logo__txt nkjmsss
</template>

<script>
import em from '~/lib/helpers/em.js'

export default {
  name: 'Logo',

  props: {
    fontsize: {
      type: String,
      default: '1rem',
    },
    color: {
      type: String,
      default: 'black',
      validator: function(v) {
        return ['black', 'white'].indexOf(v.toLowerCase()) !== -1
      },
    },
  },

  data: () => ({
    lineWidth: 0,
  }),

  computed: {
    style() {
      return {
        'font-size': this.fontsize,
        '--line-width': `${this.lineWidth}px`,
      }
    },

    className() {
      return `logo--${this.color}`
    },
  },

  mounted() {
    this.lineWidth = em(0.08, this.$el)
  },
}
</script>

<style lang="scss" scoped>
.logo {
  $height: 4.375em;

  height: $height;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;

  &__txt {
    margin-bottom: 0.1em;
    color: inherit;
    font-size: 2em;
    font-style: italic;
    line-height: 1;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    display: block;
    width: 3.25em;
    height: 2px;
    height: var(--line-width, 2px);
  }

  &::before {
    top: 0;
    transform: translate(-50%, 100%);
  }

  &::after {
    bottom: 0;
    transform: translate(-50%, -100%);
  }

  // ===========
  // color theme
  // ===========
  &--white {
    color: $white;

    &::before,
    &::after {
      background-color: $white;
    }
  }

  &--black {
    color: $black;

    &::before,
    &::after {
      background-color: $black;
    }
  }
}
</style>
