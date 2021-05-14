import { request } from './request'
import '@/mock/mock.js'

export function getSlidBanners() {
  return request({
    url: '/swiper.json'
  })
}

export function getRecommends() {
  return request({
    url: '/recommend.json'
  })
}

export function getTypeData() {
  return request({
    url: '/type.json'
  })
}

export function getGoods(type, page) {
  return request({
    url: '/goods.json',
    type: 'post',
    dataType: 'json',
    data: {
      type,
      page
    }
  })
}