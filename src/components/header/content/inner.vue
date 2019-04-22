<template lang="pug">
  nav.nav
    v-logo(
      color="white"
    )

    ul.header__list.header__list--primary
      li(
        v-for="item in menu"
        :key="item.title"
      )
        v-link(
          :to="item.href"
          :tabindex="tabIndex"
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
                :tabindex="tabIndex"
              ) {{child.title}}

    ul.header__list.header__list--sns
      li(
        v-for="item in sns"
        :key="item.title"
      )
        a.sns__img(
          :href="item.href"
          target="_blank"
          rel="noopener"
          :title="item.title"
          :tabindex="tabIndex"
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
  padding: 1.9rem 0;
  pointer-events: auto;
}

.header__list {
  list-style-type: none;
  color: $white;
  text-align: center;

  &--primary {
    font-size: 1.5rem;

    & > li + li {
      margin-top: 1.5rem;
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
    font-size: 1rem;

    & > li:first-of-type {
      margin-top: 0.5rem;
    }

    & > li + li {
      margin-top: 0.75rem;
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

.sns__img {
  img {
    height: 2rem;
  }
}
</style>

<script>
import menu from '~/assets/config/menu'
import sns from '~/assets/config/sns'
import vLink from '~/components/slot/link-underline'
import vLogo from '~/components/logo'

export default {
  components: {
    vLink,
    vLogo,
  },

  data: () => ({
    menu: menu,
    sns: sns,
  }),

  computed: {
    isOpen() {
      return this.$store.state.menuOpen
    },

    tabIndex() {
      return this.isOpen ? 0 : -1
    },
  },
}
</script>
