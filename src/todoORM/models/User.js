import { Model, attr } from 'redux-orm'
import uuid from 'uuid/v4'

class User extends Model {}

User.modelName = 'User'
User.fields = {
  id: attr({ getDefault: () => uuid() }),
  name: attr(),
  status: attr()
}

export default User
