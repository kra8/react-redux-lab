import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux-immutable'
import createSagaMiddleware from 'redux-saga'
import counterReducer from './counter/reducer'
import todoReducer from './todoORM/reducer'
import todoSagas from './todoORM/sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({
    counter: counterReducer,
    todoORM: todoReducer
  }),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(todoSagas)

const ReduxProvider = props => {
  return <Provider store={store} {...props}/>
}

export default ReduxProvider
