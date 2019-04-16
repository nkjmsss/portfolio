<template lang="pug">
  div
    v-hero
    v-h1 about
</template>

<script>
// import load from '~/plugins/longLoading'
import vHero from '~/components/top/hero'
import vH1 from '~/components/slot/h1'

export default {
  // mixins: [load],
  components: {
    vHero,
    vH1,
  },
}
</script>

<style lang="scss" scoped></style>
