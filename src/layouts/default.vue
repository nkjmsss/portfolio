<template lang="pug">
  div.layput--default
    a-frame
    m-header
    // z-indexの問題があるため、別個にトランジションさせる
    main.container.fade(
      :class="[{hide}, {'ma-w': setMaxWidth}]"
    )
      nuxt
    m-footer.fade(
      :class="{hide}"
    )
    a-loading
</template>

<script>
export default {
  computed: {
    hide() {
      return this.$store.state.hideContent
    },

    setMaxWidth() {
      return this.$route.path !== '/'
    },
  },

  created() {
    this.$store.dispatch('init')
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

main.container {
  padding: #{$margin + 32px} #{$margin + 16px};
  width: 100%;
  margin: 0 auto;

  @include mq(lg) {
    padding: #{$margin-pc + 32px} #{$margin-pc + 16px};
  }

  &.ma-w {
    max-width: 800px;
  }
}

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
