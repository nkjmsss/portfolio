<template lang="pug">
  div
    v-hero
    section
      a-h1 works
      v-works-container(
        :items="items"
      )
</template>

<script>
import vHero from '~/components/top/hero'
import vWorksContainer from '~/components/top/works_container'
import works from '~/assets/works'

export default {
  components: {
    vHero,
    vWorksContainer,
  },

  head: () => ({
    titleTemplate: null,
  }),

  data: () => ({
    items: works,
  }),
}
</script>

<style lang="scss" scoped></style>
