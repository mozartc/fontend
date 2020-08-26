import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/hello',
    method: 'get',
    data:params
  })
}