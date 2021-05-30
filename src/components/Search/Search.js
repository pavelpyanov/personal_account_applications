import React from 'react'
import './Search.scss'
import searchImg from './static/search.png'

export const Search = () => {
  return(
    <div className='search'>
      <label htmlFor='search_input'>
        <input id='search_input' type='text'/>
        <img src={searchImg} alt="Поиск"/>
      </label>
    </div>
  )
}