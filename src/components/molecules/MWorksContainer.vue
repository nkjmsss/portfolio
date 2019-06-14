<template lang="pug">
  .works__container
    template(
      v-for="pattern in itemsSeparate"
    )
      .m-works__container__row(
        v-for="row in pattern"
      )
        a-work(
          v-for="item in row"
          :key="item.name"
          :item="item"
          :maxRowCount="pattenMax"
        )
</template>

<script>
export default {
  name: 'MWorksContainer',

  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  computed: {
    pattern() {
      return [2, 1]
    },

    patternSum() {
      return this.sum(this.pattern)
    },

    pattenMax() {
      return this.pattern.reduce((acc, cur) => {
        if (acc > cur) {
          return acc
        }
        return cur
      }, 0)
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
.m-works__container {
  &__row {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
</style>
