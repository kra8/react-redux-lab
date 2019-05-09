import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

export const actions = {
  increment: () => ({ type: 'increment' }),
  decrement: () => ({ type: 'decrement' })
}

const initialState = {
  count: 0
}

const reducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {...state, count: state.count + 1 }
  }

  if (action.type === 'decrement') {
    return {...state, count: state.count - 1 }
  }
  
  return state
}

const store = createStore(reducer)

const ReduxProvider = props => {
  return <Provider store={store} {...props}/>
}

export default ReduxProvider
