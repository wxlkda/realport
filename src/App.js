import './App.css';
import './css/Intro.css';
import './css/About.css';
import './css/Navigation.css';
import './css/Socials.css';
import './css/Experience.css';
import './css/Projects.css';

import React from 'react';
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
        <b>/about-me</b>
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

function Experience() {
  return (
    <div id="experience">
      <span className="title">
        <b>/experience</b>
      </span>
      <div className="experience-info body-text">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was popularised 
      in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
      and more recently with desktop publishing software like Aldus PageMaker including
      versions of Lorem Ipsum.
      </div>
    </div>
  );
};

function Projects() {
  return (
    <div id="projects">
      <span className="title">
        <b>/software-creations</b>
      </span>
      <div className="project-info body-text">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was popularised 
      in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
      and more recently with desktop publishing software like Aldus PageMaker including
      versions of Lorem Ipsum.
      </div>
    </div>
  );
};



function Socials() {
  return (
    <div id="socials">
      <span className="title">
      <b>/socials</b>
      </span>
      <div className="social-info body-text">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was popularised 
      in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
      and more recently with desktop publishing software like Aldus PageMaker including
      versions of Lorem Ipsum.
      </div>
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



    this.styles = {
      selected: {
        textAlign: "center",
        marginLeft: "3%",
        color: "#ccd6f6",
        textDecoration: "none"
      },
      default: {
        textAlign: "center",  
        marginLeft: "3%",
        color: "#8892b0",
        textDecoration: "none"
      }
    };

    this.selected = 0;
    
    this.content = <a></a>;
  }
  changeColor = (event) => {
    event.target.style.color = "#ccd6f6";
    
  }
  resetColor = (event) => {
    event.target.style.color = "#8892b0";
  }
  returnJSX = (tab) => {
    if (tab.id === this.selected) {
      this.content = <a style = {this.styles.selected} href={tab.link} >{tab.name}</a>;
    }
    else {
      this.content = <a style = {this.styles.default} href={tab.link} onMouseOver= {event => this.changeColor(event)} onMouseLeave={event => this.resetColor(event)}>{tab.name}</a>;
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
        <Experience></Experience>
        <Projects></Projects>
        <Socials></Socials>
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

