import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

// axios的基本共通配置
const axiosRequestConfig: AxiosRequestConfig = {
    baseURL: process.env.BASE_API, // api的base_url
    timeout: 5000, // 请求超时时间
    withCredentials: true,  // 携带cookie信息
};
// 创建一个axios实例
const axiosInstance: AxiosInstance = axios.create(axiosRequestConfig);

export default axiosInstance;
