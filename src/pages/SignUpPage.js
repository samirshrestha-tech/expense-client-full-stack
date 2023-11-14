import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SignUpForm } from "../components/SignUpForm";

export const SignUpPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="bg-secondary text-light vh-100 d-flex justify-content-center align-items-center">
          <div className="shadow-lg rounded p-3">
            <h1>Join Our Community</h1>
            <p>Sign up to our system and take control of your transactions</p>
          </div>
        </Col>
        <Col className="d-flex justify-content-center align-items-center shadow-lg flex-direction-">
          <div className="shadow-lg p-3 border rounded">
            <h2>Signup Now</h2>
            <hr />
            <SignUpForm />
            {/* <LoginForm /> */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
