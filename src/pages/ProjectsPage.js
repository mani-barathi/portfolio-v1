import React, { useState, useEffect } from 'react'
import "../css/ProjectsPage.css"
import Project from "../components/Project"
import ProjectSmall from "../components/ProjectSmall"
import { withStyles } from "@material-ui/core/styles"
import { Typography, CircularProgress } from "@material-ui/core"

function ProjectsPage({ projects }) {
    const [mainProjects, setMainProjects] = useState([])
    const [secondaryProjects, setSecondaryProjects] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (projects?.length === 0) return
        setMainProjects(projects.filter(obj => obj.show))
        setSecondaryProjects(projects.filter(obj => !obj.show))
        setLoading(false)
    }, [projects])

    if (loading)
        return (
            <div className="projectspage__loader">
                <CircularProgress color="secondary" />
            </div>
        )

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

const CustomColorTypography = withStyles({
    root: {
        color: "#424949"
    }
})(Typography)

export default ProjectsPage
