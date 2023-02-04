import './App.css';
import './css/Intro.css'
import './css/About.css'
import './css/Navigation.css'
import React, { useState } from "react";
//import Sidebar from "./otherjs/Sidebar"
//import HomeIcon from '@mui/icons-material/Home';
//TODO: Add anchor links after the thing is odne. In order to do this, we gotta add IDS


const tabs = [{
  id: 0,
  name: "home",
  link : "#home"
}, {
  id: 1,
  name: "about",
  link : "#about"
}, {
  id: 2,
  name: "experience",
  link : "#experience"
}, {
  id: 3,
  name: "projects",
  link : "#projects"
}, { 
  id: 4,
  name: "socials",
  link : "#socials"
}];

const styles = {
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

const selected = 0;


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
      </div>
  );
};

function About() {
  return (
    <div id="about">
      <span className="title">
        about me
      </span>
      <div className="about-info body-text">
        Some inpsiring text about me and the university I go to. Some of the frameworks I have worked with include:
        <ul className="body-text">
          <li>Python</li>
          <li>Not Python</li>
          <li>Java</li>
        </ul>
      </div>
    </div>
  );
};

function Navigation() {

  function changeColor(e) {
    e.target.style.color = "#ccd6f6";
  }

  function resetColor(e) {
    e.target.style.color = "#8892b0";
  }

  function returnJSX(tab) {
    let content = <a></a>;
    if (tab.id === selected) {
      content = <a style = {styles.selected} href={tab.link}>{tab.name}</a>;
    }
    else {
      content = <a style = {styles.default} href={tab.link} onMouseOver={changeColor} onMouseLeave={resetColor}>{tab.name}</a>;
    }
    return content;
  };

  const topTabs = tabs.map(tab => returnJSX(tab));
  return (
    <li className="tab-top">
      {topTabs}
    </li>
  );
}



export default function App() {
  return (
    <div className="App">
      <Navigation></Navigation>  
      <div id="content">
        <Intro></Intro>
        <About></About>
      </div>
      
    </div>
  );
}

