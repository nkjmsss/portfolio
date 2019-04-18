<template lang="pug">
  div.hero
    .hero__title
      h1.hero__title__main nkjmsss
      p.hero__title__sub portfolio
</template>

<style lang="scss" scoped>
.hero {
  @include font-en;

  &__title {
    text-align: center;
    line-height: 1;
    padding: 4rem 0;

    &__main {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
    }

    &__sub {
      font-size: 1.5rem;
      text-align: inherit;
    }
  }
}
</style>
