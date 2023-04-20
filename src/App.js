import './App.css';
import './css/intro.css';
import './css/about.css';
import './css/navigation.css';
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
        <div className="intro-sentence">
          <span>
            hi, it's 
            <span className="intro-name"><b> alwalid</b></span>
            .
          </span>
        </div>
        <div className="intro-rt">
          Making something innovative.
        </div>
        <span className="intro-inspirational">
        Some inspiring text here that will inspire here single person that reads this message. Some inspiring text here that will inspire here single person that reads this message.   
        </span>
        <br></br>
        
        <a className="messageBox" href="mailto:alwalid23dec@gmail.com?subject=Hello!" rel="noopener noreferrer">
          <span className="messageBoxText">
          
          <svg class="MuiSvgIcon-root sayEmail" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"></path></svg>
          Say hi!
          </span>
        </a>
      </div>
  );
};

function About() {
  const aboutRef = useNav("about");
  const me = require('./images/me.png');
  return (
    <div ref = {aboutRef} id="about">
      <div className="about-title">
        <b>/about-me</b>
      </div>
      <div className="about-info">
        <div className = "about-content">
          I am currently a <b>Computer Science</b> undergraduate studying at the <span className="special"><b><a href="https://www.torontomu.ca/" target="_blank" rel="noopener noreferrer" className=" special isLinked">  Toronto Metropolitan University</a></b></span> (formerly known as <span className="special">Ryerson</span>).
          I plan to graduate with a Bachelors degree in <b>Computer Science</b> and aspire to become a <b>Software Engineer</b> at a proficient company.
          <br></br>
          <br></br>
          Below are some of the <b>technologies</b> that I am familiar with:
          <ul className="skills">
            <li>HTML5 & CSS</li>
            <li>Javascript</li>
            <li>Python</li>
            <li>AWS</li>
            <li>React</li>
            <li>Java</li>
            <li>MongoDB</li>
            <li>Agile & DevOps</li>
          </ul>
          At home, I enjoy playing board games such as <span className="special">chess</span> and <span className="special">Catan</span>. I also play online video games with my friends.
        </div>
        <div className="about-image">
          <img src={me} height="300" width="300" alt="me"></img>
        </div>
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
      <div className="experience-info">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was popularised 
      in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
      and more recently with desktop publishing software like Aldus PageMaker including
      versions of Lorem Ipsum.
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
        orem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was popularised 
        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
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
    <div className = {activeLinkId === content ? `${content}Selected` : `${content}Bar` } data-label = {content} onClick = {handleClickNav}></div>
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
      <div className = "socialsBar" data-label="socials">
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
          <Projects></Projects>
          <Experience></Experience>
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

