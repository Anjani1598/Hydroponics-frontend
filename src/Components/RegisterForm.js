import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import InputGroup from "react-bootstrap/InputGroup";

const RegisterForm = (props) => {

 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");

  const loginDetails = {
    firstName: firstName,
    lastName: lastName,
    mobileNumber: mobileNumber,
    password: password,
  };

  // console.log(myUser)

  const login = (loginDetails) => {
    return axios
      .post("http://localhost:8881/customer", loginDetails)
      .then((response) => response.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(loginDetails);

    if (
      loginDetails.mobileNumber.trim() === "" ||
      loginDetails.password.trim() === ""
    ) {
      alert("Mobile Number and password are required");
    }

    login(loginDetails)
      .then((res) => {
        console.log(res);
        window.localStorage.setItem("loginDetails", JSON.stringify(res));
        window.localStorage.setItem("isLoggedIn", true);
        alert("Registerd SUCCESSFULL");

        window.location.href = "/login";
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 400) {
          alert(err.response.data.message);
        }
      });
  };
  return (
    <div className="wrapper" style={{ margin: "15rem auto", width: "500px" }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <InputGroup className="mb-3">
            <InputGroup.Text>First and last name</InputGroup.Text>
            <Form.Control
              aria-label="First name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Form.Control
              aria-label="Last name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </InputGroup>

          <FloatingLabel
            controlId="floatingInput"
            label="Mobile Number"
            className="mb-3"
          >
            <Form.Control
              type="mobile"
              placeholder="Enter mobile Number"
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <FloatingLabel controlId="floatingPassword" label="Confirm Password">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FloatingLabel>
        </Form.Group>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterForm;
