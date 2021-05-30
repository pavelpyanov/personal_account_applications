import React from 'react'
import './Header.scss'
import {Navbar} from '../Navbar/Navbar'
import {Search} from '../Search/Search'

export const Header = () => {
  return(
    <>
      <Navbar/>
      <Search/>
    </>
  )
}