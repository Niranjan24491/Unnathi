import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";

import Services from "../Services";

import "./Unnathi.scss";

const UNNATHI_DATA = {
  content: `Unnathi Healing Foundation was started in 2001 as registered NGO
  with an aim to heal and rejuvenate the society. It is headed by Dr
  Saraswathi Hegde, a psychologist with proficiency in healing
  techniques, doctorate in Child Stress Management has been
  spearheading various programmes to bring Unnathi harmony and
  wellness in the society.`
};
export default class Unnathi extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid fluid={true} className="unnathi-container">
        <Row>
          <Col lg={12} className="unnathi-header">
            <h1>Unnathi Mind Palace</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={2} />
          <Col lg={8} className="unnathi-content">
            <ul>
              <li>A centre for unexplored possibilities</li>
              <li>
                Learn to be more with the right support provided at the right
                time
              </li>
              <li>
                It is a safe haven for people having difficulties in their
                mental thought processes, lifestyle issues like obesity, work
                stress, lack of motivation, poor overall health among others.
              </li>
              <li>
                All in all, a true place for rejuvenating oneself for the days
                to come
              </li>
            </ul>
          </Col>
          <Col lg={2} />
        </Row>
        <Row>
          <Services />
        </Row>
      </Grid>
    );
  }
}
