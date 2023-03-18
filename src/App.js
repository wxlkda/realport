import './App.css';
import './css/Intro.css';
import './css/About.css';
import './css/Navigation.css';
import './css/Socials.css';
import './css/Experience.css';
import './css/Projects.css';

import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
//TODO: Add anchor links after the thing is odne. In order to do this, we gotta add IDS
//DONEEEEE

const me = require('./images/me.png');



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
        <img src={me} className="about-image" height="320" width="320" alt="me"></img>
        I am currently a <b>Computer Science</b> student studying at the <span className="special"><b> Toronto Metropolitan University</b></span> (formerly known as <span className="special">Ryerson</span>).
        I plan to get a graduate with a Bachelors degree in <b>Computer Science</b> and aspire to become a <b>Software Engineer</b> at a high-level company.
        <br></br>
        <br></br>
        Below are some of the <b>technologies</b> that I am familiar with:
        <ul className="skills">
          <li>Javascript</li>
          <li>HTML & CSS</li>
          <li>Python</li>
          <li>AWS</li>
          <li>React</li>
          <li>Java</li>
          <li>MongoDB</li>
          <li>Git</li>
        </ul>
        At home, I enjoy playing board games such as <span className="special">chess</span> and <span className="special">catan</span>. I sometimes also play online video games with my friends.
      </div>
    </div>
  );
};

function Experience() {
  return (
    <span id="experience">
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
    </span>
  );
};

class Projects extends React.Component {
  constructor() {
    super();
    this.projects = [
      {}
    ]
  }
  render() {
    return (
      <div id="projects">
        <span className="title">
        <b>/software-innovations</b>
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
  }
}


class Navigation extends React.Component {
  constructor() {
    super();
    this.tabs = ["home", "about-me", "experience", "projects"]
    this.state = {currentSection : "home"}
  }

  render() {
    return (
      <div id = "sideTabs">
        <a href="about">
          <div className = "tab1"></div>
        </a>
        <div className = "tab2">
        </div>
        <div className = "tab3">
        </div>
        <div className = "tab4">
        </div>
        <div className = "tab5">
        </div>
      </div>
    );
  }

}


export default function App() {
  return (
    <div className="App">
      <div id="content">
        <Intro></Intro>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
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
      <Navigation></Navigation>  
    </div>
  );
}

