import React, { Component } from 'react'
import {
  Button,
  FormControl,
  Nav,
  Navbar,
  Form,
  Container,
} from 'react-bootstrap'

import Home from '../Pages/Home'
import About from '../Pages/About'
import Blog from '../Pages/Blog'
import Contacts from '../Pages/Contacts'

import { Routes, Route, BrowserRouter as Router, Link } from 'react-router-dom'
import logo from './logo.png'

export default class Header extends Component {
  render() {
    return (
      <div>
        <Router>
          {/* collapseOnSelect отвечает за переключение expendet на falst(для адатипновсти) 
        expand - брейк поинт, при котором навбар станет адаптивным 
        bg и variant - фоны по умолчанию */}
          <Navbar
            sticky="top"
            collapseOnSelect
            expand="md"
            bg="dark"
            variant="dark"
          >
            <Container id="header_container">
              <Navbar.Brand href="/">
                <img
                  src={logo}
                  height="30"
                  width="30"
                  className="d-inline-block align-top"
                />
                FAKE NEWS
              </Navbar.Brand>
              {/* Toggle - при уменьшении нашего экрана */}
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              {/* Collapse - для отображения меню при адаптиве */}
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contacts">
                    Contacts
                  </Nav.Link>
                  <Nav.Link as={Link} to="/blog" target="_blank">
                    Blog
                  </Nav.Link>
                </Nav>
                {/* inline - для кнопки и инпута в горизонтальный стиль */}
                <Form inline id="input_form">
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                  <Button variant="outlini-info">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* Switch позволяет выбрать первый попавшийся маршрут */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
