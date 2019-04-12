import Vue from "vue";
import VueRouter from "vue-router";
import { getCookie } from '../common/js/cookie'

// 引入组件
import login from '../pages/Login.vue'
import index from '../pages/Index.vue'
import home from "../pages/Home.vue";
import bookshelf from "../pages/Bookshelf.vue";
import mine from '../pages/Mine.vue';
import bookDetail from '../pages/BookDetail.vue';

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const router =  new VueRouter({
    routes: [
        {
            path: '/', 
            redirect: '/index/home'
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/index',
            component: index,
            children: [
                {
                    path:"home",
                    component: home
                },
                {
                    path: "bookshelf",
                    component: bookshelf
                },
                {
                    path: 'mine',
                    component: mine
                }
            ]
        },
        {
            path: '/bookDetail/:id',
            component: bookDetail
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (getCookie('userId') === undefined && to.path.indexOf('login') === -1) {
      return next('/login')
    } else {
      return next()
    }
})

export default router;