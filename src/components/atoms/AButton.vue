<template lang="pug">
  button.a-button(
    :type="type"
  )
    slot
</template>

<script>
export default {
  name: 'AButton',
  props: {
    type: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.a-button {
  $height: 52px;
  $width: 130px;
  $border: 2px solid $primary;
  $border_dif: 4px;

  color: $primary;
  line-height: $height;
  height: $height;
  width: $width;
  text-align: center;
  position: relative;
  outline: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 30%;
    height: 30%;
    border: $border;
    transition: ease-out 0.3s;
  }

  &::before {
    top: 0;
    left: 0;
    border-right-color: transparent;
    border-bottom-color: transparent;
  }

  &::after {
    bottom: 0;
    right: 0;
    border-left-color: transparent;
    border-top-color: transparent;
  }

  &:hover,
  &:focus {
    &::before,
    &::after {
      width: calc(100% - #{$border_dif});
      height: calc(100% - #{$border_dif});
      border: $border;
    }
  }
}
</style>
