import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Home, Category, User } from '../containers'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
	    <Route path="category" component={Category} />
	    <Route path="user" component={User} />
    </Route>
  </Router>
)
