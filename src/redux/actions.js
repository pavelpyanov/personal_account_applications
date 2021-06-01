import {
  CHANGE_EDIT_TASK,
  CHANGE_NEW_TASK, CLEAR_EDIT_TASK,
  CLEAR_NEW_TASK, CLEAR_TASKS, CREATE_EDIT_TASK, GET_EXECUTORS,
  GET_STATUSES,
  HIDE_CREATE,
  HIDE_EDIT, HIDE_LOADING,
  PUT_TASKS,
  SHOW_CREATE,
  SHOW_EDIT, SHOW_LOADING, UPDATE_TASKS,
} from './types'
import {REQUESTS} from '../URL'

export const showCreate = () => {
  return {
    type: SHOW_CREATE
  }
}
export const hideCreate = () => {
  return {
    type: HIDE_CREATE
  }
}
export const showEdit = () => {
  return {
    type: SHOW_EDIT
  }
}
export const hideEdit = () => {
  return {
    type: HIDE_EDIT
  }
}
export const showLoading = () => {
  return {
    type: SHOW_LOADING
  }
}
export const hideLoading = () => {
  return {
    type: HIDE_LOADING
  }
}
export const putTasks = (http) => {
  return async (dispatch) => {
    const tasks = await http.request(REQUESTS.getTasks)
    if (tasks && tasks.value && tasks.value.length) {
      dispatch({
        type: PUT_TASKS,
        payload: tasks.value
      })
    }
  }
}
export const updateTasks = (http) => {
  return async (dispatch, getState) => {
    const state = getState()
    const tasks = state.tasks
    const newTaskId = state.editTask.id
    const newTask = await http.request(REQUESTS.getOne(newTaskId))
    const updatedTasks = tasks.map(item => {
      if (+item.id === +newTask.id) {
        return newTask
      }
      return item
    })
    dispatch({
      type: UPDATE_TASKS,
      payload: updatedTasks
    })
  }
}
export const clearTasks = () => {
  return {
    type: CLEAR_TASKS
  }
}
export const getStatuses = (http) => {
  return async (dispatch) => {
    const statuses = await http.request(REQUESTS.getStatuses)
    if (statuses && statuses.length) {
      dispatch({
        type: GET_STATUSES,
        payload: statuses
      })
    }
  }
}
export const getExecutors = (http) => {
  return async (dispatch) => {
    const executors = await http.request(REQUESTS.getExecutors)
    if (executors && executors.length) {
      dispatch({
        type: GET_EXECUTORS,
        payload: executors
      })
    }
  }
}
export const changeNewTask = (name, value) => {
  return {
    type: CHANGE_NEW_TASK,
    payload: { name, value }
  }
}
export const clearNewTask = () => {
  return {
    type: CLEAR_NEW_TASK
  }
}
export const createEditTask = (id, http) => {
  return async (dispatch) => {
    dispatch(hideEdit())
    dispatch(clearEditTask())
    const response = await http.request(REQUESTS.getOne(id))
    if (response) {
      dispatch({
        type: CREATE_EDIT_TASK,
        payload: response
      })
      dispatch(showEdit())
    }
  }
}
export const changeEditTask = (task) => {
  return {
    type: CHANGE_EDIT_TASK,
    payload: task
  }
}
export const clearEditTask = () => {
  return {
    type: CLEAR_EDIT_TASK
  }
}
export const sendNewTask = (http) => {
  return async (dispatch, getState) => {
    const state = getState()
    const form = state.newTaskForm
    const body = {
      "name": form.name,
      "description": form.description,
      "comment": "",
      "price": 0,
      "taskTypeId": 44737,
      "statusId": state.status[4].id,
      "priorityId": 74563,
      "serviceId": 44737,
      "resolutionDatePlan": "2021-09-29T16:57:49.200Z",
      "tags": [
        74561
      ],
      "initiatorId": 44737,
      "executorId": state.executors[0].id,
      "executorGroupId": 44737
    }
    const response = await http.request(REQUESTS.create, 'POST', body)
    const newTask = await http.request(REQUESTS.getOne(response))
    dispatch({
      type: PUT_TASKS,
      payload: [newTask]
    })
    dispatch(clearNewTask())
    dispatch(hideCreate())
    dispatch(createEditTask(newTask.id, http))
  }
}
export const editTaskAction = (http) => {
  return async (dispatch, getState) => {
    const state = getState()
    const body = state.editTask.dataForServer
    body.id = state.editTask.id
    body.name = state.editTask.name
    body.statusId = state.editTask.statusId
    body.executorId = state.editTask.executorId

    await http.request(REQUESTS.editTask, 'PUT', body)

    dispatch(updateTasks(http))
    dispatch(hideEdit())
    dispatch(clearEditTask())

  }
}