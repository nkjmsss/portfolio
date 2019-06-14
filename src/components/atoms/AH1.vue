<template lang="pug">
  h1.a-h1
    slot
</template>

<script>
export default {
  name: 'AH1',
}
</script>

<style lang="scss" scoped>
.a-h1 {
  font-size: 2rem;
  color: $primary;
  text-decoration: underline;
  text-align: center;
  margin-bottom: 1em;

  @include font-en;
}
</style>
