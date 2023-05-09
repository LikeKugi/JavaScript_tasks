import axios from "axios";

export const postModule = {
    state: () => ({
        posts: [],
        isPostsLoading: false,
        selectedSort: '',
        searchQuery: '',
        page: 1,
        limit: 10,
        totalPages: 0,
        sortOptions: [
            {value: 'title', name: 'By title'},
            {value: 'body', name: 'By description'},
        ],
    }),
    getters: {
        sortedPosts(state) {
            return [...state.posts.sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))]
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
        },
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = [...state.posts, ...posts];
        },
        setLoading(state, bool) {
            state.isPostsLoading = bool;
        },
        setPage(state, page) {
            state.page = page;
        },
        setSelectedSort(state, selectedSort) {
          state.selectedSort = selectedSort;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        },
        removePost(state, post) {
            state.posts = state.posts.filter((p) => p.id !== post.id);
        },
        createPost(state, {title, body}) {
            state.posts.push({
                id: state.posts[state.posts.length - 1].id + 1,
                title,
                body
            });
        },
    },
    actions: {
        async fetchPosts({state, commit}) {
            commit('setLoading', true);
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit,
                    }
                });
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
                commit('setPosts', response.data);
            } catch (e) {
                console.log(e);
            } finally {
                commit('setLoading', false);
            }
        },
        async loadMorePosts({state, commit}) {
            commit('setPage', state.page + 1);
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit,
                    }
                });
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
                commit('setPosts', response.data);
            } catch (e) {
                console.log(e);
            }
        },
    },
    namespaced: true,
}