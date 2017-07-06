import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { Layout } from 'antd'

import { Sider, Header, Footer } from '../../'


import { Route } from 'react-router-dom'
import { Home, Category, User } from '../../containers'

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
				<Layout style={{minHeight: '100vh'}}>
					<GSider />
				  <Layout>
				    <GHeader />
				    <Layout.Content style={{ margin: '16px' }}>
				      <div style={{ padding: 24, background: '#fff',  }}>
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
				      </div>
				    </Layout.Content>
				    <GFooter />
				  </Layout>
				</Layout>
    	 </ConnectedRouter>
	  </Provider>
	)
}
