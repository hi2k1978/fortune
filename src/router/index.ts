import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    //path: "/",
    path: "/login",
    name: "LoginView",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/fortune",
    name: "FortuneView",
    component: () => import("../views/FortuneView.vue"),
  },
  {
    // path: "/prefecture",
    path: "/",
    name: "PrefectureView",
    component: () => import("../views/PrefectureView.vue"),
  },
  {
    path: "/prefecture/fruits/:id",
    name: "FruitsDetailView",
    component: () => import("../views/FruitsDetailView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
