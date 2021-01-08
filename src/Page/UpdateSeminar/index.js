import React, { Component, Fragment } from "react";
import {
  Menu,
  Card,
  Image,
  Dropdown,
  Form,
  Input,
  Button,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Swal from "sweetalert2";
import { UserDefault } from "../../assets";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      date: "",
      durationMinutes: "",
      activeItem: "Home",
      authenticate: false,
    };
  }

  componentDidMount() {
    document.title = "Seminara | Update Seminar";
    this.setState({
      title: this.props.location.data.title,
      description: this.props.location.data.description,
      date: this.props.location.data.date,
      durationMinutes: this.props.location.data.durationMinutes,
    });
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  handleLogout = () => {
    this.props.history.push("/");
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Updating Seminar",
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Update",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Good Joob!",
          text: "Seminar Berhasil Diupdate",
          type: "success",
          icon: "success",
          showConfirmButton: false,
          timer: 3000,
        });
        setTimeout(() => {
          this.props.history.push("/dashboard");
        }, 3000);
      }
    });
  };

  render() {
    const {
      activeItem,
      title,
      description,
      date,
      durationMinutes,
    } = this.state;
    return (
      <Fragment>
        <div className="wrapper">
          <div className="sidebar">
            <div className="menu">
              <div className="sidebar-title">
                <h2>Seminara Admin</h2>
              </div>
              <Menu secondary vertical>
                <Menu.Item
                  name="Home"
                  active={activeItem === "Home"}
                  onClick={() => this.props.history.push("/dashboard")}
                />
                <Menu.Item
                  name="Mass Mailer"
                  active={activeItem === "Mass Mailer"}
                  onClick={() => this.props.history.push("/mass-mailer")}
                />
              </Menu>
            </div>
            <div className="user">
              <div className="user-img">
                <Image src={UserDefault} size="small" circular />
              </div>
              <div className="user-name">
                <Dropdown item text="Admin">
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={this.handleLogout}>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content-title">
              <h2>
                <a href="/seminars">Seminar</a> / Update
              </h2>
            </div>
            <div className="content-main">
              <Card>
                <div className="add-input-wrapper">
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Field inline>
                      <div className="add-input-title">
                        <label>Title</label>
                      </div>
                      <div className="add-input-place">
                        <Input
                          placeholder="Title"
                          name="title"
                          value={title}
                          onChange={this.handleChange}
                        />
                      </div>
                    </Form.Field>
                    <Form.Field inline>
                      <div className="add-input-title">
                        <label>Description</label>
                      </div>
                      <div className="add-input-place">
                        <Input
                          placeholder="Description"
                          name="description"
                          value={description}
                          onChange={this.handleChange}
                        />
                      </div>
                    </Form.Field>
                    <Form.Field inline>
                      <div className="add-input-title">
                        <label>Date</label>
                      </div>
                      <div className="add-input-place">
                        <Input
                          type="date"
                          name="date"
                          value={date}
                          onChange={this.handleChange}
                        />
                      </div>
                    </Form.Field>
                    <Form.Field inline>
                      <div className="add-input-title">
                        <label>Duration (minutes)</label>
                      </div>
                      <div className="add-input-place">
                        <Input
                          placeholder="Duration"
                          name="duration"
                          value={durationMinutes}
                          onChange={this.handleChange}
                        />
                      </div>
                    </Form.Field>
                    <div className="add-seminar-submit">
                      <Button type="submit" primary>
                        Submit
                      </Button>
                    </div>
                  </Form>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
