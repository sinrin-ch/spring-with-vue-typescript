import Vue from 'vue';
import App from './App.vue';
// import router from './router';
// import store from './store';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

new Vue({
    el: '#app',
    // router,
    // store,
    render: (h) => h(App)
});