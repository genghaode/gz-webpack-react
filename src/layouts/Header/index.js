import React, { Component } from 'react'
import { connect } from 'react-redux'

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
    <div>
    	<h1>{pageConfig[props.pathname].title}</h1>
    </div>
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
