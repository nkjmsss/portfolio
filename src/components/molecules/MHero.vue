<template lang="pug">
  div.m-hero
    .m-hero__title
      a-logo(
        fontsize="2rem"
      )
      p.m-hero__title__sub portfolio
</template>

<script>
export default {
  name: 'MHero',
}
</script>

<style lang="scss" scoped>
.m-hero {
  @include font-en;

  &__title {
    text-align: center;
    line-height: 1;
    padding: 7rem 0;

    &__sub {
      font-size: 1.5rem;
      text-align: inherit;
      margin-top: 2rem;
      font-style: italic;
    }
  }
}
</style>
