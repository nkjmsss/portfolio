<template lang="pug">
  nuxt-link.link--underline(
    :to="to"
  )
    slot
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.link--underline {
  position: relative;
  color: inherit;
  text-decoration: inherit;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.2em;
    left: 0;
    transform: scaleX(0);
    width: 100%;
    height: 0.1em;
    background-color: $white;
    transition: ease-out 0.2s;
    transform-origin: left;
  }

  &:hover::after {
    transform: scaleX(1);
  }
}
</style>
