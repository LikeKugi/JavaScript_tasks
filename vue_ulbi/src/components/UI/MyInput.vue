<template>
  <input class="inp"
         type="text"
         :value="modelValue"
         @input="updateInput">
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  }
}
</script>

<style lang="scss"
       scoped>
.inp {
  border: 1px solid teal;
  padding: 10px 15px;
}
</style>