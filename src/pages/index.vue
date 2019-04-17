<template lang="pug">
  div
    v-hero
    v-h1 works
    .works__container
      v-work(
        v-for="item in items"
        :key="item.name"
        :item="item"
      )
</template>

<script>
// import load from '~/plugins/longLoading'
import vHero from '~/components/top/hero'
import vH1 from '~/components/slot/h1'
import vWork from '~/components/top/works'

export default {
  // mixins: [load],
  components: {
    vHero,
    vH1,
    vWork,
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
    ],
  }),
}
</script>

<style lang="scss" scoped></style>
