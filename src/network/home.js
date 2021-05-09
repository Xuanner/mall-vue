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