import React from "react";
import { withRouter } from "react-router-dom";
import "./style.scss";

class RegistrationSuccess extends React.Component {
  componentDidMount() {
    document.title = "Registrasi Sukses";
  }

  makeID = (length) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  render() {
    return (
      <React.Fragment>
        <div className="register-bg"></div>
        <div className="registersuccess-wrapper">
          <div className="registersuccess-title">
            <h1>Registrasi Sukses!</h1>
          </div>
          <div className="registersuccess-form">
            <table>
              <tr>
                <td className="label">Nama Seminar</td>
                <td>:</td>
                <td>{this.props.location.data.title}</td>
              </tr>
              <tr>
                <td className="label">Data Peserta</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="label">Nama</td>
                <td>:</td>
                <td>{this.props.location.data.name}</td>
              </tr>
              <tr>
                <td className="label">Nomor HP</td>
                <td>:</td>
                <td>{this.props.location.data.phone}</td>
              </tr>
              <tr>
                <td className="label">Email</td>
                <td>:</td>
                <td>{this.props.location.data.email}</td>
              </tr>
            </table>
            <div className="registersuccess-code">
              <h2>{this.makeID(15)}</h2>
              <p>
                * <i>Tolong dicatat untuk bukti registrasi</i>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(RegistrationSuccess);
