import React from 'react';
import './NavBar.scss';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    openModal = () => {
        this.props.openModal();
    }

    onNavClick = (e) => {
        // const tesNode = document.getElementById('about');
        // window.scrollTo(0, tesNode.offsetTop);
        this.props.onNavClick(e);
        e.stopPropagation();
    }

    render() {
        return (
            <nav role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <li><a href="#home" onClick={(e) => {this.onNavClick(e)}}> HOME </a></li>
                        <li><a href="#about" onClick={(e) => {this.onNavClick(e)}}>BUILD INDIA MOVEMENT</a></li>
                        <li><a href="#mind" onClick={(e) => {this.onNavClick(e)}}>MIND PALACE</a></li>
                        <li><a href="#team" onClick={(e) => {this.onNavClick(e)}}>TEAM</a></li>
                        <li><a href="#story" onClick={(e) => {this.onNavClick(e)}}>SUCCESS STORIES</a></li>
                        <li><a href="#contact" onClick={(e) => {this.onNavClick(e)}}>CONTACT</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}