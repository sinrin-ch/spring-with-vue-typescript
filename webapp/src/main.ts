import Vue, {ComponentOptions} from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

import '@/styles/index.scss' // global css,引入全局样式

import App from './App.vue'
import router from './router'
import store from './store'

import '@/icons' // icon, 引入icons目录下的svg图片,和全局组件<svg-icon>
// import '@/permission' // permission control

Vue.use(ElementUI);

Vue.config.productionTip = false;

const componentOptions: ComponentOptions<Vue> = {
    el: '#app',
    router,
    store,
    render: (h) => h(App),
};
new Vue(componentOptions);
