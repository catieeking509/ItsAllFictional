import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {Form, Row, Col, Label, Input, Button} from 'reactstrap';

export default function LoginPage() {
  return (
    <div className='login-section'>
      LoginPage
      <Form>
        <Row className="row-cols-lg-auto g-3 align-items-center">
          <Col>
            <Label
              className="visually-hidden"
              for="Password"
            >
              Password
            </Label>
            <Input
              id="Password"
              name="password"
              placeholder="password"
              type="password"
            />
          </Col>
          <Col>
            <Button>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
