import {createRouter, createWebHistory} from "vue-router";

import MainPage from "@/pages/MainPage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import PostPageWithStore from "@/pages/PostPageWithStore.vue";


const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/posts',
        component: PostPageWithStore,
    },
    {
        path: '/posts/:id',
        component: PostPageWithStore,
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