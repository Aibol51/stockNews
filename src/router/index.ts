import {createRouter, createWebHashHistory} from 'vue-router';
import News from "@/views/newsPage/index.vue"
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home/index.vue')
    },
    {
      path: "/News",
      component: News,
    },
    {
      path: "/Stock",
      component: () => import("@/views/stockLine/index.vue"),
    },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  console.log("跳转到", to);
    next();
});

export default router;