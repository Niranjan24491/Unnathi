import React from "react";
import "./SocialIcons.scss";
import { Image, Modal, Button, Tabs, Tab } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import eventsIcon from "../../assets/images/calendar.png";

export default class SocialIcons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      eventsData: [
        {
          img: "",
          date: "24/04/1991",
          title: "sdoljkxaklsjdoajndklas",
          description:
            "adlkjaswekjhdkweqjvdnbmwehikudghmvwnehkdligykuvwhjbehkljdobkvwje,dalksm"
        },
        {
          img: "",
          date: "24/04/1991",
          title: "sdoljkxaklsjdoajndklas",
          description:
            "adlkjasdewjkdyekoxlgwbvehmjf,ujigewjk,howifkgj,bmwjekosafghjw,mkufdiyucgwehjalksm"
        },
        {
          img: "",
          date: "24/04/1991",
          title: "sdoljkxaklsjdoajndklas",
          description:
            "adlkjasdewjkdyekoxlgwbvehmjf,ujigewjk,howifkgj,bmwjekosafghjw,mkufdiyucgwehjalksm"
        },
        {
          img: "",
          date: "24/04/1991",
          title: "sdoljkxaklsjdoajndklas",
          description:
            "adlkjasdewjkdyekoxlgwbvehmjf,ujigewjk,howifkgj,bmwjekosafghjw,mkufdiyucgwehjalksm"
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
            <div className="modal-div">{this.drawEvents()}</div>
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
