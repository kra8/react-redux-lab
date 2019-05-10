import { Record } from 'immutable'

class User extends Record({
  id: null,
  name: '',
  status: 0,
  todos: []
}){}

export default User
