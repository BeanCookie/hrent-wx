import {
  wxRequest
} from '@/utils/wxRequest'

const apiMall = 'http://localhost:5000'

/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
const query = (params) => wxRequest(params, apiMall + '/query')

export default {
  query
}
