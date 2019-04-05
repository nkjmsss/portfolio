<template lang="pug">
  div
    v-frame
    v-header
    main
      nuxt
    v-footer
</template>

<script>
import vFrame from '~/components/frame'
import vHeader from '~/components/header'
import vFooter from '~/components/footer'

export default {
  components: {
    vFrame,
    vHeader,
    vFooter,
  },
}
</script>
