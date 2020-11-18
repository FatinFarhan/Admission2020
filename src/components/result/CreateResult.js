import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createResult } from '../../store/actions/resultActions'
import { Redirect } from 'react-router-dom'

class CreateResult extends Component {
  state = {
    Lecture:'',
    Name:'',
    Correct:'',
    Incorrect:'',
    Exam:'',
    Null:'',
    Position:'',
    Score:'',
    Total:''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createResult(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Result</h5>
          <div className="input-field">
            <input type="text" id='Lecture' onChange={this.handleChange} />
            <label htmlFor="Lecture">Lecture</label> 
          </div>
          <div className="input-field">
            <textarea id="Exam" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="Exam">Exam Topic</label>
          </div>
          <div className="input-field">
            <textarea  id="Name" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="Name">Student Name</label>
          </div>
          <div className="input-field">
          <input type='number' id='Correct' onChange={this.handleChange} />
            <label htmlFor="Correct">Correct Answer</label>
          </div>
          <div className="input-field">
          <input type='number' id='Incorrect' onChange={this.handleChange} />
            <label htmlFor="Incorrect">Incorrect Answer</label>
          </div>
          
          <div className="input-field">
          <input type='number' id='Null' onChange={this.handleChange} />
            <label htmlFor="Null">Not Answered</label>
          </div>
          <div className="input-field">
          <input type='number' id='Position' onChange={this.handleChange} />
            <label htmlFor="Position">Position</label>
          </div>
          <div className="input-field">
          <input type='number' id='Score' onChange={this.handleChange} />
            <label htmlFor="Score">Score</label>
          </div>
          <div className="input-field">
          <input type='number' id='Total' onChange={this.handleChange} />
            <label htmlFor="Total">Total</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createResult: (result) => dispatch(createResult(result))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateResult)