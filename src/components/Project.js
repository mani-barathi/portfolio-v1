import React from "react";
import "../css/Project.css";
import { Typography, Button, Chip } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

function Project({ data }) {
  return (
    <div className="project">
      <img src={data.imageUrl} alt="" className="project__image" />

      <div className="project__title">
        <Typography variant="h6" align="left" color="secondary">
          {data.name}
        </Typography>
      </div>

      <div className="project__info">
        <Typography variant="h6" align="left" color="secondary">
          {data.name}
        </Typography>
        <Typography variant="subtitle1" align="left">
          {data.description}
        </Typography>

        <div className="project__infoChipsContainer">
          {data.technologies?.map((tech) => (
            <div className="project__infoChip">
              <Chip size="small" label={tech} color="secondary" />
            </div>
          ))}
        </div>

        <div className="project__infoLinks">
          {data.githubLink && (
            <Button
              href={data.githubLink}
              target="_blank"
              size="small"
              startIcon={<GitHubIcon />}
              variant="contained"
            >
              GitHub
            </Button>
          )}
          &nbsp;&nbsp;&nbsp;
          {data.liveLink && (
            <Button
              href={data.liveLink}
              target="_blank"
              size="small"
              startIcon={<OpenInNewIcon />}
              variant="contained"
            >
              Live
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
