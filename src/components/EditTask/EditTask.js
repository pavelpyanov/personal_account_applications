import React from 'react'
import './EditTask.scss'
import close from './close.png'
import {Comment} from './Comment'
import {useDispatch, useSelector} from 'react-redux'
import {useStatus} from '../../hooks/useStatus.hook'
import {changeEditTask, editTaskAction, hideEdit} from '../../redux/actions'
import {useHTTP} from '../../hooks/useHTTP.hook'

export const EditTask = () => {
  const http = useHTTP()
  const dispatch = useDispatch()
  const editTask = useSelector(state => state.editTask)
  const statuses = useSelector(state => state.status)
  const status = useStatus(editTask.statusId)
  const executors = useSelector(state => state.executors)

  const selectChangeHandler = (event) => {
    const getObj = () => {
      console.log(event.target.name)
      if (event.target.name === 'comment') {
        return {}
      }
      return {
        [event.target.name]: event.target.value
      }
    }
    dispatch(changeEditTask(getObj()))
  }

  const submitHandler = (event) => {
    event.preventDefault()
    dispatch(editTaskAction(http))
  }

  return(
    <div className='new-task edit-task'>
      <div className='new-task__title edit-task__title'>
        <div className='edit-task__title_left'>
          <span>№ {editTask.id}</span>
          <h2>{editTask.name}</h2>
        </div>
        <button>
          <img src={close} alt='Закрыть' onClick={() => dispatch(hideEdit())}/>
        </button>
      </div>
      <div className='edit-task__content'>
        <div className="edit-task__left">
          <form className='new-task__form' onSubmit={submitHandler}>
            <div className='new-task__line'>
              <label>Описание</label>
              <p className='new-task__area'>{editTask.description}</p>
            </div>
            <div className='new-task__line'>
              <label>Добавление комментария</label>
              <textarea
                name='comment'
                className='new-task__area'
                onInput={selectChangeHandler}
              />
            </div>
            <input className='new-task__btn' type='submit' value='Сохранить'/>
          </form>
          <Comment commentList={editTask.lifetimeItems}/>
        </div>
        <div className="edit-task__right">
          <div className="edit-task__status">
            <span style={{ backgroundColor: status.rgb }}></span>
            <select name='statusId' onChange={selectChangeHandler} value={+editTask.statusId}>
              {statuses.map((item) => {
                return (
                  <option
                    key={item.id}
                    value={+item.id}
                  >
                    {item.name}
                  </option>)
              })}
            </select>
          </div>
          <div className="edit-task__executor">
            <label htmlFor='executor'>Исполнитель</label>
            <select name='executorId' onChange={selectChangeHandler} value={+editTask.executorId}>
              {executors.map((item) => {
                return (
                  <option
                    key={item.id}
                    value={item.id}
                  >
                    {item.name}
                  </option>)
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}