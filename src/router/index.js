import { createRouter, createWebHistory } from "vue-router";
import home from "@/views/home.vue";
import checkout from "@/views/checkout.vue";
import wishlist from "@/views/wishlist.vue";
// import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path : "/checkout",
    name : "checkout",
    component : checkout,
  },
  {
    path : "/wishlist",
    name : "wishlist",
    component : wishlist,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
