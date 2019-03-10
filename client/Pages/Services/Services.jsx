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

import unnathiBrochaerImg from "../../assets/images/unnathi-brocher.jpg";

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
        .post(`${api}gmail`, {
          name: this.state.name,
          mail: this.state.mail,
          message: this.state.message
        })
        .then(function(response) {
          this.setState({
            name: "",
            mail: "",
            message: "",
            alertShow: true
          });
        })
        .catch(function(error) {
          console.log(error);
          this.setState({
            name: "",
            mail: "",
            message: ""
          });
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
                  <Image
                    src={unnathiBrochaerImg}
                    responsive
                    style={{ margin: "0 auto" }}
                  />
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
