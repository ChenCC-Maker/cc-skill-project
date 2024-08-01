import Vue from 'vue';
import Router from 'vue-router';
import layout from '@/layout/index.vue'





// 在vue上注册vue-router
Vue.use(Router);

// 定义路由列表，用于将具体的组件映射到具体的路由上
const baseRoutes = [
    {
        path:'/',
        component: layout,
        redirect: '/dashboard',
        children:[
            {
                path:'dashboard',
                name:'dashboard',
                component: () => import('@/views/dashboard/index'),
                meta:{
                    title:'主页看板',
                    icon:'el-icon-magic-stick'
                }
            }
        ]
    },
    {
        path:'/skillRecord',
        component: layout,
        redirect:'/skillRecord/itemScorll',
        meta:{
            title:'糖炒栗子店',
            icon:'el-icon-star-off'
        },
        children:[
            {
                path:'/skillRecord/itemScorll',
                name:'itemScorll',
                component:()=>import('@/views/skill/itemScorll'),
                meta:{title:'元素滚动'}
            },
            {
                path:'/skillRecord/bulingbox',
                name:'bulingBox',
                component:()=>import('@/views/skill/bulingBox'),
                meta:{title:'发光的盒子'}
            },
            {
                path:'/skillRecord/tabSheet',
                name:'tabSheet',
                component:()=>import('@/views/skill/tabSheet'),
                meta:{title:'扩展sheet'}
            },
        ]
        
    }
];

// 定义一个路由，并且其默认暴露出去，供mian.js引入
const router = new Router({
    routes:baseRoutes
})

export default router;