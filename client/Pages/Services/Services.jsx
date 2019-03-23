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
      <h3>Yogic Healing </h3>
      <p className="tab-content">
        Health depends on the inner state of the person. All health problems
        cannot be resolved only through medicines and treatments. Yogic Healing
        is a holistic system of increasing the inner healing potential within
        oneself to develop one’s overall well-being. It is a non invasive
        therapy highly beneficial in solving all kind of health problems. It is
        method where healers will provide appropriate energy to the body and
        mind of the patient.
      </p>
      <h4>Different kinds of healing </h4>
      <div className="tab-icons">
        <ul>
          <li>
            Preventive Healing - Helps in protecting good health and preventing
            diseases. ’Prevention is better than cure’
          </li>
          <li>
            Curative Healing - Diabetes, hypertension, arthritis and many more
            systemic diseases need more adjuvant support. It is essential and
            inevitable to have such support to improve the quality of life on a
            long term.
          </li>
          <li>
            Rejuvenating and reversal therapy - Since recovery power is a hidden
            potential within, enhancing the inner healing power will make the
            body return to its natural healthy state and it is possible through
            Yogic Healing methods{" "}
          </li>
          <li>
            Pre and Post surgery support- Facing and managing inevitable
            situations are very challenging for the patients as well as the
            family members. Unnathi will be a pillar of strength and supporting
            through its healing, guidance, prayers and blessings.
          </li>
        </ul>
      </div>
      <h4>Distant healing –Call a healer </h4>
      <div className="tab-icons">
        <ul>
          <li>
            Distant healing is an option that you can avail while going through
            all kinds of physical and emotional challenges.
          </li>
          <li>
            It is method where healers provide the support from any distance.
            Energy is like internet existing everywhere. Well trained, skillful
            and dedicated healers from Unnathi will make the recovery process
            smother and faster.
          </li>
          <li>
            Send a healing request
            <a
              href="https://docs.google.com/forms/d/11cEHRtn_Ev4dbG3oAM3_gwY2tKvApTYWY2ssViM80X8/edit"
              target="_blank"
            >
              LINK
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

  coachingContainer = () => (
    <div>
      <h3>Counselling and Coaching </h3>
      <p className="tab-content">
        Understanding the root cause and eradicating it will definitely assure a
        better quality of life provided through counselling. Regular coaching,
        guidance, mentoring and support will surely help a person to come out of
        old negative patterns and habits to change themselves. ‘Train them
        Young’- Help children to develop good self esteem
      </p>
      <h4>Healing for children</h4>
      <div className="tab-icons">
        <span className="tab-icons-span">
          Every child is the dream of a family. Avoid taking risks with your
          child. Learn to seek help to heal childs’ behavioural problems,
          depression, addictions, learning difficulties, anxiety or any other
          challenges.
        </span>
        <ul>
          <li>
            Take a step forward of extending healing support to children in case
            of chronic health problems and systemic disease.
          </li>
          <li>
            Unnathi empowers young generation with easily adaptable and
            reachable methods to achieve their dreams and goals.
          </li>
        </ul>
      </div>
      <h4>
        Every counselling and coaching is tailor-made. Sample topics are as
        mentioned below-
      </h4>
      <div className="tab-icons">
        <ul>
          <li>
            Personality development - Leadership skills and public speaking
          </li>
          <li>Anger and mood management</li>
          <li>Concentration and memory</li>
          <li>Positive bonding with family members</li>
          <li>Digital detox</li>
          <li>Weight management</li>
          <li>Career guidance</li>
          <li>Developing positive attitude</li>
          <li>Deleting old memories</li>
          <li>
            Send a healing request
            <a
              href="https://docs.google.com/forms/d/11cEHRtn_Ev4dbG3oAM3_gwY2tKvApTYWY2ssViM80X8/edit"
              target="_blank"
            >
              LINK
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

  trainingContainer = () => (
    <div>
      <div className="training-header">
        <span>
          The purpose of training is to cultivate the habit of internal and
          external strength, clarity and values leading to a healthy and happy
          life. Unnathi is providing a specialised short term and long term
          training courses for healthy living.
        </span>
        <span>
          ‘Give a man a fish and you feed him for a day, teach a man to fish and
          you feed him for a lifetime’
        </span>
      </div>
      <h3>Diploma in Yogic Healing, Counselling and Leadership Skills</h3>
      <h4>
        “Healthy mind in a healthy body” is the objective." Communication and
        leadership skills are becoming essential to achieve success in any
        field. Along with this, Unnathi is also providing hands on training in
        Yogic healing and psychotherapy techniques.
      </h4>
      <br />
      <h4>
        <strong>Duration of the course:</strong> 6 months{" "}
        <strong>Eligibility:</strong> Undergraduation and above
      </h4>
      <br />
      <strong>
        <h4>
          Enhancement of the following knowledge and skills aimed at during
          diploma course:
        </h4>
      </strong>
      <ul>
        <li>
          Yogic healing techniques for holistic health for oneself and others
        </li>
        <li>Counselling and communication skills</li>
        <li>Problem solving</li>
        <li>Public speaking</li>
        <li>Event management</li>
        <li>Holistic methods of psychotherapy.</li>
      </ul>
      <h4>
        Credentials- certificate of diploma in yogic healing, counselling and
        leadership-by Unnathi healing foundation
      </h4>
      <h4>
        Internship certificate – from Unnathi healing foundation and Government
        of Karnataka
      </h4>
      <br />
      <h3>Kriyashakthi for success and prosperity(details):</h3>
      <br />
      <h4>
        <strong>Duration of the course:</strong> 3 days of training and 21 days
        of practice.
        <strong>Eligibility:</strong> 16years of age and Above.
      </h4>
      <br />
      <h4>This is for the persons whoever has:</h4>
      <ul>
        <li>
          Willingness and commitment to achieve success in life with ease and
          peace
        </li>
        <li>Enthusiasm to know the secret of law of attraction</li>
        <li>Ready to erase the habit of failure and poverty</li>
        <li>The habit of manifesting each wish on time systematically</li>
        <li>To get a right job/partner</li>
        <li>Recover dues and property</li>
        <li>Manifesting good health and better relationship at home</li>
      </ul>
      <br />
      <h3>Healer’s certification course (details):</h3>
      <br />
      <h4>
        <strong>Duration of the course:</strong> 6 months
        <strong>Eligibility:</strong> 16years of age and Above.
      </h4>
      <br />
      <h4>
        This programme for the people who wants to explore beyond physical
        nature of existence:
      </h4>
      <ul>
        <li>Utilising the Pranic energy for healing and blessing.</li>
        <li>To increase the goodness in the surroundings.</li>
        <li>To alleviate the sufferings of others </li>
        <li>Willingness for spiritual growth</li>
        <li>Inner quest to know oneself.</li>
      </ul>
      <br />
      <h4>
        Contact us for various short term courses on healing and meditation.
      </h4>
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
