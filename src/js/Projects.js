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
          "A website used to visualize numerous algorithms on arrays, graphs, and binary trees. Created to highlight my knowledge of data structures and algorithms.",
          techStack: "HTML / CSS, Javascript",
          link: "https://github.com/wxlkda/datavis",
          open: "https://data.alwalidkhan.com/"
        },
        "Takumi A.I.": {
          desc:
          "A 2D runner game made in PyGame, where the goal is to survive the longest against obstacles. Features a Neuroevolution of Augmenting Topologies algorithm.",
          techStack: "Python",
          link: "https://github.com/wxlkda/TakumiAI",
          open: ""
        },
        "Verve": {
          desc:
          "A dynamic social networking app, created to enable sharing of personalized content and fostered for interactive experiences. Allows users to build conversations and share their experiences.",
          techStack: "Express.js, MongoDB, Node.js, React.js",
          link: "",
          open: ""
        },
        "Equinox": {
          desc:
          "A discord bot made during the COVID-19 pandemic using Python. Serves as a moderation bot, with the intention to help keep servers secure from bots/raiders hosted on a Heroku Server",
          techStack: "Python, SQLite, SQL, Pillow",
          link: "",
          open: ""
        }
      };
    return (
      <div ref = {projectsRef} id="projects">
          <span className="projects-title">
            <b>/software-innovations</b>
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