import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import SignedInSidebar from './SignedInSidebar'
import SignedOutSidebar from './SignedOutSidebar'
const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  const hamburger=auth.uid ? <SignedInSidebar profile={profile} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> : <SignedOutSidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />;
  return (
    <nav className="nav-wrapper grey darken-3" >
      
      <div className="container" id="outer-container">
        <Link to='/' className="brand-logo">Admission</Link>
        {links}
      </div>
      {hamburger}    
      </nav>
  )
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)