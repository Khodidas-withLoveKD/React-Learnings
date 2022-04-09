import { actionTypes } from './ActionTypes'

export const bugAdded = description => ({
    type: actionTypes.BUG_ADDED,
    payload: {
      description
    }
})

export const bugRemoved = bugId => ({
  type: actionTypes.BUG_REMOVED,
    payload: {
      id: bugId
    }
})

export const bugResolved = bugId => ({
  type: actionTypes.BUG_RESOLVED,
    payload: {
      id: bugId
    }
})