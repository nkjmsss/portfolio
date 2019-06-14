<template lang="pug">
  svg.a-image--hexagonal(
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 142.357 129.093"
    :style="{width: `${width}px`}"
  )
    defs
      pattern#pattern(
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        viewBox="0 0 498 467"
      )
        //- TODO: なぜこっちでrequireできないのか特定したい（なぜかmodule not found）
        image(
          width="498"
          height="467"
          :xlink:href="src"
        )

    path(
      d="M38.718,8.868H-32.46L-68.05,73.415l35.589,64.547H38.718L74.308,73.415Z"
      transform="translate(68.05 -8.868)"
      fill="url(#pattern)"
    )
</template>

<script>
export default {
  name: 'AImageHexagonal',
  props: {
    width: {
      type: Number,
      default: 150,
    },
    src: {
      type: String,
      required: true,
    },
  },
  // computed: {
  //   img() {
  //     return require(this.src)
  //   },
  // },
}
</script>
