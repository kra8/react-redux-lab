import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import actions from './actions'
import todosSelector from './selectors/todos'
import usersSelector from './selectors/users'
import userSelector from './selectors/user'
import ReactJson from 'react-json-view'

const useActions = () => {
  const dispatch = useDispatch()

  return React.useMemo(() => {
    const requestGetTodos = () => dispatch(actions.requestGetTodos())
    const requestAddTodos = text => dispatch(actions.requestAddTodos(text))
    const requestDeleteTodos = id => dispatch(actions.requestDeleteTodos(id))
    const selectUser = id => dispatch(actions.selectUser(id))
    return { requestGetTodos, requestAddTodos, requestDeleteTodos, selectUser }
  }, [dispatch])
}

const useDidMount = callback => {
  React.useEffect(() => {
    callback()
  }, [])
}

const Todo = () => {
  const user = useSelector(userSelector)
  const todos = useSelector(todosSelector)
  const users = useSelector(usersSelector)
  const store = useStore()
  const { requestGetTodos, requestAddTodos, requestDeleteTodos, selectUser } = useActions()
  const [text, setText] = React.useState('')
  // handlers
  const handleSelectUser = event => selectUser(event.target.value)
  const handleChangeText = React.useCallback(event => setText(event.target.value), [setText])
  const handleDelete = id => () => requestDeleteTodos(id)

  // effects
  useDidMount(() => {
    requestGetTodos()
  })

  // console.log('@render', todos, users)
  const handleKeyDown = event => {
    if (event.keyCode === 13) {
      requestAddTodos(text)
      setText('')
    }
  }

  return (
    <>
      <select value={user.id} onChange={handleSelectUser}>
        {users.map(user => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}
      </select>
      <input onChange={handleChangeText} onKeyDown={handleKeyDown} value={text} />
      <ul>
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <button onClick={handleDelete(todo.id)}>x</button>
              <span>{todo.body} : {todo.user.name}</span>
            </li>
          )
        })}
      </ul>
      <ReactJson src={store.getState().toJS()}></ReactJson>
    </>
  )
}

export default Todo
