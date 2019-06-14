<template lang="pug">
  table
    tbody
      tr.table__row
        th.table__heading 連絡先
        td.table__item
          p.table-paragraph
            nuxt-link.table-list__item--link(
              to="/contact"
            ) こちらのフォーム
            | よりご連絡ください。
      tr.table__row
        th.table__heading メイン言語
        td.table__item
          ul.table-list
            li.table-list__item HTML, SCSS
            li.table-list__item JavaScript (Nuxt.js, TypeScript)
            li.table-list__item Go
            li.table-list__item Node.js
      tr.table__row
        th.table__heading 使用ツール
        td.table__item
          ul.table-list
            li.table-list__item Docker
            li.table-list__item Git
            li.table-list__item Firebase
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

    @include mq {
      width: 100px;
    }
  }

  &__item {
    padding-left: 1em;
  }
}

.table-paragraph {
  padding-left: 0.3em;
}

.table-list {
  list-style-type: square;
  padding-left: 1.5em;

  &__item {
    &--link {
      color: $black;
      transition: 0.2s;

      &:hover {
        color: $primary;
      }
    }
  }
}

.caption {
  font-size: 0.8em;
  margin-top: 0.3rem;
}
</style>
