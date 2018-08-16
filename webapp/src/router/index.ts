/**
 * router/index.ts
 * 路由配置
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

/* Layout 页面框,包含左侧菜单栏,顶部,和主要页面部分*/
import Layout from '../views/layout/Layout.vue';
import {RouteConfig, RouterOptions} from "vue-router";

// 路由配置
// 先配置的先生效.如果前面没有找到路径,到最后*会重定向到404
/**
 * 自定义了一些路由配置属性
 * icon : the icon show in the sidebar
 * hidden : if hidden:true will not show in the sidebar
 * redirect : if redirect:noredirect will not redirct in the levelbar
 * noDropdown : if noDropdown:true will not has submenu in the sidebar
 * meta : { role: ['admin'] } will control the page role
 */
const routes: RouteConfig[] = [
    {path: '/login', component: () => import('@/views/login/Login.vue'),},
    {path: '/404', component: () => import('@/views/404.vue'), meta: {hidden: true}},
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',     // 子路由默认跳到 /dashboard
        name: 'Dashboard',
        meta: {hidden: true},
        children: [{
            path: 'dashboard',
            component: () => import('@/views/main.vue')
            //     component: () => import('@/views/dashboard/index')
        }]
    },
    {path: '*', redirect: '/404', meta: {hidden: true}}
];

const options: RouterOptions = {routes};

export default new Router(options)
