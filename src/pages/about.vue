<template lang="pug">
  article
    v-h1 About me
    p 東京大学に在学中のエンジニア・グラフィックデザイナーです。
    p
      | web制作が得意で、デザインからフロントエンド、バックエンドまで幅広く対応可能です。また、ロゴやdtpの制作実績もございます。
      | 個人でゼロから制作することが多いですが、複数人での開発経験もあるのでどちらも対応できます。
    v-profile
    v-table
</template>

<script>
import vH1 from '~/components/slot/h1'
import vProfile from '~/components/about/profile'
import vTable from '~/components/about/table'

export default {
  name: 'AboutMe',
  components: {
    vH1,
    vProfile,
    vTable,
  },
}
</script>

<style lang="scss" scoped>
p {
  text-align: justify;

  & + & {
    margin-top: 0.5em;
  }
}
</style>
