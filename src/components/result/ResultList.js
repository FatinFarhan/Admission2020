import React from 'react'
import ResultSummary from './ResultSummary'
import { Link } from 'react-router-dom'

const ResultList = ({projects}) => {
  return (
    <div className="project-list section">
      { projects && projects.map(project => {
        return (
          <Link to={'/'+project.Name+'/' + project.id} key={project.id}>
            <ResultSummary project={project} />
          </Link>
        )
      })}  
    </div>
  )
}

export default ResultList