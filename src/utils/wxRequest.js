import wepy from 'wepy'
import tip from './tip'

const wxRequest = async (params = {}, url) => {
  tip.loading()
  let data = params.query || {}
  let pathValue = params.pathValue || ''
  let res = await wepy.request({
    url: url + (params.method === 'GET' && pathValue ? '/' + pathValue : ''),
    method: params.method || 'GET',
    data: data,
    header: {
      'Content-Type': 'application/json'
    }
  })
  tip.loaded()
  return res
}

module.exports = {
  wxRequest
}
