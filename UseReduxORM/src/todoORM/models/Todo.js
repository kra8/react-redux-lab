import { Model, fk, many, attr } from 'redux-orm'
import uuid from 'uuid/v4'

class Todo extends Model {}

Todo.modelName = 'Todo'
Todo.fields = {
  id: attr({ getDefault: () => uuid() }),
  body: attr(),
  status: attr(),
  user: fk('User', 'todos'),
  tags: many('Tag', 'todos')
}

export default Todo
