<template lang="pug">
  .work.work--web(
    tabindex="0"
    :class="{'work--active': hover}"
    @click="handleClick"
  )
    svg.work__imageContainer(
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 263.11 212.37"
    )
      defs
        clipPath.clippath(
          :id="pathID"
        )
          path(
            d="M129.09,28.09,7.46,64.93a8.51,8.51,0,0,0-6,8.14V139.3a8.5,8.5,0,0,0,6,8.14l121.63,36.85a8.45,8.45,0,0,0,4.93,0l121.64-36.85a8.51,8.51,0,0,0,6-8.14V73.07a8.52,8.52,0,0,0-6-8.14L134,28.09A8.45,8.45,0,0,0,129.09,28.09Z"
          )
      path.work__frame(
        d="M129.09,28.09,7.46,64.93a8.51,8.51,0,0,0-6,8.14V139.3a8.5,8.5,0,0,0,6,8.14l121.63,36.85a8.45,8.45,0,0,0,4.93,0l121.64-36.85a8.51,8.51,0,0,0,6-8.14V73.07a8.52,8.52,0,0,0-6-8.14L134,28.09A8.45,8.45,0,0,0,129.09,28.09Z"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      )
      image.work__img(
        :xlink:href="require(`~/assets/img/works${item.image}`)"
        :clip-path="`url(#${pathID})`"
        preserveAspectRatio="xMidYMid slice"
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

  data: () => ({
    hover: false,
  }),

  computed: {
    pathID() {
      return `cp-${this.$uuid}`
    },
  },

  methods: {
    handleClick(e) {
      this.$el.blur()
    },
  },
}
</script>

<style lang="scss" scoped>
$duration: 0.5s;

.work {
  max-width: 300px;
  outline: none;

  &__imageContainer {
    width: 100%;
  }

  &__frame {
    stroke: $primary;
    stroke-width: 1;
    fill: transparent;
  }

  &__img {
    width: 100%;
    height: 100%;
    transition: ease-out $duration;
    pointer-events: none;
    transform-origin: center center;
  }
}

// hover or focus
.work--active,
.work:focus {
  .clippath {
    transform: scale(0.91);
  }

  .work__img {
    transform: scale(1.1);
  }
}

.clippath {
  transform-origin: center center;
  transition: ease-out $duration;
}
</style>
