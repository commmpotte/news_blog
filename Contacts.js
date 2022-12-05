import React, { Component } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

export default class Contacts extends Component {
  render() {
    return (
      <Container style={{ width: '500px' }}>
        <h1 className="text-center"> Contact us </h1>
        <Form>
          <Form.Group controlId="formBasicEmail" className="mt-3">
            {/* Form.Label - текст по умолчанию */}
            <Form.Label> Email adress </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text>
              We 'll never share your information to smone else
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label> Text area </Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <Form.Group controlId="formBasicCheckBox" className="mt-3">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="Submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </Container>
    )
  }
}
