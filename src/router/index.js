import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Users from "../views/Users.vue";
import User from "../views/User.vue";
import login from "../components/login";
import signUp from "../components/signUp";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/users",
    name: "Users",
    // route level code-splitting
    // this generates a separate chunk (Users.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Users,
  },
  {
    path: "/users/:id",
    name: "User",
    component: User,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/signUp",
    name: "signUp",
    component: signUp,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
