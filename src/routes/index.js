import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Home, Category, User } from '../containers'
import { store } from '../redux/configureStore'
import { Provider } from 'react-redux'

const history = syncHistoryWithStore(browserHistory, store)

export const App = () => {
  return (
    <Provider store={store}>
		  <Router history={history}>
		    <Route path="/" component={Home}>
			    <Route path="category" component={Category} />
			    <Route path="user" component={User} />
		    </Route>
		  </Router>
	  </Provider>
  )
}
