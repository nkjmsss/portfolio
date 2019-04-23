<template lang="pug">
  div
    v-hero
    v-h1 works
    v-works-container(
      :items="items"
    )
</template>

<script>
// import load from '~/plugins/longLoading'
import vHero from '~/components/top/hero'
import vH1 from '~/components/slot/h1'
import vWorksContainer from '~/components/top/works_container'
import works from '~/assets/works'

export default {
  // mixins: [load],
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
