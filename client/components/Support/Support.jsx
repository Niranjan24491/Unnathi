import React, { Component } from "react";
import { Grid, Row, Col, Image, Carousel } from "react-bootstrap";
import volunteerImg from "../../assets/images/volunteer-copy.png";
import donateImg from "../../assets/images/donate.png";
import registerImg from "../../assets/images/register.png";

import "./Support.scss";

export default class Support extends Component {
  constructor(props) {
    super(props);
  }

  drawCarousal = () => {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={tileImage1} alt="First slide" />
          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={tileImage2} alt="Second slide" />

          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={tileImage3} alt="Third slide" />

          <Carousel.Caption />
        </Carousel.Item>
      </Carousel>
    );
  };

  render() {
    return (
      <Grid className="support-container">
        <Row>
          <Col lg={12}>
            <h1 className="support-title">How can you support us</h1>
          </Col>
        </Row>
        <Row float="center">
          <Col lg={3} />
          <Col lg={2} md={6} sm={6} xs={6}>
            <div className="circle">
              <Image src={volunteerImg} responsive className="circle-image" />
            </div>
            <span>Become Volunteer</span>
          </Col>
          <Col lg={2} md={6} sm={6} xs={6}>
            <div className="circle">
              <Image src={donateImg} responsive className="circle-image" />
            </div>
            <span>Give Donation</span>
          </Col>
          <Col lg={2} md={6} sm={6} xs={6}>
            <div className="circle">
              <Image src={registerImg} responsive className="circle-image" />
            </div>
            <span>Register Events</span>
          </Col>
          <Col lg={3} />
        </Row>
        {/* <Row className="projects-slide">
          <Col lg={12}>{this.drawCarousal()}</Col>
        </Row> */}
      </Grid>
    );
  }
}
