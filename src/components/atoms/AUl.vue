<template lang="pug">
  ul.a-ul
    li.a-ul__item(
      v-for="item in items"
      :key="item"
    ) {{ item }}
</template>

<script>
export default {
  name: 'AUl',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.a-ul {
  list-style-type: square;
  padding-left: 1.5em;
}
</style>
