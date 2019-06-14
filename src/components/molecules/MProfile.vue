<template lang="pug">
  .m-profile
    a-image-hexagonal(
      :src="require('~/assets/img/profile/profile.jpg')"
    )
    .m-profile__name
      span.m-profile__name--jp 中島 創太
      small.m-profile__name--en Sota Nakajima
</template>

<script>
export default {
  name: 'MProfile',
}
</script>

<style lang="scss" scoped>
.m-profile {
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
