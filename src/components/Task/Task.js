import React from 'react'
import './Task.scss'
import {useDispatch, useSelector} from 'react-redux'
import {createEditTask} from '../../redux/actions'
import {useHTTP} from '../../hooks/useHTTP.hook'

export const Task = ({ task }) => {
  const dispatch = useDispatch()
  const http = useHTTP()
  const statuses = useSelector(state => state.status)
  let statusColor, statusName
  statuses.forEach(status => {
    if (status.id === task.statusId) {
      statusColor = status.rgb || ''
      statusName = status.name || ''
    }
  })

  const editTaskHandler = () => {
    dispatch(createEditTask(task.id, http))
  }

  return(
    <div className='tasks__head tasks__item' onClick={editTaskHandler}>
      <div className='task__line' style={{ backgroundColor: statusColor }}></div>
      <div className="task__title task__title_1 task__item">{task.id}</div>
      <div className="task__title task__title_2 task__item">{task.name}</div>
      <div className="task__title task__title_3 task__item">
        <div style={{ backgroundColor: statusColor }} className='task__status'>{statusName}</div>
      </div>
      <div className="task__title task__title_4 task__item">{task.executorName}</div>
    </div>
  )
}