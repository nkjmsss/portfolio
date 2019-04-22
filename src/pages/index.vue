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

export default {
  // mixins: [load],
  components: {
    vHero,
    vH1,
    vWorksContainer,
  },
  data: () => ({
    items: [
      {
        type: 'web',
        name: 'sample1',
      },
      {
        type: 'web',
        name: 'sample2',
      },
      {
        type: 'dtp',
        name: 'sample1',
      },
      {
        type: 'dtp',
        name: 'sample2',
      },
      {
        type: 'logo',
        name: 'sample1',
      },
      {
        type: 'logo',
        name: 'sample2',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped></style>
