import React from 'react'
import { render } from 'react-dom'
import { App } from './routes'

import './index.css'

const root = document.getElementById('app')

if (__DEV__) {
  console.log('开发环境')
}
if (__PROD__) {
  console.log('生产环境')
}



render(<App />, root)
