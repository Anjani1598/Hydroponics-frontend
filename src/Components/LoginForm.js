import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";

const LoginForm = () => {

 
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");

  const loginDetails = {
    mobileNumber: mobileNumber,
    password: password,
  };

  // console.log(myUser)

  const login = (loginDetails) => {
    return axios
      .post("http://localhost:8881/login", loginDetails)
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

        window.location.href = "/";
        alert("lOGGEEDiN SUCCESSFULL");
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 400) {
          alert(err.response.data.message);
        }
      });
  };

  return (
    <div className="wrapper" style={{margin : '15rem auto' , width:'500px'}}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
