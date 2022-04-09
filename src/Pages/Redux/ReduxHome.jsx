import * as action from './actionCreator'
import store from './Store'

const Redux = () => {

  // returns a function to unsubscribe
  const unsubscribe = store.subscribe(() => {
    console.log('store state = ', store.getState())
  })

  store.dispatch(action.bugAdded("Bug 1"))

  store.dispatch(action.bugResolved(1))

  // unsubscribe()
  store.dispatch(action.bugRemoved(1))
  
  return (<div>Lol</div>)
}
export default Redux;