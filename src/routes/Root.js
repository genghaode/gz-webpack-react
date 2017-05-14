import React, { Component } from 'react'
import { Route, IndexRoute } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { App } from '../layouts'

const history = createHistory()

export const Root = () => {
  return (
    <Provider store={store}>
	    <ConnectedRouter history={history} >
	    	<div>
				  <Route path="/" component={App} />    		
	    	</div>
	  	</ConnectedRouter>
	  </Provider>
  )
}
