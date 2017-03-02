import { fetchTest } from '../../api'

export const addAction = { type: 'add' }

export const minusAction = () => {
  return (dispatch, getState) => {
    fetchTest().then((res) => {
      console.log(res)
      return dispatch({ type: "minus" })
    }).catch((err) => {
      console.log(err)
    })
  }
}
