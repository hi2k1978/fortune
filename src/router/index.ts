import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "LoginView",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/fortune",
    name: "FortuneView",
    component: () => import("../views/FortuneView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
