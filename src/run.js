process.env.TZ = 'Asia/Shanghai'
const moment = require('moment')
const { range } = require('./config')
const { addAttendCheckin, getSignDateRange } = require('./api')
const schedule = require('node-schedule')

schedule.scheduleJob('0 33 9 * * *', task)
schedule.scheduleJob('0 10 18 * * *', task)

// 处理任务
function task () {
  getSignDateRange().then(async data => {
    const [date, time] = moment(Date.now()).format('YYYY-MM-DD HH:mm').split(' ')
    const week = new Date().getDay()
    const two = data[date] || ([0, 6].includes(week) ? [0, 0] : [1, 1]) // 默认周末上午下午都不打卡，周一到周五上午下午都打卡

    if (
      (time > '12:00' && two[1]) || // 下午打卡
      (time < '12:00' && two[0]) // 上午打卡
    ) {
      await sleep(Math.random() * range)
      addAttendCheckinHandler()
    }
  })
}

// 签退签到
async function addAttendCheckinHandler (countFail = 0) {
  addAttendCheckin().catch(async (e) => {
    console.log('error', e)
    await sleep(1000)
    countFail++
    if (countFail <= 3) {
      addAttendCheckinHandler(countFail)
    }
  })
}

async function sleep (interval) {
  return new Promise(r => setTimeout(r, interval))
}
