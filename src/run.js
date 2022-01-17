const moment = require('moment')
const { login, loginOut } = require('./api')

const range = 3 * 60 * 1000;

async function sleep (interval) {
  return new Promise(r => setTimeout(r, interval))
}

// 判断上午下午  0 1
function checkType () {
  const timeStr = moment(Date.now()).format('HH:mm')
  if (timeStr < '10:00') return 0
  if (timeStr > '18:30') return 1
}

// 签dao
let countInFail = 0
async function loginHandler () {
  login().catch(async () => {
    await sleep(1000);
    countInFail++;
    if (countInFail < 60) {
      loginHandler()
    }
  })
}

// 签退
let countOutFail = 0
async function loginOutHandler () {
  loginOut().catch(async () => {
    await sleep(1000);
    countOutFail++;
    if (countOutFail < 60) {
      loginOutHandler()
    }
  })
}

;(async () => {
  await sleep(1000 || Math.random() * range)
  const handler = [loginHandler, loginOutHandler][checkType()]
  console.log(handler, checkType())
  process.stdout.write(JSON.stringify({
    xt: 'hj'
  }) + '\n')
  return
  if (handler) {
    handler()
  }
})();
