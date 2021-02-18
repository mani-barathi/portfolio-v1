import React from 'react'
import "../css/ContactPage.css"
import { Typography, TextField, Button } from "@material-ui/core"
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

function ContactPage() {

    const handleFormSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="contact" >
            <div className="contact__wrapper">
                <Typography variant="h4"> Get in touch </Typography>

                <form onSubmit={handleFormSubmit} className="contact__form" autoComplete="off">
                    <Typography color="textPrimary" variant="body1"> Whether you're interested in working on a project together or just want to say hello, feel free to leave a Message and I'll get back to you as soon as I can! </Typography>
                    <div className="contact__formGroup">
                        <TextField fullWidth label="Name" required />
                    </div>
                    <div className="contact__formGroup">
                        <TextField fullWidth label="Email" type="email" required />
                    </div>
                    <div className="contact__formGroup">
                        <TextField fullWidth label="Message" multiline rows={6} required />
                    </div>
                    <Button variant="contained" type="submit" color="secondary" fullWidth>Send</Button>
                </form>

                <div>
                    <Button target="_blank" href="https://github.com/mani-barathi" variant="contained"
                        startIcon={<GitHubIcon />} color="default">
                        GitHub
                    </Button>
                    &nbsp; &nbsp; &nbsp;
                    <Button target="_blank" href="https://www.linkedin.com/in/mani-bharathi-08/" variant="contained"
                        startIcon={<LinkedInIcon />} color="primary">
                        LinkedIn
                    </Button>
                </div>

            </div>

            <h4 className="love-text">Made with 💙</h4>
        </div >
    )
}

export default ContactPage
