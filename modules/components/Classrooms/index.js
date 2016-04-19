import React, { Component } from 'react'
import Title from 'react-title-component'
import { Link } from 'react-router'
import $ from 'jquery'
import { Button, Row, Col } from 'react-materialize'
import { panel } from '../stylesheets/home.css'
import ClassroomBox from './ClassroomBox.js'

class Classrooms extends Component {
  constructor(props) {
    super(props)
    this.addClassroom = this.addClassroom.bind(this)
    this.getClassrooms = this.getClassrooms.bind(this)
    this.state = { classrooms: [] }
  }

  componentDidMount() {
    this.getClassrooms()
  }

  getClassrooms() {
    $.ajax({
      type: 'GET',
      url: '/api/classrooms',
      dataType: 'JSON'
    }).done( classrooms => {
      this.setState({ classrooms: classrooms })
    })
  }

  addClassroom() {
    let name = this.refs.name.value
    let description = this.refs.description.value

    $.ajax({
      type: 'POST',
      url: '/api/classrooms',
      data: JSON.stringify({ name, description }),
      contentType: 'application/json'
    }).done( () => {
      this.refs.name.value = null
      this.refs.description.value = null
      this.getClassrooms()
    })
  }

  render() {
    let classrooms = this.state.classrooms.map( classroom => {
      return(
        <ClassroomBox key={classroom._id} {...classroom} refresh={this.getClassrooms} />
      )
    })

    let classroomLinks = this.state.classrooms.map( classroom => {
      return(<li><Link key={`link-${classroom._id}`} className="white-text" to={`/classroom/${classroom._id}`}>{classroom.name}</Link></li>)
    })

    return (
      <div>
        <Title render={prev => `${prev} | Classrooms`}/>
        <Row>
          <Col s={2} className={panel}>
            <ul>
            {classroomLinks}
            </ul>
          </Col>
          <Col s={8} offset={"s1"}>
            <div>
              <input placeholder="name" ref="name" />
              <input placeholder="description" ref="description" />
              <Button className="purple darken-4" onClick={this.addClassroom} waves="light">Add Classroom</Button>
            </div>
            <Row>{classrooms}</Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Classrooms
