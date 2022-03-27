// 导入配置好的 axios 实例
import axios from './http'

const build = {
  // 获取用例
  getBuild(params){
    return axios({
      method: 'get',
      url: '/build',
      // get 请求需要通过 url 拼接请求参数
      params: params
    })
  },
//   // 添加用例
//   addbuild(data){
//     return axios({
//       method: 'post',
//       url: '/build',
//       // 如果是传递请求体，需要使用 data 来传参
//       data: data
//     })
//   },
}

export default build