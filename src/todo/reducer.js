import { fromJS } from 'immutable'
import uuid from 'uuid/v4'

const initialState = fromJS({
  todos: [{
    id: uuid(),
    text: 'Hello todo'
  }]
})

const reducer = (state = initialState, action) => {
  if (action.type === '@lab/addTodo') {
    return state.update('todos', todos => todos.push(
      fromJS({
        id: uuid(),
        text: action.payload
      })
    ))
  }

  if (action.type === '@lab/deleteTodo') {
    return state.update('todos', todos => todos.filter(
      todo => todo.get('id') !== action.payload
    ))
  }

  return state
}

export default reducer
