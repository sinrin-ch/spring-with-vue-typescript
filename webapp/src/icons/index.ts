import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'// svg组件

// register globally,全局注册组件<svg-icon>
Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
// 批量引入./svg这个目录下面的svg文件,false是不查找子目录
const req = require.context('./svg', false, /\.svg$/);
requireAll(req);
