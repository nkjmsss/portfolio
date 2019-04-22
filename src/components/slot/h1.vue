<template lang="pug">
  h1
    slot
</template>

<style lang="scss" scoped>
h1 {
  font-size: 2rem;
  color: $primary;
  text-decoration: underline;
  text-align: center;
  margin-bottom: 1em;

  @include font-en;
}
</style>
