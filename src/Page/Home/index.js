import React, { Component, Fragment } from "react";
import {
  Menu,
  Card,
  Image,
  Dropdown,
  Button,
  Table,
  Icon,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./style.scss";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import { UserDefault } from "../../assets";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: "5f7be5cbb30ff20b1c2fdcfe",
          title: "Simposium Endokrinologi Klinik VII ",
          description: "Simposium Endokrinologi Klinik VII ",
          date: "25 Januari 2009 ",
          dateinFormat: "2009-01-25",
          duration: "120",
        },
        {
          id: "5f7be5cbb30ff20b1c2fdcfe",
          title: "Kongres Nasional VIII Perkeni ",
          description: "Kongres Nasional VIII Perkeni ",
          date: "29 Juli 2009 ",
          dateinFormat: "2009-07-29",
          duration: "60",
        },
        {
          id: "5f7be5cbb30ff20b1c2fdcfe",
          title: "4th DOC Link",
          description: "4th DOC Link",
          date: "10 Juli 2010 ",
          dateinFormat: "2010-07-10",
          duration: "90",
        },
        {
          id: "5f7be5cbb30ff20b1c2fdcfe",
          title: "Joint Simposium SDU XXII, SOBU -5 ",
          description: "Joint Simposium SDU XXII, SOBU -5 ",
          date: "25 Juni 2012 ",
          dateinFormat: "2012-0061-25",
          duration: "120",
        },
      ],
      activeItem: "Home",
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    document.title = "Seminara | Seminar";
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  handleLogout = () => {
    this.props.history.push("/");
  };

  handleDelete = (id) => {
    alert(id);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    Swal.fire({
      title: "Deleting Seminar",
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        alert("DELETE");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          "Cancel",
          "Cancel deleted seminar",
          "error"
        );
      }
    });
  };

  render() {
    const { activeItem, data } = this.state;

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
              <h2>Seminar</h2>
              <Button
                primary
                onClick={() => this.props.history.push("/seminar/add")}
              >
                Tambah Baru
              </Button>
            </div>
            <div className="content-main">
              <Card>
                <div className="seminar-table-wrapper">
                  <Table celled fixed singleLine>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>Duration</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      {data.map((item, index) => (
                        <Table.Row key={index + 1}>
                          <Table.Cell>{item.title}</Table.Cell>
                          <Table.Cell>{item.description}</Table.Cell>
                          <Table.Cell>{item.date}</Table.Cell>
                          <Table.Cell>{item.duration}</Table.Cell>
                          <Table.Cell>
                            <Icon
                              link
                              bordered
                              inverted
                              color="yellow"
                              name="edit outline"
                              onClick={() =>
                                this.props.history.push({
                                  pathname: "/seminar/update/" + item.id,
                                  data: {
                                    title: item.title,
                                    description: item.description,
                                    date: item.dateinFormat,
                                    durationMinutes: item.duration,
                                  },
                                })
                              }
                            />

                            <Icon
                              link
                              bordered
                              inverted
                              color="red"
                              name="delete"
                              onClick={() => {
                                this.handleDelete(item.id);
                              }}
                            />

                            <Icon
                              link
                              bordered
                              inverted
                              color="blue"
                              name="registered"
                              onClick={() =>
                                this.props.history.push({
                                  pathname: "/registration/" + item.id,
                                  data: {
                                    title: item.title,
                                  },
                                })
                              }
                            />
                          </Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table>
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
