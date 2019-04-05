<template lang="pug">
  .header__content
    .header__content__wrap
      .header__content__inner(
        :class="{'header__content__inner--open': isOpen}"
      )
        header-inner
</template>

<script>
import headerInner from './inner'

export default {
  components: {
    headerInner,
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
$duration: 0.6s;

.header__content {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: $margin;
  transform-style: preserve-3d;
  perspective: 200vw;
  display: flex;
  justify-content: flex-end;
  z-index: 500;

  &__wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  &__inner {
    width: 100%;
    height: 100%;
    background-color: $primary;
    transition: ease-out $duration;
    transform: rotateY(-150deg);
    transform-origin: right;
    overflow: hidden;

    &--open {
      transform: rotateY(0deg);
    }
  }
}
</style>
