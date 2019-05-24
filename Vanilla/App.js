import React from 'react'

const data = [
  { id: 1, body: '#ticket 1' },
  { id: 2, body: '#ticket 2' },
  { id: 3, body: '#ticket 3' }
]

const App = () => {
  return (
    <div>
      <select>
        <option value='1'>value1</option>
        <option value='2'>value2</option>
      </select>
      <input />
      <ul>
        {data.map(todo => (
          <li key={todo.id}>{todo.body}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
