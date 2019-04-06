<template lang="pug">
  nav.nav
    .logo
      .logo__txt nkjmsss

    ul.header__list.header__list--primary
      li Works
        ul.header__list.header__list--secondary
          li web
          li dtp
          li logo
      li About me
      li Contact

    ul.header__list.header__list--sns
      li
        img(
          src="~/assets/img/header/twitter.svg"
        )
      li
        img(
          src="~/assets/img/header/github.svg"
        )
      li
        img(
          src="~/assets/img/header/facebook.svg"
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

    li + li {
      margin-top: 24px;
    }

    @include mq {
      display: flex;
      justify-content: space-between;
      width: 80%;
      max-width: 500px;

      li + li {
        margin-top: 0;
      }
    }
  }

  &--secondary {
    font-size: 16px;

    li:first-of-type {
      margin-top: 8px;
    }

    li + li {
      margin-top: 12px;
    }
  }

  &--sns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    max-width: 300px;
  }
}
</style>
