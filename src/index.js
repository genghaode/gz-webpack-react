import React from 'react'
import { render } from 'react-dom'
import { Root } from './routes'

import 'antd/dist/antd.css'
import './index.css'

const root = document.getElementById('app')

if (__DEV__) {
  console.log('开发环境')
}
if (__PROD__) {
  console.log('生产环境')
}

render(<Root />, root)
