import React, { Component } from "react";
import { Card, Form, Button, Image, Message } from "semantic-ui-react";
import { Logo } from "../../assets";
import "semantic-ui-css/semantic.min.css";
import "./style.scss";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      usernameError: "",
      passwordError: "",
      authenticate: true,
      LoginFail: false,
    };

    window.onbeforeunload = (e) => {
      sessionStorage.clear();
    };
  }

  componentDidMount() {
    document.title = "Seminara | Login";
    if (sessionStorage.getItem("isLogin") === "false") {
      this.setState({
        authenticate: false,
      });
    }
  }

  validate = () => {
    let UserError;
    let PassError;

    if (!this.state.username) {
      UserError = "Username harus diisi!";
    }

    if (!this.state.password) {
      PassError = "Password harus lebih dari 8 karakter!";
    }

    if (UserError || PassError) {
      this.setState({ usernameError: UserError, passwordError: PassError });
      return false;
    }

    return true;
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    const isValid = this.validate();
    console.log(this.state);
  };

  render() {
    const { username, password, usernameError, passwordError } = this.state;
    return (
      <div className="login-wrapper">
        <div className="login-logo">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="login-title">
          <h2>Sign in to RuangSeminar</h2>
          {!this.state.authenticate && (
            <Message negative>
              <p>Silahkan Login Terlebih dahulu</p>
            </Message>
          )}
          {this.state.LoginFail && (
            <Message negative>
              <p>Username atau Password Salah</p>
            </Message>
          )}
        </div>
        <Card>
          <div className="login-input">
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>
                  <h4>Username</h4>
                </label>
                <input
                  placeholder="Username"
                  type="text"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                />
                {usernameError ? (
                  <Message negative>
                    <p>{usernameError}</p>
                  </Message>
                ) : (
                  ""
                )}
              </Form.Field>
              <Form.Field>
                <Form.Group inline>
                  <label>
                    <h4>Password</h4>
                  </label>
                  <div className="login-forgot">
                    <a href="/login">Forgot password?</a>
                  </div>
                </Form.Group>
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
                {passwordError ? (
                  <Message negative>
                    <p>{passwordError}</p>
                  </Message>
                ) : (
                  ""
                )}
              </Form.Field>
              <div className="login-submit">
                <Button type="submit" primary>
                  Sign in
                </Button>
              </div>
            </Form>
          </div>
        </Card>
        <Card>
          <div className="login-create">
            <p>
              Don't have an account?{" "}
              <a href="/login">Create an account here.</a>
            </p>
          </div>
        </Card>
      </div>
    );
  }
}
