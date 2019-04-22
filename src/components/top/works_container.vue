<template lang="pug">
  .works__container
    // v-work(
    //   v-for="item in items"
    //   :key="item.name"
    //   :item="item"
    // )
    template(
      v-for="pattern in itemsSeparate"
    )
      .works__container__row(
        v-for="row in pattern"
      )
        v-work(
          v-for="item in row"
          :key="item.name"
          :item="item"
        )
</template>

<script>
import vWork from '~/components/top/works'

export default {
  name: 'WorksContainer',

  components: {
    vWork,
  },

  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  computed: {
    pattern() {
      return [1, 2]
    },

    patternSum() {
      return this.sum(this.pattern)
    },

    itemsSeparate() {
      const len = this.items.length
      const patternCount = Math.ceil(len / this.patternSum)
      const result = []

      for (let i = 0; i < patternCount; i++) {
        const pattern = []

        for (let j = 0; j < this.pattern.length; j++) {
          const idx = this.sum(this.pattern.slice(0, j))
          const start = i * this.patternSum + idx

          if (start >= len) break

          const row = this.items.slice(start, start + this.pattern[j])
          pattern.push(row)
        }

        result.push(pattern)
      }

      return result
    },
  },

  methods: {
    sum(arr) {
      return arr.reduce((acc, cur) => acc + cur, 0)
    },
  },
}
</script>

<style lang="scss" scoped>
.works__container__row {
  display: flex;
  justify-content: space-around;
}
</style>
