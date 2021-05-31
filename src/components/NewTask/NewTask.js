import React from 'react'
import './NewTask.scss'
import close from './close.png'
import {useDispatch, useSelector} from 'react-redux'
import {changeNewTask, hideCreate, sendNewTask} from '../../redux/actions'
import {useHTTP} from '../../hooks/useHTTP.hook'

export const NewTask = () => {
  const dispatch = useDispatch()
  const formValues = useSelector(state => state.newTaskForm)
  const http = useHTTP()
  const newTaskHandler = (event) => {
    dispatch(changeNewTask(event.target.name, event.target.value))
  }
  const submitHandler = (event) => {
    event.preventDefault()
    dispatch(sendNewTask(http))
  }

  return(
    <div className='new-task'>
      <div className='new-task__title'>
        <h2>Новая заявка</h2>
        <button onClick={() => dispatch(hideCreate())}>
          <img src={close} alt='Закрыть' />
        </button>
      </div>
      <form className='new-task__form' onSubmit={submitHandler}>
        <div className='new-task__line'>
          <label htmlFor='name'>Название</label>
          <textarea
            id='name'
            name='name'
            value={formValues.name}
            onInput={newTaskHandler}
          />
        </div>
        <div className='new-task__line'>
          <label htmlFor='description'>Описание</label>
          <textarea
            id='description'
            name='description'
            className='new-task__area'
            value={formValues.description}
            onInput={newTaskHandler}
          />
        </div>
        <input className='new-task__btn' type='submit' value='Сохранить'/>
      </form>
    </div>
  )
}