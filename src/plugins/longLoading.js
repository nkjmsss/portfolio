// long loading page simulator
import { $sleep } from '~/plugins/sleep'

export default {
  async fetch() {
    await $sleep(2000)
  },
}
