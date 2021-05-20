import Mock from 'mockjs'

const Random = Mock.Random
const img1 = Random.image('375x400','#ff8888');
const img2 = Random.image('375x400','#88aa00');
const img3 = Random.image('375x400','#ccccff');
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

export var details = Mock.mock(/details.json/, function(options){
  switch(JSON.parse(options.body).id){
    case '1':
      return detail1;
    case '2':
      return detail2;
    case '3':
      return detail3;
    default:
      return detail4;
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
let detail1 = {
  'product': {
    'images': [{
      'id': 1,
      'img': img1,
      'link': 'www.baidu.com'
    },{
      'id': 2,
      'img': img2,
      'link': 'www.baidu.com'
    },{
      'id': 3,
      'img': img3,
      'link': 'www.baidu.com'
    }],
    'title': '运动套装2021年新款女装可盐可甜减龄轻熟风时尚两件套夏季',
    'price': 234
  },
  params: [
    {
      'key': '材质',
      'value': '棉'
    },
    {
      'key': '尺寸',
      'value': 'S, M, L, XL'
    },
    {
      'key': '颜色',
      'value': '白, 黑, 红'
    },
    {
      'key': '尺寸',
      'value': 'S, M, L, XL'
    },
    {
      'key': '颜色',
      'value': '白, 黑, 红'
    }
  ],
  comments: [
    {
      'date': '2021-3-2',
      'content': 'good'
    },
    {
      'date': '2021-3-2',
      'content': 'good'
    },
    {
      'date': '2021-3-2',
      'content': 'good'
    },
    {
      'date': '2021-3-2',
      'content': 'good'
    },
    {
      'date': '2021-3-2',
      'content': 'good'
    }
  ],
  recommends: popGoods
}
let detail2 = {
  'product': {
    'images': [{
      'id': 1,
      'img': img1,
      'link': 'www.baidu.com'
    },{
      'id': 2,
      'img': img2,
      'link': 'www.baidu.com'
    },{
      'id': 3,
      'img': img3,
      'link': 'www.baidu.com'
    }],
    'title': '2021年新款女装轻熟风时尚两件套夏季',
    'price': 234
  },
  params: [
    {
      'key': '材质',
      'value': '棉'
    },
    {
      'key': '尺寸',
      'value': 'S, M, L, XL'
    },
    {
      'key': '颜色',
      'value': '白, 黑, 红'
    },
    {
      'key': '尺寸',
      'value': 'S, M, L, XL'
    },
    {
      'key': '颜色',
      'value': '白, 黑, 红'
    }
  ],
  comments: [
    {
      'date': '2021-3-2',
      'content': 'good'
    },
    {
      'date': '2021-3-2',
      'content': 'good'
    },
    {
      'date': '2021-3-2',
      'content': 'good'
    },
    {
      'date': '2021-3-2',
      'content': 'good'
    },
    {
      'date': '2021-3-2',
      'content': 'good'
    }
  ],
  recommends: popGoods
}
let detail3 = {
  'product': {
    'images': [{
      'id': 1,
      'img': img1,
      'link': 'www.baidu.com'
    },{
      'id': 2,
      'img': img2,
      'link': 'www.baidu.com'
    },{
      'id': 3,
      'img': img3,
      'link': 'www.baidu.com'
    }],
    'title': '新款女装可盐可甜减龄轻熟风时尚两件套夏季',
    'price': 234
  },
  params: [
    {
      'key': '材质',
      'value': '棉'
    },
    {
      'key': '尺寸',
      'value': 'S, M, L, XL'
    },
    {
      'key': '颜色',
      'value': '白, 黑, 红'
    },
    {
      'key': '尺寸',
      'value': 'S, M, L, XL'
    },
    {
      'key': '颜色',
      'value': '白, 黑, 红'
    }
  ],
  comments: [
    {
      'date': '2021-3-2',
      'content': 'good'
    },
    {
      'date': '2021-3-2',
      'content': 'good'
    },
    {
      'date': '2021-3-2',
      'content': 'good'
    },
    {
      'date': '2021-3-2',
      'content': 'good'
    },
    {
      'date': '2021-3-2',
      'content': 'good'
    }
  ],
  recommends: popGoods
}
let detail4 = {
  'product': {
    'images': [{
      'id': 1,
      'img': img1,
      'link': 'www.baidu.com'
    },{
      'id': 2,
      'img': img2,
      'link': 'www.baidu.com'
    },{
      'id': 3,
      'img': img3,
      'link': 'www.baidu.com'
    }],
    'title': '运动套装时尚两件套夏季',
    'price': 234
  },
  params: [
    {
      'key': '材质',
      'value': '棉'
    },
    {
      'key': '尺寸',
      'value': 'S, M, L, XL'
    },
    {
      'key': '颜色',
      'value': '白, 黑, 红'
    },
    {
      'key': '尺寸',
      'value': 'S, M, L, XL'
    },
    {
      'key': '颜色',
      'value': '白, 黑, 红'
    }
  ],
  comments: [
    {
      'date': '2021-3-2',
      'content': 'good'
    },
    {
      'date': '2021-3-2',
      'content': 'good'
    },
    {
      'date': '2021-3-2',
      'content': 'good'
    },
    {
      'date': '2021-3-2',
      'content': 'good'
    },
    {
      'date': '2021-3-2',
      'content': 'good'
    }
  ],
  recommends: popGoods
}