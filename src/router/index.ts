import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PresentationView from "@/views/PresentationView.vue";
import GaleriesView from "@/views/GaleriesView.vue";
import ContactView from "@/views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/presentation",
      name: "presentation",
      component: PresentationView,
    },
    {
      path: "/galeries",
      name: "galeries",
      component: GaleriesView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
  ],
});

export default router;
