import Mock from 'mockjs'

const Random = Mock.Random

Mock.mock(/\/api\/test/, {
  'myData|10': [{
    'storeName': '@name',
    'storeAddress': '@city(true)',
    'fowllerNum|0-10000': 10,
    'fowllerFlag|1': true,
    'img': '@dataImage("450x300", "@name")',
    'id|+1': 0
  }]
})
