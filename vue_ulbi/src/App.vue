<template>
  <div class="wrapper">
    <h1>Page with posts</h1>
    <my-button class="btn" @click="fetchPosts">Get posts</my-button>
    <my-button class="btn"
               @click="showDialog">Create new post
    </my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"/>
    </my-dialog>

    <post-list :posts="posts"
               @remove="removePost"/>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    PostList, PostForm,
  },
  data() {
    return {
      posts: [
        {id: 1, title: 'Javascript 1', body: 'post description 1'},
        {id: 2, title: 'Javascript 2', body: 'post description 2'},
        {id: 3, title: 'Javascript 3', body: 'post description 3'},
        {id: 4, title: 'Javascript 4', body: 'post description 4'},
      ],
      title: '',
      body: '',
      dialogVisible: false,
    }
  },
  methods: {
    createPost({title, body}) {
      this.posts.push({
        id: this.posts[this.posts.length - 1].id + 1,
        title,
        body
      });
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        this.posts = response.data;
      } catch (e) {
        console.log(e);
      }
    }
  }
}


</script>

<style scoped
       lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
}

</style>