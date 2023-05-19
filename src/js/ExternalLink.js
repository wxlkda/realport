import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

function ExternalLinks(props) {
  return (
    <span className="external-links">
      {props.githubLink && (
        <a className="github-icon" href={props.githubLink}>
          <GitHubIcon
            style={{
              fontSize: 20,
              color: "var(--cloudy-white)"
            }}
          ></GitHubIcon>
      </a>
      )}
      {props.openLink && (
        <a className="open-icon" href={props.openLink}>
          <OpenInBrowserIcon
            style={{
              fontSize: 25,
              color: "var(--cloudy-white)"
            }}
          ></OpenInBrowserIcon>
        </a>
      )}
    </span>
  );
}
  
export default ExternalLinks;