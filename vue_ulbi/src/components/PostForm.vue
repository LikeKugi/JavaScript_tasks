<template>
  <div class="add-post">
    <h2>Create new post</h2>
    <form class="inp-form"
          @submit.prevent>
      <my-input placeholder="title"
                v-model:model-value="post.title"
                v-focus/>
      <my-input placeholder="description"
                v-model:model-value="post.body"/>
      <my-button class="btn"
                 @click="createNewPost">Create
      </my-button>
    </form>
  </div>
</template>

<script>

import {mapMutations} from "vuex";

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
    ...mapMutations({
      createPost: "post/createPost",
    }),
    createNewPost() {
      this.createPost(this.post);
      this.closeDialog();
    },
    closeDialog() {
      this.$emit('close', true);
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