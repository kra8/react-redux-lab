import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from './counter/reducer'

const store = createStore(counterReducer)

const ReduxProvider = props => {
  return <Provider store={store} {...props}/>
}

export default ReduxProvider
