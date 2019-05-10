import { schema } from 'normalizr'

const todoSchema = new schema.Entity('todos', {
  user: new schema.Entity('users')
})

export default todoSchema
