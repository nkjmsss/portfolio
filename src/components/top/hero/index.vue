<template lang="pug">
  div.hero
    .hero__title
      v-logo(
        fontsize="2rem"
      )
      p.hero__title__sub portfolio
</template>

<script>
import vLogo from '~/components/logo'

export default {
  name: 'Hero',
  components: {
    vLogo,
  },
}
</script>

<style lang="scss" scoped>
.hero {
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
