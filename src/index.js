import React from 'react'
import { render } from 'react-dom'
import routes from './routes'

import './index.css'

const root = document.getElementById('app')

if (__DEV__) {
	console.log('开发环境')
}
if (__PROD__) {
	console.log('生产环境')
}

const Home = () => {
	return (<h1 className="myH1">hello world</h1>)
}

render(<Home />, root)
  // render(routes, root)
