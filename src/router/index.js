import { createWebHistory, createRouter } from "vue-router";
import Home from '../pages/Home.vue';
import Ventures from "@/pages/Ventures";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ventures",
    name: "ventures",
    component: Ventures,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;