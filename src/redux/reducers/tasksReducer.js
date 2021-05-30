import {PUT_TASKS, UPDATE_TASKS} from '../types'

const initialState = []
export const tasksReducer = (state=initialState, action) => {
  switch (action.type) {
    case PUT_TASKS:
      return [...state, ...action.payload]
    case UPDATE_TASKS:
      return [...action.payload]
    default:
      return state
  }
}