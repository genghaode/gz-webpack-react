import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import './index.css'

class _Sider extends Component {
	constructor(props){
		super(props)
		this.state = {
   		collapsed: false,
    	mode: 'inline',
		}
	}
	render(){
		return (
			<Layout.Sider
				id="gSider"
			  collapsible
			  collapsed={this.state.collapsed}
			  onCollapse={(collapsed)=>this._onCollapse(collapsed)}
			>
			  <div className="logo" />
			  <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['1']}>
			    <Menu.Item key="1">
			      <span>
			        <Icon type="file" />
			        <span className="nav-text"><NavLink to="/" activeClassName="active">首页</NavLink></span>
			      </span>
			    </Menu.Item>
			    <Menu.SubMenu
			      key="sub1"
			      title={<span><Icon type="user" /><span className="nav-text">分类</span></span>}
			    >
			      <Menu.Item key="2"><NavLink to="/category" activeClassName="active">分类1</NavLink></Menu.Item>
			      <Menu.Item key="3"><NavLink to="/category" activeClassName="active">分类2</NavLink></Menu.Item>
			    </Menu.SubMenu>
			    <Menu.SubMenu
			      key="sub2"
			      title={<span><Icon type="team" /><span className="nav-text">我的</span></span>}
			    >
			      <Menu.Item key="4"><NavLink to="/user" activeClassName="active">我的1</NavLink></Menu.Item>
			      <Menu.Item key="5"><NavLink to="/user" activeClassName="active">我的2</NavLink></Menu.Item>
			    </Menu.SubMenu>
			  </Menu>
			</Layout.Sider>
		)		
	}
	_onCollapse(collapsed){
		console.log(collapsed)
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    })
	}
}

_Sider.__ANT_LAYOUT_SIDER = true

export const Sider = _Sider
