import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { CustomInput } from "./CustomInput";
import { SignUpPage } from "../pages/SignUpPage";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUpForm = () => {
  const [form, setForm] = useState(initialState);

  const [resp, setResp] = useState({
    status: "",
    message: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    // let's check passwords if they match

    // call the axios helper to make the call to the api
  };
  const inputs = [
    {
      label: "First Name",
      type: "text",
      name: "fname",
      required: true,
      placeholder: "John",
    },
    {
      label: "Last Name",
      type: "text",
      name: "lname",
      required: true,
      placeholder: "Smith",
    },
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
    {
      label: "Confirm Password",
      type: "password",
      name: "password",
      required: true,
      placeholder: "xxxxxx",
    },
  ];

  return (
    <Form>
      {inputs.map((item, i) => (
        <CustomInput key={i} {...item} onChange={handleOnChange} />
      ))}

      <div className="d-grid">
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <div className="signuplink">
          Already a member? Login here <a href="/">Login</a>{" "}
        </div>
      </div>
    </Form>
  );
};
