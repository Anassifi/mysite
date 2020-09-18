import Vue from "vue";
import VueRouter from "vue-router";
import Portfolio from "../views/portfolio/Portfolio.vue";
import Contact from "../views/contact/contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/about/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
