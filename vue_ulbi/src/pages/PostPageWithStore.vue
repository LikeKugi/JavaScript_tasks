<template>
  <div>
    <h1>Page with posts</h1>

    <div class="likes">
      <h2>Likes: {{ $store.getters.doubleLikes }}</h2>
      <div class="likes__buttons">
        <my-button class="btn" @click="$store.commit('incrementLikes')">Like</my-button>
        <my-button class="btn" @click="$store.commit('decrementLikes')">Dislike</my-button>
      </div>
    </div>
    
    <div class="app__btns">
      <my-button class="btn"
                 @click="fetchPosts">Get posts
      </my-button>
      <my-button class="btn"
                 @click="showDialog">Create new post
      </my-button>
      <my-select v-model="selectedSort"
                 :options="sortOptions"/>
      <my-input v-model:value="searchQuery"
                v-focus
                placeholder="search post"/>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"/>
    </my-dialog>

    <post-list :posts="sortedAndSearchedPosts"
               @remove="removePost"
               v-if="!isPostsLoading"/>
    <div class="loading"
         v-else>Loading
    </div>
    <div v-intersection="loadMorePosts"
         class="observer"></div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";

export default {
  name: "App",
  components: {
    MyInput,
    MySelect,
    PostList, PostForm,
  },
  data() {
    return {
      posts: [],
      page: 1,
      limit: 10,
      totalPages: 0,
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'By title'},
        {value: 'body', name: 'By description'},
      ],
      searchQuery: '',
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
      this.isPostsLoading = true;
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        console.log(e);
      } finally {
        this.isPostsLoading = false;
      }
    },
    async loadMorePosts() {
      this.page += 1;
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        console.log(e);
      }
    },

  },
  mounted() {
    this.fetchPosts();
  },
  watch: {},
  computed: {
    sortedPosts() {
      return [...this.posts.sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))]
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },
}


</script>

<style scoped
       lang="scss">

.app__btns {
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
}

.pagination {
  &__wrapper {
    display: flex;
    justify-content: center;
    padding: 15px;
  }

  &__btn {
    padding: 5px;
    border: 1px solid teal;
    cursor: pointer;

    &:not(:last-of-type) {
      margin-right: 5px;
    }

    &:hover {
      background-color: teal;
      color: #fefefe;
    }
  }
}

.current-page {
  color: teal;
  background-color: #fefefe;
}

.observer {
  height: 30px;
  background: firebrick;
}

</style>