import {GET_EXECUTORS } from '../types'

const initialState = []
export const executorReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_EXECUTORS:
      return [...action.payload]
    default:
      return state
  }
}