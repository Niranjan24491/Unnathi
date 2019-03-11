import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
  Button,
  Image
} from "react-bootstrap";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Testimonials from "../../components/Testimonials";

import "./Services.scss";

import axios from "axios";

const api =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "http://healing.unnathi.org/";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 4 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  }
});

class Services extends Component {
  state = {
    value: 0,
    name: "",
    mail: "",
    message: "",
    alertShow: false
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

  onSubmitClick = () => {
    if (this.state.name && this.state.mail && this.state.message) {
      axios
        .post("https://niranjan-node.herokuapp.com/sendMail", {
          name: this.state.name,
          mail: this.state.mail,
          message: this.state.message,
          type: "services"
        })
        .then(response => {
          this.setState({
            name: "",
            mail: "",
            message: "",
            alertShow: true
          });
          alert("Your message has been sent successfully");
        })
        .catch(error => {
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

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  counsellingContainer = () => (
    <div>
      <h3>Counselling </h3>
      <p className="tab-content">
        All health problems cannot be resolved only through medicines.
        Understanding the root cause and eradicating it will definitely assure a
        better quality of life provided through counselling.
      </p>
    </div>
  );

  healingContainer = () => (
    <div>
      <h3>Healing </h3>
      <p className="tab-content">
        Health depends on the inner state of the person. All health problems
        cannot be resolved only through medicines and treatments. Yogic Healing
        is a holistic system of increasing the inert healing potential within
        oneself to develop one’s overall well-being
      </p>
      <h4>Different kinds of healing </h4>
      <div className="tab-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={
            <Tooltip id="tooltip-disabled">Helps in avoiding disease</Tooltip>
          }
        >
          <span className="d-inline-block">
            <Button
              className="services-button"
              style={{ pointerEvents: "none" }}
            >
              Preventive healing
            </Button>
          </span>
        </OverlayTrigger>
        <OverlayTrigger
          placement="bottom"
          overlay={
            <Tooltip id="tooltip-disabled">
              Helps in coming out of disease
            </Tooltip>
          }
        >
          <span className="d-inline-block">
            <Button
              className="services-button"
              style={{ pointerEvents: "none" }}
            >
              Curative Healing
            </Button>
          </span>
        </OverlayTrigger>
        <OverlayTrigger
          placement="bottom"
          overlay={
            <Tooltip id="tooltip-disabled">
              Helps control the disease from worsening
            </Tooltip>
          }
        >
          <span className="d-inline-block">
            <Button
              className="services-button"
              style={{ pointerEvents: "none" }}
            >
              Maintenance
            </Button>
          </span>
        </OverlayTrigger>
        <OverlayTrigger
          placement="bottom"
          overlay={
            <Tooltip id="tooltip-disabled">
              Pre and Post surgery support
            </Tooltip>
          }
        >
          <span className="d-inline-block">
            <Button
              className="services-button"
              style={{ pointerEvents: "none" }}
            >
              Pre and Post surgery support
            </Button>
          </span>
        </OverlayTrigger>
      </div>
    </div>
  );

  coachingContainer = () => (
    <div>
      <h3>Coaching </h3>
      <p className="tab-content">
        Regular coaching, guidance, mentoring and support will surely help a
        person to come out of old negative patterns and habits to change
        themselves
      </p>
      <h4>Different kinds of coaching </h4>
      <div className="tab-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={
            <Tooltip id="tooltip-disabled">
              Leadership skills and public speaking
            </Tooltip>
          }
        >
          <span className="d-inline-block">
            <Button
              className="services-button"
              style={{ pointerEvents: "none" }}
            >
              Personality development
            </Button>
          </span>
        </OverlayTrigger>
        <Button className="services-button" style={{ pointerEvents: "none" }}>
          Anger and mood management
        </Button>
        <Button className="services-button" style={{ pointerEvents: "none" }}>
          Concentration and memory
        </Button>
        <Button className="services-button" style={{ pointerEvents: "none" }}>
          Positive bonding with family members
        </Button>
        <Button className="services-button" style={{ pointerEvents: "none" }}>
          Digital detox
        </Button>
        <Button className="services-button" style={{ pointerEvents: "none" }}>
          Weight management
        </Button>
        <Button className="services-button" style={{ pointerEvents: "none" }}>
          Career guidance
        </Button>
        <Button className="services-button" style={{ pointerEvents: "none" }}>
          Developing positive attitude
        </Button>
        <Button className="services-button" style={{ pointerEvents: "none" }}>
          Deleting
        </Button>
      </div>
    </div>
  );

  trainingContainer = () => (
    <div>
      <h3>Diploma in Yogic Healing, Counselling and Leadership Skills</h3>
      <h4>
        “Healthy mind in a healthy body” is the objective to be achieved."
        Communication and leadership skills are becoming essential to achieve
        success in any field. Along with this, Unnathi is also providing hands
        on training in healing techniques.
      </h4>
      <br />
      <h4>
        <strong>Duration of the course:</strong> 6 months{" "}
        <strong>Eligibility:</strong> Undergraduation and above
      </h4>
      <br />
      <strong>
        <h4>Benefits:</h4>
      </strong>
      <ul>
        <li>
          You can become an actively contributing leader in Unnathi’s Build
          India Movement.
        </li>
        <li>
          This course can empower you to get a job in any school or company as a
          counsellor cum yogic healer.
        </li>
        <li>You can start your own counselling service in your free time.</li>
        <li>
          You can utilise these skills to achieve greater success in your
          existing profession.
        </li>
        <li>
          You can utilise the course as a tool to achieve peaceful environment
          at home and office.
        </li>
      </ul>
      <br />
      <strong>
        <h4>
          Enhancement of the following skills targeted during diploma course:
        </h4>
      </strong>
      <ul>
        <li>
          Yogic healing techniques for holistic health for oneself and others{" "}
        </li>
        <li>Counselling and communication</li>
        <li>Problem solving</li>
        <li>Public speaking </li>
        <li>Event management</li>
        <li>Holistic methods of psychotherapy.</li>
      </ul>
      <br />
      <strong>
        <h4>Faculties </h4>
      </strong>
      <h4>
        Experts from the respective fields including the faculties from NIMHANS.
      </h4>
      <br />
      <strong>
        <h4>Methodology </h4>
      </strong>
      <h4>
        Theory and practical sessions are given equal importance. Mentoring,
        follow-up and skill achievement scales will be meticulously executed.
        After the evaluation of skills, certificate will be given.
      </h4>
      <br />
      <strong>
        <h4>Special features </h4>
      </strong>
      <h4>
        Experience leadership opportunities in Unnathi’s Build India movement.
      </h4>
      <h4>
        This is a movement in association with Government of Karnataka, Rajiv
        Gandhi University of Health Sciences, Karnataka and NIMHANS, Bengaluru.{" "}
      </h4>
      <br />
      <strong>
        <h4>
          Please note that this is a part of the fundraising and team building
          activity of UNNATHI HEALING FOUNDATION’S BUILD INDIA MOVEMENT.
        </h4>
      </strong>
    </div>
  );

  render() {
    const { classes, theme } = this.props;

    return (
      <Grid fluid={true} className="services-container">
        <Row>
          <Col lg={12}>
            <h2 className="services-title">Services Offered</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="services-image" />
        </Row>
        <Row>
          <Col lg={2} />
          <Col lg={8}>
            <div className={classes.root} className="services-tab-container">
              <AppBar position="static" color="default">
                <Tabs
                  value={this.state.value}
                  onChange={this.handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                >
                  <Tab label="Healing and Counselling" />
                  <Tab label="Training" />
                  <Tab label="Online Support" />
                  <Tab label="Academic Progress" />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={this.state.value}
                onChangeIndex={this.handleChangeIndex}
              >
                <TabContainer dir={theme.direction}>
                  {this.healingContainer()}
                  {this.counsellingContainer()}
                  {this.coachingContainer()}
                </TabContainer>
                <TabContainer dir={theme.direction}>
                  {this.trainingContainer()}
                </TabContainer>
                <TabContainer dir={theme.direction}>
                  <p className="tab-content">
                    Unnathi will offer most services offered at our centre in
                    Bangalore via the online support portal for adolescent
                    guidance, loneliness, support for children, handling
                    relationship challenges, etc., Distant healing is an option
                    you can avail when going through treatment for all kinds of
                    physical and emotional challenges
                  </p>
                  <div className="services-contact contact-form">
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
                </TabContainer>
                <TabContainer dir={theme.direction}>
                  <h3>Academic Progress</h3>
                  <p className="tab-content">
                    The present scenario has become more of studying the subject
                    and scoring whereas the inner education like right values,
                    strength, courage, persistence, one-pointedness of aim and
                    effort and such core tools to achieve success are sidelined.
                    Unnathi empowers young generation with easily adaptable and
                    reachable methods to achieve their dreams and goals.
                  </p>
                </TabContainer>
              </SwipeableViews>
            </div>
          </Col>
          <Col lg={2} />
        </Row>
      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Services);
