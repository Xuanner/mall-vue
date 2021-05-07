import Mock from 'mockjs'

export var swiperData = Mock.mock('/swiper.json',{
  'swiper': [{
    'id': 1,
    'img': "@IMAGE('375x150','#ffcc33')",
    'link': 'www.baidu.com'
  },{
    'id': 2,
    'img': "@IMAGE('375x150','#fb0a2a')",
    'link': 'www.baidu.com'
  },{
    'id': 3,
    'img': "@IMAGE('375x150','#02adea')",
    'link': 'www.baidu.com'
  }]
})