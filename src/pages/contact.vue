<template lang="pug">
  article
    a-h1 Contact
    p 制作のご依頼・ご相談などお気軽にお問い合わせください。エンジニアリング、デザインともに承っております。また、インターン等のお誘いでも構いません。
    p お問い合わせの際は、下記のフォームをすべて埋めるようお願いいたします（全フィールド必須です）。
    v-form
</template>

<script>
import vForm from '~/components/form'

export default {
  name: 'Contact',

  components: {
    vForm,
  },

  data: () => ({
    meta: {
      title: 'Contact',
      type: 'article',
      url: '/contact',
    },
  }),
}
</script>
