<template lang="pug">
  article
    a-h1 About me
    .flex-md
      .introduction
        p
          | 東京大学に在学中のエンジニア・グラフィックデザイナーです。
        p
          | web制作が得意で、デザインからフロントエンド、バックエンドまで幅広く対応可能です。また、ロゴやdtpの制作実績もございます。
          | 個人でゼロから制作することが多いですが、複数人での開発経験もあるのでどちらも対応できます。
      v-profile
    v-table
</template>

<script>
import vProfile from '~/components/about/profile'
import vTable from '~/components/about/table'

export default {
  name: 'AboutMe',

  components: {
    vProfile,
    vTable,
  },

  data: () => ({
    meta: {
      title: 'About me',
      type: 'article',
      url: '/about',
    },
  }),
}
</script>

<style lang="scss" scoped>
@include mq {
  .flex-md {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-bottom: 3rem;
  }

  .introduction {
    margin-left: 2rem;
  }
}
</style>
