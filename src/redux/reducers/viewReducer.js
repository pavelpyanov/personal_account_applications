import {HIDE_CREATE, HIDE_EDIT, HIDE_LOADING, SHOW_CREATE, SHOW_EDIT, SHOW_LOADING} from '../types'

const initialState = {
  newTaskView: false,
  editTaskView: false,
  loading: false
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
    case SHOW_LOADING:
      return { ...state, loading: true }
    case HIDE_LOADING:
      return { ...state, loading: false }
    default:
      return state
  }
}