import { actionTypes as actionType } from './ActionTypes'

let lastId = 0

export default function reducer (state = [], action) {
  switch (action.type) {
    case actionType.BUG_ADDED:
      console.log('INSDIE bugAdded')
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          isResolved: false
        }
      ]

    case actionType.BUG_REMOVED: 
      console.log('INSDIE bugRemoved')
      return state.filter(bug => bug.id !== action.payload.id)
    
    case actionType.BUG_RESOLVED:
      console.log('BUG REsolved')
      return state.map(bug => 
        (bug.id !== action.payload.id) ? bug : {...bug, isResolved: true}
      )

    default:
      return state
  }
}