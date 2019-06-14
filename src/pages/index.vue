<template lang="pug">
  div
    m-hero
    section
      a-h1 works
      m-works-container(
        :items="items"
      )
</template>

<script>
import works from '~/assets/works'

export default {
  head: () => ({
    titleTemplate: null,
  }),

  data: () => ({
    items: works,
  }),
}
</script>
