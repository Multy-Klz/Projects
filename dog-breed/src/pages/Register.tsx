import React, { ChangeEvent, MouseEvent, useState } from "react";
import "./register.css";
import { Button, Form } from "react-bootstrap";

import { useNavigate, Navigate } from "react-router-dom";

interface RegisterProps {
  getToken: () => string;
  changeToken: (token: string) => void;
  baseUrl: string;
}

function Register(props: RegisterProps) {
  let navigate = useNavigate();

  const [getformData, setFormData] = useState("");

  async function onSubmit(e: MouseEvent) {
    e.preventDefault();

    let resp = await fetch(props.baseUrl + "/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        email: `${getformData}`,
      },
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));

    let user = resp.user;

    let token = user.token;

    props.changeToken(token);

    console.log(
      "userToken: ",
      props.getToken(),
      "  user: ",
      user,
      "  Token: ",
      token
    );

    navigate("/list", { replace: true });
  }

  return (
    <div className="form">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address: </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setFormData(e.target.value);
              console.log(getformData);
            }}
          />
          <Form.Text className="text-muted f-siz">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="content-center"
          onClick={(e) => onSubmit(e)}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Register;
