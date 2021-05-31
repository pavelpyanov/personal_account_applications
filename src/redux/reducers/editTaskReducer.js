import {CHANGE_EDIT_TASK, CLEAR_EDIT_TASK, CREATE_EDIT_TASK} from '../types'

const initialState = {
  dataForServer: {}
}
export const editTaskReducer = (state=initialState, action) => {
  switch (action.type) {
    case CREATE_EDIT_TASK:
      return { ...state, ...action.payload }
    case CHANGE_EDIT_TASK:
      return { ...state, ...action.payload, dataForServer: { ...action.payload} }
    case CLEAR_EDIT_TASK:
      return {...initialState}
    default:
      return state
  }
}