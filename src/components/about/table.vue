<template lang="pug">
  table
    tbody
      tr.table__row
        th.table__heading 連絡先
        td.table__item nkjmsss.design@gmail.com
      tr.table__row
        th.table__heading メイン言語
        td.table__item
          ul.table-list
            li.table-list__item HTML, CSS (SASS等含む)
            li.table-list__item JavaScript (Vue.js, React.js, TypeScript)
            li.table-list__item Node.js
            li.table-list__item Go
      tr.table__row
        th.table__heading 制作ソフト
        td.table__item
          ul.table-list
            li.table-list__item Adobe Illustrator
            li.table-list__item Adobe XD
            li.table-list__item Adobe PhotoShop
            li.table-list__item Adobe InDesign
</template>

<script>
export default {
  name: 'VTable',
}
</script>

<style lang="scss" scoped>
.table {
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
  }

  &__item {
    padding-left: 1em;
  }
}

.table-list {
  list-style-type: square;
  padding-left: 1.5em;
}

.caption {
  font-size: 0.8em;
  margin-top: 0.3rem;
}
</style>
