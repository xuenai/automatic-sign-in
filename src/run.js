process.env.TZ = 'Asia/Shanghai'
const moment = require('moment')
const { range } = require('./config')
const { addAttendCheckin } = require('./api')

;(async () => {
  await sleep(1000 || Math.random() * range);
  if (checkType()) addAttendCheckinHandler()
})();

// 判断上午下午
function checkType () {
  const timeStr = moment(Date.now()).format('HH:mm')
  return timeStr < '10:00' || timeStr > '18:30'
}

// 签退签到
let countFail = 0
async function addAttendCheckinHandler () {
  addAttendCheckin().catch(async (e) => {
    console.log('error', e)
    await sleep(1000);
    countFail++;
    if (countFail < 3) {
      addAttendCheckinHandler()
    }
  })
}

async function sleep (interval) {
  return new Promise(r => setTimeout(r, interval))
}