import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export const Tab = (props) => {
  return (
    <div> 
  		<Link to="/" activeClassName="active"><i className="iconfont icon-wxbzhuye"></i>首页</Link>
    	<Link to="/category" activeClassName="active"><i className="iconfont icon-all"></i>分类</Link>
    	<Link to="/user" activeClassName="active"><i className="iconfont icon-account"></i>我的</Link>
    </div>
  )
}
