import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducer from './reducers'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

const createStoreWithMiddleWare = applyMiddleware(
  thunk,
  logger,
  routerMiddleware(createHistory())
)(createStore)

export const store = createStoreWithMiddleWare(reducer)
