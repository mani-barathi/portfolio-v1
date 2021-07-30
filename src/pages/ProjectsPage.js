import React, { useState, useEffect } from "react";
import "../css/ProjectsPage.css";
import Project from "../components/Project";
// import ProjectSmall from "../components/ProjectSmall";
import { withStyles } from "@material-ui/core/styles";
import { Typography, CircularProgress } from "@material-ui/core";

function ProjectsPage({ projects }) {
  const [loading, setLoading] = useState(true);
  const [mainProjects, setMainProjects] = useState([]);

  useEffect(() => {
    if (projects?.length === 0) return;
    setMainProjects(projects.filter((obj) => obj.show));
    setLoading(false);
  }, [projects]);

  if (loading)
    return (
      <div className="projectspage__loader">
        <CircularProgress color="secondary" />
      </div>
    );

  return (
    <div className="projects">
      <div className="projects__wrapper">
        <CustomColorTypography variant="h5">
          Some Things I’ve Built
        </CustomColorTypography>

        <hr className="projects__hrDivider" />

        <div className="projects__container">
          {mainProjects.map((project) => (
            <Project key={project._id} data={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

const CustomColorTypography = withStyles({
  root: {
    color: "#424949",
  },
})(Typography);

export default ProjectsPage;
