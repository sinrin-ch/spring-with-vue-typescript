import {GetterTree} from "vuex";
import {RootState} from "@/store/index";

const getters: GetterTree<RootState, any> = {
    avatar: state => state.user.avatar,
    sidebar(state) {
        return state.app.sidebar;
    },
    device: state => state.app.device,
};

export default getters;
