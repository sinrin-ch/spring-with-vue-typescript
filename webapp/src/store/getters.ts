import {GetterTree} from "vuex";
import RootState from "@/store/RootState";

const getters: GetterTree<RootState, RootState> = {
    avatar: state => state.user.avatar,
    sidebar(state) {
        return state.app.sidebar;
    },
    device: state => state.app.device,
};

export default getters;
