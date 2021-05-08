import { request } from './request'

export function getSlidBanners() {
  return request({
    url: '/swiper.json'
  })
}