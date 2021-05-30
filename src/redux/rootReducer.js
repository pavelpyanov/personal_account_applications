import {combineReducers} from 'redux'
import {viewReducer} from './reducers/viewReducer'
import {tasksReducer} from './reducers/tasksReducer'
import {statusReducer} from './reducers/statusReduser'
import {newTaskFormReducer} from './reducers/newTaskFormReducer'
import {editTaskReducer} from './reducers/editTaskReducer'
import {executorReducer} from './reducers/executorReducer'

export const rootReducer = combineReducers({
  view: viewReducer,
  tasks: tasksReducer,
  status: statusReducer,
  newTaskForm: newTaskFormReducer,
  editTask: editTaskReducer,
  executors: executorReducer
})