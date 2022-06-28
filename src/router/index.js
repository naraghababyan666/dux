import { createWebHistory, createRouter } from "vue-router";
import Home from '../pages/Home.vue';
import Ventures from "@/pages/Ventures";
import Contact from "@/pages/Contact";
import Careers from "@/pages/Careers";
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
  {
    path: "/careers",
    name: "careers",
    component: Careers,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;