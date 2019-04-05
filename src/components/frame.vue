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
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: $margin;

  &::after {
    content: '';
    display: block;
    border: 3px solid $primary;
    width: 100%;
    height: 100%;
  }
}
</style>
