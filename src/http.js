import Vue from 'vue'
import axios from 'axios'
import config from './config'

axios.defaults.baseURL = config.api;//设置axios的基础请求路径
axios.defaults.timeout = 2000;//设置axios的请求时间

// axios.interceptors.request.use(function (config) {
//   // console.log(config);
//   return config;
// })

axios.loadData = async function (url) {
  const resp = await axios.get(url);
  return resp.data;
}

Vue.prototype.$http = axios;//将axios添加到vue的原型，这样一切实例都可以使用该对象
