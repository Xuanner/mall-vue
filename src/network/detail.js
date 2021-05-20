import {request} from './request'
import '@/mock/mock'

export function getDetails(id) {
  return request({
    url: '/details.json',
    type: 'post',
    dataType: 'json',
    data: {
      id
    }
  })
}