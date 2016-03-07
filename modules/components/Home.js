import React from 'react'
import Title from 'react-title-component'
import { Row, Col, Icon } from 'react-materialize'
import { panel, iconPanel, logo } from './stylesheets/home.css'
import devices from './images/devices.png'

export default React.createClass({
  render() {
    return (
      <div>
        <Title render={prev => `${prev} | Home`}/>
        <Row>
          <Col s={12} m={4} className={panel}>
            <div className="center-align">
              <Icon className={`white-text center-align ${iconPanel}`}>spellcheck</Icon>
            </div>
            <div className="center-align">
              <Icon className={`white-text center-align ${iconPanel}`}>query_builder</Icon>
            </div>
            <div className="center-align">
              <Icon className={`white-text center-align ${iconPanel}`}>settings</Icon>
            </div>
          </Col>
          <Col s={12} m={8} className="main-content">
            <h1 className={`center-align white-text ${logo}`}>Savnac</h1>
            <br />
            <hr className="white-text white" />
            <img className="responsive-img" src={devices} height="700" />
          </Col>
        </Row>

      </div>
    )
  }
})

