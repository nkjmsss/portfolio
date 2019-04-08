<template lang="pug">
  .frame
</template>

<script>
export default {
  name: 'VFrame',
}
</script>

<style lang="scss" scoped>
.frame {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  border: $margin solid rgba($color: $white, $alpha: 0.6);
  pointer-events: none;
  z-index: 100;

  &::after {
    content: '';
    display: block;
    border: 3px solid $primary;
    width: 100%;
    height: 100%;
  }
}
</style>
