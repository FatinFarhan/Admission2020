import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import {storage} from '../../config/fbConfig'

const TurzoResultDetails = (props) => {
  
  const { project, auth } = props;
  console.log(props)
  if (!auth.uid) return <Redirect to='/signin' /> 
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content ">
            <span className="card-title">{project.Lecture}</span>
            <div class="row">

              <div class="col s4 green-text "><p>Correct: {project.Correct} </p></div>
              <div class="col s4 red-text text-lighten-1"><p>Incorrect: {project.Incorrect}</p></div>
              <div class="col s4 red-text lighten-4"><p>Not Answered: {project.Null}</p></div>

              <div class="col s4 blue-text text-darken-2"><p>Obtained Mark: {project.Score}</p></div>
              <div class="col s4 blue-text text-darken-2"><p>Total Mark: {project.Total}</p></div>
              <div class="col s4 blue-text text-darken-2"><p>Position: {project.Position}</p></div>
              
            </div>
            <p><img src='' id='myimg' width='850' height='500' alt='Image'></img></p>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.turzo;
  const project = projects ? projects[id] : null

  const user=state.firebase.profile.initials
  const location= id+'.png'

  const images = storage.ref(user)
  const image = images.child(location);
  image.getDownloadURL().then((url) => {
    var img = document.getElementById('myimg');
    if(url){img.src=url}
    else{img.src='a'}})

    console.log(state)
  return {
    project: project,
    auth: state.firebase.auth,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'turzo'
  }])
)(TurzoResultDetails)