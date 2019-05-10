import { normalize } from 'normalizr'
import { Map, List, fromJS } from 'immutable'
import User from './models/User'
import Todo from './models/Todo'

const modelMap = {
  users: User,
  todos: Todo
}


export const createState = ({ entities }) => {
  return fromJS(entities).map((entity, key) => {
    return entity.map(record => {
      const Model = modelMap[key]
      return new Model(record)
    })
  })
}