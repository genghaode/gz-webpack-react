import React from 'react'
import { render } from 'react-dom'
import { App } from './layouts'
import { AppContainer } from 'react-hot-loader'

import "antd/dist/antd.css"

import './index.css'
import './assets/fonts/iconfont.css'

var FastClick = require('fastclick')
FastClick.attach(document.body)

const root = document.getElementById('app')

if (__DEV__) {
  console.log('开发环境')
}
if (__PROD__) {
  console.log('生产环境')
}

const MyRender = Component =>
  render(
    <AppContainer>
          <Component />
        </AppContainer>,
    root
  );

MyRender(App)

if (module.hot) {
  module.hot.accept('./layouts', () => { MyRender(App) });
}