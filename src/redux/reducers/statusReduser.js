import {GET_STATUSES} from '../types'

const initialState = []
export const statusReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_STATUSES:
      return [...action.payload]
    default:
      return state
  }
}