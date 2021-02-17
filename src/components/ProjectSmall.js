import React from 'react'
import "../css/ProjectSmall.css"
import { Typography, IconButton } from "@material-ui/core"
import GitHubIcon from '@material-ui/icons/GitHub'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'

function ProjectSmall({ data }) {
    return (
        <div className="projectsmall">

            <div className="projectsmall__Links">

                <IconButton href={data.githubLink} target="_blank" className="projectsmall__icon" >
                    <GitHubIcon />
                </IconButton>

                        &nbsp;&nbsp;&nbsp;

                <IconButton href={data.githubLink} target="_blank" className="projectsmall__icon" >
                    <OpenInNewIcon />
                </IconButton>
            </div>

            <div className="projectsmall__text">
                <Typography variant="h6"> {data.name} </Typography>
                <Typography variant="subtitle1">
                    {data.description}
                </Typography>
            </div>

        </div>
    )
}

export default ProjectSmall
