import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from './actions'
import todosSelector from './selectors/todos'
import usersSelector from './selectors/users'

const useActions = () => {
  const dispatch = useDispatch()

  return React.useMemo(() => {
    const requestGetTodos = () => dispatch(actions.requestGetTodos())
    const requestAddTodos = text => dispatch(actions.requestAddTodos(text))
    const requestDeleteTodos = id => dispatch(actions.requestDeleteTodos(id))
    return { requestGetTodos, requestAddTodos, requestDeleteTodos }
  }, [dispatch])
}

const useDidMount = callback => {
  React.useEffect(() => {
    callback()
  }, [])
}

const Todo = () => {
  const todos = useSelector(todosSelector)
  const users = useSelector(usersSelector)
  const { requestGetTodos, requestAddTodos, requestDeleteTodos } = useActions()
  const [state, setState] = React.useState({ body: '', user: 'user-1' })

  // handlers
  const handleChange = type => event => setState({ ...state, [type] :event.target.value })

  const handleKeyDown = event => {
    if (event.keyCode === 13) {
      requestAddTodos(state)
      setState({ ...state, body: '' })
    }
  }
  const handleDelete = id => () => requestDeleteTodos(id)

  // effects
  useDidMount(() => {
    requestGetTodos()
  })

  console.log('@render', state)

  return (
    <>
      <input onChange={handleChange('body')} value={state.body} onKeyDown={handleKeyDown}/>
      <select value={state.user} onChange={handleChange('user')}>
        {users.map(user => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}
      </select>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}><button onClick={handleDelete(todo.id)}>x</button> {todo.body} : {todo.user.name} </li>
        ))}
      </ul>
    </>
  )
}

export default Todo
