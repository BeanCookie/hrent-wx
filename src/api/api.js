import {
  wxRequest
} from '@/utils/wxRequest'

const apiMall = 'http://127.0.0.1:5000'
const apiMap = 'https://restapi.amap.com/v3/config'
const key = '8ea44dbee078819bc8ea60e65debad03'

/**
 * 搜索住房
 */
const query = (params) => wxRequest(params, apiMall + '/query')

/**
 * 获取区域
 */
const district = (params) => wxRequest(params, apiMap + '/district')

export default {
  key,
  query,
  district
}
