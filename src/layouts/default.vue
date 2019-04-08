<template lang="pug">
  div.layput--default
    v-frame
    v-hide
    v-header
    main
      nuxt.container
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
  color: $black;
}

main {
  padding: #{$margin + 32px} #{$margin + 16px};
}

.container {
  max-width: 800px;
  margin: 0 auto;
}
</style>

<style lang="scss">
html {
  font-size: 14px;

  @include mq {
    font-size: 16px;
  }
}

p {
  text-align: justify;

  & + & {
    margin-top: 0.5em;
  }
}
</style>
