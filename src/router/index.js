import { createWebHistory, createRouter } from "vue-router";
import Home from '../pages/Home.vue';
import Ventures from "@/pages/Ventures";
import Contact from "@/pages/Contact";
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
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;