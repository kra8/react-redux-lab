import { Model, fk, many, attr } from 'redux-orm'

class Todo extends Model {}

Todo.modelName = 'Todo'
Todo.fields = {
  id: attr(),
  body: attr(),
  status: attr(),
  userId: fk('User', 'todos'),
  tags: many('Tag', 'todos')
}

export default Todo
