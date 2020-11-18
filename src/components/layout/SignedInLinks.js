import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  var code= (props.profile.initials)
  var x='/result'
  if(code==='AI'){x='/ayon'}
  else if (code==='PH'){x='/porag'}
  else if (code==='ST'){x='/turzo'}
  else if (code==='RR'){x='/robin'}
  else if (code==='RI'){x='/rubab'}
  else if (code==='MH'){x='/monir'}
  else if (code==='RH'){x='/hasan'}
  else if (code==='SJ'){x='/jim'}
  else if (code==='AA'){x='/akib'}
  else{ x='/result'}

  return (
    <div>
      <ul class="right hide-on-med-and-down">
        <li><NavLink to='/dash'>Dashboard</NavLink></li>
        <li><NavLink to={x}>Result</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">
          {props.profile.initials}
        </NavLink></li>
      </ul>

      
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)