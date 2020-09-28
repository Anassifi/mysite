import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home.vue";
import Contact from "../views/contact/contact.vue";
import Portfolio from "../views/portfolio/Portfolio.vue";
import Dashboard from "@/components/Dashboard/Dashboard.vue";
import NewProject from "@/components/Dashboard/NewProject.vue";
import EditProject from "@/components/Dashboard/EditProject.vue";
import ViewProject from "@/components/Dashboard/ViewProject.vue";
import Login from "@/components/login/Login.vue";
import firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      requireGuest: true,
    },
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
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/dashboard/new",
    name: "new-project",
    component: NewProject,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/dashboard/edit/:project_id",
    name: "edit-project",
    component: EditProject,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/dashboard/:project_id",
    name: "view-project",
    component: ViewProject,
    meta: {
      requireAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

//Nav Guards
router.beforeEach((to, from, next) => {
  //check for requiredAuth guard
  if (to.matched.some((record) => record.meta.requireAuth)) {
    //Check if NOT logged in
    if (!firebase.auth().currentUser) {
      //go to login
      next({
        path: "/login",
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      //Proceed to the route
      next();
    }
  } else if (to.matched.some((record) => record.meta.requireGuest)) {
    //Check if logged in
    if (firebase.auth().currentUser) {
      //go to dashboard
      next({
        path: "/dashboard",
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      //Proceed to the route
      next();
    }
  } else {
    //Proceed to the route
    next();
  }
});

export default router;
