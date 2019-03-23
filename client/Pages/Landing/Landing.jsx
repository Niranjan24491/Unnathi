import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import BuildIndia from "../BuildIndia";
import Support from "../../components/Support";
import Services from "../Services";
import Team from "../Team";
import Unnathi from "../Unnathi";
import SocialIcons from "../../components/SocialIcons";
import Testimonials from "../../components/Testimonials";

import "./Landing.scss";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.about = React.createRef();
    this.state = {
      displayLanding: "block"
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        displayLanding: "none"
      });
    }, 2000);
  }

  componentDidUpdate(e) {
    console.log(e);
  }

  onNavbarClick = e => {
    const id = e.currentTarget.getAttribute("href").slice(1);
    window.scroll({
      top: document.getElementById(id).offsetTop,
      behavior: "smooth"
    });
  };

  render() {
    return (
      <Grid fluid="true" className="Landing">
        <Row>
          <Col lg={12} sm={12} md={12} xs={12}>
            <Navbar onNavClick={this.onNavbarClick} />
          </Col>
        </Row>
        <Row>
          <Col
            lg={12}
            sm={12}
            md={12}
            xs={12}
            id="home"
            className="home-container"
          >
            <SocialIcons />
            <Home />
          </Col>
        </Row>
        <Row>
          <Col
            lg={12}
            sm={12}
            md={12}
            xs={12}
            className="about-container"
          >
            <About />
          </Col>
        </Row>
        <Row>
          <Col
            lg={12}
            sm={12}
            md={12}
            xs={12}
            id="about"
            className="build-india-container"
          >
            <BuildIndia />
          </Col>
        </Row>
        <Row>
          <Col lg={12} sm={12} md={12} xs={12} id="mind">
            <Unnathi />
          </Col>
        </Row>
        <Row className="unnathi-support">
          <Col lg={12} sm={12} md={12} xs={12}>
            <Support />
          </Col>
        </Row>
        <Row>
          <Col lg={12} sm={12} md={12} xs={12} id="team">
            <Team />
          </Col>
        </Row>
        <Row>
          <Col lg={12} sm={12} md={12} xs={12} id="story">
            <Testimonials />
          </Col>
        </Row>
        <Row>
          <Col lg={12} sm={12} md={12} xs={12} id="contact">
            <Contact />
          </Col>
        </Row>
      </Grid>
    );
  }
}
