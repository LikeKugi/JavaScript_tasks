import {createStore} from "vuex";

export default createStore({
    // data
    state: {
        likes: 2,
    },
    // getters to access data
    getters: {
        doubleLikes(state) {
            return state.likes * 2;
        }
    },
    // setters to change data
    mutations: {
        incrementLikes(state) {
            state.likes += 1;
        },
        decrementLikes(state) {
            state.likes -= 1;
        },
    },
    // to do side effects
    actions: {

    }
})