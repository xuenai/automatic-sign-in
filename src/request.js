const axios = require('axios');
const config = require('./config');
const querystring = require('querystring');
const http = require('http')

const request = axios.create({
  baseURL: config.baseURL,
  headers: {
    Origin: config.Host,
    Host: config.Host,
    'User-Agent': 'YoueData_iOS/2.1.5 (iPhone; iOS 14.5.1; Scale/2.00)',
    'Accept-Language': 'zh-Hans-CN;q=1',
    'Accept-Encoding': 'gzip, deflate',
    Cookie: 'UM_distinctid=17de046fac17f0-02bbbbb76672d3-3b176850-3d10d-17de046fac27f7'
  },
  httpAgent: new http.Agent({ keepAlive: true })
})

request.interceptors.request.use(config => {
  if (['POST', 'post'].includes(config.method)) {
    config.data = querystring.stringify(config.data)
  }
  return config
})

request.interceptors.response.use(function (response) {
  if (response.data && response.data.code == 0) {
    return response.data
  } else {
    return Promise.reject(response);
  }
}, function (error) {
  return Promise.reject(error);
});

module.exports = request