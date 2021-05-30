import React, {useEffect} from 'react'
import './RequestComponent.scss'
import {Task} from '../Task/Task'
import {NewTask} from '../NewTask/NewTask'
import {useDispatch, useSelector} from 'react-redux'
import {getExecutors, getStatuses, putTasks, showCreate} from '../../redux/actions'
import {EditTask} from '../EditTask/EditTask'
import {useHTTP} from '../../hooks/useHTTP.hook'

export const RequestComponent = () => {
  const view = useSelector(state => state.view)
  const dispatch = useDispatch()
  const http = useHTTP()
  const tasks = useSelector(state => state.tasks)

  useEffect( () => {
    dispatch(putTasks(http))
    dispatch(getStatuses(http))
    dispatch(getExecutors(http))
  }, [])

  return(
    <>
      <div className='request'>
        <button
          className='request__btn'
          onClick={() => dispatch(showCreate())}
        >Создать заявку</button>
        <div className='request__tasks tasks'>
          <div className='tasks__head'>
            <div className="task__title task__title_1">ID</div>
            <div className="task__title task__title_2">Название</div>
            <div className="task__title task__title_3">Статус</div>
            <div className="task__title task__title_4">Исполнитель</div>
          </div>
          <ul>
            {tasks.map( task => {
              return(
                <li key={task.id} ><Task
                  task={task}
                /></li>
              )
            } )}
          </ul>
        </div>
      </div>
      {view.newTaskView && <NewTask/>}
      {view.editTaskView && <EditTask/>}
    </>
  )
}