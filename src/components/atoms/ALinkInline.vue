<template lang="pug">
  nuxt-link.a-link--inline(
    :to="to"
  )
    slot
</template>

<script>
export default {
  name: 'ALinkInline',
  props: {
    to: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.a-link--inline {
  color: $black;
  transition: 0.2s;

  &:hover {
    color: $primary;
  }
}
</style>
