import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";
import Swal from "sweetalert2";
import "./style.scss";
import "semantic-ui-css/semantic.min.css";

class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: "",
      email: "",
      title: "",
      redirect: false,
      data: "",
    };
  }

  componentDidMount() {
    document.title = "Registrasi Seminar";
    this.setState({
      title: this.props.location.data.title,
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire("Good job!", "Data Berhasil Diupdate!", "success");
    this.props.history.push({
      pathname: "/successful-registration",
      data: {
        title: this.props.location.data.title,
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="register-bg"> </div>
        <div className="register-wrapper">
          <div className="register-title">
            <h1>Seminar : {this.props.location.data.title}</h1>
          </div>
          <div className="register-form">
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Nama</label>
                <input
                  placeholder="Nama"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Nomor HP</label>
                <input
                  placeholder="Nomor HP"
                  name="phone"
                  type="text"
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Button type="submit" primary>
                Daftar
              </Button>
            </Form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Registration);
