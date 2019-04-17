<template lang="pug">
  div {{item.name}}
</template>

<script>
export default {
  name: 'WebWork',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>
