<template lang="pug">
  .work.work--web(
    tabindex="0"
    :class="{'work--active': hover}"
    @click="handleClick"
  )

    svg.work__imageContainer(
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 263.11 159.77"
    )
      defs
        path(
          :id="`path-${uuid}`"
          d="M129.09,1.78,7.46,38.63a8.5,8.5,0,0,0-6,8.14V113a8.5,8.5,0,0,0,6,8.14L129.09,158a8.62,8.62,0,0,0,4.93,0l121.64-36.85a8.51,8.51,0,0,0,6-8.14V46.77a8.51,8.51,0,0,0-6-8.14L134,1.78A8.62,8.62,0,0,0,129.09,1.78Z"
        )
        clipPath.clippath(
          :id="`clippath-${uuid}`"
        )
          use(
            :xlink:href="`#path-${uuid}`"
          )

      use.work__frame(
        :xlink:href="`#path-${uuid}`"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      )
      image.work__img(
        :xlink:href="require(`~/assets/img/works${item.image}`)"
        :clip-path="`url(#clippath-${uuid})`"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
      )

    .work__description
      div.work__description__type {{item.type.toLowerCase()}}
      div.work__description__name {{item.name}}
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
    uuid() {
      return this.$uuid
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
  max-width: 400px;
  outline: none;
  margin: 40px 0;

  &__imageContainer {
    width: 100%;
  }

  &__frame {
    stroke: $primary;
    stroke-width: 1;
    fill: transparent;
  }

  &__img {
    transition: ease-out $duration;
    pointer-events: none;
    transform-origin: center center;
  }

  &__description {
    text-align: center;

    &__type {
      color: $primary;
    }
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
