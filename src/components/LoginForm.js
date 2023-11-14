import React from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { CustomInput } from "./CustomInput";
import { SignUpPage } from "../pages/SignUpPage";

export const LoginForm = () => {
  const inputs = [
    {
      label: "Email",
      type: "email",
      name: "email",
      required: true,
      placeholder: "John@email.com",
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      required: true,
      placeholder: "xxxxxx",
    },
  ];

  return (
    <Form>
      {inputs.map((item, i) => (
        <CustomInput key={i} {...item} />
      ))}

      <div className="d-grid">
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <div className="signuplink ">
          Are you new here? <a href="/signup">SignUp now</a>
        </div>
      </div>
    </Form>
  );
};
