import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Counter from './counter'
import Playground from './playground'

const App = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/playground'>Playground</Link>
        </li>
      </ul>
      <Route exact path='/' component={Counter} />
      <Route exact path='/playground' component={Playground} />
    </BrowserRouter>
  )
}

export default App
