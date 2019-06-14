<template lang="pug">
  table
    tbody
      tr.a-table__row(
        v-for="item in items"
        :key="item.key"
      )
        th.a-table__heading {{ item.heading }}
        td.a-table__item
          slot(
            :name="item.key"
          )
</template>

<script>
export default {
  name: 'ATable',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.a-table {
  &__row {
    & + & {
      & > * {
        padding-top: 1rem;
      }
    }
  }

  &__heading {
    color: $primary;
    font-weight: normal;
    width: 70px;
    vertical-align: top;
    text-align: right;

    @include mq {
      width: 100px;
    }
  }

  &__item {
    padding-left: 1em;
  }
}
</style>
