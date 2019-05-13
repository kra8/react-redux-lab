import { ORM } from 'redux-orm'
import * as models from './models'

const orm = new ORM({
  stateSelector: state => state.getIn(['todoORM', 'orm'])
})
orm.register(...Object.values(models))
console.log('ORM instance created: ', { models: Object.values(models), orm: orm })

export default orm
