import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux-immutable'
import counterReducer from './counter/reducer'
import todoReducer from './todo/reducer'

const store = createStore(
  combineReducers({
    counter: counterReducer,
    todo: todoReducer
  })
)

const ReduxProvider = props => {
  return <Provider store={store} {...props}/>
}

export default ReduxProvider
