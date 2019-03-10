import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";

import "./Team.scss";

import tileImage1 from "../../assets/images/team/saraswathi.png";
import tileImage2 from "../../assets/images/team/sKumar.png";
import tileImage3 from "../../assets/images/team/suresh.png";
import tileImage4 from "../../assets/images/team/giridhar.png";
import tileImage5 from "../../assets/images/team/jaisri.png";
import tileImage6 from "../../assets/images/team/geeta.png";
import tileImage7 from "../../assets/images/team/jay.png";
import tileImage8 from "../../assets/images/team/arathi.png";

export default class Team extends Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();
  }

  render() {
    return (
      <Grid fluid={true}>
        <Row className="team-header justify-content-center">
          <h1> The Team</h1>
        </Row>
        <Row className="team-container">
          <Col lg={12}>
            <div className="founder-image">
              <Image src={tileImage1} responsive />
            </div>
          </Col>
          <Col lg={12} className="founder-para">
            <h4>Dr. Saraswathi Hegde - Founder, President</h4>
            <p className="align-middle">
              Dr Saraswathi Hegde, holder of a doctorate in the subject of
              “Pranic Healing” and child  stress management, she has been an
              active figure in social service from the past 25 years.   With her
              MA ,M.Phil in Sanskrit, she is blending the 4000 year old yogic
              healing techniques to solve the challenges of our high school
              students. It has helped her to understand the ancient Indian texts
              in a more lucid way to help the general population understand its
              significance and to apply the teachings in a very practical manner
              through interactive sessions and seminars. Being a direct disciple
              of Master Choa Kok Sui who is the modern founder of pranic healing
              and Arhatic Yoga, her understanding of Pranic healing led her to
              even translate into Kannada the English version of the “advanced
              pranic healing” written by Master Choa Kok Sui.  She was a regular
              column writer for the Kannada newspaper Vijaya Karnataka on
              topics ranging from handling teenagers to tips on maintaining good
              health to name a few. These articles were later compiled to
              release a book titled “Pancha Prana” which sold numerous  copies
              across Karnataka.
            </p>
            <p className="align-middle">
              She established an NGO, Unnathi Healing Foundation Trust in 2001,
              primarily for the betterment of the children & youth. Her approach
              to counsel parents and teachers during the unique peer to peer
              counselling has won her many appreciation over last 17 years.
            </p>
            <p className="align-middle">
              Dr. Saraswathi Hegde was the principal investigator heading the
              Department of Yoga Vidya Pranic Healing in various research
              activities at the M.S. Ramaiah Medical Teaching Hospitals,
              Bangalore- Karnataka, India for more than 10 years Dr Saraswathi
              Hegde is skilled in tackling the issues of Addictions, Suicidal
              tendencies and diversions in adolescents. As part of the
              counselling process, she continuously trains the medical students
              and various UG students to develop leadership skills thus helping
              them to come out of their challenges.
            </p>
          </Col>
        </Row>
        <Row className="team-container">
          <Col lg={12}>
            <div className="founder-image">
              <Image src={tileImage2} responsive />
            </div>
          </Col>
          <Col lg={12} className="founder-para">
            <h4>
              Dr. S Kumar, Hon'ble Chancellor, Sri Devaraj Urs Academy of High
              Education and Research - Chief Advisor
            </h4>
            <p className="align-middle">
              Unnathi Healing Foundation was started in 2001 as registered NGO
              with an aim to heal and rejuvenate the society. It is headed by Dr
              Saraswathi Hegde, a psychologist with proficiency in healing
              techniques, doctorate in Child Stress Management has been
              spearheading various programmes to bring about harmony and
              wellness in the society.
            </p>
          </Col>
        </Row>
        <Row className="team-container">
          <Col lg={12}>
            <h3>Ethics Commitee</h3>
          </Col>
        </Row>
        <Row className="team-sub-container">
          <Col lg={2} md={0} sm={0} xs={0}/>
          <Col lg={2} md={2} sm={6} xs={6}>
            <Image src={tileImage3} responsive />
            <h5>Dr Suresh Shapeti, Chairperson</h5>
          </Col>
          <Col lg={2} md={2} sm={6} xs={6}>
            <Image src={tileImage4} responsive />
            <h5>Dr Giridhara Babu, Clinician</h5>
          </Col>
          <Col lg={2} md={2} sm={6} xs={6}>
            <Image src={tileImage5} responsive />
            <h5>Dr Jaisri Goturu, Basic Scientist</h5>
          </Col>
          <Col lg={2} md={2} sm={6} xs={6}>
            <Image src={tileImage6} responsive />
            <h5>Dr Geeta Patil, Clinician</h5>
          </Col>
          <Col lg={2} md={0} sm={0} xs={0}/>
        </Row>
        <Row className="team-sub-container">
          <Col lg={2} md={0} sm={0} xs={0}/>
          <Col lg={2} md={2} sm={6} xs={6}>
            <Image src="" responsive />
            <h5>Mrs Padmavathi S, Member Secretary</h5>
          </Col>
          <Col lg={2} md={2} sm={6} xs={6}>
            <Image src="" responsive />
            <h5>Mr Dinesh Mahale, Legal Expert</h5>
          </Col>
          <Col lg={2} md={2} sm={6} xs={6}>
            <Image src={tileImage7} responsive />
            <h5>Mr Jayaraman, Social Scientist</h5>
          </Col>
          <Col lg={2} md={2} sm={6} xs={6}>
            <Image src={tileImage8} responsive />
            <h5>Mrs Arathi Subramanian, Lay Person</h5>
          </Col>
          <Col lg={2} md={0} sm={0} xs={0}/>
        </Row>
      </Grid>
    );
  }
}
