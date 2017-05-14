import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import { Header } from '../Header'
import { Home, Category, User } from '../../containers'
import { Tab } from '../Tab'

const routes = [{ 
	path: '/',
  exact: true,
  main: () => <Home />
},{ 
	path: '/category',
  main: () => <Category />
},{ 
	path: '/user',
   main: () => <User />
}]

export const App = (props) => {
  return (
    <Provider store={store}>
    	<ConnectedRouter history={createHistory()}>
	    	<div>
				  <Header />
				  {
		    		routes.map((route, index) => (
		          <Route
		            key={index}
		            path={route.path}
		            exact={route.exact}
		            component={route.main}
		          />
		        ))
		      }
				  <Tab />
	    	</div>
    	 </ConnectedRouter>
	  </Provider>
	)
}
