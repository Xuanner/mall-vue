import Mock from 'mockjs'

const Random = Mock.Random
const img1 = Random.image('375x400','#ffcc33');
const img2 = Random.image('375x400','#fb0a2a');
const img3 = Random.image('375x400','#02adea');
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

export var typeNavData = Mock.mock('/type.json', {
  'type': ['pop', 'hot', 'sale']
})


export var goods = Mock.mock(/goods.json/, function(options){
  switch(JSON.parse(options.body).type){
    case 'pop':
      return popGoods;
    case 'hot':
      return hotGoods;
    case 'sale':
      return saleGoods;
    default:
      return popGoods;
  }
})

let popGoods = [
  {
    'id': 1,
    'img': img1,
    'link': 'www.baidu.com',
    'title': '[pop]this is pop goods',
    'price': 123.12,
    'collect': 9
  },{
    'id': 2,
    'img': img1,
    'link': 'www.baidu.com',
    'title': '[pop]this is pop goods',
    'price': 123.12,
    'collect': 9
  },{
    'id': 3,
    'img': img1,
    'link': 'www.baidu.com',
    'title': '[pop]this is pop goods',
    'price': 123.12,
    'collect': 9
  },{
    'id': 4,
    'img': img1,
    'link': 'www.baidu.com',
    'title': '[pop]this is pop goods',
    'price': 123.12,
    'collect': 9
  },{
    'id': 5,
    'img': img1,
    'link': 'www.baidu.com',
    'title': '[pop]this is pop goods',
    'price': 123.12,
    'collect': 9
  },{
    'id': 6,
    'img': img1,
    'link': 'www.baidu.com',
    'title': '[pop]this is pop goods',
    'price': 123.12,
    'collect': 9
  }
];
let hotGoods = [
  {
    'id': 1,
    'img': img2,
    'link': 'www.baidu.com',
    'title': '[hot]this is hot goods',
    'price': 224.54,
    'collect': 6
  },{
    'id': 2,
    'img': img2,
    'link': 'www.baidu.com',
    'title': '[hot]this is hot goods',
    'price': 123.12,
    'collect': 8
  },{
    'id': 3,
    'img': img2,
    'link': 'www.baidu.com',
    'title': '[hot]this is hot goods',
    'price': 123.12,
    'collect': 9
  },{
    'id': 4,
    'img': img2,
    'link': 'www.baidu.com',
    'title': '[hot]this is hot goods',
    'price': 123.12,
    'collect': 9
  },{
    'id': 5,
    'img': img2,
    'link': 'www.baidu.com',
    'title': '[hot]this is hot goods',
    'price': 123.12,
    'collect': 9
  },{
    'id': 6,
    'img': img2,
    'link': 'www.baidu.com',
    'title': '[hot]this is hot goods',
    'price': 123.12,
    'collect': 9
  }
];
let saleGoods = [
  {
    'id': 1,
    'img': img3,
    'link': 'www.baidu.com',
    'title': '[sale]this is sale goods',
    'price': 123.12,
    'collect': 9
  },{
    'id': 2,
    'img': img3,
    'link': 'www.baidu.com',
    'title': '[sale]this is sale goods',
    'price': 123.12,
    'collect': 9
  },{
    'id': 3,
    'img': img3,
    'link': 'www.baidu.com',
    'title': '[sale]this is sale goods',
    'price': 123.12,
    'collect': 9
  },{
    'id': 4,
    'img': img3,
    'link': 'www.baidu.com',
    'title': '[sale]this is sale goods',
    'price': 123.12,
    'collect': 9
  },{
    'id': 5,
    'img': img3,
    'link': 'www.baidu.com',
    'title': '[sale]this is sale goods',
    'price': 123.12,
    'collect': 9
  },{
    'id': 6,
    'img': img3,
    'link': 'www.baidu.com',
    'title': '[sale]this is sale goods',
    'price': 123.12,
    'collect': 9
  }
];