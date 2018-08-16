import {Module, MutationTree} from "vuex";
import {RootState} from "@/store";
import {SET_AVATAR} from "@/store/mutation-types";

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

const userModule: Module<UserState, RootState> = {
    state,
    mutations,
};

export default userModule;
