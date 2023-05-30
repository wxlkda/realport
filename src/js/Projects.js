import '../css/projects.css';

import FolderOpenRoundedIcon from '@mui/icons-material/FolderOpenRounded';
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

import FadeInSection from './FadeInSection';
import useNav from "../hooks/useNav";


function Projects() {
    
  
    const projectsRef = useNav("projects");
    const projectsList = {
        "Data Visualizer": {
          desc:
          "A website used to visualize numerous algorithms on arrays, graphs, and binary trees.",
          techStack: "HTML / CSS, Javascript",
          link: "https://github.com/wxlkda/datavis",
          open: "https://data.alwalidkhan.com/"
        },
        "Takumi A.I.": {
          desc:
          "A 2D runner game made in PyGame, featuring a NEAT algorithm to run multiple generations of AI stimulations.",
          techStack: "Python, PyGame",
          link: "https://github.com/wxlkda/TakumiAI",
          open: ""
        },
        "Verve": {
          desc:
          "A dynamic social networking app, created to enable sharing of personalized content.",
          techStack: "Express.js, MongoDB, Node.js, React.js",
          link: "",
          open: ""
        },
        "Equinox": {
          desc:
          "A discord bot featuring moderation and unique image manipulation in Python.",
          techStack: "Python, SQLite, SQL, Pillow, Discord.py",
          link: "",
          open: ""
        }
      };
    return (
      <div ref = {projectsRef} id="projects">
          <span className="projects-title">
            <b>/projects</b>
          </span>
        <div className="project-container">
            <ul className="projects-grid">
                {Object.keys(projectsList).map((key, i) => (
                <FadeInSection delay={`${i + 1}00ms`} key={i}>
                    <li className="projects-card">
                        <div className="card-header">
                            <div className="folder-icon">
                                <FolderOpenRoundedIcon style={{ fontSize: 35 }}></FolderOpenRoundedIcon>
                            </div>
                            <span className="external-links">
                                {projectsList[key]["link"] && (
                                  <a className="github-icon" href={projectsList[key]["link"]} rel="noopener noreferrer" target="_blank">
                                    <GitHubIcon style = {{fontSize: 23}}></GitHubIcon>
                                  </a>
                                )}
                                {projectsList[key]["open"] && (
                                  <a className="open-icon" href={projectsList[key]["open"]} rel="noopener noreferrer" target="_blank">
                                    <OpenInBrowserIcon style = {{fontSize: 25}}></OpenInBrowserIcon>
                                  </a>
                                )}
                            </span>
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