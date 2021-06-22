import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import User from "../views/User.vue";
import Votes from "../views/Votes.vue";
import Admin from "../views/Admin.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/user",
    name: "User",
    component: User,
    beforeEnter(to, from, next) {
      if (store.getters["auth/user"].token) {
        next();
      } else {
        next({
          name: "Home",
        });
      }
    },
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    beforeEnter(to, from, next) {
      if (store.getters["auth/user"].token && store.getters["auth/user"].data.isAdmin) {
        next();
      } else {
        next({
          name: "Home",
        });
      }
    },
  },
  {
    path: "/votes",
    name: "Votes",
    component: Votes,
    beforeEnter(to, from, next) {
      if (store.getters["auth/user"].token) {
        next();
      } else {
        next({
          name: "Home",
        });
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
