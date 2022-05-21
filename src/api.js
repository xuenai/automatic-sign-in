const request = require('./request')
const config = require('./config')
const moment = require('moment')
const axios = require('axios')

// 签退签到
const addAttendCheckin = () => {
  return request({
    url: '/pushMessage/attendCheckin/addAttendCheckin',
    method: 'POST',
    data: Object.assign({
      checktime: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    }, config.sendData())
  })
}

// 获取打卡日期条件
const getSignDateRange = () => {
  return axios({
    url: 'https://easydoc.net/mock/J8Dzqpqc/signDateRange'
  }).then(({ data }) => {
    return data && data.data || {}
  })
}

module.exports = {
  addAttendCheckin,
  getSignDateRange
}
