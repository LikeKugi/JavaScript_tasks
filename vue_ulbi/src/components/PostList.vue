<template>
  <div class="posts">
    <div class="posts__exists" v-if="posts.length > 0">
      <h2>Posts</h2>
      <transition-group name="post-list">
        <post-item
            v-for="post in posts"
            :post="post"
            :key="post.id"
            @remove="$emit('remove', post)"/>
      </transition-group>
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
.post-list {
  &-item {
    display: inline-block;
    margin-right: 10px;
  }
  &-enter-active, &-leave-active {
    transition: all 1s ease;
  }
  &-enter-from, &-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }
  &-move {
    transition: transform 0.8s ease-in-out;
  }
}
</style>