import React, { Component } from 'react'
import { Container, Col, Nav, Row, Tab } from 'react-bootstrap'

import design from '../assets/design.jpg'
import library from '../assets/library.jpg'
import team from '../assets/team.jpg'

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              {/* className задаем формат в столбец с margin-top - 2 */}
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Library</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className='mt-3'>
                <Tab.Pane eventKey="first">
                  <img src={design} id="tab_img"/>
                  <p>
                    Nтилеутоитктмлцткпьылкитл лпк щ цьплтывлпьдзыущлптцдь тльпць
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second" >
                  <img src={library} id="tab_img"/>
                  <p>
                    Nтилеутоитктмлцткпьылкитл лпк щ цьплтывлпьдзыущлптцдь тльпць
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img src={team} id="tab_img"/>
                  <p>
                    Nтилеутоитктмлцткпьылкитл лпк щ цьплтывлпьдзыущлптцдь тльпць
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}
