import React, { Component } from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import './index.css'

const pageConfig = {
  '/': {
    'title': '首页头部标题',
  },
  '/user': {
    'title': '我的头部标题'
  },
  '/category': {
    'title': '分类头部标题'
  }
}

const _Header = (props) => {
  return (
    <Layout.Header className="header">
      <div className="gTr">
        <h1 className="gTdM100 headerT">{pageConfig[props.pathname].title}</h1>
        <a className="gTd" href="javascript:void(0)">退出</a>        
      </div>

    </Layout.Header>
  )
}

export const Header = connect(
  (state) => {
    console.log(state)
    return {
      pathname: state.routing.location.pathname
    }
  }, (dispatch) => {
    return {

    }
  }
)(_Header)
