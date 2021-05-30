import {CHANGE_NEW_TASK, CLEAR_NEW_TASK} from '../types'

const initialState = {
  name: '',
  description: ''
}
export const newTaskFormReducer = (state=initialState, action) => {
  switch (action.type) {
    case CHANGE_NEW_TASK:
      return { ...state, [action.payload.name]: action.payload.value }
    case CLEAR_NEW_TASK:
      return {...state, ...initialState}
    default:
      return state
  }
}