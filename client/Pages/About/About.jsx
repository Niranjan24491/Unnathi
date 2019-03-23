import React, { Component } from "react";
import { Grid, Row, Col, Image, Button, Modal } from "react-bootstrap";
import StarIcon from "material-ui-icons/Star";
import star from "../../assets/images/star-icon.png";
import {
  CollapsibleComponent,
  CollapsibleHead,
  CollapsibleContent
} from "react-collapsible-component";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "./About.scss";

import actionImg1 from "../../assets/images/actions/actions1.jpg";
import actionImg2 from "../../assets/images/actions/actions2.jpg";
import actionImg3 from "../../assets/images/actions/actions3.jpg";
import actionImg4 from "../../assets/images/actions/actions4.jpg";

const MEDIA = [
  "ITV, New York USA",
  "TV9 Kannada",
  "Udaya",
  "Kasturi",
  "Suvarna",
  "Shankara TV",
  "Ayush TV"
];

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false
    };
  }

  onEventsClick = () => {
    this.setState({
      modalShow: true
    });
  };

  handleClose = () => {
    this.setState({ modalShow: false });
  };

  drawMedia = () => {
    let mediaArray = [];
    MEDIA.map(key => {
      mediaArray.push(
        <div className="media">
          <h4>{key}</h4>
        </div>
      );
    });
    return mediaArray;
  };

  modalContent = () => {
    return (
      <Modal show={this.state.modalShow} onHide={this.handleClose}>
        <Modal.Body style={{ textAlign: "center" }}>
          <div>
            <h1 className="tile-header">Events</h1>
          </div>
          <h3>PROGRAMMES ON MEDIA CHANNELS</h3>
          {this.drawMedia()}
          <ul className="media-list">
            <li>
              Many more local channels in Mangalore, Davanagere & Bangalore.
            </li>
            <li>Published many articles in various leading newspapers.</li>
            <li>
              Was a Column writer in Vijaya Karnataka a popular Kannnada daily
            </li>
            <li>
              Currently writing under the column “Childcare” in Vijayavani.
            </li>
          </ul>
          <h3>Authored: Panchaprana book in Kannada</h3>
          <h3>
            Translated: English version of Advanced pranic healing book into
            Kannada
          </h3>
        </Modal.Body>
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
  };

  render() {
    return (
      <Grid fluid={true} className="about-container">
        <Row>
          <Col lg={12} className="about-para">
            <p>
              <strong>Unnathi Healing Foundation (Unnathi)</strong> is a
              registered charitable trust established in 2001, having 80G and
              12A certificates.
            </p>
            <br />
            <p className="paragraph">
              <strong>Unnathi</strong> means upliftment. Upliftment is needed in
              physical, emotional, mental, spiritual levels. Upliftment can make
              our life much more peaceful, happier, healthier and successful. At
              any stage of life upliftment is essential.{" "}
              <strong>Unnathi</strong> is providing systematic and scientific
              tools of making oneself internally strong and well equipped to
              take up challenges of life. Transformation from receiving end to
              giving end is what makes
              <strong>Unnathi</strong> to standout from others. With this aim,{" "}
              <strong>Unnathi</strong> has various wings to reach out all strata
              of society.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="history">
            {this.modalContent()}
            <CollapsibleComponent>
              <CollapsibleHead
                isExpanded={true}
                className="additionalClassForHead"
              >
                <h3>
                  Actions that Speak about Unnathi <span>( CLICK HERE )</span>
                </h3>
              </CollapsibleHead>
              <CollapsibleContent
                isExpanded={false}
                className="additionalClassForContent"
              >
                <div className="actions-image-container row">
                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <Image
                      src={actionImg1}
                      responsive
                      style={{ height: "300px" }}
                    />
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <Image src={actionImg2} responsive />
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <Image src={actionImg3} responsive />
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <Image src={actionImg4} responsive />
                  </div>
                </div>
                <VerticalTimeline>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date=""
                    iconStyle={{
                      background: "rgb(53, 105, 178)",
                      color: "#fff"
                    }}
                    icon={<img className="icon-image" src={star} />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      One Healer Per Family
                    </h3>
                    <ul>
                      <li>
                        1,00,000 individuals were trained in Pranic and Yogic
                        Healing in Bangalore, Mysore, Davanagere, Bellary,
                        Raichur , Mangalore, Sirsi, Belagavi, Hassan, Koppal
                        from 2001.
                      </li>
                      <li>
                        15,000 and more children were taught self-healing
                        throughout Karnataka.
                      </li>
                      <li>
                        2000 and more yogic healing and health awareness
                        programs were conducted all over the world from 2001
                      </li>
                      <li>
                        Priests, teachers and group leaders in various places
                        were trained to help the people associated with them.
                      </li>
                    </ul>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date=""
                    iconStyle={{
                      background: "rgb(233, 30, 99)",
                      color: "#fff"
                    }}
                    icon={<img className="icon-image" src={star} />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Unnathi in media
                    </h3>
                    <Button
                      className="read-more"
                      onClick={e => {
                        this.onEventsClick(e);
                      }}
                    >
                      Read More
                    </Button>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date=""
                    iconStyle={{
                      background: "rgb(53, 105, 178)",
                      color: "#fff"
                    }}
                    icon={<img className="icon-image" src={star} />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      International and corporate programmes
                    </h3>
                    <ul>
                      <li>
                        2,000 Kannadigas were trained on meditation during 5th
                        AKKA conference in Chicago, USA, in August 2008.
                      </li>
                      <li>
                        100 Stress management programmes has been rolled out,
                        covering more than 4000 participants from various
                        organisations and MNC’s in Bangalore , Mysore Coimbatore
                        to name it Infosys, Accenture, BHEL Everest etc.
                      </li>
                      <li>
                        Conduced a training sessions for yoga practitioners in
                        Bali, Indonesia.
                      </li>
                      <li>
                        40 members of staff were trained in Pranic Healing and
                        Stress Management in a 20-days program in ISKON
                        (International Society for Krishna Consciousness),
                        Bengaluru.
                      </li>
                      <li>
                        Worked in collaboration with international clubs like
                        Rotary and Lions.
                      </li>
                    </ul>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date=""
                    iconStyle={{
                      background: "rgb(233, 30, 99)",
                      color: "#fff"
                    }}
                    icon={<img className="icon-image" src={star} />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Reaching out to underprivileged
                    </h3>
                    <ul>
                      <li>
                        40,000 notebook were distributed to Government schools
                        throughout Karnataka.
                      </li>
                      <li>
                        40 children and 10 teachers from The Association of
                        People with Disability (APD),Bangalore were trained in
                        yogic healing techniques.
                      </li>
                      <li>
                        200 Anganawadi workers were trained in Healthcare,
                        Meditation and Pranic healing in the state of Karnataka.
                      </li>
                      <li>
                        200 visually challenged children and Hundreds of
                        differently abled were taught meditation and self
                        healing.Super Brain Yoga.
                      </li>
                      <li>
                        Supported other organisations by Donating clothes,
                        teaching aids, provisions and funds.
                      </li>
                      <li>
                        Continuous support with yogic healing for three months
                        to children with cerebral palsy in Bengaluru.
                      </li>
                      <li>
                        25 NGO’s from across Karnataka were trained in yogic
                        healing.
                      </li>
                    </ul>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date=""
                    iconStyle={{
                      background: "rgb(53, 105, 178)",
                      color: "#fff"
                    }}
                    icon={<img className="icon-image" src={star} />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Social reformations
                    </h3>
                    <ul>
                      <li>
                        1800 children in District Child Protection Unit,
                        Bangalore were trained on meditation in a year-long
                        programme.
                      </li>
                      <li>
                        50 inmates of Open Air Jail, Parappana agrahara,
                        Bengaluru were benefited through the BASE programme
                        (Balancing Addiction and Strengthening Energies).
                      </li>
                      <li>
                        50 personnel from the Department of Home (Police) were
                        benefitted through a programme on Stress management and
                        Meditation.
                      </li>
                      <li>
                        Donated 35kg capacity washing machine for District Child
                        Protection Unit, Bengaluru.
                      </li>
                      <li>
                        Donated 35kg capacity washing machine to Sumangali Seva
                        Ashram, Bengaluru.
                      </li>
                      <li>
                        Rag pickers children were supported at Sumangali Seva
                        Ashram in Bangalore.
                      </li>
                    </ul>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date=""
                    iconStyle={{
                      background: "rgb(233, 30, 99)",
                      color: "#fff"
                    }}
                    icon={<img className="icon-image" src={star} />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Women and child empowerment
                    </h3>
                    <ul>
                      <li>
                        1500 students of BBMP Girls High School and PU College
                        were provided vocational training on phenoly making,
                        diya painting, gardening.
                      </li>
                      <li>
                        300 schools covering 7000 children were trained in
                        meditation and SUPERBRAIN yoga throughout Karnataka.
                      </li>
                      <li>
                        1800 children in District Child Protection Unit,
                        Bangalore were trained on meditation in a year-long
                        programme.
                      </li>
                      <li>
                        15000 and more children were taught self-healing
                        throughout Karnataka.
                      </li>
                      <li>
                        More than 200 sessions on empowering women through
                        training on self-healing, meditation, skills to handle
                        family and violence.
                      </li>
                      <li>
                        Hundred plus students were provided training basics of
                        computer operations.
                      </li>
                      <li>
                        Regularly supporting women and children at Sumagali Seva
                        ashram Bangalore.
                      </li>
                    </ul>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date=""
                    iconStyle={{
                      background: "rgb(53, 105, 178)",
                      color: "#fff"
                    }}
                    icon={<img className="icon-image" src={star} />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Health and education
                    </h3>
                    <ul>
                      <li>
                        500 and more Free Pranic healing and yogic healing camps
                        were organised all over Karnataka from 2001.
                      </li>
                      <li>
                        500 people were benefitted from free healing during
                        “Hindu Spiritual and Service Fair”, National College
                        Grounds, Bangalore in 2016.
                      </li>
                      <li>
                        175 senior citizens from Dignity Foundation, Coffee
                        Board Chavadi were taught on handling old age and
                        relationship management.
                      </li>
                      <li>
                        150 teachers from 50 schools in Bengaluru were trained
                        in half a day programme on addressing stress in
                        students.
                      </li>
                      <li>
                        500 and more NSS students were taught self-motivation
                        and leadership skills
                      </li>
                      <li>
                        Organising programmes for various MNC to support govt
                        schools under ‘CSR activities’.
                      </li>
                      <li>
                        Arogya santhe( health fare ) was organised in a large
                        scale at cocoon park, Bangalore{" "}
                      </li>
                      <li>
                        1,500 students from 10th and 12th. Class got benefited
                        from guidance and mentoring sessions on facing board
                        exams.{" "}
                      </li>
                      <li>
                        200 Medical students were helped before facing their
                        first years final exam, which is considered to be most
                        crucial in the medical course.
                      </li>
                    </ul>
                  </VerticalTimelineElement>
                </VerticalTimeline>
              </CollapsibleContent>
            </CollapsibleComponent>
          </Col>
        </Row>
      </Grid>
    );
  }
}
