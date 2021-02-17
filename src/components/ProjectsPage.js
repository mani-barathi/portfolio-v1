import React from 'react'
import "../css/ProjectsPage.css"
import Project from "./Project"
import { withStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

const CustomColorTypography = withStyles({
    root: {
        color: "#424949"
    }
})(Typography)

function ProjectsPage() {
    const projects = [{
        name: "Music Streaming App",
        description: "A Music Streaming Web App",
        imageUrl: "https://mani-barathi.github.io/assets/music-streaming-app.JPG",
        technologies: ['React', 'Material-UI', 'Firebase'],
        githubLink: "https://github.com/mani-barathi/Music-Streaming-App",
        liveLink: "https://music-streaming-app-4a392.web.app/"
    },
    {
        name: "Socialmedia",
        description: "A Website Inspired from Instagram",
        imageUrl: "https://mani-barathi.github.io/assets/socialmedia.jpg",
        technologies: ['Django', 'Bootstrap', 'AWS'],
        githubLink: "https://github.com/mani-barathi/Socialmedia",
        liveLink: "http://socialmediadjango.herokuapp.com/"
    }]

    return (
        <div className="projects" >
            <div className="projects__wrapper">
                <CustomColorTypography variant="h4" > Some Things I’ve Built</CustomColorTypography>

                <hr className="projects__hrDivider" />

                <Typography variant="subtitle1" >
                    Recently I've been playing around with Web Techologies like
                    <Typography color="secondary" component="span"> React </Typography>,
                    <Typography color="secondary" component="span"> Express </Typography>,
                    <Typography color="secondary" component="span"> Django </Typography>,
                    <Typography color="secondary" component="span"> Firebase </Typography>.
                </Typography>

                <div className="projects__container">
                    {projects.map(project => <Project key={project.name} data={project} />)}
                </div>
            </div>

            <h4 className="love-text">Made with 💙</h4>
        </div>
    )
}

export default ProjectsPage
