import { ORM } from 'redux-orm'
import { Todo, User, Tag } from './models'

const orm = new ORM({
  stateSelector: state => state.getIn(['todoORM', 'orm'])
})

// orm.register
// 同じデータベースを使いつつModule分割できそう。
// 書き方色々。
// import * as models from './models'
// orm.register(...Object.values(models))
// orm.register(Todo, User, Tag)
orm.register(Todo)
orm.register(User)
orm.register(Tag)
console.log('ORM instance created: ', { orm })

export default orm
