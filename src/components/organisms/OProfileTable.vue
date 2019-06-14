<template lang="pug">
  a-table(
    :items="profile"
  )
    template(
      v-for="item in profile"
      v-slot:[item.key]
    )
      template(
        v-if="item.key === 'contact'"
      )
        a-link-inline(
          to="/contact"
        ) こちらのフォーム
        | よりご連絡ください
      template(
        v-else
      )
        a-ul(
          :items="item.items"
        )
</template>

<script>
export default {
  name: 'OProfileTable',
  data: () => ({
    profile: [
      {
        heading: '連絡先',
        key: 'contact',
      },
      {
        heading: 'メイン言語',
        key: 'langs',
        items: [
          'Javascript (Nuxt.js)', //
          'TypeScript',
          'Node.js',
          'Go',
        ],
      },
      {
        heading: '使用ツール',
        key: 'tools',
        items: [
          'Git', //
          'Docker',
          'Firebase',
        ],
      },
      {
        heading: '制作ソフト',
        key: 'software',
        items: [
          'Adobe Illustrator', //
          'Adobe XD',
          'Adobe PhotoShop',
          'Adobe InDesign',
        ],
      },
    ],
  }),
}
</script>
