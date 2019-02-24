import wepy from 'wepy'

const wxRequest = async (params = {}, url) => {
  let data = params.query || {}
  console.log(data)
  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    dataType: 'json',
    data: data,
    header: {
      'Content-Type': 'application/json'
    }
  })
  return res
}

module.exports = {
  wxRequest
}
