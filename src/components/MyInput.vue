<template>
  <input type="text" placeholder="input text here" class="my-input" :value="modelValue" @input="emit('update:modelValue', $event.target.value)">
</template>

<script>
  export default {
    props: {
      modelValue: {
        required: true,
        type: String
      }
    },
    setup(props, { emit }) {
      return {
        emit,
        props
      }
    }
  }
</script>

<style lang="sass" scoped>
input.my-input
  border: none
  border-bottom: 1px solid $grey-6
  font-size: 1.5em
  &:focus
    outline: none
    border-color: $primary
    transition: all .5s ease
  &::placeholder
    font-style: italic
    padding: 0 .5em
</style>