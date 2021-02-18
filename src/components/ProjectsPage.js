import React, { useState, useEffect } from 'react'
import "../css/ProjectsPage.css"
import Project from "./Project"
import ProjectSmall from "./ProjectSmall"
import { withStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

import sanity from "../sanity"

const CustomColorTypography = withStyles({
    root: {
        color: "#424949"
    }
})(Typography)

function ProjectsPage() {
    const [mainProjects, setMainProjects] = useState([])
    const [secondaryProjects, setSecondaryProjects] = useState([])

    useEffect(() => {
        sanity.fetch(`*[_type == 'project']{ ..., 'imageUrl': image.asset->url }`)
            .then(result => {
                console.log(result)
                setMainProjects(result.filter(obj => obj.show))
                setSecondaryProjects(result.filter(obj => !obj.show))
            })
    }, [])

    // const projects = [{
    //     name: "Music Streaming App",
    //     description: "A Music Streaming Web App",
    //     imageUrl: "https://mani-barathi.github.io/assets/music-streaming-app.JPG",
    //     technologies: ['React', 'Material-UI', 'Firebase'],
    //     githubLink: "https://github.com/mani-barathi/Music-Streaming-App",
    //     liveLink: "https://music-streaming-app-4a392.web.app/"
    // },
    // {
    //     name: "Socialmedia",
    //     description: "A Website Inspired from Instagram",
    //     imageUrl: "https://mani-barathi.github.io/assets/socialmedia.jpg",
    //     technologies: ['Django', 'Bootstrap', 'AWS'],
    //     githubLink: "https://github.com/mani-barathi/Socialmedia",
    //     liveLink: "http://socialmediadjango.herokuapp.com/"
    // }]

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
                    {mainProjects.map(project => <Project key={project._id} data={project} />)}
                </div>
            </div>
            <div className="projects__wrapper">
                <CustomColorTypography variant="h5" > Other Noteworthy Projects</CustomColorTypography>

                <hr className="projects__hrDivider" />

                <div className="projects__small">
                    {secondaryProjects.map(project => <ProjectSmall key={project._id} data={project} />)}
                </div>
            </div>

        </div>
    )
}

export default ProjectsPage
