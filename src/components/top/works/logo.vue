<template lang="pug">
  div.work--logo {{item.name}}
</template>

<script>
export default {
  name: 'LogoWork',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>
