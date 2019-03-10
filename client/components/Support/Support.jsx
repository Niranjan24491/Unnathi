import React, { Component } from "react";
import { Grid, Row, Col, Image, Modal, Button } from "react-bootstrap";
import volunteerImg from "../../assets/images/volunteer-copy.png";
import donateImg from "../../assets/images/donate.png";
import registerImg from "../../assets/images/register.png";
import axios from "axios";
import "./Support.scss";

const api =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "http://healing.unnathi.org/";

export default class Support extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      supportType: "donation",
      name: "",
      mail: "",
      message: ""
    };
  }

  onSubmitClick = () => {
    if (this.state.name && this.state.mail && this.state.message) {
      axios
        .post(`${api}sendMail`, {
          name: this.state.name,
          mail: this.state.mail,
          message: this.state.message,
          type: this.state.supportType
        })
        .then(function(response) {
          this.setState({
            name: "",
            mail: "",
            message: "",
            alertShow: true
          });
          alert('Your message has been sent successfully');
        })
        .catch(function(error) {
          console.log(error);
          this.setState({
            name: "",
            mail: "",
            message: ""
          });
          alert('Your message has not been sent');
        });
    } else {
      alert("Enter all details");
    }
  };

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

  handleClose = () => {
    this.setState({ modalShow: false });
  };

  setSupportType = supportType => {
    this.setState({
      supportType: supportType,
      modalShow: true
    });
  };

  onSupportClick = supportType => {
    switch (supportType) {
      case "volunteer": {
        return (
          <div className="support-modal">
            <h3>Donate</h3>
            <div className="contact-form">
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
          </div>
        );
        break;
      }
      case "donation": {
        return (
          <div className="support-modal">
            <h3>Donate</h3>
            <div className="contact-form">
             <h3>Will be supporting this soon!!!</h3>
            </div>
          </div>
        );
        break;
      }
      case "register": {
        return (
          <div className="support-modal">
            <h3>Register for Event</h3>
            <div className="contact-form">
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
          </div>
        );
        break;
      }
    }
  };

  modalContent = () => (
    <Modal className="support" show={this.state.modalShow} onHide={this.handleClose}>
      <Modal.Body>{this.onSupportClick(this.state.supportType)}</Modal.Body>
      <Modal.Footer>
        <Button
          variant="success"
          className="btn btn-outline-success"
          onClick={this.handleClose}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );

  render() {
    return (
      <Grid className="support-container">
        <Row>
          <Col lg={12}>
            <h1 className="support-title">Get Involved</h1>
          </Col>
        </Row>
        <Row float="center">
          <Col lg={3} md={3} sm={3} />
          <Col
            lg={2}
            md={2}
            sm={2}
            xs={6}
            onClick={e => this.setSupportType("donation")}
          >
            <div className="circle">
              <Image src={donateImg} responsive className="circle-image" />
            </div>
            <span>Give Donation</span>
          </Col>
          <Col
            lg={2}
            md={2}
            sm={2}
            xs={6}
            onClick={e => this.setSupportType("volunteer")}
          >
            <div className="circle">
              <Image src={volunteerImg} responsive className="circle-image" />
            </div>
            <span>Become Volunteer</span>
          </Col>
          <Col
            lg={2}
            md={2}
            sm={2}
            xs={6}
            onClick={e => this.setSupportType("register")}
          >
            <div className="circle">
              <Image src={registerImg} responsive className="circle-image" />
            </div>
            <span>Register Events</span>
          </Col>
          <Col lg={3} md={3} sm={3} />
        </Row>

        {this.modalContent()}
      </Grid>
    );
  }
}
