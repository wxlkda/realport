import '../css/projects.css';

import FolderOpenRoundedIcon from '@mui/icons-material/FolderOpenRounded';

import ExternalLinks from './ExternalLink';
import FadeInSection from './FadeInSection';
import useNav from "../hooks/useNav";


function Projects() {
    
  
    const projectsRef = useNav("projects");
    const projectsList = {
        "Proj 1": {
          desc:
            "A placeholder for one of the projects I created. This placeholder must be two lines else everything breaks.",
          techStack: "Samp tech stack",
          link: "https://google.ca",
          open: "https://google.ca"
        },
        "Proj. 2": {
          desc:
          "A placeholder for one of the projects I created. This placeholder must be two lines else everything breaks.",
          techStack: "Javascript, HTML / CSS",
          link: "https://google.ca",
          open: "https://google.ca"
        },
        "Proj. 3": {
          desc:
          "A placeholder for one of the projects I created. This placeholder must be two lines else everything breaks.",
          techStack: "Javascript, HTML / CSS",
          link: "https://google.ca",
          open: "https://google.ca"
        },
        "Proj. 4": {
          desc:
          "A placeholder for one of the projects I created. This placeholder must be two lines else everything breaks.",
          techStack: "Javascript, HTML / CSS",
          link: "https://google.ca",
          open: "https://google.ca"
        }
      };
    return (
      <div ref = {projectsRef} id="projects">
          <span className="title">
            <b>/software-innovations</b>
          </span>
          <div className="project-container">
            <ul className="projects-grid">
                {Object.keys(projectsList).map((key, i) => (
                <FadeInSection delay={`${i + 1}00ms`} key={i}>
                    <li className="projects-card">
                        <div className="card-header">
                            <div className="folder-icon">
                                <FolderOpenRoundedIcon tyle={{ fontSize: 35 }}></FolderOpenRoundedIcon>
                            </div>
                            <ExternalLinks githubLink={projectsList[key]["link"]} openLink={projectsList[key]["open"]} ></ExternalLinks>
                        </div>

                        <div className="card-title">{key}</div>
                        <div className="card-desc">{projectsList[key]["desc"]}</div>
                        <div className="card-tech">{projectsList[key]["techStack"]}</div>
                    </li>
                </FadeInSection>
                ))}
            </ul>
        </div>
        </div>
    );
  };

export default Projects;