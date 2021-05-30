import {HIDE_CREATE, HIDE_EDIT, SHOW_CREATE, SHOW_EDIT} from '../types'

const initialState = {
  newTaskView: false,
  editTaskView: false
}
export const viewReducer = (state=initialState, action) => {
  switch (action.type) {
    case SHOW_CREATE:
      return { ...state, newTaskView: true }
    case HIDE_CREATE:
      return { ...state, newTaskView: false }
    case SHOW_EDIT:
      return { ...state, editTaskView: true }
    case HIDE_EDIT:
      return { ...state, editTaskView: false }

    default:
      return state
  }
}