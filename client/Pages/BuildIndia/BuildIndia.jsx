import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Image,
  Modal,
  Carousel,
  Button,
  OverlayTrigger,
  Tooltip
} from 'react-bootstrap';

import BIMimg from '../../assets/images/Build_India_Logo.png';
import GovImg from '../../assets/images/Gov.png';
import nimhansImg from '../../assets/images/Nimhans.png';
import rghusImg from '../../assets/images/rguhs.png';

import tileImg1 from '../../assets/images/BI/BI1.png';
import tileImg2 from '../../assets/images/BI/BI2.png';
import tileImg3 from '../../assets/images/BI/BI3.png';
import tileImg4 from '../../assets/images/BI/BI4.png';
import tileImg5 from '../../assets/images/BI/BI5.jpg';
import tileImg6 from '../../assets/images/BI/BI6.jpg';
import tileImg7 from '../../assets/images/BI/BI7.jpg';
import tileImg8 from '../../assets/images/BI/BI8.png';
import tileImg9 from '../../assets/images/BI/BI9.png';
import tileImg10 from '../../assets/images/BI/BI10.jpg';
import tileImg11 from '../../assets/images/BI/BI11.jpg';
import tileImg12 from '../../assets/images/BI/BI12.jpg';

import ImageArray1 from '../../assets/images/ImageArray1.jpg';
import ImageArray2 from '../../assets/images/ImageArray2.jpg';
import ImageArray3 from '../../assets/images/ImageArray3.jpg';
import ImageArray4 from '../../assets/images/ImageArray4.jpg';

import './BuildIndia.scss';

const BIM_DATA = {
  accordian: {
    vision: {
      header: 'Vision Statement',
      description: `Practicing time-tested 4000-year old yogic healing, impacting
      hundreds and thousands of lives, unleashing their physical,
      mental and social potential, Unnathi is poised to empower all
      adolescents.`
    },
    objectives: {
      header: 'Objectives'
    },
    organisations: {
      header: 'Organisations'
    }
  }
};

export default class BuildIndia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      selectedTile: {},
      imageArray: [ImageArray1, ImageArray2, ImageArray4, ImageArray3],
      modalContent: {
        bi1: {
          modalHeader: 'Why Build India Movement',
          modalContent: [
            'India is a country with the most number of people under the age of 18 years in the world. And it is a goldmine of human resource for the future.',
            'But the goldmine is becoming more and more difficult to reach due to many problems plaguing the youth of the country.',
            'Problems like suicidal tendencies, depression, drug addiction, relationship issues are unfortunately on the rise.',
            'The best way we can stop this epidemic is to reach out to youngsters on a more personal level and to guide them the right way',
            'The BUILD INDIA MOVEMENT is what will be the guiding light for the youngsters',
            'Its aim is to involve the undergraduate students to help guide the adolescents with one to one interactions',
            'The undergraduates will develop leadership skills in the process.',
            'Topics like personality development, soft skills, leadership skills, academic enhancement among others will be emphasised',
            'Karnataka lost one student to suicide every day, Ministry of Home Affairs, Government of India – January 6th, 2018 – Times of India, Bengaluru',
            'According to report in 2012 from WHO on “Mental Health Status of Adolescents in South-East Asia: Evidence for Action”, the estimated suicide rate for 1 lakh people in India in the age group of 15 to 29 years was 35.5 and 1 in 4 children in India suffer from depression.',
            'Prevalence of drug abuse among students a major cause of concern in Karnataka’s education hub – 20th October 2017, Times of India',
            'Screening addiction a growing public health concern in Karnataka – 3rd July 2018, The Hindu'
          ],
          modalImagePath: [tileImg1, tileImg2, tileImg3, tileImg4]
        },
        bi2: {
          modalHeader: 'Build India Achievements',
          modalContent: [
            'Reached out to 4000 health science students over 20 colleges as of January 2019',
            'Reached out to 10,000 adolescents from 50 schools',
            'MOU signed with Department of Education, Government of Karnataka.',
            'RGUHS – considered this as service activity to implement throughout all colleges under its jurisdiction',
            'NIMHANS has come forward to support by conducting training session on basic techniques of counselling and communication to health science students.',
            'Places reached in Karnataka are Bangalore, Hoskote, Malur, Tumkur, Tiptur, Mysore, Hassan, Chitradurga, Shimoga, Shikaripura, Sirsi'
          ],
          modalImagePath: [tileImg5, tileImg6, tileImg7]
        },
        bi3: {
          modalHeader: 'Targets of Build India',
          modalContent: [
            'To cover in Karnataka within next 5 years 30 districts, 230 taluks, 50 lakh adolescents, 1 lakh + health science students',
            'Supporting those adolescents needing vocational training',
            'Support for mental or physical health linked with professional help',
            'Addictions, sexual abuse, suicidal tendencies to be detected and linked to appropriate organisations for prompt action',
            'Conducting awareness and training programs for parents and teachers on similar topics.',
            'Reach	out	Karnataka	zone	wise	as  follows:North - Gulbarga and surroundings Central - Davangere and surroundings West - Mangalore and surroundings South - Bangalore, Mysore and surroundings'
          ],
          modalImagePath: [tileImg8, tileImg9]
        },
        bi4: {
          modalHeader: 'Want to contribute',
          modalContent: [
            'Funds- For each adolescent to be reached effectively needs 1000 rupees per annum. Partnering with Unnathi in terms of funding is welcomed.',
            'Technology- application and software developer for automated data collection and analysis',
            'Volunteer- more hands ensure that events go on smoothly and efficiently. Volunteer for the activates at Unnathi to learn on the field',
            'Organiser- a chance to be a host for Unnathi at your workplace, apartment or community to spread the message of Build India Movement',
            'Resource person, Motivational speaker, Social media support'
          ],
          modalImagePath: [tileImg10, tileImg11, tileImg12]
        }
      }
    };
  }

  onTileClick = tileNumber => {
    this.setState({
      modalShow: true,
      selectedTile: this.state.modalContent[tileNumber]
    });
  };

  handleClose = () => {
    this.setState({ modalShow: false });
  };

  drawCarousal = tileData => {
    let imageArray = [];
    if (Object.keys(this.state.selectedTile).length > 0) {
      this.state.selectedTile.modalImagePath.map((key, value) => {
        imageArray.push(
          <Col lg={3}>
            <Image src={key} responsive />
          </Col>
        );
      });
    }
    return imageArray;
  };

  modalData = () => {
    let pointsArray = [];
    if (Object.keys(this.state.selectedTile).length > 0) {
      this.state.selectedTile.modalContent.map((key, value) => {
        pointsArray.push(<li className='tile-points'>{key}</li>);
      });
      return <ul className='tile-points-container'>{pointsArray}</ul>;
    }
  };

  modalContent = tileNumber => {
    return (
      <Modal show={this.state.modalShow} onHide={this.handleClose}>
        <Modal.Body>
          <div>
            <h3 className='tile-header'>
              {this.state.selectedTile.modalHeader}
            </h3>
          </div>
          <div className='modal-div'>{this.modalData()}</div>
          <Row className='image-container'>
            {this.drawCarousal(this.state.selectedTile)}
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='success'
            className='btn btn-outline-success'
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
      <Grid fluid={true} className='build-india-container'>
        <Row
          style={{
            background: '#333333',
            minHeight: '300px'
          }}
        >
          {this.state.imageArray.map((key, value) => {
            return (
              <Col
                lg={3}
                md={3}
                sm={6}
                xs={12}
                style={{
                  verticalAlign: 'middle',
                  alignItems: 'center'
                }}
              >
                <Image src={key} responsive />
              </Col>
            );
          })}
        </Row>
        <Row>
          <Col lg={12}>
            <h1>Build India Movement</h1>
          </Col>
        </Row>

        <Row className='collaborators'>
          <Col lg={12}>
            <h3>In Collaboration with</h3>
          </Col>
          <Col lg={4}>
            <Image
              src={GovImg}
              style={{ width: '84%', margin: '0 auto' }}
              responsive
              className='organisation-image'
            />
          </Col>
          <Col lg={4}>
            <Image
              src={nimhansImg}
              style={{ width: '44%', margin: '0 auto' }}
              responsive
              className='organisation-image'
            />
          </Col>
          <Col lg={4}>
            <Image
              src={rghusImg}
              style={{ width: '48%', margin: '0 auto' }}
              responsive
              className='organisation-image'
            />
          </Col>
        </Row>

        <Row className='row1'>
          <Col lg={4} md={4} sm={4} xs={4} />
          <Col
            lg={4}
            md={4}
            sm={4}
            xs={4}
            className='title'
            onClick={e => this.onTileClick('bi1')}
          >
            <h2>Why Build India Movement</h2>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4} />
        </Row>

        <Row className='row2'>
          <Col lg={2} md={2} sm={0} xs={0} className='left-useless-column' />
          <Col
            lg={2}
            md={2}
            sm={4}
            xs={4}
            className='title left'
            onClick={e => this.onTileClick('bi3')}
          >
            <h2>Targets of Build India Movement</h2>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4}>
            <Image src={BIMimg} responsive />
          </Col>
          <Col
            lg={2}
            md={2}
            sm={4}
            xs={4}
            className='title right'
            onClick={e => this.onTileClick('bi2')}
          >
            <h2>Build India Achievements</h2>
          </Col>
          <Col lg={2} md={2} sm={0} xs={0} className='right-useless-column' />
        </Row>

        <Row className='row3'>
          <Col lg={4} md={4} sm={4} xs={4} />
          <Col
            lg={4}
            md={4}
            sm={4}
            xs={4}
            className='title'
            onClick={e => this.onTileClick('bi4')}
          >
            <h2>Want to Contribute</h2>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4} />
        </Row>

        <Row className='vision'>
          <Col lg={12}>
            <h3>Vision</h3>
          </Col>
          <Col lg={12}>
            <p>{BIM_DATA.accordian.vision.description}</p>
          </Col>
        </Row>

        {this.modalContent()}
      </Grid>
    );
  }
}
