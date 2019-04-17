<template lang="pug">
  div.work--dtp {{item.name}}
</template>

<script>
export default {
  name: 'DTPWork',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>
