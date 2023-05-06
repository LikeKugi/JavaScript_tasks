<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',
}
</script>

<style lang="scss"
       scoped>
.btn {
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 2px solid teal;
  cursor: pointer;
  border-radius: 10px;
  transition: color .2s ease-in, background-color .3s ease-out;
  &:hover{
    color: #fefefe;
    background-color: teal;
  }
}
</style>