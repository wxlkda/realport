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
          open: ""
        },
        "Takumi A.I.": {
          desc:
          "An endless runner game in PyGame, using a NEAT algorithm for evolving AI generations",
          techStack: "Python, PyGame",
          link: "https://github.com/wxlkda/TakumiAI",
          open: ""
        },
        "Verve": {
          desc:
          "A full-stack social media app, created to enable sharing of personalized content.",
          techStack: "PostgreSQL, SpringBoot, Angular.js",
          link: "https://github.com/wxlkda/verve",
          open: ""
        },
        "ASLingual": {
          desc:
          "An advanced deep learning tool transcribe ASL signs through spatial recognition.",
          techStack: "Python, TensorFlow, Keras, WASM",
          link: "https://github.com/wxlkda/aslingual",
          open: ""
        },
        "JobBase": {
          desc:
          "A job-tracking application designed to help me keep track of my co-op applications",
          techStack: "PostgreSQL, Express, React, Node",
          link: "https://github.com/wxlkda/jobbase"
        },
        "Neural Network Visualizer": {
          desc:
          "WPF tool for real-time neural network design, visualization & deep learning concepts.",
          techStack: "C#, WPF, AWS EC2",
          link: "https://github.com/wxlkda/neural-network"
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