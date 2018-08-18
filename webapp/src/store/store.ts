/**
 *  store/store.ts
 *  vuex 配置
 */

import Vue from 'vue'
import Vuex, {ModuleTree, StoreOptions} from 'vuex'
import userModule from './modules/userModule'
import appModule from "./modules/appModule";
import getters from "./getters";
import RootState from "./RootState";



Vue.use(Vuex);

const modules: ModuleTree<RootState> = {
    user: userModule,
    app: appModule
};
const options: StoreOptions<RootState> = {
    modules,
    getters,
};

export default new Vuex.Store(options);
