import { createRouter, createWebHashHistory } from 'vue-router';
import { useUserStore } from '@/stores/index';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: "/News",
    name: "News",
    component: () => import("@/views/newsPage/index.vue"),
  },
  {
    path: "/Stock",
    name: "Stock",
    component: () => import("@/views/stockLine/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, _from, next) => {
  // console.log("跳转到", to);
  const userStore = useUserStore();

  if (to.name === "Stock" && !userStore.isLoggedIn) {
    
    next({ path: "/" });
  }
  else {
    next();
  }
});

export default router;