<template lang="pug">
  footer
    ul.footer__list.footer__list--primary
      li(
        v-for="item in menu"
        :key="item.title"
      )
        v-link(
          :to="item.href"
        ) {{item.title}}

        template(
          v-if="item.children"
        )
          ul.footer__list.footer__list--secondary
            li(
              v-for="child in item.children"
              :key="child.title"
            )
              v-link(
                :to="child.href"
              ) {{child.title}}

    ul.footer__list.footer__list--sns
      li(
        v-for="item in sns"
        :key="item.title"
      )
        a.sns__img(
          :href="item.href"
          target="_blank"
          :title="item.title"
        )
          img(
            :src="require(`~/assets/img/icon/${item.title}.svg`)"
            :alt="item.title"
          )
</template>

<style lang="scss" scoped>
footer {
  background-color: $primary;
  color: $white;
  padding: $margin;
  position: relative;
  z-index: 300;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer__list {
  list-style-type: none;

  &--primary {
    font-size: 20px;
    margin-top: 10px;

    & > li {
      &::before {
        content: '- ';
      }

      & + li {
        margin-top: 16px;
      }
    }

    @include mq {
      display: flex;
      justify-content: space-between;
      width: 80%;
      max-width: 500px;
      text-align: center;

      & > li {
        &::before {
          content: normal;
        }

        & + li {
          margin-top: 0;
        }
      }
    }
  }

  &--secondary {
    font-size: 14px;
    display: flex;
    padding-left: 1em;

    & > li {
      & + li::before {
        content: '|';
      }

      & > a {
        margin: 0 0.8em;
      }
    }

    @include mq {
      display: block;
      padding-left: 0;
      margin-top: 4px;

      & > li {
        & + li::before {
          content: normal;
        }

        & > a {
          margin: 0;
        }
      }
    }
  }

  &--sns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    max-width: 300px;
    margin: 20px 0 10px;
  }
}
</style>

<script>
import menu from '~/assets/config/menu'
import sns from '~/assets/config/sns'
import vLink from '~/components/slot/link-underline'

export default {
  components: {
    vLink,
  },

  data: () => ({
    menu: menu,
    sns: sns,
  }),
}
</script>
