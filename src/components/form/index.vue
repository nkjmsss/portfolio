<template lang="pug">
  form.form(
    @submit.prevent="submitForm"
  )
    .form__group
      label.form__label(
        for="name"
      ) お名前
      input.form__input#name(
        type="text"
        name="name"
        v-model="name"
        required
      )

    .form__group
      label.form__label(
        for="email"
      ) メールアドレス
      input.form__input#email(
        type="email"
        name="email"
        v-model="email"
        required
      )

    .form__group
      label.form__label(
        for="content"
      ) お問い合わせ内容
      textarea.form__input#content(
        name="content"
        v-model="content"
        required
      )

    .form__group.txt-center
      button.form__button(
        type="submit"
      ) 送信する
</template>

<script>
export default {
  name: 'VForm',

  data: () => ({
    name: 'name',
    email: 'sample@sample.com',
    content: 'content',
  }),

  methods: {
    submitForm() {
      // eslint-disable-next-line
      console.log('POST') // TODO
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  margin-top: 2rem;

  &__group {
    & + & {
      margin-top: 2rem;
    }
  }

  &__label {
    display: inline-block;
    cursor: pointer;
  }

  &__input {
    $scale: 0.9;

    display: block;
    font-size: 16px;
    border: 1px solid $gray;
    width: 100% / $scale;
    padding: 0.2em 0.4em;
    transform: scale($scale);
    transform-origin: left;

    @include mq {
      width: 50% / $scale;
    }

    &:focus {
      outline-color: $primary;
      outline-width: 3px;
    }

    &#content {
      height: 15em;
      width: 100% / $scale;
    }
  }

  &__button {
    $height: 52px;
    $width: 130px;
    $border: 2px solid $primary;
    $border_dif: 4px;

    color: $primary;
    line-height: $height;
    height: $height;
    width: $width;
    text-align: center;
    position: relative;

    &::before,
    &::after {
      content: '';
      position: absolute;
      display: block;
      width: 30%;
      height: 30%;
      border: $border;
      transition: ease-out 0.3s;
    }

    &::before {
      top: 0;
      left: 0;
      border-right-color: transparent;
      border-bottom-color: transparent;
    }

    &::after {
      bottom: 0;
      right: 0;
      border-left-color: transparent;
      border-top-color: transparent;
    }

    &:hover,
    &:focus {
      &::before,
      &::after {
        width: calc(100% - #{$border_dif});
        height: calc(100% - #{$border_dif});
        border: $border;
      }
    }
  }
}

.txt-center {
  text-align: center;
}
</style>
