import React, { Component } from 'react'
import Title from 'react-title-component'
import { Link } from 'react-router'
import $ from 'jquery'
import { Button, Icon } from 'react-materialize'

class Classroom extends React.Component {
  constructor(props) {
    super(props)
    this.getClassroom = this.getClassroom.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.updateClassroom = this.updateClassroom.bind(this)
    this.state = { classroom: {} }
  }

  componentDidMount() {
    this.getClassroom()
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit })
  }

  getClassroom() {
    let id = this.props.params.id

    $.ajax({
      type: 'GET',
      url: `/api/classrooms/${id}`,
      contentType: 'application/json',
      data: { id }
    }).done( classroom => {
      this.setState({ classroom: classroom, edit: false })
    })
  }

  updateClassroom() {
    let id = this.props.params.id
    let name = this.refs.name.value
    let description = this.refs.description.value

    $.ajax({
      type: 'PATCH',
      url: `/api/classrooms/${id}`,
      contentType: 'application/json',
      data: JSON.stringify({ id, name, description })
    }).done( classroom => {
      this.getClassroom()
    })
  }

  classroom() {
    return (
      <div className="center">
        <h1>{this.state.classroom.name}</h1>
        <h3>{this.state.classroom.description}</h3>
        <Button onClick={this.toggleEdit} waves="light">Edit</Button>
      </div>
    )
  }

  edit() {
    return (
      <div className="center">
        <input ref="name" defaultValue={this.state.classroom.name} />
        <input ref="description" defaultValue={this.state.classroom.description} />
        <Button onClick={this.toggleEdit} waves="light">Cancel</Button>
        <Button onClick={this.updateClassroom} waves="light">Save</Button>
      </div>
    )
  }

  render() {
    let view = this.state.edit ? (this.edit()) : (this.classroom())
    return(
      <div>
        <Title render={prev => `${prev} | Classroom`}/>
        { view }
      </div>
    )
  }
}

export default Classroom
