<template lang="pug">
  div
    v-frame
    v-hide
    v-header
    main
      nuxt
    v-footer
</template>

<script>
import vFrame from '~/components/frame'
import vHide from '~/components/hideContents'
import vHeader from '~/components/header'
import vFooter from '~/components/footer'

export default {
  components: {
    vFrame,
    vHide,
    vHeader,
    vFooter,
  },
}
</script>

<style lang="scss" scoped>
div {
  font-family: $sans;
}
</style>
