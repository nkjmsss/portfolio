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
        placeholder="山田 太郎"
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
        placeholder="sample@gmail.com"
        required
      )

    .form__group
      label.form__label(
        for="content"
      ) お問い合わせ内容
      textarea.form__input#content(
        name="content"
        v-model="content"
        placeholder="制作のご依頼・ご相談などを自由にお書きください。"
        required
      )

    .form__group.txt-center
      button.form__button(
        type="submit"
      ) 送信する
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  name: 'VForm',

  data: () => ({
    name: '',
    email: '',
    content: '',
  }),

  methods: {
    submitForm() {
      this.$store.commit('setLoading', true)

      const colref = firebase.firestore().collection('contact')
      const data = {
        name: this.name,
        email: this.email,
        content: this.content,
      }

      const timeout = new Promise((resolve, reject) => {
        window.setTimeout(() => reject(new Error('Time out')), 3000)
      })

      Promise.race([timeout, colref.add(data)])
        .then(doc => {
          this.$store.commit('setLoading', false)
        })
        .catch(err => {
          console.error(err)
        })
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
    outline: none;

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
