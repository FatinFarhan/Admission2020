import React from 'react'
import {slide as Menu} from 'react-burger-menu'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInSidebar = (props) => {
  var code= (props.profile.initials)
  var x='/result'
  if(code==='AI'){x='/ayon'}
  else if (code==='PH'){x='/porag'}
  else if (code==='HC'){x='/hookie'}
  else{ x='/result'}

  return (
    <Menu>
        <a className="menu-item"><NavLink to='/dash'>Dashboard</NavLink></a>
        <a className="menu-item"><NavLink to={x}>Result</NavLink></a>
        <a className="menu-item"><a onClick={props.signOut}>Log Out</a></a>
    </Menu>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInSidebar)