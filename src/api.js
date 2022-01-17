const request = require('./request')
const config = require('./config')
const moment = require('moment')
// Cookie: UM_distinctid=17de046fac17f0-02bbbbb76672d3-3b176850-3d10d-17de046fac27f7
// accessToken=94f70c898fcd453dbc5e247adf736fde000000&
// dataosAccountId=4633c20a1a6742ef8ecb8fa631bb7af2&
// token=d6dd196f44681533ff8074821762de37
// 签到
// const login = () => {
//   return request({
//     url: '/',
//     method: 'POST',
//     data: Object.assign({
//       checktime: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
//     }, config.sendData)
//   })
// }

// 签退
// const loginOut = () => {
//   return request({
//     url: '/pushMessage/attendCheckin/addAttendCheckin',
//     method: 'POST',
//     data: Object.assign({
//       checktime: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
//     }, config.sendData)
//   })
// }

// 签退签到
const addAttendCheckin = () => {
  return request({
    url: '/pushMessage/attendCheckin/addAttendCheckin',
    method: 'POST',
    data: Object.assign({
      checktime: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    }, config.sendData)
  })
}

module.exports = {
  // login,
  // loginOut,
  addAttendCheckin
}

// accessToken=560293438591455d924d47ab9b5b3069000000&
// dataosAccount=4633c20a1a6742ef8ecb8fa631bb7af2&
// platform=ios
// &userId=2833