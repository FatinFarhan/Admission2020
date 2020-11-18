import React, { Component } from 'react'
import ResultList from '../result/ResultList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'



class Hasan extends Component {
  render() {
    const { projects, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ResultList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    projects: state.firestore.ordered.hasan,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'hasan' }
  ])
)(Hasan)