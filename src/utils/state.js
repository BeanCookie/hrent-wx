import wepy from 'wepy'
const USER_KEY = 'user_key'

function sleep(delay) {
  var start = (new Date()).getTime()
  while ((new Date()).getTime() - start < delay) {
    continue
  }
}

function checkLogin() {
  if (wepy.getStorageSync(USER_KEY) === '') {
    wepy.showToast({
      title: '请先登录',
      icon: 'none',
      duration: 3000
    })
    sleep(1000)
    wepy.redirectTo({ url: 'login' })
  }
}

function isLogin() {
  return wepy.getStorageSync(USER_KEY) !== ''
}

function saveUser(user) {
  wepy.setStorageSync(USER_KEY, user)
}

function getUser() {
  return wepy.getStorageSync(USER_KEY)
}

function removeUser() {
  wepy.clearStorage(USER_KEY)
}

module.exports = {
  sleep,
  checkLogin,
  isLogin,
  saveUser,
  removeUser,
  getUser
}
