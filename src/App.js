import './App.css';
import './css/Intro.css';
import './css/About.css';
import './css/Navigation.css';

import React from 'react';
//import Sidebar from "./otherjs/Sidebar"
//import HomeIcon from '@mui/icons-material/Home';
//TODO: Add anchor links after the thing is odne. In order to do this, we gotta add IDS




function Intro() {
  return (
      <div id="intro">
        <div className="intro-sentence sentence">
          <span className="intro-notname">
            hi, it's 
            <span className="intro-name special"><b> alwalid</b></span>
            .
          </span>
        </div>
        <span className="intro-rt sub-text">
          Making something innovative.
        </span>
        <span className="intro-inspirational body-text">
        Some inspiring text here that will inspire here single person that reads this message. Some inspiring text here that will inspire here single person that reads this message.   
        </span>
        <br></br>
        <div className="messageBox special">
          <b>Say Hi!</b>
        </div>
      </div>
  );
};

function About() {
  return (
    <div id="about">
      <span className="title">
      /about-me
      </span>
      <div className="about-info body-text">
        I am currently a <b>Computer Science</b> student studying at the <span className="special"><b> Toronto Metropolitan University</b></span> (formerly known as <span className="special">Ryerson</span>).
        Outside of school, I enjoy board games such as <b>chess</b> and <b>catan</b>. Frequently, I also   play online video games with my friends.
        <br></br>
        <br></br>
        Below are some of the technologies that I am familiar with:
      </div>
    </div>
  );
};

function Socials() {
  return (
    <div id="socials">
      <span className="title">
        socials
      </span>
    </div>
  );
};


class Navigation extends React.Component {
  constructor() {
    super();
    this.tabs = [
      {id: 0,name: "home",link : "#home"}, 
      {id: 1,name: "about",link : "#about"}, 
      {id: 2,name: "experience",link : "#experience"}, 
      {id: 3,name: "projects",link : "#projects"}, 
      {id: 4,name: "socials",link : "#socials"}
      ];


    this.state = {selectedColor : "#ccd6f6", notSelectedColor : "#8892b0"}; 

    this.styles = {
      selected: {
        textAlign: "center",
        marginLeft: "3%",
        color: this.state.selectedColor,
        textDecoration: "none"
      },
      default: {
        textAlign: "center",  
        marginLeft: "3%",
        color: this.state.notSelectedColor,
        textDecoration: "none"
      }
    };

    this.selected = 0;
    
    this.content = <a></a>;
  }
  changeColor = () => {
    this.setState({selectedColor : "#ccd6f6", notSelectedColor : "#8892b0"});
  }
  resetColor = () => {
    this.setState({selectedColor : "#8892b0", notSelectedColor : "#ccd6f6"});
  }
  returnJSX = (tab) => {
    if (tab.id === this.selected) {
      this.content = <a style = {this.styles.selected} href={tab.link}>{tab.name}</a>;
    }
    else {
      this.content = <a style = {this.styles.default} href={tab.link} onMouseOver={this.changeColor} onMouseLeave={this.resetColor}>{tab.name}</a>;
    }
    return this.content;
  }
  getTabs = () => {
    return this.tabs.map(tab => this.returnJSX(tab));
  }

  render() {
    return (
      <li className="tab-top">
        {this.getTabs()}
      </li>
    )
  };
};



export default function App() {
  return (
    <div className="App">
      <Navigation></Navigation>  
      <div id="content">
        <Intro></Intro>
        <About></About>
        <div className="footer">
        <center className="footer-text">
          Made and designed by Alwalid Khan.
        </center>
        <br></br>
        <center className="footer-text">
          All rights reserved ©.
        </center>
      </div>
      </div>  
    </div>
  );
}

