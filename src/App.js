import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Counter from './counter'
import Todo from './todo'

const App = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/todo'>Todo</Link>
        </li>
      </ul>
      <Route exact path='/' component={Counter} />
      <Route exact path='/todo' component={Todo} />
    </BrowserRouter>
  )
}

export default App
