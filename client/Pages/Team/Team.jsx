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
import tileImage9 from "../../assets/images/team/Dinesh.jpg";
import tileImage10 from "../../assets/images/team/padmavathi.jpg";

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
          <Col lg={12} md={12} xs={12} sm={12}>
            <div className="founder-image">
              <h4>Founder President</h4>
              <Image src={tileImage1} responsive />
            </div>
          </Col>
          <Col lg={12} md={12} xs={12} sm={12} className="founder-para">
            <h4>Dr. Saraswathi Hegde</h4>
            <p className="align-middle">
              Dr Saraswathi Hegde, holder of a doctorate in the subject of
              “Pranic Healing” and child stress management, she has been an
              active figure in social service from the past 25 years. With her
              MA ,M.Phil in Sanskrit, she is blending the 4000 year old yogic
              healing techniques to solve the challenges of our high school
              students. It has helped her to understand the ancient Indian texts
              in a more lucid way to help the general population understand its
              significance and to apply the teachings in a very practical manner
              through interactive sessions and seminars. Being a direct disciple
              of Master Choa Kok Sui who is the modern founder of pranic healing
              and Arhatic Yoga, her understanding of Pranic healing led her to
              even translate into Kannada the English version of the “advanced
              pranic healing” written by Master Choa Kok Sui. She was a regular
              column writer for the Kannada newspaper Vijaya Karnataka on topics
              ranging from handling teenagers to tips on maintaining good health
              to name a few. These articles were later compiled to release a
              book titled “Pancha Prana” which sold numerous copies across
              Karnataka.
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
              Bangalore- Karnataka, India for more than 10 years. Dr Saraswathi
              Hegde is skilled in tackling the issues of Addictions, Suicidal
              tendencies and diversions in adolescents. As part of the
              counselling process, she continuously trains the medical students
              and various UG students to develop leadership skills thus helping
              them to come out of their challenges.
            </p>
          </Col>
        </Row>
        <Row className="team-container">
          <Col lg={12} md={12} xs={12} sm={12}>
            <div className="founder-image">
              <h4>Chief Advisor</h4>
              <Image src={tileImage2} responsive />
            </div>
          </Col>
          <Col lg={12} md={12} xs={12} sm={12} className="founder-para">
            <h4 style={{ textAlign: "center", marginBottom: "4%" }}>
              Dr. S Kumar, Hon'ble Chancellor, Sri Devaraj Urs Academy of High
              Education and Research
            </h4>
            <ul className="ethics-points">
              <li>
                Chancellor, Sri Devaraj Urs Academy of Higher Education and
                Research
              </li>
              <li>
                Head of Academics and Content Development, Educational Rating
                and Assessment Foundation of India. The organisation aims to
                bring all Deemed and Private universities in India to accept a
                single benchmark for merit determination.
              </li>
              <li>
                Served as President, Medical Education, Gokul Education
                Foundation – Promoters of M S Ramaiah
              </li>
              <li>
                Served as Principal and Dean in M S Ramaiah Medical Hospital
              </li>
              <li>
                Undertaken Research and projects with Indian Council of Medical
                Research
              </li>
              <li>
                Co-ordinated 20 field trials sponsored by WHO, UNIDO, WASTE –
                Netherlands.
              </li>
              <li>
                Trustee at SPANDANA – a resource centre for differently abled
                children.
              </li>
              <li>Award of Excellence from Rotary Bangalore and Lions Club</li>
              <li>
                Serving Executive Secretary and test Director of COMED-K with 14
                entrance exams for over 1,00,000 candidates in 150 centres year
                after year
              </li>
              <li>
                Former Member of Panel examiner for National Board of RGUHS
              </li>
              <li>
                Former member of Academic council for KLE & Sri Devaraj URgs
                Medical College.
              </li>
              <li>Former core team member for National Disaster Management</li>
            </ul>
          </Col>
        </Row>
        <div className="ethics">
          <Row className="team-sub-container">
            <Col lg={12} md={12} xs={12} sm={12}>
              <h3 className="title">Ethics Commitee</h3>
            </Col>
            <Col lg={12} md={12} xs={12} sm={12} className="ethics-description">
              <p className="ethics-text">
                An ethics committee is a body responsible for ensuring that
                medical experimentation and human research are carried out in an
                ethical manner in accordance with national and international
                law.-WIKIPEDIA.
              </p>
              <br />
              <p className="ethics-text">
                Unnathi healing foundation has an Independent Ethics Committee,
                to ensure the implementation of right norms for its research
                activities. Persons interested in research activities are
                requested to contact us for further details.
              </p>
            </Col>
          </Row>
          <br />
          <Row className="team-sub-container">
            <Col lg={12} md={12} xs={12} sm={12}>
              <div className="founder-image">
                <h4>Ethics Committee is headed by </h4>
                <Image src={tileImage3} responsive />
                <h4>Dr Suresh Shapeti</h4>
                <h5>
                Senior administrative officer and deputy registrar, Public
                health foundation of India.
              </h5>
              </div>
            </Col>
          </Row>
          <Row className="team-sub-container">
            <Col lg={2} md={0} sm={0} xs={0} />
            <Col lg={2} md={2} sm={6} xs={6}>
              <Image src={tileImage4} responsive />
              <h4>Dr Giridhara Babu</h4>
              <h5>Clinician</h5>
            </Col>
            <Col lg={2} md={2} sm={6} xs={6}>
              <Image src={tileImage5} responsive />
              <h4>Dr Jaisri Goturu</h4>
              <h5>Basic Scientist</h5>
            </Col>
            <Col lg={2} md={2} sm={6} xs={6}>
              <Image src={tileImage6} responsive />
              <h4>Dr Geeta Patil</h4>
              <h5>Clinician</h5>
            </Col>
            <Col lg={2} md={2} sm={6} xs={6}>
              <Image src={tileImage10} responsive />
              <h4>Mrs Padmavathi S</h4>
              <h5>Member Secretary</h5>
            </Col>
            <Col lg={2} md={0} sm={0} xs={0} />
          </Row>
          <Row className="team-sub-container">
            <Col lg={2} md={0} sm={0} xs={0} />
            <Col lg={2} md={2} sm={6} xs={6}>
              <Image src={tileImage9} responsive />
              <h4>Mr Dinesh Mahale</h4>
              <h5>Legal Expert</h5>
            </Col>
            <Col lg={2} md={2} sm={6} xs={6}>
              <Image src={tileImage7} responsive />
              <h4>Mr Jayaraman</h4>
              <h5>Social Scientist</h5>
            </Col>
            <Col lg={2} md={2} sm={6} xs={6}>
              <Image src={tileImage8} responsive />
              <h4>Mrs Arathi Subramanian</h4>
              <h5>Lay Person</h5>
            </Col>
            <Col lg={2} md={0} sm={0} xs={0} />
          </Row>
        </div>
      </Grid>
    );
  }
}
