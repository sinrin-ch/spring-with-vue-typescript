import {ActionTree, Module, MutationTree} from "vuex";
import store from "@/store";
import {SET_AVATAR} from "@/store/mutation-types";
import userApi from "@/api/userApi";
import RootState from "@/store/RootState";
import Cookies from 'js-cookie'

export interface UserState {
    avatar: string,
}

const state: UserState = {
    avatar: '',
};

const mutations: MutationTree<UserState> = {
    [SET_AVATAR](state, avatar) {
        state.avatar = avatar;
    }
};

const actions: ActionTree<UserState, RootState> = {
    login({commit}, {username, password}: { username: string, password: string }): Promise<any> {
        return new Promise((resolve, reject) => {
            userApi.login(username.trim(), password).then(({data}) => {
                Cookies.set('loginUser',data.username);
                resolve(data);
            }).catch(error => reject(error));
        })
    },
};

const userModule: Module<UserState, RootState> = {
    state,
    mutations,
    actions,
};
export default userModule;

export function login({username, password}: { username: string, password: string }): Promise<any> {
    return store.dispatch('login', {username, password});
}



