<template>
  <div class="posts">
    <div class="posts__exists" v-if="posts.length > 0">
      <h2>Posts</h2>
      <post-item
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @remove="$emit('remove', post)"/>
    </div>
    <div class="posts__not" v-else>
      <h2>Add new post</h2>
    </div>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";

export default {
  name: "PostForm",
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped
       lang="scss">

</style>