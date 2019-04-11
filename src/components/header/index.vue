<template lang="pug">
  header
    v-hamberger
    v-content
</template>

<script>
import vHamberger from './button'
import vContent from './content'

export default {
  name: 'VHeader',

  components: {
    vHamberger,
    vContent,
  },
}
</script>
