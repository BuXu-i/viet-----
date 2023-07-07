import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
const routes = [
  {
    path: "/",
    redirect: "/Login"
  },
  {
    path: "/Login", //登录路由
    name: "Login",
    component: () => import("../pages/Login.vue")
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
// router.push({ name: 'Login' });
// router.beforeEach((to, from, next) => {
//   console.log(to);
//   if (!to.name) {
//     next({ name: "Login" });
//   } else {
//     next();
//   }
// });
export default router;
