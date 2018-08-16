/**
 *  store/index.ts
 *  vuex 配置
 */

import Vue from 'vue'
import Vuex, {ModuleTree, StoreOptions} from 'vuex'
// import app from './modules/app'
import user, {UserState} from './modules/user'
import getters from "@/store/getters";
import app, {AppState} from "@/store/modules/app";

export interface RootState {
    user: UserState
    app: AppState
}

Vue.use(Vuex);

const modules:ModuleTree<RootState> = {
    user,app
};
const options:StoreOptions<RootState> = {
    modules,
    getters,
};

export default new Vuex.Store(options);
