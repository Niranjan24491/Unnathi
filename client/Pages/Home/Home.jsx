import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import backgroundImg from '../../assets/images/bg-masthead-1.png';
import logoImg from '../../assets/images/unnathi_logo.png';

import './Home.scss';

const HOME_DATA = {
  title: 'Unnathi Healing Foundation',
  subTitle: `- Energising Lives`
};

export default class Home extends Component {
  render() {
    var background = { backgroundSize: 'cover' };
    return (
      <Row>
        <Col lg={12} sm={12} md={12} xs={12} className='Home'>
          <Image style={background} responsive src={backgroundImg} />
          <div className='logo-holder'>
            <Image responsive src={logoImg} className='logo-image' />
          </div>
          <h1 className='title'>{HOME_DATA.title}</h1>
          <h3 className='sub-title'>{HOME_DATA.subTitle}</h3>
        </Col>
      </Row>
    );
  }
}
