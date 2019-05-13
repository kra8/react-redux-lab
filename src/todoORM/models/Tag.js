import { Model, attr } from 'redux-orm'

class Tag extends Model {}

Tag.modelName = 'Tag'
Tag.fields = {
  name: attr()
}
Tag.options = {
  idAttribute: 'name'
}

export default Tag
