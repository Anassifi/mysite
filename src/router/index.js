import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/home/Home.vue"
import Contact from "../views/contact/contact.vue"
import Portfolio from "../views/portfolio/Portfolio.vue"
import Dashboard from "@/components/Dashboard/Dashboard.vue"
import NewProject from "@/components/Dashboard/NewProject.vue"
import EditProject from "@/components/Dashboard/EditProject.vue"
import ViewProject from "@/components/Dashboard/ViewProject.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/dashboard/new",
    name: "new-project",
    component: NewProject,
  },
  {
    path: "/dashboard/edit/:project_id",
    name: "edit-project",
    component: EditProject,
  },
  {
    path: "/dashboard/:project_id",
    name: "view-project",
    component: ViewProject,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
