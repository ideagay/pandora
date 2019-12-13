import axios from 'axios';
import qs from 'qs';

const instance = axios.create({
    baseURL: 'http://localhost:4000/api',
    timeout: 20000,
    headers: {'Content-Type':'application/x-www-form-urlencoded'}
});

// 响应拦截器
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    window && window.vm.$message.error('接口出错了');
    return Promise.reject(error);
});

instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.params = config.params || {};
    config.data = config.data || {};
    if (config.method === 'get') {
        config.params.ref = 'master';
        config.params.private_token = '7A6eXwHM6q4JvHESZvkY';
    } else if (config.method === 'post') {
        config.data.ref = 'master';
        config.data.private_token = '7A6eXwHM6q4JvHESZvkY';
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default instance;