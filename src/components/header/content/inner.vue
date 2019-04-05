<template lang="pug">
  nav.header__main
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
.header__main {
  // display: flex;
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
  }
}
</style>
