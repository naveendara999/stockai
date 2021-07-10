import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row } from "reactstrap";
import logo from "./../Assets/images/Logo.png";
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from "../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password))
        .then(() => {
          props.history.push("/toplist");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/toplist" />;
  }
  return (
    <div className="login">
      <Row className="login_container">
        <div className="auth-card shadow p-4">
          <div className="logo_image mb-3">
            <img src={logo} alt="" width="200" />
          </div>
          <div>
            <h3 className="mb-2">Log in</h3>
            <p className="subtitle">
              Don't have an account? <Link to={"/signup"}>Sign up</Link>
            </p>
          </div>
          <Form onSubmit={handleLogin} ref={form}>
            <div className="form-group mt-3">
              <Input
                id="exampleEmail"
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={onChangeUsername}
                validations={[required]}
                placeholder="Email address"
              />
            </div>

            <div className="form-group mt-3">
              <Input
                id="examplePassword"
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChangePassword}
                validations={[required]}
                placeholder="Password "
              />
            </div>

            <CheckButton style={{ display: "none" }} ref={checkBtn} />

            <div className="form-group">
              <button
                className="btn btn-primary btn-block btn-lg  mt-3"
                style={{ width: "100%" }}
                disabled={loading}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
          </Form>
          <p className="agreeto">
            <Link to="https://www.liste.ai/terms.html" target="_blank">
              Terms
            </Link>
            By clicking Sign In, you agree to our and have read and acknowledge
            our
            <Link to="https://www.liste.ai/privacy.html" target="_blank">
              US Privacy Statement
            </Link>
            .
          </p>
          <hr />
          <div className="capcha">
            <span>
              Invisible reCAPTCHA by Google
              <Link
                to="https://www.google.com/intl/en/policies/privacy/"
                target="_blank"
              >
                Privacy Policy
              </Link>
              and
              <Link
                to="https://www.google.com/intl/en/policies/terms/"
                target="_blank"
              >
                Terms of Use
              </Link>
              .
            </span>
          </div>

          {/* <Form>
            <FormGroup className='mt-3 '>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Email address"
              />
            </FormGroup>
            <FormGroup className="mt-3">
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Password "
              />
            </FormGroup>
            <FormGroup check className="mt-3">
              <Label check>
                <Input type="checkbox" />
                Remember me
              </Label>
            </FormGroup>
<<<<<<< HEAD
          </Form>
          <Link to="/toplist">
            <Button className="mt-3" color="primary" size="lg">
              Submit
            </Button>
          </Link>
          <p className="agreeto">
            <Link to="https://www.MyStock.ai/terms.html" target="_blank">
=======
          </Form> */}
          {/* <Button className='mt-3' color='primary' size='lg'>
            Submit
          </Button>
          <p className='agreeto'>
            <Link to='https://www.liste.ai/terms.html' target='_blank'>
>>>>>>> 96d20a462facb65aba3ce7f8fe9edcdef6945086
              Terms
            </Link>
            By clicking Sign In, you agree to our and have read and acknowledge
            our
            <Link to="https://www.MyStock.ai/privacy.html" target="_blank">
              US Privacy Statement
            </Link>
            .
          </p>
          <hr />
          <div className="capcha">
            <span>
              Invisible reCAPTCHA by Google
              <Link
                to="https://www.google.com/intl/en/policies/privacy/"
                target="_blank"
              >
                Privacy Policy
              </Link>
              and
              <Link
                to="https://www.google.com/intl/en/policies/terms/"
                target="_blank"
              >
                Terms of Use
              </Link>
              .
            </span>
          </div> */}
        </div>
      </Row>
    </div>
  );
};

export default Login;
