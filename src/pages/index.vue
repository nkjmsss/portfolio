<template lang="pug">
  div hoge
</template>

<script>
// simulating long loading page
// TODO
import { $sleep } from '~/plugins/sleep'

export default {
  async fetch() {
    await $sleep(2000)
  },
}
</script>

<style lang="scss" scoped></style>
