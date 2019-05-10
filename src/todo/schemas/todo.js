import { schema } from 'normalizr'
import Entity from '../../normalizer/Entity'
import Todo from '../models/Todo'
import User from '../models/User'

const todoSchema = new Entity('todos', Todo, {
  user: new Entity('users', User)
})

export default todoSchema
