import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { Home, Category, User } from '../../containers'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

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

export const Tab = (props) => {
  return (
  	<ConnectedRouter history={history}>
	    <div> 
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
	    	<div>
	    		<Link to="/" activeClassName="active"><i className="iconfont icon-wxbzhuye"></i>首页</Link>
		    	<Link to="/category" activeClassName="active"><i className="iconfont icon-all"></i>分类</Link>
		    	<Link to="/user" activeClassName="active"><i className="iconfont icon-account"></i>我的</Link>
	    	</div>
	    </div>
    </ConnectedRouter>
  )
}
