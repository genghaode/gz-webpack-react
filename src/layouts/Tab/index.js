import React, { Component } from 'react'
import { Link } from 'react-router'

export const Tab = (props) => {
  return (
    <div>
    	<Link to="/" activeClassName="active">首页</Link>
    	<Link to="/category" activeClassName="active">分类</Link>
    	<Link to="/user" activeClassName="active">我的</Link>
    </div>
  )
}
