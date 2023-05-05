import '../css/navigation.css';

import { useContext } from "react";
import { NavContext } from '../context/NavContext';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';



function Navigation() {
    let { activeLinkId } = useContext(NavContext);
    let tabs = ["intro", "about", "projects", "experience"]
    let labels = ["Home", "About me", "Projects", "Experience"]

    const returnJSX = (content) => {
      
      let finalThing = content.map((content, i) =>
      <span key={i} className = {activeLinkId === content ? `${content}Selected bar` : `${content} bar` } data-label = {content} onClick = {handleClickNav}> {labels[i]}</span>
      );
      return finalThing;
    }
  
    const handleClickNav = (e) => {
      const class_name = e.target.className;
      try {
        document.getElementById(class_name.substring(0,class_name.length - 4)).scrollIntoView({ behavior: "smooth", easing: "linear" });
      } catch (error) {
        if (!(error instanceof TypeError)) {
          throw error;
        }
      }
      
    }
  
  
    return ( 
      <div id = "sideTabs">
        {returnJSX(tabs)}
        <div className = "socials bar s" data-label="socials">
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

export default Navigation;