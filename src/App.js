import './App.css';
import './css/intro.css';
import './css/about.css';
import './css/navigation.css';
import './css/socials.css';
import './css/experience.css';
import './css/projects.css';

import React from 'react';
import { useContext } from 'react';
import useNav from "./hooks/useNav";
import { NavContext } from './context/NavContext'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';




function Intro() {
  const introRef = useNav("intro");
  return (
      <div ref = {introRef} id="intro">
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
  const aboutRef = useNav("about");
  const me = require('./images/me.png');
  return (
    <div ref = {aboutRef} id="about">
      <span className="title">
        <b>/about-me</b>
      </span>
      <div className="about-info body-text">
        <img src={me} className="about-image" height="320" width="320" alt="me"></img>
        I am currently a <b>Computer Science</b> student studying at the <span className="special"><b> Toronto Metropolitan University</b></span> (formerly known as <span className="special">Ryerson</span>).
        I plan to get a graduate with a Bachelors degree in <b>Computer Science</b> and aspire to become a <b>Software Engineer</b> at a good company.
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
          <li>DevOps</li>
        </ul>
        At home, I enjoy playing board games such as <span className="special">chess</span> and <span className="special">catan</span>. I sometimes also play online video games with my friends.
      </div>
    </div>
  );
};

function Experience() {
  const experienceRef = useNav("experience");
  return (
    <div ref = {experienceRef} id="experience">
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
  const projectsRef = useNav("projects");
  return (
    <div ref = {projectsRef} id="projects">
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
};


function Navigation() {
  let { activeLinkId } = useContext(NavContext);
  let tabs = ["intro", "about", "experience", "projects"]

  const returnJSX = (content) => {
    let finalThing = content.map((content) => 
    <div className = {activeLinkId === content ? `${content}BarSelected` : `${content}Bar` } onClick = {handleClickNav}></div>
    );
    return finalThing;
  }

  const handleClickNav = (e) => {
    const class_name = e.target.className;
    document.getElementById(class_name.substring(0,class_name.length - 3)).scrollIntoView({ behavior: "smooth", easing: "linear" });
  }


  return ( 
    <div id = "sideTabs">
      {returnJSX(tabs)}
      <div className = "socialsBar">
        <a href="https://github.com/wxlkda" className="githubIcon" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/alwalidkhan/" className="linkedinIcon" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon/>
        </a>
        <a href="mailto:alwalid23dec@gmail.com?subject=Hello!" className="emailIcon" rel="noopener noreferrer">
          <EmailIcon />
        </a>
      
        
        
      </div>
    </div>
  );

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

