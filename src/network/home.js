import {request} from './request'

// 获取multidata
export function getMultidata() {
  const config = {
    url: 'home/multidata'
  }
  return request(config)
}
