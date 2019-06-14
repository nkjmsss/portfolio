<template lang="pug">
  footer
    ul.footer__list.footer__list--primary
      li(
        v-for="item in menu"
        :key="item.title"
      )
        a-link(
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
              a-link(
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
          rel="noopener"
          :title="item.title"
        )
          img(
            :src="require(`~/assets/img/icon/${item.title}.svg`)"
            :alt="item.title"
          )

    .copyright ©2019 nkjmsss
</template>

<script>
import menu from '~/lib/settings/menu.js'
import sns from '~/lib/settings/sns.js'

export default {
  data: () => ({
    menu: menu,
    sns: sns,
  }),
}
</script>

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
  margin-top: auto;

  @include font-en;

  @include mq(lg) {
    padding: $margin-pc;
    padding: $margin;
  }
}

.footer__list {
  list-style-type: none;

  &--primary {
    font-size: 1.4rem;
    margin-top: 0.625rem;

    & > li {
      line-height: 1;

      & + li {
        margin-top: 1.4rem;
      }
    }

    @include mq {
      display: flex;
      justify-content: space-between;
      width: 80%;
      max-width: 500px;
      text-align: center;

      & > li {
        & + li {
          margin-top: 0;
        }
      }
    }
  }

  &--secondary {
    font-size: 1rem;
    display: flex;
    padding-left: 1em;
    margin-top: 0.3rem;

    & > li {
      display: flex;
      align-items: center;

      & + li::before {
        content: '';
        display: inline-block;
        height: 1em;
        width: 1px;
        background-color: currentColor;
      }

      & > a {
        margin: 0 0.8em;
      }
    }

    @include mq {
      display: block;
      padding-left: 0;
      margin-top: 0.25rem;

      & > li {
        display: list-item;
        margin-top: 0.5em;

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
    margin: 0.75rem 0 0;
  }
}

.sns__img {
  img {
    height: 1.75rem;
  }
}

.copyright {
  font-size: 0.75rem;
  line-height: 1;
  margin: 0.5em 0;
}
</style>
