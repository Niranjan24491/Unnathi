import React from "react";
import "./SocialIcons.scss";
import { Image, Modal, Button, Tabs, Tab } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import eventsIcon from "../../assets/images/calendar.png";

import event1 from "../../assets/images/events/event1.png";
import event2 from "../../assets/images/events/event2.png";
import event3 from "../../assets/images/events/event3.png";
import event4 from "../../assets/images/events/event4.png";
import event5 from "../../assets/images/events/event5.png";
import event6 from "../../assets/images/events/event6.png";
import event7 from "../../assets/images/events/event7.png";
import event8 from "../../assets/images/events/event8.png";
import event9 from "../../assets/images/events/event9.png";

export default class SocialIcons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      eventsData: [
        {
          img: event1,
          date: "Jan 1st 2016",
          title: "Hosa Chiguru Hale Beru",
          description: ""
        },
        {
          img: event2,
          date: "Aug 7th 2016",
          title:
            "Donating Industrial Washing Machine to District Child Protection Unit, Bangalore",
          description: ""
        },
        {
          img: event3,
          date: "Aug 7th 2016",
          title:
            "Academic Stress Management Session by Medical Students at BEL High School, Jalahalli",
          description: ""
        },
        {
          img: event4,
          date: "Nov 19th 2016",
          title: "Healing Camp at AMBA",
          description: "Centre for differently abled children"
        },
        {
          img: event5,
          date: "Jan 8th 2017",
          title: "Aarogya Santhe",
          description: "Importance of helathy daily routine – public awareness"
        },
        {
          img: event6,
          date: "Feb 11th 2017",
          title: "Life is my Choice",
          description: "Preventing academic stress and Will for Transformation"
        },
        {
          img: event7,
          date: "Jan 5th 2018",
          title: "Teen Meet",
          description: ""
        },
        {
          img: event8,
          date: "Apr 21st 2018",
          title: "Holistic approach to healthy living in students",
          description: "Bangalore Medical College"
        },
        {
          img: event9,
          date: "Nov 14th 2018",
          title: "Build India Movement counselling ",
          description: ""
        }
      ]
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

  drawEvents = () => {
    let eventArray = [];
    this.state.eventsData.forEach(data => {
      eventArray.push(
        <div className="event-card">
          <div className="image">
            <Image src={data.img} responsive />
          </div>
          <div className="details">{data.date}</div>
          <div className="title">
            <h4>{data.title}</h4>
          </div>
          <div className="description">
            <p>{data.description}</p>
          </div>
        </div>
      );
    });
    return eventArray;
  };

  modalContent = () => (
    <Modal show={this.state.modalShow} onHide={this.handleClose}>
      <Modal.Body>
        <div>
          <h3 className="tile-header">Events</h3>
        </div>
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Concluded Events">
            <div className="modal-div">{this.drawEvents()}</div>
          </Tab>
          <Tab eventKey="profile" title="Upcoming Events">
            <h3>upcoming events</h3>
            {/* <div className="modal-div">{this.drawEvents()}</div> */}
          </Tab>
        </Tabs>
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

  onIconClick = network => {
    switch (network) {
      case "facebook": {
        window.open("https://www.facebook.com/unnathi.healing.5", "_blank");
        break;
      }
      // case 'google': {
      //   window.open(url, '_blank');
      //   break;
      // }
      // case 'twitter': {
      //   window.open(url, '_blank');
      //   break;
      // }
      case "youtube": {
        window.open(
          "https://www.youtube.com/channel/UCAVdtNKZE4LgoFJmKaMqd4Q",
          "_blank"
        );
        break;
      }
    }
  };

  render() {
    return (
      <div className="social-container">
        <span className="events-div">Events</span>
        <div
          className="events-icon"
          onClick={e => {
            this.onEventsClick(e);
          }}
        >
          <Image src={eventsIcon} responsive rounded />
        </div>
        <SocialIcon
          network="facebook"
          url=""
          onClick={e => this.onIconClick("facebook")}
          fgColor="#ffffff"
        />
        {/* <SocialIcon network="google" url="" onClick={(e) => this.onIconClick('google')} fgColor="#ffffff" />
        <SocialIcon network="twitter" url="" onClick={(e) => this.onIconClick('twitter')} fgColor="#ffffff" /> */}
        <SocialIcon
          network="youtube"
          url=""
          onClick={e => this.onIconClick("youtube")}
          fgColor="#ffffff"
        />
        {this.modalContent()}
      </div>
    );
  }
}
