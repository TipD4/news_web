import axios from 'axios'

const request = axios.create({
  baseURL: 'https://www.fastmock.site/mock/c6545c717f98dc1a6910d7a16011fb03/api',
  timeout: 5000,
})

// 请求拦截器
request.interceptors.request.use((config) => {
  
  return config
})

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 成功的回调
    if (response.data.message) {
   
    }
    return response.data
  },
  (error) => {
    // 失败的回调，处理http网络错误
    let message = ''
    let status = error.response.status
    switch (status) {
      case 401:
        message = 'TOKEN过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器出现问题'
        break
      default:
        message = '网络异常'
    }

    return Promise.reject(error)
  },
)


export default request