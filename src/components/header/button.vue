<template lang="pug">
  .hamberger(
    :class="{'hamberger--open': isOpen}"
    @click="emitHambergerClick"
  )
    span.hamberger__line
</template>

<script>
export default {
  name: 'Hamberger',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    emitHambergerClick() {
      this.$emit('hambergerClick')
    },
  },
}
</script>

<style lang="scss" scoped>
$size: 32px;
$vertical-padding: 8px;

.hamberger {
  position: absolute;
  top: $margin * 2.5;
  right: $margin * 2.5;
  width: $size;
  height: $size;
  cursor: pointer;
  z-index: 10000;

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
    right: 0;
    transform: translateY(-50%);
    transition: ease-out 0.3s;
    opacity: 1;
  }

  &::before {
    top: $vertical-padding / 2;
  }

  &__line {
    top: $size / 2;
  }

  &::after {
    top: $size - $vertical-padding / 2;
    width: $size / 1.618;
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
      top: $size / 2;
    }
  }

  &--open &__line {
    transform: translate(200%, -50%);
    opacity: 0;
  }
}
</style>
