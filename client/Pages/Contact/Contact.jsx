import React, { Component } from "react";
import { Grid, Row, Col, Image, Button, Alert } from "react-bootstrap";
import addressImg from "../../assets/images/address.png";
import emailImg from "../../assets/images/email.png";
import phoneImg from "../../assets/images/phone.png";
import Location from "../../components/Location";
import "./Contact.scss";
import axios from "axios";

const api =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "http://healing.unnathi.org/";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mail: "",
      message: "",
      alertShow: false
    };
  }
  onInputChange = (key, e) => {
    switch (key) {
      case "name": {
        this.setState({
          name: e.target.value
        });
        break;
      }
      case "mail": {
        this.setState({
          mail: e.target.value
        });
        break;
      }
      case "message": {
        this.setState({
          message: e.target.value
        });
        break;
      }
    }
  };

  onSubmitClick = () => {
    if (this.state.name && this.state.mail && this.state.message) {
      axios
        .post(`${api}sendMail`, {
          name: this.state.name,
          mail: this.state.mail,
          message: this.state.message,
          type: "contact"
        })
        .then(function(response) {
          this.setState({
            name: "",
            mail: "",
            message: "",
            alertShow: true
          });
          alert("Your message has been sent successfully");
        })
        .catch(function(error) {
          console.log(error);
          this.setState({
            name: "",
            mail: "",
            message: ""
          });
          alert("Your message has not been sent");
        });
    } else {
      alert("Enter all details");
    }
  };

  render() {
    return (
      <Grid fluid={true} className="contact-container">
        <Row>
          <Col lg={12}>
            <h1 className="contact-header">Get in touch with us !</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={3} />
          <Col lg={2} className="contact-tile">
            <div>
              <Image src={addressImg} responsive className="address-image" />
              <span className="span-header">Address</span>
              <div className="underline-div" />
              <span className="span-text">
                <strong>" Mind Palace "</strong>, No.150, 2nd Floor, Above
                Vishwas Jewellers AECS Layout, Sanjaynagar Main Road, Bengaluru
                560094
              </span>
            </div>
          </Col>
          <Col lg={2} className="contact-tile">
            <div>
              <Image src={emailImg} responsive className="address-image" />
              <span className="span-header">Email</span>
              <div className="underline-div" />
              <span className="span-text">
                <strong>help@unnathi.org, unnathi.org@gmail.com</strong>
              </span>
            </div>
          </Col>
          <Col lg={2} className="contact-tile">
            <div>
              <Image src={phoneImg} responsive className="address-image" />
              <span className="span-header">Phone</span>
              <div className="underline-div" />
              <span className="span-text">
                TEL: <strong>+91 080 23518271</strong>, MOB:{" "}
                <strong> +91 98454 26049</strong>
              </span>
            </div>
          </Col>
          <Col lg={3} />
        </Row>
        <Row>
          <Col lg={1} />
          <Col lg={5}>
            <div className="contact-map">{<Location />}</div>
          </Col>
          <Col lg={5}>
            <div className="contact-form">
              <h3 className="contact-form-title">Send us a message</h3>
              <input
                className="contact-form-name"
                type="text"
                onKeyUp={e => this.onInputChange("name", e)}
                placeholder="Your Name"
              />
              <input
                className="contact-form-mail"
                type="text"
                onKeyUp={e => this.onInputChange("mail", e)}
                placeholder="Your Email"
              />
              <textarea
                className="contact-form-message"
                type="text"
                onKeyUp={e => this.onInputChange("message", e)}
                placeholder="Your Message"
              />
              <button
                className="contact-submit-button"
                onClick={e => this.onSubmitClick()}
              >
                Submit
              </button>
            </div>
          </Col>
          <Col lg={1} />
        </Row>
        {/* <Alert dismissible show={this.state.alertShow} variant="success">
          <Alert.Heading>Atma Namaste</Alert.Heading>
          <p>
            Your message has been recorded successfully
          </p>
        </Alert> */}
      </Grid>
    );
  }
}
