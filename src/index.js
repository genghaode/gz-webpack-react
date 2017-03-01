import React from 'react'
import { render } from 'react-dom'
import routes from './routes'

import './index.css'

import axios from 'axios'

const root = document.getElementById('app')

if (__DEV__) {
  console.log('开发环境')
  axios.get('localhost:9090/api/test').then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
}
if (__PROD__) {
  console.log('生产环境')
}

render(routes, root)
