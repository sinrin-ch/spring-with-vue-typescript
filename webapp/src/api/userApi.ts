import request from "@/utils/request";
import {AxiosRequestConfig} from "axios";

export function login(username, password) {
    const config: AxiosRequestConfig = {
        url: '/api/user/login',
        method: 'post',
        data: {username, password},
    };
    return request(config);
}

export default {login};
