import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'
import logo from './static/logo.png'
import knowledgeImg from './static/knowledge.png'
import requestImg from './static/requests.png'
import staffImg from './static/staff.png'
import clientsImg from './static/clients.png'
import activesImg from './static/analytics.png'
import settingImg from './static/Settings.png'


export const Navbar = () => {
  return(
    <div className='navbar'>
        <div className="navbar__item"><img src={logo} alt='Логотип'/></div>
        <NavLink className='navbar__item' activeClassName='active' to="/knowledge"><div className='navbar__icon'><img src={knowledgeImg} alt="Иконка"/></div><div className='navbar__title'>База знаний</div></NavLink>
        <NavLink className='navbar__item' activeClassName='active' to="/requests"><div className='navbar__icon'><img src={requestImg} alt="Иконка"/></div><div className='navbar__title'>Заявки</div></NavLink>
        <NavLink className='navbar__item' activeClassName='active' to="/staff"><div className='navbar__icon'><img src={staffImg} alt="Иконка"/></div><div className='navbar__title'>Сотрудники</div></NavLink>
        <NavLink className='navbar__item' activeClassName='active' to="/clients"><div className='navbar__icon'><img src={clientsImg} alt="Иконка"/></div><div className='navbar__title'>Клиенты</div></NavLink>
        <NavLink className='navbar__item' activeClassName='active' to="/actives"><div className='navbar__icon'><img src={activesImg} alt="Иконка"/></div><div className='navbar__title'>Активы</div></NavLink>
        <NavLink className='navbar__item' activeClassName='active' to="/setting"><div className='navbar__icon'><img src={settingImg} alt="Иконка"/></div><div className='navbar__title'>Настройки</div></NavLink>
    </div>
  )
}