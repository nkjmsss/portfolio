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
  display: inline-block;
  height: 1.2em;
  line-height: 1;
  color: inherit;
  text-decoration: inherit;
  overflow: hidden;
  font-family: inherit;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateX(-110%);
    width: 100%;
    height: 0.1em;
    background-color: currentColor;
    transition: ease-out 0.2s;
    transform-origin: left;
  }

  &:hover,
  &:focus {
    &::after {
      transform: translateX(0);
    }
  }
}
</style>
