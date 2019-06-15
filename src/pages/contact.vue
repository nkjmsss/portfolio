<template lang="pug">
  article
    a-h1 Contact
    p 制作のご依頼・ご相談などお気軽にお問い合わせください。エンジニアリング、デザインともに承っております。また、フロントエンド・バックエンドどちらも対応できますので、CMSなどAPI通信が必須となるものも得意としています。
    p お問い合わせの際は、下記のフォームをすべて埋めるようお願いいたします（全フィールド必須です）。
    m-contact-form
</template>

<script>
export default {
  name: 'Contact',

  head() {
    return {
      title: 'Contact',
    }
  },
}
</script>
