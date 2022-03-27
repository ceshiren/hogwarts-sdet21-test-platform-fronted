// 导入配置好的 axios 实例
import axios from './http'

const plan = {
  // 获取用例
  getPlan(params){
    return axios({
      method: 'get',
      url: '/plan',
      // get 请求需要通过 url 拼接请求参数
      params: params
    })
  },
  // 添加用例
  addPlan(data){
    return axios({
      method: 'post',
      url: '/plan',
      // 如果是传递请求体，需要使用 data 来传参
      data: data
    })
  },
}

export default plan