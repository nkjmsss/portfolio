<template lang="pug">
  .profile
    v-image
    .profile__text
      .profile__text__name Sota Nakajima
      v-link.profile__text__twitter(
        :to="twitter"
      ) @nkjmsss
</template>

<script>
import vImage from './image'
import vLink from '~/components/slot/link-underline'
import sns from '~/assets/config/sns'

export default {
  name: 'Profile',

  components: {
    vImage,
    vLink,
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

  &__text {
    text-align: center;

    &__name {
      font-size: 1.2rem;
      margin-top: 0.2em;
    }

    &__twitter {
      font-size: 0.9rem;
      color: $gray;
    }
  }
}
</style>
