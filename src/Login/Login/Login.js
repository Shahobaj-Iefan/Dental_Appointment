import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuth from "../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  const {
    signInUsingGoogle,
    signInWithEmail,
    email,
    password,
    auth,
    setEmail,
    setPassword,
    isLogin,
    setIsLogin,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const ridirect_uri = location.state?.from || "/home";
  const handleGoogleSignin = () => {
    signInUsingGoogle().then(result => {
      history.push(ridirect_uri);
    });
  };

  // Toggle Register To LogIn
  const toggleLogIn = e => {
    setIsLogin(e.target.checked);
  };

  // For email change
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  // For Password change
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  //For button click
  const handleSubmitChange = e => {
    console.log("registration will be added");
    signInWithEmail(email, password, auth);
    e.preventDefault();
  };

  return (
    <div className='container p-4'>
      <div className='w-50 m-auto border rounded bg-light shadow  p-2'>
        <h2>Please {isLogin ? "Login" : "Register"} </h2>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailChange}
              type='email'
              placeholder='Enter email'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePasswordChange}
              type='password'
              placeholder='Password'
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check
              onClick={toggleLogIn}
              type='checkbox'
              label='Already Register? Please Login'
            />
          </Form.Group>
          <Button onClick={handleSubmitChange} variant='primary' type='submit'>
            {isLogin ? "Login" : "Register"}
          </Button>
        </Form>
      </div>
      {/* another sign in method */}
      <div className='mt-4 mb-4'>
        <button onClick={handleGoogleSignin} className='btn btn-primary m-4'>
          <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Sign in with
          google
        </button>
        <button className='btn btn-primary'>
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Sign in with
          Github
        </button>
      </div>
    </div>
  );
};

export default Login;
