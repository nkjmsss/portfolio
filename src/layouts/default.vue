<template lang="pug">
  div.layput--default
    v-frame
    v-header
    // z-indexの問題があるため、別個にトランジションさせる
    main.container.fade(
      :class="{hide}"
    )
      nuxt
    v-footer.fade(
      :class="{hide}"
    )
</template>

<script>
import vFrame from '~/components/frame'
import vHeader from '~/components/header'
import vFooter from '~/components/footer'

export default {
  components: {
    vFrame,
    vHeader,
    vFooter,
  },

  computed: {
    hide() {
      return this.$store.state.hideContent
    },
  },
}
</script>

<style lang="scss" scoped>
.layput--default {
  color: $black;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @include font-jp;
}

main {
  padding: #{$margin + 32px} #{$margin + 16px};

  &.container {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
  }
}

// fade transition settings
// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.4s ease-out;
// }
// .fade-enter,
// .fade-leave-to {
//   opacity: 0;
// }

.fade {
  transition: 0.4s ease-out;
  opacity: 1;

  &.hide {
    opacity: 0;
  }
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
