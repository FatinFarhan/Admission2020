import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const RoutineDetails = (props) => {
  const { routine, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' /> 
  if (routine) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Lecture: {routine.Lecture}</span>
            <p>Chapter: {routine.Chapter}</p>
            <p>Reference Book: {routine.ReferenceBook}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {routine.Trainer} </div>
            <div>{moment(routine.Date.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading routine...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const routines = state.firestore.data.routine;
  const routine = routines ? routines[id] : null
  return {
    routine: routine,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'routine'
  }])
)(RoutineDetails)