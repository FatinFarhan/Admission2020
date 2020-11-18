import React from 'react'
import RoutineSummary from './RoutineSummary'
import { Link } from 'react-router-dom'

const RoutineList = ({projects}) => {
  return (
    <div className="project-list section">
      { projects && projects.map(project => {
        return (
          <Link to={'/routine/' + project.id} key={project.id}>
            <RoutineSummary project={project} />
          </Link>
        )
      })}  
    </div>
  )
}

export default RoutineList