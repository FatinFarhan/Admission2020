import React from 'react'
import {slide as Menu} from 'react-burger-menu'
import { NavLink } from 'react-router-dom'

const SignedOutSidebar = () => {
  
  return (
    <Menu>
        <a className="menu-item"><NavLink to='/dash'>Dashboard</NavLink></a>
    </Menu>
  )
}


export default (SignedOutSidebar)