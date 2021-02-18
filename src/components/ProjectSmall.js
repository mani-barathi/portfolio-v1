import React from 'react'
import "../css/ProjectSmall.css"
import { Typography, IconButton, Chip } from "@material-ui/core"
import GitHubIcon from '@material-ui/icons/GitHub'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'

function ProjectSmall({ data }) {
    return (
        <div className="projectsmall">

            <div className="projectsmall__Links">
                {data.githubLink &&
                    <IconButton href={data.githubLink} target="_blank" className="projectsmall__icon" >
                        <GitHubIcon />
                    </IconButton>
                }

                {data.liveLink &&
                    <IconButton href={data.liveLink} target="_blank" className="projectsmall__icon" >
                        <OpenInNewIcon />
                    </IconButton>
                }
            </div>

            <div className="projectsmall__text">
                <Typography variant="h6"> {data.name} </Typography>
                <Typography variant="subtitle1">
                    {data.description}
                </Typography>
            </div>

            <div className="projectsmall__techs" >
                {data.technologies?.map(tech => (
                    <span className="projectsmall__chip">
                        <Chip label={tech} size="small" clickable />
                    </span>
                ))}
            </div>

        </div>
    )
}

export default ProjectSmall
