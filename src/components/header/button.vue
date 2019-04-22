<template lang="pug">
  .hamberger(
    :class="{'hamberger--open': isOpen}"
    @click="handleClick"
    @keydown.enter="handleClick"
    tabindex="0"
  )
    span.hamberger__line
</template>

<script>
export default {
  name: 'Hamberger',
  computed: {
    isOpen() {
      return this.$store.state.menuOpen
    },
  },
  methods: {
    handleClick(e) {
      // emit event
      this.$store.commit('setMenuOpen', !this.isOpen)

      // focus out
      e.target.blur()
    },
  },
}
</script>

<style lang="scss" scoped>
$size: 32px;
$vertical-padding: 8px;
$margin-ratio: 3;

.hamberger {
  position: fixed;
  top: $margin;
  right: $margin;
  width: $size + $margin * $margin-ratio;
  height: $size + $margin * $margin-ratio;
  cursor: pointer;
  z-index: 10000;
  transition: ease-out 0.2s;

  @include mq(lg) {
    top: $margin-pc;
    right: $margin-pc;
  }

  &::before,
  &::after {
    content: '';
    display: block;
  }

  &::before,
  &__line,
  &::after {
    width: $size;
    height: 2px;
    background-color: $black;
    position: absolute;
    right: $margin * $margin-ratio / 2;
    transform: translateY(-50%);
    transition: all ease-out 0.5s, background-color ease-out 0.2s,
      opacity ease-out 0.3s;
    opacity: 1;
  }

  &::before {
    top: $margin * $margin-ratio / 2 + $vertical-padding / 2;
  }

  &__line {
    top: $margin * $margin-ratio / 2 + $size / 2;
  }

  &::after {
    top: $margin * $margin-ratio / 2 + $size - $vertical-padding / 2;
    width: $size / 1.618;
  }

  // hover, focus
  &:hover,
  &:focus {
    background-color: $primary;
    outline: none;

    &::before,
    &::after {
      background-color: $white;
    }
  }

  &:hover &__line,
  &:focus &__line {
    background-color: $white;
  }

  // menu open
  &--open {
    &::before {
      transform: translateY(-50%) rotate(45deg);
    }

    &::after {
      transform: translateY(-50%) rotate(-45deg);
      width: $size;
    }

    &::before,
    &::after {
      top: $margin * $margin-ratio / 2 + $size / 2;
      background-color: $white;
    }
  }

  &--open &__line {
    opacity: 0;
    background-color: $white;
  }

  // menu open hover, focus
  &--open:hover,
  &--open:focus {
    background-color: $white;

    &::before,
    &::after {
      background-color: $primary;
    }
  }

  &--open:hover &__line,
  &--open:focus &__line {
    background-color: $primary;
  }
}
</style>
