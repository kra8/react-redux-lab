import '@babel/polyfill'

import React from 'react'
import { render } from 'react-dom'
import App from './App'
import ReduxProvider from './ReduxProvider'

const rootElement = document.querySelector('#root')

render(<ReduxProvider><App /></ReduxProvider>, rootElement)
