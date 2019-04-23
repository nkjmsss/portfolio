<template lang="pug">
  div.loading
    fade-loader(
      :loading="loading"
      :color="color"
    )
</template>

<script>
import FadeLoader from 'vue-spinner/src/FadeLoader.vue'

export default {
  name: 'Loading',

  components: {
    FadeLoader,
  },

  computed: {
    loading() {
      return this.$store.state.loading
    },

    color() {
      return this.$store.state.primaryColor
    },
  },
}
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
</style>
