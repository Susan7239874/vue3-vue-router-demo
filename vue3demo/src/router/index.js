import { createRouter,createWebHashHistory} from "vue-router";
import Vue from 'vue'
// Vue.use(Router)
// import home from '../views/home.vue'
// import login from '../views/login.vue'
// export default new Router({
   const routes=[
       { path: "/", redirect: "/home" },
       {
           path: "/home",
           name: "home",
           component: () => import('@/views/home.vue'),
       },
       {
           path: "/login",
           name: "login",
           component: () =>import('@/views/login.vue'),
       }
    ]
// })
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export default router;
