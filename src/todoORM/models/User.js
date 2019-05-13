import { Model, attr } from 'redux-orm'

class User extends Model {}

User.modelName = 'User'
User.fields = {
  id: attr(),
  name: attr(),
  status: attr()
}

export default User
