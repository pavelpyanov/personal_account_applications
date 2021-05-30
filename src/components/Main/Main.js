import React from 'react'
import './Main.scss'
import {useRoutes} from '../../hooks/useRoutes.hook'

export const Main = () => {
  const routes = useRoutes()

  return(
    <div className='main'>{routes}</div>
  )
}