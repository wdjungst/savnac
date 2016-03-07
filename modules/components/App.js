import React from 'react'
import { IndexLink, Link } from 'react-router'
import Title from 'react-title-component'
import { Navbar, NavItem } from 'react-materialize'

export default React.createClass({
  render() {
    return (
      <div>
        <Title render="savnaC"/>
          <Navbar brand="Savnac" left>
            <NavItem><IndexLink to="/">Home</IndexLink></NavItem>
            <NavItem><Link to="/classrooms">Classrooms</Link></NavItem>
          </Navbar>
       {this.props.children}
     </div>
    )
  }
})

