import React from 'react'
import moment from 'moment'

const RoutineSummary = ({project}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">Lecture {project.Lecture}: {project.Chapter}</span>
        <p>Posted by {project.Trainer}</p>
        <p className="grey-text">{moment(project.Date.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default RoutineSummary