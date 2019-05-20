import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux'
import App from './App'

export default () => <Provider store={store}><App /></Provider>
