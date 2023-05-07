import {createRouter, createWebHistory} from "vue-router";

import MainPage from "@/pages/MainPage.vue";
import PostPage from "@/pages/PostPage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import PostidPage from "@/pages/PostidPage.vue";


const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/posts',
        component: PostPage,
    },
    {
        path: '/posts/:id',
        component: PostidPage,
    },
    {
        path: '/about',
        component: AboutPage,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
});

export default router;