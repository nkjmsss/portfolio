<template lang="pug">
  div.layput--default
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
.layput--default {
  font-family: $sans;
}

main {
  padding: $margin + 10px;
}
</style>

<style lang="scss">
html {
  font-size: 14px;

  @include mq {
    font-size: 16px;
  }
}
</style>
