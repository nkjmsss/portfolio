<template lang="pug">
  .a-textfield
    label.a-textfield__label(
      :for="`textfield--${uuid}`"
    ) {{label}}
    textarea.a-textfield__textfield(
      :id="`textfield--${uuid}`"
      :name="name"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
      :required="required"
    )
</template>

<script>
export default {
  name: 'ATextField',

  props: {
    label: {
      type: String,
      required: true,
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
      return this.$uuid
    },
  },
}
</script>

<style lang="scss" scoped>
.a-textfield {
  margin-bottom: 2rem;

  &__label {
    display: block;
    cursor: pointer;
  }

  &__textfield {
    $scale: 0.9;

    display: block;
    font-size: 16px;
    border: 1px solid $gray;
    height: 15rem;
    width: 100% / $scale;
    padding: 0.2em 0.4em;
    transform: scale($scale);
    transform-origin: left;

    &:focus {
      outline-color: $primary;
      outline-width: 3px;
    }
  }
}
</style>
