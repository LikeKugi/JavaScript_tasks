<template>
  <div class="post">
    <div class="post__item">
      <div><strong>title: </strong>{{ post.title }}</div>
      <div><strong>description: </strong>{{ post.body }}</div>
    </div>
    <div class="post__controls">
      <my-button class="btn" @click="$emit('remove', post)">Delete</my-button>
      <my-button class="btn">Change</my-button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style lang="scss"
       scoped>
.post {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border: 2px solid teal;
  border-radius: 10px;

  &:not(:last-of-type) {
    margin-bottom: 15px;
  }
}
.btn {
  &:not(:last-of-type) {
    margin-right: 5px;
  }
}
</style>