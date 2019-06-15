<template lang="pug">
  form.form(
    @submit.prevent="submitForm"
  )

    a-input(
      label="お名前"
      name="name"
      v-model="name"
      placeholder="山田 太郎"
      required
    )

    a-input(
      label="メールアドレス"
      name="email"
      type="email"
      v-model="email"
      placeholder="sample@example.com"
      required
    )

    a-text-field(
      label="お問い合わせ内容"
      name="content"
      v-model="content"
      placeholder="制作のご依頼・ご相談などを自由にお書きください。"
      required
    )

    h-flex(
      justify-content="center"
    )
      a-button(
        type="submit"
      ) 送信する
</template>

<script>
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

      const colref = this.$firebase.firestore().collection('contact')
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
}
</style>
