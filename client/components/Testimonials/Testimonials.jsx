import React from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import Slider from "react-slick";
import "./Testimonials.scss";
import quoteImg from "../../assets/images/quote.png";

export default class Testimonials extends React.Component {
  drawCarousal = () => {
    var settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div className="quote-container">
          <Image src={quoteImg} responsive className="quote-image" />
          <p>
            It is shocking to know that children are indulging in unnecessary
            and unethical activities. A simple guidance is motivating them to
            change themselves. I feel every undergraduate student should take up
            this activity seriously to help adolescents
          </p>
          <h3 style={{ textAlign: "center" }}>
            <strong>Medical student</strong>
          </h3>
        </div>
        <div className="quote-container">
          <Image src={quoteImg} responsive className="quote-image" />
          <p>
            Children are always bombarded with instructions. I have realised it
            is important to give them an opportunity to express their emotions
            and thoughts.
          </p>
          <h3 style={{ textAlign: "center" }}>
            <strong>School Teacher</strong>
          </h3>
        </div>
        <div className="quote-container">
          <Image src={quoteImg} responsive className="quote-image" />
          <p>
            The session was very useful. It taught me to encourage very silent
            children to be bold. Thank U I recognised so much mistakes what I
            made till now ie before this session. I came to know how to apply in
            day-to-day life to me, my children and my dear students to help them
            to overcome their barriers. Studies only is not life, Very
            beneficial session. Students felt it was interactive and they were
            able to share their experiences openly. We would love to have such
            sessions which would help us to get rid of the unwanted stress and
            help us lead a healthy life.
          </p>
          <h3 style={{ textAlign: "center" }}>
            <strong>School Teacher</strong>
          </h3>
        </div>
        <div className="quote-container">
          <Image src={quoteImg} responsive className="quote-image" />
          <p>
            Very beneficial session. Students felt it was interactive and they
            were able to share their experiences openly. We would love to have
            such sessions which would help us to get rid of the unwanted stress
            and help us lead a healthy life.
          </p>
          <h3 style={{ textAlign: "center" }}>
            <strong>School Teacher</strong>
          </h3>
        </div>
        <div className="quote-container">
          <Image src={quoteImg} responsive className="quote-image" />
          <p>
            First time somebody asked me what is happening with you. It has
            helped me to realise I am also important
          </p>
          <h3 style={{ textAlign: "center" }}>
            <strong>School Student</strong>
          </h3>
        </div>

        <div className="quote-container">
          <Image src={quoteImg} responsive className="quote-image" />
          <p>
            Always I felt scared to talk to doctors and I used to hide my health
            problems. This session made me seek help for my health problem
          </p>
          <h3 style={{ textAlign: "center" }}>
            <strong>High School Student</strong>
          </h3>
        </div>

        <div className="quote-container">
          <Image src={quoteImg} responsive className="quote-image" />
          <p>
            Since they were ready to take guidance from me, it was easier to
            influence them to make right choices. First time I felt I too could
            influence someone and I realized that I am also an effective
            communicator
          </p>
          <h3 style={{ textAlign: "center" }}>
            <strong>Medical student</strong>
          </h3>
        </div>
        <div className="quote-container">
          <Image src={quoteImg} responsive className="quote-image" />
          <p>
            Friends are important but not to budge for their pressure to do
            wrong things. This made me feel good from within me
          </p>
          <h3 style={{ textAlign: "center" }}>High school Student</h3>
        </div>
      </Slider>
    );
  };

  renderVideos = () => {
    return (
      <div className="video-container">
        <h1>Some Inspirational Videos</h1>
        <Row>
          <Col lg={1} />
          <Col lg={5}>
            <iframe src="https://www.youtube.com/embed/iG2ukc-vk4g" />
          </Col>
          <Col lg={5}>
            <iframe src="https://www.youtube.com/embed/DAmrRMqmRhE" />
          </Col>
          <Col lg={1} />
        </Row>
      </div>
    );
  };

  render() {
    return (
      <Row>
        <Col lg={12}>
          <h1 className="services-title">Some of our success stories</h1>
        </Col>
        <Col lg={12} className="spectrum">
          {this.drawCarousal()}
          {this.renderVideos()}
        </Col>
      </Row>
    );
  }
}
