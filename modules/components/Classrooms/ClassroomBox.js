import React, { Component } from 'react'
import { Link } from 'react-router'
import $ from 'jquery'
import { Button, Icon, Col, Card } from 'react-materialize'

class ClassroomBox extends Component {
  constructor(props) {
    super(props)
    this.deleteClassroom = this.deleteClassroom.bind(this)
  }

  deleteClassroom() {
    let id = this.props._id
    $.ajax({
      type: 'DELETE',
      url: `/api/classrooms/${id}`,
      contentType: 'application/json',
      data: JSON.stringify({ id })
    }).done( classroom => {
      this.props.refresh()
    })
  }

  render() {
    let actions = [
      <a key={`del-${this.props._id}`} onClick={this.deleteClassroom}>Delete</a>,
      <Link key={`to-${this.props._id}`} to={`/classroom/${this.props._id}`}>Show</Link>
    ]

    return(
      <Col s={12} m={4}>
        <Card title={this.props.name} actions={actions}>
          {this.props.description}
        </Card>
      </Col>
    )
  }
}

export default ClassroomBox
