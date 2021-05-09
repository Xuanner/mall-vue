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

export var recommendData = Mock.mock('/recommend.json',{
  'recommends': [{
    'id': 1,
    'img': "@IMAGE('88x88','#ffcc33')",
    'title': 'Hot',
    'link': 'www.baidu.com'
  },{
    'id': 2,
    'img': "@IMAGE('88x88','#fb0a2a')",
    'title': 'Woman',
    'link': 'www.baidu.com'
  },{
    'id': 3,
    'img': "@IMAGE('88x88','#02adea')",
    'title': 'Men',
    'link': 'www.baidu.com'
  },{
    'id': 4,
    'img': "@IMAGE('88x88','#ccbbff')",
    'title': 'Children',
    'link': 'www.baidu.com'
  }]
})