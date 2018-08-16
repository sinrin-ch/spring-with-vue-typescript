import axios, {AxiosInstance} from 'axios';

const service: AxiosInstance = axios.create({
    baseURL: process.env.BASE_API, // api的base_url
    timeout: 5000 // 请求超时时间
});

export default service;
