import { Record } from 'immutable'

class Todo extends Record({
  id: null,
  body: '',
  status: 0,
  user: null
}){}

export default Todo
