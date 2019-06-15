<template lang="pug">
  .h-flex(
    :style="styles"
  )
    slot
</template>

<script>
export default {
  name: 'HFlex',
  props: {
    justifyContent: {
      type: String,
      default: 'center',
    },
    alignItems: {
      type: String,
      default: 'center',
    },
  },
  computed: {
    styles() {
      return {
        justifyContent: this.justifyContent,
        alignItems: this.alignItems,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.h-flex {
  display: flex;
}
</style>
