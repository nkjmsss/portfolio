<template lang="pug">
  div
    v-hero
    section
      v-h1 works
      v-works-container(
        :items="items"
      )
</template>

<script>
import vHero from '~/components/top/hero'
import vH1 from '~/components/slot/h1'
import vWorksContainer from '~/components/top/works_container'
import works from '~/assets/works'

export default {
  components: {
    vHero,
    vH1,
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
