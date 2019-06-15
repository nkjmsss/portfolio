<template lang="pug">
  .a-input
    label.a-input__label(
      :for="`input--${uuid}`"
    ) {{label}}
    input.a-input__input(
      :id="`input--${uuid}`"
      :type="type"
      :name="name"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
      :required="required"
    )
</template>

<script>
export default {
  name: 'AInput',

  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    uuid() {
      return this.$uuid()
    },
  },
}
</script>

<style lang="scss" scoped>
.a-input {
  margin-bottom: 2rem;

  &__label {
    display: block;
    cursor: pointer;
  }

  &__input {
    $scale: 0.9;

    display: block;
    font-size: 16px;
    border: 1px solid $gray;
    width: 100% / $scale;
    padding: 0.2em 0.4em;
    transform: scale($scale);
    transform-origin: left;

    @include mq {
      width: 50% / $scale;
    }

    &:focus {
      outline-color: $primary;
      outline-width: 3px;
    }
  }
}
</style>
