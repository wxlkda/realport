import './App.css';
import About from "./js/About.js";
import Intro from "./js/Intro.js";
import Experience from "./js/Experience.js";
import Projects from "./js/Projects.js";
import Navigation from "./js/Navigation.js";

import FadeInSection from './js/FadeInSection';

import React from "react";



export default function App() {
  return (
    <div className="App">
        <div id="content">
        <Intro/>
        <About/>
        <Projects/>
        <FadeInSection>
          <Experience/>
        </FadeInSection>
          
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

