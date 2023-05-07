<template>
  <div class="add-post">
    <h2>Create new post</h2>
    <form class="inp-form"
          @submit.prevent>
      <my-input placeholder="title"
                v-model:value="post.title"
                v-focus/>
      <my-input placeholder="description"
                v-model:value="post.body"/>
      <my-button class="btn"
                 @click="createPost">Create
      </my-button>
    </form>
  </div>
</template>

<script>


export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    createPost() {
      if (!(this.post.title && this.post.body)) return;
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
      };
    },
  },
}
</script>

<style lang="scss"
       scoped>
.add-post {
  margin-bottom: 20px;
}

.inp {

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }

  &:last-of-type {
    margin-bottom: 5px;
  }

  &-form {
    display: flex;
    flex-direction: column;
  }
}

</style>