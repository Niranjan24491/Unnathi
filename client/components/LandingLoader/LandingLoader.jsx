import React from 'react';
import './LandingLoader.scss';

export default class LandingLoader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="LandingLoader" style={{display: this.props.displayLanding}}>
                <h1>Aatma</h1>
                <h3>Namaste</h3>
            </div>
        );
    }
}