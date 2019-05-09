import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { normalize, schema } from 'normalizr'
import actions from './actions'

// const normalizedData = normalize(data, article);

const Todo = () => {
  const todos = useSelector(state => state.getIn(['todo', 'todos']))
  const dispatch = useDispatch()
  const addTodo = React.useCallback(text => dispatch(actions.addTodo(text)), [dispatch])
  const deleteTodo = React.useCallback(id => dispatch(actions.deleteTodo(id)), [dispatch])
  const [value, setValue] = React.useState('')
  const handleChange = event => setValue(event.target.value)

  const handleKeyDown = event => {
    if (event.keyCode === 13) {
      addTodo(value)
      setValue('')
    }
  }

  const handleDelete = id => () => deleteTodo(id)

  return (
    <>
      <input onChange={handleChange} value={value} onKeyDown={handleKeyDown}/>
      <ul>
        {todos.map(todo => (
          <li key={todo.get('id')}><button onClick={handleDelete(todo.get('id'))}>x</button> {todo.get('text')}</li>
        ))}
      </ul>
    </>
  )
}

export default Todo
