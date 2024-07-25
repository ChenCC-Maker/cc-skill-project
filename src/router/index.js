import Vue from 'vue';
import Router from 'vue-router';



// 在vue上注册vue-router
Vue.use(Router);

// 定义路由列表，用于将具体的组件映射到具体的路由上
const baseRoutes = [
    {
        path: '/frontExample',
        name: 'example',
        component: () => import('@/views/example/index'),
    },
    {
        path:'/skillRecord',
        name:'skill',
        component:()=> import('@/views/skill/index')
    }
];

// 定义一个路由，并且其默认暴露出去，供mian.js引入
const router = new Router({
    routes:baseRoutes
})

export default router;