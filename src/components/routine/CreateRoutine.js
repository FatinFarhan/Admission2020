import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createRoutine } from '../../store/actions/routineActions'
import { Redirect } from 'react-router-dom'

class CreateRoutine extends Component {
  state = {
    Chapter: '',
    Lecture:'',
    Trainer:'',
    ReferenceBook:''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createRoutine(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a Lecture</h5>
          <div className="input-field">
            <input type="text" id='Chapter' onChange={this.handleChange} />
            <label htmlFor="Chapter">Chapter Name</label>
          </div>
          <div className="input-field">
            <textarea id="Lecture" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="Lecture">Lecture Name</label>
          </div>
          <div className="input-field">
            <textarea id="Trainer" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="Trainer">Trainer Name</label>
          </div>
          <div className="input-field">
            <textarea id="ReferenceBook" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="ReferenceBook">Reference Book</label>
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
    createRoutine: (routine) => dispatch(createRoutine(routine))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoutine)