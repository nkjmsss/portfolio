<template lang="pug">
  nav.nav
    .logo
      .logo__txt nkjmsss

    ul.header__list.header__list--primary
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
          ul.header__list.header__list--secondary
            li(
              v-for="child in item.children"
              :key="child.title"
            )
              v-link(
                :to="child.href"
              ) {{child.title}}

    ul.header__list.header__list--sns
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
.nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 30px 0;
  pointer-events: auto;
}

.logo {
  $height: 70px;

  height: $height;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &__txt {
    margin-bottom: 0.1em;
    color: $white;
    font-size: 32px;
    font-style: italic;
    line-height: 1;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    display: block;
    width: 52px;
    height: 1px;
    background-color: $white;
  }

  &::before {
    top: 0;
    transform: translate(-50%, 100%);
  }

  &::after {
    bottom: 0;
    transform: translate(-50%, -100%);
  }
}

.header__list {
  list-style-type: none;
  color: $white;
  text-align: center;

  &--primary {
    font-size: 24px;

    & > li + li {
      margin-top: 24px;
    }

    @include mq {
      display: flex;
      justify-content: space-between;
      width: 80%;
      max-width: 500px;

      & > li + li {
        margin-top: 0;
      }
    }
  }

  &--secondary {
    font-size: 16px;

    & > li:first-of-type {
      margin-top: 8px;
    }

    & > li + li {
      margin-top: 12px;
    }
  }

  &--sns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    max-width: 300px;
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
