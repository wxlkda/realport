import '../css/about.css';

import useNav from "../hooks/useNav";
import FadeInSection from "./FadeInSection.js";

function About() {
    const aboutRef = useNav("about");
    const me = require('../images/me.png');
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
            <FadeInSection>
              <ul className="skills">
                <li>HTML5 & CSS</li>
                <li>Javascript</li>
                <li>Python</li>
                <li>AWS</li>
                <li>React</li>
                <li>C++</li>
                <li>MongoDB</li>
                <li>Agile & DevOps</li>
              </ul>
            </FadeInSection>
            At home, I enjoy playing board games such as <span className="special">chess</span> and <span className="special">Catan</span>. I also play online video games with my friends.
          </div>
          <div className="about-image">
            <img src={me} height="300" width="300" alt="me"></img>
          </div>
        </div>
      </div>
    );
  };


export default About;