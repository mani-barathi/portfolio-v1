import React from "react";
import "../css/WorksPage.css";
import Project from "../components/Project";
import Blog from "../components/Blog";
import { withStyles } from "@material-ui/core/styles";
import { Typography, CircularProgress } from "@material-ui/core";

function WorksPage({ projects, blogs }) {
  if (!projects.length && !blogs.length)
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
          {projects.map((project) => (
            <Project key={project._id} data={project} />
          ))}
        </div>

        <CustomColorTypography variant="h5">Blogs</CustomColorTypography>
        <hr className="projects__hrDivider" />
        <div className="blogs__container">
          {blogs?.map((blog) => (
            <Blog key={blog._id} data={blog} />
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

export default WorksPage;
