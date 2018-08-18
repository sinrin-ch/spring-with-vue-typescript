import {ActionTree, Module, MutationTree} from "vuex";
import Cookies from 'js-cookie'
import {CLOSE_SIDEBAR, TOGGLE_DEVICE, TOGGLE_SIDEBAR} from "@/store/mutation-types";
import RootState from "@/store/RootState";
import store from "@/store";

export interface AppState {
    sidebar: {
        opened: boolean,
        withoutAnimation: boolean,
    },
    device: string,
}

const state: AppState = {
    sidebar: {
        opened: !+Cookies.get('sidebarStatus'), // 0 是open
        withoutAnimation: false,
    },
    device: 'desktop',
};

const mutations: MutationTree<AppState> = {
    [TOGGLE_SIDEBAR](state) {     //  打开,关闭侧边栏
        Cookies.set('sidebarStatus', +state.sidebar.opened);
        state.sidebar.opened = !state.sidebar.opened;
        state.sidebar.withoutAnimation = false;
    },
    [CLOSE_SIDEBAR](state, withoutAnimation: boolean) {  //  关闭侧边栏
        Cookies.set('sidebarStatus', 1);
        state.sidebar.opened = false;
        state.sidebar.withoutAnimation = withoutAnimation;
    },
    [TOGGLE_DEVICE](state, device: string) {
        state.device = device;
    }
};

const actions: ActionTree<AppState, RootState> = {
    toggleSideBar({commit}): void {
        commit(TOGGLE_SIDEBAR)
    },
    closeSideBar({commit}, {withoutAnimation}) {
        commit(CLOSE_SIDEBAR);
    },
    toggleDevice({commit}, device) {
        commit(TOGGLE_DEVICE, device);
    }
};

const appModule: Module<AppState, RootState> = {
    state,
    mutations,
    actions
};
export default appModule;

export function toggleSideBar() {
    return store.dispatch('toggleSideBar');
}

export function closeSideBar(payload: { withoutAnimation: boolean }) {
    return store.dispatch('closeSideBar', payload.withoutAnimation)
}

export function toggleDevice(device: string) {
    return store.dispatch('toggleDevice', device);
}


