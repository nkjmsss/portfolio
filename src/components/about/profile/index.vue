<template lang="pug">
  .profile
    v-image
    .profile__name
      span.profile__name--jp 中島 創太
      small.profile__name--en Sota Nakajima
</template>

<script>
import vImage from './image'
import sns from '~/lib/settings/sns.js'

export default {
  name: 'Profile',

  components: {
    vImage,
  },

  data: () => ({
    twitter: sns.find(obj => obj.title === 'twitter').href,
  }),
}
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0 2rem;

  @include mq {
    margin: 0;
  }

  &__name {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1;
    margin-top: 10px;

    &--jp {
      font-size: 1.2rem;
      margin-bottom: 8px;
    }

    &--en {
      font-size: 0.9rem;
      color: $gray;
    }
  }
}
</style>
