import {UserState} from "@/store/modules/userModule";
import {AppState} from "@/store/modules/appModule";

export default interface RootState {
    user: UserState
    app: AppState
}
