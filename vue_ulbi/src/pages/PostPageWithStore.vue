<template>
  <div>
    <h1>Page with posts</h1>

    <div class="app__btns">
      <my-button class="btn"
                 @click="fetchPosts">Get posts
      </my-button>
      <my-button class="btn"
                 @click="showDialog">Create new post
      </my-button>
      <my-select :model-value="selectedSort"
                 @update:model-value="setSelectedSort"
                 :options="sortOptions"/>
      <my-input
          :model-value="searchQuery"
          @update:model-value="setSearchQuery"
          placeholder="Search...."
          v-focus
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @close="closeDialog"/>
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
import {mapState, mapGetters, mapActions, mapMutations} from "vuex";
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
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
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
      removePost: "post/removePost",
    }),
    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),

    showDialog() {
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
    }

  },
  mounted() {
    this.fetchPosts();
  },
  watch: {},
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSearchedPosts: "post/sortedAndSearchedPosts",
    }),
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