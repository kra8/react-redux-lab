import orm from '../orm'
import { createSelector } from 'redux-orm'

export default createSelector(
  orm,
  state => state.getIn(['todoORM', 'view', 'selectedUserId']),
  (session, selectedUserId) => {
    const { Todo } = session

    // filter APIは、redux-orm 0.9では利用されており、現在0.14でも利用できるが、1.0では廃止されるかもしれない。
    // うまくつかめていないが、おそらく以下のような記述が推奨されているのだと思う
    // Todo.all().filter(todoRef => todoRef.user === selectedUserId).toModelArray...
    // all APIを実行してもすぐにクエリは実行されず、toModelArrayやtoRefArrayで実行される(たぶん)
    // 以下は、redux-orm 0.9時代のfilter書き方
    const todos = Todo.filter({ user: selectedUserId }).toModelArray().map(todo => {
      // todo.ref では、リレーションされてないので、以下のように自分でリレーションは組み立てる必要があるようだ。
      return {...todo.ref, user: todo.user.ref }
    })

    console.log('@running todos selector', todos)
    return todos
  }
)
