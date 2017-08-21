import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { addAction, minusAction } from '../../containers'

const _Home = (props) => {
  const { num1, onClick1, num2, onClick2 } = props

  return (
    <div style={{height: '2000px'}}>
      Home hello cc
      <Button type="primary" onClick={onClick1}>按钮1</Button>
      {num1}
      <Button onClick={onClick2}>按钮2</Button>
      {num2}
      {props.children}
    </div>
  )
}

export const Home = connect(
  (state) => {
    return {
      num1: state.test1,
      num2: state.test2
    }
  }, (dispatch) => {
    return {
      onClick1: () => dispatch(addAction),
      onClick2: () => dispatch(minusAction())
    }
  }
)(_Home)