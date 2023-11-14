import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LoginForm } from "../components/LoginForm";
import { SignUpPage } from "./SignUpPage";

export const LoginPage = () => {
  return (
    // fluid for making the container flow smooth and cover the viewport
    <Container fluid>
      <Row>
        <Col className="bg-secondary text-light vh-100 d-flex justify-content-center align-items-center">
          <div className="shadow-lg rounded p-3">
            <h1>Welcome Back!</h1>
            <p>Login to our system and take control of your transactions</p>
          </div>
        </Col>
        <Col className="d-flex justify-content-center align-items-center shadow-lg flex-direction-">
          <div className="shadow-lg p-3 border rounded">
            <h2>Login Now</h2>
            <hr />
            <LoginForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
