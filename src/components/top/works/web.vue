<template lang="pug">
  .work__container.work__container--web(
    tabindex="0"
  )
    svg.work__inner(
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 263.11 212.37"
    )
      defs
        clipPath#clip-path
          path(
            d="M129.09,28.09,7.46,64.93a8.51,8.51,0,0,0-6,8.14V139.3a8.5,8.5,0,0,0,6,8.14l121.63,36.85a8.45,8.45,0,0,0,4.93,0l121.64-36.85a8.51,8.51,0,0,0,6-8.14V73.07a8.52,8.52,0,0,0-6-8.14L134,28.09A8.45,8.45,0,0,0,129.09,28.09Z"
          )
      // image.work__img(
      //   xlink:href="~/assets/img/works/web/kf69nc.png"
      //   clip-path="url(#clip-path)"
      // )
      path.work__frame(
        d="M129.09,28.09,7.46,64.93a8.51,8.51,0,0,0-6,8.14V139.3a8.5,8.5,0,0,0,6,8.14l121.63,36.85a8.45,8.45,0,0,0,4.93,0l121.64-36.85a8.51,8.51,0,0,0,6-8.14V73.07a8.52,8.52,0,0,0-6-8.14L134,28.09A8.45,8.45,0,0,0,129.09,28.09Z"
      )
</template>

<script>
export default {
  name: 'WebWork',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.work {
  &__container {
    max-width: 300px;
  }

  &__inner {
    width: 100%;
  }

  &__frame {
    stroke: $primary;
  }
}
</style>
