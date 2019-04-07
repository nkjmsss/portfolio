<template lang="pug">
  article
    v-h1 About me
    p 東京大学に在学中のエンジニア・グラフィックデザイナーです。
    p web制作が得意で、デザインからフロントエンド、バックエンドまで幅広く対応可能です。また、ロゴやdtpの制作実績もございます。
    p その他、趣味として写真をやっています。
</template>

<script>
import vH1 from '~/components/slot/h1'

export default {
  name: 'AboutMe',
  components: {
    vH1,
  },
}
</script>
